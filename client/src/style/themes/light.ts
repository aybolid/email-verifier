import base from './base';
import MyTheme from './themes';

const lightTheme: MyTheme = {
  ...base,
  colors: {
    primary: '#0070f3',
    background: '#fafafa',
    secBackground: '#fff',
    text: '#333',
    border: '#ccc',
    success: '#4caf50',
    danger: '#ff0000',
    accent: '#ffc107',
  },
};

export default lightTheme;
