export interface PivotOptions {
    rows: string[];
    cols: string[];
    valueField: string;
  }
  
  export type PivotResult = Record<string, any>;
  