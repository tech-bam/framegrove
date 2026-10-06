import assert from 'node:assert/strict';import fs from 'node:fs';import vm from 'node:vm';import path from 'node:path';import{fileURLToPath}from'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),w={console};w.window=w;w.document={currentScript:null,write(){}};vm.createContext(w);
for(const f of ['frames.js','devices.js','render.js','model.js','resize.js','tpl-dsl.js','templates/index.js','templates/studio.js','templates/duo.js'])vm.runInContext(fs.readFileSync(path.join(root,'engine',f),'utf8'),w,{filename:f});
assert.equal(w.Devices.byId('1200x630').fixed,true);for(const id of ['0x0','63x500','20000x100','16384x16384','NaNx300'])assert.equal(w.Devices.byId(id),undefined);
let count=0;
for(const tpl of w.TEMPLATES.filter(t=>!t.archived)){
 const p=w.Model.newProject('Test');w.Model.applyTemplate(p,tpl);p.languages.list=['en','tr','de'];const device=p.screens[0].layers.find(l=>l.type==='device');if(device){device.shots={global:'aGLOBAL','iphone-duo-inner':'aINNER','iphone-duo-outer':'aOUTER'};}
 const before=JSON.stringify(p);
 for(const target of ['apple-header','iphone-duo-inner','social-square','social-story','presentation','1200x630'])for(const mode of ['fit','adapt']){
  const v=w.Model.createVariation(p,p.sizes[0],target,'portrait',mode);assert.equal(JSON.stringify(p),before);assert.notEqual(v.id,p.id);assert.equal(v.sourceProject,p.id);assert.deepEqual(Array.from(v.sizes),[target]);assert.deepEqual(Array.from(v.languages.list),['en','tr','de']);assert.equal(v.screens.length,p.screens.length);
  v.screens.forEach((s,i)=>s.layers.forEach((l,j)=>{const old=p.screens[i].layers[j];assert.deepEqual(JSON.parse(JSON.stringify(l.text||{})),JSON.parse(JSON.stringify(old.text||{})));if(old.shots)for(const[k,val]of Object.entries(old.shots))if(k!=='global')assert.equal(l.shots[k],val);for(const k of ['x','y','w','h','size'])if(l[k]!=null)assert(Number.isFinite(l[k]),tpl.key+' '+target+' '+k);
   if(l.type==='device'&&!l.hidden){const d=w.Devices.dimensions(w.Devices.byId(target),v.orientation),box=w.Render.layerBox(d.W,d.H,l);if(mode==='adapt')assert(box.x>=0&&box.y>=0&&box.x+box.w<=d.W+.01&&box.y+box.h<=d.H+.01, 'adapted device must fit');}
  }));count++;
 }
}
assert.throws(()=>w.Model.createVariation(w.Model.newProject('Invalid'),'iphone-6.9','20x20','portrait'));
console.log(JSON.stringify({canvasVariations:count,sourcePreserved:true,captionsAndDeviceSlotsPreserved:true,customDimensionValidation:'pass'}));
