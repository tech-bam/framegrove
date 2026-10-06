/* Tarayıcı motorunu (../engine) Node'da çalıştırır: @napi-rs/canvas + window/document shim.
   renderSet(spec) → PNG dosyaları; buildBundle(spec) → tarayıcıya içe aktarılabilir proje JSON'u. */
import { createCanvas, loadImage, GlobalFonts, Image } from '@napi-rs/canvas';
import vm from 'node:vm';
import { deflateSync } from 'node:zlib';
import '../engine/png.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ENGINE = path.join(here, '..', 'engine');
const FONTS_DIR = path.join(here, 'fonts');

let ctx = null;
function engine() {
  if (ctx) return ctx;
  if (fs.existsSync(FONTS_DIR)) for (const f of fs.readdirSync(FONTS_DIR)) if (/\.(ttf|otf)$/i.test(f)) { try { GlobalFonts.registerFromPath(path.join(FONTS_DIR, f)); } catch (e) { /* atla */ } }
  for (const ef of ['/System/Library/Fonts/Apple Color Emoji.ttc', '/usr/share/fonts/truetype/noto/NotoColorEmoji.ttf']) if (fs.existsSync(ef)) { try { GlobalFonts.registerFromPath(ef); } catch (e) { /* atla */ } }
  const win = {};
  win.window = win; win.console = console; win.Image = Image;
  win.document = { createElement: (tag) => { if (tag !== 'canvas') throw new Error('shim: ' + tag); return createCanvas(1, 1); }, fonts: null, currentScript: null, write: () => {} };
  win.navigator = { language: 'en' };
  win.localStorage = { getItem: () => null, setItem: () => {} };
  vm.createContext(win);
  for (const f of ['i18n.js', 'frames.js', 'devices.js', 'render.js', 'model.js', 'tpl-dsl.js']) vm.runInContext(fs.readFileSync(path.join(ENGINE, f), 'utf8'), win, { filename: f });
  const idx = fs.readFileSync(path.join(ENGINE, 'templates', 'index.js'), 'utf8');
  const list = JSON.parse((idx.match(/var FILES = (\[[^\]]*\])/) || [])[1].replace(/'/g, '"'));
  for (const f of list) { const p = path.join(ENGINE, 'templates', f); if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, 'utf8'), win, { filename: f }); }
  ctx = win;
  return win;
}

export function listTemplates() {
  const w = engine();
  return w.TEMPLATES.filter(t => !t.archived).map((t) => ({ key: t.key, name: t.name, description: t.desc, tags: t.tags || [], categories: t.cats || [], theme: t.theme, skill: t.skill, screens: t.screens.length, orientation: t.orientation, sizes: t.sizes, collection: t.collection, panoramic: !!t.background }));
}

export function listOutputs(){
 const w=engine();return w.Devices.OUTPUTS.map(o=>({...o,slot:w.Devices.slotForOutput(o.id),formats:o.pngOnly?['png']:['png','jpeg']}));
}
export async function inspectAssets(paths,outputId,orientation='portrait'){
 const w=engine(),o=outputId?w.Devices.byId(outputId):null;
 if(outputId&&!o)throw Error('Unknown output: '+outputId);
 const expected=o?w.Devices.dimensions(o,orientation):null;
 return Promise.all(paths.map(async file=>{
  try{
   const bytes=fs.readFileSync(file),png=bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])),im=await loadImage(bytes);
   const type=png?bytes[25]:null,alpha=png&&(type===4||type===6),issues=[];
   let transparency=alpha;
   if(png)for(let offset=8;offset+12<=bytes.length;){const length=bytes.readUInt32BE(offset);if(bytes.toString('ascii',offset+4,offset+8)==='tRNS')transparency=true;offset+=12+length;}
   const jpeg=bytes[0]===255&&bytes[1]===216;
   if(expected&&(im.width!==expected.W||im.height!==expected.H))issues.push(`Expected ${expected.W}×${expected.H}`);
   if(o?.store==='apple'&&transparency)issues.push('Apple screenshots and creative assets must have no alpha channel');
   if(o?.store==='apple'&&!png&&!jpeg)issues.push('Use PNG or JPEG');
   if(o?.pngOnly&&!png)issues.push('This placement requires PNG');
   return{file,width:im.width,height:im.height,format:png?'png':jpeg?'jpeg':'other',pngColorType:type,hasAlphaChannel:alpha,hasTransparency:transparency,valid:issues.length===0,issues};
  }catch(e){return{file,valid:false,issues:[e.message]};}
 }));
}

