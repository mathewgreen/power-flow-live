/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var t$3,r$3;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none";}(t$3||(t$3={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24";}(r$3||(r$3={}));function E$1(e){return e.substr(0,e.indexOf("."))}var ue=function(e,t,r){var n;return void 0===r&&(r=!1),function(){var i=[].slice.call(arguments),a=this,o=function(){n=null,r||e.apply(a,i);},u=r&&!n;clearTimeout(n),n=setTimeout(o,t),u&&e.apply(a,i);}},ce={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function me(e,t){if(e in ce)return ce[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return "mdi:bell-plus";case"armed_night":return "mdi:bell-sleep";case"disarmed":return "mdi:bell-outline";case"triggered":return "mdi:bell-ring";default:return "mdi:bell"}case"binary_sensor":return t&&"off"===t?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return "closed"===t?"mdi:window-closed":"mdi:window-open";case"lock":return t&&"unlocked"===t?"mdi:lock-open":"mdi:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"mdi:cast-connected":"mdi:cast";case"zwave":switch(t){case"dead":return "mdi:emoticon-dead";case"sleeping":return "mdi:sleep";case"initializing":return "mdi:timer-sand";default:return "mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"mdi:bookmark"}}var xe={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},De={binary_sensor:function(e,t){var r="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return r?"mdi:battery":"mdi:battery-outline";case"battery_charging":return r?"mdi:battery":"mdi:battery-charging";case"cold":return r?"mdi:thermometer":"mdi:snowflake";case"connectivity":return r?"mdi:server-network-off":"mdi:server-network";case"door":return r?"mdi:door-closed":"mdi:door-open";case"garage_door":return r?"mdi:garage":"mdi:garage-open";case"power":return r?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return r?"mdi:check-circle":"mdi:alert-circle";case"smoke":return r?"mdi:check-circle":"mdi:smoke";case"heat":return r?"mdi:thermometer":"mdi:fire";case"light":return r?"mdi:brightness-5":"mdi:brightness-7";case"lock":return r?"mdi:lock":"mdi:lock-open";case"moisture":return r?"mdi:water-off":"mdi:water";case"motion":return r?"mdi:walk":"mdi:run";case"occupancy":return r?"mdi:home-outline":"mdi:home";case"opening":return r?"mdi:square":"mdi:square-outline";case"plug":return r?"mdi:power-plug-off":"mdi:power-plug";case"presence":return r?"mdi:home-outline":"mdi:home";case"running":return r?"mdi:stop":"mdi:play";case"sound":return r?"mdi:music-note-off":"mdi:music-note";case"update":return r?"mdi:package":"mdi:package-up";case"vibration":return r?"mdi:crop-portrait":"mdi:vibrate";case"window":return r?"mdi:window-closed":"mdi:window-open";default:return r?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"mdi:garage-open":"mdi:garage";case"door":return t?"mdi:door-open":"mdi:door-closed";case"shutter":return t?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return t?"mdi:blinds-open":"mdi:blinds";case"window":return t?"mdi:window-open":"mdi:window-closed";default:return me("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in xe)return xe[t];if("battery"===t){var r=Number(e.state);if(isNaN(r))return "mdi:battery-unknown";var n=10*Math.round(r/10);return n>=100?"mdi:battery":n<=0?"mdi:battery-alert":"hass:battery-"+n}var i=e.attributes.unit_of_measurement;return "°C"===i||"°F"===i?"mdi:thermometer":me("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?me("input_datetime"):"mdi:calendar":"mdi:clock"}},Se=function(e){if(!e)return "mdi:bookmark";if(e.attributes.icon)return e.attributes.icon;var t=E$1(e.entity_id);return t in De?De[t](e):me(t,e.state)};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window,e$4=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$4?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$2.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$3=window,r$1=e$3.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$3.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$2=e$3.reactiveElementVersions)&&void 0!==s$2?s$2:e$3.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$1=window,s$1=i$1.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$3,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$2?e$2.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$1+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$1.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$1=i$1.litHtmlVersions)&&void 0!==t$1?t$1:i$1.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e(n,t,o):i(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t(t){return n$1({...t,state:!0})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/* eslint-disable no-redeclare */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    // eslint-disable-next-line no-restricted-globals
    return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceNumber(value, fallbackValue = 0) {
    return isNumberValue(value) ? Number(value) : fallbackValue;
}

var version = "1.0.0";

/* eslint-disable no-console */
// Log Version
console.groupCollapsed(`%c⚡ Power Flow Live v${version} is installed`, "color: #488fc2; font-weight: bold");
console.log("Readme:", "https://github.com/mathewgreen/power-flow-live");
console.groupEnd();
const logError = ue((error) => {
    console.log(`%c⚡ Power Flow Live v${version} %cError: ${error}`, "color: #488fc2; font-weight: bold", "color: #b33a3a; font-weight: normal");
}, 500);

let PowerFlowLive = class PowerFlowLive extends s {
    constructor() {
        super(...arguments);
        this._config = {};
        this.getEntity = (entityId) => {
            const entity = entityId ? this.hass.states[entityId] : undefined;
            if (!entity || !entity.state) {
                logError(`entity "${entityId !== null && entityId !== void 0 ? entityId : "Unknown"}" is not available or misconfigured`);
                return undefined;
            }
            return entity;
        };
        this.previousDur = {};
        this.getElementEntityId = (element) => element.value
            ? typeof element.value === 'string'
                ? element.value
                : element.value.toSystem || element.value.fromSystem || undefined
            : undefined;
        this.getElementEntity = (element) => this.getEntity(this.getElementEntityId(element));
        this.getElementIconId = (element) => {
            if (element.icon)
                return element.icon;
            const entity = this.getElementEntity(element);
            if (!entity)
                return 'mdi:eye';
            return entity ? Se(entity) : 'mdi:eye';
        };
        this.getElementColor = (element) => {
            if (!element.color)
                return 'var(--primary-text-color)';
            return element.color;
        };
        this.isElementUnavailable = (element) => {
            const entity = this.getElementEntity(element);
            if (!entity)
                return true;
            const state = entity.state;
            return state === 'unavailable' || state === 'unknown';
        };
        this.getElementOpacity = (element, preventFade = false) => {
            if (!element.fade || element.fade === 'never')
                return 1;
            if (element.fade === 'unavailable') {
                return this.isElementUnavailable(element) ? 0.25 : 1;
            }
            if (element.fade === 'no-flow') {
                if (this.isElementUnavailable(element))
                    return 0.25;
                return !element.calculations.systemTotal && !preventFade ? 0.25 : 1;
            }
            return 1;
        };
        this.getElementUnit = (element) => element.unit || this.getEntityUnit(this.getElementEntity(element));
        this.getEntityUnit = (ent) => {
            const entity = typeof ent === 'string' ? this.getEntity(ent) : ent;
            if (!entity)
                return undefined;
            return entity.attributes.unit_of_measurement;
        };
        this.displayValue = (val, abs = false, unit = null, places = false) => {
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
        };
        this.getEntityValue = (ent, abs = false, showUnit = false, places = false) => {
            const entity = typeof ent === 'string' ? this.getEntity(ent) : ent;
            if (!entity)
                return undefined;
            const value = entity === null || entity === void 0 ? void 0 : entity.state;
            const unit = showUnit ? this.getEntityUnit(entity) : null;
            return this.displayValue(value, abs, unit, places);
        };
        this.elementArrows = (value, position, fill = null) => {
            if (!value)
                return null;
            let direction;
            switch (true) {
                case (position === 'top' && value > 0 || position === 'bottom' && value < 0):
                    direction = 'down';
                    break;
                case (position === 'top' && value < 0 || position === 'bottom' && value > 0):
                    direction = 'up';
                    break;
                case (position === 'left' && value > 0 || position === 'right' && value < 0):
                    direction = 'right';
                    break;
                case (position === 'left' && value < 0 || position === 'right' && value > 0):
                    direction = 'left';
                    break;
                default: direction = '';
            }
            return x `<ha-icon style="fill: ${fill}; display: inline-block;" class="small" icon="mdi:arrow-${direction}"></ha-icon>`;
        };
        this.elementValueArrows = (element) => x `
    <div class="value-row">
      ${element.calculations.systemTotal || element.display
            ? x `
          ${!['left', 'middle'].includes(element.position) ? this.elementArrows(element.calculations.systemTotal, element.position, this.getElementColor(element)) : null}
          <span style="white-space: nowrap;">${this.displayValue(element.display !== undefined ? element.display : element.calculations.systemTotal, element.position !== 'middle', this.getElementUnit(element), 0)}</span>
          ${element.position === 'left' ? this.elementArrows(element.calculations.systemTotal, element.position, this.getElementColor(element)) : null}
        ` : null}
    </div>
  `;
        this.elementToHtml = (element, preventFade = false) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return x `
    <div class="circle-container container-${element.position}" style="
      opacity: ${this.getElementOpacity(element, preventFade)};
    ">
      <div class="circle" style="border-color: ${this.getElementColor(element)}">
        ${element.fill ? (x `<div style="
            height: ${coerceNumber(this.getEntityValue(element.fill, true, false))}%; 
            position: absolute; width: 100%; bottom: 0px;
            background-color: ${this.getElementColor(element)};
            opacity: .25;
          "></div>`) : null}
        
        ${ /* TOP SECTION */''}
        ${element.position === 'bottom'
                ? this.elementValueArrows(element)
                : x `<div class="value-row extra-main">${((_a = element.extra) === null || _a === void 0 ? void 0 : _a.main) ? this.getEntityValue((_b = element.extra) === null || _b === void 0 ? void 0 : _b.main, false, true) : ' '}</div>`}

        ${ /* MIDDLE SECTION */''}
        <div class="icon-row">
          <span class="side-extra">${((_c = element.extra) === null || _c === void 0 ? void 0 : _c.left) ? this.getEntityValue((_d = element.extra) === null || _d === void 0 ? void 0 : _d.left, false, true) : ' '}</span>
          <ha-icon style="width: var(--pfl-icon-size, 24px); height: var(--pfl-icon-size, 24px); fill: ${this.getElementColor(element)}" icon="${this.getElementIconId(element)}"></ha-icon>
          <span class="side-extra">${((_e = element.extra) === null || _e === void 0 ? void 0 : _e.right) ? this.getEntityValue((_f = element.extra) === null || _f === void 0 ? void 0 : _f.right, false, true) : ' '}</span>
        </div>

        ${ /* BOTTOM SECTION */''}
        ${element.position === 'bottom'
                ? x `<div class="value-row extra-main">${((_g = element.extra) === null || _g === void 0 ? void 0 : _g.main) ? this.getEntityValue((_h = element.extra) === null || _h === void 0 ? void 0 : _h.main, false, true) : ' '}</div>`
                : this.elementValueArrows(element)}
      </div>
    </div>
  `;
        };
    }
    setConfig(config) {
        if (!config.elements || (!config.elements.length)) {
            throw new Error("At least one entity must be defined");
        }
        ['top', 'bottom'].forEach(position => {
            if (config.elements.filter(element => element.position === position).length > 2) {
                throw new Error(`Maximum 2 elements allowed in ${position} row.`);
            }
        });
        this._config = Object.assign(Object.assign({}, config), { speed: coerceNumber(config.speed, 5) });
    }
    getCardSize() {
        return 3;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (!this._config || !this.hass)
            return x ``;
        const { elements: configElements } = this._config;
        let systemPower = 0;
        const elements = configElements.map((element) => {
            let toSystem = 0;
            let fromSystem = null;
            let systemTotal = 0;
            const multiplier = element.invert ? -1 : 1;
            toSystem = typeof element.value === "string"
                ? coerceNumber(this.getEntityValue(element.value)) * multiplier
                : coerceNumber(this.getEntityValue(element.value.toSystem));
            if (typeof element.value !== "string" && element.value.fromSystem) {
                fromSystem = coerceNumber(this.getEntityValue(element.value.fromSystem));
            }
            systemTotal = toSystem - (fromSystem !== null && fromSystem !== void 0 ? fromSystem : 0);
            if (!element.exclude)
                systemPower -= systemTotal;
            const extra = typeof element.extra === "string" ? { main: element.extra } : element.extra;
            return Object.assign(Object.assign({}, element), { extra, calculations: { toSystem, fromSystem, systemTotal } });
        });
        const extra = typeof ((_a = this._config.system) === null || _a === void 0 ? void 0 : _a.extra) === "string" ? { main: (_b = this._config.system) === null || _b === void 0 ? void 0 : _b.extra } : (_c = this._config.system) === null || _c === void 0 ? void 0 : _c.extra;
        // [CUSTOM FIX] Allow inverting the central System value via config
        if ((_d = this._config.system) === null || _d === void 0 ? void 0 : _d.invert) {
            systemPower *= -1;
        }
        // [CUSTOM FIX] Allow overriding the system display value with a specific entity
        // FIX: We explicitly tell TypeScript this variable can be a 'string' or 'undefined'
        let systemDisplayOverride = undefined;
        if (((_e = this._config.system) === null || _e === void 0 ? void 0 : _e.override) && ((_f = this._config.system) === null || _f === void 0 ? void 0 : _f.value)) {
            const overrideEntity = this.getEntity(this._config.system.value);
            if (overrideEntity) {
                systemDisplayOverride = overrideEntity.state;
            }
        }
        elements.push(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ value: 'system', display: systemDisplayOverride }, (((_g = this._config.system) === null || _g === void 0 ? void 0 : _g.unit) ? { unit: this._config.system.unit } : null)), { icon: ((_h = this._config.system) === null || _h === void 0 ? void 0 : _h.icon) || 'mdi:house' }), (((_j = this._config.system) === null || _j === void 0 ? void 0 : _j.extra) ? { extra: this._config.system.extra } : null)), (((_k = this._config.system) === null || _k === void 0 ? void 0 : _k.color) ? { color: this._config.system.color } : null)), { position: 'middle', extra, calculations: { toSystem: systemPower > 0 ? systemPower : 0, fromSystem: systemPower < 0 ? systemPower : 0, systemTotal: systemPower } }));
        const elementsByPosition = {
            left: elements.filter(element => element.position === 'left'),
            top: elements.filter(element => element.position === 'top'),
            right: elements.filter(element => element.position === 'right'),
            bottom: elements.filter(element => element.position === 'bottom'),
            middle: elements.filter(element => element.position === 'middle')
        };
        const halfBox = (this._config.boxSize || 80) / 2;
        const boxSize = this._config.boxSize || 80;
        const svgBoxStylesByPosition = {
            'left': `position: absolute; left: 0; top: 0; width: calc(50% - ${halfBox}px); height: 100%;`,
            'top': `position: absolute; left: -${halfBox}px; top: 0; width: calc(100% + ${boxSize}px); height: calc(50% - ${halfBox}px);`,
            'right': `position: absolute; left: calc(50% + ${halfBox}px); top: 0; width: calc(50% - ${halfBox}px); height: 100%;`,
            'bottom': `position: absolute; left: -${halfBox}px; top: calc(50% + ${halfBox}px); width: calc(100% + ${boxSize}px); height: calc(50% - ${halfBox}px);`,
        };
        const svgLineMapByPosition = {
            // FIX: Remove all commas from the path 'd' attribute. Use spaces only.
            'left': (pc, ipc) => `M 100 ${ipc}   C 50 ${ipc}    50 ${pc}    0 ${pc}`,
            'top': (pc, ipc) => `M ${ipc} 100   C ${ipc} 50    ${pc} 50    ${pc} 0`,
            'right': (pc, ipc) => `M 0 ${ipc}     C 50 ${ipc}    50 ${pc}    100 ${pc}`,
            'bottom': (pc, ipc) => `M ${ipc} 0     C ${ipc} 50    ${pc} 50    ${pc} 100`,
        };
        const avgSystemTotal = elements
            .filter(element => element.calculations.systemTotal !== 0)
            .reduce((prev, element) => prev + Math.abs(element.calculations.systemTotal), 0)
            / elements.length;
        const lineCalcs = Object.fromEntries(['left', 'top', 'right', 'bottom'].map(position => {
            const theseElements = elementsByPosition[position];
            const height = 1 / (theseElements.length) * 100;
            return [position, theseElements.map((element, index) => {
                    var _a, _b;
                    const flowId = `flow-${position}-${index}`;
                    const pc = ((index + 1) * height) - .5 * height;
                    const ipc = 50 + -10 * (1 - pc / 50);
                    const path = svgLineMapByPosition[position](pc, ipc);
                    const dur = element.calculations.systemTotal && avgSystemTotal
                        ? (this._config.speed) / (Math.abs(element.calculations.systemTotal) / avgSystemTotal)
                        : 0;
                    const flowSVGElement = ((_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`#${flowId}`)) !== null && _b !== void 0 ? _b : null);
                    if (flowSVGElement && dur && this.previousDur[flowId] && this.previousDur[flowId] !== dur) {
                        flowSVGElement.pauseAnimations();
                        flowSVGElement.setCurrentTime(flowSVGElement.getCurrentTime() * (dur / this.previousDur[flowId]));
                        flowSVGElement.unpauseAnimations();
                    }
                    this.previousDur[flowId] = dur;
                    return { flowId, element, path, dur };
                })];
        }));
        const objectMap = (obj, fn) => Object.keys(obj).map(key => fn(key, obj[key]));
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
        const numTop = elementsByPosition.top.length;
        const numBottom = elementsByPosition.bottom.length;
        const topRowStyle = `position: absolute; left: ${halfBox}px; width: calc(100% - ${boxSize}px); top: 0;`;
        const bottomRowStyle = `position: absolute; left: ${halfBox}px; width: calc(100% - ${boxSize}px); bottom: 0;`;
        return x `
      <ha-card .header=${this._config.title} style="${cardStyle}">
        <div class="card-content">
          <div class="row" style="height:100%; width:100%; position: relative;">
            ${hasTop ? x `
              <div style="${topRowStyle}">
                ${elementsByPosition.top.map((element, i) => {
            const pc = (i + 0.5) / numTop * 100;
            return x `<div style="position: absolute; left: ${pc}%; transform: translateX(-50%);">${this.elementToHtml(element)}</div>`;
        })}
              </div>
            ` : ''}
            <div class="col" style="${colPadding}">
              ${elementsByPosition.left.map(element => this.elementToHtml(element))}
            </div>
            <div class="col">
              <div class="row">
                <div class="spacer container-top"></div>
              </div>
              <div class="row">
                ${elementsByPosition.middle.map(element => this.elementToHtml(element, true))}
              </div>
              <div class="row">
                ${hasBottom ? x `<div class="spacer container-bottom"></div>` : ''}
              </div>
            </div>
            <div class="col" style="${colPadding}">
              ${elementsByPosition.right.map(element => this.elementToHtml(element))}
            </div>
            ${hasBottom ? x `
              <div style="${bottomRowStyle}">
                ${elementsByPosition.bottom.map((element, i) => {
            const pc = (i + 0.5) / numBottom * 100;
            return x `<div style="position: absolute; left: ${pc}%; transform: translateX(-50%); bottom: 0;">${this.elementToHtml(element)}</div>`;
        })}
              </div>
            ` : ''}
            <div class="lines" style="${linesStyle}">
              ${objectMap(lineCalcs, (pos, posLineCalcs) => x `
                <svg xmlns="http://www.w3.org/2000/svg" style="${svgBoxStylesByPosition[pos]}" viewBox="0 0 100 100" preserveAspectRatio="none">
                  ${posLineCalcs.map(posLineCalc => b `
                    <path d="${posLineCalc.path}" stroke="${this.getElementColor(posLineCalc.element)}" vector-effect="non-scaling-stroke" style="opacity: ${this.getElementOpacity(posLineCalc.element)};"></path>
                    ${this.displayValue(posLineCalc.element.calculations.systemTotal) && x `
                        <svg xmlns="http://www.w3.org/2000/svg" style="${svgBoxStylesByPosition[pos]}" viewBox="0 0 100 100" preserveAspectRatio="none" id="${posLineCalc.flowId}">
                          ${b `<circle r="1" vector-effect="non-scaling-stroke" style="stroke-width: 4; stroke: ${this.getElementColor(posLineCalc.element)}; fill: ${this.getElementColor(posLineCalc.element)};">
                              <animateMotion dur="${posLineCalc.dur}" rotate="auto" repeatCount="indefinite" calcMode="linear" path="${posLineCalc.path}" keyPoints="${posLineCalc.element.calculations.systemTotal > 0 ? '1;0' : '0;1'}" keyTimes="${posLineCalc.element.calculations.systemTotal > 0 ? '0;1' : '0;1'}" />
                            </circle>`}
                        </svg>`}
                  `)}
                </svg>
              `)}
            </div>
          </div>
        </div>
      </ha-card>
    `;
    }
};
PowerFlowLive.styles = i$2 `
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
    .container-top, .container-bottom { padding: 0; }
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
__decorate([
    n$1({ attribute: false })
], PowerFlowLive.prototype, "hass", void 0);
__decorate([
    t()
], PowerFlowLive.prototype, "_config", void 0);
PowerFlowLive = __decorate([
    e$1("power-flow-live")
], PowerFlowLive);
/* ... footer code same as before ... */
const windowWithCards = window;
windowWithCards.customCards = windowWithCards.customCards || [];
windowWithCards.customCards.push({
    type: "power-flow-live",
    name: "Power Flow Live",
    description: "A power flow card inspired by the official Energy Distribution card for Home Assistant",
});

export { PowerFlowLive };
