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
      // interne Seiten (Archiv, QR-Redirect, Kunden-Angebote) nicht in die Sitemap
      filter: (page) =>
        !page.includes('/archiv') && !page.includes('/korbaktion') && !page.includes('/website-betreuung'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    preview: {
      // astro preview läuft hinter dem Dokploy-Proxy: eigene Domains erlauben
      allowedHosts: [
        'dev.stolz-ki.de',
        'dev.stolz-marketing.de',
        'stolz-marketing.de',
        'www.stolz-marketing.de',
      ],
    },
  },
});
