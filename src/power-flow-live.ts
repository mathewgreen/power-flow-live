/* eslint-disable no-nested-ternary */
import { HomeAssistant, stateIcon } from "custom-card-helpers";
import { HassEntity } from 'home-assistant-js-websocket';
import { css, html, LitElement, svg, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { PowerFlowLiveConfig } from "./power-flow-live-config.js";
import {
  coerceNumber,
  round,
} from "./utils.js";
import { logError } from "./logging.js";
import { CalculatedElementDef } from "./type.js";

@customElement("power-flow-live")
export class PowerFlowLive extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config = {} as PowerFlowLiveConfig;

  setConfig(config: PowerFlowLiveConfig): void {
    if (!config.elements || (!config.elements.length)) {
      throw new Error("At least one entity must be defined");
    }
    ['top', 'bottom'].forEach(position => {
      if (config.elements.filter(element => element.position === position).length > 2) {
        throw new Error(`Maximum 2 elements allowed in ${position} row.`);
      }
    })
    this._config = {
      ...config,
      speed: coerceNumber(config.speed, 5),
    }
  }

  public getCardSize(): Promise<number> | number {
    return 3;
  }

  private getEntity = (entityId: string | undefined | null):  HassEntity | undefined => {
    const entity = entityId ? this.hass.states[entityId] : undefined;
    if (!entity || !entity.state) {
      logError(`entity "${entityId ?? "Unknown"}" is not available or misconfigured`);
      return undefined;
    }
    return entity;
  }

  private previousDur: { [name: string]: number } = {};

  private getElementEntityId  = (element: CalculatedElementDef): string | undefined =>
    element.value
      ? typeof element.value === 'string'
        ? element.value
        : element.value.toSystem || element.value.fromSystem || undefined
      : undefined;

  private getElementEntity = (element: CalculatedElementDef): HassEntity | undefined =>
    this.getEntity(this.getElementEntityId(element))

  private getElementIconId = (element: CalculatedElementDef): string => {
    if(element.icon) return element.icon;
    const entity = this.getElementEntity(element);
    if (!entity) return 'mdi:eye';
    return entity ? stateIcon(entity) : 'mdi:eye';
  }

  private getElementColor = (element: CalculatedElementDef): string => {
    if(!element.color) return 'var(--primary-text-color)';
    return element.color;
  }

  private isElementUnavailable = (element: CalculatedElementDef): boolean => {
    const entity = this.getElementEntity(element);
    if (!entity) return true;
    const state = entity.state;
    return state === 'unavailable' || state === 'unknown';
  }

  private getElementOpacity = (element: CalculatedElementDef, preventFade: boolean = false): number => {
    if (!element.fade || element.fade === 'never') return 1;
    if (element.fade === 'unavailable') {
      return this.isElementUnavailable(element) ? 0.25 : 1;
    }
    if (element.fade === 'no-flow') {
      if (this.isElementUnavailable(element)) return 0.25;
      return !element.calculations.systemTotal && !preventFade ? 0.25 : 1;
    }
    return 1;
  }

  private getElementUnit = (element: CalculatedElementDef): string | undefined =>
    element.unit || this.getEntityUnit(this.getElementEntity(element))

  private getEntityUnit = (ent: HassEntity | string | undefined) => {
    const entity = typeof ent === 'string' ? this.getEntity(ent) : ent;
    if(!entity) return undefined;
    return entity.attributes.unit_of_measurement;
  }

  private displayValue = (val: any, abs: boolean = false, unit: string | null = null, places: number | boolean = false): number | string | undefined => {
    let value = val;

    // 1. SMART CHECK: Only convert to number if it is PURELY numeric.
    // "23.456" -> Becomes Number(23.456) -> Gets rounded.
    // "8R/Z"   -> Becomes NaN            -> Stays "8R/Z" (Text preserved).
    if (typeof value === 'string') {
      const numberValue = Number(value);
      if (!isNaN(numberValue) && value.trim() !== '') {
        value = numberValue;
      }
    }

    // 2. Handle Absolute Value
    if (abs && typeof value === 'number') {
      value = Math.abs(value);
    }

    // 3. Rounding Logic (Only for valid numbers)
    if (typeof value === 'number') {
      // Default to 1 decimal place if 'places' is strictly false/undefined
      const prec = typeof places === 'number' ? places : 1;
      const factor = 10 ** prec;
      value = Math.round(value * factor) / factor;
    }

    // 4. Append Unit
    if (unit) {
      return `${value} ${unit}`;
    }
    return value;
  }   

  private getEntityValue = (ent: HassEntity | string | undefined, abs: boolean = false, showUnit: boolean = false, places: number | boolean = false): number | string | undefined => {
    const entity = typeof ent === 'string' ? this.getEntity(ent) : ent;
    if(!entity) return undefined;
    const value = entity?.state;
    const unit = showUnit ? this.getEntityUnit(entity) : null;
    return this.displayValue(value, abs, unit, places);
  }

  private elementArrows = (value: number, position: string, fill: string | null = null) => {
    if (!value) return null;
    let direction: string;
    switch (true) {
      case (position === 'top' && value > 0 || position === 'bottom' && value < 0): direction = 'down'; break;
      case (position === 'top' && value < 0 || position === 'bottom' && value > 0): direction = 'up'; break;
      case (position === 'left' && value > 0 || position === 'right' && value < 0): direction = 'right'; break;
      case (position === 'left' && value < 0 || position === 'right' && value > 0): direction = 'left'; break;
      default: direction = '';
    }
    return html`<ha-icon style="fill: ${fill}; display: inline-block;" class="small" icon="mdi:arrow-${direction}"></ha-icon>`;
  }

  private elementValueArrows = (element: CalculatedElementDef) => html`
    <div class="value-row">
      ${element.calculations.systemTotal || (element as any).display
        ? html`
          ${!['left', 'middle'].includes(element.position) ? this.elementArrows(element.calculations.systemTotal, element.position, this.getElementColor(element)) : null}
          <span style="white-space: nowrap;">${this.displayValue(
              (element as any).display !== undefined ? (element as any).display : element.calculations.systemTotal, 
              element.position !== 'middle', 
              this.getElementUnit(element), 
              0
            )}</span>
          ${element.position === 'left' ? this.elementArrows(element.calculations.systemTotal, element.position, this.getElementColor(element)) : null}
        ` : null
      }
    </div>
  `

  private elementToHtml = (element: CalculatedElementDef, preventFade: boolean = false) => html`
    <div class="circle-container container-${element.position}" style="
      opacity: ${this.getElementOpacity(element, preventFade)};
    ">
      <div class="circle" style="border-color: ${this.getElementColor(element)}">
        ${element.fill ? (
          html`<div style="
            height: ${coerceNumber(this.getEntityValue(element.fill, true, false))}%; 
            position: absolute; width: 100%; bottom: 0px;
            background-color: ${this.getElementColor(element)};
            opacity: .25;
          "></div>`
        ) : null}
        
        ${/* TOP SECTION */ ''}
        ${element.position === 'bottom'
          ? this.elementValueArrows(element)
          : html`<div class="value-row extra-main">${element.extra?.main ? this.getEntityValue(element.extra?.main, false, true) : ' '}</div>`
        }

        ${/* MIDDLE SECTION */ ''}
        <div class="icon-row">
          <span class="side-extra">${element.extra?.left ? this.getEntityValue(element.extra?.left, false, true) : ' '}</span>
          <ha-icon style="width: var(--pfl-icon-size, 24px); height: var(--pfl-icon-size, 24px); fill: ${this.getElementColor(element)}" icon="${this.getElementIconId(element)}"></ha-icon>
          <span class="side-extra">${element.extra?.right ? this.getEntityValue(element.extra?.right, false, true) : ' '}</span>
        </div>

        ${/* BOTTOM SECTION */ ''}
        ${element.position === 'bottom'
          ? html`<div class="value-row extra-main">${element.extra?.main ? this.getEntityValue(element.extra?.main, false, true) : ' '}</div>`
          : this.elementValueArrows(element)
        }
      </div>
    </div>
  `

  protected render(): TemplateResult {
    if (!this._config || !this.hass) return html``;

    const { elements: configElements } = this._config;
    let systemPower = 0;
    const elements = configElements.map((element) : CalculatedElementDef => {
      let toSystem = 0;
      let fromSystem: number | null = null;
      let systemTotal = 0;
      const multiplier = element.invert ? -1 : 1;
      toSystem = typeof element.value === "string"
        ? coerceNumber(this.getEntityValue(element.value)) * multiplier
        : coerceNumber(this.getEntityValue(element.value.toSystem))
      if (typeof element.value !== "string" && element.value.fromSystem) {
        fromSystem = coerceNumber(this.getEntityValue(element.value.fromSystem));
      }
      systemTotal = toSystem - (fromSystem ?? 0)
      if(!element.exclude) systemPower -= systemTotal;
      const extra = typeof element.extra === "string" ? { main: element.extra } : element.extra
      return { ...element, extra, calculations: { toSystem, fromSystem, systemTotal } }
    });
    
    const extra = typeof this._config.system?.extra === "string" ? { main: this._config.system?.extra } : this._config.system?.extra
    
    // [CUSTOM FIX] Allow inverting the central System value via config
    if ((this._config.system as any)?.invert) {
      systemPower *= -1;
    }

    // [CUSTOM FIX] Allow overriding the system display value with a specific entity
    // FIX: We explicitly tell TypeScript this variable can be a 'string' or 'undefined'
    let systemDisplayOverride: string | undefined = undefined;
    
    if ((this._config.system as any)?.override && (this._config.system as any)?.value) {
      const overrideEntity = this.getEntity((this._config.system as any).value);
      if (overrideEntity) {
        systemDisplayOverride = overrideEntity.state;
      }
    }

    elements.push({
      value: 'system',
      display: systemDisplayOverride, // Now valid because we updated type.ts
      ...(this._config.system?.unit ? { unit: this._config.system.unit } : null),
      icon: this._config.system?.icon || 'mdi:house',
      ...(this._config.system?.extra ? { extra: this._config.system.extra } : null),
      ...(this._config.system?.color ? { color: this._config.system.color } : null),
      position: 'middle',
      extra,
      calculations: { toSystem: systemPower > 0 ? systemPower : 0, fromSystem: systemPower < 0 ? systemPower : 0, systemTotal: systemPower },
    })

    const elementsByPosition = {
      left: elements.filter(element => element.position === 'left'),
      top: elements.filter(element => element.position === 'top'),
      right: elements.filter(element => element.position === 'right'),
      bottom: elements.filter(element => element.position === 'bottom'),
      middle: elements.filter(element => element.position === 'middle')
    };

    const halfBox = (this._config.boxSize || 80) / 2;
    const svgBoxStylesByPosition = {
      'left': `position: absolute; left: 0; top: 0; width: calc(50% - ${halfBox}px); height: 100%;`,
      'top': `position: absolute; left: 0; top: 0; width: 100%; height: calc(50% - ${halfBox}px);`,
      'right': `position: absolute; left: calc(50% + ${halfBox}px); top: 0; width: calc(50% - ${halfBox}px); height: 100%;`,
      'bottom': `position: absolute; left: 0; top: calc(50% + ${halfBox}px); width: 100%; height: calc(50% - ${halfBox}px);`,
    }

    const svgLineMapByPosition = {
      // FIX: Remove all commas from the path 'd' attribute. Use spaces only.
      'left':   (pc, ipc)  => `M 100 ${ipc}   C 50 ${ipc}    50 ${pc}    0 ${pc}`,
      'top':    (pc, ipc)  => `M ${ipc} 100   C ${ipc} 50    ${pc} 50    ${pc} 0`,
      'right':  (pc, ipc)  => `M 0 ${ipc}     C 50 ${ipc}    50 ${pc}    100 ${pc}`,
      'bottom': (pc, ipc)  => `M ${ipc} 0     C ${ipc} 50    ${pc} 50    ${pc} 100`,
    };

    const avgSystemTotal = elements
      .filter(element => element.calculations.systemTotal !== 0)
      .reduce((prev, element) => prev + Math.abs(element.calculations.systemTotal), 0)
      / elements.length;

    const lineCalcs = Object.fromEntries(['left', 'top', 'right', 'bottom'].map(position => {
      const theseElements = elementsByPosition[position];
      const height = 1 / (theseElements.length) * 100;
      return [position, theseElements.map((element, index) => {
        const flowId: string = `flow-${position}-${index}`;
        const pc = ((index + 1) * height) - .5 * height;
        const ipc = 50 + -10 * (1 - pc / 50)
        const path = svgLineMapByPosition[position](pc, ipc)
        const dur = element.calculations.systemTotal && avgSystemTotal
          ? (this._config.speed) / (Math.abs(element.calculations.systemTotal) / avgSystemTotal)
          : 0

        const flowSVGElement = (this.renderRoot?.querySelector(`#${flowId}`) ?? null) as SVGSVGElement;
        if (flowSVGElement && dur && this.previousDur[flowId] && this.previousDur[flowId] !== dur) {
          flowSVGElement.pauseAnimations();
          flowSVGElement.setCurrentTime(flowSVGElement.getCurrentTime() * (dur / this.previousDur[flowId]));
          flowSVGElement.unpauseAnimations();
        }
        this.previousDur[flowId] = dur;
        return { flowId, element, path, dur }
      })];
    }));

    const objectMap = (obj, fn) => Object.keys(obj).map(key => fn(key, obj[key]))

    const cardStyle = `
      ${this._config.valueFontSize ? `--pfl-value-font-size: ${this._config.valueFontSize}px;` : ''}
      ${this._config.extraFontSize ? `--pfl-extra-font-size: ${this._config.extraFontSize}px;` : ''}
      ${this._config.sideExtraFontSize ? `--pfl-side-extra-font-size: ${this._config.sideExtraFontSize}px;` : ''}
      ${this._config.boxSize ? `--pfl-box-size: ${this._config.boxSize}px;` : ''}
      ${this._config.iconSize ? `--pfl-icon-size: ${this._config.iconSize}px;` : ''}
    `;

    const hasTop = elementsByPosition.top.length > 0;
    const hasBottom = elementsByPosition.bottom.length > 0;
    const boxExpr = 'var(--pfl-box-size, 80px)';
    const topOffset = hasTop ? `calc(${boxExpr} + 4px)` : '0px';
    const bottomOffset = hasBottom ? `calc(${boxExpr} + 4px)` : '0px';
    const linesTop = hasTop ? boxExpr : '0px';
    const linesBottom = hasBottom ? boxExpr : '0px';
    const linesStyle = `top: ${linesTop}; bottom: ${linesBottom}; left: ${boxExpr}; width: calc(100% - 2 * ${boxExpr}); height: auto;`;
    const colPadding = `padding-top: ${topOffset}; padding-bottom: ${bottomOffset}; justify-content: space-around;`;

    return html`
      <ha-card .header=${this._config.title} style="${cardStyle}">
        <div class="card-content">
          <div class="row" style="height:100%; position: relative;">
            <div class="col" style="${colPadding}">
              ${elementsByPosition.left.map(element => this.elementToHtml(element))}
            </div>
            <div class="col">
              <div class="row">
                ${elementsByPosition.top.length ? elementsByPosition.top.map(element => this.elementToHtml(element)) : html`<div class="spacer container-top"></div>`}
              </div>
              <div class="row">
                ${elementsByPosition.middle.map(element => this.elementToHtml(element, true))}
              </div>
              <div class="row">
                ${elementsByPosition.bottom.map(element => this.elementToHtml(element))}
              </div>
            </div>
            <div class="col" style="${colPadding}">
              ${elementsByPosition.right.map(element => this.elementToHtml(element))}
            <div class="lines" style="${linesStyle}">
              ${objectMap(lineCalcs, (pos, posLineCalcs) => html`
                <svg xmlns="http://www.w3.org/2000/svg" style="${svgBoxStylesByPosition[pos]}" viewBox="0 0 100 100" preserveAspectRatio="none">
                  ${posLineCalcs.map(posLineCalc => svg`
                    <path d="${posLineCalc.path}" stroke="${this.getElementColor(posLineCalc.element)}" vector-effect="non-scaling-stroke" style="opacity: ${this.getElementOpacity(posLineCalc.element)};"></path>
                    ${this.displayValue(posLineCalc.element.calculations.systemTotal) && html`
                        <svg xmlns="http://www.w3.org/2000/svg" style="${svgBoxStylesByPosition[pos]}" viewBox="0 0 100 100" preserveAspectRatio="none" id="${posLineCalc.flowId}">
                          ${svg`<circle r="1" vector-effect="non-scaling-stroke" style="stroke-width: 4; stroke: ${this.getElementColor(posLineCalc.element)}; fill: ${this.getElementColor(posLineCalc.element)};">
                              <animateMotion dur="${posLineCalc.dur}" rotate="auto" repeatCount="indefinite" calcMode="linear" path="${posLineCalc.path}" keyPoints="${posLineCalc.element.calculations.systemTotal > 0 ? '1;0' : '0;1'}" keyTimes="${posLineCalc.element.calculations.systemTotal > 0 ? '0;1' : '0;1'}" />
                            </circle>`}
                        </svg>`
                    }
                  `)}
                </svg>
              `)}
            </div>
          </div>
        </div>
      </ha-card>
    `;}

  static styles = css`
    :host {
      --mdc-icon-size: 24px;
    }
    ha-card {
      overflow: auto;
      display: flex;
      flex-direction: column;
    }
    .card-content {
      position: relative;
      flex-grow: 1;
      padding: 16px !important;
    }
    .lines {
      position: absolute;
      width: calc(100% - 2 * (var(--pfl-box-size, 80px) + 20px));
      height: calc(100% - 2 * (var(--pfl-box-size, 80px) + 20px));
      left: calc(var(--pfl-box-size, 80px) + 20px);
      top: calc(var(--pfl-box-size, 80px) + 20px);
    }
    .row {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }
    .col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .circle-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .container-top, .container-bottom { padding: 0 10px; }
    .container-left, .container-right { padding: 10px 0; }
    .spacer { width: var(--pfl-box-size, 80px); height: var(--pfl-box-size, 80px); }

    .circle {
      width: var(--pfl-box-size, 80px);
      height: var(--pfl-box-size, 80px);
      border-radius: 25%;
      border: 2px solid;
      overflow: hidden;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding: 4px 0 6px 0;

      box-sizing: border-box;

      align-items: center;
      text-align: center;

      font-size: var(--pfl-value-font-size, 12px);
      line-height: 1.1;

      position: relative;
      text-decoration: none;
      color: var(--primary-text-color);

      --mdc-icon-size: var(--pfl-icon-size, 24px);
    }

    /* FIX: Force rows to stay side-by-side */
    .value-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 14px;
      flex-wrap: nowrap;
    }
    
    .icon-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    ha-svg-icon {
      padding-bottom: 2px;
      fill: inherit !important;
    }
    ha-icon.small {
      --mdc-icon-size: 12px;
      display: inline-block;
    }
    .extra-main {
      font-size: var(--pfl-extra-font-size, 10px);
    }
    .side-extra {
      width: calc((100% - var(--pfl-icon-size, 24px)) / 2);
      margin: auto;
      overflow: hidden;
      font-size: var(--pfl-side-extra-font-size, var(--pfl-extra-font-size, 10px));
      line-height: 1.1;
    }
    .label {
      color: var(--secondary-text-color);
      font-size: 12px;
    }
    line, path { stroke-width: 1; fill: none; }
    .circle svg {
      position: absolute;
      fill: none;
      stroke-width: 4px;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  `;
}
/* ... footer code same as before ... */
const windowWithCards = window as unknown as Window & { customCards: unknown[]; };
windowWithCards.customCards = windowWithCards.customCards || [];
windowWithCards.customCards.push({
  type: "power-flow-live",
  name: "Power Flow Live",
  description: "A power flow card inspired by the official Energy Distribution card for Home Assistant",
});
declare global { interface HTMLElementTagNameMap { "power-flow-live": PowerFlowLive; } }