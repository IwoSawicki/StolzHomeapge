// Stapelt zwei Screenshots (Original oben, Nachbau unten) zum Sichtvergleich.
// Aufruf: node scripts/compare.mjs <original.png> <nachbau.png> <out.png>
import sharp from 'sharp';

const [, , a, b, out] = process.argv;
const bufA = await sharp(a).png().toBuffer();
const bufB = await sharp(b).png().toBuffer();
const mA = await sharp(bufA).metadata();
const mB = await sharp(bufB).metadata();
const width = Math.max(mA.width, mB.width);
const label = (text, w) =>
  Buffer.from(
    `<svg width="${w}" height="22"><rect width="100%" height="100%" fill="#111"/><text x="6" y="16" font-family="sans-serif" font-size="13" fill="#fff">${text}</text></svg>`
  );
await sharp({ create: { width, height: mA.height + mB.height + 44, channels: 3, background: '#ff00ff' } })
  .composite([
    { input: label('ORIGINAL', width), top: 0, left: 0 },
    { input: bufA, top: 22, left: 0 },
    { input: label('NACHBAU', width), top: mA.height + 22, left: 0 },
    { input: bufB, top: mA.height + 44, left: 0 },
  ])
  .png()
  .toFile(out);
console.log('✓', out);
