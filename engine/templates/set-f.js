/* Set F — yatay (iPad/tablet), Apple Watch, Vision Pro ve macOS şablonları. Konumlar yüzde; çıktı boyutları şablonla gelir. */
(function () {
  const T = (tr, en) => ({ en, tr });
  const S = (rows) => rows.map(([layout, en, tr, sub_en, sub_tr, extra]) => Object.assign({ layout, title: T(tr, en), sub: sub_en == null ? false : T(sub_tr || sub_en, sub_en) }, extra || {}));
  const LAND = { orientation: 'landscape', devices: ['ipad', 'android-tablet'], sizes: ['ipad-13', 'android-tablet-10'] };
  const WATCH = { devices: ['watch'], sizes: ['watch'] };
  const VISION = { orientation: 'landscape', devices: ['mac'], sizes: ['visionpro'] };
  const MAC = { orientation: 'landscape', devices: ['mac'], sizes: ['macos'] };
  const TAB = { frame: 'tablet', color: 'black', shadow: 45, fit: 'top' };

  /* ---- yatay ---- */
  defineTemplate(Object.assign({ key: 'land-cielo', name: 'Landscape: Cielo', desc: T('Mavi-lila gradyan, ortalı beyaz başlık ve geniş tablet; yatay iPad ve Android tablet çıktıları için.', 'Blue-lilac gradient, centred white headline and a wide tablet; for landscape iPad and Android tablet outputs.'),
    tags: ['simple', 'gradient', 'landscape'], cats: ['productivity', 'business', 'finance'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 4.2, color: '#ffffff', accent: '#ffffff', letterSpacing: -1, lineHeight: 1.08, subSize: 1.8, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'linear', c1: '#5b6cff', c2: '#a06bff', angle: 160 }, device: TAB,
    screens: S([
      ['landscape-center', 'Plan the whole week\non one screen', 'Tüm haftayı\ntek ekranda planla', 'Tasks, calendar and notes side by side', 'Görev, takvim ve notlar yan yana', { dev: { x: 14, y: 34, w: 72 } }],
      ['landscape', 'See every\nnumber at once', 'Her rakamı\naynı anda gör', 'Dashboards that fit a tablet', 'Tablete sığan panolar'],
      ['landscape-right', 'Work with\nyour team', 'Ekibinle\nçalış', 'Comments and assignments', 'Yorum ve atama'],
      ['landscape', 'Focus mode', 'Odak modu', 'One task, full screen', 'Tek görev, tam ekran'],
      ['landscape-right', 'Sync\neverywhere', 'Her yerde\neşitle', 'Phone, tablet, desktop', 'Telefon, tablet, masaüstü'],
      ['landscape-center', 'Start free', 'Ücretsiz başla', 'No card needed', 'Kart gerekmez', { dev: { x: 14, y: 34, w: 72 } }],
    ]) }, LAND));
  defineTemplate(Object.assign({ key: 'land-clash', name: 'Landscape: Clash', desc: T('Tam ekran oyun görseli, büyük harfli oyunsu başlık altta; yatay oyun ekranları için.', 'Full-frame game art with a chunky uppercase title at the bottom; for landscape game screenshots.'),
    tags: ['simple', 'colourful', 'photo', 'landscape'], cats: ['games', 'entertainment'], theme: 'colourful', skill: 'simple',
    style: { font: 'baloo', weight: 800, size: 5, color: '#ffe600', accent: '#ffffff', uppercase: true, letterSpacing: 0, lineHeight: 0.98, shadow: true },
    bg: { type: 'linear', c1: '#2f6b3a', c2: '#0d2a14', angle: 180 }, device: { frame: 'none', fit: 'cover', shadow: 0 },
    screens: S([
      ['landscape-full', '', '', null, null, { titleBox: { y: 30 }, els: [{ kind: 'text', x: 50, y: 50, size: 8, text: T('KRALLIK', 'KINGDOM'), color: '#ffe600', weight: 900 }] }],
      ['landscape-full', 'Build your\n[epic] kingdom', '[Epik] krallığını\nkur', null, null, { titleBox: { y: 66, x: 55, w: 42, align: 'left' } }],
      ['landscape-full', 'Upgrade in\n[real time]', '[Gerçek zamanlı]\nyükselt', null, null, { titleBox: { y: 66, x: 55, w: 42, align: 'left' } }],
      ['landscape-full', 'Master war\n[strategy]', 'Savaş [stratejisinde]\nustalaş', null, null, { titleBox: { y: 66, x: 55, w: 42, align: 'left' } }],
      ['landscape-full', 'Evolve your\n[defences]', '[Savunmanı]\ngeliştir', null, null, { titleBox: { y: 66, x: 55, w: 42, align: 'left' } }],
      ['landscape-full', 'Play\n[free]', '[Ücretsiz]\noyna', null, null, { titleBox: { y: 66, x: 55, w: 42, align: 'left' } }],
    ]) }, LAND));
  defineTemplate(Object.assign({ key: 'land-gmail', name: 'Landscape: Inbox', desc: T('Açık lavanta zemin, sol hizalı siyah başlık ve sağda geniş tablet; yatay üretkenlik uygulamaları için.', 'Light lavender background, left-aligned black headline and a wide tablet on the right; for landscape productivity apps.'),
    tags: ['simple', 'light', 'landscape'], cats: ['productivity', 'business', 'utilities'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 4, color: '#111111', accent: '#1e63ff', letterSpacing: -1, lineHeight: 1.08, subSize: 1.8, subOpacity: 70 },
    bg: { type: 'solid', c1: '#e8ebff' }, device: Object.assign({}, TAB, { color: 'white' }),
    screens: S([
      ['landscape', 'Get the best\nresults with\n[one] inbox', '[Tek] gelen\nkutusuyla en iyi\nsonuç', null, null, { els: [{ kind: 'icon', x: 12, y: 8, size: 1.4, text: T('Uygulaman', 'Your App'), iconBg: '#1e63ff', color: '#111111' }] }],
      ['landscape', 'Stand out\nand [proud]', 'Öne çık,\n[gururla]', 'Smart labels do the sorting', 'Akıllı etiketler sıralar'],
      ['landscape', 'Save your\n[time]', '[Zamanını]\nkoru', 'Snooze, schedule, templates', 'Ertele, planla, şablon'],
      ['landscape', 'Your new\n[home]', 'Yeni\n[evin]', 'Everything in one view', 'Her şey tek görünümde'],
      ['landscape', 'Localise and\n[translate]', 'Yerelleştir ve\n[çevir]', 'Reply in any language', 'Her dilde yanıtla'],
      ['landscape', 'Start\n[free]', '[Ücretsiz]\nbaşla', 'No card needed', 'Kart gerekmez'],
    ]) }, LAND));
  defineTemplate(Object.assign({ key: 'land-aven', name: 'Landscape: Aven', desc: T('Krem zemin, turuncu leke süsleri, sol hizalı koyu başlık ve geniş tablet; yemek ve tarif uygulamaları için yatay.', 'Cream background with orange blob accents, left-aligned dark headline and a wide tablet; landscape for food and recipe apps.'),
    tags: ['advanced', 'light', 'blobs', 'landscape'], cats: ['food & drink', 'lifestyle', 'health & fitness'], theme: 'light', skill: 'advanced',
    style: { font: 'fraunces', weight: 700, size: 4.2, color: '#1a1a1a', accent: '#f26a3d', letterSpacing: -0.5, lineHeight: 1.08, subFont: 'inter', subSize: 1.8, subOpacity: 70 },
    bg: { type: 'solid', c1: '#f8f1e7', pattern: 'blobs', patternColor: '#f6a67a', patternOpacity: 40 }, device: TAB,
    screens: S([
      ['landscape', 'Try new\nthings', 'Yeni şeyler\ndene', 'Recipes for what you have at home', 'Evdekilerle tarifler'],
      ['landscape', 'Copy your\n[faves]', '[Favorilerini]\nkopyala', 'One tap to save', 'Tek dokunuşla kaydet'],
      ['landscape', 'Build your\n[scene]', '[Sofranı]\nkur', 'Plan a dinner in minutes', 'Dakikalar içinde akşam yemeği'],
      ['landscape-center', 'Screens that\nlook [delicious]', '[Lezzetli] görünen\nekranlar', 'Beautiful on any tablet', 'Her tablette güzel', { dev: { x: 14, y: 34, w: 72 } }],
      ['landscape', 'Weekly\n[plans]', 'Haftalık\n[planlar]', 'Shopping list included', 'Alışveriş listesi dahil'],
      ['landscape', 'Start\n[cooking]', '[Pişirmeye]\nbaşla', 'Free to try', 'Ücretsiz dene'],
    ]) }, LAND));
  defineTemplate(Object.assign({ key: 'land-nilo', name: 'Landscape: Nilo', desc: T('Koyu mor-lacivert gradyan, beyaz başlık ve eğik tablet; yatay panolar ve analiz uygulamaları için.', 'Dark purple-navy gradient, white headline and a tilted tablet; landscape for dashboards and analytics apps.'),
    tags: ['advanced', 'dark', 'gradient', 'landscape'], cats: ['business', 'developer tools', 'finance'], theme: 'dark', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 4, color: '#ffffff', accent: '#c9b8ff', letterSpacing: -1, lineHeight: 1.08, subSize: 1.8, subColor: '#ffffff', subOpacity: 75 },
    bg: { type: 'linear', c1: '#3b2a8a', c2: '#0b0f2a', angle: 200 }, device: TAB,
    screens: S([
      ['landscape-right', 'Dashboards that\n[breathe]', '[Nefes alan]\npanolar', 'Every metric, one glance', 'Her metrik, tek bakış', { dev: { x: 2, y: 12, w: 50, rot: -6 } }],
      ['landscape-center', 'Track the\n[numbers] that matter', '[Önemli] rakamları\nizle', null, null, { dev: { x: 14, y: 34, w: 72 } }],
      ['landscape', 'Alerts before\n[trouble]', '[Sorundan] önce\nuyarı', 'Thresholds you set', 'Senin belirlediğin eşikler', { dev: { x: 48, y: 12, w: 50, rot: 6 } }],
      ['landscape-right', 'Share with\nthe [team]', '[Ekiple]\npaylaş', 'Roles and permissions', 'Rol ve izinler', { dev: { x: 2, y: 12, w: 50, rot: -6 } }],
      ['landscape-center', 'Works\n[offline]', '[Çevrimdışı]\nçalışır', null, null, { dev: { x: 14, y: 34, w: 72 } }],
      ['landscape', 'Start\n[free]', '[Ücretsiz]\nbaşla', 'No card needed', 'Kart gerekmez'],
    ]) }, LAND));
  defineTemplate(Object.assign({ key: 'land-calm', name: 'Landscape: Calm', desc: T('Mavi-mor gradyan, küçük beyaz başlık ve eğik tablet; sakin, yatay sağlık ve yaşam uygulamaları için.', 'Blue-purple gradient, small white headline and a tilted tablet; calm landscape set for wellness and lifestyle apps.'),
    tags: ['simple', 'gradient', 'landscape'], cats: ['health & fitness', 'lifestyle', 'education'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 3.4, color: '#ffffff', accent: '#ffffff', letterSpacing: -0.6, lineHeight: 1.1, subSize: 1.7, subColor: '#ffffff', subOpacity: 80 },
    bg: { type: 'linear', c1: '#3aa0ff', c2: '#7b4dff', angle: 160 }, device: Object.assign({}, TAB, { rot: -4 }),
    screens: S([
      ['landscape-center', '', '', null, null, { dev: { x: 14, y: 22, w: 72, rot: -4 }, els: [{ kind: 'icon', x: 50, y: 10, size: 1.6, text: T('Uygulaman', 'Your App'), iconBg: '#ffffff', color: '#ffffff' }] }],
      ['landscape-center', 'Breathe,\n[then] begin', 'Nefes al,\n[sonra] başla', null, null, { dev: { x: 14, y: 30, w: 72, rot: -4 } }],
      ['landscape-center', 'Sleep\n[deeper]', 'Daha [derin]\nuyu', null, null, { dev: { x: 14, y: 30, w: 72, rot: 4 } }],
      ['landscape-center', 'Track your\n[mood]', '[Ruh halini]\nizle', null, null, { dev: { x: 14, y: 30, w: 72, rot: -4 } }],
      ['landscape-center', 'Gentle\n[reminders]', 'Nazik\n[hatırlatmalar]', null, null, { dev: { x: 14, y: 30, w: 72, rot: 4 } }],
      ['landscape-center', 'Start\n[tonight]', '[Bu gece]\nbaşla', null, null, { dev: { x: 14, y: 30, w: 72, rot: -4 } }],
    ]) }, LAND));
  defineTemplate(Object.assign({ key: 'land-zevi', name: 'Landscape: Zevi', desc: T('Koyu füme zemin, büyük harfli geniş aralıklı başlık ve iki eğik tablet; yatay araç ve iş uygulamaları için.', 'Dark charcoal background, uppercase wide-spaced headline and two tilted tablets; landscape for utility and business apps.'),
    tags: ['advanced', 'dark', 'multi layered', 'landscape'], cats: ['utilities', 'business', 'productivity'], theme: 'dark', skill: 'advanced',
    style: { font: 'inter', weight: 600, size: 2.8, color: '#ffffff', accent: '#ffffff', uppercase: true, letterSpacing: 3, lineHeight: 1.2, subSize: 1.6, subColor: '#ffffff', subOpacity: 70, titleBox: { y: 8 } },
    bg: { type: 'solid', c1: '#1e1f24' }, device: Object.assign({}, TAB, { color: 'white' }),
    screens: S([
      ['landscape-center', 'Screenshot creator', 'Ekran görüntüsü aracı', null, null, { dev: { x: 8, y: 26, w: 48, rot: -8 }, extra: [{ type: 'device', name: 'Device 2', frame: 'tablet', color: 'white', shadow: 45, fit: 'top', x: 46, y: 30, w: 48, rot: 8 }] }],
      ['landscape-center', 'Every tool in one place', 'Her araç tek yerde', null, null, { dev: { x: 14, y: 28, w: 72 } }],
      ['landscape-center', 'Two views, one truth', 'İki görünüm, tek gerçek', null, null, { dev: { x: 8, y: 26, w: 48, rot: -8 }, extra: [{ type: 'device', name: 'Device 2', frame: 'tablet', color: 'white', shadow: 45, fit: 'top', x: 46, y: 30, w: 48, rot: 8 }] }],
      ['landscape-center', '', '', null, null, { dev: null, els: [{ kind: 'laurel', x: 50, y: 50, size: 2, text: T('Apple\nÖne Çıkan', 'Featured by\nApple'), color: '#ffffff' }] }],
      ['landscape-center', 'Works on every tablet', 'Her tablette çalışır', null, null, { dev: { x: 14, y: 28, w: 72 } }],
      ['landscape-center', 'Start free', 'Ücretsiz başla', null, null, { dev: { x: 14, y: 28, w: 72 } }],
    ]) }, LAND));
  defineTemplate(Object.assign({ key: 'land-eira', name: 'Landscape: Eira', desc: T('Beyaz zemin, siyah başlık ve mavi vurgu; ortalı geniş tablet, ilk karede çift tablet. Yatay, sade, her kategori.', 'White background, black headline with a blue emphasis; centred wide tablet, two tablets on the first screen. Landscape, clean, any category.'),
    tags: ['simple', 'light', 'minimal', 'landscape'], cats: ['utilities', 'productivity', 'business', 'education'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 3.8, color: '#111111', accent: '#3b8fff', letterSpacing: -1, lineHeight: 1.08, subSize: 1.7, subOpacity: 65 },
    bg: { type: 'solid', c1: '#ffffff' }, device: TAB,
    screens: S([
      ['landscape-center', '[Your App]', '[Uygulaman]', null, null, { dev: { x: 8, y: 26, w: 48, rot: -6 }, extra: [{ type: 'device', name: 'Device 2', frame: 'tablet', color: 'black', shadow: 45, fit: 'top', x: 46, y: 30, w: 48, rot: 6 }] }],
      ['landscape-center', 'World class [designs]', 'Dünya çapında [tasarımlar]', 'Intuitive features, amazing results.', 'Sezgisel özellikler, harika sonuçlar.', { dev: { x: 14, y: 34, w: 72 } }],
      ['landscape-center', 'Limitless [options]', 'Sınırsız [seçenek]', 'Intuitive features, amazing results.', 'Sezgisel özellikler, harika sonuçlar.', { dev: { x: 14, y: 34, w: 72 } }],
      ['landscape-center', 'Simplistic [layouts]', 'Sade [düzenler]', 'Intuitive features, amazing results.', 'Sezgisel özellikler, harika sonuçlar.', { dev: { x: 14, y: 34, w: 72 } }],
      ['landscape-center', 'World class [design]', 'Dünya çapında [tasarım]', 'Intuitive features, amazing results.', 'Sezgisel özellikler, harika sonuçlar.', { dev: { x: 14, y: 34, w: 72 } }],
      ['landscape-center', 'Get [started]', '[Hemen] başla', 'Free to try.', 'Ücretsiz dene.', { dev: { x: 14, y: 34, w: 72 } }],
    ]) }, LAND));
  defineTemplate(Object.assign({ key: 'land-solis', name: 'Landscape: Solis', desc: T('Her karede farklı canlı düz renk, büyük harfli başlık ve eğik siyah tablet; yatay sosyal ve eğlence uygulamaları için.', 'A different vivid flat colour per screen, uppercase headline and a tilted black tablet; landscape for social and entertainment apps.'),
    tags: ['simple', 'colourful', 'bold', 'landscape'], cats: ['social networking', 'entertainment', 'lifestyle'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 900, size: 3.4, color: '#ffffff', accent: '#ffffff', uppercase: true, letterSpacing: 0, lineHeight: 1.12, subSize: 1.7, subColor: '#ffffff', subOpacity: 85 },
    device: Object.assign({}, TAB, { rot: -4 }),
    screens: S([
      ['landscape-center', 'Create [beautiful]\nscreens like this', 'Böyle [güzel]\nekranlar oluştur', null, null, { bg: { type: 'solid', c1: '#5aa9ff' }, dev: { x: 14, y: 30, w: 72, rot: -4 } }],
      ['landscape-center', 'Show off your app in\nthe [best] way', 'Uygulamanı [en iyi]\nşekilde göster', null, null, { bg: { type: 'solid', c1: '#8ecae6' }, titleStyle: { color: '#111111', accent: '#e63946' }, dev: { x: 14, y: 30, w: 72, rot: 4 } }],
      ['landscape-center', 'Create [standout]\nscreens like this', 'Böyle [öne çıkan]\nekranlar oluştur', null, null, { bg: { type: 'solid', c1: '#ff7a1a' }, titleStyle: { accent: '#111111' }, dev: { x: 14, y: 30, w: 72, rot: -4 } }],
      ['landscape-center', 'Show off your app in\nthe [best] way', 'Uygulamanı [en iyi]\nşekilde göster', null, null, { bg: { type: 'solid', c1: '#ffb703' }, titleStyle: { color: '#111111', accent: '#ffffff' }, dev: { x: 14, y: 30, w: 72, rot: 4 } }],
      ['landscape-center', 'Share with\n[friends]', '[Arkadaşlarla]\npaylaş', null, null, { bg: { type: 'solid', c1: '#e63946' }, dev: { x: 14, y: 30, w: 72, rot: -4 } }],
      ['landscape-center', 'Join\n[today]', '[Bugün]\nkatıl', null, null, { bg: { type: 'solid', c1: '#5aa9ff' }, dev: { x: 14, y: 30, w: 72, rot: 4 } }],
    ]) }, LAND));

  /* ---- Apple Watch ---- */
  const watchScreens = (rows, extra) => S(rows.map((r) => r.concat([null, null, extra || {}]).slice(0, 6)));
  defineTemplate(Object.assign({ key: 'watch-1', name: 'Watch 1', desc: T('Siyah zemin, ortalı beyaz başlık ve saat çerçevesi; Apple Watch ekran görüntüleri.', 'Black background, centred white headline and a watch frame; Apple Watch screenshots.'),
    tags: ['simple', 'dark', 'watch'], cats: ['health & fitness', 'utilities', 'productivity'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 9, color: '#ffffff', accent: '#3ddc84', letterSpacing: -0.5, lineHeight: 1.1, subSize: 5, subColor: '#ffffff', subOpacity: 70 },
    bg: { type: 'solid', c1: '#000000' }, device: { frame: 'watch', color: 'black', shadow: 40, fit: 'cover' },
    screens: S([['watch', 'Create.', 'Oluştur.'], ['watch', 'Design.', 'Tasarla.'], ['watch', 'Build', 'Kur'], ['watch-bottom', 'Move [daily]', '[Her gün]\nhareket et'], ['watch-bottom', 'Top 100 apps', 'İlk 100 uygulama'], ['watch', 'Start [free]', '[Ücretsiz]\nbaşla']]) }, WATCH));
  defineTemplate(Object.assign({ key: 'watch-2', name: 'Watch 2', desc: T('Beyaz zemin, siyah kalın başlık ve turuncu vurgu; gümüş saat. Apple Watch için açık set.', 'White background, bold black headline with an orange emphasis; silver watch. Light Apple Watch set.'),
    tags: ['simple', 'light', 'watch'], cats: ['health & fitness', 'lifestyle', 'utilities'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 9, color: '#111111', accent: '#f26a3d', letterSpacing: -0.5, lineHeight: 1.1, subSize: 5, subOpacity: 70 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'watch', color: 'silver', shadow: 35, fit: 'cover' },
    screens: S([['watch', 'The smart way\nto [start]', '[Başlamanın]\nakıllı yolu'], ['watch', 'Get great plans\nfor [everyone]', '[Herkes] için\nharika planlar'], ['watch-bottom', 'Play before\nyou [buy]', '[Almadan]\nönce oyna'], ['watch-bottom', 'Make it the\nway [you] want', '[İstediğin]\ngibi yap'], ['watch', 'Glance,\n[done]', 'Bak,\n[bitti]'], ['watch', 'Free to\n[try]', 'Ücretsiz\n[dene]']]) }, WATCH));
  defineTemplate(Object.assign({ key: 'watch-3', name: 'Watch 3', desc: T('Siyah zemin, sol hizalı beyaz başlık ve saat sağ altta; Apple Watch için asimetrik düzen.', 'Black background, left-aligned white headline and the watch at bottom-right; asymmetric Apple Watch set.'),
    tags: ['advanced', 'dark', 'watch'], cats: ['productivity', 'utilities', 'health & fitness'], theme: 'dark', skill: 'advanced',
    style: { font: 'inter', weight: 700, size: 8, color: '#ffffff', accent: '#ffffff', letterSpacing: -0.5, lineHeight: 1.1, subSize: 5, subColor: '#ffffff', subOpacity: 70 },
    bg: { type: 'solid', c1: '#0b0b0b' }, device: { frame: 'watch', color: 'black', shadow: 40, fit: 'cover' },
    screens: S([['watch', 'Improve\nASO anywhere,\nanytime', 'Her yerde,\nher an', null, null, { titleBox: { align: 'left', x: 6, w: 88, y: 8 }, dev: { x: 30, y: 46, w: 64 } }], ['watch', 'Choose your\ntemplate', 'Şablonunu\nseç'], ['watch', 'Pick your\npoison', 'Rutinini\nseç'], ['watch', 'See what\'s\npossible', 'Neler mümkün\ngör'], ['watch', 'Share your\ncreations', 'Yaptıklarını\npaylaş'], ['watch', 'Start\ntoday', 'Bugün\nbaşla']]) }, WATCH));
  defineTemplate(Object.assign({ key: 'watch-4', name: 'Watch 4', desc: T('Beyaz zemin, saat tam kare, metin yok; Apple Watch cihaz görseli.', 'White background, watch fills the frame, no text; plain Apple Watch device shot.'),
    tags: ['simple', 'light', 'watch'], cats: ['utilities', 'health & fitness', 'lifestyle'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 8, color: '#111111', accent: '#111111' },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'watch', color: 'black', shadow: 30, fit: 'cover' },
    screens: S([['watch', '', '', null, null, { dev: { x: 6, y: 8, w: 88 } }], ['watch', '', '', null, null, { dev: { x: 6, y: 8, w: 88 } }], ['watch', '', '', null, null, { dev: { x: 6, y: 8, w: 88 } }], ['watch', '', '', null, null, { dev: { x: 6, y: 8, w: 88 } }], ['watch', '', '', null, null, { dev: { x: 6, y: 8, w: 88 } }], ['watch', '', '', null, null, { dev: { x: 6, y: 8, w: 88 } }]]) }, WATCH));
  defineTemplate(Object.assign({ key: 'watch-5', name: 'Watch 5', desc: T('Lila-pembe pastel gradyan, saat büyük ve ortalı, metin yok; Apple Watch için renkli cihaz görseli.', 'Lilac-pink pastel gradient, big centred watch, no text; colourful Apple Watch device shot.'),
    tags: ['simple', 'pastel', 'gradient', 'watch'], cats: ['health & fitness', 'lifestyle'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 8, color: '#ffffff', accent: '#ffffff' },
    bg: { type: 'linear', c1: '#b9a7ff', c2: '#ffb6c9', angle: 160 }, device: { frame: 'watch', color: 'silver', shadow: 40, fit: 'cover' },
    screens: S([['watch', '', '', null, null, { dev: { x: 8, y: 8, w: 84 } }], ['watch', '', '', null, null, { dev: { x: 8, y: 8, w: 84 } }], ['watch', '', '', null, null, { dev: { x: 8, y: 8, w: 84 } }], ['watch', '', '', null, null, { dev: { x: 8, y: 8, w: 84 } }], ['watch', '', '', null, null, { dev: { x: 8, y: 8, w: 84 } }], ['watch', '', '', null, null, { dev: { x: 8, y: 8, w: 84 } }]]) }, WATCH));
  defineTemplate(Object.assign({ key: 'watch-6', name: 'Watch 6', desc: T('Her karede farklı pastel zemin (nane, pembe, sarı, mavi), tam ekran saat görüntüsü; Apple Watch için canlı set.', 'A different pastel per screen (mint, pink, yellow, blue) with a full-frame watch screen; lively Apple Watch set.'),
    tags: ['simple', 'colourful', 'watch'], cats: ['music', 'health & fitness', 'lifestyle'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 8, color: '#ffffff', accent: '#ffffff' }, device: { frame: 'watch', color: 'black', shadow: 40, fit: 'cover' },
    screens: S([['watch', '', '', null, null, { bg: { type: 'solid', c1: '#7ee0c2' }, dev: { x: 8, y: 8, w: 84 } }], ['watch', '', '', null, null, { bg: { type: 'solid', c1: '#ff8ab3' }, dev: { x: 8, y: 8, w: 84 } }], ['watch', '', '', null, null, { bg: { type: 'solid', c1: '#ffd166' }, dev: { x: 8, y: 8, w: 84 } }], ['watch', '', '', null, null, { bg: { type: 'solid', c1: '#8ab8ff' }, dev: { x: 8, y: 8, w: 84 } }], ['watch', '', '', null, null, { bg: { type: 'solid', c1: '#c9b8ff' }, dev: { x: 8, y: 8, w: 84 } }], ['watch', '', '', null, null, { bg: { type: 'solid', c1: '#7ee0c2' }, dev: { x: 8, y: 8, w: 84 } }]]) }, WATCH));

  /* ---- Vision Pro ---- */
  const VS = { frame: 'none', fit: 'cover', shadow: 60, radius: 3 };
  defineTemplate(Object.assign({ key: 'vision-1', name: 'Vision Pro 1', desc: T('Sıcak iç mekân hissi (gradyan), üstte beyaz başlık, ortada yüzen uygulama penceresi; Apple Vision Pro görselleri.', 'Warm interior feel (gradient), white headline on top and a floating app window; Apple Vision Pro screenshots.'),
    tags: ['simple', 'vision'], cats: ['entertainment', 'productivity', 'utilities'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 3.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -0.8, lineHeight: 1.1, subSize: 1.7, subColor: '#ffffff', subOpacity: 80, shadow: true },
    bg: { type: 'mesh', c1: '#8a6a4a', c2: '#2a1e14', c3: '#c9a27a', variant: 1, noise: 8 }, device: VS,
    screens: S([['vision', 'A window into\n[your] world', '[Senin] dünyana\naçılan pencere'], ['vision', 'Bigger than\nany [screen]', 'Her [ekrandan]\nbüyük'], ['vision', 'Hands-free\n[control]', 'Eller serbest\n[kontrol]'], ['vision', 'Made for\n[spatial]', '[Uzamsal]\niçin yapıldı'], ['vision', 'Get\n[started]', '[Hemen]\nbaşla']]) }, VISION));
  defineTemplate(Object.assign({ key: 'vision-2', name: 'Vision Pro 2', desc: T('Koyu oda hissi, üstte kutu etiket ve beyaz başlık, geniş yüzen pencere; Apple Vision Pro.', 'Dark room feel, a boxed label and white headline on top, wide floating window; Apple Vision Pro.'),
    tags: ['simple', 'dark', 'vision'], cats: ['games', 'entertainment', 'education'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 3.2, color: '#ffffff', accent: '#ffffff', letterSpacing: -0.6, lineHeight: 1.1, subSize: 1.6, subColor: '#ffffff', subOpacity: 80, box: 'glass', boxColor: '#000000', boxOpacity: 40, shadow: true },
    bg: { type: 'mesh', c1: '#3a4a5a', c2: '#0b1016', c3: '#6a7a8a', variant: 2, noise: 8 }, device: Object.assign({}, VS, { x: 10, y: 30, w: 80 }),
    screens: S([['vision', 'Create app store\n[screenshots] like this', 'Böyle mağaza\n[görselleri] oluştur'], ['vision', 'Take your app to a\n[whole new] level', 'Uygulamanı [yepyeni]\nbir seviyeye taşı'], ['vision', 'It\'s not a\n[screen], it\'s a space', 'Bir [ekran] değil,\nbir alan'], ['vision', 'Find out what\n[spatial] can do', '[Uzamsal] neler\nyapabilir gör'], ['vision', 'Available\n[now]', '[Şimdi]\nindir']]) }, VISION));
  defineTemplate(Object.assign({ key: 'vision-3', name: 'Vision Pro 3', desc: T('Mavi gradyan gökyüzü, ince beyaz başlık ve yüzen pencere; Apple Vision Pro için açık set.', 'Blue gradient sky, light white headline and a floating window; bright Apple Vision Pro set.'),
    tags: ['simple', 'gradient', 'vision'], cats: ['travel', 'lifestyle', 'productivity'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 600, size: 3.2, color: '#ffffff', accent: '#ffffff', letterSpacing: -0.6, lineHeight: 1.1, subSize: 1.6, subColor: '#ffffff', subOpacity: 85, shadow: true },
    bg: { type: 'linear', c1: '#2f80ed', c2: '#a8d4ff', angle: 180 }, device: VS,
    screens: S([['vision', 'Create app store\nscreenshots like this', 'Böyle mağaza\ngörselleri oluştur'], ['vision', 'Screens that float\nwherever you look', 'Baktığın yerde\nyüzen ekranlar'], ['vision', 'Plan a trip\nin your living room', 'Oturma odanda\ngezi planla'], ['vision', 'Every detail,\nlife size', 'Her ayrıntı,\ngerçek boyutta'], ['vision', 'Get\nstarted', 'Hemen\nbaşla']]) }, VISION));

  /* ---- macOS ---- */
  defineTemplate(Object.assign({ key: 'mac-trello', name: 'MacOS Boards', desc: T('Mor gradyan, sol hizalı beyaz başlık ve tarayıcı penceresi; Mac App Store için pano ve iş uygulamaları.', 'Purple gradient, left-aligned white headline and a browser window; Mac App Store set for board and business apps.'),
    tags: ['simple', 'gradient', 'mac'], cats: ['productivity', 'business', 'developer tools'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 3.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -0.8, lineHeight: 1.08, subSize: 1.6, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'linear', c1: '#6a3df5', c2: '#3b1f9a', angle: 160 }, device: { frame: 'browser', color: 'graphite', shadow: 50, fit: 'top' },
    screens: S([['mac-left', 'All your tasks,\n[one] board', 'Tüm görevlerin,\n[tek] pano', 'Lists, cards, checklists', 'Liste, kart, kontrol listesi'], ['mac', 'Visualise your\nwork your [way]', 'İşini [kendi]\ntarzında gör', null, null, { dev: { x: 8, y: 32, w: 84 } }], ['mac-left', 'Integrate\n[everything]', '[Her şeyi]\nentegre et', 'Calendar, chat, files', 'Takvim, sohbet, dosya'], ['mac', 'Plan with\n[power-ups]', '[Eklentilerle]\nplanla', null, null, { dev: { x: 8, y: 32, w: 84 } }], ['mac-left', 'Collaborate\nin [real time]', '[Gerçek zamanlı]\nişbirliği', 'Comments and mentions', 'Yorum ve bahsetme']]) }, MAC));
  defineTemplate(Object.assign({ key: 'mac-slack', name: 'MacOS Messaging', desc: T('Koyu mor zemin, beyaz kalın başlık ve geniş tarayıcı penceresi; Mac için mesajlaşma ve ekip uygulamaları.', 'Deep purple background, bold white headline and a wide browser window; Mac set for messaging and team apps.'),
    tags: ['simple', 'dark', 'mac'], cats: ['business', 'social networking', 'productivity'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 3.6, color: '#ffffff', accent: '#ecb22e', letterSpacing: -0.8, lineHeight: 1.08, subSize: 1.6, subColor: '#ffffff', subOpacity: 80 },
    bg: { type: 'solid', c1: '#3f0e40' }, device: { frame: 'browser', color: 'graphite', shadow: 50, fit: 'top' },
    screens: S([['mac-left', 'Work\n[smarter]\ntogether', 'Birlikte daha\n[akıllı]\nçalış', 'Channels for every project', 'Her projeye kanal'], ['mac', 'Bring the whole\nteam [together]', 'Tüm ekibi\n[bir araya] getir', null, null, { dev: { x: 8, y: 32, w: 84 } }], ['mac-left', 'Decisions,\n[documented]', 'Kararlar,\n[belgelenmiş]', 'Threads keep context', 'Konular bağlamı korur'], ['mac', 'From startup\nto [delivery]', 'Başlangıçtan\n[teslimata]', null, null, { dev: { x: 8, y: 32, w: 84 } }], ['mac-left', 'Loved by\n[teams]', '[Ekiplerin]\nsevdiği', 'Free for small teams', 'Küçük ekiplere ücretsiz']]) }, MAC));
  defineTemplate(Object.assign({ key: 'mac-lime', name: 'MacOS Lime', desc: T('Limon yeşili düz zemin, siyah kalın başlık ve tarayıcı penceresi; Mac için canlı, sade set.', 'Flat lime-green background, bold black headline and a browser window; lively, clean Mac set.'),
    tags: ['simple', 'colourful', 'mac'], cats: ['utilities', 'photo & video', 'productivity'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 3.4, color: '#111111', accent: '#111111', letterSpacing: -0.8, lineHeight: 1.08, subSize: 1.6, subOpacity: 70 },
    bg: { type: 'solid', c1: '#9cff4a' }, device: { frame: 'browser', color: 'graphite', shadow: 45, fit: 'top' },
    screens: S([['mac', 'Photo messaging\nyou can [trust]', '[Güvenebileceğin]\nfotoğraf mesajlaşma', null, null, { dev: { x: 8, y: 30, w: 84 } }], ['mac', 'Send photos, videos\n& [updates] instantly', 'Fotoğraf, video ve\n[güncelleme] anında', null, null, { dev: { x: 8, y: 30, w: 84 } }], ['mac', 'Real conversations,\nreal [connections]', 'Gerçek sohbet,\ngerçek [bağ]', null, null, { dev: { x: 8, y: 30, w: 84 } }], ['mac', 'Multiple chats,\nmissing [nothing]', 'Çok sohbet,\n[hiçbir şeyi] kaçırma', null, null, { dev: { x: 8, y: 30, w: 84 } }], ['mac', 'Stay close,\nno matter the [distance]', '[Mesafe] ne olursa\nolsun yakın kal', null, null, { dev: { x: 8, y: 30, w: 84 } }]]) }, MAC));
})();
