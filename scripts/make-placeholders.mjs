// Erzeugt Platzhalter-Bilder in den exakten Maßen der Original-Assets.
// Hintergrund: framerusercontent.com ist aus dieser Build-Umgebung nicht
// erreichbar (Egress-Policy 403). Sobald die Original-Bilder verfügbar sind,
// werden sie unter GLEICHEM Dateinamen in src/assets/ abgelegt — kein
// Code-Change nötig. Mapping Original-URL → Zieldatei siehe
// docs/DESIGN-SYSTEM.md (Abschnitt „Bilder").
//
// Aufruf: node scripts/make-placeholders.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'src', 'assets');
mkdirSync(outDir, { recursive: true });

// name, Breite, Höhe, Original-Hash (framerusercontent.com/images/…)
const images = [
  ['stolz-marketing-dashboard-auswertung.png', 1672, 941, 'sGKta004kQytOPjOrm4SRWFkv0.png'],
  ['leistung-kundengewinnung.png', 645, 931, 'MSEgnmYfk3YCG5Q92etBwkI6tM.png'],
  ['leistung-mitarbeitergewinnung.png', 1228, 712, 'DcpfTXNhMMqeiUYKPZKBW342AUA.png'],
  ['leistung-sichtbarkeit-google-ki.png', 1448, 1086, 'GCl9FUkRRgOwAZGbcXzc3CG4Gw.png'],
  ['prozess-workshop-strategie.png', 538, 740, 'nNyHDv8BNGHKAVZYuRQnU.png'],
  ['prozess-umsetzung.jpg', 2268, 4032, 'Q5r7fpAq13uQIpsgMW4HOugIBg.jpg'],
  ['prozess-skalierung-optimierung.png', 2342, 1561, 'PKIazMQyiejlgMtrHhyFbsAbGQ.png'],
  ['projekt-s-tech-fahrzeugbau.png', 952, 1690, 'aYgMfimlHcPCGWKxNr32g9oGyvY.png'],
  ['projekt-saan-wasserstrahl.png', 1024, 1826, 'ZJapR4hJ1ypWXF7uRVXdHLOkR8.png'],
  ['projekt-raum-konzept.png', 1020, 1812, 'Za6hHwGHvKvFYT0XRSZ476WUsA.png'],
  ['og-image-stolz-marketing.png', 1200, 630, '7sUkiGMPAINKhFQUVwpFkQvCCwk.png'],
];

for (const [name, w, h, orig] of images) {
  const fontSize = Math.max(18, Math.round(Math.min(w, h) / 18));
  const label = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#E5EAF0"/>
    <rect x="1.5" y="1.5" width="${w - 3}" height="${h - 3}" fill="none" stroke="#5A6272" stroke-width="3" stroke-dasharray="12 8"/>
    <text x="50%" y="48%" text-anchor="middle" font-family="sans-serif" font-size="${fontSize}" fill="#5A6272">Platzhalter ${w}×${h}</text>
    <text x="50%" y="48%" dy="${fontSize * 1.5}" text-anchor="middle" font-family="sans-serif" font-size="${Math.round(fontSize * 0.62)}" fill="#5A6272">${name}</text>
  </svg>`;
  const buf = Buffer.from(label);
  const img = sharp(buf);
  const out = join(outDir, name);
  if (name.endsWith('.jpg')) await img.jpeg({ quality: 80 }).toFile(out);
  else await img.png().toFile(out);
  console.log(`✓ ${name} (${w}×${h})  ←  ${orig}`);
}
