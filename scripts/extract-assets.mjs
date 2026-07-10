// Extrahiert alle Bild- und Font-URLs aus original/*.html.
// Ausgabe: scripts/assets-manifest.json mit allen gefundenen URLs,
// dedupliziert, inkl. Fundstelle (Datei) und Kontext (img/srcset/font-face/css).
//
// Aufruf: node scripts/extract-assets.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const originalDir = join(root, 'original');

const found = new Map(); // url -> { url, kind, files:Set, meta }

function add(url, kind, file, meta = {}) {
  if (!url || url.startsWith('data:')) return;
  const key = url;
  if (!found.has(key)) found.set(key, { url, kind, files: new Set() });
  const entry = found.get(key);
  entry.files.add(file);
  // Metadaten (family/weight/alt/…) auch nachträglich ergänzen
  for (const [k, v] of Object.entries(meta)) if (v != null && entry[k] == null) entry[k] = v;
}

for (const file of readdirSync(originalDir).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(join(originalDir, file), 'utf8');

  // <img src> und srcset (auch source/srcset)
  for (const m of html.matchAll(/<img[^>]*>/g)) {
    const tag = m[0];
    const src = tag.match(/\ssrc="([^"]+)"/)?.[1];
    const srcset = tag.match(/\ssrcset="([^"]+)"/)?.[1];
    const sizes = tag.match(/\ssizes="([^"]+)"/)?.[1];
    const alt = tag.match(/\salt="([^"]*)"/)?.[1];
    if (src) add(src, 'img', file, { sizes, alt });
    if (srcset)
      for (const part of srcset.split(','))
        add(part.trim().split(/\s+/)[0], 'img-srcset', file, { sizes, alt });
  }

  // CSS url(...) — deckt @font-face src und background-image ab
  for (const m of html.matchAll(/url\(\s*(?:"|'|)(https?:\/\/[^)"']+)(?:"|'|)\s*\)/g)) {
    const url = m[1];
    add(url, /\.woff2?|fonts\.gstatic/.test(url) ? 'font' : 'css-url', file);
  }

  // @font-face-Blöcke mit family/weight/style den Font-URLs zuordnen
  for (const m of html.matchAll(/@font-face\s*{[^}]*}/g)) {
    const block = m[0];
    const url = block.match(/url\(\s*(?:"|'|)([^)"']+)(?:"|'|)\s*\)/)?.[1];
    if (!url) continue;
    const family = block.match(/font-family:\s*(?:"|'|)([^;"']+)(?:"|'|)\s*;/)?.[1];
    const weight = block.match(/font-weight:\s*([^;]+);/)?.[1];
    const style = block.match(/font-style:\s*([^;]+);/)?.[1];
    const range = block.match(/unicode-range:\s*([^;]+);/)?.[1];
    add(url, 'font', file, { family, weight, style, range });
  }

  // Videos / Poster / og-image / icons in Meta-Tags und <link>
  for (const m of html.matchAll(/<(?:link|meta|video|source)[^>]*>/g)) {
    const tag = m[0];
    const href = tag.match(/\s(?:href|content|src|poster)="(https?:\/\/[^"]+\.(?:png|jpe?g|webp|avif|svg|gif|mp4|webm|ico))"/)?.[1];
    if (href) add(href, 'meta', file);
  }
}

const list = [...found.values()]
  .map((e) => ({ ...e, files: [...e.files] }))
  .sort((a, b) => a.kind.localeCompare(b.kind) || a.url.localeCompare(b.url));

writeFileSync(join(root, 'scripts', 'assets-manifest.json'), JSON.stringify(list, null, 2));
console.log(`${list.length} eindeutige Asset-URLs gefunden:`);
for (const e of list) {
  console.log(`[${e.kind}] ${e.url}` + (e.family ? `  (${e.family} ${e.weight ?? ''} ${e.style ?? ''})` : ''));
}
