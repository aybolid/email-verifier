import '@emotion/react';

declare module '@emotion/react' {
  export type Theme = MyTheme
}

export default interface MyTheme {
  breakpoints: Breakpoints;
  colors: Colors;
  rounded: Rounded;
}

type Breakpoints = {
  sm: '576px';
  md: '768px';
  lg: '992px';
};

type Colors = {
  primary: string;
  background: string;
  secBackground: string;
  text: string;
  border: string;
  success: string;
  danger: string;
  accent: string;
};

type Rounded = {
  sm: '4px';
  md: '8px';
  lg: '16px';
  full: '9999px';
};
