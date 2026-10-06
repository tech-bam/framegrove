/* IndexedDB: projeler, varlıklar (görseller), ayarlar. Hesap/senkron eklendiğinde aynı arayüz sunucuya bağlanır. */
(function (global) {
  const DB = 'sms-v3';
  let dbp = null;
  function open() {
    if (dbp) return dbp;
    dbp = new Promise((res, rej) => {
      const r = indexedDB.open(DB, 1);
      r.onupgradeneeded = () => {
        const d = r.result;
        if (!d.objectStoreNames.contains('projects')) d.createObjectStore('projects', { keyPath: 'id' });
        if (!d.objectStoreNames.contains('assets')) d.createObjectStore('assets', { keyPath: 'id' });
        if (!d.objectStoreNames.contains('kv')) d.createObjectStore('kv');
      };
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    return dbp;
  }
  const tx = (store, mode, fn) => open().then((db) => new Promise((res, rej) => {
    const t = db.transaction(store, mode);
    const s = t.objectStore(store);
    const out = fn(s);
    t.oncomplete = () => res(out && out.result !== undefined ? out.result : out);
    t.onerror = () => rej(t.error);
  }));
  const req = (store, mode, fn) => open().then((db) => new Promise((res, rej) => {
    const t = db.transaction(store, mode);
    const r = fn(t.objectStore(store));
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  }));

  const newId = (p) => (p || 'p') + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  /* ---- projeler ---- */
  const listProjects = () => req('projects', 'readonly', (s) => s.getAll()).then((l) => (l || []).sort((a, b) => (b.updated || 0) - (a.updated || 0)));
  const getProject = (id) => req('projects', 'readonly', (s) => s.get(id));
  const putProject = (p) => { p.updated = Date.now(); return tx('projects', 'readwrite', (s) => s.put(p)).then(() => p); };
  const deleteProject = (id) => tx('projects', 'readwrite', (s) => s.delete(id));

  /* ---- varlıklar: ekran görüntüleri, ikonlar, arka plan görselleri (data URL) ---- */
  const cache = new Map(); // id → HTMLImageElement
  const putAsset = async (dataUrl, meta) => {
    const id = newId('a');
    await tx('assets', 'readwrite', (s) => s.put(Object.assign({ id, data: dataUrl, created: Date.now() }, meta || {})));
    await loadAsset(id, dataUrl);
    return id;
  };
  const getAsset = (id) => req('assets', 'readonly', (s) => s.get(id));
  const deleteAsset = (id) => { cache.delete(id); return tx('assets', 'readwrite', (s) => s.delete(id)); };
  function loadAsset(id, dataUrl) {
    if (!id) return Promise.resolve(null);
    if (cache.has(id)) return Promise.resolve(cache.get(id));
    const p = (dataUrl ? Promise.resolve({ data: dataUrl }) : getAsset(id)).then((a) => new Promise((res) => {
      if (!a || !a.data) { cache.set(id, null); return res(null); }
      const img = new Image();
      img.onload = () => { cache.set(id, img); res(img); };
      img.onerror = () => { cache.set(id, null); res(null); };
      img.src = a.data;
    }));
    cache.set(id, null); // yükleme sırasında tekrar istenmesin
    return p.then((img) => { cache.set(id, img); return img; });
  }
  const imageFor = (id) => (id ? cache.get(id) || null : null);
  /** Projede geçen tüm varlık kimliklerini önceden yükler. */
  async function preload(project) {
    const ids = new Set();
    const walk = (v) => {
      if (!v) return;
      if (Array.isArray(v)) return v.forEach(walk);
      if (typeof v === 'object') for (const k in v) { if (/^(asset|shot|icon|image|src)$/i.test(k) && typeof v[k] === 'string' && v[k].startsWith('a')) ids.add(v[k]); else if (k === 'shots' && v[k] && typeof v[k] === 'object') Object.values(v[k]).forEach((x) => typeof x === 'string' && ids.add(x)); else walk(v[k]); }
    };
    walk(project);
    await Promise.all([...ids].map((id) => loadAsset(id)));
  }
  const fileToDataUrl = (file) => new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = rej; fr.readAsDataURL(file); });

  /* ---- kv ---- */
  const kvGet = (k) => req('kv', 'readonly', (s) => s.get(k));
  const kvSet = (k, v) => tx('kv', 'readwrite', (s) => s.put(v, k));

  /** Projeyi varlıklarıyla birlikte taşınabilir JSON'a çevirir (yedek / paylaşım). */
  async function exportProject(id) {
    const p = await getProject(id);
    if (!p) return null;
    const ids = new Set();
    const walk = (v) => { if (!v) return; if (Array.isArray(v)) return v.forEach(walk); if (typeof v === 'object') for (const k in v) { if (typeof v[k] === 'string' && /^a[0-9a-z]{10,}$/.test(v[k])) ids.add(v[k]); else walk(v[k]); } };
    walk(p);
    const assets = {};
    for (const aid of ids) { const a = await getAsset(aid); if (a) assets[aid] = a.data; }
    return { format: 'sms-project-v3', project: p, assets };
  }
  async function importProject(bundle) {
    const p = JSON.parse(JSON.stringify(bundle.project));
    const map = {};
    for (const [aid, data] of Object.entries(bundle.assets || {})) map[aid] = await putAsset(data);
    const walk = (v) => { if (!v) return; if (Array.isArray(v)) return v.forEach((x, i) => { if (typeof x === 'string' && map[x]) v[i] = map[x]; else walk(x); }); if (typeof v === 'object') for (const k in v) { if (typeof v[k] === 'string' && map[v[k]]) v[k] = map[v[k]]; else walk(v[k]); } };
    walk(p);
    p.id = newId('p');
    p.created = Date.now();
    await putProject(p);
    return p;
  }

  global.Store = { newId, listProjects, getProject, putProject, deleteProject, putAsset, getAsset, deleteAsset, loadAsset, imageFor, preload, fileToDataUrl, kvGet, kvSet, exportProject, importProject };
})(window);
