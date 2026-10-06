/* Ortak: gezinme çubuğu, dil, toast, küçük yardımcılar. Her sayfa yükler. */
(function (global) {
  const $ = (s, r) => (r || document).querySelector(s);
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const ROOT = (() => { const m = location.pathname.match(/^(.*\/store-mockup)\//); return m ? m[1] + '/' : '/'; })();
  const NAV = [['Projects', 'app/#/projects'], ['Templates', 'templates/'], ['Creative Assets', 'index.html#creative-assets'], ['iPhone Duo', 'iphone-duo/'], ['Sandbox', 'app/#/sandbox'], ['Automation', 'mcp/'], ['Help', 'index.html#faq']];

  function renderNav(active) {
    const nav = $('#nav'); if (!nav) return;
    nav.className = 'nav';
    nav.innerHTML = `<a class="brand" href="${ROOT}"><span class="mark">F</span>Framegrove</a>` +
      NAV.map(([label, href]) => `<a class="item${active === label ? ' on' : ''}" href="${ROOT}${href}" data-t>${label}</a>`).join('') +
      `<details class="mobile-nav"><summary>${t('Menu')}</summary><div>${NAV.map(([label,href])=>`<a href="${ROOT}${href}">${t(label)}</a>`).join('')}</div></details><span class="grow"></span><select class="lang-select" id="uiLang" aria-label="Language">${Object.entries(I18N.languages).map(([code,label])=>`<option value="${code}" ${code===I18N.lang?'selected':''}>${label}</option>`).join('')}</select><a class="btn primary sm" href="${ROOT}app/#/projects" data-t>Open editor</a>`;
    global.I18N.apply(nav);
    $('#uiLang').onchange = () => {
      const chosen=$('#uiLang').value;I18N.set(chosen);const url=new URL(location.href);
      if(url.pathname==='/' || /^\/(tr|de|fr|es|it|pt|ja)\/$/.test(url.pathname)){url.pathname=chosen==='en'?'/':'/'+chosen+'/';url.searchParams.delete('lang');}
      else url.searchParams.set('lang',chosen);
      location.href=url.toString();
    };
  }
  function renderFooter() {
    const f = $('#footer'); if (!f) return;
    f.className = 'footer';
    f.innerHTML = `<div class="container"><div class="cols">
      <div><b>Framegrove</b><a href="${ROOT}">${t('Screenshot generator')}</a><a href="${ROOT}templates/">${t('Templates')}</a><a href="${ROOT}index.html#support">${t('Free & private')}</a><a href="${ROOT}app/#/sandbox">${t('Try now')}</a></div>
      <div><b>${t('Product')}</b><a href="${ROOT}index.html#how">${t('How it works')}</a><a href="${ROOT}index.html#how">${t('Translate & localize')}</a><a href="${ROOT}templates/">${t('iOS & Android sizes')}</a><a href="${ROOT}mcp/">${t('MCP & CLI')}</a></div>
      <div><b>${t('Resources')}</b><a href="${ROOT}index.html#faq">${t('FAQ')}</a><a href="${ROOT}creative-assets/">${t('Blog & guides')}</a><a href="https://buymeacoffee.com/bamstudio">${t('Support')}</a></div>
      <div><b>${t('Legal')}</b><a href="${ROOT}privacy/">${t('Privacy')}</a><a href="${ROOT}privacy/">${t('Terms')}</a></div>
    </div><p style="margin-top:22px"><a href="https://buymeacoffee.com/bamstudio" target="_blank" rel="noopener">☕ ${t('Buy me a coffee')}</a> · © ${new Date().getFullYear()} Framegrove · ${t('Projects and screenshots stay on your device')}</p></div>`;
  }
  let toastT = null;
  function toast(msg) {
    let tt = $('#toast'); if (!tt) { tt = el('div', 'toast'); tt.id = 'toast'; document.body.appendChild(tt); }
    tt.textContent = msg; tt.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => tt.classList.remove('on'), 2200);
  }
  const download = (blob, name) => { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); };
  const slug = (x) => String(x || 'screen').toLowerCase().replace(/[ıİ]/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'screen';
  const fmtDate = (ts) => new Date(ts || Date.now()).toLocaleDateString(global.I18N.lang, { day: 'numeric', month: 'short', year: 'numeric' });
  const ago = (ts) => { const d = (Date.now() - ts) / 1000; if (d < 60) return t('just now'); if (d < 3600) return t('{n} min ago', { n: Math.floor(d / 60) }); if (d < 86400) return t('{n} h ago', { n: Math.floor(d / 3600) }); if (d < 86400 * 30) return t('{n} days ago', { n: Math.floor(d / 86400) }); return fmtDate(ts); };

  global.I18N.extend({ 'Creative Assets': 'Creative Assets', 'Projects and screenshots stay on your device': 'Projeler ve ekran görüntüleri cihazında kalır', 'Menu': 'Menü', 'Open editor': 'Editörü aç', 'Automation': 'Otomasyon', 'Free & private': 'Ücretsiz ve gizli', 'Sandbox': 'Deneme', 'Screenshot generator': 'Ekran görüntüsü üretici', 'Try now': 'Şimdi dene', 'Product': 'Ürün', 'How it works': 'Nasıl çalışır', 'Translate & localize': 'Çevir ve yerelleştir', 'iOS & Android sizes': 'iOS ve Android boyutları', 'MCP & CLI': 'MCP ve CLI', 'Resources': 'Kaynaklar', 'FAQ': 'SSS', 'Blog & guides': 'Blog ve rehberler', 'Support': 'Destek', 'Legal': 'Yasal', 'Privacy': 'Gizlilik', 'Terms': 'Koşullar', 'just now': 'az önce', '{n} min ago': '{n} dk önce', '{n} h ago': '{n} sa önce', '{n} days ago': '{n} gün önce' });

  /* ---- şablon kataloğu için ortak ---- */
  const CATEGORIES = ['books', 'business', 'developer tools', 'education', 'entertainment', 'finance', 'food & drink', 'games', 'graphics & design', 'health & fitness', 'lifestyle', 'magazines & newspapers', 'medical', 'music', 'navigation', 'news', 'photo & video', 'productivity', 'reference', 'shopping', 'social networking', 'sports', 'travel', 'utilities', 'weather'];
  const CAT_TR = { books: 'Kitap', business: 'İş', 'developer tools': 'Geliştirici', education: 'Eğitim', entertainment: 'Eğlence', finance: 'Finans', 'food & drink': 'Yemek', games: 'Oyun', 'graphics & design': 'Grafik', 'health & fitness': 'Sağlık', lifestyle: 'Yaşam', 'magazines & newspapers': 'Dergi', medical: 'Tıp', music: 'Müzik', navigation: 'Navigasyon', news: 'Haber', 'photo & video': 'Foto & video', productivity: 'Verimlilik', reference: 'Referans', shopping: 'Alışveriş', 'social networking': 'Sosyal', sports: 'Spor', travel: 'Seyahat', utilities: 'Araçlar', weather: 'Hava' };
  const catLabel = (c) => (global.I18N.lang === 'tr' ? CAT_TR[c] || c : c.replace(/\b\w/g, (m) => m.toUpperCase()));

  /** Şablon önizlemesi için sahte ekran görüntüsü (açık arayüz maketi). */
  const mockCanvases = new Map();
  function mockShot(outputId='iphone',orientation='portrait') {
    const key=outputId+':'+orientation;if(mockCanvases.has(key))return mockCanvases.get(key);
    const o=window.Devices?.byId(outputId);let ratio=o?Devices.dimensions(o,orientation).H/Devices.dimensions(o,orientation).W:1434/660;
    if(!outputId.startsWith('iphone-duo'))ratio=1434/660;
    const c=document.createElement('canvas');c.width=660;c.height=Math.round(660*ratio);const x=c.getContext('2d'),h=c.height;
    x.fillStyle='#f7f9f3';x.fillRect(0,0,660,h);
    const wide=orientation==='landscape',pad=38;
    x.fillStyle='#253d30';x.font='600 18px sans-serif';x.fillText('9:41',pad,40);x.fillText('•••',572,40);
    x.font='500 18px sans-serif';x.fillStyle='#82947d';x.fillText('MONDAY / YOUR SPACE',pad,100);
    x.font='600 46px sans-serif';x.fillStyle='#20382a';x.fillText('Make today count.',pad,158);
    x.font='20px sans-serif';x.fillStyle='#7c8e76';x.fillText('A little progress, every day.',pad,198);
    x.fillStyle='#dceacd';x.fillRect(pad,232,584,wide?110:170);x.font='500 20px sans-serif';x.fillStyle='#426340';x.fillText('THIS WEEK',pad+24,270);
    x.font='600 35px sans-serif';x.fillStyle='#243e2a';x.fillText('Your next chapter',pad+24,320);
    const y=wide?380:456;x.font='600 24px sans-serif';x.fillStyle='#20382a';x.fillText('On your radar',pad,y);
    const rows=Math.max(1,Math.min(5,Math.floor((h-y-110)/120)));
    ['Plan the product launch','Make room for a walk','Capture a good idea','Read a little more','Keep the momentum'].slice(0,rows).forEach((label,i)=>{
      const sy=y+30+i*120;x.fillStyle='#ffffff';x.fillRect(pad,sy,584,96);x.strokeStyle='#d3dfca';x.strokeRect(pad+22,sy+30,24,24);x.fillStyle='#324f35';x.font='500 20px sans-serif';x.fillText(label,pad+66,sy+45);x.fillStyle='#98aa91';x.font='15px sans-serif';x.fillText(i===0?'Your project / Next step':'Personal / Today',pad+66,sy+71);
    });
    if(h>650){x.fillStyle='#f0f5e8';x.fillRect(0,h-76,660,76);x.fillStyle='#4d7852';x.font='500 17px sans-serif';['Today','Projects','Ideas','You'].forEach((s,i)=>x.fillText(s,45+i*160,h-31));}
    mockCanvases.set(key,c);return c;
  }

  global.UI = { $, el, esc, ROOT, renderNav, renderFooter, toast, download, slug, fmtDate, ago, CATEGORIES, catLabel, mockShot };
})(window);
