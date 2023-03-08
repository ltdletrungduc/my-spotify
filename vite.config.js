import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), svgr()],
  resolve: {
    '@': path.resolve(__dirname, './src/'),
    '@components': `${path.resolve(__dirname, './src/components/')}`,
    '@public': `${path.resolve(__dirname, './public/')}`
  }
});
