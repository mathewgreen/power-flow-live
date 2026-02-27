export type SystemElementDef = {
  unit?: string;
  icon?: string;
  color?: string;
  extra?: string | {
    main?: string,
    left?: string,
    right?: string,
    rows?: Array<{ label: string, value: string }>
  };
}

export type ElementDef = SystemElementDef & {
  value: string | {
    toSystem?: string;
    fromSystem?: string;
  };
  position: "top" | "left" | "bottom" | "right" | "middle";
  type?: "standard" | "wide";
  fill?: string;
  invert?: boolean;
  exclude?: boolean;
  fade?: "never" | "no-flow" | "unavailable";
};

export type CalculatedElementDef = ElementDef & {
  extra?: undefined | {
    main?: string,
    left?: string,
    right?: string,
    rows?: Array<{ label: string, value: string }>
  },
  display?: string | number;
  calculations: {
    toSystem: number,
    fromSystem: number | null,
    systemTotal: number
  },
};