import base from './base';
import type MyTheme from './themes';

const darkTheme: MyTheme = {
  ...base,
  colors: {
    primary: '#2196f3',
    background: '#202020',
    secBackground: '#222',
    text: '#d0d0d0',
    border: '#333',
    success: '#4caf50',
    danger: '#f44336',
    accent: '#ffc107',
  },
};

export default darkTheme;
