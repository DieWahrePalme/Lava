import { defineConfig } from 'astro/config';

// Static output. For GitHub Pages later, set `site` and `base` here.
export default defineConfig({
  output: 'static',
  server: { host: true, port: 4400 },
});
