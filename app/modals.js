/* Modallar: Kurulum (About / Output Sizes / Languages / Advanced), App Screens, Preview & Export, AI, kısayollar. */
(function () {
  const { $, el, esc, toast, download, slug, ROOT } = window.UI;
  const { Store, Model, Render, Devices } = window;
  const E = () => window.Editor;
  const P = () => window.App.project;

  function open(id, html) { const m = $(id); m.innerHTML = html; m.classList.add('open'); m.onclick = (e) => { if (e.target === m || e.target.hasAttribute('data-close')) close(id); }; return m; }
  function close(id) { $(id).classList.remove('open'); E().renderAll(); }
  const F = { // küçük form yardımcıları
    check: (label, val, fn, extra) => { const l = el('label', 'check'); const i = el('input'); i.type = 'checkbox'; i.checked = !!val; i.onchange = () => fn(i.checked); l.append(i, el('span', null, label)); if (extra) l.appendChild(el('small', 'hint', ' ' + extra)); return l; },
  };

  /* ================= KURULUM ================= */
  function setup(tab) {
    const p = P();
    const m = open('#modalSetup', `<div class="modal-card wide"><div class="modal-side">
      <nav>${[['about', '⚙', 'About'], ['sizes', '🖥', 'Output Sizes'], ['languages', '🌐', 'Languages'], ['advanced', '⚙︎', 'Advanced']].map(([k, ic, l]) => `<button data-tab="${k}"${k === tab ? ' class="on"' : ''}>${ic} ${t(l)}</button>`).join('')}</nav>
      <div class="pane" id="setupPane"></div></div>
      <div class="modal-foot"><button class="btn" data-close>${t('Cancel')}</button><span class="grow"></span><button class="btn success" id="setupOk">${t('Update')}</button></div></div>`);
    m.querySelectorAll('nav button').forEach((b) => { b.onclick = () => { m.querySelectorAll('nav button').forEach((x) => x.classList.remove('on')); b.classList.add('on'); pane(b.dataset.tab); }; });
    $('#setupOk').onclick = () => { if (!p.sizes.length) { toast(t('Select at least one size and language.')); return; } window.App.save(true); E().refreshLangs(); E().refreshOuts(); if (!p.sizes.includes(E().out)) E().out = p.sizes[0] || 'iphone-6.9'; close('#modalSetup'); };
    function pane(k) {
      const c = $('#setupPane'); c.innerHTML = '';
      if (k === 'about') {
        c.innerHTML = `<h2>${t('About')}</h2><p class="desc">${t('Update your project settings.')}</p>`;
        const kv = el('div', 'kv');
        const add = (label, node) => { kv.appendChild(el('label', null, label)); kv.appendChild(node); };
        const name = el('input'); name.type = 'text'; name.value = p.name; name.oninput = () => { p.name = name.value; };
        add(t('Name'), name);
        const about = el('textarea'); about.value = p.about || ''; about.placeholder = t('What is this project for? (e.g. A/B test with a colourful template)'); about.oninput = () => { p.about = about.value; };
        add(t('About'), about);
        const tags = el('input'); tags.type = 'text'; tags.value = (p.tags || []).join(', '); tags.placeholder = t('Add tag…'); tags.oninput = () => { p.tags = tags.value.split(',').map((x) => x.trim()).filter(Boolean); };
        add(t('Tags'), tags);
        const appRow = el('div', 'row2');
        const bundle = el('input'); bundle.type = 'text'; bundle.value = (p.app && p.app.bundle) || ''; bundle.placeholder = 'com.company.app'; bundle.oninput = () => { p.app.bundle = bundle.value; };
        const icon = el('button', 'btn', (p.app && p.app.icon ? '✓ ' : '⇪ ') + t('Upload icon')); icon.onclick = () => E().pickAsset((id) => { p.app.icon = id; icon.textContent = '✓ ' + t('Upload icon'); });
        appRow.append(bundle, icon); add(t('App'), appRow);
        const orient = el('select'); [['portrait', 'Portrait'], ['landscape', 'Landscape']].forEach(([v, l]) => orient.appendChild(Object.assign(el('option', null, t(l)), { value: v }))); orient.value = p.orientation || 'portrait'; orient.onchange = () => { p.orientation = orient.value; };
        add(t('Orientation'), orient);
        c.appendChild(kv);
      } else if (k === 'sizes') {
        c.innerHTML = `<h2>${t('Output Sizes')}</h2><p class="desc">${t('Select the output sizes that you require for export.')}</p>`;
        const grid = el('div', 'row2');
        const groups = [['google', 'Android'], ['apple', 'Apple'], ['other', 'Other stores']];
        groups.forEach(([store, label]) => {
          const col = el('div'); col.appendChild(el('h4', null, t(label)));
          Devices.OUTPUTS.filter((o) => o.store === store).forEach((o) => {
            const wrap = el('div'); wrap.style.marginBottom = '6px';
            wrap.appendChild(F.check(`${o.label} · ${o.w}×${o.h}`, p.sizes.includes(o.id), (v) => { if (v) { if (!p.sizes.includes(o.id)) p.sizes.push(o.id); } else p.sizes = p.sizes.filter((x) => x !== o.id); }));
            wrap.appendChild(el('div', 'hint', `<span style="color:var(--brand-ink)">${t('Display:')} ${esc(o.display || '')}</span>`));
            col.appendChild(wrap);
          });
          grid.appendChild(col);
        });
        c.appendChild(grid);
      } else if (k === 'languages') {
        c.innerHTML = `<h2>${t('Localisation Languages')}</h2><p class="desc">${t('Add the languages you export to. Captions are stored per language; use AI to translate or edit each language from the language switcher in the toolbar.')}</p>`;
        const kv = el('div', 'kv');
        const add = (label, node) => { kv.appendChild(el('label', null, label)); kv.appendChild(node); };
        const def = el('select'); Object.entries(Model.LANG_NAMES).forEach(([v, l]) => def.appendChild(Object.assign(el('option', null, `${Model.LANG_FLAGS[v] || ''} ${l} (${v})`), { value: v }))); def.value = p.languages.default;
        def.onchange = () => { const old = p.languages.default; const nw = def.value; p.languages.default = nw; if (!p.languages.list.includes(nw)) p.languages.list.unshift(nw); p.screens.forEach((s) => s.layers.forEach((L) => { if (L.text && typeof L.text === 'object' && L.text[nw] == null && L.text[old] != null) L.text[nw] = L.text[old]; })); listBox(); };
        add(t('Default'), def);
        const ctx = el('textarea'); ctx.placeholder = t('Describe what your app does, its audience and preferred tone. Add brand names and terms to keep untranslated.'); ctx.value = p.aiContext || ''; ctx.oninput = () => { p.aiContext = ctx.value; };
        add(t('AI context'), ctx);
        const box = el('div'); add(t('Export languages'), box);
        function listBox() {
          box.innerHTML = '';
          p.languages.list.forEach((l) => {
            const r = el('div', 'langrow', `<span>${Model.LANG_FLAGS[l] || '🌐'}</span><b>${esc(Model.LANG_NAMES[l] || l)}</b><span class="hint">${l}${l === p.languages.default ? ' · ' + t('Default') : ''}</span><span class="grow"></span>`);
            if (l !== p.languages.default) { const x = el('button', 'btn sm danger', t('Delete')); x.onclick = () => { p.languages.list = p.languages.list.filter((z) => z !== l); listBox(); }; r.appendChild(x); }
            box.appendChild(r);
          });
          const addSel = el('select'); addSel.appendChild(Object.assign(el('option', null, t('Add language…')), { value: '' }));
          Object.entries(Model.LANG_NAMES).filter(([v]) => !p.languages.list.includes(v)).forEach(([v, l]) => addSel.appendChild(Object.assign(el('option', null, `${Model.LANG_FLAGS[v] || ''} ${l} (${v})`), { value: v })));
          addSel.onchange = () => { if (addSel.value) { p.languages.list.push(addSel.value); listBox(); } };
          addSel.style.marginTop = '8px'; box.appendChild(addSel);
          const tr = el('button', 'btn soft', '✨ ' + t('Translate all with AI')); tr.style.marginTop = '10px'; tr.onclick = () => { window.App.save(true); close('#modalSetup'); ai('translate'); };
          box.appendChild(tr);
        }
        listBox();
        c.appendChild(kv);
      } else {
        c.innerHTML = `<h2>${t('Advanced')}</h2><p class="desc">${t('Advanced project settings for that fine tune.')}</p>`;
        const kv = el('div', 'kv');
        const add = (label, node) => { kv.appendChild(el('label', null, label)); kv.appendChild(node); };
        p.settings = p.settings || { format: 'png', transparent: false, limit: 10 };
        const fmt = el('select'); [['png', 'PNG'], ['jpeg', 'JPG']].forEach(([v, l]) => fmt.appendChild(Object.assign(el('option', null, l), { value: v }))); fmt.value = p.settings.format; fmt.onchange = () => { p.settings.format = fmt.value; };
        add(t('Export type'), fmt);
        const lim = el('select'); [5, 8, 10, 15, 25].forEach((n) => lim.appendChild(Object.assign(el('option', null, String(n)), { value: n }))); lim.value = p.settings.limit || 10; lim.onchange = () => { p.settings.limit = +lim.value; };
        add(t('Screenshot limit'), lim);
        const fonts = el('button', 'btn', 'Aa ' + t('Manage custom fonts')); fonts.onclick = () => customFonts();
        add(t('Custom fonts'), fonts);
        const exp = el('button', 'btn', '⇩ ' + t('Export project (.json)')); exp.onclick = async () => { const b = await Store.exportProject(p.id); if (b) download(new Blob([JSON.stringify(b)], { type: 'application/json' }), slug(p.name) + '.sms.json'); };
        add(t('Backup'), exp);
        c.appendChild(kv);
      }
    }
    pane(tab || 'about');
  }

  /* ================= UYGULAMA EKRANLARI ================= */
  function screens(startIndex) {
    const p = P(); let cur = Math.max(0, Math.min(startIndex || 0, p.screens.length - 1));
    const m = open('#modalScreens', `<div class="modal-card wide"><div class="modal-head"><h2>${t('Raw App Screenshots (By Device)')}</h2><button class="modal-close" data-close>✕</button></div>
      <div class="modal-body"><p class="hint" style="margin-bottom:12px">${t('Upload raw screenshots captured from your app (before mockups). One per device family gives the best result; the global slot is used when a family is empty.')}</p>
      <div class="dropzone" id="bulkDrop">${t('Bulk upload: drop all screenshots here — they fill screens in file-name order')}</div>
      <div class="tabs" id="shotTabs"></div><div id="shotPane"></div></div>
      <div class="modal-foot"><button class="btn" data-close>${t('Cancel')}</button><button class="btn" id="shotClear">${t('Clear')}</button><span class="grow"></span><button class="btn" id="shotNext">${t('Next')} →</button><button class="btn success" data-close>${t('Save')}</button></div></div>`);
    const dz = $('#bulkDrop');
    dz.onclick = () => { const inp = $('#fileShots'); inp.value = ''; inp.onchange = () => bulk([...inp.files]); inp.click(); };
    dz.ondragover = (e) => { e.preventDefault(); dz.classList.add('on'); }; dz.ondragleave = () => dz.classList.remove('on');
    dz.ondrop = (e) => { e.preventDefault(); dz.classList.remove('on'); bulk([...e.dataTransfer.files]); };
    async function bulk(files) {
      files = files.filter((f) => f.type.startsWith('image/')).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
      E().snapshot('bulk');
      for (let i = 0; i < files.length; i++) {
        if (i >= p.screens.length) { const ns = Model.clone(p.screens[p.screens.length - 1]); ns.id = Model.uid('s'); ns.layers.forEach((L) => { L.id = Model.uid(); if (L.type === 'device') L.shots = {}; }); p.screens.push(ns); }
        const dev = p.screens[i].layers.find((L) => L.type === 'device'); if (!dev) continue;
        const id = await Store.putAsset(await Store.fileToDataUrl(files[i]), { name: files[i].name });
        const slot = guessSlot(files[i].name);
        Model.setShot(dev, slot, id);
      }
      window.App.save(); tabs(); pane(); toast(t('{n} screenshots added', { n: files.length }));
    }
    const guessSlot = (name) => { const n = name.toLowerCase(); if (/ipad|tablet/.test(n)) return 'ipad'; if (/watch/.test(n)) return 'watch'; if (/android|pixel|galaxy/.test(n)) return 'android-phone'; return 'global'; };
    function tabs() { const tb = $('#shotTabs'); tb.innerHTML = ''; p.screens.forEach((s, i) => { const b = el('button', i === cur ? 'on' : '', t('Screen {n}', { n: i + 1 })); b.onclick = () => { cur = i; tabs(); pane(); }; tb.appendChild(b); }); }
    function pane() {
      const c = $('#shotPane'); c.innerHTML = '';
      const s = p.screens[cur];
      const g = el('div', 'shots-grid');
      const th = el('div', 'thumb'); const cv = el('canvas'); th.appendChild(cv); g.appendChild(th);
      const { W, H } = E().dims(); const w = 170, h = Math.round(w * H / W); E().renderTo(cv, cur, w * 2, h * 2); cv.style.width = w + 'px';
      const right = el('div');
      const devs = s.layers.filter((L) => L.type === 'device');
      if (!devs.length) right.appendChild(el('p', 'hint', t('This screen has no device layer. Add one from the screen panel.')));
      devs.forEach((L, di) => {
        const sec = el('div', 'slot-group'); sec.appendChild(el('h4', null, `📱 ${t('Layer')} ${di + 1} — ${t('Device')} (${esc((window.Frames.FRAMES[L.frame] || {}).label || L.frame)})`));
        const groups = {}; Devices.SHOT_SLOTS.forEach((sl) => { (groups[sl.group || 'Global'] = groups[sl.group || 'Global'] || []).push(sl); });
        Object.entries(groups).forEach(([gname, slots]) => {
          if (gname !== 'Global') sec.appendChild(el('h4', null, gname));
          const grid = el('div', 'slots');
          slots.forEach((sl) => {
            const id = L.shots && L.shots[sl.id];
            const d = el('div', 'slot' + (id ? ' filled' : ''));
            const img = el('img'); if (id) Store.loadAsset(id).then((im) => { if (im) img.src = im.src; });
            d.appendChild(img);
            d.appendChild(el('div', 'info', `<b>${esc(sl.id === 'global' ? t('Global Screenshot') : sl.label)}</b><small>${t('Aspect ratio')}: ${sl.ratio ? sl.ratio.toFixed(3) : 'auto'}${sl.typical ? ' · ' + sl.typical : ''}</small>`));
            if (id) { const x = el('button', 'x', '✕'); x.title = t('Clear'); x.onclick = (e) => { e.stopPropagation(); E().snapshot('shot'); Model.setShot(L, sl.id, null); window.App.save(); pane(); }; d.appendChild(x); }
            d.onclick = () => E().pickAsset((aid) => { E().snapshot('shot'); Model.setShot(L, sl.id, aid); window.App.save(); pane(); });
            grid.appendChild(d);
          });
          sec.appendChild(grid);
        });
        right.appendChild(sec);
      });
      g.appendChild(right); c.appendChild(g);
    }
    $('#shotClear').onclick = () => { E().snapshot('clearshots'); p.screens[cur].layers.filter((L) => L.type === 'device').forEach((L) => { L.shots = {}; }); window.App.save(); pane(); };
    $('#shotNext').onclick = () => { cur = (cur + 1) % p.screens.length; tabs(); pane(); };
    tabs(); pane();
  }

  /* ================= ÖNİZLEME & DIŞA AKTAR ================= */
  function exportModal(tab) {
    const p = P();
    const m = open('#modalExport', `<div class="modal-card wide"><div class="modal-side">
      <nav>${[['preview', '▦', 'Preview'], ['download', '⇩', 'Download'], ['upload', '⇪', 'Upload to App Stores'], ['history', '🕘', 'Export History']].map(([k, ic, l]) => `<button data-tab="${k}"${k === tab ? ' class="on"' : ''}>${ic} ${t(l)}</button>`).join('')}</nav>
      <div class="pane" id="expPane"></div></div>
      <div class="modal-foot"><button class="btn" data-close>${t('Cancel')}</button><span class="grow"></span></div></div>`);
    m.querySelectorAll('nav button').forEach((b) => { b.onclick = () => { m.querySelectorAll('nav button').forEach((x) => x.classList.remove('on')); b.classList.add('on'); pane(b.dataset.tab); }; });
    const sizes = () => p.sizes.map(Devices.byId).filter(Boolean);
    const dimsOf = (o) => Devices.dimensions(o, p.orientation);
    function pane(k) {
      const c = $('#expPane'); c.innerHTML = '';
      if (k === 'preview') {
        c.innerHTML = `<h2>${t('Preview')}</h2><p class="desc">${t('Preview the output screenshots, size-by-size and language-by-language.')}</p>`;
        const bar = el('div', 'row2');
        const sz = el('select'); sizes().forEach((o) => sz.appendChild(Object.assign(el('option', null, `${o.label} — ${dimsOf(o).W}×${dimsOf(o).H}`), { value: o.id }))); sz.value = E().out;
        const lg = el('select'); p.languages.list.forEach((l) => lg.appendChild(Object.assign(el('option', null, `${Model.LANG_FLAGS[l] || ''} ${Model.LANG_NAMES[l] || l}`), { value: l }))); lg.value = E().lang;
        bar.append(sz, lg); c.appendChild(bar);
        const mock = el('div', 'storemock'); mock.style.marginTop = '12px';
        const strip = el('div', 'exp-preview'); mock.appendChild(strip); c.appendChild(mock);
        const draw = () => { strip.innerHTML = ''; const o = Devices.byId(sz.value); const { W, H } = dimsOf(o); const h = 300, w = Math.round(h * W / H); p.screens.forEach((s, i) => { const cv = el('canvas'); cv.width = w * 2; cv.height = h * 2; cv.style.height = h + 'px'; Render.renderScreen(cv.getContext('2d'), cv.width, cv.height, s, { lang: lg.value, defaultLang: p.languages.default, imageFor: Store.imageFor, shotSlot: Devices.slotForOutput(o.id), pan: s.bg && s.bg.panorama ? { i, n: p.screens.length } : null, project: p }); strip.appendChild(cv); }); };
        sz.onchange = draw; lg.onchange = draw; draw();
      } else if (k === 'download') {
        c.innerHTML = `<h2>${t('Download')}</h2><p class="desc">${t('Download a zip with every selected size and language, organised in folders.')}</p>`;
        const g = el('div', 'exp-grid');
        const colS = el('div'); colS.appendChild(el('h4', null, t('Output sizes'))); const selS = new Set(p.sizes); const ls = el('div', 'exp-list'); sizes().forEach((o) => ls.appendChild(F.check(`${o.label} · ${dimsOf(o).W}×${dimsOf(o).H}`, true, (v) => { v ? selS.add(o.id) : selS.delete(o.id); }))); colS.appendChild(ls);
        const colL = el('div'); colL.appendChild(el('h4', null, t('Export languages'))); const selL = new Set(p.languages.list); const ll = el('div', 'exp-list'); p.languages.list.forEach((l) => ll.appendChild(F.check(`${Model.LANG_FLAGS[l] || ''} ${Model.LANG_NAMES[l] || l}`, true, (v) => { v ? selL.add(l) : selL.delete(l); }))); colL.appendChild(ll);
        g.append(colS, colL); c.appendChild(g);
        const prog = el('div', 'progress'); const bar = el('i'); prog.appendChild(bar); prog.style.marginTop = '14px'; c.appendChild(prog);
        const status = el('p', 'hint'); c.appendChild(status);
        const btn = el('button', 'btn primary lg', '⇩ ' + t('Download .zip')); btn.style.marginTop = '10px'; c.appendChild(btn);
        btn.onclick = async () => {
          btn.disabled = true;
          const files = []; const total = selS.size * selL.size * p.screens.length; let done = 0;
          if (!total) { status.textContent = t('Select at least one size and language.'); btn.disabled = false; return; }
          try {
          const fmt = (p.settings && p.settings.format) || 'png';
          for (const sid of selS) { const o = Devices.byId(sid); const { W, H } = dimsOf(o);
            for (const l of selL) { for (let i = 0; i < p.screens.length; i++) {
              const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
              const context = cv.getContext('2d', o.creative ? { alpha: false } : undefined);
              Render.renderScreen(context, W, H, p.screens[i], { lang: l, defaultLang: p.languages.default, imageFor: Store.imageFor, shotSlot: Devices.slotForOutput(sid), pan: p.screens[i].bg && p.screens[i].bg.panorama ? { i, n: p.screens.length } : null, project: p });
              const exportFmt = o.pngOnly ? 'png' : fmt;
              const blob = o.creative && exportFmt !== 'jpeg' ? new Blob([await OpaquePNG.encode(cv)], { type: 'image/png' }) : await new Promise((r) => cv.toBlob(r, exportFmt === 'jpeg' ? 'image/jpeg' : 'image/png', 0.92));
              if (!blob) throw new Error('Image export failed');
              const title = Render.textOf((p.screens[i].layers.find((L) => L.type === 'text') || {}).text, l, p.languages.default);
              files.push({ name: `${l}/${sid}_${W}x${H}/${String(i + 1).padStart(2, '0')}-${slug(title)}.${exportFmt === 'jpeg' ? 'jpg' : 'png'}`, data: new Uint8Array(await blob.arrayBuffer()) });
              done++; bar.style.width = Math.round(done / total * 100) + '%'; status.textContent = t('Rendering {n} images…', { n: total - done });
              await new Promise((r) => setTimeout(r, 0));
            } } }
          download(window.makeZip(files), `${slug(p.name)}-screenshots.zip`);
          status.textContent = t('{n} images zipped', { n: files.length }); btn.disabled = false;
          const hist = (await Store.kvGet('history:' + p.id).catch(() => null)) || []; hist.unshift({ at: Date.now(), n: files.length, sizes: [...selS], langs: [...selL] }); await Store.kvSet('history:' + p.id, hist.slice(0, 20));
          } catch (error) { status.textContent = t('Export failed: ') + error.message; } finally { btn.disabled = false; }
        };
      } else if (k === 'upload') {
        c.innerHTML = `<h2>${t('Upload to App Stores')}</h2><p class="desc">${t('Automatically upload your screenshots to App Store Connect and/or the Google Play Console.')}</p>
          <div class="card" style="padding:18px"><b>${t('Coming soon')}</b><p class="hint" style="margin-top:6px">${t('Direct upload to App Store Connect and Google Play Console is on the roadmap. For now, download the zip and upload from the console.')}</p>
          <p class="hint" style="margin-top:10px">${t('Tip: the zip is organised as language / size / screenshot, matching what the consoles expect.')}</p></div>`;
      } else {
        c.innerHTML = `<h2>${t('Export History')}</h2>`;
        Store.kvGet('history:' + p.id).then((h) => { const list = h || []; if (!list.length) { c.appendChild(el('p', 'hint', t('No exports yet.'))); return; } list.forEach((r) => c.appendChild(el('div', 'langrow', `<b>${new Date(r.at).toLocaleString()}</b><span class="hint">${r.n} ${t('images')} · ${r.sizes.length} ${t('sizes')} · ${r.langs.join(', ')}</span>`))); });
      }
    }
    pane(tab || 'preview');
  }

  /* ================= AI ================= */
  const keyGet = () => { try { return localStorage.getItem('sms-anthropic-key') || ''; } catch (e) { return ''; } };
  const modelGet = () => { try { return localStorage.getItem('sms-model') || 'claude-opus-5'; } catch (e) { return 'claude-opus-5'; } };
  let sdkP = null;
  const loadSdk = () => (sdkP = sdkP || import('https://esm.sh/@anthropic-ai/sdk@0.90.0').then((m) => m.default || m.Anthropic));
  async function callAI(system, user, schema) {
    const key = keyGet(); if (!key) throw new Error(t('API key needed — add it in the AI panel.'));
    const Anthropic = await loadSdk();
    const client = new Anthropic({ apiKey: key, dangerouslyAllowBrowser: true });
    const req = { model: modelGet(), max_tokens: 6000, system, messages: [{ role: 'user', content: user }], output_config: { format: { type: 'json_schema', schema }, effort: 'medium' } };
    let res;
    try { res = await client.beta.messages.create(Object.assign({ betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' }, req)); }
    catch (e) { if (e && e.status === 400) res = await client.messages.create(req); else throw e; }
    if (res.stop_reason === 'refusal') throw new Error('refused');
    const text = (res.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
    const a = text.indexOf('{'), b = text.lastIndexOf('}');
    return JSON.parse(text.slice(a, b + 1));
  }
  const LANG_NAME = (l) => Model.LANG_NAMES[l] || l;
  function captionPrompt(p, tone) {
    const titles = p.screens.map((s, i) => { const T = s.layers.filter((L) => L.type === 'text'); return `${i + 1}. title: "${Render.textOf((T[0] || {}).text, p.languages.default, p.languages.default)}" / subtitle: "${Render.textOf((T[1] || {}).text, p.languages.default, p.languages.default)}"`; }).join('\n');
    return `You write App Store / Google Play screenshot captions. Output language: ${LANG_NAME(p.languages.default)}.

APP: ${p.name}
${p.aiContext || p.about || '(no description given)'}

Current placeholder captions (one screen per line; keep the same order and count, describe what each screen most likely shows):
${titles}

Write ${p.screens.length} screens. Rules:
- title: max 30 characters, no full stop, benefit-first, tone: ${tone}. Two lines allowed with \\n in the middle.
- Wrap exactly ONE benefit word or short phrase per title in [square brackets]; it is highlighted.
- subtitle: max 55 characters; the concrete outcome, not a feature list.
- No hype ("best", "revolutionary", "#1"), no price claims, no repeated key word across titles.
- Order: core promise → core features → differentiator → trust → call to action.

Return ONLY JSON: {"screens":[{"title":"...","subtitle":"..."}]}`;
  }
  function translatePrompt(p, targets) {
    const src = p.languages.default;
    const items = [];
    p.screens.forEach((s, i) => s.layers.forEach((L, k) => { if ((L.type === 'text' || (L.type === 'element' && L.text)) && L.text) items.push({ id: `${i}:${k}`, text: Render.textOf(L.text, src, src) }); }));
    return { items, prompt: `Translate App Store screenshot captions from ${LANG_NAME(src)} into: ${targets.map(LANG_NAME).join(', ')}.
Context: ${p.aiContext || p.about || p.name}
Rules: keep [square brackets] around the same highlighted word; keep \\n line breaks; keep brand names untranslated; keep titles ≤ 32 characters where possible; natural store copy, not literal.

Items (JSON): ${JSON.stringify(items)}

Return ONLY JSON: {"translations":{"<lang>":{"<id>":"<text>"}}} with every language and every id.` };
  }
  function ai(mode) {
    const p = P();
    const m = open('#modalAI', `<div class="modal-card"><div class="modal-head"><h2>✨ ${t('AI captions & translations')}</h2><button class="modal-close" data-close>✕</button></div>
      <div class="modal-body">
        <div class="field"><label>${t('Describe your app')}</label><textarea id="aiDesc" rows="3">${esc(p.aiContext || p.about || '')}</textarea><span class="hint">${t('What it does, for whom, what is different. Brand names to keep. 2-4 sentences.')}</span></div>
        <div class="row2"><div class="field"><label>${t('Tone')}</label><select id="aiTone"><option value="benefit-led, calm confidence">${t('Benefit-led')}</option><option value="playful and warm">${t('Playful')}</option><option value="minimal, premium, understated">${t('Premium')}</option><option value="short imperatives">${t('Direct')}</option></select></div>
        <div class="field"><label>${t('Anthropic API key')}</label><input type="password" id="aiKey" value="${esc(keyGet())}" placeholder="sk-ant-…"><span class="hint">${t('Stored only in this browser. Calls go straight to Anthropic.')}</span></div></div>
        <div class="row2"><button class="btn primary lg" id="aiWrite">✍️ ${t('Write captions')} (${esc(LANG_NAME(p.languages.default))})</button><button class="btn lg" id="aiTranslate">🌐 ${t('Translate to all project languages')} (${p.languages.list.length - 1})</button></div>
        <p class="hint" id="aiStatus" style="margin-top:8px"></p>
        <details style="margin-top:14px"><summary class="hint">${t('No API key? Copy the prompt, paste the answer')}</summary>
          <div class="row2" style="margin-top:8px"><button class="btn sm" id="aiCopyC">${t('Copy captions prompt')}</button><button class="btn sm" id="aiCopyT">${t('Copy translation prompt')}</button></div>
          <textarea id="aiPaste" rows="5" placeholder='{"screens":[…]} / {"translations":{…}}' style="margin-top:8px;font-family:ui-monospace,Menlo,monospace;font-size:12px"></textarea>
          <button class="btn sm" id="aiApply" style="margin-top:6px">${t('Apply')}</button></details>
      </div></div>`);
    const status = $('#aiStatus');
    const saveKey = () => { try { localStorage.setItem('sms-anthropic-key', $('#aiKey').value.trim()); } catch (e) { } };
    $('#aiKey').onchange = saveKey;
    $('#aiDesc').oninput = () => { p.aiContext = $('#aiDesc').value; };
    function applyCaptions(j) {
      const arr = j.screens || j.slides || []; E().snapshot('ai');
      arr.forEach((r, i) => { const s = p.screens[i]; if (!s) return; const T = s.layers.filter((L) => L.type === 'text'); if (T[0] && r.title) Model.setText(T[0], p.languages.default, String(r.title).replace(/\\n/g, '\n')); if (T[1] && r.subtitle) Model.setText(T[1], p.languages.default, r.subtitle); });
      E().commit(); status.textContent = t('Captions written');
    }
    function applyTranslations(j) {
      const tr = j.translations || {}; E().snapshot('ai-tr');
      Object.entries(tr).forEach(([lang, map]) => { Object.entries(map).forEach(([id, text]) => { const [i, k] = id.split(':').map(Number); const L = p.screens[i] && p.screens[i].layers[k]; if (L) Model.setText(L, lang, text); }); });
      E().commit(); status.textContent = t('Translated');
    }
    $('#aiWrite').onclick = async () => { saveKey(); status.textContent = t('Working…'); try { const j = await callAI('You are a senior ASO copywriter. Follow length limits exactly. Return only JSON.', captionPrompt(p, $('#aiTone').value), { type: 'object', additionalProperties: false, required: ['screens'], properties: { screens: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['title', 'subtitle'], properties: { title: { type: 'string' }, subtitle: { type: 'string' } } } } } }); applyCaptions(j); } catch (e) { status.textContent = '⚠︎ ' + e.message; } };
    $('#aiTranslate').onclick = async () => {
      saveKey(); const targets = p.languages.list.filter((l) => l !== p.languages.default); if (!targets.length) { status.textContent = t('Add languages in Setup → Languages first.'); return; }
      status.textContent = t('Working…');
      try { const { prompt } = translatePrompt(p, targets); const j = await callAI('You are a professional app-store localizer. Return only JSON.', prompt, { type: 'object', additionalProperties: false, required: ['translations'], properties: { translations: { type: 'object', additionalProperties: { type: 'object', additionalProperties: { type: 'string' } } } } }); applyTranslations(j); } catch (e) { status.textContent = '⚠︎ ' + e.message; }
    };
    $('#aiCopyC').onclick = () => navigator.clipboard.writeText(captionPrompt(p, $('#aiTone').value)).then(() => toast(t('Copied')));
    $('#aiCopyT').onclick = () => { const targets = p.languages.list.filter((l) => l !== p.languages.default); navigator.clipboard.writeText(translatePrompt(p, targets).prompt).then(() => toast(t('Copied'))); };
    $('#aiApply').onclick = () => { try { const txt = $('#aiPaste').value; const a = txt.indexOf('{'), b = txt.lastIndexOf('}'); const j = JSON.parse(txt.slice(a, b + 1)); if (j.translations) applyTranslations(j); else applyCaptions(j); } catch (e) { status.textContent = '⚠︎ JSON'; } };
    if (mode === 'translate') $('#aiTranslate').focus();
  }


  /* ================= HIZLI BAŞLANGIÇ: ad + açıklama + ss + diller → AI her şeyi yazar ================= */
  function quick() {
    const p = P(); const E_ = E();
    let files = [];
    const m = open('#modalAI', `<div class="modal-card wide"><div class="modal-head"><h2>⚡ ${t('Quick start')}</h2><button class="modal-close" data-close>✕</button></div>
      <div class="modal-body">
        <div class="qsteps"><span><b>1</b> ${t('Tell us about the app')}</span><span><b>2</b> ${t('Drop the screenshots')}</span><span><b>3</b> ${t('Pick languages')}</span><span><b>4</b> ${t('AI writes every caption')}</span></div>
        <div class="quick-grid">
          <div>
            <div class="row2"><div class="field"><label>${t('App name')}</label><input type="text" id="qName" value="${esc(p.name || '')}"></div><div class="field"><label>${t('Brand colour')}</label><input type="color" id="qAccent" value="${esc(firstAccent(p))}" style="width:100%"></div></div>
            <div class="field"><label>${t('Describe your app')}</label><textarea id="qDesc" placeholder="${esc(t('What it does, for whom, what is different. Brand names to keep. 2-4 sentences.'))}">${esc(p.aiContext || p.about || '')}</textarea></div>
            <div class="row2"><div class="field"><label>${t('Tone')}</label><select id="qTone"><option value="benefit-led, calm confidence">${t('Benefit-led')}</option><option value="playful and warm">${t('Playful')}</option><option value="minimal, premium, understated">${t('Premium')}</option><option value="short imperatives">${t('Direct')}</option></select></div>
            <div class="field"><label>${t('Default language')}</label><select id="qLang"></select></div></div>
            <div class="field"><label>${t('Also translate to')}</label><div class="langchips" id="qLangs"></div></div>
            <label class="check" style="margin-bottom:10px"><input type="checkbox" id="qIcon" ${p.sizes.some(id => Devices.byId(id)?.creative) ? '' : 'checked'}><span>${t('Show app icon + name on the first screen')}</span> <button class="btn sm" id="qIconBtn" type="button">⇪ ${t('Upload icon')}</button></label>
          </div>
          <div>
            <div class="field"><label>${t('Screenshots')} <span class="hint">(${t('in order, file names sort them')})</span></label>
              <div class="qshots" id="qShots">${t('Drop raw screenshots here or click to choose')}<div class="thumbs" id="qThumbs"></div></div></div>
            <div class="field"><label>${t('Anthropic API key')}</label><input type="password" id="qKey" value="${esc(keyGet())}" placeholder="sk-ant-…"><span class="hint">${t('Stored only in this browser. Calls go straight to Anthropic.')} ${t('No key? Use "Apply without AI" and write captions in the Text tab, or copy the prompt from ✨ AI captions.')}</span></div>
          </div>
        </div>
        <p class="hint" id="qStatus"></p>
      </div>
      <div class="modal-foot"><button class="btn" data-close>${t('Cancel')}</button><span class="grow"></span><button class="btn" id="qApplyOnly">${t('Apply without AI')}</button><button class="btn primary lg" id="qGo">✨ ${t('Apply & write captions')}</button></div></div>`);
    const status = $('#qStatus');
    const langSel = $('#qLang'); Object.entries(Model.LANG_NAMES).forEach(([v, l]) => langSel.appendChild(Object.assign(el('option', null, `${Model.LANG_FLAGS[v] || ''} ${l}`), { value: v }))); langSel.value = p.languages.default;
    const chips = $('#qLangs'); const extra = new Set((p.languages.list || []).filter((l) => l !== p.languages.default));
    const drawChips = () => { chips.innerHTML = ''; Object.entries(Model.LANG_NAMES).filter(([v]) => v !== langSel.value).forEach(([v, l]) => { const c = el('span', 'chip' + (extra.has(v) ? ' on' : ''), `${Model.LANG_FLAGS[v] || ''} ${l}`); c.onclick = () => { extra.has(v) ? extra.delete(v) : extra.add(v); drawChips(); }; chips.appendChild(c); }); };
    langSel.onchange = () => { extra.delete(langSel.value); drawChips(); }; drawChips();
    $('#qIconBtn').onclick = (e) => { e.preventDefault(); E_.pickAsset((id) => { p.app.icon = id; $('#qIconBtn').textContent = '✓ ' + t('Upload icon'); }); };
    const dz = $('#qShots'); const thumbs = $('#qThumbs');
    const setFiles = (fl) => { files = fl.filter((f) => f.type.startsWith('image/')).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true })); thumbs.innerHTML = ''; files.forEach((f) => { const im = el('img'); im.src = URL.createObjectURL(f); thumbs.appendChild(im); }); dz.firstChild.textContent = files.length ? t('{n} screenshots selected', { n: files.length }) : t('Drop raw screenshots here or click to choose'); };
    dz.onclick = () => { const inp = $('#fileShots'); inp.value = ''; inp.onchange = () => setFiles([...inp.files]); inp.click(); };
    dz.ondragover = (e) => { e.preventDefault(); dz.classList.add('on'); }; dz.ondragleave = () => dz.classList.remove('on'); dz.ondrop = (e) => { e.preventDefault(); dz.classList.remove('on'); setFiles([...e.dataTransfer.files]); };
    async function applyBasics() {
      E_.snapshot('quick');
      p.name = $('#qName').value.trim() || p.name; p.aiContext = $('#qDesc').value.trim();
      const def = langSel.value; const old = p.languages.default;
      if (def !== old) { p.languages.default = def; p.screens.forEach((s) => s.layers.forEach((L) => { if (L.text && typeof L.text === 'object' && L.text[def] == null && L.text[old] != null) L.text[def] = L.text[old]; })); }
      p.languages.list = [def, ...extra];
      const accent = $('#qAccent').value;
      if (accent && accent !== firstAccent(p)) p.screens.forEach((s) => s.layers.forEach((L) => { if (L.type === 'text' && L.role !== 'subtitle') L.accent = accent; if (L.type === 'element' && (L.kind === 'icon' || L.kind === 'note')) L.iconBg = accent; }));
      // ekran görüntüleri → sırayla; fazla ekranlar kırpılır, eksikse ekran eklenir
      if (files.length) {
        while (p.screens.length < files.length) { const ns = Model.clone(p.screens[p.screens.length - 1]); ns.id = Model.uid('s'); ns.layers.forEach((L) => { L.id = Model.uid(); if (L.type === 'device') L.shots = {}; }); p.screens.push(ns); }
        if (p.screens.length > files.length && files.length >= 3) p.screens = p.screens.slice(0, files.length);
        for (let i = 0; i < files.length; i++) { const dev = p.screens[i].layers.find((L) => L.type === 'device'); if (!dev) continue; const id = await Store.putAsset(await Store.fileToDataUrl(files[i]), { name: files[i].name }); Model.setShot(dev, 'global', id); }
      }
      // ikon + ad
      const first = p.screens[0];
      if (first) { first.layers = first.layers.filter((L) => !(L.type === 'element' && L.kind === 'icon')); if ($('#qIcon').checked && p.name) { const title = first.layers.find((L) => L.type === 'text'); first.layers.push(Model.newLayer('element', { kind: 'icon', text: { [def]: p.name }, x: 50, y: 3.5, size: 2.8, iconBg: accent || '#12856f', color: (title && title.color) || '#ffffff' })); } }
      E_.lang = def; E_.refreshLangs(); E_.commit();
    }
    $('#qApplyOnly').onclick = async () => { await applyBasics(); close('#modalAI'); toast(t('Applied')); };
    $('#qGo').onclick = async () => {
      try { localStorage.setItem('sms-anthropic-key', $('#qKey').value.trim()); } catch (e) { }
      $('#qGo').disabled = true; status.textContent = t('Applying…');
      await applyBasics();
      try {
        status.textContent = t('Writing captions…');
        const j = await callAI('You are a senior ASO copywriter. Follow length limits exactly. Return only JSON.', captionPrompt(p, $('#qTone').value), CAPTION_SCHEMA);
        E_.snapshot('ai'); (j.screens || []).forEach((r, i) => { const s = p.screens[i]; if (!s) return; const T = s.layers.filter((L) => L.type === 'text'); if (T[0] && r.title) Model.setText(T[0], p.languages.default, String(r.title).replace(/\\n/g, '\n')); if (T[1] && r.subtitle) Model.setText(T[1], p.languages.default, r.subtitle); }); E_.commit();
        const targets = p.languages.list.filter((l) => l !== p.languages.default);
        if (targets.length) { status.textContent = t('Translating to {n} languages…', { n: targets.length }); const { prompt } = translatePrompt(p, targets); const tj = await callAI('You are a professional app-store localizer. Return only JSON.', prompt, TRANSLATE_SCHEMA); E_.snapshot('ai-tr'); Object.entries(tj.translations || {}).forEach(([lang, map]) => Object.entries(map).forEach(([id, text]) => { const [i, k] = id.split(':').map(Number); const L = p.screens[i] && p.screens[i].layers[k]; if (L) Model.setText(L, lang, text); })); E_.commit(); }
        close('#modalAI'); toast(t('Done — review the captions in the Text tab'));
      } catch (e) { status.textContent = '⚠︎ ' + e.message; $('#qGo').disabled = false; }
    };
  }
  const firstAccent = (p) => { for (const s of p.screens) for (const L of s.layers) if (L.type === 'text' && L.accent && /^#[0-9a-f]{6}$/i.test(L.accent)) return L.accent; return '#12856f'; };
  const CAPTION_SCHEMA = { type: 'object', additionalProperties: false, required: ['screens'], properties: { screens: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['title', 'subtitle'], properties: { title: { type: 'string' }, subtitle: { type: 'string' } } } } } };
  const TRANSLATE_SCHEMA = { type: 'object', additionalProperties: false, required: ['translations'], properties: { translations: { type: 'object', additionalProperties: { type: 'object', additionalProperties: { type: 'string' } } } } };

  /* ================= FONTLAR / KISAYOLLAR ================= */
  function customFonts() {
    open('#modalFonts', `<div class="modal-card narrow"><div class="modal-head"><h2>${t('Custom fonts')}</h2><button class="modal-close" data-close>✕</button></div><div class="modal-body"><p class="hint">${t('Upload a .ttf/.otf/.woff2 file; it becomes the "Custom font" option for text layers in this browser session.')}</p><button class="btn primary" id="fontPick" style="margin-top:10px">⇪ ${t('Upload font')}</button><p class="hint" id="fontStatus" style="margin-top:8px"></p></div></div>`);
    $('#fontPick').onclick = () => { const inp = $('#fileFont'); inp.value = ''; inp.onchange = async () => { const f = inp.files[0]; if (!f) return; const face = new FontFace('CustomFont', await f.arrayBuffer()); await face.load(); document.fonts.add(face); $('#fontStatus').textContent = '✓ ' + f.name; E().renderAll(); }; inp.click(); };
  }
  function shortcuts() {
    open('#modalShortcuts', `<div class="modal-card narrow"><div class="modal-head"><h2>${t('Keyboard shortcuts')}</h2><button class="modal-close" data-close>✕</button></div><div class="modal-body">
      ${[['⌘Z / ⌘⇧Z', t('Undo') + ' / ' + t('Redo')], ['⌘S', t('Save')], ['⌘D', t('Duplicate') + ' ' + t('layer')], ['Delete', t('Delete') + ' ' + t('layer')], ['← → ↑ ↓', t('Nudge layer') + ' (⇧ = ×5)'], ['Esc', t('Close panel')], ['+ / −', t('Zoom')], [t('Drag on canvas'), t('Move layer')], [t('Drop images on a screen'), t('Set screenshot')]].map(([k, v]) => `<div class="langrow"><span class="kbd">${esc(k)}</span><span class="grow"></span><span>${esc(v)}</span></div>`).join('')}
    </div></div>`);
  }

  window.I18N.extend({ 'Select at least one size and language.': 'En az bir boyut ve dil seç.', 'Export failed: ': 'Dışa aktarma başarısız: ', 'Quick start': 'Hızlı başlangıç', 'Tell us about the app': 'Uygulamayı anlat', 'Drop the screenshots': 'Ekran görüntülerini bırak', 'Pick languages': 'Dilleri seç', 'AI writes every caption': 'Başlıkları AI yazar', 'App name': 'Uygulama adı', 'Brand colour': 'Marka rengi', 'Default language': 'Varsayılan dil', 'Also translate to': 'Şu dillere de çevir', 'Show app icon + name on the first screen': 'İlk ekranda ikon + ad göster', 'Screenshots': 'Ekran görüntüleri', 'in order, file names sort them': 'sırayla; dosya adları sıralar', 'Drop raw screenshots here or click to choose': 'Ham ekran görüntülerini buraya bırak ya da tıkla', '{n} screenshots selected': '{n} ekran görüntüsü seçildi', 'No key? Use "Apply without AI" and write captions in the Text tab, or copy the prompt from ✨ AI captions.': 'Anahtar yok mu? "AI olmadan uygula" de, başlıkları Metin sekmesinden yaz ya da ✨ AI başlıklar\'dan prompt\'u kopyala.', 'Apply without AI': 'AI olmadan uygula', 'Apply & write captions': 'Uygula ve başlıkları yaz', 'Applied': 'Uygulandı', 'Applying…': 'Uygulanıyor…', 'Writing captions…': 'Başlıklar yazılıyor…', 'Translating to {n} languages…': '{n} dile çevriliyor…', 'Done — review the captions in the Text tab': 'Bitti — başlıkları Metin sekmesinden gözden geçir', 'What is this project for? (e.g. A/B test with a colourful template)': 'Bu proje ne için? (ör. renkli şablonla A/B testi)', 'Add the languages you export to. Captions are stored per language; use AI to translate or edit each language from the language switcher in the toolbar.': 'Dışa aktaracağın dilleri ekle. Metinler dil başına saklanır; AI ile çevir ya da araç çubuğundaki dil seçiciden her dili düzenle.', 'Advanced project settings for that fine tune.': 'İnce ayar için gelişmiş proje ayarları.', 'Backup': 'Yedek', 'Bulk upload: drop all screenshots here — they fill screens in file-name order': 'Toplu yükleme: tüm ekran görüntülerini buraya bırak — dosya adı sırasıyla ekranlara oturur', 'This screen has no device layer. Add one from the screen panel.': 'Bu ekranda cihaz katmanı yok. Ekran panelinden ekle.', 'Automatically upload your screenshots to App Store Connect and/or the Google Play Console.': 'Ekran görüntülerini App Store Connect ve/veya Google Play Console\'a otomatik yükle.', 'Tip: the zip is organised as language / size / screenshot, matching what the consoles expect.': 'İpucu: zip dil / boyut / ekran görüntüsü olarak düzenlenir; konsolların beklediği yapı.', 'No exports yet.': 'Henüz dışa aktarma yok.', 'images': 'görsel', 'sizes': 'boyut', 'What it does, for whom, what is different. Brand names to keep. 2-4 sentences.': 'Ne yapar, kime, neyi farklı yapar. Korunacak marka adları. 2-4 cümle.', 'No API key? Copy the prompt, paste the answer': 'API anahtarı yok mu? Prompt\'u kopyala, cevabı yapıştır', 'Copy captions prompt': 'Başlık prompt\'unu kopyala', 'Copy translation prompt': 'Çeviri prompt\'unu kopyala', 'Copied': 'Kopyalandı', 'Add languages in Setup → Languages first.': 'Önce Kurulum → Diller\'den dil ekle.', 'Upload a .ttf/.otf/.woff2 file; it becomes the "Custom font" option for text layers in this browser session.': '.ttf/.otf/.woff2 yükle; bu tarayıcı oturumunda metin katmanlarında "Custom font" seçeneği olur.', 'Upload font': 'Font yükle', 'layer': 'katman', 'Nudge layer': 'Katmanı kaydır', 'Close panel': 'Paneli kapat', 'Zoom': 'Yakınlaştır', 'Drag on canvas': 'Tuvalde sürükle', 'Move layer': 'Katmanı taşı', 'Drop images on a screen': 'Ekrana görsel bırak', 'Set screenshot': 'Ekran görüntüsü ata' });

  window.Modals = { setup, screens, exportModal, ai, quick, customFonts, shortcuts };
})();
