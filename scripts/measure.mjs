// Misst computed styles + BoundingRects im Original (oder Nachbau).
// Aufruf: node scripts/measure.mjs <url|datei> <breite> <js-expression-datei|inline-js>
import { chromium } from 'playwright';
import { resolve } from 'node:path';
import { readFileSync, existsSync } from 'node:fs';

const [, , target, w = '1440', code] = process.argv;
const url = target.startsWith('http') ? target : 'file://' + resolve(target);
const js = existsSync(code) ? readFileSync(code, 'utf8') : code;

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--allow-file-access-from-files'] });
const page = await browser.newPage({ viewport: { width: +w, height: 900 } });
await page.goto(url, { waitUntil: 'load', timeout: 30000 }).catch(() => {});
await page.waitForTimeout(800);
// Lokale Fonts injizieren, damit Original und Nachbau mit denselben
// selbst gehosteten Schnitten gemessen werden (CDN ist blockiert).
// Kaputte CDN-@font-face-Regeln entfernen (framerusercontent/gstatic sind
// blockiert; sonst greift das Font-Matching nie auf die injizierten Fonts zu).
await page.evaluate(() => {
  for (const sheet of document.styleSheets) {
    try {
      for (let i = sheet.cssRules.length - 1; i >= 0; i--) {
        const rule = sheet.cssRules[i];
        if (rule instanceof CSSFontFaceRule && /framerusercontent|gstatic|fontshare/.test(rule.cssText)) sheet.deleteRule(i);
      }
    } catch {}
  }
});
const fontsDir = resolve('public/fonts');
const face = (fam, file, weight, style = 'normal') => {
  const b64 = readFileSync(`${fontsDir}/${file}`).toString('base64');
  return `@font-face{font-family:'${fam}';src:url(data:font/woff2;base64,${b64}) format('woff2');font-weight:${weight};font-style:${style}}`;
};
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
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);
const result = await page.evaluate(js);
console.log(JSON.stringify(result, null, 2));
await browser.close();
