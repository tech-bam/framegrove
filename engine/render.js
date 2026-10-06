/* Katman tabanlı render motoru.
   screen = { bg, layers[] } ; layer.type = text | device | image | element | shape
   Konumlar yüzde: x,w → W'nin yüzdesi; y,h → H'nin yüzdesi. Böylece aynı tasarım her çıktı boyutuna uyar.
   renderScreen(ctx, W, H, screen, ctxInfo) ; ctxInfo = { lang, project, index, imageFor(id), shotSlot } */
(function (global) {
  const { drawDevice, deviceHeight, roundRect, FRAMES } = global.Frames;

  const FONTS = {
    system: '-apple-system, "SF Pro Display", system-ui, "Helvetica Neue", Arial, sans-serif',
    'helvetica-neue': '"Helvetica Neue", Helvetica, Arial, sans-serif',
    avenir: '"Avenir Next", Avenir, "Helvetica Neue", sans-serif',
    futura: 'Futura, "Trebuchet MS", sans-serif',
    georgia: 'Georgia, "Times New Roman", serif',
    times: '"Times New Roman", Times, serif',
    courier: '"Courier New", Courier, monospace',
    impact: 'Impact, "Arial Black", sans-serif',
    inter: '"Inter", -apple-system, system-ui, sans-serif',
    manrope: '"Manrope", -apple-system, system-ui, sans-serif',
    'plus-jakarta': '"Plus Jakarta Sans", -apple-system, system-ui, sans-serif',
    'space-grotesk': '"Space Grotesk", -apple-system, system-ui, sans-serif',
    outfit: '"Outfit", -apple-system, system-ui, sans-serif',
    sora: '"Sora", -apple-system, system-ui, sans-serif',
    nunito: '"Nunito", -apple-system, system-ui, sans-serif',
    bricolage: '"Bricolage Grotesque", -apple-system, system-ui, sans-serif',
    unbounded: '"Unbounded", -apple-system, system-ui, sans-serif',
    bebas: '"Bebas Neue", Impact, sans-serif',
    playfair: '"Playfair Display", Georgia, serif',
    fraunces: '"Fraunces", Georgia, serif',
    'dm-serif': '"DM Serif Display", Georgia, serif',
    'instrument-serif': '"Instrument Serif", Georgia, serif',
    rubik: '"Rubik", -apple-system, system-ui, sans-serif',
    poppins: '"Poppins", -apple-system, system-ui, sans-serif',
    montserrat: '"Montserrat", -apple-system, system-ui, sans-serif',
    'dm-sans': '"DM Sans", -apple-system, system-ui, sans-serif',
    lexend: '"Lexend", -apple-system, system-ui, sans-serif',
    'work-sans': '"Work Sans", -apple-system, system-ui, sans-serif',
    'roboto': '"Roboto", -apple-system, system-ui, sans-serif',
    'baloo': '"Baloo 2", "Nunito", sans-serif',
    'fredoka': '"Fredoka", "Nunito", sans-serif',
    'lora': '"Lora", Georgia, serif',
    custom: 'CustomFont, sans-serif',
  };
  const SINGLE_WEIGHT = { bebas: 400, 'dm-serif': 400, 'instrument-serif': 400 };
  const FONT_LIST = [
    ['system', 'System (SF Pro)'], ['inter', 'Inter'], ['rubik', 'Rubik'], ['poppins', 'Poppins'], ['montserrat', 'Montserrat'], ['manrope', 'Manrope'],
    ['plus-jakarta', 'Plus Jakarta Sans'], ['dm-sans', 'DM Sans'], ['outfit', 'Outfit'], ['sora', 'Sora'], ['lexend', 'Lexend'], ['work-sans', 'Work Sans'], ['roboto', 'Roboto'],
    ['space-grotesk', 'Space Grotesk'], ['bricolage', 'Bricolage Grotesque'], ['nunito', 'Nunito'], ['baloo', 'Baloo 2'], ['fredoka', 'Fredoka'], ['unbounded', 'Unbounded'], ['bebas', 'Bebas Neue'],
    ['playfair', 'Playfair Display'], ['fraunces', 'Fraunces'], ['dm-serif', 'DM Serif Display'], ['instrument-serif', 'Instrument Serif'], ['lora', 'Lora'],
    ['georgia', 'Georgia'], ['helvetica-neue', 'Helvetica Neue'], ['avenir', 'Avenir Next'], ['futura', 'Futura'], ['times', 'Times'], ['courier', 'Courier'], ['impact', 'Impact'], ['custom', 'Custom font'],
  ];

  /* ------------------------------------------------------------------ */
  /* yardımcılar                                                         */
  /* ------------------------------------------------------------------ */
  let noiseTile = null;
  function getNoiseTile() {
    if (noiseTile) return noiseTile;
    const c = document.createElement('canvas');
    c.width = c.height = 160;
    const cx = c.getContext('2d');
    const d = cx.createImageData(160, 160);
    for (let i = 0; i < d.data.length; i += 4) { const v = 120 + Math.random() * 135; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; }
    cx.putImageData(d, 0, 0);
    noiseTile = c;
    return c;
  }
  function contrastFor(hex) {
    const h = (hex || '#000').replace('#', '');
    if (h.length < 6) return '#111214';
    const r = parseInt(h.substr(0, 2), 16) / 255, g = parseInt(h.substr(2, 2), 16) / 255, b = parseInt(h.substr(4, 2), 16) / 255;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.6 ? '#111214' : '#ffffff';
  }
  function hexA(hex, a) {
    const h = (hex || '#000000').replace('#', '');
    const r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b = parseInt(h.substr(4, 2), 16);
    return `rgba(${r},${g},${b},${a})`;
  }
  const MESH_LAYOUTS = [
    [[0.15, 0.15, 0.75], [0.85, 0.3, 0.7], [0.5, 0.9, 0.85]],
    [[0.8, 0.12, 0.65], [0.12, 0.55, 0.8], [0.7, 0.92, 0.7]],
    [[0.5, 0.1, 0.8], [0.1, 0.85, 0.7], [0.95, 0.7, 0.75]],
    [[0.25, 0.35, 0.9], [0.9, 0.2, 0.6], [0.55, 0.85, 0.65]],
  ];

  /* ------------------------------------------------------------------ */
  /* arka plan                                                           */
  /* ------------------------------------------------------------------ */
  function drawBase(ctx, W, H, bg, bgImg, unit) {
    unit = unit || Math.max(W, H);
    const type = bg.type || 'solid';
    if (type === 'none') { /* şeffaf */ }
    else if (type === 'solid') { ctx.fillStyle = bg.c1 || '#ffffff'; ctx.fillRect(0, 0, W, H); }
    else if (type === 'linear') {
      const a = ((bg.angle || 0) - 90) * (Math.PI / 180);
      const r = Math.abs(W * Math.cos(a)) / 2 + Math.abs(H * Math.sin(a)) / 2;
      const g = ctx.createLinearGradient(W / 2 - Math.cos(a) * r, H / 2 - Math.sin(a) * r, W / 2 + Math.cos(a) * r, H / 2 + Math.sin(a) * r);
      g.addColorStop(0, bg.c1); g.addColorStop(1, bg.c2 || bg.c1);
      if (bg.c3) { g.addColorStop(0.5, bg.c3); }
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    } else if (type === 'radial') {
      ctx.fillStyle = bg.c2 || bg.c1; ctx.fillRect(0, 0, W, H);
      const cx = W * ((bg.cx ?? 50) / 100), cy = H * ((bg.cy ?? 35) / 100);
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * 0.75);
      g.addColorStop(0, bg.c1); g.addColorStop(1, bg.c2 || bg.c1);
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    } else if (type === 'mesh') {
      ctx.fillStyle = bg.c3 || bg.c2 || bg.c1; ctx.fillRect(0, 0, W, H);
      const layout = MESH_LAYOUTS[(bg.variant || 0) % MESH_LAYOUTS.length];
      const cols = [bg.c1, bg.c2 || bg.c1, bg.c3 || bg.c1];
      const wide = W / H > 1.2;
      const reps = wide ? Math.ceil(W / (H * 0.7)) : 1;
      for (let k = 0; k < reps; k++) layout.forEach((p, i) => {
        const px = wide ? (k + p[0]) * (W / reps) : W * p[0];
        const g = ctx.createRadialGradient(px, H * p[1], 0, px, H * p[1], unit * p[2]);
        g.addColorStop(0, cols[(i + k) % 3]); g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      });
    } else if (type === 'image') {
      ctx.fillStyle = bg.c1 || '#000000'; ctx.fillRect(0, 0, W, H);
      if (bgImg) {
        const ir = bgImg.width / bgImg.height, br = W / H;
        let dw, dh; if (ir > br) { dh = H; dw = H * ir; } else { dw = W; dh = W / ir; }
        const vp = (bg.vpos ?? 50) / 100;
        if (bg.blur > 0) ctx.filter = `blur(${(bg.blur / 100) * unit * 0.03}px)`;
        ctx.drawImage(bgImg, (W - dw) / 2, (H - dh) * vp, dw, dh);
        ctx.filter = 'none';
      }
      if (bg.dim > 0) { ctx.fillStyle = `rgba(0,0,0,${bg.dim / 100})`; ctx.fillRect(0, 0, W, H); }
    }
    drawPattern(ctx, W, H, bg, unit);
  }

  function drawPattern(ctx, W, H, bg, unit) {
    if (!bg.pattern || bg.pattern === 'none') return;
    ctx.save();
    ctx.globalAlpha = (bg.patternOpacity ?? 12) / 100;
    ctx.strokeStyle = ctx.fillStyle = bg.patternColor || '#ffffff';
    const u = Math.min(unit, W);
    const step = u * 0.05 * ((bg.patternScale ?? 100) / 100);
    const p = bg.pattern;
    if (p === 'dots') { for (let x = step / 2; x < W; x += step) for (let y = step / 2; y < H; y += step) { ctx.beginPath(); ctx.arc(x, y, u * 0.004, 0, Math.PI * 2); ctx.fill(); } }
    else if (p === 'grid') { ctx.lineWidth = Math.max(1, u * 0.0015); for (let x = 0; x <= W; x += step) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); } for (let y = 0; y <= H; y += step) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); } }
    else if (p === 'diagonal') { ctx.lineWidth = Math.max(1, u * 0.006); for (let i = -H; i < W + H; i += step * 1.6) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + H, H); ctx.stroke(); } }
    else if (p === 'rings') { ctx.lineWidth = Math.max(1, u * 0.004); for (let r = u * 0.1; r < Math.max(W, H) * 1.2; r += u * 0.09) { ctx.beginPath(); ctx.arc(W / 2, H * 0.42, r, 0, Math.PI * 2); ctx.stroke(); } }
    else if (p === 'waves') { ctx.lineWidth = Math.max(1, u * 0.004); for (let y = -step; y < H + step; y += step * 1.4) { ctx.beginPath(); for (let x = 0; x <= W; x += 6) ctx.lineTo(x, y + Math.sin((x / u) * 14) * step * 0.5); ctx.stroke(); } }
    else if (p === 'cross') { ctx.lineWidth = Math.max(1, u * 0.002); const s = step * 1.3, a = u * 0.008; for (let x = s / 2; x < W; x += s) for (let y = s / 2; y < H; y += s) { ctx.beginPath(); ctx.moveTo(x - a, y); ctx.lineTo(x + a, y); ctx.moveTo(x, y - a); ctx.lineTo(x, y + a); ctx.stroke(); } }
    else if (p === 'blobs') {
      const seeds = [[0.05, 0.12, 0.34], [0.95, 0.28, 0.26], [0.1, 0.78, 0.3], [0.9, 0.9, 0.36], [0.55, 1.02, 0.22]];
      const reps = Math.max(1, Math.round(W / u));
      for (let k = 0; k < reps; k++) seeds.forEach(([px, py, r], i) => {
        const cx = (k + px) * (W / reps), cy = H * py, rr = u * r;
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2 + 0.01; a += Math.PI / 24) { const wob = 1 + 0.12 * Math.sin(a * 3 + i) + 0.06 * Math.cos(a * 5 + k); const x = cx + Math.cos(a) * rr * wob, y = cy + Math.sin(a) * rr * wob; a === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
        ctx.closePath(); ctx.fill();
      });
    }
    else if (p === 'circles') { ctx.lineWidth = Math.max(1, u * 0.012); for (let r = u * 0.12; r < u * 0.9; r += u * 0.14) { ctx.beginPath(); ctx.arc(W * 0.78, H * 0.28, r, 0, Math.PI * 2); ctx.stroke(); } }
    else if (p === 'stripe') { ctx.save(); ctx.translate(W / 2, H * 0.62); ctx.rotate(-0.28); ctx.fillRect(-W * 1.2, -u * 0.09, W * 2.4, u * 0.18); ctx.restore(); }
    else if (p === 'sparkles') {
      const seeds = [[0.86, 0.05, 0.05], [0.93, 0.11, 0.028], [0.8, 0.13, 0.022], [0.08, 0.72, 0.03], [0.14, 0.66, 0.018]];
      seeds.forEach(([px, py, r]) => sparkle(ctx, W * px, H * py, u * r));
    }
    ctx.restore();
  }
  function sparkle(ctx, x, y, r) {
    ctx.beginPath();
    for (let i = 0; i < 4; i++) { const a = (i * Math.PI) / 2; ctx.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r); ctx.quadraticCurveTo(x, y, x + Math.cos(a + Math.PI / 2) * r, y + Math.sin(a + Math.PI / 2) * r); }
    ctx.closePath(); ctx.fill();
  }

  /** bg çizimi; pan = { i, n } panoramik dilim */
  function drawBackground(ctx, W, H, bg, bgImg, pan) {
    ctx.save();
    if (pan && pan.n > 1 && bg.type !== 'image') { ctx.save(); ctx.translate(-pan.i * W, 0); drawBase(ctx, W * pan.n, H, bg, bgImg, Math.max(W, H)); ctx.restore(); }
    else if (pan && pan.n > 1 && bg.type === 'image' && bgImg) {
      // panoramik görsel: tüm şeride yayılır
      const totalW = W * pan.n; const ir = bgImg.width / bgImg.height; let dw = totalW, dh = totalW / ir; if (dh < H) { dh = H; dw = H * ir; }
      const vp = (bg.vpos ?? 50) / 100;
      ctx.drawImage(bgImg, -pan.i * W + (totalW - dw) / 2, (H - dh) * vp, dw, dh);
      if (bg.dim > 0) { ctx.fillStyle = `rgba(0,0,0,${bg.dim / 100})`; ctx.fillRect(0, 0, W, H); }
      drawPattern(ctx, W, H, bg, Math.max(W, H));
    } else drawBase(ctx, W, H, bg, bgImg, Math.max(W, H));
    if (bg.vignette > 0) { const g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.25, W / 2, H / 2, Math.max(W, H) * 0.75); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, `rgba(0,0,0,${bg.vignette / 100})`); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); }
    if (bg.noise > 0) { ctx.save(); ctx.globalAlpha = bg.noise / 100; ctx.globalCompositeOperation = 'overlay'; ctx.fillStyle = ctx.createPattern(getNoiseTile(), 'repeat'); ctx.fillRect(0, 0, W, H); ctx.restore(); }
    ctx.restore();
  }

  /* ------------------------------------------------------------------ */
  /* metin                                                               */
  /* ------------------------------------------------------------------ */
  function tokenize(para) {
    const out = []; let hl = false;
    for (let w of para.split(/\s+/).filter(Boolean)) {
      let end = false;
      const a = w.indexOf('['); if (a >= 0) { w = w.slice(0, a) + w.slice(a + 1); hl = true; }
      const b = w.indexOf(']'); if (b >= 0) { w = w.slice(0, b) + w.slice(b + 1); end = true; }
      if (w) out.push({ w, hl });
      if (end) hl = false;
    }
    return out;
  }
  function wrapWords(ctx, text, maxWidth) {
    const lines = []; const space = ctx.measureText(' ').width;
    for (const para of String(text).split('\n')) {
      const words = tokenize(para);
      if (!words.length) { lines.push({ words: [], width: 0, space }); continue; }
      let line = [], width = 0;
      for (const wd of words) {
        wd.width = ctx.measureText(wd.w).width;
        const add = line.length ? space + wd.width : wd.width;
        if (width + add > maxWidth && line.length) { lines.push({ words: line, width, space }); line = [wd]; width = wd.width; }
        else { line.push(wd); width += add; }
      }
      lines.push({ words: line, width, space });
    }
    return lines;
  }
  const fontStr = (font, size, weight, italic) => `${italic ? 'italic ' : ''}${SINGLE_WEIGHT[font] || weight || 700} ${size}px ${FONTS[font] || FONTS.system}`;

  /** Metin katmanı: kutu içinde sar, hizala; [vurgu] destekli. Döndürür: kullanılan yükseklik (px). */
  function drawTextLayer(ctx, W, H, L, text, opts) {
    if (!text) return 0;
    const x0 = (W * L.x) / 100, y0 = (H * L.y) / 100, bw = (W * L.w) / 100, bh = (H * (L.h || 0)) / 100;
    let size = (W * (L.size || 6)) / 100;
    const pad = (W * (L.pad ?? 0)) / 100;
    const boxPad = L.box && L.box !== 'none' ? W * 0.03 : 0;
    const maxW = Math.max(10, bw - pad * 2 - boxPad * 2);
    const txt = L.uppercase ? String(text).toUpperCase() : String(text);
    ctx.save();
    ctx.font = fontStr(L.font, size, L.weight, L.italic);
    ctx.letterSpacing = L.letterSpacing ? `${(size * L.letterSpacing) / 100}px` : '0px';
    let lines = wrapWords(ctx, txt, maxW);
    // otomatik küçültme: kutu yüksekliğine sığdır (h verilmişse ve fitText açıksa)
    const lh = L.lineHeight ?? 1.12;
    if (L.fitText !== false && bh > 0) {
      let guard = 0;
      while (lines.length * size * lh > bh && size > W * 0.015 && guard++ < 40) {
        size *= 0.94; ctx.font = fontStr(L.font, size, L.weight, L.italic);
        ctx.letterSpacing = L.letterSpacing ? `${(size * L.letterSpacing) / 100}px` : '0px';
        lines = wrapWords(ctx, txt, maxW);
      }
    }
    const blockH = lines.length * size * lh;
    const blockW = lines.reduce((m, l) => Math.max(m, l.width), 0);
    const align = L.align || 'center';
    const valign = L.valign || 'top';
    const top = bh > 0 ? (valign === 'middle' ? y0 + (bh - blockH) / 2 : valign === 'bottom' ? y0 + bh - blockH : y0) : y0;
    const anchorX = align === 'left' ? x0 + pad + boxPad : align === 'right' ? x0 + bw - pad - boxPad : x0 + bw / 2;

    if (L.box && L.box !== 'none' && lines.length) {
      const bxw = blockW + boxPad * 2, bxh = blockH + boxPad * 1.4;
      const bx = align === 'left' ? x0 + pad : align === 'right' ? x0 + bw - pad - bxw : x0 + bw / 2 - bxw / 2;
      const by = top - boxPad * 0.7, r = W * (L.boxRadius ?? 3) / 100;
      ctx.save();
      const op = (L.boxOpacity ?? 100) / 100;
      if (L.box === 'glass') { ctx.globalAlpha = op * 0.16; ctx.fillStyle = '#ffffff'; roundRect(ctx, bx, by, bxw, bxh, r); ctx.fill(); ctx.globalAlpha = op * 0.35; ctx.strokeStyle = '#ffffff'; ctx.lineWidth = Math.max(1, W * 0.0015); roundRect(ctx, bx, by, bxw, bxh, r); ctx.stroke(); }
      else if (L.box === 'outline') { ctx.globalAlpha = op; ctx.strokeStyle = L.boxColor || L.color; ctx.lineWidth = Math.max(1, W * 0.003); roundRect(ctx, bx, by, bxw, bxh, r); ctx.stroke(); }
      else { ctx.globalAlpha = op; ctx.shadowColor = 'rgba(0,0,0,.2)'; ctx.shadowBlur = W * 0.03; ctx.shadowOffsetY = W * 0.01; ctx.fillStyle = L.boxColor || '#ffffff'; roundRect(ctx, bx, by, bxw, bxh, r); ctx.fill(); }
      ctx.restore();
    }
    ctx.textBaseline = 'top'; ctx.textAlign = 'left';
    if (L.shadow) { ctx.shadowColor = 'rgba(0,0,0,.35)'; ctx.shadowBlur = W * 0.012; ctx.shadowOffsetY = W * 0.004; }
    const accent = L.accent || '#ffd60a', hlStyle = L.hlStyle || 'color';
    let fill = L.color || '#ffffff';
    if (L.gradient && L.gradient.c1) { const g = ctx.createLinearGradient(x0, top, x0 + bw, top + blockH); g.addColorStop(0, L.gradient.c1); g.addColorStop(1, L.gradient.c2 || L.gradient.c1); fill = g; }
    lines.forEach((row, li) => {
      const y = top + li * size * lh;
      let x = align === 'left' ? anchorX : align === 'right' ? anchorX - row.width : anchorX - row.width / 2;
      if (hlStyle === 'marker') { let mx = x; for (const wd of row.words) { if (wd.hl) { ctx.save(); ctx.shadowColor = 'transparent'; ctx.fillStyle = accent; const px = size * 0.12, py = size * 0.06; roundRect(ctx, mx - px, y - py, wd.width + px * 2, size * 1.08 + py * 2, size * 0.18); ctx.fill(); ctx.restore(); } mx += wd.width + row.space; } }
      for (const wd of row.words) {
        ctx.fillStyle = wd.hl ? (hlStyle === 'marker' ? (L.hlTextColor || contrastFor(accent)) : accent) : fill;
        ctx.fillText(wd.w, x, y);
        if (wd.hl && hlStyle === 'underline') { ctx.save(); ctx.shadowColor = 'transparent'; ctx.strokeStyle = accent; ctx.lineWidth = size * 0.09; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x, y + size * 1.02); ctx.lineTo(x + wd.width, y + size * 1.02); ctx.stroke(); ctx.restore(); }
        if (wd.hl && hlStyle === 'squiggle') { ctx.save(); ctx.shadowColor = 'transparent'; ctx.strokeStyle = accent; ctx.lineWidth = size * 0.08; ctx.lineCap = 'round'; ctx.beginPath(); for (let t = 0; t <= wd.width; t += 2) ctx.lineTo(x + t, y + size * 1.08 + Math.sin(t / (size * 0.12)) * size * 0.06); ctx.stroke(); ctx.restore(); }
        x += wd.width + row.space;
      }
    });
    if (L.decoration === 'squiggle') { ctx.save(); ctx.shadowColor = 'transparent'; ctx.strokeStyle = accent; ctx.lineWidth = size * 0.1; ctx.lineCap = 'round'; const sx = align === 'left' ? anchorX : align === 'right' ? anchorX - size * 4 : anchorX - size * 2; const sy = top + blockH + size * 0.35; ctx.beginPath(); for (let t = 0; t <= size * 4; t += 2) ctx.lineTo(sx + t, sy + Math.sin(t / (size * 0.16)) * size * 0.12); ctx.stroke(); ctx.restore(); }
    if (L.decoration === 'line') { ctx.save(); ctx.shadowColor = 'transparent'; ctx.fillStyle = accent; const lw = size * 2.2; const sx = align === 'left' ? anchorX : align === 'right' ? anchorX - lw : anchorX - lw / 2; roundRect(ctx, sx, top + blockH + size * 0.3, lw, size * 0.12, size * 0.06); ctx.fill(); ctx.restore(); }
    ctx.restore();
    return blockH;
  }

  /* ------------------------------------------------------------------ */
  /* öğeler                                                              */
  /* ------------------------------------------------------------------ */
  function star(ctx, cx, cy, r) { ctx.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5; const rr = i % 2 ? r * 0.45 : r; ctx.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } ctx.closePath(); ctx.fill(); }
  function leafBranch(ctx, R, dir, color, lw) {
    ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.lineCap = 'round';
    const sweep = 1.95; const pt = (t) => { const a = Math.PI / 2 + dir * t * sweep; return [Math.cos(a) * R, Math.sin(a) * R, a]; };
    ctx.beginPath(); for (let t = 0.02; t <= 1; t += 0.05) { const [x, y] = pt(t); t < 0.03 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke();
    const n = 9;
    for (let i = 0; i < n; i++) { const t = 0.1 + (i / (n - 1)) * 0.86; const [x, y, a] = pt(t); const grow = Math.atan2(dir * Math.cos(a), -dir * Math.sin(a)); const len = R * (0.30 - i * 0.012), wid = R * 0.085; for (const side of [-1, 1]) { ctx.save(); ctx.translate(x, y); ctx.rotate(grow + side * 0.62); ctx.beginPath(); ctx.ellipse(len * 0.5, 0, len * 0.5, wid, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore(); } }
    ctx.restore();
  }
  /** Öğe: merkez (x,y %) + size (%W). L.kind: pill | rating | stars | laurel | note | icon | text | arrow | ring | sparkle | shape | emoji | quote */
  function drawElement(ctx, W, H, L, text, imgs) {
    const cx = (W * L.x) / 100, cy = (H * L.y) / 100; // x,y = merkez (layerBox ile aynı)
    const sz = (W * (L.size ?? 4)) / 100;
    const family = FONTS[L.font] || FONTS.system;
    ctx.save(); ctx.translate(cx, cy); if (L.rot) ctx.rotate((L.rot * Math.PI) / 180);
    ctx.globalAlpha = (L.opacity ?? 100) / 100; ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
    const bg = L.bg || '#ffffff', fg = L.color || contrastFor(bg);
    const shadow = () => { if (L.shadow === false) return; ctx.shadowColor = 'rgba(0,0,0,.22)'; ctx.shadowBlur = sz * 0.9; ctx.shadowOffsetY = sz * 0.25; };
    const k = L.kind;
    if (k === 'pill') {
      const label = [L.emoji, text].filter(Boolean).join('  ');
      ctx.font = `700 ${sz}px ${family}`; const tw = ctx.measureText(label).width; const ph = sz * 1.9, pw = tw + sz * 1.6;
      shadow(); ctx.fillStyle = bg; roundRect(ctx, -pw / 2, -ph / 2, pw, ph, ph / 2); ctx.fill(); ctx.shadowColor = 'transparent';
      if (L.outline) { ctx.strokeStyle = fg; ctx.lineWidth = sz * 0.08; roundRect(ctx, -pw / 2, -ph / 2, pw, ph, ph / 2); ctx.stroke(); }
      ctx.fillStyle = fg; ctx.fillText(label, -tw / 2, sz * 0.05);
    } else if (k === 'rating') {
      ctx.font = `700 ${sz}px ${family}`; const label = text || '4.9'; const tw = ctx.measureText(label).width; const starR = sz * 0.5, gap = sz * 0.18; const starsW = 5 * starR * 2 + 4 * gap; const pw = starsW + sz * 0.7 + tw + sz * 1.6, ph = sz * 1.9;
      shadow(); ctx.fillStyle = bg; roundRect(ctx, -pw / 2, -ph / 2, pw, ph, ph / 2); ctx.fill(); ctx.shadowColor = 'transparent';
      let x = -pw / 2 + sz * 0.8 + starR; ctx.fillStyle = L.starColor || '#f59e0b'; for (let i = 0; i < 5; i++) { star(ctx, x, 0, starR); x += starR * 2 + gap; }
      ctx.fillStyle = fg; ctx.fillText(label, x - starR + sz * 0.5, sz * 0.05);
    } else if (k === 'stars') {
      const n = L.count || 5, starR = sz * 0.6, gap = sz * 0.25; const total = n * starR * 2 + (n - 1) * gap; let x = -total / 2 + starR;
      ctx.fillStyle = L.color || '#f5b301'; for (let i = 0; i < n; i++) { star(ctx, x, 0, starR); x += starR * 2 + gap; }
    } else if (k === 'laurel') {
      const col = L.color || '#ffffff'; const R = sz * 3.1; leafBranch(ctx, R, -1, col, sz * 0.1); leafBranch(ctx, R, 1, col, sz * 0.1);
      ctx.textAlign = 'center'; ctx.fillStyle = col; const lines = String(text || '').split('\n'); const lh = sz * 1.0; const blockH = (L.sub ? sz * 0.75 : 0) + lines.length * lh; let ty = -blockH / 2 + sz * 0.1;
      if (L.sub) { ctx.font = `600 ${sz * 0.55}px ${family}`; ctx.letterSpacing = `${sz * 0.08}px`; ctx.fillText(String(L.sub).toUpperCase(), 0, ty + sz * 0.3); ctx.letterSpacing = '0px'; ty += sz * 0.75; }
      ctx.font = `800 ${sz * 0.92}px ${family}`; lines.forEach((ln, i) => ctx.fillText(ln, 0, ty + lh * 0.5 + i * lh));
    } else if (k === 'note') {
      const w = (W * (L.w ?? 70)) / 100, h = sz * 3.6, r = sz * 0.9;
      shadow(); ctx.fillStyle = bg; roundRect(ctx, -w / 2, -h / 2, w, h, r); ctx.fill(); ctx.shadowColor = 'transparent';
      const ic = h * 0.62, ix = -w / 2 + sz * 0.9, iy = -ic / 2; const img = imgs && imgs.icon;
      ctx.save(); roundRect(ctx, ix, iy, ic, ic, ic * 0.24); ctx.clip();
      if (img) ctx.drawImage(img, ix, iy, ic, ic); else { ctx.fillStyle = L.iconBg || '#6366f1'; ctx.fillRect(ix, iy, ic, ic); ctx.fillStyle = '#fff'; ctx.font = `700 ${ic * 0.5}px ${family}`; ctx.textAlign = 'center'; ctx.fillText(L.emoji || '✓', ix + ic / 2, iy + ic / 2 + ic * 0.04); }
      ctx.restore();
      const tx = ix + ic + sz * 0.7; ctx.fillStyle = fg; ctx.font = `700 ${sz * 0.95}px ${family}`; ctx.fillText(text || '', tx, -sz * 0.62);
      ctx.globalAlpha *= 0.65; ctx.font = `400 ${sz * 0.85}px ${family}`; ctx.fillText(L.sub || '', tx, sz * 0.5); ctx.globalAlpha = (L.opacity ?? 100) / 100;
      if (L.time) { ctx.globalAlpha *= 0.5; ctx.textAlign = 'right'; ctx.font = `500 ${sz * 0.7}px ${family}`; ctx.fillText(L.time, w / 2 - sz * 0.9, -sz * 0.62); }
    } else if (k === 'icon') {
      const ic = sz * 2.4; const img = imgs && imgs.icon; ctx.font = `700 ${sz}px ${family}`; const tw = text ? ctx.measureText(text).width : 0; const total = ic + (tw ? sz * 0.6 + tw : 0); const ix = -total / 2;
      shadow(); ctx.fillStyle = L.iconBg || '#6366f1'; roundRect(ctx, ix, -ic / 2, ic, ic, ic * 0.23); ctx.fill(); ctx.shadowColor = 'transparent';
      if (img) { ctx.save(); roundRect(ctx, ix, -ic / 2, ic, ic, ic * 0.23); ctx.clip(); ctx.drawImage(img, ix, -ic / 2, ic, ic); ctx.restore(); }
      else { ctx.fillStyle = '#fff'; ctx.font = `700 ${ic * 0.5}px ${family}`; ctx.textAlign = 'center'; ctx.fillText(L.emoji || (text || 'A')[0], ix + ic / 2, ic * 0.04); ctx.textAlign = 'left'; }
      if (tw) { ctx.fillStyle = L.color || '#ffffff'; ctx.font = `700 ${sz}px ${family}`; ctx.fillText(text, ix + ic + sz * 0.6, sz * 0.05); }
    } else if (k === 'arrow') {
      const Ln = sz * 4; ctx.strokeStyle = L.color || '#ffffff'; ctx.lineWidth = sz * 0.22; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.moveTo(-Ln / 2, Ln * 0.3); ctx.quadraticCurveTo(-Ln * 0.1, -Ln * 0.5, Ln / 2, -Ln * 0.1); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(Ln / 2 - sz * 0.9, -Ln * 0.55); ctx.lineTo(Ln / 2, -Ln * 0.1); ctx.lineTo(Ln / 2 - sz * 1.1, sz * 0.25); ctx.stroke();
    } else if (k === 'ring') { ctx.strokeStyle = L.color || '#ffffff'; ctx.lineWidth = sz * 0.2; ctx.beginPath(); ctx.arc(0, 0, sz * 2, 0, Math.PI * 2); ctx.stroke(); }
    else if (k === 'sparkle') { ctx.fillStyle = L.color || '#ffffff'; sparkle(ctx, 0, 0, sz); sparkle(ctx, sz * 1.1, -sz * 0.9, sz * 0.5); sparkle(ctx, -sz * 0.9, sz * 0.9, sz * 0.35); }
    else if (k === 'emoji') { ctx.textAlign = 'center'; ctx.font = `${sz * 2}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", ${family}`; ctx.fillText(text || '✨', 0, sz * 0.1); }
    else if (k === 'text') { ctx.textAlign = 'center'; ctx.fillStyle = L.color || '#ffffff'; ctx.font = `${L.weight || 700} ${sz}px ${family}`; String(text || '').split('\n').forEach((ln, i) => ctx.fillText(ln, 0, i * sz * 1.15)); }
    else if (k === 'quote') {
      ctx.textAlign = 'center'; ctx.fillStyle = L.color || '#ffffff'; ctx.font = `italic 500 ${sz}px ${family}`;
      const w = (W * (L.w ?? 80)) / 100; ctx.textBaseline = 'top'; const lines = wrapWords(ctx, `“${text || ''}”`, w); const lh = sz * 1.25; let y = -(lines.length * lh) / 2;
      lines.forEach((row) => { let x = -row.width / 2; row.words.forEach((wd) => { ctx.fillText(wd.w, x, y); x += wd.width + row.space; }); y += lh; });
    } else if (k === 'shape') {
      const w = (W * (L.w ?? 20)) / 100, h = (H * (L.h ?? 10)) / 100; ctx.fillStyle = L.color || '#ffffff';
      if (L.shape === 'circle') { ctx.beginPath(); ctx.ellipse(0, 0, w / 2, h / 2, 0, 0, Math.PI * 2); ctx.fill(); }
      else if (L.shape === 'blob') { ctx.beginPath(); for (let a = 0; a <= Math.PI * 2 + 0.01; a += Math.PI / 24) { const wob = 1 + 0.12 * Math.sin(a * 3 + (L.seed || 0)) + 0.06 * Math.cos(a * 5); const x = Math.cos(a) * (w / 2) * wob, y = Math.sin(a) * (h / 2) * wob; a === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.closePath(); ctx.fill(); }
      else { roundRect(ctx, -w / 2, -h / 2, w, h, (W * (L.radius ?? 2)) / 100); ctx.fill(); }
    }
    ctx.restore();
  }

  /* ------------------------------------------------------------------ */
  /* cihaz / görsel                                                      */
  /* ------------------------------------------------------------------ */
  function drawDeviceLayer(ctx, W, H, L, img) {
    const spec = FRAMES[L.frame] || FRAMES['iphone-pro'];
    const bodyW = (W * L.w) / 100, bodyH = deviceHeight(spec, bodyW);
    const left = (W * L.x) / 100, top = (H * L.y) / 100;
    const cx = left + bodyW / 2, cy = top + bodyH / 2;
    ctx.save();
    if (L.rot) { ctx.translate(cx, cy); ctx.rotate((L.rot * Math.PI) / 180); ctx.translate(-cx, -cy); }
    if (L.glow && L.glowStrength > 0) { ctx.save(); ctx.shadowColor = L.glow; ctx.shadowBlur = bodyW * 0.35 * (L.glowStrength / 50); ctx.fillStyle = L.glow; ctx.globalAlpha = Math.min(1, L.glowStrength / 60); roundRect(ctx, left + bodyW * 0.04, top + bodyW * 0.04, bodyW * 0.92, bodyH - bodyW * 0.08, bodyW * 0.14); ctx.fill(); ctx.restore(); }
    ctx.globalAlpha = (L.opacity ?? 100) / 100;
    drawDevice(ctx, { x: left, y: top, w: bodyW, frame: L.frame, color: L.color, img, fit: L.fit, glare: L.glare, homeIndicator: L.homeIndicator, shadow: L.shadow, screenBg: L.screenBg });
    ctx.restore();
    return { left, top, bodyW, bodyH };
  }
  const deviceBox = (W, H, L) => { const spec = FRAMES[L.frame] || FRAMES['iphone-pro']; const bodyW = (W * L.w) / 100; return { x: (W * L.x) / 100, y: (H * L.y) / 100, w: bodyW, h: deviceHeight(spec, bodyW) }; };

  function drawImageLayer(ctx, W, H, L, img) {
    const x = (W * L.x) / 100, y = (H * L.y) / 100, w = (W * L.w) / 100, h = (H * (L.h || L.w * (W / H))) / 100;
    ctx.save(); ctx.globalAlpha = (L.opacity ?? 100) / 100;
    if (L.rot) { ctx.translate(x + w / 2, y + h / 2); ctx.rotate((L.rot * Math.PI) / 180); ctx.translate(-(x + w / 2), -(y + h / 2)); }
    if (L.shadow > 0) { ctx.shadowColor = `rgba(0,0,0,${Math.min(0.7, L.shadow / 100)})`; ctx.shadowBlur = w * 0.12 * (L.shadow / 50); ctx.shadowOffsetY = w * 0.03; }
    const r = (W * (L.radius ?? 0)) / 100;
    if (img) { ctx.save(); roundRect(ctx, x, y, w, h, r); ctx.clip(); global.Frames.drawImageFit(ctx, img, x, y, w, h, L.fit || 'cover'); ctx.restore(); }
    else { ctx.fillStyle = 'rgba(127,127,127,.25)'; roundRect(ctx, x, y, w, h, r); ctx.fill(); }
    ctx.restore();
  }

  /* ------------------------------------------------------------------ */
  /* ekran                                                               */
  /* ------------------------------------------------------------------ */
  const textOf = (v, lang, fallback) => { if (v == null) return ''; if (typeof v === 'string') return v; return v[lang] ?? v[fallback || 'en'] ?? Object.values(v)[0] ?? ''; };

  /**
   * info = { lang, defaultLang, imageFor(id)→img, shotSlot ('iphone'…), pan: {i,n} | null, project }
   * Katman hidden ise atlanır. Kilitli katmanlar sadece editörde önemli.
   */
  function renderScreen(ctx, W, H, screen, info) {
    info = info || {};
    const imageFor = info.imageFor || (() => null);
    ctx.save(); ctx.clearRect(0, 0, W, H);
    const bg = screen.bg && screen.bg.panorama && info.project && info.project.background ? info.project.background : (screen.bg || { type: 'solid', c1: '#ffffff' });
    drawBackground(ctx, W, H, bg, imageFor(bg.asset), screen.bg && screen.bg.panorama ? info.pan : null);
    let flowY = null, flowDeco = false; // akış: bir metin katmanı bir öncekinin altına otursun (flow:true)
    for (const L of screen.layers || []) {
      if (L.hidden) continue;
      if (L.type === 'text') {
        let eff = L;
        if (L.flow && flowY != null) eff = Object.assign({}, L, { y: (flowY / H) * 100 + (L.flowGap ?? 1.2) + (flowDeco ? 2.4 : 0) });
        const used = drawTextLayer(ctx, W, H, eff, textOf(L.text, info.lang, info.defaultLang));
        flowY = (H * eff.y) / 100 + used; flowDeco = L.decoration && L.decoration !== 'none';
      }
      else if (L.type === 'device') { const shots = L.shots || {}; const id = shots[info.shotSlot] || shots.global || Object.values(shots)[0]; drawDeviceLayer(ctx, W, H, L, imageFor(id)); }
      else if (L.type === 'image') drawImageLayer(ctx, W, H, L, imageFor(L.asset));
      else if (L.type === 'element') drawElement(ctx, W, H, L, textOf(L.text, info.lang, info.defaultLang), { icon: imageFor(info.project && info.project.app && info.project.app.icon) });
    }
    ctx.restore();
  }

  /** Katmanın kapladığı kutu (px) — editörde seçim/sürükleme için. */
  function layerBox(W, H, L) {
    if (L.type === 'device') return deviceBox(W, H, L);
    if (L.type === 'text' || L.type === 'image') return { x: (W * L.x) / 100, y: (H * L.y) / 100, w: (W * L.w) / 100, h: (H * (L.h || 8)) / 100 };
    if (L.type === 'element') { const sz = (W * (L.size ?? 4)) / 100; const w = L.kind === 'note' || L.kind === 'quote' || L.kind === 'shape' ? (W * (L.w ?? 60)) / 100 : sz * 6; const h = L.kind === 'shape' ? (H * (L.h ?? 10)) / 100 : sz * (L.kind === 'laurel' ? 6.5 : 2.4); const cx = (W * L.x) / 100 + (L.w && L.kind !== 'shape' ? 0 : 0); return { x: cx - w / 2, y: (H * L.y) / 100 - h / 2, w, h }; }
    return { x: 0, y: 0, w: 0, h: 0 };
  }

  const loadedFonts = new Set();
  function ensureFont(key, weight) {
    const fam = FONTS[key];
    if (!fam || typeof document === 'undefined' || !document.fonts || key === 'custom') return Promise.resolve(false);
    const w = SINGLE_WEIGHT[key] || weight || 700; const id = key + ':' + w;
    if (loadedFonts.has(id)) return Promise.resolve(false);
    return document.fonts.load(`${w} 20px ${fam.split(',')[0]}`).then(() => { loadedFonts.add(id); return true; }).catch(() => false);
  }
  function ensureScreenFonts(screens, again) {
    const jobs = [];
    screens.forEach((s) => (s.layers || []).forEach((L) => { if (L.font) { jobs.push(ensureFont(L.font, L.weight)); } }));
    return Promise.all(jobs).then((r) => { if (r.some(Boolean) && again) again(); return r.some(Boolean); });
  }

  global.Render = { renderScreen, drawBackground, drawTextLayer, drawElement, drawDeviceLayer, drawImageLayer, layerBox, FONTS, FONT_LIST, SINGLE_WEIGHT, ensureFont, ensureScreenFonts, contrastFor, hexA, textOf };
})(typeof window !== 'undefined' ? window : globalThis);