const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };
async function img(p) { if (!p) return null; if (/^data:/.test(p)) return loadImage(Buffer.from(p.split(',')[1], 'base64')); return loadImage(fs.readFileSync(p)); }
const toData = (p) => (/^data:/.test(p) ? p : `data:${MIME[path.extname(p).toLowerCase()] || 'image/png'};base64,${fs.readFileSync(p).toString('base64')}`);

/**
 * spec = { template, name, lang:'en', languages?:['en','tr'], captions?: { en:['Title [x] | Subtitle',…], tr:[…] }, lines?:[…],
 *          shots: ['01.png',…] | { global:[…], iphone:[…], ipad:[…], 'android-phone':[…] }, icon?, accent?, rating?, addIcon?, frame?,
 *          sizes:['iphone-6.9'], exportLanguages?, outDir, device?: { x?, y?, w? } (yüzde; kare çıktılarda
 *          şablonun telefon için ayarlanmış cihaz kutusunu yeniden yerleştirmek için) }
 * Tarayıcıdaki Model ile birebir proje kurar.
 */
export async function buildProject(spec) {
  const w = engine();
  const { Model, TEMPLATES, Render } = w;
  const tpl = TEMPLATES.find((t) => t.key === (spec.template || 'studio-paper'));
  if (!tpl) throw new Error('unknown template: ' + spec.template + ' (see list_templates)');
  const lang = spec.lang || 'en';
  const languages = [...new Set([lang, ...(spec.languages || []), ...Object.keys(spec.captions || {})])];
  const project = Model.newProject(spec.name || tpl.name, { lang, orientation: tpl.orientation, sizes: spec.sizes });
  project.languages.list = languages;
  Model.applyTemplate(project, tpl);
  if (spec.sizes && spec.sizes.length) project.sizes = spec.sizes.slice();
  const captions = Object.assign({}, spec.captions || {});
  if (spec.lines && !captions[lang]) captions[lang] = spec.lines;
  const slotMap = Array.isArray(spec.shots) ? { global: spec.shots } : (spec.shots || {});
  const shotCount = Math.max(0, ...Object.values(slotMap).map((a) => (a || []).length));
  const n = Math.max(shotCount, ...Object.values(captions).map((a) => a.length), 0);
  while (n > project.screens.length) { const ns = Model.clone(project.screens[project.screens.length - 1]); ns.id = Model.uid('s'); ns.layers.forEach((L) => { L.id = Model.uid(); }); project.screens.push(ns); }
  if (n > 0 && spec.trim !== false) project.screens = project.screens.slice(0, n);
  Object.entries(captions).forEach(([l, lines]) => lines.forEach((ln, i) => {
    const s = project.screens[i]; if (!s) return;
    const [a, b] = String(ln).split('|').map((x) => (x || '').trim());
    const T = s.layers.filter((L) => L.type === 'text');
    if (T[0]) Model.setText(T[0], l, a.replace(/\\n/g, '\n'));
    if (T[1]) { if (b) { T[1].hidden = false; Model.setText(T[1], l, b); } else if (l === lang) T[1].hidden = true; }
  }));
  const assets = {};
  const put = (p) => { const id = 'a' + Math.random().toString(36).slice(2, 12); assets[id] = toData(p); return id; };
  Object.entries(slotMap).forEach(([slot, files]) => (files || []).forEach((p, i) => { const s = project.screens[i]; if (!s || !p) return; const D = s.layers.find((L) => L.type === 'device'); if (D) Model.setShot(D, slot === 'android' ? 'android-phone' : slot, put(p)); }));
  if (spec.icon) project.app.icon = put(spec.icon);
  const accent = spec.accent;
  project.screens.forEach((s) => s.layers.forEach((L) => {
    if (accent && L.type === 'text' && L.role !== 'subtitle') L.accent = accent;
    if (spec.frame && L.type === 'device' && L.frame !== 'none') L.frame = spec.frame;
    if (spec.device && L.type === 'device') ['x', 'y', 'w'].forEach((k) => { if (spec.device[k] != null) L[k] = Number(spec.device[k]); });
    if (accent && L.type === 'element' && (L.kind === 'icon' || L.kind === 'note')) L.iconBg = accent;
  }));
  const first = project.screens[0];
  if (first) {
    first.layers = first.layers.filter((L) => !(L.type === 'element' && (L.kind === 'rating' || L.kind === 'icon')));
    const title = first.layers.find((L) => L.type === 'text');
    const light = Render.contrastFor((title && title.color) || '#ffffff') === '#111214';
    if (spec.addIcon !== false && tpl.collection !== 'creative' && tpl.collection !== 'duo' && spec.name) first.layers.push(Model.newLayer('element', { kind: 'icon', text: { [lang]: spec.name }, x: 50, y: 3.5, size: 2.8, iconBg: accent || '#6d5ce7', color: (title && title.color) || '#ffffff' }));
    if (spec.rating) first.layers.push(Model.newLayer('element', { kind: 'rating', text: { [lang]: spec.rating }, x: 50, y: title ? title.y + (title.h || 12) + 1 : 20, size: 2.4, bg: light ? '#ffffff' : '#111214', color: light ? '#111214' : '#ffffff' }));
  }
  return { project, assets };
}

