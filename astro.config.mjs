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
  // CSS inline ins HTML (spart den render-blockenden Stylesheet-Request → LCP/FCP)
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      // internes Design-Archiv nicht in die Sitemap aufnehmen
      filter: (page) => !page.includes('/archiv') && !page.includes('/korbaktion'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    preview: {
      // astro preview läuft hinter dem Dokploy-Proxy: eigene Domains erlauben
      allowedHosts: ['dev.stolz-ki.de', 'stolz-marketing.de', 'www.stolz-marketing.de'],
    },
  },
});
