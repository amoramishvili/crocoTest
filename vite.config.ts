import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import svgLoader from 'vite-svg-loader';

import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      svgo: false,
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'assets'),
    },
    extensions: ['.js', '.ts', '.vue'],
  },

  server: {
    port: 3000,
  },
  build: {
    minify: 'terser',
  },
});
