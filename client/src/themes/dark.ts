import type { Theme } from './themes';

const darkTheme: Theme = {
  typography: {
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
    },
    weight: {
      light: 300,
      normal: 400,
      regular: 500,
      semi: 600,
      bold: 700,
    },
  },
  colors: {
    primary: '#2196f3',
    background: '#202020',
    secBackground: '#222',
    text: '#f0f0f0',
    border: '#333',
  },
  rounded: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
    none: '0px',
  },
};

export default darkTheme;
