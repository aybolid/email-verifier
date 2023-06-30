import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    breakpoints: Breakpoints;
    typography: Typography;
    colors: Colors;
    rounded: Rounded;
  }
}

interface Theme {
  typography: Typography;
  colors: Colors;
  rounded: Rounded;
  breakpoints: Breakpoints;
}

type Breakpoints = {
  sm: '576px';
  md: '768px';
  lg: '992px';
};

type Typography = {
  size: {
    xs: '0.75rem';
    sm: '0.875rem';
    md: '1rem';
    lg: '1.125rem';
  };
  weight: {
    light: 300;
    normal: 400;
    regular: 500;
    semi: 600;
    bold: 700;
  };
};

type Colors = {
  primary: string;
  background: string;
  secBackground: string;
  text: string;
  border: string;
  success: string;
  danger: string;
};

type Rounded = {
  sm: '4px';
  md: '8px';
  lg: '16px';
  full: '9999px';
  none: '0px';
};
