import { defineConfig } from 'astro/config';

// Static output for GitHub Pages, custom domain https://lava-musik.de.
export default defineConfig({
  output: 'static',
  site: 'https://lava-musik.de',
  base: '/',
  server: { host: true, port: 4400 },
});
