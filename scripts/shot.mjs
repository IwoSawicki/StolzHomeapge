// Screenshot-Helfer für den Abgleich Nachbau ↔ Original.
// Aufruf: node scripts/shot.mjs <url|datei> <out.png> [breite] [höhe] [fullpage|selektor]
import { chromium } from 'playwright';
import { resolve } from 'node:path';

const [, , target, out, w = '1440', h = '900', mode = 'fullpage'] = process.argv;
const url = target.startsWith('http') ? target : 'file://' + resolve(target);

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--allow-file-access-from-files'] });
const page = await browser.newPage({ viewport: { width: +w, height: +h } });
await page.goto(url, { waitUntil: 'load', timeout: 30000 }).catch((e) => console.error('goto:', e.message));
// Beim Original (file://) die selbst gehosteten Fonts injizieren, damit
// Original und Nachbau mit identischen Schriften verglichen werden
// (Font-CDNs sind aus der Umgebung nicht erreichbar).
if (url.startsWith('file://')) {
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
  const { readFileSync } = await import('node:fs');
  const fontsDir = resolve('public/fonts');
  const face = (fam, file, w, style = 'normal') =>
    `@font-face{font-family:'${fam}';src:url(data:font/woff2;base64,${readFileSync(`${fontsDir}/${file}`).toString('base64')}) format('woff2');font-weight:${w};font-style:${style}}`;
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
// Appear-Anfangszustaende neutralisieren (Framer-JS fehlt lokal):
// Elemente mit inline opacity:0 + translateY sichtbar machen.
await page.evaluate(() => {
  for (const el of document.querySelectorAll('[style*="opacity:0"], [style*="opacity: 0"]')) {
    el.style.opacity = '1';
    if (/translateY/.test(el.style.transform)) el.style.transform = 'none';
  }
});
// Einmal durchscrollen, damit lazy geladene Bilder im Screenshot erscheinen
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 800) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 40));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(1200);
if (mode === 'fullpage') await page.screenshot({ path: out, fullPage: true });
else if (mode === 'viewport') await page.screenshot({ path: out });
else if (mode.startsWith('clip:')) {
  const [x, y, cw, ch] = mode.slice(5).split(',').map(Number);
  await page.screenshot({ path: out, fullPage: true, clip: { x, y, width: cw, height: ch } });
} else await page.locator(mode).first().screenshot({ path: out });
await browser.close();
console.log('✓', out);
