import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
      }
    }),
    stylelint({
      fix: true
    })
  ],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
