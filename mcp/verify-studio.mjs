import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { buildProject, renderSet } from './render-node.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const w = { console, document: { currentScript: null, write() {}, fonts:null, createElement:()=>createCanvas(1,1) }, navigator:{language:'en'}, localStorage:{getItem:()=>null,setItem(){}} };
w.window=w;vm.createContext(w);
for(const file of ['i18n.js','frames.js','devices.js','render.js','model.js','tpl-dsl.js','templates/index.js', ...['legacy','set-a','set-b','set-c','set-d','set-e','set-f','studio'].map(x=>'templates/'+x+'.js')]) vm.runInContext(fs.readFileSync(path.join(root,'engine',file),'utf8'),w,{filename:file});
const templates=w.TEMPLATES.filter(t=>!t.archived);
assert.equal(templates.length,44); assert.equal(new Set(w.TEMPLATES.map(t=>t.key)).size,w.TEMPLATES.length);
assert(w.TEMPLATES.find(t=>t.key==='pluto').archived,'Legacy keys must remain available');
const sheet=createCanvas(4*330,11*300), sheetCtx=sheet.getContext('2d');sheetCtx.fillStyle='#e5e5df';sheetCtx.fillRect(0,0,sheet.width,sheet.height);
let rendered=0;
for(const [idx,tpl] of templates.entries()) {
 const {project}=await buildProject({template:tpl.key,addIcon:false});
 assert.equal(project.sizes[0],tpl.sizes[0]);assert.equal(project.screens.length,tpl.screens.length);
 for(const id of tpl.sizes) {
  const output=w.Devices.byId(id);assert(output);
  const {W,H}=w.Devices.dimensions(output,project.orientation);
  assert.equal(W>H,tpl.orientation==='landscape');
  for(const lang of ['en','tr']) for(const screen of project.screens) {
   const cv=createCanvas(300,Math.round(300*H/W));
   w.Render.renderScreen(cv.getContext('2d'),cv.width,cv.height,screen,{lang,defaultLang:'en',imageFor:()=>null,project});
   assert(cv.encodeSync('png').length>1000); rendered++;
  }
 }
 const out=w.Devices.byId(tpl.sizes[0]), {W,H}=w.Devices.dimensions(out,project.orientation);
 const h=250,cv=createCanvas(Math.round(h*W/H),h);
 w.Render.renderScreen(cv.getContext('2d'),cv.width,cv.height,project.screens[0],{lang:'tr',defaultLang:'en',imageFor:()=>null,project});
 const x=(idx%4)*330,y=Math.floor(idx/4)*300;const scale=Math.min(310/cv.width,250/cv.height);sheetCtx.drawImage(cv,x+10,y+28,cv.width*scale,cv.height*scale);sheetCtx.fillStyle='#222';sheetCtx.font='14px sans-serif';sheetCtx.fillText(tpl.name,x+10,y+18);
}
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'store-studio-'));
fs.writeFileSync(path.join(temp,'collection.png'),sheet.encodeSync('png'));
for(const placement of ['header','search','universal']) {
 const result=await renderSet({template:'creative-paper-'+placement,addIcon:false,outDir:path.join(temp,placement)});
 const png=fs.readFileSync(result.files[0]), im=await loadImage(png), o=w.Devices.byId('apple-'+placement);
 assert.equal(im.width,o.w);assert.equal(im.height,o.h);
 assert.equal(png[25],2,'Apple PNG must be RGB without alpha channel');
}
const {project:override}=await buildProject({template:'creative-paper-header',sizes:['apple-search'],addIcon:false});assert.equal(override.sizes[0],'apple-search');
assert.deepEqual(JSON.parse(JSON.stringify(w.Devices.dimensions(w.Devices.byId('apple-header'),'portrait'))),{W:3840,H:1646});
console.log(JSON.stringify({templates:templates.length,rendered,applePng:'RGB / exact dimensions',review:path.join(temp,'collection.png')}));
