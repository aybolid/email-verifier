import base from './base';
import type { Theme } from './themes';

const lightTheme: Theme = {
  ...base,
  colors: {
    primary: '#0070f3',
    background: '#fafafa',
    secBackground: '#fff',
    text: '#333',
    border: '#ccc',
    success: '#4caf50',
    danger: '#ff0000',
  },
};

export default lightTheme;
