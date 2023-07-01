import MyTheme from './themes';

const base = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
  } as MyTheme['breakpoints'],
  rounded: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  } as MyTheme['rounded'],
};

export default base;
