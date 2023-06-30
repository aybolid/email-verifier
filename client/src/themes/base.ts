import { Theme } from './themes';

const base = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
  } as Theme['breakpoints'],
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
  } as Theme['typography'],
  rounded: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
    none: '0px',
  } as Theme['rounded'],
};

export default base;
