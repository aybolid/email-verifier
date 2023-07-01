import { css } from '@emotion/react';
import darkTheme from './themes/dark';
import lightTheme from './themes/light';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = prefersDark ? darkTheme : lightTheme;

const globalStyles = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    overflow-x: hidden;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  #root {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .wrapper {
    width: 100%;
    height: 100%;
  }
  .container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export { globalStyles, theme };
