// Misst computed styles + BoundingRects im Original (oder Nachbau).
// Aufruf: node scripts/measure.mjs <url|datei> <breite> <js-expression-datei|inline-js>
import { chromium } from 'playwright';
import { resolve } from 'node:path';
import { readFileSync, existsSync } from 'node:fs';

const [, , target, w = '1440', code] = process.argv;
const url = target.startsWith('http') ? target : 'file://' + resolve(target);
const js = existsSync(code) ? readFileSync(code, 'utf8') : code;

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: +w, height: 900 } });
await page.goto(url, { waitUntil: 'load', timeout: 30000 }).catch(() => {});
await page.waitForTimeout(800);
// Lokale Fonts injizieren, damit Original und Nachbau mit denselben
// selbst gehosteten Schnitten gemessen werden (CDN ist blockiert).
const fontsDir = resolve('public/fonts');
await page.addStyleTag({
  content: `
  @font-face{font-family:Inter;src:url('file://${fontsDir}/inter-400-normal.woff2') format('woff2');font-weight:400}
  @font-face{font-family:Inter;src:url('file://${fontsDir}/inter-500-normal.woff2') format('woff2');font-weight:500}
  @font-face{font-family:Inter;src:url('file://${fontsDir}/inter-600-normal.woff2') format('woff2');font-weight:600}
  @font-face{font-family:Inter;src:url('file://${fontsDir}/inter-700-normal.woff2') format('woff2');font-weight:700}
  @font-face{font-family:'Inter Display';src:url('file://${fontsDir}/inter-display-800-normal.woff2') format('woff2');font-weight:800}
  @font-face{font-family:'Inter Display';src:url('file://${fontsDir}/inter-display-500-italic.woff2') format('woff2');font-weight:500;font-style:italic}
  @font-face{font-family:Geist;src:url('file://${fontsDir}/geist-500-normal.woff2') format('woff2');font-weight:500}
  @font-face{font-family:Geist;src:url('file://${fontsDir}/geist-600-normal.woff2') format('woff2');font-weight:600}
  @font-face{font-family:Geist;src:url('file://${fontsDir}/geist-700-normal.woff2') format('woff2');font-weight:700}
  @font-face{font-family:'Plus Jakarta Sans';src:url('file://${fontsDir}/plus-jakarta-sans-600-normal.woff2') format('woff2');font-weight:600}
  `,
});
await page.waitForTimeout(400);
const result = await page.evaluate(js);
console.log(JSON.stringify(result, null, 2));
await browser.close();
