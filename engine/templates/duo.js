/* Duo-specific compositions: separate real shots for each display. */
(function(global){
 const T=(en,tr)=>({en,tr});
 const colors=[['paper','Paper','#f5f1e8','#202520','#397255','light','georgia'],['midnight','Midnight','#101923','#f7f7ee','#a9cdfb','dark','inter'],['lime','Lime','#dfff73','#152319','#254f35','colourful','inter'],['cobalt','Cobalt','#174ddd','#ffffff','#c5e4ff','colourful','inter']];
 const copy=[[T('More room.\n[More possibilities.]','Daha çok alan.\n[Daha çok fırsat.]'),T('Your app, with room to breathe.','Uygulaman için daha geniş bir alan.')],[T('Every detail.\n[In view.]','Her ayrıntı.\n[Göz önünde.]'),T('A closer look at what matters.','Önemli olana daha yakından bak.')],[T('Your next step.\n[Wide open.]','Sonraki adımın.\n[Yeni bir alan.]'),T('Make the most of every moment.','Her anı en iyi şekilde değerlendir.')]];
 colors.forEach(([key,name,bg,color,accent,theme,font])=>{
  ['outer','inner','inner-landscape'].forEach(mode=>{
   const land=mode==='inner-landscape',inner=mode.startsWith('inner');
   defineTemplate({key:'duo-'+key+'-'+mode,name:name+' · Duo '+(land?'Inner Landscape':inner?'Inner':'Outer'),collection:'duo',free:true,deviceAbove:true,theme,skill:'simple',orientation:land?'landscape':'portrait',devices:['iphone-duo'],sizes:[inner?'iphone-duo-inner':'iphone-duo-outer'],tags:['duo',inner?'inner':'outer',land?'landscape':'editorial'],cats:['productivity','utilities','business'],
    desc:T('iPhone Duo '+mode+' series. Import a real screenshot for this display. Three editable compositions at Apple’s published dimensions.','iPhone Duo '+mode+' serisi. Bu ekrana ait gerçek görüntüyü yükle. Apple ölçülerinde üç düzenlenebilir kompozisyon.'),bg:{type:'solid',c1:bg},style:{font,weight:font==='georgia'?700:800,size:land?5.4:7.1,color,accent,lineHeight:1.04,subSize:land?1.7:2.8,subColor:color,subOpacity:75},device:{frame:'duo-'+mode,shadow:18,glare:false,fit:'contain'},
    screens:copy.map(([title,sub],i)=>({name:'Duo story '+(i+1),layout:land?'landscape':i===1?'text-bottom':'text-top',title,sub,titleBox:land?{x:8,y:26,w:36,h:35,align:'left'}:{x:9,y:i===1?75:8,w:82,h:18,align:'left'},subBox:land?{x:8,y:67,w:36,h:12,align:'left'}:{x:9,y:i===1?91:24,w:82,h:7,align:'left'},subStyle:{flow:false},dev:land?{x:49,y:23,w:45,rot:0}:{x:inner?18:20,y:i===1?6:32,w:inner?64:60,rot:0},under:[{kind:'shape',shape:'rect',x:50,y:land?86:i===1?70:30,w:82,h:.2,color:accent,opacity:65}],els:[{kind:'text',x:land?26:50,y:land?17:i===1?97:4,size:land?1.05:1.4,weight:600,color:accent,text:T('YOUR APP / '+(inner?'INNER DISPLAY':'OUTER DISPLAY'),'UYGULAMAN / '+(inner?'İÇ EKRAN':'DIŞ EKRAN'))}]}))
   });
  });
 });
})(typeof window!=='undefined'?window:globalThis);
