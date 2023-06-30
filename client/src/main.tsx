import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider as StoreProvider } from 'react-redux';

import { Global, css, ThemeProvider } from '@emotion/react';
import emotionReset from 'emotion-reset';
import lightTheme from './themes/light.ts';
import darkTheme from './themes/dark.ts';

import App from './App.tsx';
import { store } from './app/store.ts';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = prefersDark ? darkTheme : lightTheme;

// eslint-disable-next-line react-refresh/only-export-components
const Providers = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <QueryClientProvider client={new QueryClient()}>
          <Global
            styles={css`
              ${emotionReset}
              body {
                overflow-x: hidden;
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
              button {
                cursor: pointer;
              }
            `}
          />
          {children}
        </QueryClientProvider>
      </StoreProvider>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
