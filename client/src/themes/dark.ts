import base from './base';
import type { Theme } from './themes';

const darkTheme: Theme = {
  ...base,
  colors: {
    primary: '#2196f3',
    background: '#202020',
    secBackground: '#222',
    text: '#f0f0f0',
    border: '#333',
    success: '#4caf50',
    danger: '#f44336',
  },
};

export default darkTheme;
