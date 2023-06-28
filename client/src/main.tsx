import React from 'react';
import ReactDOM from 'react-dom/client';

import { Global, css, ThemeProvider } from '@emotion/react';
import emotionReset from 'emotion-reset';
import lightTheme from './themes/light.ts';
import darkTheme from './themes/dark.ts';

import App from './App.tsx';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = prefersDark ? darkTheme : lightTheme;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${emotionReset}
          body {
            font-family: 'Noto Sans KR', sans-serif;
            font-size: ${theme.typography.size.lg};
            color: ${theme.colors.text};
            background-color: ${theme.colors.background};
          }
          #root {
            min-height: 100vh;
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
            padding: 0 20px;
          }
        `}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
