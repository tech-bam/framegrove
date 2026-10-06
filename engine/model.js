/* Proje / ekran / katman modeli ve şablon uygulama.
   project = { id, name, about, tags, app:{bundle, icon}, orientation, sizes[], languages:{default, list[]},
               background:{...panoramik}, screens[], template, created, updated, settings:{format, transparent, limit} }
   screen  = { id, name, bg:{type,c1,c2,c3,angle,variant,asset,vpos,blur,dim,pattern,patternColor,patternOpacity,noise,vignette,panorama}, layers[] }
   layer   = { id, type, name, x,y,w,h (%), rot, opacity, hidden, lock, ...tür alanları } */
(function (global) {
  const uid = (p) => (p || 'l') + Math.random().toString(36).slice(2, 9);
  const clone = (v) => JSON.parse(JSON.stringify(v));

  const LANG_NAMES = { en: 'English', tr: 'Türkçe', de: 'Deutsch', es: 'Español', fr: 'Français', it: 'Italiano', pt: 'Português', nl: 'Nederlands', ru: 'Русский', ar: 'العربية', hi: 'हिन्दी', id: 'Bahasa Indonesia', ja: '日本語', ko: '한국어', zh: '中文', pl: 'Polski', sv: 'Svenska', da: 'Dansk', nb: 'Norsk', fi: 'Suomi', cs: 'Čeština', el: 'Ελληνικά', he: 'עברית', th: 'ไทย', vi: 'Tiếng Việt', uk: 'Українська', ro: 'Română', hu: 'Magyar', ms: 'Bahasa Melayu', 'zh-TW': '繁體中文', 'pt-BR': 'Português (BR)', 'es-MX': 'Español (MX)', 'en-GB': 'English (UK)', 'fr-CA': 'Français (CA)' };
  const LANG_FLAGS = { en: '🇺🇸', 'en-GB': '🇬🇧', tr: '🇹🇷', de: '🇩🇪', es: '🇪🇸', 'es-MX': '🇲🇽', fr: '🇫🇷', 'fr-CA': '🇨🇦', it: '🇮🇹', pt: '🇵🇹', 'pt-BR': '🇧🇷', nl: '🇳🇱', ru: '🇷🇺', ar: '🇸🇦', hi: '🇮🇳', id: '🇮🇩', ja: '🇯🇵', ko: '🇰🇷', zh: '🇨🇳', 'zh-TW': '🇹🇼', pl: '🇵🇱', sv: '🇸🇪', da: '🇩🇰', nb: '🇳🇴', fi: '🇫🇮', cs: '🇨🇿', el: '🇬🇷', he: '🇮🇱', th: '🇹🇭', vi: '🇻🇳', uk: '🇺🇦', ro: '🇷🇴', hu: '🇭🇺', ms: '🇲🇾' };
  const RTL = ['ar', 'he'];

  /* ---- varsayılanlar ---- */
  const defaultBg = () => ({ type: 'solid', c1: '#f4f4f8', c2: '#dcdcf0', c3: '#ffffff', angle: 160, variant: 0, asset: null, vpos: 50, blur: 0, dim: 0, pattern: 'none', patternColor: '#ffffff', patternOpacity: 12, noise: 0, vignette: 0, panorama: false });

  const LAYER_DEFAULTS = {
    text: { name: 'Title', x: 6, y: 5, w: 88, h: 12, text: { en: 'Your headline' }, font: 'inter', weight: 800, size: 6.2, color: '#111214', accent: '#6c5ce7', hlStyle: 'color', align: 'center', valign: 'top', lineHeight: 1.1, letterSpacing: -1.5, shadow: false, box: 'none', boxColor: '#ffffff', boxOpacity: 100, boxRadius: 3, uppercase: false, fitText: true },
    subtitle: { name: 'Subtitle', x: 8, y: 17, w: 84, h: 6, text: { en: 'A short benefit line' }, font: 'inter', weight: 500, size: 3.1, color: '#111214', opacity: 70, align: 'center', valign: 'top', lineHeight: 1.2, letterSpacing: 0, fitText: true },
    device: { name: 'Device', x: 17, y: 27, w: 66, rot: 0, frame: 'iphone-pro', color: 'graphite', shots: {}, fit: 'top', glare: true, homeIndicator: true, shadow: 45, screenBg: '#000000', glow: '#22d3ee', glowStrength: 0 },
    image: { name: 'Image', x: 20, y: 40, w: 60, h: 20, asset: null, fit: 'cover', radius: 2, shadow: 0, rot: 0 },
    element: { name: 'Element', kind: 'pill', x: 50, y: 46, size: 3.2, rot: 0, text: { en: 'New' }, emoji: '✨', bg: '#ffffff', color: '' },
  };
  const ELEMENT_KINDS = [
    ['pill', 'Chip'], ['rating', 'Rating badge'], ['stars', 'Stars'], ['laurel', 'Laurel'], ['note', 'Notification'], ['icon', 'App icon + name'],
    ['quote', 'Quote'], ['text', 'Label'], ['sparkle', 'Sparkles'], ['emoji', 'Emoji'], ['arrow', 'Arrow'], ['ring', 'Ring'], ['shape', 'Shape'],
  ];
  const ELEMENT_DEFAULTS = {
    pill: { size: 3.2, text: { en: '7 day streak' }, emoji: '🔥', bg: '#ffffff', color: '', rot: -6 },
    rating: { size: 2.6, text: { en: '4.9 · 12K ratings' }, bg: '#ffffff', color: '' },
    stars: { size: 2.6, color: '#f5b301', count: 5 },
    laurel: { size: 2.4, text: { en: 'App of\nthe Day' }, sub: 'App Store', color: '#ffffff' },
    note: { size: 2.6, w: 74, text: { en: 'Goal reached' }, sub: 'You are 2,400 steps ahead', time: 'now', bg: '#ffffff', color: '' },
    icon: { size: 3, text: { en: 'App name' }, iconBg: '#6c5ce7', color: '#ffffff' },
    quote: { size: 3, w: 80, text: { en: 'This app changed how I work.' }, color: '#ffffff' },
    text: { size: 4, text: { en: 'New' }, color: '#ffffff', weight: 800 },
    sparkle: { size: 2.5, color: '#ffffff' }, emoji: { size: 4, text: { en: '✨' } }, arrow: { size: 3, color: '#ffffff' }, ring: { size: 4, color: '#ffffff' },
    shape: { w: 30, h: 12, shape: 'blob', color: '#ffffff', opacity: 40 },
  };

  function newLayer(type, extra) {
    const base = clone(LAYER_DEFAULTS[type === 'subtitle' ? 'subtitle' : type] || {});
    if (type === 'subtitle') base.type = 'text'; else base.type = type;
    const L = Object.assign({ id: uid(), rot: 0, opacity: 100, hidden: false, lock: false }, base, extra || {});
    if (type === 'element') { const k = L.kind || 'pill'; Object.assign(L, clone(ELEMENT_DEFAULTS[k] || {}), extra || {}); L.kind = k; L.name = (ELEMENT_KINDS.find((e) => e[0] === k) || [k, k])[1]; }
    return L;
  }
  function newScreen(extra) {
    return Object.assign({ id: uid('s'), name: '', bg: defaultBg(), layers: [newLayer('text'), newLayer('subtitle'), newLayer('device')] }, extra || {});
  }
  function newProject(name, opts) {
    opts = opts || {};
    const lang = opts.lang || 'en';
    return {
      id: global.Store ? global.Store.newId('p') : uid('p'), name: name || 'Untitled project', about: '', tags: [],
      app: { bundle: '', icon: null }, orientation: opts.orientation || 'portrait',
      sizes: opts.sizes || ['iphone-6.9', 'ipad-13', 'android-phone'],
      languages: { default: lang, list: [lang] },
      background: Object.assign(defaultBg(), { type: 'linear', c1: '#6c5ce7', c2: '#a29bfe' }),
      screens: [], template: null, created: Date.now(), updated: Date.now(),
      settings: { format: 'png', transparent: false, limit: 10 },
    };
  }

  /* ---- metin dil yardımcıları ---- */
  const getText = (L, lang, def) => global.Render.textOf(L.text, lang, def);
  function setText(L, lang, value) { if (!L.text || typeof L.text !== 'object') L.text = { [lang]: String(L.text || '') }; L.text[lang] = value; }

  /* ---- ekran görüntüsü yuvası ---- */
  function setShot(L, slot, assetId) { L.shots = L.shots || {}; if (assetId) L.shots[slot] = assetId; else delete L.shots[slot]; }

  /* ---- şablon uygulama ----
     template = { key, name, description, tags[], theme, categories[], base:{ fonts…}, background (project panoramic?), screens:[ { bg, layers:[…] } ] }
     Şablon ekranları katman listeleri olarak gelir; metinler {en,tr} olabilir. Projedeki mevcut ekran görüntüleri ve (istenirse) metinler korunur. */
  function applyTemplate(project, tpl, opts) {
    opts = opts || {};
    const old = project.screens || [];
    const keepText = !!opts.keepText;
    const screens = tpl.screens.map((ts, i) => {
      const s = newScreen({ bg: Object.assign(defaultBg(), clone(ts.bg || {})), layers: [] });
      s.layers = (ts.layers || []).map((tl) => {
        const L = newLayer(tl.type === 'text' && tl.role === 'subtitle' ? 'subtitle' : tl.type, clone(tl));
        L.id = uid();
        return L;
      });
      // eski ekrandan taşı: cihaz görselleri + (isteğe bağlı) metinler
      const o = old[i];
      if (o) {
        const oDev = o.layers.filter((L) => L.type === 'device'), nDev = s.layers.filter((L) => L.type === 'device');
        nDev.forEach((L, k) => { if (oDev[k] && oDev[k].shots) L.shots = clone(oDev[k].shots); });
        if (keepText) {
          const oT = o.layers.filter((L) => L.type === 'text'), nT = s.layers.filter((L) => L.type === 'text');
          nT.forEach((L, k) => { if (oT[k] && oT[k].text) L.text = clone(oT[k].text); });
        }
      }
      return s;
    });
    project.screens = screens;
    project.template = tpl.key;
    if (tpl.background) project.background = Object.assign(defaultBg(), clone(tpl.background));
    if (tpl.orientation) project.orientation = tpl.orientation;
    if (tpl.sizes && tpl.sizes.length) project.sizes = tpl.sizes.slice();
    return project;
  }

  /* ---- düzen ön ayarları (tek ekran) ---- */
  const LAYOUT_PRESETS = [
    { key: 'text-top', name: 'Text top', apply: (s) => place(s, { title: { y: 5 }, sub: { y: 15 }, dev: { x: 17, y: 26, w: 66, rot: 0 } }) },
    { key: 'text-bottom', name: 'Text bottom', apply: (s) => place(s, { title: { y: 76 }, sub: { y: 87 }, dev: { x: 19, y: 4, w: 62, rot: 0 } }) },
    { key: 'bleed', name: 'Device bleed', apply: (s) => place(s, { title: { y: 5 }, sub: { y: 15 }, dev: { x: 8, y: 30, w: 84, rot: 0 } }) },
    { key: 'hero', name: 'Giant tilted', apply: (s) => place(s, { title: { y: 5 }, sub: { y: 15 }, dev: { x: 10, y: 30, w: 96, rot: -7 } }) },
    { key: 'tilt', name: 'Tilted', apply: (s) => place(s, { title: { y: 5 }, sub: { y: 15 }, dev: { x: 18, y: 29, w: 64, rot: -8 } }) },
    { key: 'right', name: 'Device right', apply: (s) => place(s, { title: { y: 6, align: 'left', x: 6, w: 80 }, sub: { y: 16, align: 'left', x: 6, w: 80 }, dev: { x: 42, y: 33, w: 64, rot: 7 } }) },
    { key: 'left', name: 'Device left', apply: (s) => place(s, { title: { y: 6, align: 'right', x: 14, w: 80 }, sub: { y: 16, align: 'right', x: 14, w: 80 }, dev: { x: -6, y: 33, w: 64, rot: -7 } }) },
    { key: 'small', name: 'Small device', apply: (s) => place(s, { title: { y: 7 }, sub: { y: 17 }, dev: { x: 24, y: 38, w: 52, rot: 0 } }) },
    { key: 'full', name: 'Full bleed', apply: (s) => place(s, { title: { y: 4 }, sub: { y: 14 }, dev: { x: 0, y: 0, w: 100, rot: 0, frame: 'none', fit: 'cover', shadow: 0 } }) },
    { key: 'span-left', name: 'Span two frames · left', apply: (s) => place(s, { title: { y: 5 }, sub: { y: 15 }, dev: { x: 50, y: 30, w: 92, rot: 0 } }) },
    { key: 'span-right', name: 'Span two frames · right', apply: (s) => place(s, { title: { y: 5 }, sub: { y: 15 }, dev: { x: -42, y: 30, w: 92, rot: 0 } }) },
  ];
  function landscapePresets(W,H) {
    const deviceWidth = (screen) => {
      const d=screen.layers.find(l=>l.type==='device');
      const ratio=d && d.frame==='tablet' ? 1.33 : 2.1;
      return Math.min(42,80*H/W/ratio);
    };
    return [
      {name:'Brand left',apply:s=>place(s,{title:{x:12,y:28,w:45,h:35,align:'left'},sub:{x:12,y:66,w:45,h:15,align:'left',flow:false},dev:{x:67,y:10,w:deviceWidth(s),rot:0}})},
      {name:'Brand right',apply:s=>place(s,{title:{x:48,y:28,w:42,h:35,align:'left'},sub:{x:48,y:66,w:42,h:15,align:'left',flow:false},dev:{x:14,y:10,w:deviceWidth(s),rot:0}})},
      {name:'Centered headline',apply:s=>place(s,{title:{x:15,y:8,w:70,h:22,align:'center'},sub:{x:18,y:31,w:64,h:10,align:'center',flow:false},dev:{x:50-deviceWidth(s)*.3,y:45,w:deviceWidth(s)*.6,rot:0}})},
    ];
  }
  function place(screen, p) {
    const T = screen.layers.filter((L) => L.type === 'text'); const D = screen.layers.find((L) => L.type === 'device');
    if (T[0] && p.title) Object.assign(T[0], p.title);
    if (T[1] && p.sub) Object.assign(T[1], p.sub);
    if (D && p.dev) Object.assign(D, p.dev);
    return screen;
  }

  global.Model = { uid, clone, LANG_NAMES, LANG_FLAGS, RTL, defaultBg, LAYER_DEFAULTS, ELEMENT_KINDS, ELEMENT_DEFAULTS, newLayer, newScreen, newProject, getText, setText, setShot, applyTemplate, LAYOUT_PRESETS, landscapePresets };
})(typeof window !== 'undefined' ? window : globalThis);
