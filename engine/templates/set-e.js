/* Set E — appscreens kataloğu 125-140 (Discord … Free Mono) yeniden çizim; metinler örnek, EN+TR. */
(function () {
  const T = (tr, en) => ({ en, tr });
  const S8 = (rows) => rows.map(([layout, en, tr, sub_en, sub_tr, extra]) => Object.assign({ layout, title: T(tr, en), sub: sub_en == null ? false : T(sub_tr || sub_en, sub_en) }, extra || {}));
  const ICON = (name, bg, color, x, y) => ({ kind: 'icon', x: x ?? 50, y: y ?? 4.5, size: 2.6, text: name, iconBg: bg, color });
  const solid = (c) => ({ bg: { type: 'solid', c1: c } });

  /* Discord — mor (blurple) gradyan, kalın beyaz başlık, beyaz cihaz */
  defineTemplate({ key: 'discord', name: 'Inspired by Discord', desc: T('Mor-mavi (blurple) gradyan zemin, ortalı kalın beyaz başlık ve beyaz cihaz. Topluluk, sohbet ve oyun uygulamaları için.', 'Blurple gradient background, centred bold white headline and a white device. For community, chat and gaming apps.'),
    tags: ['simple', 'gradient', 'bold'], cats: ['social networking', 'games', 'entertainment'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 5.4, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.2, lineHeight: 1.12, subSize: 2.8, subColor: '#ffffff', subOpacity: 80 },
    bg: { type: 'linear', c1: '#6c7cff', c2: '#4752c4', angle: 180 }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed', 'Browse through our stunning\ntemplates to find your\nfavourites', 'Çarpıcı şablonlar arasında\nfavorini bul', null],
      ['bleed', 'Enhance your ASO to improve\ndownloads and conversions', 'ASO\'nu güçlendir, indirme\nve dönüşümü artır', null],
      ['bleed', 'Create your own stunning\nstandout app store\nscreenshots', 'Çarpıcı, öne çıkan\nmağaza görsellerini oluştur', null],
      ['bleed', 'Offering incredible tools to\nhelp release your app to\nthe world', 'Uygulamanı dünyaya\nyayınlayacak araçlar', null],
      ['bleed', 'Export your perfectly crisp\nscreenshots ready for\nupload', 'Net görsellerini yüklemeye\nhazır dışa aktar', null],
      ['bleed', 'Voice channels\nthat feel live', 'Canlı hissettiren\nses kanalları', null],
      ['bleed', 'Servers for\nevery interest', 'Her ilgi alanına\nsunucu', null],
      ['bleed', 'Join\nfree', 'Ücretsiz\nkatıl', null],
    ]) });

  /* Zuri — mavi dalgalı gradyan, ince beyaz başlık, eğik beyaz cihaz */
  defineTemplate({ key: 'zuri', name: 'Zuri', desc: T('Mavi dalgalı mesh zemin, ortalı ince beyaz başlık; ilk karede eğik cihaz. Sosyal ve yaşam uygulamaları için.', 'Blue wavy mesh background, centred light white headline; tilted device on the first screen. For social and lifestyle apps.'),
    tags: ['simple', 'gradient', 'graphics'], cats: ['social networking', 'lifestyle', 'utilities'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 500, size: 5.2, color: '#ffffff', accent: '#ffffff', letterSpacing: -1, lineHeight: 1.15, subSize: 2.8, subColor: '#ffffff', subOpacity: 75 },
    bg: { type: 'mesh', c1: '#3b82f6', c2: '#1e3a8a', c3: '#60a5fa', variant: 1, pattern: 'waves', patternColor: '#ffffff', patternOpacity: 18 }, device: { frame: 'iphone-pro', color: 'white', shadow: 50, fit: 'top' },
    screens: S8([
      ['tilt', 'Bold Bright Templates\nReady For You', 'Cesur, parlak şablonlar\nseni bekliyor', null],
      ['bleed', 'Improve your ASO\nwith AppScreens', 'AppScreens ile\nASO\'nu geliştir', null],
      ['bleed', 'Show off your app in\nthe best way', 'Uygulamanı en iyi\nşekilde göster', null],
      ['bleed', 'Create your app\nstore screenshots', 'Mağaza görsellerini\noluştur', null],
      ['bleed', 'Incredible tools to\nhelp release your app', 'Uygulamanı yayınlayacak\nharika araçlar', null],
      ['tilt-r', 'Connect with\nyour crew', 'Ekibinle\nbağlan', null],
      ['bleed', 'Share\nmoments', 'Anları\npaylaş', null],
      ['bleed', 'Join\ntoday', 'Bugün\nkatıl', null],
    ]) });

  /* Elio — beyaz zemin, siyah başlık + her karede farklı renk vurgu, renkli çerçeveli cihaz */
  defineTemplate({ key: 'elio', name: 'Elio', desc: T('Beyaz zemin, sol hizalı siyah başlık ve her karede farklı renkte vurgu; cihaz gövdesi aynı renkte. Yaşam ve araç uygulamaları için.', 'White background, left-aligned black headline with a differently coloured emphasis per screen; the device body matches the colour. For lifestyle and utility apps.'),
    tags: ['simple', 'light', 'colourful'], cats: ['lifestyle', 'utilities', 'productivity'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 5.6, color: '#111111', accent: '#f26a3d', letterSpacing: -1.2, lineHeight: 1.12, subSize: 2.7, subOpacity: 65 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'coral', shadow: 35, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Create your\n[AppScreens] now!', '[AppScreens]\'ini\nşimdi oluştur!', 'Show your app how it should be seen', 'Uygulamanı hak ettiği gibi göster'],
      ['bleed-left', 'Create your\n[AppScreens] now!', '[AppScreens]\'ini\nşimdi oluştur!', 'Simple design and amazing features', 'Basit tasarım, harika özellikler', { titleStyle: { accent: '#1f7a5c' }, dev: { color: 'mint' } }],
      ['bleed-left', 'Create your\n[AppScreens] now!', '[AppScreens]\'ini\nşimdi oluştur!', 'Reduce your todos & use a template', 'İşi azalt, şablon kullan', { titleStyle: { accent: '#2f80ed' }, dev: { color: 'blue' } }],
      ['bleed-left', 'Create your\n[AppScreens] now!', '[AppScreens]\'ini\nşimdi oluştur!', 'Create your app store screenshots', 'Mağaza görsellerini oluştur', { titleStyle: { accent: '#e6b400' }, dev: { color: 'gold' } }],
      ['bleed-left', 'Create your\n[AppScreens] now!', '[AppScreens]\'ini\nşimdi oluştur!', 'Show your app how it should be seen', 'Uygulamanı hak ettiği gibi göster', { titleStyle: { accent: '#7b5cff' }, dev: { color: 'lilac' } }],
      ['bleed-left', 'Plan your\n[day]', '[Gününü]\nplanla', null],
      ['bleed-left', 'Track your\n[goals]', '[Hedeflerini]\nizle', null, null, { titleStyle: { accent: '#1f7a5c' }, dev: { color: 'mint' } }],
      ['bleed-left', 'Start\n[free]', '[Ücretsiz]\nbaşla', null, null, { titleStyle: { accent: '#2f80ed' }, dev: { color: 'blue' } }],
    ]) });

  /* Nori — turuncu→kırmızı gradyan, ince beyaz + kalın vurgu, laurel */
  defineTemplate({ key: 'nori', name: 'Nori', desc: T('Turuncu-kırmızı gradyan zemin, geniş aralıklı ince beyaz başlık ve kalın vurgu satırı; ilk karede laurel. Yemek ve yaşam uygulamaları için.', 'Orange-to-red gradient, wide-spaced light white headline with a bold emphasis line; laurel on the first screen. For food and lifestyle apps.'),
    tags: ['advanced', 'gradient', 'colourful', 'badges'], cats: ['food & drink', 'lifestyle', 'shopping'], theme: 'colourful', skill: 'advanced',
    style: { font: 'inter', weight: 400, size: 5.4, color: '#ffffff', accent: '#ffffff', letterSpacing: 1.5, lineHeight: 1.15, subSize: 2.8, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'linear', c1: '#ff8a3d', c2: '#e6233a', angle: 170 }, device: { frame: 'iphone-pro', color: 'white', shadow: 50, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Personalise\n[your screens]', 'Ekranlarını\n[kişiselleştir]', null, null, { titleStyle: { weight: 800, letterSpacing: -1, size: 6.4 }, dev: { x: 22, y: 30, w: 80, rot: 10 }, els: [{ kind: 'text', x: 20, y: 90, size: 2.6, text: T('Başla • oluştur\nşimdi', 'Start • create\nnow'), color: '#ffffff', weight: 500 }] }],
      ['bleed', 'Create your\n[application +]\n[screenshots]', 'Uygulamanı ve\n[görsellerini]\noluştur', null, null, { titleStyle: { weight: 800, letterSpacing: -1 }, els: [{ kind: 'laurel', x: 78, y: 26, size: 2, text: T('Editörün\nSeçimi', "Editors'\nChoice"), color: '#ffffff' }] }],
      ['bleed', 'Create your\n[application +]\n[screenshots]', 'Uygulamanı ve\n[görsellerini]\noluştur', null, null, { titleStyle: { weight: 800, letterSpacing: -1 } }],
      ['bleed', 'Create your\n[application +]\n[screenshots]', 'Uygulamanı ve\n[görsellerini]\noluştur', null, null, { titleStyle: { weight: 800, letterSpacing: -1 } }],
      ['bleed', 'Create your\n[application +]\n[screenshots]', 'Uygulamanı ve\n[görsellerini]\noluştur', null, null, { titleStyle: { weight: 800, letterSpacing: -1 } }],
      ['bleed', 'Order\n[in seconds]', '[Saniyede]\nsipariş', null, null, { titleStyle: { weight: 800, letterSpacing: -1 } }],
      ['bleed', 'Track\n[live]', '[Canlı]\ntakip', null, null, { titleStyle: { weight: 800, letterSpacing: -1 } }],
      ['bleed', 'Start\n[today]', '[Bugün]\nbaşla', null, null, { titleStyle: { weight: 800, letterSpacing: -1 } }],
    ]) });

  /* Tavo — koyu mavi/lacivert gradyan, ortalı beyaz başlık, altın çerçeveli cihaz, istatistik karesi */
  defineTemplate({ key: 'tavo', name: 'Tavo', desc: T('Mavi-lacivert dikey gradyan, ortalı kalın beyaz başlık; ilk karede sol hizalı, dördüncü karede büyük yüzdeli metin karesi. İş ve geliştirici uygulamaları için.', 'Blue-to-navy vertical gradient, centred bold white headline; left-aligned on the first screen and a big-percentage text screen on the fourth. For business and developer apps.'),
    tags: ['advanced', 'dark', 'gradient', 'text'], cats: ['business', 'developer tools', 'productivity'], theme: 'dark', skill: 'advanced',
    style: { font: 'inter', weight: 700, size: 5.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.2, lineHeight: 1.12, subSize: 2.8, subColor: '#ffffff', subOpacity: 80 },
    bg: { type: 'linear', c1: '#2f80ed', c2: '#0b1f5c', angle: 180 }, device: { frame: 'iphone-pro', color: 'gold', shadow: 50, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Manage\nScreenshots\nSeamlessly', 'Görselleri\nsorunsuz\nyönet', null],
      ['text-bottom', 'Refresh the way\nyou improve ASO', 'ASO\'yu geliştirme\nşeklini yenile', null, null, { dev: { x: 19, y: 2, w: 62 } }],
      ['text-top', 'Created by App\nDevelopers, we know\nwhat you need', 'Geliştiriciler yaptı,\nne gerektiğini biliyoruz', 'A revolutionary way to create your screens.', 'Ekranlarını oluşturmanın devrimci yolu.', { dev: null, els: [{ kind: 'text', x: 50, y: 42, size: 2.6, text: 'MAGIC LANE', color: '#ffffff', weight: 700 }, { kind: 'text', x: 50, y: 52, size: 2.6, text: 'ASO TECHNOLOGY', color: '#ffffff', weight: 700 }, { kind: 'text', x: 50, y: 62, size: 2.6, text: 'BUILD UP', color: '#ffffff', weight: 700 }], subBox: { y: 86 }, subStyle: { flow: false } }],
      ['text-top-left', 'We do [success],\nnot failure. Climb,\ndon\'t fall', '[Başarı] yaparız,\nbaşarısızlık değil.\nTırman, düşme', null, null, { titleStyle: { weight: 500, accent: '#ffffff' }, dev: null, els: [{ kind: 'text', x: 14, y: 40, size: 7, text: '70%', color: '#ffffff', weight: 800 }, { kind: 'quote', x: 50, y: 50, w: 84, size: 2.5, text: T('ziyaretçilerin %70\'i gördüğünü beğenmezse 3 saniyede sayfadan çıkar', 'of visitors drop from your app page within 3 seconds if they don\'t like what they see'), color: '#ffffff' }, { kind: 'text', x: 14, y: 64, size: 7, text: '50%', color: '#ffffff', weight: 800 }, { kind: 'quote', x: 50, y: 74, w: 84, size: 2.5, text: T('yüklemelerin %50\'si mağaza sayfası önizlemesinden gelir', 'of app installs come from your app store landing snapshot'), color: '#ffffff' }] }],
      ['full-bottom', 'Software made\njust for you.', 'Sadece senin için\nyazılım.', null, null, { bg: { type: 'linear', c1: '#3b5a8a', c2: '#0b1f5c', angle: 180 }, titleBox: { y: 8 } }],
      ['bleed', 'Analytics that\nmatter', 'Önemli\nanalizler', null],
      ['bleed', 'Ship\nfaster', 'Daha hızlı\nyayınla', null],
      ['bleed', 'Start\nfree', 'Ücretsiz\nbaşla', null],
    ]) });

  /* Stripe (2) — açık gri zemin, renkli yatay şerit, büyük harf ince başlık */
  defineTemplate({ key: 'stripe-mono', name: 'Stripe', desc: T('Açık gri zemin, cihazın arkasından geçen her karede farklı renkte yatay şerit; ilk karede büyük harfli geniş aralıklı başlık. Araç ve verimlilik uygulamaları için.', 'Light grey background with a horizontal colour stripe passing behind the device, a different colour per screen; uppercase wide-spaced title on the first screen. For utility and productivity apps.'),
    tags: ['advanced', 'light', 'graphics'], cats: ['utilities', 'productivity', 'business'], theme: 'light', skill: 'advanced',
    style: { font: 'inter', weight: 600, size: 5, color: '#111111', accent: '#2f80ed', letterSpacing: -0.8, lineHeight: 1.15, subSize: 2.7, subOpacity: 65 },
    bg: { type: 'solid', c1: '#f3f4f6' }, device: { frame: 'iphone-pro', color: 'black', shadow: 40, fit: 'top' },
    screens: S8([
      ['bleed', 'Ingenious', 'Dâhiyane', null, null, { titleStyle: { uppercase: true, letterSpacing: 3, size: 6, weight: 500 }, under: [{ kind: 'shape', shape: 'rect', x: 50, y: 58, w: 100, h: 3, color: '#5ce0d8', radius: 0, opacity: 100 }] }],
      ['bleed', 'AppScreens is the\n[smartest screenshot]\n[creator] in the world.', 'AppScreens dünyanın\n[en akıllı görsel]\naracı.', null, null, { under: [{ kind: 'shape', shape: 'rect', x: 50, y: 58, w: 100, h: 3, color: '#2f80ed', radius: 0, opacity: 100 }] }],
      ['bleed', 'Save hours! Design &\nexport all required devices\nat the same time!', 'Saat kazan! Tüm cihazları\naynı anda tasarla ve aktar!', null, null, { titleStyle: { accent: '#e6b400' }, under: [{ kind: 'shape', shape: 'rect', x: 50, y: 58, w: 100, h: 3, color: '#e6b400', radius: 0, opacity: 100 }] }],
      ['bleed', '[Inspiration] at the ready!\nStart with our [beautiful]\n[captivating] templates', '[İlham] hazır!\n[Büyüleyici] şablonlarla\nbaşla', null, null, { titleStyle: { accent: '#e0479e' }, under: [{ kind: 'shape', shape: 'rect', x: 50, y: 58, w: 100, h: 3, color: '#e0479e', radius: 0, opacity: 100 }] }],
      ['bleed', 'Play with [over 950 fonts],\nrich text, templates, [100\'s]\nof device & colour [combos]', '[950+ font], zengin metin,\nşablon ve [yüzlerce]\ncihaz-renk [kombinasyonu]', null, null, { titleStyle: { accent: '#1f7a5c' }, under: [{ kind: 'shape', shape: 'rect', x: 50, y: 58, w: 100, h: 3, color: '#1f7a5c', radius: 0, opacity: 100 }] }],
      ['bleed', 'Everything\nin [sync]', 'Her şey\n[eşitlenmiş]', null, null, { under: [{ kind: 'shape', shape: 'rect', x: 50, y: 58, w: 100, h: 3, color: '#5ce0d8', radius: 0, opacity: 100 }] }],
      ['bleed', 'Works\n[offline]', '[Çevrimdışı]\nçalışır', null, null, { under: [{ kind: 'shape', shape: 'rect', x: 50, y: 58, w: 100, h: 3, color: '#2f80ed', radius: 0, opacity: 100 }] }],
      ['bleed', 'Get\n[started]', '[Hemen]\nbaşla', null, null, { titleStyle: { accent: '#e6b400' }, under: [{ kind: 'shape', shape: 'rect', x: 50, y: 58, w: 100, h: 3, color: '#e6b400', radius: 0, opacity: 100 }] }],
    ]) });

  /* Senna — sıcak fotoğraf hissi (gradyan), serif beyaz başlık, eğik cihaz */
  defineTemplate({ key: 'senna', name: 'Senna', desc: T('Sıcak kahve tonlu gradyan (fotoğraf yerine), serif beyaz başlık ve eğik siyah cihaz. Kahve, yemek ve yaşam uygulamaları için.', 'Warm coffee-toned gradient (swap for a photo), serif white headline and a tilted black device. For coffee, food and lifestyle apps.'),
    tags: ['simple', 'serif', 'photo'], cats: ['food & drink', 'lifestyle', 'travel'], theme: 'dark', skill: 'simple',
    style: { font: 'lora', weight: 500, size: 5.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -0.5, lineHeight: 1.15, subFont: 'inter', subSize: 2.8, subColor: '#ffffff', subOpacity: 80, shadow: true },
    bg: { type: 'mesh', c1: '#7a5a3a', c2: '#2a1a10', c3: '#b08a5a', variant: 2, noise: 8 }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['tilt', 'Got an app & need\nscreenshots?', 'Uygulaman var, görsel\nmi lazım?', null],
      ['bleed', 'Make screenshots\ntoday', 'Bugün görsel\nyap', null, null, { bg: { type: 'mesh', c1: '#3a4a6a', c2: '#101a2a', c3: '#5a7aa0', variant: 1, noise: 8 } }],
      ['tilt-r', 'Make screenshots\ntoday', 'Bugün görsel\nyap', null],
      ['bleed', 'Make screenshots\ntoday', 'Bugün görsel\nyap', null, null, { bg: { type: 'mesh', c1: '#3a4a6a', c2: '#101a2a', c3: '#5a7aa0', variant: 1, noise: 8 } }],
      ['tilt', 'Make screenshots\ntoday', 'Bugün görsel\nyap', null],
      ['bleed', 'Order your\nusual', 'Her zamankini\nsipariş et', null, null, { bg: { type: 'mesh', c1: '#3a4a6a', c2: '#101a2a', c3: '#5a7aa0', variant: 1, noise: 8 } }],
      ['tilt-r', 'Find a café\nnearby', 'Yakında bir\nkafe bul', null],
      ['bleed', 'Start\ntoday', 'Bugün\nbaşla', null, null, { bg: { type: 'mesh', c1: '#3a4a6a', c2: '#101a2a', c3: '#5a7aa0', variant: 1, noise: 8 } }],
    ]) });

  /* OneDrive — beyaz zemin, mavi kalın başlık, beyaz cihaz, alt mavi dalga */
  defineTemplate({ key: 'onedrive', name: 'Inspired by Microsoft OneDrive', desc: T('Beyaz zemin, ortalı mavi kalın başlık ve beyaz cihaz; altta mavi dalga şeridi, bir karede illüstrasyon alanı. Bulut, üretkenlik ve araç uygulamaları için.', 'White background, centred bold blue headline and a white device; a blue wave strip at the bottom and an illustration screen. For cloud, productivity and utility apps.'),
    tags: ['simple', 'light', 'graphics'], cats: ['productivity', 'utilities', 'business'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 5.6, color: '#0b62d6', accent: '#0b62d6', letterSpacing: -1.2, lineHeight: 1.12, subSize: 2.8, subOpacity: 65 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'white', shadow: 40, fit: 'top' },
    screens: S8([
      ['small', 'Awesome Screens', 'Harika Ekranlar', null, null, { under: [{ kind: 'shape', shape: 'blob', x: 50, y: 100, w: 140, h: 30, color: '#3b8fff', opacity: 100 }] }],
      ['small', 'Screenshot Maker', 'Görsel Üretici', null, null, { under: [{ kind: 'shape', shape: 'blob', x: 50, y: 100, w: 140, h: 30, color: '#3b8fff', opacity: 100 }] }],
      ['small', 'Create Anything', 'Her Şeyi Oluştur', null, null, { under: [{ kind: 'shape', shape: 'blob', x: 50, y: 100, w: 140, h: 30, color: '#3b8fff', opacity: 100 }] }],
      ['small', '', '', null, null, { dev: null, els: [{ kind: 'emoji', x: 50, y: 44, size: 24, text: '🧘‍♀️' }, ICON('appscreens', '#0b62d6', '#0b62d6', 50, 80)], under: [{ kind: 'shape', shape: 'blob', x: 50, y: 100, w: 140, h: 30, color: '#3b8fff', opacity: 100 }] }],
      ['small', 'Screenshot Maker', 'Görsel Üretici', null, null, { under: [{ kind: 'shape', shape: 'blob', x: 50, y: 100, w: 140, h: 30, color: '#3b8fff', opacity: 100 }] }],
      ['small', 'Files Everywhere', 'Dosyalar Her Yerde', null, null, { under: [{ kind: 'shape', shape: 'blob', x: 50, y: 100, w: 140, h: 30, color: '#3b8fff', opacity: 100 }] }],
      ['small', 'Share Securely', 'Güvenle Paylaş', null, null, { under: [{ kind: 'shape', shape: 'blob', x: 50, y: 100, w: 140, h: 30, color: '#3b8fff', opacity: 100 }] }],
      ['small', 'Get Started', 'Hemen Başla', null, null, { under: [{ kind: 'shape', shape: 'blob', x: 50, y: 100, w: 140, h: 30, color: '#3b8fff', opacity: 100 }] }],
    ]) });

  /* Oryn — mor→mavi gradyan, kalın tek kelime beyaz başlık, metin bazen altta */
  defineTemplate({ key: 'oryn', name: 'Oryn', desc: T('Mor-mavi gradyan zemin, kalın tek kelime beyaz başlık ve alt açıklama; metin karelere göre üstte ya da altta, ilk karede ikon + ad. Araç ve üretkenlik uygulamaları için.', 'Purple-to-blue gradient, bold single-word white headline with a description; text top or bottom depending on the screen, icon + name first. For utility and productivity apps.'),
    tags: ['simple', 'gradient', 'bold'], cats: ['utilities', 'productivity', 'developer tools'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 7, color: '#ffffff', accent: '#ffffff', letterSpacing: -2, lineHeight: 1.05, subSize: 2.9, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'linear', c1: '#5b2ea6', c2: '#2f6bff', angle: 160 }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed', '', '', null, null, { dev: { y: 14 }, els: [ICON('appscreens', '#ffffff', '#ffffff', 50, 6)] }],
      ['bleed', 'Create', 'Oluştur', 'Create your screenshots here', 'Görsellerini burada oluştur'],
      ['text-bottom', 'Design', 'Tasarla', 'Create your screenshots here', 'Görsellerini burada oluştur', { dev: { x: 19, y: 4, w: 62 } }],
      ['bleed', 'Craft', 'İşle', 'Create your screenshots here', 'Görsellerini burada oluştur'],
      ['text-bottom', 'Build', 'Kur', 'Create your screenshots here', 'Görsellerini burada oluştur', { dev: { x: 19, y: 4, w: 62 } }],
      ['bleed', 'Sync', 'Eşitle', 'Everything, everywhere', 'Her şey, her yerde'],
      ['text-bottom', 'Share', 'Paylaş', 'With one tap', 'Tek dokunuşla', { dev: { x: 19, y: 4, w: 62 } }],
      ['bleed', 'Start', 'Başla', 'Free today', 'Bugün ücretsiz'],
    ]) });

  /* Lumi — açık mavi zemin, büyük harf geniş aralıklı mavi başlık, metin üst/alt */
  defineTemplate({ key: 'lumi', name: 'Lumi', desc: T('Açık gök mavisi zemin, büyük harfli geniş aralıklı koyu mavi başlık; metin karelere göre üstte ya da altta, beyaz cihaz. Seyahat, hava ve yaşam uygulamaları için.', 'Light sky-blue background, uppercase wide-spaced deep-blue headline; text top or bottom per screen, white device. For travel, weather and lifestyle apps.'),
    tags: ['simple', 'light', 'minimal'], cats: ['travel', 'weather', 'lifestyle'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 5.2, color: '#1e4e8c', accent: '#1e4e8c', uppercase: true, letterSpacing: 2, lineHeight: 1.2, subSize: 2.7, subColor: '#1e4e8c', subOpacity: 70 },
    bg: { type: 'solid', c1: '#bfe0f5' }, device: { frame: 'iphone-pro', color: 'white', shadow: 40, fit: 'top' },
    screens: S8([
      ['bleed', 'Create\nscreenshots', 'Görsel\noluştur', null],
      ['bleed', 'Templates\nready to use', 'Kullanıma hazır\nşablonlar', null],
      ['text-bottom', 'All in one\nsystem', 'Hepsi bir arada\nsistem', null, null, { dev: { x: 19, y: 4, w: 62 } }],
      ['text-bottom', 'Increase\ndownloads', 'İndirmeleri\nartır', null, null, { dev: { x: 19, y: 4, w: 62 } }],
      ['bleed', 'Create\nscreenshots', 'Görsel\noluştur', null],
      ['bleed', 'Plan your\ntrip', 'Gezini\nplanla', null],
      ['text-bottom', 'Check the\nweather', 'Havaya\nbak', null, null, { dev: { x: 19, y: 4, w: 62 } }],
      ['bleed', 'Start\ntoday', 'Bugün\nbaşla', null],
    ]) });

  /* Veya — koyu buz/dağ hissi gradyan, büyük harf beyaz başlık, beyaz cihaz */
  defineTemplate({ key: 'veya', name: 'Veya', desc: T('Koyu buz mavisi gradyan (fotoğraf yerine), büyük harfli beyaz başlık ve kalın vurgu; beyaz cihaz ortada. Seyahat, spor ve açık hava uygulamaları için.', 'Dark icy-blue gradient (swap for a photo), uppercase white headline with a bold emphasis; white device centred. For travel, sports and outdoor apps.'),
    tags: ['simple', 'dark', 'photo', 'bold'], cats: ['travel', 'sports', 'lifestyle'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 500, size: 4.8, color: '#ffffff', accent: '#ffffff', uppercase: true, letterSpacing: 0.5, lineHeight: 1.2, subSize: 2.7, subColor: '#ffffff', subOpacity: 75, shadow: true },
    bg: { type: 'mesh', c1: '#5a7a9a', c2: '#0b1a2a', c3: '#2a4a6a', variant: 0, noise: 8 }, device: { frame: 'iphone-pro', color: 'white', shadow: 55, fit: 'top' },
    screens: S8([
      ['bleed', 'Create [standout] app\nscreenshots like this', 'Böyle [öne çıkan]\ngörseller oluştur', null, null, { titleStyle: { hlStyle: 'none' } }],
      ['bleed', 'Show off your app in\nthe [best] way', 'Uygulamanı [en iyi]\nşekilde göster', null, null, { titleStyle: { hlStyle: 'none' } }],
      ['bleed', 'Show off your app in\nthe [best] way', 'Uygulamanı [en iyi]\nşekilde göster', null, null, { titleStyle: { hlStyle: 'none' } }],
      ['bleed', 'Create [standout] app\nscreenshots like this', 'Böyle [öne çıkan]\ngörseller oluştur', null, null, { titleStyle: { hlStyle: 'none' } }],
      ['bleed', 'Create [standout] app\nscreenshots like this', 'Böyle [öne çıkan]\ngörseller oluştur', null, null, { titleStyle: { hlStyle: 'none' } }],
      ['bleed', 'Plan your\n[next] adventure', '[Sıradaki]\nmacerayı planla', null, null, { titleStyle: { hlStyle: 'none' } }],
      ['bleed', 'Track every\n[summit]', 'Her [zirveyi]\nkaydet', null, null, { titleStyle: { hlStyle: 'none' } }],
      ['bleed', 'Start\n[today]', '[Bugün]\nbaşla', null, null, { titleStyle: { hlStyle: 'none' } }],
    ]) });

  /* Vals — pembe pastel zemin, serif kırmızı başlık, kırmızı çerçeveli eğik cihazlar */
  defineTemplate({ key: 'vals', name: 'Vals', desc: T('Açık pembe zemin, serif kırmızı başlık; kırmızı gövdeli eğik cihazlar, laurel ve kalp süsü. Ev, yaşam ve flört uygulamaları için.', 'Light pink background, serif red headline; red-bodied tilted devices with a laurel and heart accent. For home, lifestyle and dating apps.'),
    tags: ['advanced', 'pastel', 'serif', 'multi layered'], cats: ['lifestyle', 'shopping', 'social networking'], theme: 'light', skill: 'advanced',
    style: { font: 'lora', weight: 700, size: 5.6, color: '#c8102e', accent: '#c8102e', letterSpacing: -0.5, lineHeight: 1.12, subFont: 'inter', subSize: 2.7, subColor: '#c8102e', subOpacity: 75 },
    bg: { type: 'solid', c1: '#fbd9df' }, device: { frame: 'iphone-pro', color: 'coral', shadow: 45, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Over 10 different\ndevices to chose\nfrom', 'Seçebileceğin\n10\'dan fazla\ncihaz', null, null, { dev: { x: 8, y: 30, w: 84, rot: 0 } }],
      ['bleed', '', '', null, null, { dev: { x: 4, y: 26, w: 84, rot: 12 }, els: [{ kind: 'laurel', x: 50, y: 12, size: 2.2, text: T('Editörün\nSeçimi', "Editors'\nChoice"), color: '#c8102e' }] }],
      ['text-bottom', 'Use beautiful\ndevice colours', 'Güzel cihaz\nrenkleri kullan', null, null, { titleBox: { x: 40, w: 56, align: 'right' }, dev: { x: -20, y: 2, w: 84, rot: 10 } }],
      ['bleed', '', '', null, null, { dev: { x: 12, y: 24, w: 84, rot: -12 }, els: [{ kind: 'emoji', x: 50, y: 10, size: 8, text: '🤍' }] }],
      ['text-bottom', 'Increase your\ndownloads', 'İndirmelerini\nartır', null, null, { titleBox: { x: 40, w: 56, align: 'right' }, dev: { x: -20, y: 2, w: 84, rot: 10 } }],
      ['bleed', 'Furnish your\nspace', 'Alanını\ndöşe', null],
      ['bleed', 'Save what\nyou love', 'Sevdiğini\nkaydet', null],
      ['bleed', 'Start\ntoday', 'Bugün\nbaşla', null],
    ]) });

  /* Free — 4 ücretsiz şablon, 5 ekran */
  const S5 = (rows) => S8(rows.slice(0, 5));
  defineTemplate({ key: 'free-calm', name: 'Free Inspired by Calm', desc: T('Ücretsiz. Açık mavi-mor gradyan, ortalı beyaz başlık ve siyah cihaz; 5 ekran.', 'Free. Light blue-to-purple gradient, centred white headline and a black device; 5 screens.'),
    tags: ['free', 'simple', 'gradient'], cats: ['health & fitness', 'lifestyle', 'productivity'], theme: 'colourful', skill: 'simple', free: true,
    style: { font: 'inter', weight: 700, size: 5.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.2, lineHeight: 1.12, subSize: 2.8, subColor: '#ffffff', subOpacity: 80 },
    bg: { type: 'linear', c1: '#4fa3ff', c2: '#6a3df5', angle: 180 }, device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S5([
      ['bleed', 'Screenshots to help\nyou sell more apps', 'Daha çok uygulama satmana\nyardım eden görseller', null],
      ['bleed', 'Screenshots to help\nyou sell more apps', 'Daha çok uygulama satmana\nyardım eden görseller', null],
      ['bleed', 'Screenshots to help\nyou sell more apps', 'Daha çok uygulama satmana\nyardım eden görseller', null],
      ['bleed', 'Screenshots to help\nyou sell more apps', 'Daha çok uygulama satmana\nyardım eden görseller', null],
      ['bleed', 'Screenshots to help\nyou sell more apps', 'Daha çok uygulama satmana\nyardım eden görseller', null],
    ]) });
  defineTemplate({ key: 'free-solis', name: 'Free Solis', desc: T('Ücretsiz. Her karede farklı canlı düz zemin, büyük harfli başlık ve siyah cihaz; 5 ekran.', 'Free. A different vivid flat colour per screen, uppercase headline and a black device; 5 screens.'),
    tags: ['free', 'simple', 'colourful', 'bold'], cats: ['social networking', 'entertainment', 'lifestyle'], theme: 'colourful', skill: 'simple', free: true,
    style: { font: 'inter', weight: 900, size: 5.4, color: '#ffffff', accent: '#ffffff', uppercase: true, letterSpacing: 0, lineHeight: 1.12, subSize: 2.8, subColor: '#ffffff', subOpacity: 85 },
    device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S5([
      ['bleed', 'Create [beautiful] app\nscreenshots like this', 'Böyle [güzel] uygulama\ngörselleri oluştur', null, null, solid('#e63946')],
      ['bleed', 'Show off your app in\nthe [best] way', 'Uygulamanı [en iyi]\nşekilde göster', null, null, Object.assign(solid('#5aa9ff'), { titleStyle: { accent: '#0b2a6b' } })],
      ['bleed', 'Create [standout] app\nscreenshots like this', 'Böyle [öne çıkan]\ngörseller oluştur', null, null, Object.assign(solid('#ffb703'), { titleStyle: { color: '#111111', accent: '#ffffff' } })],
      ['bleed', 'Show off your app in\nthe [best] way', 'Uygulamanı [en iyi]\nşekilde göster', null, null, Object.assign(solid('#8ecae6'), { titleStyle: { color: '#111111', accent: '#e63946' } })],
      ['bleed', 'Create [beautiful] app\nscreenshots like this', 'Böyle [güzel] uygulama\ngörselleri oluştur', null, null, Object.assign(solid('#ffde2e'), { titleStyle: { color: '#111111', accent: '#e63946' } })],
    ]) });
  defineTemplate({ key: 'free-white', name: 'Free White', desc: T('Ücretsiz. Beyaz zemin, siyah başlık ve mavi vurgu, alt açıklama; siyah cihaz, metin bazen altta; 5 ekran.', 'Free. White background, black headline with a blue emphasis and a description; black device, bottom text on some screens; 5 screens.'),
    tags: ['free', 'simple', 'light', 'minimal'], cats: ['utilities', 'productivity', 'business', 'lifestyle'], theme: 'light', skill: 'simple', free: true,
    style: { font: 'inter', weight: 800, size: 5.6, color: '#111111', accent: '#3b8fff', letterSpacing: -1.2, lineHeight: 1.12, subSize: 2.7, subOpacity: 65 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 35, fit: 'top' },
    screens: S5([
      ['bleed', '[AppScreens]', '[AppScreens]', null],
      ['bleed', 'Get [creative]', '[Yaratıcı] ol', 'Intuitive features, amazing results.', 'Sezgisel özellikler, harika sonuçlar.'],
      ['text-bottom', 'Amazing [designs]', 'Harika [tasarımlar]', 'Intuitive features, amazing results.', 'Sezgisel özellikler, harika sonuçlar.', { dev: { x: 19, y: 4, w: 62 } }],
      ['text-bottom', 'Flexible [pricing]', 'Esnek [fiyat]', 'Intuitive features, amazing results.', 'Sezgisel özellikler, harika sonuçlar.', { dev: { x: 19, y: 4, w: 62 } }],
      ['bleed', '[Apple] and [Android]', '[Apple] ve [Android]', 'Intuitive features, amazing results.', 'Sezgisel özellikler, harika sonuçlar.'],
    ]) });
  defineTemplate({ key: 'free-mono', name: 'Free Mono', desc: T('Ücretsiz. Koyu gri zemin, büyük harfli geniş aralıklı beyaz başlık ve açıklama; siyah cihaz; 5 ekran.', 'Free. Dark grey background, uppercase wide-spaced white headline with a description; black device; 5 screens.'),
    tags: ['free', 'simple', 'dark', 'minimal'], cats: ['utilities', 'productivity', 'business', 'lifestyle'], theme: 'dark', skill: 'simple', free: true,
    style: { font: 'inter', weight: 600, size: 4.6, color: '#ffffff', accent: '#ffffff', uppercase: true, letterSpacing: 3, lineHeight: 1.2, subSize: 2.6, subColor: '#ffffff', subOpacity: 70 },
    bg: { type: 'solid', c1: '#2b2d31' }, device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S5([
      ['bleed', 'AppScreens', 'AppScreens', null],
      ['bleed', 'World class', 'Dünya çapında', 'Intuitive design and powerful features.', 'Sezgisel tasarım, güçlü özellikler.'],
      ['bleed', 'Options', 'Seçenekler', 'Intuitive design and powerful features.', 'Sezgisel tasarım, güçlü özellikler.'],
      ['bleed', 'Simplistic', 'Sade', 'Intuitive design and powerful features.', 'Sezgisel tasarım, güçlü özellikler.'],
      ['bleed', 'Limitless', 'Sınırsız', 'Intuitive design and powerful features.', 'Sezgisel tasarım, güçlü özellikler.'],
    ]) });
})();
