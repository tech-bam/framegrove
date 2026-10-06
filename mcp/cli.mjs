#!/usr/bin/env node
/* CLI: aynı motor, terminalden.
   node cli.mjs render --template indie --name "Wallet Coach" --lines lines.txt --shots ./ss [--icon icon.png]
        [--accent "#16a34a"] [--rating "4.8 · 1.2K"] [--lang tr] [--frame android] [--sizes 1290x2796,1080x1920] [--out ./out]
        [--dev-x 8 --dev-y 26 --dev-w 84]   cihaz kutusunu yeniden yerleştir (yüzde; kare/saat çıktılarında işe yarar)
   node cli.mjs project  (aynı argümanlar, --out x.sms.json)  → tarayıcı uygulamasına içe aktarılacak proje
   çok dil: --captions-tr lines.tr.txt --captions-de lines.de.txt (dosya adıyla dil) · --sizes iphone-6.9,ipad-13,android-phone
   node cli.mjs templates */
import fs from 'node:fs';
import path from 'node:path';
import { listTemplates, renderSet, buildBundle } from './render-node.mjs';

const [cmd, ...rest] = process.argv.slice(2);
const args = {};
for (let i = 0; i < rest.length; i++) {
  if (!rest[i].startsWith('--')) continue;
  const k = rest[i].slice(2);
  const v = rest[i + 1] && !rest[i + 1].startsWith('--') ? rest[++i] : true;
  args[k] = v;
}
const IMG = /\.(png|jpe?g|webp)$/i;
function shotsFrom(arg) {
  if (!arg) return [];
  if (fs.statSync(arg, { throwIfNoEntry: false })?.isDirectory()) {
    return fs.readdirSync(arg).filter((f) => IMG.test(f)).sort((a, b) => a.localeCompare(b, 'tr', { numeric: true })).map((f) => path.join(arg, f));
  }
  return String(arg).split(',').map((x) => x.trim()).filter(Boolean);
}
function spec() {
  return {
    template: args.template || 'studio-paper', name: args.name || '', lang: args.lang || 'tr',
    lines: args.lines ? fs.readFileSync(args.lines, 'utf8').split('\n').map((x) => x.trim()).filter(Boolean) : [],
    shots: shotsFrom(args.shots), icon: args.icon, accent: args.accent, rating: args.rating,
    addIcon: !args['no-icon'], frame: args.frame,
    device: (args['dev-x'] || args['dev-y'] || args['dev-w']) ? { x: args['dev-x'], y: args['dev-y'], w: args['dev-w'] } : undefined,
    sizes: args.sizes ? String(args.sizes).split(',') : undefined,
    captions: Object.fromEntries(Object.entries(args).filter(([k]) => k.startsWith('captions-')).map(([k, v]) => [k.slice(9), fs.readFileSync(v, 'utf8').split('\n').map((x) => x.trim()).filter(Boolean)])),
    outDir: args.out || './store-screenshots',
  };
}

if (cmd === 'templates') {
  for (const t of listTemplates()) console.log(`${t.key.padEnd(18)} ${String(t.name).padEnd(32)} ${t.theme.padEnd(9)} ${(t.categories || []).join(',')}`);
} else if (cmd === 'render') {
  const r = await renderSet(spec());
  console.log(`${r.files.length} PNG (${r.screens} screens × ${r.languages.length} lang × ${r.sizes.length} sizes) → ${r.outDir}`);
  r.files.forEach((f) => console.log('  ' + path.relative(process.cwd(), f)));
} else if (cmd === 'project') {
  const s = spec();
  const out = args.out && args.out.endsWith('.json') ? args.out : `${(s.name || 'store-mockup').toLowerCase().replace(/\s+/g, '-')}.sms.json`;
  fs.writeFileSync(out, JSON.stringify(await buildBundle(s)));
  console.log(`proje → ${path.resolve(out)}  (içe aktar: https://framegrove.bamstudio.dev/app/#/projects)`);
} else {
  console.log('kullanım: node cli.mjs templates | render --template … --name … --lines … --shots … | project …');
  process.exit(1);
}
