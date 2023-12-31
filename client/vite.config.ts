import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1': {
        target: 'https://email-verifier-392008.lm.r.appspot.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@style': path.resolve(__dirname, 'src/style'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@md': path.resolve(__dirname, 'src/md'),
    },
  },
});
