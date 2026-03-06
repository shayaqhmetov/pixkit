import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  // Ensure static assets are available next to compiled JS
  onSuccess: 'node ./scripts/copy-assets.mjs'
});