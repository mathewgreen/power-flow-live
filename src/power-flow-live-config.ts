import { LovelaceCardConfig } from "custom-card-helpers";
import { SystemElementDef, ElementDef } from "./type.js";

export interface PowerFlowLiveConfig extends LovelaceCardConfig {
  elements: Array<ElementDef>;
  system?: SystemElementDef;
  speed: number;
  valueFontSize?: number;
  extraFontSize?: number;
  sideExtraFontSize?: number;
  extraRowFontSize?: number;
  boxSize?: number;
  iconSize?: number;
}
