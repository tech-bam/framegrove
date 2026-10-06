/* Uygulama kabuğu: yönlendirme, projeler, yeni proje, deneme alanı. Editor (editor.js) ve Modals (modals.js) bunu kullanır. */
(function () {
  const { $, el, esc, ROOT, renderNav, toast, download, ago, mockShot } = window.UI;
  const { Store, Model, Render, Devices } = window;
  const RATIO = Devices.BASE.h / Devices.BASE.w;

  const App = {
    project: null, mode: 'project', saveTimer: null, dirty: false,
    save(now) {
      if (!this.project) return;
      clearTimeout(this.saveTimer);
      const run = async () => {
        if (this.mode === 'sandbox') await Store.kvSet('sandbox', this.project).catch(() => {});
        else await Store.putProject(this.project).catch(() => {});
        this.dirty = false;
        const s = $('#savedAt'); if (s) s.textContent = t('Saved') + ' · ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      };
      this.dirty = true;
      if (now) return run();
      this.saveTimer = setTimeout(run, 500);
    },
    go: (p) => { location.hash = '#' + p; },
  };
  window.App = App;

  /* ---------- yönlendirme ---------- */
  function parse() {
    const h = location.hash.replace(/^#/, '') || '/projects';
    let m;
    if ((m = h.match(/^\/project\/([a-z0-9]+)/i))) return { view: 'editor', id: m[1] };
    if (h.startsWith('/sandbox')) return { view: 'sandbox' };
    if (h.startsWith('/new')) return { view: 'new' };
    return { view: 'projects' };
  }
  async function route() {
    const r = parse();
    const view = $('#view');
    if (App.project && App.dirty) await App.save(true);
    if (r.view === 'editor') {
      if (!App.project || App.project.id !== r.id || App.mode !== 'project') {
        const p = await Store.getProject(r.id);
        if (!p) { toast(t('Project not found')); return App.go('/projects'); }
        await Store.preload(p);
        App.project = p; App.mode = 'project';
      }
      renderNav('Projects'); view.innerHTML = '';
      window.Editor.mount(view, App);
      return;
    }
    if (r.view === 'sandbox') {
      let p = await Store.kvGet('sandbox').catch(() => null);
      if (!p) { p = Model.newProject(t('Sandbox project'), { lang: window.I18N.lang }); const tpl = (window.TEMPLATES || [])[0]; if (tpl) Model.applyTemplate(p, tpl); }
      await Store.preload(p);
      App.project = p; App.mode = 'sandbox';
      renderNav('Sandbox'); view.innerHTML = '';
      window.Editor.mount(view, App);
      return;
    }
    App.project = null; document.body.classList.remove('editing');
    renderNav('Projects');
    if (r.view === 'new') return viewNew(view);
    return viewProjects(view);
  }

  /* ---------- projeler ---------- */
  const PS = { sort: 'updated', q: '', tag: null };
  async function viewProjects(view) {
    view.innerHTML = '';
    const tool = el('div', 'ptool');
    const tc = el('div', 'container');
    const sort = el('button', 'btn', '⇅ ' + t('Last Updated')); sort.onclick = () => { PS.sort = PS.sort === 'updated' ? 'name' : 'updated'; sort.textContent = '⇅ ' + (PS.sort === 'name' ? t('Name') : t('Last Updated')); list(); };
    const tags = el('button', 'btn', '🏷 ' + t('All tags')); tags.onclick = () => { PS.tag = null; list(); };
    const nw = el('button', 'btn', '＋ ' + t('New Project')); nw.onclick = () => App.go('/new');
    const imp = el('button', 'btn', '⇪ ' + t('Import project')); imp.onclick = () => $('#fileImport').click();
    const q = el('input'); q.type = 'search'; q.placeholder = t('Search'); q.oninput = () => { PS.q = q.value.trim().toLowerCase(); list(); };
    tc.append(sort, tags, nw, imp, q); tool.appendChild(tc); view.appendChild(tool);
    const wrap = el('div', 'container pwrap');
    wrap.appendChild(el('h1', null, t('Projects & Apps')));
    const grid = el('div', 'pgrid'); wrap.appendChild(grid); view.appendChild(wrap);
    async function list() {
      grid.innerHTML = '';
      let rows = await Store.listProjects();
      if (PS.q) rows = rows.filter((p) => (p.name || '').toLowerCase().includes(PS.q) || (p.tags || []).join(' ').toLowerCase().includes(PS.q));
      if (PS.tag) rows = rows.filter((p) => (p.tags || []).includes(PS.tag));
      if (PS.sort === 'name') rows.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      if (!rows.length) {
        const e = el('div', 'pempty', `<p>${t('No projects yet. Start with a template or a blank canvas.')}</p>`);
        const a = el('a', 'btn primary lg', t('Start with a template')); a.href = ROOT + 'templates/';
        const b = el('button', 'btn lg', t('Blank project')); b.onclick = () => createBlank();
        e.append(a, b); grid.appendChild(e); return;
      }
      rows.forEach((p) => grid.appendChild(projectCard(p, list)));
    }
    list();
  }
  function projectCard(p, refresh) {
    const c = el('div', 'pcard');
    const head = el('div', 'pcard-head');
    const ic = el('div', 'ic', esc((p.name || 'P')[0].toUpperCase()));
    Store.loadAsset(p.app && p.app.icon).then((img) => { if (img) { ic.innerHTML = ''; ic.appendChild(img.cloneNode()); } });
    head.appendChild(ic);
    head.appendChild(el('b', null, esc(p.name || t('Untitled project'))));
    const open = el('a', 'btn primary sm', t('Open & edit') + ' ↗'); open.href = '#/project/' + p.id;
    const more = el('button', 'more', '⋮');
    more.onclick = (e) => { e.stopPropagation(); menu(more, p, refresh); };
    head.append(open, more); c.appendChild(head);
    const cover = el('div', 'pcover');
    cover.onclick = () => App.go('/project/' + p.id);
    c.appendChild(cover);
    const outs = (p.sizes || []).length;
    c.appendChild(el('div', 'pmeta', `
      <div><span>ID</span><span class="id">${esc(p.id)}</span></div>
      <div><span>${t('Screenshots')}</span><b>${(p.screens || []).length}</b></div>
      <div><span>${t('Last updated')}</span><b>${esc(ago(p.updated || p.created))}</b></div>
      <div><span>${t('Orientation')}</span><b>${t(p.orientation === 'landscape' ? 'Landscape' : 'Portrait')}</b></div>
      <div><span>${t('Language')}</span><b>${esc((p.languages && p.languages.default || 'en').toUpperCase())}${p.languages && p.languages.list && p.languages.list.length > 1 ? ' +' + (p.languages.list.length - 1) : ''}</b></div>
      <div><span>${t('Output sizes')}</span><b>${outs}</b></div>`));
    // kapak
    (async () => {
      const scr = (p.screens || []).slice(0, 4);
      if (!scr.length) { cover.classList.add('empty'); cover.textContent = t('Blank project'); return; }
      await Store.preload({ screens: scr, app: p.app });
      const w = 116, h = Math.round(w * RATIO);
      scr.forEach((s, i) => { const cv = el('canvas'); cv.width = w; cv.height = h; Render.renderScreen(cv.getContext('2d'), w, h, s, { lang: p.languages.default, defaultLang: p.languages.default, imageFor: Store.imageFor, shotSlot: 'iphone', pan: s.bg && s.bg.panorama ? { i, n: p.screens.length } : null, project: p }); cover.appendChild(cv); });
      Render.ensureScreenFonts(scr, () => { cover.querySelectorAll('canvas').forEach((cv, i) => Render.renderScreen(cv.getContext('2d'), cv.width, cv.height, scr[i], { lang: p.languages.default, defaultLang: p.languages.default, imageFor: Store.imageFor, shotSlot: 'iphone', pan: scr[i].bg && scr[i].bg.panorama ? { i, n: p.screens.length } : null, project: p })); });
    })();
    return c;
  }
  let openMenu = null;
  function menu(anchor, p, refresh) {
    if (openMenu) openMenu.remove();
    const m = el('div', 'menu');
    const r = anchor.getBoundingClientRect();
    m.style.left = (r.right - 190 + window.scrollX) + 'px'; m.style.top = (r.bottom + 4 + window.scrollY) + 'px';
    const add = (label, fn, cls) => { const b = el('button', cls || '', label); b.onclick = async () => { m.remove(); openMenu = null; await fn(); }; m.appendChild(b); };
    add(t('Rename'), async () => { const n = prompt(t('Project name'), p.name); if (n) { p.name = n.trim(); await Store.putProject(p); refresh(); } });
    add(t('Duplicate'), async () => { const c = Model.clone(p); c.id = Store.newId('p'); c.name = p.name + ' (2)'; c.created = Date.now(); await Store.putProject(c); refresh(); });
    add(t('Export project (.json)'), async () => { const b = await Store.exportProject(p.id); download(new Blob([JSON.stringify(b)], { type: 'application/json' }), (p.name || 'project').replace(/\s+/g, '-') + '.sms.json'); });
    add(t('Delete'), async () => { if (confirm(t('Delete project "{name}"? This cannot be undone.', { name: p.name }))) { await Store.deleteProject(p.id); refresh(); } }, 'danger');
    document.body.appendChild(m); openMenu = m;
    setTimeout(() => document.addEventListener('click', () => { m.remove(); openMenu = null; }, { once: true }), 0);
  }

  async function createBlank() {
    const name = prompt(t('Project name'), t('Untitled project')) || t('Untitled project');
    const p = Model.newProject(name.trim(), { lang: window.I18N.lang });
    for (let i = 0; i < 5; i++) p.screens.push(Model.newScreen());
    p.screens.forEach((s, i) => { s.layers.forEach((L) => { if (L.type === 'text' && L.role !== 'subtitle') L.text = { [p.languages.default]: t('Headline {n}', { n: i + 1 }) }; }); });
    p.quick = true;
    await Store.putProject(p);
    App.go('/project/' + p.id);
  }
  function viewNew(view) {
    view.innerHTML = '';
    const wrap = el('div', 'container pwrap');
    wrap.appendChild(el('h1', null, t('How do you want to start?')));
    const g = el('div', 'newgrid');
    const a = el('div', 'newcard', `<div class="ic">🗂</div><h3>${t('Start with a template')}</h3><p>${t('{n} professionally designed sets. Pick one, drop in your screens, edit the captions.', { n: (window.TEMPLATES || []).length })}</p>`);
    a.onclick = () => { location.href = ROOT + 'templates/'; };
    const b = el('div', 'newcard', `<div class="ic">✎</div><h3>${t('Blank project')}</h3><p>${t('Five empty screens with a title, subtitle and device frame. Design everything yourself.')}</p>`);
    b.onclick = createBlank;
    g.append(a, b); wrap.appendChild(g); view.appendChild(wrap);
  }

  window.I18N.extend({ 'Project not found': 'Proje bulunamadı', 'Sandbox project': 'Deneme projesi', 'Headline {n}': 'Başlık {n}', 'How do you want to start?': 'Nasıl başlayalım?', '{n} professionally designed sets. Pick one, drop in your screens, edit the captions.': '{n} profesyonel set. Birini seç, ekranlarını bırak, başlıkları düzenle.', 'Five empty screens with a title, subtitle and device frame. Design everything yourself.': 'Başlık, alt başlık ve cihaz çerçeveli beş boş ekran. Her şeyi kendin tasarla.', 'Project imported: {name}': 'Proje içe aktarıldı: {name}' });

  (async function init() {
    window.I18N.set(window.I18N.detect());
    $('#fileImport').onchange = async (e) => {
      const f = e.target.files[0]; e.target.value = '';
      if (!f) return;
      try { const b = JSON.parse(await f.text()); if (b.format === 'sms-project-v3') { const p = await Store.importProject(b); toast(t('Project imported: {name}', { name: p.name })); route(); } else toast('⚠︎ unknown file'); } catch (err) { toast('⚠︎ ' + err.message); }
    };
    window.addEventListener('hashchange', route);
    window.addEventListener('beforeunload', () => { if (App.project && App.dirty) App.save(true); });
    route();
  })();
})();
