/* Ortak: gezinme çubuğu, dil, toast, küçük yardımcılar. Her sayfa yükler. */
(function (global) {
  const $ = (s, r) => (r || document).querySelector(s);
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const ROOT = (() => { const m = location.pathname.match(/^(.*\/store-mockup)\//); return m ? m[1] + '/' : '/'; })();
  const NAV = [['Projects', 'app/#/projects'], ['Templates', 'templates/'], ['Creative Assets', 'index.html#creative-assets'], ['Sandbox', 'app/#/sandbox'], ['Automation', 'mcp/'], ['Help', 'index.html#faq']];

  function renderNav(active) {
    const nav = $('#nav'); if (!nav) return;
    nav.className = 'nav';
    nav.innerHTML = `<a class="brand" href="${ROOT}"><span class="mark">F</span>Framegrove</a>` +
      NAV.map(([label, href]) => `<a class="item${active === label ? ' on' : ''}" href="${ROOT}${href}" data-t>${label}</a>`).join('') +
      `<details class="mobile-nav"><summary>${t('Menu')}</summary><div>${NAV.map(([label,href])=>`<a href="${ROOT}${href}">${t(label)}</a>`).join('')}</div></details><span class="grow"></span><button class="btn ghost sm" id="uiLang" title="Language">${global.I18N.lang.toUpperCase()}</button><a class="btn primary sm" href="${ROOT}app/#/projects" data-t>Open editor</a>`;
    global.I18N.apply(nav);
    $('#uiLang').onclick = () => { global.I18N.set(global.I18N.lang === 'tr' ? 'en' : 'tr'); location.reload(); };
  }
  function renderFooter() {
    const f = $('#footer'); if (!f) return;
    f.className = 'footer';
    f.innerHTML = `<div class="container"><div class="cols">
      <div><b>Framegrove</b><a href="${ROOT}">${t('Screenshot generator')}</a><a href="${ROOT}templates/">${t('Templates')}</a><a href="${ROOT}index.html#free">${t('Free & private')}</a><a href="${ROOT}app/#/sandbox">${t('Try now')}</a></div>
      <div><b>${t('Product')}</b><a href="${ROOT}index.html#how">${t('How it works')}</a><a href="${ROOT}index.html#localize">${t('Translate & localize')}</a><a href="${ROOT}index.html#sizes">${t('iOS & Android sizes')}</a><a href="${ROOT}mcp/">${t('MCP & CLI')}</a></div>
      <div><b>${t('Resources')}</b><a href="${ROOT}index.html#faq">${t('FAQ')}</a><a href="${ROOT}creative-assets/">${t('Blog & guides')}</a><a href="https://buymeacoffee.com/bamstudio">${t('Support')}</a></div>
      <div><b>${t('Legal')}</b><a href="${ROOT}privacy/">${t('Privacy')}</a><a href="${ROOT}privacy/">${t('Terms')}</a></div>
    </div><p style="margin-top:22px"><a href="https://buymeacoffee.com/bamstudio" target="_blank" rel="noopener">☕ Buy me a coffee</a> · © ${new Date().getFullYear()} Framegrove · ${t('Projects and screenshots stay on your device')}</p></div>`;
  }
  let toastT = null;
  function toast(msg) {
    let tt = $('#toast'); if (!tt) { tt = el('div', 'toast'); tt.id = 'toast'; document.body.appendChild(tt); }
    tt.textContent = msg; tt.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => tt.classList.remove('on'), 2200);
  }
  const download = (blob, name) => { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); };
  const slug = (x) => String(x || 'screen').toLowerCase().replace(/[ıİ]/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'screen';
  const fmtDate = (ts) => new Date(ts || Date.now()).toLocaleDateString(global.I18N.lang === 'tr' ? 'tr-TR' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const ago = (ts) => { const d = (Date.now() - ts) / 1000; if (d < 60) return t('just now'); if (d < 3600) return t('{n} min ago', { n: Math.floor(d / 60) }); if (d < 86400) return t('{n} h ago', { n: Math.floor(d / 3600) }); if (d < 86400 * 30) return t('{n} days ago', { n: Math.floor(d / 86400) }); return fmtDate(ts); };

  global.I18N.extend({ 'Creative Assets': 'Creative Assets', 'Projects and screenshots stay on your device': 'Projeler ve ekran görüntüleri cihazında kalır', 'Menu': 'Menü', 'Open editor': 'Editörü aç', 'Automation': 'Otomasyon', 'Free & private': 'Ücretsiz ve gizli', 'Sandbox': 'Deneme', 'Screenshot generator': 'Ekran görüntüsü üretici', 'Try now': 'Şimdi dene', 'Product': 'Ürün', 'How it works': 'Nasıl çalışır', 'Translate & localize': 'Çevir ve yerelleştir', 'iOS & Android sizes': 'iOS ve Android boyutları', 'MCP & CLI': 'MCP ve CLI', 'Resources': 'Kaynaklar', 'FAQ': 'SSS', 'Blog & guides': 'Blog ve rehberler', 'Support': 'Destek', 'Legal': 'Yasal', 'Privacy': 'Gizlilik', 'Terms': 'Koşullar', 'just now': 'az önce', '{n} min ago': '{n} dk önce', '{n} h ago': '{n} sa önce', '{n} days ago': '{n} gün önce' });

  /* ---- şablon kataloğu için ortak ---- */
  const CATEGORIES = ['books', 'business', 'developer tools', 'education', 'entertainment', 'finance', 'food & drink', 'games', 'graphics & design', 'health & fitness', 'lifestyle', 'magazines & newspapers', 'medical', 'music', 'navigation', 'news', 'photo & video', 'productivity', 'reference', 'shopping', 'social networking', 'sports', 'travel', 'utilities', 'weather'];
  const CAT_TR = { books: 'Kitap', business: 'İş', 'developer tools': 'Geliştirici', education: 'Eğitim', entertainment: 'Eğlence', finance: 'Finans', 'food & drink': 'Yemek', games: 'Oyun', 'graphics & design': 'Grafik', 'health & fitness': 'Sağlık', lifestyle: 'Yaşam', 'magazines & newspapers': 'Dergi', medical: 'Tıp', music: 'Müzik', navigation: 'Navigasyon', news: 'Haber', 'photo & video': 'Foto & video', productivity: 'Verimlilik', reference: 'Referans', shopping: 'Alışveriş', 'social networking': 'Sosyal', sports: 'Spor', travel: 'Seyahat', utilities: 'Araçlar', weather: 'Hava' };
  const catLabel = (c) => (global.I18N.lang === 'tr' ? CAT_TR[c] || c : c.replace(/\b\w/g, (m) => m.toUpperCase()));

  /** Şablon önizlemesi için sahte ekran görüntüsü (açık arayüz maketi). */
  let mockCanvas = null;
  function mockShot() {
    if (mockCanvas) return mockCanvas;
    const c = document.createElement('canvas'); c.width = 660; c.height = 1434; const x = c.getContext('2d');
    x.fillStyle = '#f7f7fb'; x.fillRect(0, 0, 660, 1434);
    x.fillStyle = '#ffffff'; x.fillRect(0, 0, 660, 200);
    x.fillStyle = '#e1e2ea'; x.beginPath(); x.arc(70, 120, 30, 0, 7); x.fill(); x.fillRect(120, 100, 300, 22); x.fillRect(120, 135, 180, 16);
    x.fillStyle = '#ececf3'; x.fillRect(40, 230, 580, 62);
    for (let i = 0; i < 6; i++) { x.fillStyle = '#e4e5ee'; x.beginPath(); x.arc(85 + i * 98, 380, 32, 0, 7); x.fill(); }
    for (let i = 0; i < 5; i++) { x.fillStyle = '#ffffff'; x.fillRect(40, 460 + i * 150, 580, 120); x.fillStyle = '#e4e5ee'; x.beginPath(); x.arc(95, 520 + i * 150, 30, 0, 7); x.fill(); x.fillRect(150, 495 + i * 150, 300, 18); x.fillRect(150, 530 + i * 150, 200, 14); x.fillStyle = '#12856f'; x.beginPath(); x.arc(585, 520 + i * 150, 7, 0, 7); x.fill(); }
    x.fillStyle = '#12856f'; x.fillRect(40, 1230, 580, 80);
    x.fillStyle = '#ffffff'; x.fillRect(0, 1340, 660, 94); x.fillStyle = '#dcdde6'; for (let i = 0; i < 4; i++) x.fillRect(75 + i * 150, 1365, 60, 44);
    mockCanvas = c; return c;
  }

  global.UI = { $, el, esc, ROOT, renderNav, renderFooter, toast, download, slug, fmtDate, ago, CATEGORIES, catLabel, mockShot };
})(window);
