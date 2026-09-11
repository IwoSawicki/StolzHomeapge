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
  // CSS inline ins HTML (spart den render-blockenden Stylesheet-Request)
  build: { inlineStylesheets: 'always' },
  // Bild-Cache in node_modules/.cache: Dokploy mountet den Pfad als
  // Build-Cache, optimierte Bilder überleben so den nächsten Deploy.
  cacheDir: './node_modules/.cache/astro',
  integrations: [
    // Nicht in die Sitemap: /alle-projekte ist eine interne Referenzmappe
    // (noindex, nirgends verlinkt), /korbaktion ist nur die Weiterleitung
    // hinter dem QR-Code auf dem Flyer und trägt ebenfalls noindex.
    sitemap({
      filter: (seite) =>
        !seite.includes('/alle-projekte') && !seite.includes('/korbaktion'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: [
        'stolz-marketing.de',
        'www.stolz-marketing.de',
        'dev.stolz-marketing.de',
        'redesign.stolz-marketing.de',
      ],
    },
  },
});
