import React from 'react';
import ReactDOM from 'react-dom/client';

import { Global, css, ThemeProvider } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { globalStyles, theme } from '@style/globalStyles';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider as StoreProvider } from 'react-redux';

import App from '@src/App.tsx';
import { store } from '@app/store';

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
          {children}
        </QueryClientProvider>
      </StoreProvider>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <Global
        styles={css`
          ${emotionReset}
          ${globalStyles}
        `}
      />
      <App />
    </Providers>
  </React.StrictMode>
);
