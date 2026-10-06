/* Original Studio collection. Legacy keys stay resolvable for saved projects. */
(function (global) {
  global.TEMPLATES.forEach((tpl) => { tpl.archived = true; });
  const T = (en, tr) => ({ en, tr });
  const stories = [
    [T('Make room for\n[what matters]', '[Önemli olana]\nyer aç'), T('Your day, brought into focus', 'Gününü tek yerde gör')],
    [T('Everything.\n[One place.]', 'Her şey.\n[Tek yerde.]'), T('See the details at a glance', 'Ayrıntıları bir bakışta gör')],
    [T('Less searching.\n[More doing.]', 'Daha az ara.\n[Daha çok yap.]'), T('Keep your next step in sight', 'Sonraki adımın gözünün önünde')],
    [T('A little more\n[clarity]', 'Biraz daha\n[netlik]'), T('A closer look at your day', 'Gününe daha yakından bak')],
    [T('Find your\n[own rhythm]', '[Kendi ritmini]\nbul'), T('Build a routine that fits', 'Sana uyan bir düzen kur')],
    [T('Your next\n[chapter]', '[Yeni bir]\nbaşlangıç'), T('Bring your plans to life', 'Planlarını hayata geçir')],
  ];
  const palettes = [
    ['paper','Paper','#f5f1e8','#202520','#397255','light','georgia','editorial'],
    ['midnight','Midnight','#101923','#f7f7ee','#a9cdfb','dark','inter','split'],
    ['lime','Lime','#dfff73','#152319','#254f35','colourful','inter','bold'],
    ['clay','Clay','#ece0d4','#422b28','#a84432','light','georgia','editorial'],
    ['cobalt','Cobalt','#174ddd','#ffffff','#c5e4ff','colourful','inter','split'],
    ['mono','Mono','#f6f6f4','#171918','#535e58','light','inter','minimal'],
    ['peach','Peach','#ffd9c4','#422921','#b04137','colourful','inter','bold'],
    ['tide','Tide','#dcebe8','#193a37','#257366','light','georgia','minimal'],
    ['ledger','Ledger','#153b30','#f4f0db','#d6eaa2','dark','inter','editorial'],
    ['orchid','Orchid','#eee7f1','#3f304d','#8a468e','light','georgia','split'],
    ['signal','Signal','#191919','#faf6e7','#f5b940','dark','inter','bold'],
    ['sand','Sand','#e9e0c9','#373b30','#6a7441','light','inter','minimal'],
    ['ruby','Ruby','#6f2439','#fff2ee','#ffcda8','dark','georgia','editorial'],
    ['ice','Ice','#e9f2fc','#153755','#2467b5','light','inter','split'],
    ['ink','Ink','#20292a','#f0ede3','#b8dbcb','dark','georgia','minimal'],
    ['apricot','Apricot','#f9b35d','#33251b','#633f21','colourful','inter','bold'],
  ];
  const shape = (x,y,w,h,color,opacity=100,form='rect') => ({ kind:'shape', x,y,w,h,shape:form,color,opacity });
  const categories = ['productivity','finance','health & fitness','lifestyle','developer tools','utilities','food & drink','travel','business','photo & video','games','education','music','weather','shopping','sports'];
  palettes.forEach(([key,name,bg,color,accent,theme,font,mode],paletteIndex) => {
    const category=categories[paletteIndex];
    const copy=(TplDSL.BANK[category] || []).slice(0,6).map(([en,tr,sen,str])=>[T(en,tr),T(sen,str)]);
    const story=copy.length===6?copy:stories;
    const editorial = mode === 'editorial', split = mode === 'split', bold = mode === 'bold';
    const screens = story.map(([title,sub],i) => {
      const lower = i === 3;
      const x = split ? 8 : editorial ? 9 : 7;
      const titleBox = { x, y:lower ? 74 : 7, w:100-x*2, h:20, align:editorial || split ? 'left':'center' };
      const subBox = { x, y:lower ? 91 : 22, w:100-x*2, h:6, align:titleBox.align };
      const dev = lower ? { x:20,y:4,w:60,rot:0 } :
        i===1 ? { x:7,y:32,w:86,rot:0,frame:'none',fit:'top' } :
        i===2 ? { x:split ? 29:17,y:31,w:68,rot:split?5:0 } :
        i===4 ? { x:19,y:32,w:62,rot: editorial?-4:0 } :
        { x:16,y:32,w:68,rot:bold?-4:0 };
      const under = editorial ? [shape(50,28,82,.2,accent),shape(50,96,82,.2,accent)] :
        split ? [shape(85,65,38,68,accent,16),shape(11,90,3,9,accent)] :
        bold ? [shape(50,69,96,57,color,9,'circle')] : [shape(50,69,86,59,accent,7)];
      return { name:T('Story '+(i+1),'Kare '+(i+1)).en,layout:lower?'text-bottom':'text-top',title,sub,titleBox,subBox,subStyle:{flow:false},dev,under,
        els:[{kind:'text',x:50,y:lower?68:4,size:1.6,weight:600,color:accent,text:T('0'+(i+1)+' / YOUR APP','0'+(i+1)+' / UYGULAMAN')}] };
    });
    defineTemplate({key:'studio-'+key,name,deviceAbove:true,collection:'studio',free:true,theme,skill:'simple',tags:[mode,'studio',font==='georgia'?'serif':'minimal'],cats:[category],devices:['iphone','android'],sizes:['iphone-6.9','android-phone-tall'],
      desc:T(name+' — six editable story frames. Replace the demo copy with benefits your app actually supports.',name+' — altı düzenlenebilir kare. Örnek metinleri uygulamanın gerçek faydalarıyla değiştir.'),
      bg:{type:'solid',c1:bg},style:{font,weight:font==='georgia'?700:800,size:bold?9:7.8,color,accent,lineHeight:1.06,subSize:2.9,subColor:color,subOpacity:80},device:{shadow:25,glare:false,fit:'top'},screens });
  });
  // Eight distinct art directions, each adapted to three Apple's placements.
  palettes.slice(0,8).forEach(([key,name,bg,color,accent,theme,font,mode],idx) => {
    ['header','search','universal'].forEach((placement) => {
      const header = placement==='header', left = idx%2===1;
      const dw=header?14:21, dx=left?16:69, tx=left?46:14;
      const lines=[T('Make space for\n[what matters.]','[Önemli olana]\nyer aç.'),T('Your day.\n[In focus.]','Günün.\n[Odakta.]'),T('Less friction.\n[More flow.]','Daha az engel.\n[Daha çok akış.]'),T('A new way to\n[every day.]','Her güne\n[yeni bir yol.]'),T('Big ideas.\n[Small steps.]','Büyük fikirler.\n[Küçük adımlar.]'),T('Simply\n[useful.]','Sadece\n[faydalı.]'),T('A little more\n[delight.]','Biraz daha\n[keyif.]'),T('Find your\n[own rhythm.]','[Kendi ritmini]\nbul.')];
      const under=mode==='editorial'?[shape(50,82,72,.3,accent),shape(left?24:76,45,27,64,accent,8)]:
        mode==='split'?[shape(left?24:76,50,32,100,accent,17),shape(left?44:56,50,.25,66,accent,40)]:
        mode==='bold'?[shape(left?23:77,50,39,92,color,10,'circle'),shape(left?43:57,82,10,1.5,accent)]:
        [shape(left?24:76,50,29,76,accent,6),shape(left?46:14,22,6,.3,accent)];
      defineTemplate({key:'creative-'+key+'-'+placement,deviceAbove:true,name:name+' · '+(header?'Header':placement==='search'?'Search':'Universal'),collection:'creative',free:true,theme,skill:'simple',orientation:'landscape',devices:['creative'],sizes:['apple-'+placement],tags:['creative',placement,mode],cats:[categories[idx]],
        desc:T(name+' art direction for App Store '+placement+'. Editable copy and your real screenshot. Preview cropping in App Store Connect.',name+' tasarımı: App Store '+placement+'. Düzenlenebilir metin ve gerçek ekranın. Kırpmayı App Store Connect’te önizle.'),
        bg:{type:'solid',c1:bg},style:{font,weight:font==='georgia'?700:800,size:header?4.1:5,color,accent,lineHeight:1.05,subSize:header?1.35:1.7,subColor:color,subOpacity:75},device:{shadow:18,glare:false,fit:'top'},
        screens:[{layout:'landscape',title:lines[idx],sub:T('A better way to do your everyday.','Günlük işlerin için daha iyi bir yol.'),titleBox:{x:tx,y:32,w:40,h:33,align:'left'},subBox:{x:tx,y:68,w:40,h:10,align:'left'},subStyle:{flow:false},dev:{x:dx,y:12,w:dw,rot:idx===2?-3:idx===6?3:0},under,els:[{kind:'text',x:tx+20,y:23,size:1.1,weight:600,color:accent,text:T('YOUR APP / MADE FOR YOU','UYGULAMAN / SENİN İÇİN')}]}] });
    });
  });
  palettes.slice(0,4).forEach(([key,name,bg,color,accent,theme,font]) => {
    defineTemplate({key:'tablet-'+key,deviceAbove:true,name:name+' · Tablet',collection:'studio',free:true,theme,skill:'simple',orientation:'landscape',devices:['ipad','android-tablet'],sizes:['ipad-13','android-tablet-10'],tags:['editorial','tablet'],cats:['productivity','business'],bg:{type:'solid',c1:bg},
      desc:T('Four landscape tablet compositions. Use real tablet screenshots.','Dört yatay tablet kompozisyonu. Gerçek tablet ekranları kullan.'),style:{font,weight:700,size:4.7,color,accent,subSize:1.9,subOpacity:80},device:{frame:'tablet',shadow:22,glare:false},
      screens:stories.slice(0,4).map(([title,sub],i)=>({layout:i%2?'landscape-right':'landscape',title,sub,subStyle:{flow:false},dev:{x:i%2?4:51,y:13,w:44},under:[shape(i%2?26:74,52,46,86,accent,8)]})) });
  });
  // Curated templates are the default in the editor too.
  global.TEMPLATES.sort((a,b) => Number(a.archived)-Number(b.archived));
})(typeof window !== 'undefined' ? window : globalThis);