export async function renderSet(spec) {
  const w = engine();
  const { Render, Devices } = w;
  const { project, assets } = await buildProject(spec);
  const images = {};
  for (const [id, data] of Object.entries(assets)) images[id] = await img(data);
  const imageFor = (id) => images[id] || null;
  const sizes = spec.sizes && spec.sizes.length ? spec.sizes : project.sizes;
  const langs = spec.exportLanguages || project.languages.list;
  const outDir = path.resolve(spec.outDir || './store-screenshots');
  const slug = (x) => String(x || 'screen').toLowerCase().replace(/[ıİ]/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'screen';
  const files = [];
  for (const sid of sizes) {
    const o = Devices.byId(sid) || (/^\d+x\d+$/.test(sid) ? { id: sid, w: +sid.split('x')[0], h: +sid.split('x')[1] } : null);
    if (!o) throw new Error('unknown size: ' + sid);
    const { W, H } = Devices.dimensions(o, project.orientation);
    for (const l of langs) {
      const dir = path.join(outDir, ...(langs.length > 1 ? [l] : []), ...(sizes.length > 1 ? [`${o.id}_${W}x${H}`] : []));
      fs.mkdirSync(dir, { recursive: true });
      for (const [i, s] of project.screens.entries()) {
        const c = createCanvas(W, H);
        const context = c.getContext('2d', (o.store === 'apple') ? { alpha: false } : undefined);
        Render.renderScreen(context, W, H, s, { lang: l, defaultLang: project.languages.default, imageFor, shotSlot: Devices.slotForOutput(o.id) || 'global', pan: s.bg && s.bg.panorama ? { i, n: project.screens.length } : null, project });
        const title = Render.textOf((s.layers.find((L) => L.type === 'text') || {}).text, l, project.languages.default);
        const file = path.join(dir, `${String(i + 1).padStart(2, '0')}-${slug(title)}.png`);
        fs.writeFileSync(file, (o.store === 'apple') ? await globalThis.OpaquePNG.encode(c, deflateSync) : c.encodeSync('png'));
        files.push(file);
      }
    }
  }
  return { files, screens: project.screens.length, outDir, template: project.template, languages: langs, sizes };
}

/** Tarayıcı uygulamasına (Projects → Import project) yüklenebilir .sms.json */
export async function buildBundle(spec) { const { project, assets } = await buildProject(spec); return { format: 'sms-project-v3', project, assets }; }
