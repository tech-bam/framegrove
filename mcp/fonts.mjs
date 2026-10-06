#!/usr/bin/env node
/* Şablonların kullandığı Google Fonts ailelerini TTF olarak fonts/ altına indirir (OFL lisanslı).
   Tarayıcı olmayan bir User-Agent ile istek atınca Google TTF bağlantıları döner. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(here, 'fonts');
fs.mkdirSync(out, { recursive: true });

const FAMILIES = [
  'Inter:wght@400;500;600;700;800;900', 'Manrope:wght@400;500;600;700;800', 'Plus+Jakarta+Sans:wght@400;500;600;700;800',
  'Outfit:wght@400;500;600;700;800;900', 'Sora:wght@400;500;600;700;800', 'Space+Grotesk:wght@400;500;600;700',
  'Bricolage+Grotesque:wght@400;500;600;700;800', 'Nunito:wght@400;600;700;800;900', 'Unbounded:wght@400;500;600;700;800;900',
  'Bebas+Neue', 'Playfair+Display:wght@400;500;600;700;800;900', 'Fraunces:wght@400;500;600;700;800;900', 'DM+Serif+Display', 'Instrument+Serif',
  'Rubik:wght@400;500;600;700;800;900', 'Poppins:wght@400;500;600;700;800;900', 'Montserrat:wght@400;500;600;700;800;900', 'DM+Sans:wght@400;500;600;700;800;900', 'Lexend:wght@400;500;600;700;800;900', 'Work+Sans:wght@400;500;600;700;800;900', 'Roboto:wght@400;500;700;900', 'Baloo+2:wght@400;500;600;700;800', 'Fredoka:wght@400;500;600;700', 'Lora:wght@400;500;600;700',
];
const UA = 'Mozilla/4.0 (compatible; store-mockup-fonts)'; // eski UA → TTF

let n = 0;
for (const fam of FAMILIES) {
  const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${fam}&display=swap`, { headers: { 'User-Agent': UA } })).text();
  const blocks = css.split('@font-face').slice(1);
  for (const b of blocks) {
    const family = (b.match(/font-family:\s*'([^']+)'/) || [])[1];
    const weight = (b.match(/font-weight:\s*(\d+)/) || [])[1] || '400';
    const url = (b.match(/url\((https:[^)]+\.ttf)\)/) || [])[1];
    if (!family || !url) continue;
    const file = path.join(out, `${family.replace(/\s+/g, '')}-${weight}.ttf`);
    if (fs.existsSync(file)) continue;
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    fs.writeFileSync(file, buf);
    n++;
    console.log('✓', path.basename(file));
  }
}
console.log(`${n} font dosyası indirildi → ${out}`);
