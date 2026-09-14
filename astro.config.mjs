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
    // (noindex, nirgends verlinkt), /korbaktion ist die Landingpage hinter
    // dem QR-Code auf dem Flyer: ein Kampagnenziel, kein organischer
    // Einstieg, und trägt deshalb ebenfalls noindex.
    sitemap({
      /* Seiten mit noindex gehören nicht in die Sitemap — sonst steht in
         der Search Console beides gegeneinander.

         /alle-projekte und /korbaktion bleiben dauerhaft draußen.
         /vakanzkostenrechner und /ueber-uns sind nur vorläufig draußen:
         sobald WERTE_BESTAETIGT in src/data/vakanzkostenrechner.ts auf
         true steht bzw. Iwo den Über-uns-Text freigegeben hat, müssen
         das noindex auf der Seite UND die Zeile hier zusammen raus. */
      filter: (seite) =>
        !seite.includes('/alle-projekte') &&
        !seite.includes('/korbaktion') &&
        !seite.includes('/vakanzkostenrechner') &&
        !seite.includes('/ueber-uns'),
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
