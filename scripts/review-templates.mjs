import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require=createRequire(new URL('../mcp/package.json',import.meta.url));
const {createCanvas,GlobalFonts}=require('@napi-rs/canvas');
const root=path.resolve(new URL('..',import.meta.url).pathname),dir=process.argv[2]||'/tmp/framegrove-review';fs.mkdirSync(dir,{recursive:true});
for(const file of fs.readdirSync(path.join(root,'mcp/fonts')))if(file.endsWith('.ttf'))GlobalFonts.registerFromPath(path.join(root,'mcp/fonts',file));
const w={console,document:{currentScript:null,write(){},fonts:null,createElement:()=>createCanvas(1,1)},navigator:{language:'en'},localStorage:{getItem:()=>null,setItem(){}},location:{pathname:'/'}};w.window=w;vm.createContext(w);
for(const f of ['engine/i18n.js','engine/frames.js','engine/devices.js','engine/render.js','engine/model.js','engine/tpl-dsl.js','engine/templates/legacy.js','engine/templates/set-a.js','engine/templates/set-b.js','engine/templates/set-c.js','engine/templates/set-d.js','engine/templates/set-e.js','engine/templates/set-f.js','engine/templates/studio.js','engine/templates/duo.js','common.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),w,{filename:f});
const groups={phones:w.TEMPLATES.filter(t=>t.key.startsWith('studio-')),creative:w.TEMPLATES.filter(t=>t.collection==='creative'),duo:w.TEMPLATES.filter(t=>t.collection==='duo'),tablet:w.TEMPLATES.filter(t=>t.key.startsWith('tablet-'))};
for(const [group,ts]of Object.entries(groups))for(let start=0;start<ts.length;start+=4){
 const list=ts.slice(start,start+4),width=6*260,height=4*620,board=createCanvas(width,height),ctx=board.getContext('2d');ctx.fillStyle='#e7ebdf';ctx.fillRect(0,0,width,height);
 list.forEach((tpl,row)=>{
  ctx.fillStyle='#233c2b';ctx.font='600 19px sans-serif';ctx.fillText(tpl.name+' / '+tpl.key,12,row*620+26);
  const o=w.Devices.byId(tpl.sizes[0]),dim=w.Devices.dimensions(o,tpl.orientation),demo=w.UI.mockShot(o.id,tpl.orientation);
  tpl.screens.forEach((screen,col)=>{
   const cv=createCanvas(248,Math.round(248*dim.H/dim.W));w.Render.renderScreen(cv.getContext('2d'),cv.width,cv.height,screen,{lang:'en',defaultLang:'en',imageFor:()=>demo,project:{app:{},languages:{default:'en'}}});ctx.drawImage(cv,col*260+6,row*620+42);
  });
 });fs.writeFileSync(path.join(dir,group+'-'+(start/4+1)+'.jpg'),board.encodeSync('jpeg',87));
}
const social=createCanvas(1200,630),ctx=social.getContext('2d');ctx.fillStyle='#f3f1e9';ctx.fillRect(0,0,1200,630);ctx.fillStyle='#297a5b';ctx.font='600 23px sans-serif';ctx.fillText('FRAMEGROVE / FREE & OPEN SOURCE',55,70);ctx.fillStyle='#1b3028';ctx.font='56px Georgia';ctx.fillText('A better first',55,180);ctx.fillText('impression.',55,243);ctx.font='22px sans-serif';ctx.fillStyle='#627169';ctx.fillText('Creative Assets. iPhone Duo.',55,315);ctx.fillText('Your app. Every canvas.',55,354);ctx.font='16px sans-serif';ctx.fillText('framegrove.bamstudio.dev',55,552);
for(const [key,x,y,W]of[['creative-paper-header',570,45,575],['duo-midnight-inner',610,330,195],['studio-lime',825,330,130]]){
 const tpl=w.TEMPLATES.find(t=>t.key===key),o=w.Devices.byId(tpl.sizes[0]),dim=w.Devices.dimensions(o,tpl.orientation),cv=createCanvas(W,Math.round(W*dim.H/dim.W));w.Render.renderScreen(cv.getContext('2d'),cv.width,cv.height,tpl.screens[0],{lang:'en',defaultLang:'en',imageFor:()=>w.UI.mockShot(o.id,tpl.orientation),project:{app:{},languages:{default:'en'}}});ctx.drawImage(cv,x,y);
}
fs.writeFileSync(path.join(root,'social.png'),social.encodeSync('png'));console.log('Review sheets:',dir);
