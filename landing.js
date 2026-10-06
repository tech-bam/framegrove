(function(){
 I18N.set(I18N.detect()); UI.renderNav('');UI.renderFooter();I18N.apply(document.body);
 const templates=TEMPLATES.filter(t=>!t.archived), find=k=>templates.find(t=>t.key===k);
 document.querySelector('#stTpl').textContent=templates.length;
 function draw(canvas,key,index=0){
  const tpl=find(key);if(!tpl||!canvas)return;
  const output=Devices.byId(tpl.sizes[0]),dims=Devices.dimensions(output,tpl.orientation);
  canvas.width=900;canvas.height=Math.round(900*dims.H/dims.W);
  const demo=UI.mockShot(output.id,tpl.orientation);
  Render.renderScreen(canvas.getContext('2d'),canvas.width,canvas.height,tpl.screens[index],{lang:I18N.lang,defaultLang:'en',imageFor:()=>demo,project:{app:{},languages:{default:'en'}}});
 }
 function collection(key){
  const tpl=find('studio-'+key),strip=document.querySelector('#collectionStrip');strip.replaceChildren();
  tpl.screens.forEach((s,i)=>{const cv=document.createElement('canvas');cv.setAttribute('aria-label',tpl.name+' · '+(i+1));strip.append(cv);draw(cv,tpl.key,i);});
  document.querySelectorAll('[data-collection]').forEach(b=>{const on=b.dataset.collection===key;b.classList.toggle('on',on);b.setAttribute('aria-pressed',String(on));});
 }
 function render(){
  [['heroMain','creative-paper-header'],['heroDuo','duo-midnight-inner'],['heroPhone','studio-lime'],['assetHeader','creative-paper-header'],['assetSearch','creative-midnight-search'],['assetUniversal','creative-lime-universal']].forEach(([id,key])=>draw(document.getElementById(id),key));
  const cv=document.querySelector('#duoShowcase');cv.width=1100;cv.height=780;const ctx=cv.getContext('2d');
  [['duo-paper-inner',0,0,540],['duo-midnight-outer',580,60,460]].forEach(([key,x,y,width])=>{
   const tmp=document.createElement('canvas');draw(tmp,key);ctx.drawImage(tmp,x,y,width,width*tmp.height/tmp.width);
  });
  collection(document.querySelector('[data-collection].on')?.dataset.collection||'paper');
 }
 document.querySelectorAll('[data-collection]').forEach(b=>b.addEventListener('click',()=>collection(b.dataset.collection)));
 render();if(document.fonts)document.fonts.ready.then(render);
})();
