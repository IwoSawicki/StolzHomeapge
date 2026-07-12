// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://stolz-marketing.de',
  output: 'static',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    preview: {
      // astro preview läuft hinter dem Dokploy-Proxy: eigene Domains erlauben
      allowedHosts: ['dev.stolz-ki.de', 'stolz-marketing.de', 'www.stolz-marketing.de'],
    },
  },
});
