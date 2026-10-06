/* Şablon kataloğu: filtreler, kartlar (canlı render), detay sayfası, projeye kopyalama. */
(function () {
  const { $, el, esc, ROOT, renderNav, renderFooter, toast, CATEGORIES, catLabel, mockShot } = window.UI;
  const { Render, Model, Store, Devices } = window;
  const TPL = (window.TEMPLATES || []).filter((x) => !x.archived);
  const ALL = window.TEMPLATES || [];
  const byKey = (k) => ALL.find((x) => x.key === k);
  const PAGE = 24;
  const DEV_FILTERS = [
    ['creative', 'Creative asset templates', 'devices'], ['iphone', 'iPhone templates', 'devices'], ['ipad', 'iPad templates', 'devices'], ['android', 'Android phone templates', 'devices'], ['android-tablet', 'Android tablet templates', 'devices'],
    ['watch', 'Watch templates', 'devices'], ['mac', 'Mac, Desktop & Other', 'devices'], ['landscape', 'Landscape templates', 'orient'], ['free', 'Free templates', 'free'], ['play-feature', 'Feature graphic templates', 'devices'],
  ];
  window.I18N.extend({
    'Copy template to projects': 'Şablonu projelere kopyala', 'Save a local project in this browser.': 'Bu tarayıcıda yerel bir proje kaydet.', 'EN / TR sample copy': 'EN / TR örnek metinler', 'Creative asset templates': 'Creative Assets · Header / Search', 'editable layouts': 'düzenlenebilir düzen', 'store sizes': 'mağaza boyutu', 'iPhone templates': 'iPhone şablonları', 'iPad templates': 'iPad şablonları', 'Android phone templates': 'Android telefon şablonları', 'Android tablet templates': 'Android tablet şablonları',
    'Watch templates': 'Saat şablonları', 'Mac, Desktop & Other': 'Mac, masaüstü ve diğer', 'Landscape templates': 'Yatay şablonlar', 'Feature graphic templates': 'Öne çıkan görsel şablonları',
    'Start creates a project in your browser; Sandbox lets you try it without saving.': 'Başla, tarayıcında bir proje oluşturur; Deneme alanı kaydetmeden denemeni sağlar.',
    'No templates match these filters.': 'Bu filtrelere uyan şablon yok.', 'Project created from {name}': '{name} şablonundan proje oluşturuldu',
    'advanced': 'gelişmiş', 'simple': 'basit', 'multi layered': 'çok katmanlı', 'gradient': 'gradyan', 'colourful': 'renkli', 'dark': 'koyu', 'light': 'açık', 'graphics': 'grafik', 'panoramic': 'panoramik', 'minimal': 'minimal', 'serif': 'serif', 'bold': 'kalın', 'photo': 'fotoğraf', 'illustration': 'illüstrasyon', 'badges': 'rozetler', 'glow': 'ışıma', 'blobs': 'lekeler',
  });
  const RATIO = Devices.BASE.h / Devices.BASE.w;
  const mock = mockShot();
  const F = { cat: null, dev: null, free: false, simple: false, orient: null, theme: null, q: '', shown: PAGE };

  /* ---- render yardımcıları ---- */
  function renderStrip(tpl, canvases, w) {
    const output = Devices.byId((tpl.sizes || [])[0]);
    const ratio = output ? (tpl.orientation === 'landscape' || output.landscape ? Math.min(output.w, output.h) / Math.max(output.w, output.h) : output.h / output.w) : RATIO;
    const h = Math.round(w * ratio);
    const n = tpl.screens.length;
    const project = { background: tpl.background || tpl.screens[0].bg, app: {}, languages: { default: 'en' } };
    canvases.forEach((c, i) => {
      c.width = w; c.height = h;
      Render.renderScreen(c.getContext('2d'), w, h, tpl.screens[i], { lang: window.I18N.lang === 'tr' ? 'tr' : 'en', defaultLang: 'en', imageFor: () => mock, shotSlot: 'iphone', pan: tpl.background ? { i, n } : null, project });
    });
    Render.ensureScreenFonts(tpl.screens, () => renderStrip(tpl, canvases, w));
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (!e.isIntersecting) return; io.unobserve(e.target); const tpl = byKey(e.target.dataset.key); if (tpl) renderStrip(tpl, [...e.target.querySelectorAll('canvas')], +e.target.dataset.w || 300); });
  }, { rootMargin: '500px' });

  /* ---- filtreler ---- */
  const compat = (tpl) => {
    const d = tpl.devices || ['iphone', 'ipad', 'android'];
    const out = tpl.sizes ? tpl.sizes.map((id) => { const o = Devices.byId(id); return o ? `${o.label} · ${o.w}×${o.h}` : id; }) : [t('Any device or size')];
    if (tpl.sizes) return out;
    if (d.includes('iphone')) out.push('iPhones - 6.9"'); if (d.includes('ipad')) out.push('iPad - 13"'); if (d.includes('android')) out.push('Android Phones'); if (d.includes('android-tablet') || d.includes('android')) out.push('Android 10" Tablets');
    if (d.includes('watch')) out.push('Apple Watch'); if (d.includes('mac')) out.push('Mac OS');
    return out;
  };
  function matches(tpl) {
    if (F.cat && !(tpl.cats || []).includes(F.cat)) return false;
    if (F.dev) {
      const d = tpl.devices || ['iphone', 'ipad', 'android'];
      if (F.dev === 'landscape') { if (tpl.orientation !== 'landscape') return false; }
      else if (F.dev === 'free') { if (!tpl.free) return false; }
      else if (!d.includes(F.dev)) return false;
    }
    if (F.free && !tpl.free) return false;
    if (F.simple && tpl.skill !== 'simple') return false;
    if (F.orient && tpl.orientation !== F.orient) return false;
    if (F.theme && tpl.theme !== F.theme) return false;
    if (F.q) { const hay = [tpl.name, tpl.key, (tpl.desc && (tpl.desc.en + ' ' + tpl.desc.tr)) || '', ...(tpl.tags || []), ...(tpl.cats || []), tpl.theme].join(' ').toLowerCase(); if (!hay.includes(F.q.toLowerCase())) return false; }
    return true;
  }
  function buildSide() {
    const cats = $('#sideCats'); cats.innerHTML = '';
    CATEGORIES.forEach((c) => { const n = TPL.filter((x) => (x.cats || []).includes(c)).length; if (!n) return; const b = el('button', F.cat === c ? 'on' : '', `<span>${esc(catLabel(c))}</span><span class="n">${n}</span>`); b.onclick = () => { F.cat = F.cat === c ? null : c; F.dev = null; refresh(); }; cats.appendChild(b); });
    const devs = $('#sideDevices'); devs.innerHTML = '';
    DEV_FILTERS.filter(([k]) => TPL.some((tpl) => k === 'landscape' ? tpl.orientation === 'landscape' : k === 'free' ? tpl.free : tpl.devices.includes(k))).forEach(([k, label]) => { const b = el('button', F.dev === k ? 'on' : '', `<span>${esc(t(label))}</span>`); b.onclick = () => { F.dev = F.dev === k ? null : k; F.cat = null; refresh(); }; devs.appendChild(b); });
    $('#sideAll').classList.toggle('on', !F.cat && !F.dev);
    const chip = (label, on, fn) => { const c = el('button', 'chip' + (on ? ' on' : ''), esc(label)); c.type = 'button'; c.setAttribute('aria-pressed', String(on)); c.onclick = fn; return c; };
    const fo = $('#fOrient'); fo.innerHTML = ''; [['portrait', 'Portrait'], ['landscape', 'Landscape']].forEach(([k, l]) => fo.appendChild(chip(t(l), F.orient === k, () => { F.orient = F.orient === k ? null : k; refresh(); })));
    const ft = $('#fTheme'); ft.innerHTML = ''; [['light', 'Light'], ['dark', 'Dark'], ['colourful', 'Colourful']].forEach(([k, l]) => ft.appendChild(chip(t(l), F.theme === k, () => { F.theme = F.theme === k ? null : k; refresh(); })));
  }
  function card(tpl, w) {
    const c = el('article', 'tcard' + (tpl.orientation === 'landscape' ? ' landscape' : '')); c.dataset.key = tpl.key; c.dataset.w = w || 300;
    const head = el('div', 'tcard-head');
    head.appendChild(el('h3', null, esc(tpl.name)));
    if (tpl.free) head.appendChild(el('span', 'free', 'FREE'));
    head.appendChild(el('span', 'grow'));
    const start = el('button', 'btn primary sm', '✦ ' + t('Start with Template')); start.onclick = () => openStart(tpl);
    const prev = el('a', 'btn link', '↗ ' + t('Preview')); prev.href = '#/t/' + tpl.key;
    head.append(start, prev);
    c.appendChild(head);
    const strip = el('div', 'tstrip' + (tpl.background ? ' pan' : ''));
    tpl.screens.forEach(() => strip.appendChild(el('canvas')));
    strip.onclick = () => { location.hash = '#/t/' + tpl.key; };
    c.appendChild(strip);
    c.appendChild(el('div', 'tcompat', `<b>${t('Compatible with:')}</b>` + compat(tpl).map((x) => `<span>${esc(x)}</span>`).join('')));
    io.observe(c);
    return c;
  }
  function refresh() {
    buildSide();
    const list = TPL.filter(matches);
    $('#count').textContent = list.length; $('#heroCount').textContent = TPL.length; $('#layoutCount').textContent = TPL.reduce((n,tpl)=>n+tpl.screens.length,0);
    const cards = $('#cards'); cards.innerHTML = '';
    if (!list.length) cards.appendChild(el('div', 'tempty', t('No templates match these filters.')));
    list.slice(0, F.shown).forEach((tpl) => cards.appendChild(card(tpl)));
    const more = $('#more');
    more.hidden = list.length <= F.shown;
    more.textContent = `${t('Load more templates')} (${t('{n} remaining', { n: Math.max(0, list.length - F.shown) })})`;
    more.onclick = () => { F.shown += PAGE; refresh(); };
  }

  /* ---- detay ---- */
  function showDetail(key) {
    const tpl = byKey(key); if (!tpl) return showCatalog();
    $('#viewCatalog').hidden = true; $('#viewDetail').hidden = false; window.scrollTo(0, 0);
    $('#dName').textContent = tpl.name; $('#dTitle').textContent = `${tpl.name} ${t('App Store Screenshot Template')}`;
    const strip = $('#dStrip'); strip.className = 'dstrip' + (tpl.background ? ' pan' : '') + (tpl.orientation === 'landscape' ? ' landscape' : ''); strip.innerHTML = '';
    const cs = tpl.screens.map(() => el('canvas')); cs.forEach((c) => strip.appendChild(c)); renderStrip(tpl, cs, 360);
    $('#dTags').innerHTML = [...(tpl.tags || []).map((x) => `<span class="tag">${esc(t(x))}</span>`), ...(tpl.cats || []).map((x) => `<span class="tag">${esc(catLabel(x))}</span>`)].join('');
    const d = tpl.desc || {};
    $('#dAbout').textContent = (window.I18N.lang === 'tr' ? d.tr : d.en) || d.en || d.tr || '';
    const outs = tpl.sizes ? tpl.sizes.map(Devices.byId).filter(Boolean) : Devices.OUTPUTS.filter((o) => (tpl.devices || ['iphone', 'ipad', 'android']).some((dv) => o.id.startsWith(dv)) && !o.landscape === (tpl.orientation !== 'landscape'));
    $('#dDims').innerHTML = outs.slice(0, 6).map((o) => `<li>${esc(o.label)} (${o.w}×${o.h}px)</li>`).join('') + `<li><a href="../app/#/projects">${t('Add any size or device')}</a></li>`;
    $('#dSpecs').innerHTML = [t('Fully customisable'), t('{n} screenshots', { n: tpl.screens.length }), t('{n}+ device outputs', { n: outs.length }), tpl.orientation === 'landscape' ? t('Landscape orientation') : t('Portrait orientation'), t('EN / TR sample copy'), t('Last updated {d}', { d: '2026' })].map((x) => `<li>${x}</li>`).join('');
    $('#dStart').onclick = () => openStart(tpl);
    $('#dSandbox').onclick = () => startTemplate(tpl, 'sandbox');
    const more = $('#dMore'); more.innerHTML = '';
    TPL.filter((x) => x.key !== tpl.key && ((x.cats || []).some((c) => (tpl.cats || []).includes(c)) || x.theme === tpl.theme)).slice(0, 3).forEach((x) => more.appendChild(card(x, 260)));
  }
  function showCatalog() { $('#viewDetail').hidden = true; $('#viewCatalog').hidden = false; }

  /* ---- başlat ---- */
  let pendingTpl = null;
  function openStart(tpl) { pendingTpl = tpl; $('#smTitle').textContent = tpl.name; $('#startMenu').classList.add('open'); }
  async function startTemplate(tpl, mode) {
    $('#startMenu').classList.remove('open');
    const project = Model.newProject(tpl.name, { lang: window.I18N.lang === 'tr' ? 'tr' : 'en', orientation: tpl.orientation });
    Model.applyTemplate(project, tpl);
    project.quick = true;
    if (mode === 'sandbox') { await Store.kvSet('sandbox', project); location.href = ROOT + 'app/#/sandbox'; return; }
    await Store.putProject(project);
    toast(t('Project created from {name}', { name: tpl.name }));
    location.href = ROOT + 'app/#/project/' + project.id;
  }

  function route() { const m = location.hash.match(/^#\/t\/([a-z0-9-]+)/i); if (m) showDetail(m[1]); else { showCatalog(); F.dev = location.hash === '#/creative' ? 'creative' : null; refresh(); } }
  function hero() {
    const c = $('#heroCanvas'); if (!c) return;
    const picks = ['studio-paper', 'studio-midnight', 'studio-lime', 'studio-clay'].map(byKey).filter(Boolean).concat(TPL.slice(0, 4)).slice(0, 4);
    const w = 200, h = Math.round(w * RATIO), gap = 8; c.width = picks.length * w + (picks.length - 1) * gap; c.height = h;
    const ctx = c.getContext('2d');
    picks.forEach((tpl, i) => { const tmp = document.createElement('canvas'); tmp.width = w; tmp.height = h; Render.renderScreen(tmp.getContext('2d'), w, h, tpl.screens[0], { lang: 'en', defaultLang: 'en', imageFor: () => mock, shotSlot: 'iphone', pan: null, project: { background: tpl.background || tpl.screens[0].bg, app: {}, languages: { default: 'en' } } }); ctx.drawImage(tmp, i * (w + gap), 0); });
    if (document.fonts) document.fonts.ready.then(() => { if (!hero._again) { hero._again = true; hero(); } });
  }

  (function init() {
    window.I18N.set(window.I18N.detect());
    renderNav('Templates'); renderFooter();
    $('#q').oninput = () => { F.q = $('#q').value.trim(); F.shown = PAGE; refresh(); };
    $('#fFree').onchange = () => { F.free = $('#fFree').checked; refresh(); };
    $('#fSimple').onchange = () => { F.simple = $('#fSimple').checked; refresh(); };
    $('#sideAll').onclick = () => { F.cat = null; F.dev = null; refresh(); };
    const sm = $('#startMenu');
    sm.onclick = (e) => { if (e.target === sm || e.target.hasAttribute('data-close')) sm.classList.remove('open'); const b = e.target.closest('[data-act]'); if (b && pendingTpl) startTemplate(pendingTpl, b.dataset.act); };
    window.addEventListener('hashchange', route);
    refresh(); hero(); route();
  })();
})();
