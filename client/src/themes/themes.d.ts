import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    typography: Typography;
    colors: Colors;
    rounded: Rounded;
  }
}

interface Theme {
  typography: Typography;
  colors: Colors;
  rounded: Rounded;
}

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
    regular: 400;
    semi: 600;
    bold: 700;
  };
};

type Colors = {
  primary: string;
  background: string;
  text: string;
  border: string;
};

type Rounded = {
  sm: '4px';
  md: '8px';
  lg: '16px';
  full: '9999px';
  none: '0px';
};
