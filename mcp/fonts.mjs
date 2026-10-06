#!/usr/bin/env node
/* Template fonts (Google Fonts, OFL). They are cached once per machine, not shipped in the npm package.
   Cache: $FRAMEGROVE_FONTS, else $XDG_CACHE_HOME/framegrove/fonts, else ~/.cache/framegrove/fonts.
   A non-browser User-Agent makes the Google Fonts CSS API return TTF links. */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const FAMILIES = [
  'Inter:wght@400;500;600;700;800;900', 'Manrope:wght@400;500;600;700;800', 'Plus+Jakarta+Sans:wght@400;500;600;700;800',
  'Outfit:wght@400;500;600;700;800;900', 'Sora:wght@400;500;600;700;800', 'Space+Grotesk:wght@400;500;600;700',
  'Bricolage+Grotesque:wght@400;500;600;700;800', 'Nunito:wght@400;600;700;800;900', 'Unbounded:wght@400;500;600;700;800;900',
  'Bebas+Neue', 'Playfair+Display:wght@400;500;600;700;800;900', 'Fraunces:wght@400;500;600;700;800;900', 'DM+Serif+Display', 'Instrument+Serif',
  'Rubik:wght@400;500;600;700;800;900', 'Poppins:wght@400;500;600;700;800;900', 'Montserrat:wght@400;500;600;700;800;900', 'DM+Sans:wght@400;500;600;700;800;900', 'Lexend:wght@400;500;600;700;800;900', 'Work+Sans:wght@400;500;600;700;800;900', 'Roboto:wght@400;500;700;900', 'Baloo+2:wght@400;500;600;700;800', 'Fredoka:wght@400;500;600;700', 'Lora:wght@400;500;600;700',
];
const UA = 'Mozilla/4.0 (compatible; framegrove-fonts)';
const here = path.dirname(fileURLToPath(import.meta.url));
const MARKER = '.complete';

export function fontsDir() {
  if (process.env.FRAMEGROVE_FONTS) return path.resolve(process.env.FRAMEGROVE_FONTS);
  const local = path.join(here, 'fonts'); // source checkouts that ran `npm run fonts` before the cache existed
  if (fs.existsSync(path.join(local, MARKER))) return local;
  return path.join(process.env.XDG_CACHE_HOME || path.join(os.homedir(), '.cache'), 'framegrove', 'fonts');
}

export const fontsReady = (dir = fontsDir()) => fs.existsSync(path.join(dir, MARKER));

/** Downloads missing font files. `log` must not write to stdout when running as an MCP server. */
export async function downloadFonts(dir = fontsDir(), log = () => {}) {
  fs.mkdirSync(dir, { recursive: true });
  let n = 0;
  for (const fam of FAMILIES) {
    const res = await fetch(`https://fonts.googleapis.com/css2?family=${fam}&display=swap`, { headers: { 'User-Agent': UA } });
    if (!res.ok) throw new Error(`Google Fonts ${res.status} for ${fam}`);
    for (const b of (await res.text()).split('@font-face').slice(1)) {
      const family = (b.match(/font-family:\s*'([^']+)'/) || [])[1];
      const weight = (b.match(/font-weight:\s*(\d+)/) || [])[1] || '400';
      const url = (b.match(/url\((https:[^)]+\.ttf)\)/) || [])[1];
      if (!family || !url) continue;
      const file = path.join(dir, `${family.replace(/\s+/g, '')}-${weight}.ttf`);
      if (fs.existsSync(file)) continue;
      const font = await fetch(url);
      if (!font.ok) throw new Error(`font download ${font.status}: ${url}`);
      fs.writeFileSync(file + '.part', Buffer.from(await font.arrayBuffer()));
      fs.renameSync(file + '.part', file);
      n++;
      log('✓ ' + path.basename(file));
    }
  }
  fs.writeFileSync(path.join(dir, MARKER), new Date().toISOString());
  return { dir, downloaded: n };
}

if (process.argv[1] && fs.realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { dir, downloaded } = await downloadFonts(fontsDir(), console.log);
  console.log(`${downloaded} font files downloaded → ${dir}`);
}
