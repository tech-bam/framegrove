#!/usr/bin/env node
/* Framegrove CLI: the same engine as the web editor and the MCP server, from the terminal. */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const { version } = createRequire(import.meta.url)('./package.json');

const HELP = `Framegrove ${version}: App Store, Google Play and iPhone Duo screenshot generator

Usage
  framegrove templates [--json]          List curated templates
  framegrove outputs [--json]            List output ids, exact sizes and format rules
  framegrove render [options]            Render PNG screenshots
  framegrove project [options]           Write an editable .sms.json for the web editor
  framegrove inspect <files…> [--output <id>] [--orientation landscape]
                                         Check dimensions and PNG alpha against a preset
  framegrove fonts                       Download template fonts now (otherwise on first render)
  framegrove mcp                         Start the MCP server on stdio

Render and project options
  --template <key>        Template key (default studio-paper)
  --shots <dir|a.png,b.png>  Screenshots in screen order; a folder is sorted by name
  --lines <file>          Captions, one per line: "Headline [highlight] | Subtitle"
  --captions-<lang> <file>  Extra caption languages, e.g. --captions-de lines.de.txt
  --lang <code>           Default caption language (default en)
  --name <text>           App name      --icon <png>     App icon
  --accent <#hex>         Brand colour  --rating <text>  Rating badge (only if real)
  --frame <id>            iphone-pro | iphone-notch | duo-inner | duo-outer | duo-inner-landscape | android | tablet | none
  --sizes <ids>           Comma separated output ids or WxH, e.g. iphone-6.9,ipad-13,1080x1920
  --dev-x/--dev-y/--dev-w <percent>  Reposition the device box (square or watch outputs)
  --no-icon               Skip the icon on screen 1
  --out <path>            Output folder (render, default ./store-screenshots) or .sms.json (project)

Examples
  npx framegrove render --template creative-paper-header --shots ./screens --out ./header
  npx framegrove render --template studio-paper --shots ./shots --lines en.txt --captions-tr tr.txt --sizes iphone-6.9,android-phone
  npx framegrove inspect ./out/*.png --output iphone-6.9

Docs: https://framegrove.bamstudio.dev/mcp/  ·  Issues: https://github.com/tech-bam/framegrove/issues`;

const [cmd, ...rest] = process.argv.slice(2);
const args = {};
const positional = [];
for (let i = 0; i < rest.length; i++) {
  if (!rest[i].startsWith('--')) { positional.push(rest[i]); continue; }
  const k = rest[i].slice(2);
  args[k] = rest[i + 1] && !rest[i + 1].startsWith('--') ? rest[++i] : true;
}

const IMG = /\.(png|jpe?g|webp)$/i;
function shotsFrom(arg) {
  if (!arg || arg === true) return [];
  if (fs.statSync(arg, { throwIfNoEntry: false })?.isDirectory()) {
    return fs.readdirSync(arg).filter((f) => IMG.test(f)).sort((a, b) => a.localeCompare(b, 'en', { numeric: true })).map((f) => path.join(arg, f));
  }
  return String(arg).split(',').map((x) => x.trim()).filter(Boolean);
}
const readLines = (file) => fs.readFileSync(file, 'utf8').split('\n').map((x) => x.trim()).filter(Boolean);
function spec() {
  return {
    template: args.template || 'studio-paper', name: args.name || '', lang: args.lang || 'en',
    lines: args.lines ? readLines(args.lines) : [],
    shots: shotsFrom(args.shots), icon: args.icon, accent: args.accent, rating: args.rating,
    addIcon: !args['no-icon'], frame: args.frame,
    device: (args['dev-x'] || args['dev-y'] || args['dev-w']) ? { x: args['dev-x'], y: args['dev-y'], w: args['dev-w'] } : undefined,
    sizes: args.sizes ? String(args.sizes).split(',') : undefined,
    captions: Object.fromEntries(Object.entries(args).filter(([k]) => k.startsWith('captions-')).map(([k, v]) => [k.slice(9), readLines(v)])),
    outDir: args.out || './store-screenshots',
  };
}
function missingFiles(s) {
  return [...s.shots, s.icon, args.lines, ...Object.entries(args).filter(([k]) => k.startsWith('captions-')).map(([, v]) => v)]
    .filter((p) => p && p !== true && !fs.existsSync(p));
}

async function main() {
  if (!cmd || cmd === 'help' || cmd === '--help' || cmd === '-h') { console.log(HELP); return; }
  if (cmd === '--version' || cmd === '-v' || cmd === 'version') { console.log(version); return; }
  if (cmd === 'mcp') { await import('./server.mjs'); return; }
  if (cmd === 'fonts') {
    const { fontsDir, downloadFonts } = await import('./fonts.mjs');
    const { dir, downloaded } = await downloadFonts(fontsDir(), console.log);
    console.log(`${downloaded} font files downloaded → ${dir}`);
    return;
  }
  const engine = await import('./render-node.mjs');
  if (cmd === 'templates') {
    const list = engine.listTemplates();
    if (args.json) return console.log(JSON.stringify(list, null, 1));
    for (const t of list) console.log(`${t.key.padEnd(30)} ${String(t.name).padEnd(34)} ${String(t.theme).padEnd(8)} ${t.orientation || ''} ${(t.sizes || []).join(',')}`);
  } else if (cmd === 'outputs') {
    const list = engine.listOutputs();
    if (args.json) return console.log(JSON.stringify(list, null, 1));
    for (const o of list) console.log(`${String(o.id).padEnd(24)} ${`${o.w}×${o.h}`.padEnd(12)} ${String(o.store || '').padEnd(8)} ${o.formats.join('/')}  ${o.label || o.name || ''}`);
  } else if (cmd === 'inspect') {
    if (!positional.length) throw new Error('inspect needs at least one image path');
    const results = await engine.inspectAssets(positional, args.output, args.orientation === 'landscape' ? 'landscape' : 'portrait');
    if (args.json) console.log(JSON.stringify(results, null, 1));
    else for (const r of results) console.log(`${r.valid ? '✓' : '✗'} ${r.file}${r.width ? `  ${r.width}×${r.height} ${r.format}${r.hasAlphaChannel ? ' alpha' : ''}` : ''}${r.issues.length ? '  ' + r.issues.join('; ') : ''}`);
    if (results.some((r) => !r.valid)) process.exitCode = 1;
  } else if (cmd === 'render' || cmd === 'project') {
    const s = spec();
    const missing = missingFiles(s);
    if (missing.length) throw new Error('file not found: ' + missing.join(', '));
    if (cmd === 'render') {
      const r = await engine.renderSet(s);
      console.log(`${r.files.length} PNG (${r.screens} screens × ${r.languages.length} lang × ${r.sizes.length} sizes) → ${r.outDir}`);
      r.files.forEach((f) => console.log('  ' + path.relative(process.cwd(), f)));
    } else {
      const out = typeof args.out === 'string' && args.out.endsWith('.json') ? args.out : `${(s.name || 'framegrove').toLowerCase().replace(/\s+/g, '-')}.sms.json`;
      fs.writeFileSync(out, JSON.stringify(await engine.buildBundle(s)));
      console.log(`project → ${path.resolve(out)}\nImport it at https://framegrove.bamstudio.dev/app/#/projects`);
    }
  } else {
    console.error(`Unknown command: ${cmd}\n`);
    console.error(HELP);
    process.exitCode = 2;
  }
}

main().catch((e) => { console.error('framegrove: ' + e.message); process.exitCode = 1; });
