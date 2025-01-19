import svgr from '@svgr/rollup';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    nodePolyfills({
      include: ['buffer'],
    }),
    svgr({
      include: '**/*.svg',

      svgoConfig: {
        floatPrecision: 2,
      },

      typescript: true,
      ref: true,
      memo: true,
      svgProps: {
        ref: 'ref',
      },
      prettierConfig: {
        parser: 'typescript',
      },
    }),
  ],

  server: {
    port: 6969,
    host: '0.0.0.0',
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
    },
  },
});
