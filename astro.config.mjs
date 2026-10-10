import { defineConfig } from 'astro/config';

// Static output for GitHub Pages (https://diewahrepalme.github.io/Lava/).
export default defineConfig({
  output: 'static',
  site: 'https://diewahrepalme.github.io',
  base: '/Lava',
  server: { host: true, port: 4400 },
});
