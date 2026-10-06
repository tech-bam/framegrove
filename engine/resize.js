/* Create a separate editable variation; the source project and assets stay intact. */
(function(global){
 const {Model,Devices,Render}=global;
 function createVariation(source,sourceId,targetId,orientation,mode='fit'){
  const from=Devices.byId(sourceId),to=Devices.byId(targetId);
  if(!from||!to)throw Error('Invalid canvas dimensions');
  const a=Devices.dimensions(from,source.orientation),b=Devices.dimensions(to,orientation);
  const p=Model.clone(source);p.id=global.Store?global.Store.newId('p'):Model.uid('p');
  p.name=(source.name||'Untitled')+' · '+to.label;p.created=p.updated=Date.now();
  p.sizes=[to.id];p.orientation=orientation;p.sourceProject=source.id;delete p.quick;
  if(to.pngOnly||to.opaque||to.creative){p.settings=p.settings||{};p.settings.format='png';p.settings.transparent=false;}
  p.screens.forEach(s=>{
   const boxes=s.layers.filter(L=>!L.hidden).map(L=>{
    const box=Render.layerBox(a.W,a.H,L),angle=(L.rot||0)*Math.PI/180;
    const w=Math.abs(box.w*Math.cos(angle))+Math.abs(box.h*Math.sin(angle)),h=Math.abs(box.h*Math.cos(angle))+Math.abs(box.w*Math.sin(angle));
    return{x:box.x+box.w/2-w/2,y:box.y+box.h/2-h/2,w,h};
   });
   const left=Math.min(0,...boxes.map(x=>x.x)),top=Math.min(0,...boxes.map(x=>x.y));
   const right=Math.max(a.W,...boxes.map(x=>x.x+x.w)),bottom=Math.max(a.H,...boxes.map(x=>x.y+x.h));
   const scale=Math.min(b.W*.9/(right-left),b.H*.9/(bottom-top));
   const dx=(b.W-(right-left)*scale)/2-left*scale,dy=(b.H-(bottom-top)*scale)/2-top*scale;
   s.layers.forEach(L=>{
    L.x=((L.x||0)*a.W/100*scale+dx)/b.W*100;L.y=((L.y||0)*a.H/100*scale+dy)/b.H*100;
    if(Number.isFinite(L.w))L.w*=a.W*scale/b.W;
    if(Number.isFinite(L.h))L.h*=a.H*scale/b.H;
    if(Number.isFinite(L.size))L.size*=a.W*scale/b.W;
    if(L.type==='device'){
     const sourceShot=L.shots?.[Devices.slotForOutput(sourceId)]||L.shots?.global||L.shot;
     if(sourceShot&&!L.shots?.[Devices.slotForOutput(targetId)]){L.shots=L.shots||{};L.shots.global=sourceShot;}
    }
   });
   if(mode==='adapt')adapt(s,b);
  });return p;
 }
 function adapt(s,b){
  const devices=s.layers.filter(L=>L.type==='device'&&!L.hidden),texts=s.layers.filter(L=>L.type==='text'&&!L.hidden);
  texts.sort((a,b)=>(b.size||0)-(a.size||0));
  const land=b.W>b.H,hasDevices=devices.length>0;
  const region=land?{x:hasDevices?55:8,y:10,w:hasDevices?38:84,h:80}:{x:10,y:hasDevices?36:8,w:80,h:hasDevices?57:84};
  devices.forEach((L,i)=>{
   const test=Render.layerBox(100,100,{...L,w:100}),aspect=test.h/test.w;
   const width=Math.min(region.w/devices.length*.9,region.h*b.H/b.W/aspect);
   L.w=width;L.x=region.x+(region.w/devices.length-width)/2+i*region.w/devices.length;L.y=region.y+(region.h-width*b.W/b.H*aspect)/2;L.rot=0;
  });
  const x=land?8:8,width=land&&hasDevices?40:84,start=land?22:6,end=land?76:hasDevices?31:87;
  texts.forEach((L,i)=>{
   L.x=x;L.y=start+(end-start)*i/Math.max(1,texts.length);L.w=width;L.h=(end-start)/Math.max(1,texts.length)*.9;L.rot=0;
   L.size=Math.min(L.role==='subtitle'?2.2:4.8,(end-start)/Math.max(1,texts.length)*b.H/b.W*.28);L.align='left';
  });
 }
 Model.createVariation=createVariation;
})(typeof window!=='undefined'?window:globalThis);
