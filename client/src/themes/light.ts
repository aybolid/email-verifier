import type { Theme } from './themes';

const lightTheme: Theme = {
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
      regular: 400,
      semi: 600,
      bold: 700,
    },
  },
  colors: {
    primary: '#0070f3',
    background: '#fafafa',
    text: '#333',
    border: '#ccc',
  },
  rounded: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
    none: '0px',
  },
} as const;

export default lightTheme;
