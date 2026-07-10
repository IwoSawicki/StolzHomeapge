// Screenshot-Helfer für den Abgleich Nachbau ↔ Original.
// Aufruf: node scripts/shot.mjs <url|datei> <out.png> [breite] [höhe] [fullpage|selektor]
import { chromium } from 'playwright';
import { resolve } from 'node:path';

const [, , target, out, w = '1440', h = '900', mode = 'fullpage'] = process.argv;
const url = target.startsWith('http') ? target : 'file://' + resolve(target);

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: +w, height: +h } });
await page.goto(url, { waitUntil: 'load', timeout: 30000 }).catch((e) => console.error('goto:', e.message));
// Beim Original (file://) die selbst gehosteten Fonts injizieren, damit
// Original und Nachbau mit identischen Schriften verglichen werden
// (Font-CDNs sind aus der Umgebung nicht erreichbar).
if (url.startsWith('file://')) {
  const fontsDir = resolve('public/fonts');
  const face = (fam, file, w, style = 'normal') =>
    `@font-face{font-family:'${fam}';src:url('file://${fontsDir}/${file}') format('woff2');font-weight:${w};font-style:${style}}`;
  await page.addStyleTag({
    content: [
      face('Inter', 'inter-400-normal.woff2', 400),
      face('Inter', 'inter-400-italic.woff2', 400, 'italic'),
      face('Inter', 'inter-500-normal.woff2', 500),
      face('Inter', 'inter-500-italic.woff2', 500, 'italic'),
      face('Inter', 'inter-600-normal.woff2', 600),
      face('Inter', 'inter-700-normal.woff2', 700),
      face('Inter', 'inter-700-italic.woff2', 700, 'italic'),
      face('Inter Display', 'inter-display-800-normal.woff2', 800),
      face('Inter Display', 'inter-display-500-italic.woff2', 500, 'italic'),
      face('Geist', 'geist-500-normal.woff2', 500),
      face('Geist', 'geist-600-normal.woff2', 600),
      face('Geist', 'geist-700-normal.woff2', 700),
      face('Plus Jakarta Sans', 'plus-jakarta-sans-600-normal.woff2', 600),
    ].join('\n'),
  });
}
await page.waitForTimeout(1200);
if (mode === 'fullpage') await page.screenshot({ path: out, fullPage: true });
else if (mode === 'viewport') await page.screenshot({ path: out });
else await page.locator(mode).first().screenshot({ path: out });
await browser.close();
console.log('✓', out);
