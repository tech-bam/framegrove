/* Cihaz çerçeveleri: tamamen canvas ile çizilir, dış görsel/asset gerekmez. */
(function (global) {
  // bezel değerleri gövde genişliğinin oranı, screenRatio = ekran yüksekliği / ekran genişliği
  const FRAMES = {
    'iphone-pro': {
      label: 'iPhone Pro (Dynamic Island)',
      screenRatio: 2796 / 1290,
      bezel: { t: 0.032, r: 0.032, b: 0.032, l: 0.032 },
      bodyRadius: 0.155,
      screenRadius: 0.125,
      island: true,
      homeIndicator: true,
      buttons: true,
    },
    'iphone-notch': {
      label: 'iPhone (Çentik)',
      screenRatio: 2688 / 1242,
      bezel: { t: 0.038, r: 0.038, b: 0.038, l: 0.038 },
      bodyRadius: 0.16,
      screenRadius: 0.13,
      notch: true,
      homeIndicator: true,
      buttons: true,
    },
    'iphone-classic': {
      label: 'iPhone (Home tuşlu)',
      screenRatio: 2208 / 1242,
      bezel: { t: 0.16, r: 0.045, b: 0.2, l: 0.045 },
      bodyRadius: 0.115,
      screenRadius: 0.008,
      homeButton: true,
      speaker: true,
      buttons: true,
    },
    android: {
      label: 'Android (Punch hole)',
      screenRatio: 1920 / 1080,
      bezel: { t: 0.028, r: 0.028, b: 0.034, l: 0.028 },
      bodyRadius: 0.11,
      screenRadius: 0.085,
      punchHole: true,
      buttons: true,
    },
    tablet: {
      label: 'Tablet / iPad',
      screenRatio: 2732 / 2048,
      bezel: { t: 0.035, r: 0.035, b: 0.035, l: 0.035 },
      bodyRadius: 0.055,
      screenRadius: 0.028,
      camera: true,
    },
    watch: {
      label: 'Watch',
      screenRatio: 514 / 422,
      bezel: { t: 0.09, r: 0.075, b: 0.09, l: 0.075 },
      bodyRadius: 0.28,
      screenRadius: 0.22,
      crown: true,
    },
    'watch-round': {
      // Wear OS'un yuvarlak kadranı: kare ekran, tam daire gövde. Apple'ın
      // yuvarlak-kare saatini bir Play listelemesine koymak yanlış olur.
      label: 'Watch (yuvarlak)',
      screenRatio: 1,
      bezel: { t: 0.075, r: 0.075, b: 0.075, l: 0.075 },
      bodyRadius: 0.5,
      screenRadius: 0.5,
      crown: true,
    },
    browser: {
      label: 'Tarayıcı penceresi',
      screenRatio: 900 / 1440,
      bezel: { t: 0.055, r: 0.006, b: 0.006, l: 0.006 },
      bodyRadius: 0.018,
      screenRadius: 0.002,
      browserBar: true,
    },
    none: {
      label: 'Çerçevesiz (sadece görsel)',
      screenRatio: 2796 / 1290,
      bezel: { t: 0, r: 0, b: 0, l: 0 },
      bodyRadius: 0.06,
      screenRadius: 0.06,
      bare: true,
    },
    hidden: {
      label: 'Cihaz yok (sadece metin)',
      screenRatio: 2796 / 1290,
      bezel: { t: 0, r: 0, b: 0, l: 0 },
      bodyRadius: 0,
      screenRadius: 0,
      bare: true,
    },
  };

  const COLORS = {
    graphite: { a: '#3a3a3c', b: '#8e8e93', c: '#1c1c1e' },
    lilac: { a: '#b9a7ff', b: '#e6dfff', c: '#8f7bff' },
    mint: { a: '#7ee0c2', b: '#c8f5e6', c: '#3fbf99' },
    coral: { a: '#ff8a80', b: '#ffc9c4', c: '#e0574b' },
    navy: { a: '#1d2a5c', b: '#4a5a9a', c: '#0f1633' },
    black: { a: '#141416', b: '#3a3a3d', c: '#0a0a0b' },
    silver: { a: '#c9cdd2', b: '#f2f4f7', c: '#9aa0a6' },
    gold: { a: '#c9a227', b: '#f6e6b4', c: '#a8842a' },
    blue: { a: '#2b3a55', b: '#7d97c4', c: '#1d2739' },
    white: { a: '#e8e8ea', b: '#ffffff', c: '#c7c7cc' },
  };

  /* #hex gövde rengi → açık/koyu tonlar */
  function hexPal(hex) {
    const n = parseInt(hex.slice(1), 16); const r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    const mix = (c, t, k) => Math.round(c + (t - c) * k);
    const to = (r2, g2, b2) => '#' + [r2, g2, b2].map((v) => v.toString(16).padStart(2, '0')).join('');
    return { a: hex, b: to(mix(r, 255, .45), mix(g, 255, .45), mix(b, 255, .45)), c: to(mix(r, 0, .35), mix(g, 0, .35), mix(b, 0, .35)) };
  }
  function roundRect(ctx, x, y, w, h, r) {
    const rr = Math.max(0, Math.min(r, Math.min(w, h) / 2));
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }

  function deviceHeight(spec, bodyW) {
    const screenW = bodyW * (1 - spec.bezel.l - spec.bezel.r);
    const screenH = screenW * spec.screenRatio;
    return screenH + bodyW * (spec.bezel.t + spec.bezel.b);
  }

  function drawImageFit(ctx, img, x, y, w, h, fit) {
    const ir = img.width / img.height;
    const br = w / h;
    let dw, dh, dx, dy;
    if (fit === 'contain') {
      if (ir > br) { dw = w; dh = w / ir; } else { dh = h; dw = h * ir; }
      dx = x + (w - dw) / 2;
      dy = y + (h - dh) / 2;
    } else if (fit === 'top') {
      dw = w; dh = w / ir; dx = x; dy = y;
    } else {
      if (ir > br) { dh = h; dw = h * ir; } else { dw = w; dh = w / ir; }
      dx = x + (w - dw) / 2;
      dy = y + (h - dh) / 2;
    }
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function drawPlaceholder(ctx, x, y, w, h) {
    const g = ctx.createLinearGradient(x, y, x, y + h);
    g.addColorStop(0, '#2b2b30');
    g.addColorStop(1, '#17171a');
    ctx.fillStyle = g;
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = 'rgba(255,255,255,.28)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `500 ${w * 0.06}px -apple-system, system-ui, sans-serif`;
    ctx.fillText(global.t ? global.t('Add screenshot') : 'Add screenshot', x + w / 2, y + h / 2);
  }

  /**
   * Cihazı çizer.
   * opts: { x, y, w (gövde genişliği), frame, color, img, fit, glare, homeIndicator, shadow, screenBg }
   */
  function drawDevice(ctx, opts) {
    const spec = FRAMES[opts.frame] || FRAMES['iphone-pro'];
    const bodyW = opts.w;
    const bodyH = deviceHeight(spec, bodyW);
    const x = opts.x;
    const y = opts.y;
    const pal = COLORS[opts.color] || (typeof opts.color === 'string' && /^#[0-9a-f]{6}$/i.test(opts.color) ? hexPal(opts.color) : COLORS.graphite);
    const bodyR = bodyW * spec.bodyRadius;

    const sx = x + bodyW * spec.bezel.l;
    const sy = y + bodyW * spec.bezel.t;
    const sw = bodyW * (1 - spec.bezel.l - spec.bezel.r);
    const sh = sw * spec.screenRatio;
    const scrR = sw * spec.screenRadius;

    // gölge
    if (opts.shadow > 0) {
      ctx.save();
      ctx.shadowColor = `rgba(0,0,0,${Math.min(0.75, opts.shadow / 100)})`;
      ctx.shadowBlur = bodyW * 0.16 * (opts.shadow / 50);
      ctx.shadowOffsetY = bodyW * 0.045 * (opts.shadow / 50);
      ctx.fillStyle = '#000';
      roundRect(ctx, x, y, bodyW, bodyH, bodyR);
      ctx.fill();
      ctx.restore();
    }

    if (spec.bare) {
      ctx.save();
      roundRect(ctx, x, y, bodyW, bodyH, bodyR);
      ctx.clip();
      ctx.fillStyle = opts.screenBg || '#000';
      ctx.fillRect(x, y, bodyW, bodyH);
      if (opts.img) drawImageFit(ctx, opts.img, x, y, bodyW, bodyH, opts.fit);
      else drawPlaceholder(ctx, x, y, bodyW, bodyH);
      ctx.restore();
      return { x, y, w: bodyW, h: bodyH };
    }

    // yan tuşlar (gövdenin altında kalsın diye önce)
    if (spec.buttons) {
      ctx.fillStyle = pal.c;
      const bw = bodyW * 0.012;
      roundRect(ctx, x - bw * 0.6, y + bodyH * 0.17, bw, bodyH * 0.045, bw / 2); ctx.fill();
      roundRect(ctx, x - bw * 0.6, y + bodyH * 0.24, bw, bodyH * 0.07, bw / 2); ctx.fill();
      roundRect(ctx, x - bw * 0.6, y + bodyH * 0.33, bw, bodyH * 0.07, bw / 2); ctx.fill();
      roundRect(ctx, x + bodyW - bw * 0.4, y + bodyH * 0.26, bw, bodyH * 0.1, bw / 2); ctx.fill();
    }
    if (spec.crown) {
      ctx.fillStyle = pal.c;
      const cw = bodyW * 0.035;
      roundRect(ctx, x + bodyW - cw * 0.35, y + bodyH * 0.3, cw, bodyH * 0.13, cw / 2);
      ctx.fill();
    }

    // gövde
    const bg = ctx.createLinearGradient(x, y, x + bodyW, y);
    bg.addColorStop(0, pal.c);
    bg.addColorStop(0.06, pal.b);
    bg.addColorStop(0.16, pal.a);
    bg.addColorStop(0.84, pal.a);
    bg.addColorStop(0.94, pal.b);
    bg.addColorStop(1, pal.c);
    ctx.fillStyle = bg;
    roundRect(ctx, x, y, bodyW, bodyH, bodyR);
    ctx.fill();

    // iç kenar çizgisi
    ctx.strokeStyle = 'rgba(0,0,0,.55)';
    ctx.lineWidth = Math.max(1, bodyW * 0.004);
    roundRect(ctx, sx - ctx.lineWidth, sy - ctx.lineWidth, sw + ctx.lineWidth * 2, sh + ctx.lineWidth * 2, scrR + ctx.lineWidth);
    ctx.stroke();

    // ekran
    ctx.save();
    roundRect(ctx, sx, sy, sw, sh, scrR);
    ctx.clip();
    ctx.fillStyle = opts.screenBg || '#000';
    ctx.fillRect(sx, sy, sw, sh);
    if (opts.img) drawImageFit(ctx, opts.img, sx, sy, sw, sh, opts.fit);
    else drawPlaceholder(ctx, sx, sy, sw, sh);

    if (spec.browserBar) {
      const barH = bodyW * spec.bezel.t;
      ctx.restore();
      ctx.fillStyle = '#26262b';
      roundRect(ctx, x, y, bodyW, barH * 2, bodyR);
      ctx.fill();
      ctx.fillRect(x, y + barH, bodyW, barH);
      const dr = barH * 0.13;
      ['#ff5f57', '#febc2e', '#28c840'].forEach((c, i) => {
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(x + barH * (0.5 + i * 0.42), y + barH * 0.5, dr, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.fillStyle = 'rgba(255,255,255,.09)';
      roundRect(ctx, x + barH * 1.8, y + barH * 0.24, bodyW - barH * 2.4, barH * 0.52, barH * 0.26);
      ctx.fill();
      ctx.save();
      roundRect(ctx, sx, sy, sw, sh, scrR);
      ctx.clip();
    }

    // ön kamera / çentik / island
    if (spec.island) {
      const iw = sw * 0.315, ih = iw * 0.29;
      ctx.fillStyle = '#000';
      roundRect(ctx, sx + (sw - iw) / 2, sy + sh * 0.011, iw, ih, ih / 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(40,60,90,.85)';
      ctx.beginPath();
      ctx.arc(sx + (sw + iw) / 2 - ih * 0.55, sy + sh * 0.011 + ih / 2, ih * 0.2, 0, Math.PI * 2);
      ctx.fill();
    }
    if (spec.notch) {
      const nw = sw * 0.52, nh = nw * 0.145;
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.moveTo(sx + (sw - nw) / 2, sy);
      ctx.lineTo(sx + (sw + nw) / 2, sy);
      ctx.lineTo(sx + (sw + nw) / 2 - nh * 0.5, sy + nh);
      ctx.arcTo(sx + (sw - nw) / 2 + nh * 0.5, sy + nh, sx + (sw - nw) / 2, sy, nh * 0.6);
      ctx.closePath();
      ctx.fill();
    }
    if (spec.punchHole) {
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(sx + sw / 2, sy + sw * 0.055, sw * 0.026, 0, Math.PI * 2);
      ctx.fill();
    }
    if (spec.homeIndicator && opts.homeIndicator !== false) {
      const hw = sw * 0.36, hh = sw * 0.011;
      ctx.fillStyle = 'rgba(255,255,255,.85)';
      roundRect(ctx, sx + (sw - hw) / 2, sy + sh - hh * 3.2, hw, hh, hh / 2);
      ctx.fill();
    }
    ctx.restore();

    // klasik iPhone detayları
    if (spec.speaker) {
      const topC = y + (bodyW * spec.bezel.t) / 2;
      ctx.fillStyle = 'rgba(0,0,0,.55)';
      roundRect(ctx, x + bodyW / 2 - bodyW * 0.09, topC - bodyW * 0.008, bodyW * 0.18, bodyW * 0.016, bodyW * 0.008);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + bodyW / 2 - bodyW * 0.15, topC, bodyW * 0.014, 0, Math.PI * 2);
      ctx.fill();
    }
    if (spec.homeButton) {
      const cy = y + bodyH - (bodyW * spec.bezel.b) / 2;
      ctx.strokeStyle = 'rgba(0,0,0,.4)';
      ctx.lineWidth = bodyW * 0.006;
      ctx.beginPath();
      ctx.arc(x + bodyW / 2, cy, bodyW * 0.072, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (spec.camera) {
      ctx.fillStyle = 'rgba(0,0,0,.6)';
      ctx.beginPath();
      ctx.arc(x + bodyW / 2, y + (bodyW * spec.bezel.t) / 2, bodyW * 0.008, 0, Math.PI * 2);
      ctx.fill();
    }

    // cam parlaması
    if (opts.glare) {
      ctx.save();
      roundRect(ctx, x, y, bodyW, bodyH, bodyR);
      ctx.clip();
      const gg = ctx.createLinearGradient(x, y, x + bodyW * 0.9, y + bodyH * 0.55);
      gg.addColorStop(0, 'rgba(255,255,255,.16)');
      gg.addColorStop(0.35, 'rgba(255,255,255,.05)');
      gg.addColorStop(0.55, 'rgba(255,255,255,0)');
      ctx.fillStyle = gg;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + bodyW, y);
      ctx.lineTo(x, y + bodyH);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    return { x, y, w: bodyW, h: bodyH };
  }

  global.Frames = { FRAMES, COLORS, drawDevice, deviceHeight, roundRect, drawImageFit };
})(typeof window !== "undefined" ? window : globalThis);
