/* Set C — appscreens kataloğu 61-92 (Underlines … Flo) yeniden çizim; metinler örnek, EN+TR. */
(function () {
  const T = (tr, en) => ({ en, tr });
  const S8 = (rows) => rows.map(([layout, en, tr, sub_en, sub_tr, extra]) => Object.assign({ layout, title: T(tr, en), sub: sub_en == null ? false : T(sub_tr || sub_en, sub_en) }, extra || {}));
  const ICON = (name, bg, color, x, y) => ({ kind: 'icon', x: x ?? 50, y: y ?? 4.5, size: 2.6, text: name, iconBg: bg, color });
  const solid = (c) => ({ bg: { type: 'solid', c1: c } });

  /* Underlines — beyaz zemin, yeşil alt çizgi vurgu, yeşil çerçeveli cihaz, ilk kare koyu yeşil */
  defineTemplate({ key: 'underlines', name: 'Underlines', desc: T('Beyaz zemin, yeşil alt çizgili vurgu ve yeşil çerçeveli cihaz; ilk kare koyu yeşil, ikon + ad ve laurel ile. Yemek, sağlık ve yaşam uygulamaları için.', 'White background, green underline emphasis and a green-framed device; dark green first screen with icon + name and a laurel. For food, health and lifestyle apps.'),
    tags: ['simple', 'light', 'underline', 'badges'], cats: ['food & drink', 'health & fitness', 'lifestyle', 'shopping'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 6.4, color: '#111111', accent: '#1db87a', hlStyle: 'underline', hlTextColor: '#111111', letterSpacing: -1.5, lineHeight: 1.08, subSize: 3, subOpacity: 70 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'mint', shadow: 40, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Improve\nyour new\napp store\npresence', 'Yeni\nmağaza\nvarlığını\ngeliştir', null, null, Object.assign(solid('#123d2a'), { titleStyle: { color: '#ffffff', size: 8 }, titleBox: { y: 10 }, dev: null, els: [ICON('appscreens', '#1db87a', '#ffffff', 16, 4.5), { kind: 'laurel', x: 22, y: 86, size: 2.2, text: T('Apple\nÖne Çıkan', 'Featured by\nApple'), color: '#ffffff' }] })],
      ['bleed', 'Stand out from\nthe [crowd]', '[Kalabalıktan]\nsıyrıl', null],
      ['bleed', 'Elevate your\nfirst [impression]', 'İlk [izlenimini]\nyükselt', null],
      ['bleed', 'Show off your\napps [features]', 'Uygulamanın\n[özelliklerini] göster', null],
      ['bleed', 'Start with our\n[templates]', '[Şablonlarımızla]\nbaşla', null],
      ['bleed', 'Order in\n[seconds]', '[Saniyeler] içinde\nsipariş', null],
      ['bleed', 'Track your\n[delivery]', '[Teslimatını]\ntakip et', null],
      ['bleed', 'Try it\n[free]', '[Ücretsiz]\ndene', null],
    ]) });

  /* TikTok — beyaz zemin, ince siyah başlık, siyah düz cihaz */
  defineTemplate({ key: 'tiktok', name: 'Inspired by TikTok', desc: T('Beyaz zemin, ortalı orta kalınlıkta siyah başlık ve düz siyah cihaz. Sosyal ve video uygulamaları için sade.', 'White background, centred medium-weight black headline and a straight black device. Clean for social and video apps.'),
    tags: ['simple', 'light', 'minimal'], cats: ['social networking', 'photo & video', 'entertainment'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 600, size: 5.4, color: '#111111', accent: '#fe2c55', letterSpacing: -1, lineHeight: 1.12, subSize: 2.8, subOpacity: 65 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 35, fit: 'top' },
    screens: S8([
      ['bleed', 'Join thousands of devs\nusing AppScreens.', 'Binlerce geliştiriciye\nkatıl.', null],
      ['bleed', 'Quick automatic App\nStore upload', 'Hızlı otomatik\nApp Store yükleme', null],
      ['bleed', 'Use our AI creation\ntool for ASO captions.', 'ASO başlıkları için\nAI aracını kullan.', null],
      ['bleed', 'Create your own App\nStore screenshots', 'Kendi mağaza\ngörsellerini oluştur', null],
      ['bleed', 'Localize and release\nyour app to the world.', 'Yerelleştir, dünyaya\nyayınla.', null],
      ['bleed', 'Duet with\nyour friends', 'Arkadaşlarınla\ndüet yap', null],
      ['bleed', 'Trends,\nevery day', 'Her gün\ntrendler', null],
      ['bleed', 'Start\nposting', 'Paylaşmaya\nbaşla', null],
    ]) });

  /* Univerbal — beyaz zemin, renkli kutu (pastel) içinde başlık, renkli çerçeveli cihaz */
  defineTemplate({ key: 'univerbal', name: 'Inspired by Univerbal AI Language Learning', desc: T('Beyaz zemin, her karede farklı pastel kutu içinde başlık ve aynı renkte çerçeveli cihaz; ilk karede "App of the Year" laureli. Dil ve eğitim uygulamaları için.', 'White background, headline in a different pastel box per screen with a matching device frame; "App of the Year" laurel on the first screen. For language and education apps.'),
    tags: ['advanced', 'light', 'colourful', 'box', 'badges'], cats: ['education', 'reference', 'productivity'], theme: 'light', skill: 'advanced',
    style: { font: 'inter', weight: 700, size: 5.6, color: '#111111', accent: '#111111', letterSpacing: -1, lineHeight: 1.12, box: 'solid', boxColor: '#b9f5cf', boxRadius: 2, subSize: 2.8, subOpacity: 70, titleBox: { x: 12, w: 76, h: 14 } },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'mint', shadow: 40, fit: 'top' },
    screens: S8([
      ['bleed', 'Design your [app\nstore page] with\nyour fave aso tool', 'Mağaza sayfanı\nsevdiğin ASO aracıyla\ntasarla', null, null, { titleStyle: { box: 'none', accent: '#2f80ed', size: 5.8 }, titleBox: { x: 6, w: 88, y: 12 }, dev: null, els: [ICON('appscreens', '#111111', '#111111'), { kind: 'laurel', x: 50, y: 52, size: 2.6, text: T('Apple\nYılın Uygulaması', 'Apple\nApp of the Year'), color: '#111111' }, { kind: 'pill', x: 50, y: 88, size: 2.6, text: T('70.000+ profesyonele katıl', 'Join 70,000+ professionals today'), emoji: '', bg: '#cfe4ff', color: '#111111', rot: 0 }] }],
      ['bleed', 'Boost your apps\nconversions', 'Uygulama\ndönüşümünü artır', null],
      ['bleed', 'Improve your app\nstore page', 'Mağaza sayfanı\ngeliştir', null, null, { titleStyle: { boxColor: '#fff3b0' }, dev: { color: 'gold' } }],
      ['bleed', 'Create ai\npowered captions', 'AI destekli\nbaşlıklar', null, null, { titleStyle: { boxColor: '#e4d9ff' }, dev: { color: 'lilac' } }],
      ['bleed', 'Show off what\nyour made of', 'Neler yapabildiğini\ngöster', null, null, { titleStyle: { box: 'none' } }],
      ['bleed', 'Speak from\nday one', 'İlk günden\nkonuş', null, null, { titleStyle: { boxColor: '#ffd9e6' }, dev: { color: 'coral' } }],
      ['bleed', 'Practice with\nAI tutors', 'AI öğretmenlerle\npratik', null],
      ['bleed', 'Start\nfree', 'Ücretsiz\nbaşla', null, null, { titleStyle: { boxColor: '#fff3b0' }, dev: { color: 'gold' } }],
    ]) });

  /* Sora — lila-pembe pastel dönüşümlü, çerçevesiz ekran kartı, kalın başlık */
  defineTemplate({ key: 'sora', name: 'Sora', desc: T('Lila, pembe ve mavi pastel zeminler; ortalı kalın siyah başlık ve çerçevesiz yuvarlak ekran kartı. ASO/araç ve yaşam uygulamaları için.', 'Lilac, pink and blue pastel backgrounds; centred bold black headline and a frameless rounded screen card. For utilities and lifestyle apps.'),
    tags: ['simple', 'pastel', 'card'], cats: ['utilities', 'lifestyle', 'business'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 6.4, color: '#111111', accent: '#7b5cff', letterSpacing: -1.5, lineHeight: 1.08, subSize: 3, subOpacity: 70 },
    bg: { type: 'solid', c1: '#e7e0ff' }, device: { frame: 'none', fit: 'top', shadow: 40, radius: 8 },
    screens: S8([
      ['text-top', 'Create\napp store\nscreenshots', 'Mağaza\ngörselleri\noluştur', 'The place to boost your ASO by 35%', 'ASO\'nu %35 artıracağın yer', { dev: null, els: [{ kind: 'emoji', x: 50, y: 70, size: 22, text: '🧑‍💻' }] }],
      ['card', 'Boost your\nconversions', 'Dönüşümlerini\nartır', null, null, Object.assign(solid('#ffe0ec'), { titleBox: { align: 'center' }, dev: { x: 12, y: 24, w: 76 } })],
      ['card', 'Find your\ntemplate', 'Şablonunu\nbul', null, null, Object.assign(solid('#e7e0ff'), { titleBox: { align: 'center' }, dev: { x: 12, y: 24, w: 76 } })],
      ['card', 'Stand out in\nthe crowd', 'Kalabalıkta\nöne çık', null, null, Object.assign(solid('#dfe9ff'), { titleBox: { align: 'center' }, dev: { x: 12, y: 24, w: 76 } })],
      ['card', 'Get more\ndownloads', 'Daha çok\nindirme', null, null, Object.assign(solid('#ffe0ec'), { titleBox: { align: 'center' }, dev: { x: 12, y: 24, w: 76 } })],
      ['card', 'Localise\nin minutes', 'Dakikalar içinde\nyerelleştir', null, null, Object.assign(solid('#e7e0ff'), { titleBox: { align: 'center' }, dev: { x: 12, y: 24, w: 76 } })],
      ['card', 'Every\nsize', 'Her\nboyut', null, null, Object.assign(solid('#dfe9ff'), { titleBox: { align: 'center' }, dev: { x: 12, y: 24, w: 76 } })],
      ['card', 'Start\ntoday', 'Bugün\nbaşla', null, null, Object.assign(solid('#ffe0ec'), { titleBox: { align: 'center' }, dev: { x: 12, y: 24, w: 76 } })],
    ]) });

  /* Pinterest — beyaz, siyah başlık + her karede farklı renkli vurgu, düz cihaz */
  defineTemplate({ key: 'pinterest', name: 'Inspired by Pinterest', desc: T('Beyaz zemin, ortalı siyah başlık ve her karede farklı renkte vurgu kelimesi; ilk kare tam kare fotoğraf. Moda, alışveriş ve ilham uygulamaları için.', 'White background, centred black headline with a differently coloured emphasis on every screen; a full photo on the first screen. For fashion, shopping and inspiration apps.'),
    tags: ['simple', 'light', 'colourful'], cats: ['shopping', 'lifestyle', 'photo & video'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 6.2, color: '#111111', accent: '#8e5cf6', letterSpacing: -1.5, lineHeight: 1.1, subSize: 2.9, subOpacity: 70 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 35, fit: 'top' },
    screens: S8([
      ['bleed', 'Create\n[your project]', '[Projeni]\noluştur', null, null, { dev: { frame: 'none', fit: 'cover', x: 0, y: 30, w: 100, shadow: 0 } }],
      ['bleed', 'Try\n[new layouts]', '[Yeni düzenler]\ndene', null, null, { titleStyle: { accent: '#c0392b' } }],
      ['bleed', 'Discover\n[templates]', '[Şablonları]\nkeşfet', null, null, { titleStyle: { accent: '#e0245e' } }],
      ['bleed', 'Boost\n[downloads]', '[İndirmeleri]\nartır', null, null, { titleStyle: { accent: '#e67e22' } }],
      ['bleed', 'One\n[design]', 'Tek\n[tasarım]', null, null, { titleStyle: { accent: '#8e5cf6' } }],
      ['bleed', 'Save\n[ideas]', '[Fikirleri]\nkaydet', null, null, { titleStyle: { accent: '#16a085' } }],
      ['bleed', 'Shop\n[the look]', '[Görünümü]\nsatın al', null, null, { titleStyle: { accent: '#c0392b' } }],
      ['bleed', 'Get\n[inspired]', '[İlham]\nal', null, null, { titleStyle: { accent: '#e0245e' } }],
    ]) });

  /* Uber — siyah zemin, ince beyaz başlık sol, beyaz cihaz */
  defineTemplate({ key: 'uber', name: 'Inspired by Uber', desc: T('Siyah zemin, sol hizalı ince beyaz başlık ve beyaz çerçeveli cihaz. Ulaşım, teslimat ve hizmet uygulamaları için.', 'Black background, left-aligned regular white headline and a white-framed device. For mobility, delivery and service apps.'),
    tags: ['simple', 'dark', 'minimal'], cats: ['travel', 'navigation', 'food & drink', 'utilities'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 500, size: 6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.2, lineHeight: 1.1, subSize: 2.9, subColor: '#ffffff', subOpacity: 65 },
    bg: { type: 'solid', c1: '#000000' }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Request\nASO\nanywhere,\nanytime', 'ASO\'yu\nher yerde,\nher zaman\niste', null, null, { titleStyle: { size: 8.4, weight: 600 }, dev: null, els: [{ kind: 'emoji', x: 50, y: 72, size: 22, text: '🚘' }] }],
      ['bleed-left', 'Choose your\ndestination', 'Varış noktanı\nseç', null],
      ['bleed-left', 'Pick your next\nride', 'Sıradaki yolculuğunu\nseç', null],
      ['bleed-left', 'See price\nestimates', 'Fiyat tahminlerini\ngör', null],
      ['bleed-left', 'Share your\ntrip', 'Yolculuğunu\npaylaş', null],
      ['bleed-left', 'Pay\nyour way', 'İstediğin gibi\nöde', null],
      ['bleed-left', 'Safety\nfirst', 'Önce\ngüvenlik', null],
      ['bleed-left', 'Ride\nnow', 'Şimdi\nçağır', null],
    ]) });

  /* Musixmatch — turuncu düz zemin, beyaz başlık, siyah cihaz, ilk kare eğik */
  defineTemplate({ key: 'musixmatch', name: 'Inspired by Musixmatch', desc: T('Turuncu düz zemin, ortalı beyaz başlık; ilk karede ikon + ad ve eğik siyah cihaz. Müzik ve eğlence uygulamaları için.', 'Flat orange background, centred white headline; icon + name and a tilted black device on the first screen. For music and entertainment apps.'),
    tags: ['simple', 'colourful', 'bold'], cats: ['music', 'entertainment', 'lifestyle'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 6.2, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.5, lineHeight: 1.1, subSize: 3, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'solid', c1: '#ff5a1f' }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['text-top-left', 'All the features\n[you love]', '[Sevdiğin]\ntüm özellikler', 'Translated in 72 languages', '72 dile çevrildi', { dev: { x: 22, y: 36, w: 74, rot: -12 }, els: [ICON('appscreens', '#ffffff', '#ffffff', 14, 4.5)], titleBox: { y: 9 } }],
      ['tilt', 'Crisp templates\nready to go', 'Hazır, net\nşablonlar', null],
      ['bleed', 'Boost conversions\nby up to 35%', 'Dönüşümü %35\'e\nkadar artır', null],
      ['bleed', 'One design for all\noutput sizes', 'Her boyuta\ntek tasarım', null],
      ['bleed', 'Automatic App\nStore uploads', 'Otomatik App\nStore yükleme', null],
      ['bleed', 'Lyrics in\nreal time', 'Gerçek zamanlı\nsözler', null],
      ['bleed', 'Identify any\nsong', 'Her şarkıyı\ntanı', null],
      ['bleed', 'Sing\nalong', 'Birlikte\nsöyle', null],
    ]) });

  /* ChatGPT — açık gri zemin, ince siyah başlık, beyaz cihaz, ilk kare metin */
  defineTemplate({ key: 'chatgpt', name: 'Inspired by ChatGPT', desc: T('Açık gri zemin, ortalı ince siyah başlık ve beyaz cihaz; ilk karede üç satırlık manifesto ve alt açıklama. Yapay zekâ ve verimlilik uygulamaları için.', 'Light grey background, centred regular black headline and a white device; a three-line manifesto with a description on the first screen. For AI and productivity apps.'),
    tags: ['simple', 'light', 'minimal'], cats: ['productivity', 'utilities', 'education'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 500, size: 4.8, color: '#111111', accent: '#111111', letterSpacing: -0.8, lineHeight: 1.15, subSize: 2.8, subOpacity: 65 },
    bg: { type: 'solid', c1: '#f3f4f6' }, device: { frame: 'iphone-pro', color: 'white', shadow: 30, fit: 'top' },
    screens: S8([
      ['text-only', 'Get screenshots.\nFind inspiration.\nBe more\nproductive.', 'Görsel al.\nİlham bul.\nDaha üretken ol.', 'Just try and AppScreens can help with brainstorming, designing, creating and more.', 'Dene: beyin fırtınası, tasarım, üretim ve daha fazlasında yardımcı olur.', { titleBox: { y: 8 }, titleStyle: { size: 6 }, subBox: { y: 84 }, subStyle: { flow: false } }],
      ['bleed', 'Join thousands using\nAppScreens.', 'Binlerce kişiye\nkatıl.', null, null, solid('#dbeafe')],
      ['bleed', 'Automatic upload to\nApp Stores.', 'Mağazalara\notomatik yükleme.', null],
      ['bleed', 'Highly customizable\nlayouts.', 'Son derece\nözelleştirilebilir düzenler.', null, null, solid('#e0e7ff')],
      ['bleed', 'Try AI restyling,\nin real-time.', 'AI ile yeniden\nstil, anında.', null],
      ['bleed', 'Ask\nanything.', 'Her şeyi\nsor.', null, null, solid('#dbeafe')],
      ['bleed', 'Talk with\nvoice.', 'Sesle\nkonuş.', null],
      ['bleed', 'Free to\nstart.', 'Ücretsiz\nbaşla.', null, null, solid('#e0e7ff')],
    ]) });

  /* Auralis — krem/koyu yeşil dönüşümlü, serif başlık, alt çizgi vurgu */
  defineTemplate({ key: 'auralis', name: 'Auralis', desc: T('Krem ve koyu yeşil dönüşümlü zeminler, serif başlık ve alt çizgili vurgu; cihaz alttan taşar. Odak, üretkenlik ve dijital sağlık uygulamaları için.', 'Alternating cream and deep-green backgrounds, serif headline with an underlined emphasis; the device bleeds off the bottom. For focus, productivity and digital-wellbeing apps.'),
    tags: ['simple', 'serif', 'underline'], cats: ['productivity', 'health & fitness', 'lifestyle'], theme: 'light', skill: 'simple',
    style: { font: 'fraunces', weight: 600, size: 6.2, color: '#1d2a22', accent: '#1d2a22', hlStyle: 'underline', letterSpacing: -0.8, lineHeight: 1.1, subSize: 2.8, subOpacity: 70 },
    bg: { type: 'solid', c1: '#f6efe4' }, device: { frame: 'iphone-pro', color: 'white', shadow: 35, fit: 'top' },
    screens: S8([
      ['bleed', 'Make space\nfor deep focus\nwith [Auralis]', '[Auralis] ile\nderin odağa\nyer aç', null],
      ['bleed', 'Start deep work\nwithout [interruptions]', '[Kesintisiz]\nderin çalışma', null, null, Object.assign(solid('#1d2a22'), { titleStyle: { color: '#f6efe4', accent: '#f6efe4' }, dev: { color: 'black' } })],
      ['bleed', 'Build [routines]\nthat begin focus', 'Odağı başlatan\n[rutinler]', null],
      ['bleed', 'Block [distractions]\nbefore they start', '[Dikkat dağıtıcıları]\nbaşlamadan engelle', null, null, Object.assign(solid('#1d2a22'), { titleStyle: { color: '#f6efe4', accent: '#f6efe4' }, dev: { color: 'black' } })],
      ['bleed', 'See your progress\nand best [focus hours]', 'İlerlemeni ve en iyi\n[odak saatlerini] gör', null],
      ['bleed', 'Gentle\n[reminders]', 'Nazik\n[hatırlatmalar]', null, null, Object.assign(solid('#1d2a22'), { titleStyle: { color: '#f6efe4', accent: '#f6efe4' }, dev: { color: 'black' } })],
      ['bleed', 'Works across\n[devices]', '[Cihazlar] arası\nçalışır', null],
      ['bleed', 'Try it\n[free]', '[Ücretsiz]\ndene', null, null, Object.assign(solid('#1d2a22'), { titleStyle: { color: '#f6efe4', accent: '#f6efe4' }, dev: { color: 'black' } })],
    ]) });

  /* Messenger — mavi→mor gradyan (set boyunca), beyaz başlık, beyaz cihaz */
  defineTemplate({ key: 'messenger', name: 'Inspired by Messenger', desc: T('Set boyunca maviden mora akan panoramik gradyan, ortalı beyaz başlık ve beyaz cihaz; ilk karede üç kelimelik manifesto. Mesajlaşma ve sosyal uygulamalar için.', 'A panoramic blue-to-purple gradient across the set, centred white headline and a white device; a three-word manifesto on the first screen. For messaging and social apps.'),
    tags: ['simple', 'gradient', 'panoramic'], cats: ['social networking', 'lifestyle', 'utilities'], theme: 'colourful', skill: 'simple', panorama: true,
    style: { font: 'inter', weight: 700, size: 5.8, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.2, lineHeight: 1.1, subSize: 2.9, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'linear', c1: '#0a84ff', c2: '#a14cff', angle: 90 }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Useful.\nSmart.\nExciting.', 'Faydalı.\nAkıllı.\nHeyecanlı.', null, null, { titleStyle: { size: 8.2, weight: 800 }, titleBox: { y: 9 }, els: [ICON('appscreens', '#ffffff', '#ffffff', 14, 4.5)] }],
      ['bleed', 'Join thousands\nusing AppScreens', 'Binlerce kullanıcıya\nkatıl', null],
      ['bleed', 'Automatic upload to\nthe App Stores', 'Mağazalara\notomatik yükleme', null],
      ['bleed', 'Add multiple layers\nand elements', 'Katman ve öğe\nekle', null],
      ['bleed', 'AI restyling for\nquick A/B testing', 'Hızlı A/B testi için\nAI stil', null],
      ['bleed', 'Video calls\nthat feel close', 'Yakın hissettiren\ngörüntülü arama', null],
      ['bleed', 'Themes for\nevery chat', 'Her sohbete\ntema', null],
      ['bleed', 'Say\nhello', 'Merhaba\nde', null],
    ]) });

  /* Headway — mavi zemin, beyaz kalın başlık, ilk kare maskot, beyaz cihaz */
  defineTemplate({ key: 'headway', name: 'Inspired by Headway', desc: T('Parlak mavi zemin, sol hizalı beyaz kalın başlık ve alt açıklama; ilk karede maskot alanı ve ikon + ad. Eğitim ve kitap özet uygulamaları için.', 'Bright blue background, left-aligned bold white headline with a description; mascot area and icon + name on the first screen. For education and book-summary apps.'),
    tags: ['simple', 'colourful', 'bold'], cats: ['education', 'books', 'productivity'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 6.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.5, lineHeight: 1.08, subSize: 3, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'solid', c1: '#1a6cff' }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Create\napp store\nscreenshots', 'Mağaza\ngörselleri\noluştur', 'The new home for your app to boost your ASO by 35%', 'ASO\'nu %35 artıracak yeni evi', { titleStyle: { size: 8 }, titleBox: { y: 9 }, dev: null, els: [ICON('appscreens', '#ffffff', '#ffffff', 14, 4.5), { kind: 'emoji', x: 50, y: 74, size: 24, text: '👾' }] }],
      ['bleed', 'Join thousands\nusing AppScreens', 'Binlerce kişiye\nkatıl', null],
      ['bleed', 'Automatic upload', 'Otomatik yükleme', 'To Apple Connect and Google Play', 'App Store Connect ve Google Play\'e'],
      ['bleed', 'Highly customized', 'Son derece özel', 'Add multiple layers and elements', 'Katman ve öğe ekle'],
      ['bleed', 'AI restyling', 'AI ile stil', 'For A/B testing to get results', 'Sonuç için A/B testi'],
      ['bleed', '15-minute\nsummaries', '15 dakikalık\nözetler', null],
      ['bleed', 'Daily\ninsights', 'Günlük\niçgörüler', null],
      ['bleed', 'Start\nreading', 'Okumaya\nbaşla', null],
    ]) });

  /* Bumble — sarı zemin, siyah büyük harf kalın başlık, siyah cihaz, ilk kare fotoğraf */
  defineTemplate({ key: 'bumble', name: 'Inspired by Bumble', desc: T('Sarı düz zemin, büyük harfli kalın siyah başlık ve siyah cihaz; ilk kare tam kare fotoğraf üstünde sarı başlık. Flört ve sosyal uygulamalar için.', 'Flat yellow background, uppercase bold black headline and a black device; the first screen is a full photo with a yellow title. For dating and social apps.'),
    tags: ['simple', 'colourful', 'bold', 'photo'], cats: ['social networking', 'lifestyle', 'entertainment'], theme: 'colourful', skill: 'simple',
    style: { font: 'bebas', weight: 400, size: 9, color: '#111111', accent: '#111111', uppercase: true, letterSpacing: 0.5, lineHeight: 0.98, subSize: 3, subOpacity: 70 },
    bg: { type: 'solid', c1: '#ffc629' }, device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S8([
      ['full-bottom', 'Make\nthe first\nmove', 'İlk\nadımı\nat', null, null, { bg: { type: 'linear', c1: '#3a2a1a', c2: '#1a1208', angle: 180 }, titleStyle: { color: '#ffc629', size: 10 }, titleBox: { align: 'left', y: 62 }, els: [ICON('appscreens', '#ffc629', '#ffffff', 16, 94)] }],
      ['bleed', 'Reach the\nworld', 'Dünyaya\nulaş', null],
      ['bleed', 'Stand out\nmore', 'Daha çok\nöne çık', null, null, { bg: { type: 'solid', c1: '#fff35c' } }],
      ['bleed', 'Find your\ntemplate', 'Şablonunu\nbul', null],
      ['bleed', 'Localise your\napp', 'Uygulamanı\nyerelleştir', null, null, { bg: { type: 'solid', c1: '#fff35c' } }],
      ['bleed', 'Match with\nintent', 'Niyetle\neşleş', null],
      ['bleed', 'Safe\nby design', 'Tasarımı gereği\ngüvenli', null, null, { bg: { type: 'solid', c1: '#fff35c' } }],
      ['bleed', 'Join\ntoday', 'Bugün\nkatıl', null],
    ]) });

  /* Carb Manager — yeşil pastel zemin, üst çip etiket, beyaz kalın başlık, beyaz cihaz */
  defineTemplate({ key: 'carb-manager', name: 'Inspired by Carb Manager', desc: T('Yeşil-nane düz zemin, üstte koyu yeşil etiket çipi ve beyaz kalın başlık; ilk karede laurel. Beslenme ve diyet uygulamaları için.', 'Flat green-mint background, dark green label chip above a bold white headline; laurel on the first screen. For nutrition and diet apps.'),
    tags: ['advanced', 'colourful', 'chips', 'badges'], cats: ['health & fitness', 'food & drink', 'medical'], theme: 'colourful', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 6.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.5, lineHeight: 1.08, subSize: 3, subColor: '#ffffff', subOpacity: 85, titleBox: { y: 9 } },
    bg: { type: 'solid', c1: '#37c48c' }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['text-top', 'Generate\nApp Store\nScreenshots\nHere', 'Mağaza\ngörsellerini\nburada\nüret', null, null, { titleStyle: { size: 7.4 }, dev: null, els: [ICON('appscreens', '#ffffff', '#ffffff'), { kind: 'emoji', x: 50, y: 66, size: 22, text: '🧘' }, { kind: 'laurel', x: 50, y: 90, size: 2.4, text: T('Apple\nÖne Çıkan', 'Featured on\nApple Home'), color: '#ffffff' }] }],
      ['bleed', 'Easy useful\ntemplates', 'Kolay, faydalı\nşablonlar', null, null, { els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('KENDİNİNKİNİ YAP', 'CREATE YOURS'), emoji: '', bg: '#1b6b4a', color: '#ffffff', rot: 0 }] }],
      ['bleed', 'See what\nworks best', 'En iyi neyin\nçalıştığını gör', null, null, { els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('A/B TESTİ', 'A/B TESTING'), emoji: '', bg: '#1b6b4a', color: '#ffffff', rot: 0 }] }],
      ['bleed', 'Elevate your\nscreenshots', 'Görsellerini\nyükselt', null, null, { els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('GELİŞTİR', 'BUILD UP'), emoji: '', bg: '#1b6b4a', color: '#ffffff', rot: 0 }] }],
      ['bleed', 'Crisp export\noptions', 'Net dışa aktarma\nseçenekleri', null, null, { els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('PİKSEL MÜKEMMEL', 'PIXEL PERFECT'), emoji: '', bg: '#1b6b4a', color: '#ffffff', rot: 0 }] }],
      ['bleed', 'Track\nevery carb', 'Her karbonhidratı\nizle', null, null, { els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('TAKİP', 'TRACK'), emoji: '', bg: '#1b6b4a', color: '#ffffff', rot: 0 }] }],
      ['bleed', 'Recipes\nyou\'ll love', 'Seveceğin\ntarifler', null, null, { els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('TARİFLER', 'RECIPES'), emoji: '', bg: '#1b6b4a', color: '#ffffff', rot: 0 }] }],
      ['bleed', 'Start\ntoday', 'Bugün\nbaşla', null, null, { els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('ÜCRETSİZ', 'FREE'), emoji: '', bg: '#1b6b4a', color: '#ffffff', rot: 0 }] }],
    ]) });

  /* Habit Tracking — krem zemin, koyu yeşil büyük harf başlık, kutu vurgu, rozetler */
  defineTemplate({ key: 'habit-tracking', name: 'Inspired by Habit Tracking', desc: T('Krem zemin, büyük harfli koyu yeşil başlık ve kutu içinde vurgu; çipler, alev rozeti ve dönüşümlü eğik cihaz. Alışkanlık ve verimlilik uygulamaları için.', 'Cream background, uppercase deep-green headline with a boxed emphasis; chips, a streak badge and an alternating tilted device. For habit and productivity apps.'),
    tags: ['advanced', 'light', 'bold', 'chips', 'badges'], cats: ['productivity', 'health & fitness', 'lifestyle'], theme: 'light', skill: 'advanced',
    style: { font: 'inter', weight: 900, size: 6.8, color: '#123d2a', accent: '#123d2a', hlStyle: 'marker', hlTextColor: '#f6efe4', uppercase: true, letterSpacing: -1, lineHeight: 1.08, subSize: 2.8, subOpacity: 75 },
    bg: { type: 'solid', c1: '#f6efe4' }, device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Small\nhabits.\nBig life\nchanges.', 'Küçük\nalışkanlıklar.\nBüyük\ndeğişimler.', 'Everything you want to build, in one place.', 'Kurmak istediğin her şey tek yerde.', { dev: { x: 16, y: 44, w: 68, rot: -8 } }],
      ['text-top', 'Tap.\n[Check.]\nRepeat.', 'Dokun.\n[İşaretle.]\nTekrarla.', 'The simplest way to win your day', 'Gününü kazanmanın en basit yolu', { dev: { x: 20, y: 40, w: 60, rot: 6 } }],
      ['text-top', 'Don\'t\nbreak the\nchain.', 'Zinciri\nkırma.', null, null, { dev: { x: 20, y: 40, w: 60, rot: -6 }, els: [{ kind: 'pill', x: 50, y: 28, size: 2.4, text: T('Serin süper gücün, koru.', 'Your streak is your superpower, protect it.'), emoji: '🔥', bg: '#ff7a1a', color: '#ffffff', rot: 0 }] }],
      ['text-top', 'The\nnumbers\ndon\'t lie', 'Rakamlar\nyalan\nsöylemez', null, null, { dev: { x: 20, y: 40, w: 60, rot: 6 }, els: [{ kind: 'pill', x: 66, y: 36, size: 2.2, text: T('7 GÜNÜN 6\'SI', '6 OF 7 DAYS'), emoji: '', bg: '#ff7a1a', color: '#ffffff', rot: 8 }] }],
      ['text-top', 'Built\n[around]\nyour life', 'Hayatının\n[etrafında]\nkuruldu', 'Create any habit in under 10 seconds', '10 saniyede alışkanlık oluştur', { dev: { x: 20, y: 40, w: 60, rot: -6 } }],
      ['text-top', 'Gentle\n[nudges]', 'Nazik\n[dürtmeler]', null, null, { dev: { x: 20, y: 40, w: 60, rot: 6 } }],
      ['text-top', 'Insights\nthat [help]', '[Yardımcı]\niçgörüler', null, null, { dev: { x: 20, y: 40, w: 60, rot: -6 } }],
      ['text-top', 'Start\n[today]', '[Bugün]\nbaşla', null, null, { dev: { x: 20, y: 40, w: 60, rot: 6 } }],
    ]) });

  /* Max Stream — lacivert zemin, ince beyaz + kalın satır, siyah cihaz, ilk iki kare kolaj */
  defineTemplate({ key: 'max-stream', name: 'Inspired by Max Stream', desc: T('Lacivert düz zemin, ortalı beyaz başlık (ince satır + kalın satır) ve siyah cihaz; ilk karelerde kolaj ve "App Store\'dan indir" rozeti. Yayın ve eğlence uygulamaları için.', 'Flat navy background, centred white headline (light line + bold line) and a black device; collage and a "Download on the App Store" badge on the opening screens. For streaming and entertainment apps.'),
    tags: ['simple', 'dark', 'badges'], cats: ['entertainment', 'photo & video', 'music'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 5.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.2, lineHeight: 1.12, subSize: 2.9, subColor: '#ffffff', subOpacity: 80 },
    bg: { type: 'solid', c1: '#0f1d5c' }, device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S8([
      ['full', '', '', null, null, { bg: { type: 'linear', c1: '#1b2fa0', c2: '#0f1d5c', angle: 180, pattern: 'grid', patternColor: '#ffffff', patternOpacity: 15 }, dev: { frame: 'none', fit: 'cover', x: 0, y: 0, w: 100, shadow: 0 } }],
      ['full-bottom', '', '', null, null, { bg: { type: 'linear', c1: '#1b2fa0', c2: '#0f1d5c', angle: 180, pattern: 'grid', patternColor: '#ffffff', patternOpacity: 15 }, dev: { frame: 'none', fit: 'cover', x: 0, y: 0, w: 100, shadow: 0 }, els: [{ kind: 'pill', x: 70, y: 92, size: 3, text: T('App Store\'dan indir', 'Download on the App Store'), emoji: '', bg: '#000000', color: '#ffffff', rot: 0 }] }],
      ['bleed', 'App Store Templates\n[It\'s All Here]', 'App Store Şablonları\n[Hepsi Burada]', null, null, { titleStyle: { weight: 400 } }],
      ['bleed', 'Your Favourite\n[App Store]', 'Favori\n[Mağazan]', null, null, { titleStyle: { weight: 400 } }],
      ['bleed', 'Designed for\n[Developers]', '[Geliştiriciler]\niçin tasarlandı', null, null, { titleStyle: { weight: 400 } }],
      ['bleed', 'Watch\n[anywhere]', '[Her yerde]\nizle', null, null, { titleStyle: { weight: 400 } }],
      ['bleed', 'Download\n[offline]', '[Çevrimdışı]\nindir', null, null, { titleStyle: { weight: 400 } }],
      ['bleed', 'Start\n[streaming]', '[Yayına]\nbaşla', null, null, { titleStyle: { weight: 400 } }],
    ]) });

  /* Time Tracking — açık pastel zeminler, siyah başlık + mavi vurgu, ilk karede IN/OUT */
  defineTemplate({ key: 'time-tracking', name: 'Inspired by Time Tracking', desc: T('Açık pastel zeminler (buz mavisi, sarı, pembe, nane), siyah başlık ve mavi vurgu; ilk karede büyük giriş/çıkış daireleri. Zaman takibi ve iş uygulamaları için.', 'Light pastel backgrounds (ice blue, yellow, pink, mint), black headline with a blue emphasis; big IN/OUT circles on the first screen. For time-tracking and business apps.'),
    tags: ['simple', 'pastel', 'colourful'], cats: ['business', 'productivity', 'utilities'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 5.6, color: '#111111', accent: '#2f80ed', letterSpacing: -1.2, lineHeight: 1.12, subSize: 2.8, subOpacity: 70 },
    bg: { type: 'solid', c1: '#e3f1ff' }, device: { frame: 'iphone-pro', color: 'white', shadow: 35, fit: 'top' },
    screens: S8([
      ['text-top', 'Easy & powerful\n[time tracking]', 'Kolay ve güçlü\n[zaman takibi]', null, null, { dev: null, els: [{ kind: 'shape', shape: 'circle', x: 50, y: 44, w: 40, h: 18.4, color: '#22c55e', opacity: 100 }, { kind: 'text', x: 50, y: 44, size: 5, text: 'IN', color: '#ffffff', weight: 800 }, { kind: 'shape', shape: 'circle', x: 50, y: 72, w: 40, h: 18.4, color: '#ef4444', opacity: 100 }, { kind: 'text', x: 50, y: 72, size: 5, text: 'OUT', color: '#ffffff', weight: 800 }] }],
      ['bleed', 'Easy clock in,\n[clock out]', 'Kolay giriş,\n[çıkış]', null, null, solid('#fff6d6')],
      ['bleed', 'Robust\n[reporting]', 'Güçlü\n[raporlama]', null, null, solid('#ffe4ec')],
      ['text-bottom', 'Easy [team]\nmanagement', 'Kolay [ekip]\nyönetimi', null, null, Object.assign(solid('#d9f7ec'), { dev: { x: 19, y: 4, w: 62 } })],
      ['bleed', 'Customised to\nyour [work routine]', '[İş rutinine]\nözel', null, null, solid('#e3f1ff')],
      ['bleed', 'Export to\n[payroll]', '[Bordroya]\naktar', null, null, solid('#fff6d6')],
      ['bleed', 'Works\n[offline]', '[Çevrimdışı]\nçalışır', null, null, solid('#ffe4ec')],
      ['bleed', 'Free for\n[small teams]', '[Küçük ekiplere]\nücretsiz', null, null, solid('#d9f7ec')],
    ]) });

  /* Lyra — siyah zemin, beyaz + renkli vurgu (pembe/mavi/sarı), laurel, düz cihaz */
  defineTemplate({ key: 'lyra', name: 'Lyra', desc: T('Siyah zemin, sol hizalı beyaz başlık ve her karede farklı renkte vurgu; ilk karede "as seen in" satırı ve laurel. Fitness ve sağlık uygulamaları için.', 'Black background, left-aligned white headline with a differently coloured emphasis per screen; an "as seen in" line and laurel on the first screen. For fitness and health apps.'),
    tags: ['simple', 'dark', 'colourful', 'badges'], cats: ['health & fitness', 'sports', 'lifestyle'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 600, size: 6.4, color: '#ffffff', accent: '#ff5ca8', letterSpacing: -1.5, lineHeight: 1.08, subSize: 2.8, subColor: '#ffffff', subOpacity: 70 },
    bg: { type: 'solid', c1: '#000000' }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['bleed-left', 'The [App\nStore] Tool', '[App Store]\nAracı', null, null, { titleStyle: { size: 8 }, dev: { x: 17, y: 40, w: 66 }, els: [{ kind: 'text', x: 50, y: 25, size: 2.4, text: T('görüldüğü yerler: Unicorn · Tapemeasure · Aloevera · Treelight', 'as seen in  Unicorn · Tapemeasure · Aloevera · Treelight'), color: '#ffffff', weight: 500 }, { kind: 'laurel', x: 50, y: 90, size: 2.4, text: T('Apple\nHealth', 'Works with\nApple Health'), color: '#ffffff' }] }],
      ['bleed-left', 'App Store ready\ntemplates with\n[one click].', '[Tek tıkla]\nmağazaya hazır\nşablonlar.', null, null, { titleStyle: { accent: '#ff5ca8' } }],
      ['bleed-left', 'Increase your\nASO and\n[downloads].', 'ASO\'nu ve\n[indirmeleri]\nartır.', null, null, { titleStyle: { accent: '#ff7ad9' } }],
      ['bleed-left', 'Create\nprofessional\n[screenshots].', 'Profesyonel\n[görseller]\noluştur.', null, null, { titleStyle: { accent: '#4cc9ff' } }],
      ['bleed-left', 'Export your\ndesign to all\n[devices].', 'Tasarımını tüm\n[cihazlara]\naktar.', null, null, { titleStyle: { accent: '#ffd23f' } }],
      ['bleed-left', 'Train with\n[coaches].', '[Koçlarla]\nantrenman.', null, null, { titleStyle: { accent: '#7cff6b' } }],
      ['bleed-left', 'Track every\n[rep].', 'Her [tekrarı]\nizle.', null, null, { titleStyle: { accent: '#ff5ca8' } }],
      ['bleed-left', 'Start\n[free].', '[Ücretsiz]\nbaşla.', null, null, { titleStyle: { accent: '#4cc9ff' } }],
    ]) });

  /* Organic Meals — nane pastel zemin, koyu yeşil başlık (kalın + ince satır), beyaz cihaz */
  defineTemplate({ key: 'organic-meals', name: 'Inspired by Organic Meals', desc: T('Nane yeşili pastel zemin, ortalı koyu yeşil başlık ve ince alt satır; ilk karede yuvarlak fotoğraf alanı ve laurel. Yemek, tarif ve sağlık uygulamaları için.', 'Mint pastel background, centred dark-green headline with a light second line; round photo area and laurel on the first screen. For food, recipe and wellness apps.'),
    tags: ['simple', 'pastel', 'light', 'badges'], cats: ['food & drink', 'health & fitness', 'lifestyle'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 6.2, color: '#0f3d2e', accent: '#0f3d2e', letterSpacing: -1.5, lineHeight: 1.08, subSize: 3, subColor: '#0f3d2e', subOpacity: 80 },
    bg: { type: 'solid', c1: '#c9f2e3' }, device: { frame: 'iphone-pro', color: 'white', shadow: 40, fit: 'top' },
    screens: S8([
      ['text-top', 'Simple app\nscreens\nmade easy', 'Basit uygulama\nekranları,\nkolayca', null, null, { dev: null, els: [{ kind: 'shape', shape: 'circle', x: 50, y: 52, w: 64, h: 29.5, color: '#ffffff', opacity: 100 }, { kind: 'emoji', x: 50, y: 52, size: 14, text: '🥗' }, { kind: 'laurel', x: 50, y: 88, size: 2.4, text: T('Apple Health\nile çalışır', 'Works with\nApple Health'), color: '#0f3d2e' }] }],
      ['bleed', 'Find your', 'Şablonunu', 'picture perfect template', 'bul, kusursuz'],
      ['bleed', 'Be creative', 'Yaratıcı ol', 'with your screenshots', 'görsellerinle'],
      ['bleed', 'Stand out', 'Öne çık', 'and above the crowd', 'kalabalığın üstünde'],
      ['bleed', 'Quick easy', 'Hızlı, kolay', 'editor for creating', 'oluşturma editörü'],
      ['bleed', 'Meal plans', 'Yemek planları', 'for the whole week', 'tüm hafta için'],
      ['bleed', 'Shopping list', 'Alışveriş listesi', 'built automatically', 'kendiliğinden oluşur'],
      ['bleed', 'Start today', 'Bugün başla', 'first week free', 'ilk hafta ücretsiz'],
    ]) });

  /* Gemini — beyaz zemin, siyah başlık + gradyan vurgu, siyah cihaz, ilk kare siyah */
  defineTemplate({ key: 'gemini', name: 'Inspired by Gemini', desc: T('Beyaz zemin, ortalı siyah başlık ve mavi-mor gradyan vurgu; ilk kare siyah zemin, ikon + ad ve manifesto. Yapay zekâ ve araç uygulamaları için.', 'White background, centred black headline with a blue-purple gradient emphasis; black first screen with icon + name and a manifesto. For AI and utility apps.'),
    tags: ['simple', 'light', 'gradient', 'minimal'], cats: ['productivity', 'utilities', 'developer tools'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 600, size: 5.4, color: '#111111', accent: '#4f8cff', letterSpacing: -1, lineHeight: 1.12, subSize: 2.8, subOpacity: 65 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 35, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Unlock the\npower of\nAppScreens AI\non your\ncomputer.', 'AppScreens AI\'ın\ngücünü\nbilgisayarında\naç.', null, null, Object.assign(solid('#0b0b0f'), { titleStyle: { color: '#ffffff', size: 6.2, weight: 500 }, titleBox: { y: 10 }, dev: null, els: [ICON('appscreens', '#4f8cff', '#ffffff', 16, 4.5)] })],
      ['bleed', 'App templates\nready to [go]', 'Hazır\n[şablonlar]', null, null, { titleStyle: { accent: '#8b5cf6' } }],
      ['bleed', 'Boost conversions\nby up to [35%]', 'Dönüşümü\n[%35] artır', null, null, { titleStyle: { accent: '#3b82f6' } }],
      ['bleed', 'One design for all\noutput [sizes]', 'Tüm [boyutlara]\ntek tasarım', null, null, { titleStyle: { accent: '#ec4899' } }],
      ['bleed', 'Automatic App\nStore [uploads]', 'Otomatik mağaza\n[yükleme]', null, null, { titleStyle: { accent: '#6366f1' } }],
      ['bleed', 'Ask in\n[any language]', '[Her dilde]\nsor', null, null, { titleStyle: { accent: '#8b5cf6' } }],
      ['bleed', 'Summaries in\n[seconds]', '[Saniyede]\nözet', null, null, { titleStyle: { accent: '#3b82f6' } }],
      ['bleed', 'Try it\n[free]', '[Ücretsiz]\ndene', null, null, { titleStyle: { accent: '#ec4899' } }],
    ]) });

  /* Cael — açık mavi zemin, büyük harf başlık, mavi kutu vurgu, dönüşümlü eğik cihaz */
  defineTemplate({ key: 'cael', name: 'Cael', desc: T('Açık mavi düz zemin, büyük harfli siyah başlık ve mavi kutu içinde vurgu; dönüşümlü eğik beyaz cihaz. Tarama, belge ve iş uygulamaları için.', 'Flat light-blue background, uppercase black headline with a blue boxed emphasis; alternating tilted white device. For scanning, document and business apps.'),
    tags: ['simple', 'light', 'bold', 'box'], cats: ['business', 'productivity', 'utilities'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 900, size: 6, color: '#111111', accent: '#2f80ed', hlStyle: 'marker', hlTextColor: '#ffffff', uppercase: true, letterSpacing: -0.5, lineHeight: 1.12, subSize: 2.8, subOpacity: 70 },
    bg: { type: 'solid', c1: '#dbeeff' }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Your\n[pocket sized]\ndocument\noffice.', '[Cep boyu]\nbelge ofisin.', 'Scan, sign, convert and share', 'Tara, imzala, dönüştür, paylaş', { dev: { x: 14, y: 40, w: 70, rot: -8 } }],
      ['text-top', 'Multiple types', 'Çok tür', 'PDF to Word, image to text. You name it.', 'PDF\'ten Word\'e, görselden metne.', { dev: null, els: [{ kind: 'emoji', x: 30, y: 45, size: 9, text: '📄' }, { kind: 'emoji', x: 70, y: 45, size: 9, text: '📝' }, { kind: 'emoji', x: 30, y: 65, size: 9, text: '📊' }, { kind: 'emoji', x: 70, y: 65, size: 9, text: '🖼️' }] }],
      ['tilt', 'Scan anything\n[in seconds]', 'Her şeyi\n[saniyede] tara', 'Point your camera and scan it', 'Kamerayı tut ve tara'],
      ['tilt-r', '[Edit, annotate]\n& make it yours', '[Düzenle, işaretle]\nsenin olsun', 'Highlight, add text and draw directly on any document', 'Vurgula, metin ekle, üzerine çiz'],
      ['tilt', 'Sign documents\n[without printing]\na single page', 'Belgeleri\n[yazdırmadan]\nimzala', 'Highlight, add text and draw directly on any document', 'Tek sayfa bile yazdırma'],
      ['tilt-r', 'Share\n[anywhere]', '[Her yere]\npaylaş', null],
      ['tilt', 'OCR in\n[30 languages]', '[30 dilde]\nOCR', null],
      ['tilt-r', 'Free to\n[start]', 'Ücretsiz\n[başla]', null],
    ]) });

  /* Google — beyaz zemin, siyah başlık + her karede farklı Google rengi vurgu, siyah cihaz */
  defineTemplate({ key: 'google', name: 'Inspired by Google', desc: T('Beyaz zemin, ortalı orta kalınlıkta siyah başlık ve her karede farklı renkte (mavi, yeşil, kırmızı, sarı) vurgu; siyah cihaz. Araç ve verimlilik uygulamaları için.', 'White background, centred medium-weight black headline with a differently coloured emphasis per screen (blue, green, red, yellow); black device. For utility and productivity apps.'),
    tags: ['simple', 'light', 'minimal', 'colourful'], cats: ['utilities', 'productivity', 'business'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 500, size: 5, color: '#111111', accent: '#4285f4', letterSpacing: -0.8, lineHeight: 1.15, subSize: 2.8, subOpacity: 65 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 35, fit: 'top' },
    screens: S8([
      ['bleed', 'Search through [templates]\nto find one you love', 'Sevdiğin [şablonu]\nbulmak için ara', null, null, { titleStyle: { accent: '#4285f4' } }],
      ['bleed', 'Improve your ASO to\nincrease your [downloads]', 'ASO\'nu geliştir,\n[indirmeleri] artır', null, null, { titleStyle: { accent: '#34a853' } }],
      ['bleed', '[Show off] your app in the\nbest way', 'Uygulamanı en iyi\nşekilde [göster]', null, null, { titleStyle: { accent: '#ea4335' } }],
      ['bleed', 'Create your own [standout]\napp store screenshots', 'Kendi [öne çıkan]\ngörsellerini oluştur', null, null, { titleStyle: { accent: '#fbbc05' } }],
      ['bleed', 'Incredible tools to release\nyour app to the [world]', 'Uygulamanı [dünyaya]\nyayınlayacak araçlar', null, null, { titleStyle: { accent: '#4285f4' } }],
      ['bleed', 'Everything\n[in sync]', 'Her şey\n[eşitlenmiş]', null, null, { titleStyle: { accent: '#34a853' } }],
      ['bleed', 'Private\n[by default]', '[Varsayılan]\nolarak özel', null, null, { titleStyle: { accent: '#ea4335' } }],
      ['bleed', 'Get\n[started]', '[Hemen]\nbaşla', null, null, { titleStyle: { accent: '#fbbc05' } }],
    ]) });

  /* Gmail — açık lavanta zemin, kalın + ince satır siyah başlık, siyah cihaz, ilk kare ikon+ad */
  defineTemplate({ key: 'gmail', name: 'Inspired by Gmail', desc: T('Açık lavanta zemin, ortalı siyah başlık (kalın satır + ince satır) ve siyah cihaz; ilk karede ikon + ad, son karede tam kare fotoğraf ve alt metin. Alışveriş ve ev uygulamaları için.', 'Light lavender background, centred black headline (bold line + light line) and a black device; icon + name on the first screen, a full photo with bottom text on the last. For shopping and home apps.'),
    tags: ['simple', 'light', 'minimal'], cats: ['shopping', 'lifestyle', 'productivity'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 6, color: '#111111', accent: '#111111', letterSpacing: -1.5, lineHeight: 1.08, subSize: 3.2, subOpacity: 80, subWeight: 400 },
    bg: { type: 'solid', c1: '#e8ebff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 40, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Get the\nbest results\nwith US', 'En iyi sonucu\nbizimle\nal', null, null, { titleStyle: { size: 7.6 }, titleBox: { y: 9 }, dev: { x: 17, y: 34, w: 66, rot: -10 }, els: [ICON('appscreens', '#4f8cff', '#111111', 14, 4.5)] }],
      ['bleed', 'Stand out', 'Öne çık', 'in a crowded space', 'kalabalık bir alanda'],
      ['bleed', 'Save time', 'Zaman kazan', 'with AI styling', 'AI stil ile'],
      ['bleed', 'Powerful tools', 'Güçlü araçlar', 'for customising', 'özelleştirmek için'],
      ['full-bottom', 'One home', 'Tek ev', 'for all screenshots', 'tüm görseller için', { bg: { type: 'linear', c1: '#c7b9a7', c2: '#8a7a68', angle: 180 }, titleStyle: { color: '#ffffff', shadow: true }, subStyle: { color: '#ffffff' }, dev: { fit: 'cover', frame: 'iphone-pro', x: 12, y: 2, w: 76, shadow: 40 } }],
      ['bleed', 'Curated', 'Seçilmiş', 'collections every week', 'her hafta koleksiyonlar'],
      ['bleed', 'Fast', 'Hızlı', 'checkout in two taps', 'iki dokunuşta ödeme'],
      ['bleed', 'Start', 'Başla', 'browsing today', 'bugün göz at'],
    ]) });

  /* Travel — koyu fotoğraf/gradyan tam kare, sol üst beyaz başlık, cihaz alt-sağ */
  defineTemplate({ key: 'travel', name: 'Travel', desc: T('Koyu, atmosferik gradyan tam kare (fotoğraf yerine), sol üstte beyaz kalın başlık ve alttan taşan beyaz cihaz. Seyahat ve otel uygulamaları için.', 'Dark, atmospheric full-frame gradient (swap for a photo), bold white headline top-left and a white device bleeding off the bottom. For travel and hotel apps.'),
    tags: ['simple', 'dark', 'photo'], cats: ['travel', 'lifestyle', 'navigation'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.5, lineHeight: 1.08, subSize: 2.8, subColor: '#ffffff', subOpacity: 80, shadow: true },
    bg: { type: 'mesh', c1: '#3b4a5c', c2: '#1a222c', c3: '#6a7d8f', variant: 1, noise: 8 }, device: { frame: 'iphone-pro', color: 'white', shadow: 55, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Create your app\nstore screenshots\nwith AppScreens', 'Mağaza görsellerini\nAppScreens ile\noluştur', null, null, { dev: { x: 22, y: 36, w: 78, rot: 0 } }],
      ['bleed-left', 'The fastest way\nto export for all\noutput sizes', 'Tüm boyutlara\nen hızlı dışa\naktarma', null, null, { bg: { type: 'mesh', c1: '#5c4a3b', c2: '#2c221a', c3: '#8f7d6a', variant: 2, noise: 8 }, dev: { x: 22, y: 36, w: 78 } }],
      ['bleed-left', 'Over 100 ready\nto go professional\ntemplates', '100\'den fazla\nhazır profesyonel\nşablon', null, null, { dev: { x: 22, y: 36, w: 78 } }],
      ['bleed-left', 'Localise your app\nand instantly\nreach the world', 'Yerelleştir,\nanında dünyaya\nulaş', null, null, { bg: { type: 'mesh', c1: '#3b5c4a', c2: '#1a2c22', c3: '#6a8f7d', variant: 0, noise: 8 }, dev: { x: 22, y: 36, w: 78 } }],
      ['bleed-left', 'Improve app store\noptimisation by\nup to 35%', 'Mağaza\noptimizasyonunu\n%35\'e kadar artır', null, null, { dev: { x: 22, y: 36, w: 78 } }],
      ['bleed-left', 'Book stays\nin seconds', 'Saniyeler içinde\nkonaklama', null, null, { bg: { type: 'mesh', c1: '#5c4a3b', c2: '#2c221a', c3: '#8f7d6a', variant: 2, noise: 8 }, dev: { x: 22, y: 36, w: 78 } }],
      ['bleed-left', 'Member\nprices', 'Üye\nfiyatları', null, null, { dev: { x: 22, y: 36, w: 78 } }],
      ['bleed-left', 'Start\nexploring', 'Keşfetmeye\nbaşla', null, null, { bg: { type: 'mesh', c1: '#3b5c4a', c2: '#1a2c22', c3: '#6a8f7d', variant: 0, noise: 8 }, dev: { x: 22, y: 36, w: 78 } }],
    ]) });

  /* Vale — koyu çam yeşili, ortalı beyaz başlık, beyaz cihaz */
  defineTemplate({ key: 'vale', name: 'Vale', desc: T('Koyu çam yeşili düz zemin, ortalı beyaz başlık ve beyaz cihaz. Kahve, yemek ve yerel keşif uygulamaları için sakin.', 'Flat deep pine-green background, centred white headline and a white device. Calm for coffee, food and local-discovery apps.'),
    tags: ['simple', 'dark', 'minimal'], cats: ['food & drink', 'lifestyle', 'travel'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 5.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.2, lineHeight: 1.12, subSize: 2.8, subColor: '#ffffff', subOpacity: 75 },
    bg: { type: 'solid', c1: '#1f5c4f' }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed', 'Create your App\nStore screenshots\nwith AppScreens', 'Mağaza görsellerini\nAppScreens ile\noluştur', null],
      ['bleed', 'Improve your first\nimpression and\nboost conversions', 'İlk izlenimi iyileştir,\ndönüşümü artır', null],
      ['bleed', 'Improve App\nStore optimisation\nby up to 35%', 'Mağaza\noptimizasyonunu\n%35\'e kadar artır', null],
      ['bleed', 'Over 100 ready to\ngo professional\ntemplates', '100\'den fazla\nhazır profesyonel\nşablon', null],
      ['bleed', 'Localise your app\nand instantly\nreach the world', 'Yerelleştir,\nanında dünyaya\nulaş', null],
      ['bleed', 'Order ahead,\nskip the line', 'Önceden sipariş,\nsıra bekleme', null],
      ['bleed', 'Earn rewards\nevery visit', 'Her ziyarette\nödül', null],
      ['bleed', 'Join\ntoday', 'Bugün\nkatıl', null],
    ]) });

  /* Diet Doctor — siyah zemin, üst küçük etiket, ince beyaz başlık, beyaz cihaz */
  defineTemplate({ key: 'diet-doctor', name: 'Inspired by Diet Doctor', desc: T('Siyah zemin, üstte geniş aralıklı küçük etiket ve ince beyaz başlık; beyaz cihaz ortada. Alışveriş, sağlık ve premium uygulamalar için.', 'Black background, a small wide-spaced label above a light white headline; white device centred. For shopping, health and premium apps.'),
    tags: ['simple', 'dark', 'minimal'], cats: ['shopping', 'health & fitness', 'lifestyle'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 500, size: 4.8, color: '#ffffff', accent: '#ffffff', letterSpacing: -0.8, lineHeight: 1.15, subSize: 2.6, subColor: '#ffffff', subOpacity: 60, titleBox: { y: 9 } },
    bg: { type: 'solid', c1: '#0b0b0b' }, device: { frame: 'iphone-pro', color: 'white', shadow: 50, fit: 'top' },
    screens: S8([
      ['small', 'Intuitive design tools and\npowerful features', 'Sezgisel tasarım araçları\nve güçlü özellikler', null, null, { els: [{ kind: 'text', x: 50, y: 5, size: 2.2, text: T('OLUŞTUR', 'CREATE'), color: '#ffffff', weight: 600 }] }],
      ['small', 'Automatically localise and\ntranslate in 67 languages', '67 dile otomatik\nyerelleştir ve çevir', null, null, { els: [{ kind: 'text', x: 50, y: 5, size: 2.2, text: T('ÇEVİR', 'TRANSLATE'), color: '#ffffff', weight: 600 }] }],
      ['small', 'Edit any template to suit\nyour app and brand style', 'Her şablonu uygulamana\nve markana göre düzenle', null, null, { els: [{ kind: 'text', x: 50, y: 5, size: 2.2, text: T('ÖZELLEŞTİR', 'CUSTOMISE'), color: '#ffffff', weight: 600 }] }],
      ['small', 'Boost your ASO and\nincrease sales up to 35%', 'ASO\'nu artır, satışları\n%35\'e kadar yükselt', null, null, { els: [{ kind: 'text', x: 50, y: 5, size: 2.2, text: T('ÖNE ÇIK', 'STAND OUT'), color: '#ffffff', weight: 600 }] }],
      ['small', 'Create various versions of\nyour screenshots', 'Görsellerinin farklı\nsürümlerini oluştur', null, null, { els: [{ kind: 'text', x: 50, y: 5, size: 2.2, text: T('A/B TESTİ', 'A/B TESTING'), color: '#ffffff', weight: 600 }] }],
      ['small', 'Recipes from\nreal doctors', 'Gerçek doktorlardan\ntarifler', null, null, { els: [{ kind: 'text', x: 50, y: 5, size: 2.2, text: T('TARİFLER', 'RECIPES'), color: '#ffffff', weight: 600 }] }],
      ['small', 'Plans that\nfit you', 'Sana uyan\nplanlar', null, null, { els: [{ kind: 'text', x: 50, y: 5, size: 2.2, text: T('PLANLAR', 'PLANS'), color: '#ffffff', weight: 600 }] }],
      ['small', 'Start your\nfree trial', 'Ücretsiz denemeni\nbaşlat', null, null, { els: [{ kind: 'text', x: 50, y: 5, size: 2.2, text: T('BAŞLA', 'START'), color: '#ffffff', weight: 600 }] }],
    ]) });

  /* Kmart — beyaz zemin, sol siyah başlık + kırmızı vurgu, siyah cihaz */
  defineTemplate({ key: 'kmart', name: 'Inspired by Kmart', desc: T('Beyaz zemin, sol hizalı siyah başlık ve kırmızı vurgu kelimesi; ilk karede foto alanı ve alt açıklama, düz siyah cihaz. Perakende ve alışveriş uygulamaları için.', 'White background, left-aligned black headline with a red emphasis; photo area and description on the first screen, straight black device. For retail and shopping apps.'),
    tags: ['simple', 'light', 'minimal'], cats: ['shopping', 'lifestyle', 'business'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 6, color: '#111111', accent: '#e4002b', letterSpacing: -1.5, lineHeight: 1.1, subSize: 2.8, subOpacity: 65 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 35, fit: 'top' },
    screens: S8([
      ['bleed-left', '[Create] your\nscreenshots\nin minutes.', 'Görsellerini\ndakikalar içinde\n[oluştur].', 'Rapidly create Apple App Store and Play Store screenshots', 'App Store ve Play Store görsellerini hızla oluştur', { dev: null, els: [{ kind: 'emoji', x: 50, y: 70, size: 24, text: '🛍️' }] }],
      ['bleed-left', '[Over 100]\ntemplates\nready to go.', '[100\'den fazla]\nhazır şablon.', null],
      ['bleed-left', '[Localise]\nyour app for\nthe world.', 'Uygulamanı dünya\niçin [yerelleştir].', null],
      ['bleed-left', '[Custom]\nlayouts and\ndesigns.', '[Özel] düzen\nve tasarımlar.', null],
      ['bleed-left', '[Boost] ASO\nup to 35%.', 'ASO\'yu %35\'e kadar\n[artır].', 'Intuitive design and powerful features.', 'Sezgisel tasarım, güçlü özellikler.'],
      ['bleed-left', '[Deals]\nevery week.', 'Her hafta\n[fırsat].', null],
      ['bleed-left', '[Click] &\ncollect.', '[Tıkla] ve\ngel al.', null],
      ['bleed-left', '[Shop]\nnow.', '[Şimdi]\nalışveriş.', null],
    ]) });

  /* Soft — şeftali pastel, serif italik başlık, çiçek/dekor, eğik cihaz */
  defineTemplate({ key: 'soft', name: 'Soft', desc: T('Şeftali pastel zemin, italik serif siyah başlık ve pembe kutu vurgu; ilk karede eğik cihaz ve onay listesi. Güzellik, moda ve yaşam uygulamaları için.', 'Peach pastel background, italic serif black headline with a pink boxed emphasis; tilted device and a checklist on the first screen. For beauty, fashion and lifestyle apps.'),
    tags: ['advanced', 'pastel', 'serif', 'graphics'], cats: ['lifestyle', 'shopping', 'health & fitness'], theme: 'light', skill: 'advanced',
    style: { font: 'playfair', weight: 800, size: 6.4, color: '#111111', accent: '#f19ab5', hlStyle: 'marker', hlTextColor: '#ffffff', letterSpacing: -0.5, lineHeight: 1.06, subFont: 'inter', subSize: 2.8, subOpacity: 75 },
    bg: { type: 'solid', c1: '#fbe6d9', pattern: 'circles', patternColor: '#f6b8c9', patternOpacity: 35 }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['text-bottom-left', 'Create\nyours\ninstantly', 'Hemen\nseninkini\noluştur', null, null, { titleBox: { y: 62 }, dev: { x: 22, y: 2, w: 56, rot: -12 }, els: [{ kind: 'pill', x: 30, y: 80, size: 2.4, text: T('AppScreens ile', 'with AppScreens'), emoji: '', bg: '#f19ab5', color: '#ffffff', rot: 0 }, { kind: 'text', x: 24, y: 89, size: 2.2, text: T('✓ Otomatik yükleme\n✓ Tüm boyutlar\n✓ Zahmetsiz', '✓ Auto upload\n✓ All output sizes\n✓ No hassle'), color: '#111111', weight: 600 }] }],
      ['bleed', 'Boost your\n[conversions]', '[Dönüşümlerini]\nartır', 'by up to 35%', '%35\'e kadar'],
      ['text-top-left', 'Export app\nstore assets', 'Mağaza görsellerini\ndışa aktar', 'pixel perfect every time', 'her seferinde piksel mükemmel', { dev: { x: 30, y: 46, w: 56, rot: 6 }, els: [{ kind: 'text', x: 24, y: 30, size: 2.3, text: T('☆ Ücretsiz başla\n☆ Özelleştir\n☆ İndirmeleri artır', '☆ Start creating for free\n☆ Customise it your way\n☆ Grow your downloads'), color: '#111111', weight: 600 }] }],
      ['text-bottom-left', 'Create your\nscreenshots', 'Görsellerini\noluştur', 'for iOS and Android', 'iOS ve Android için', { titleBox: { y: 66 }, dev: { x: 19, y: 2, w: 62, rot: 0 } }],
      ['bleed', 'Boost your\n[conversions]', '[Dönüşümlerini]\nartır', 'by up to 35%', '%35\'e kadar'],
      ['bleed', 'Skincare\n[routines]', 'Cilt bakımı\n[rutinleri]', null],
      ['bleed', 'Track your\n[glow]', '[Işıltını]\nizle', null],
      ['bleed', 'Start\n[today]', '[Bugün]\nbaşla', null],
    ]) });

  /* Tech — siyah zemin, beyaz + yeşil vurgu, yeşil ışımalı cihaz, ilk kare illüstrasyon */
  defineTemplate({ key: 'tech', name: 'Tech', desc: T('Siyah zemin, beyaz başlık ve neon yeşil vurgu; yeşil ışımalı cihaz, bazı karelerde metin altta. Geliştirici ve teknoloji uygulamaları için.', 'Black background, white headline with a neon-green emphasis; green-glow device, text at the bottom on some screens. For developer and tech apps.'),
    tags: ['simple', 'dark', 'glow', 'neon'], cats: ['developer tools', 'utilities', 'productivity'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 600, size: 6.2, color: '#ffffff', accent: '#3ddc84', letterSpacing: -1.5, lineHeight: 1.08, subSize: 2.9, subColor: '#ffffff', subOpacity: 70 },
    bg: { type: 'solid', c1: '#050505' }, device: { frame: 'iphone-pro', color: 'black', shadow: 50, glow: '#3ddc84', glowStrength: 60, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Are you\nready for it?', 'Hazır\nmısın?', 'The place to boost your ASO by 35%', 'ASO\'nu %35 artıracağın yer', { dev: null, els: [{ kind: 'emoji', x: 50, y: 66, size: 22, text: '🧑‍💻' }] }],
      ['bleed-left', 'Boost your\n[conversions]', '[Dönüşümlerini]\nartır', null],
      ['bleed-left', 'Create\n[professional]\nscreenshots', '[Profesyonel]\ngörseller\noluştur', null],
      ['text-bottom', 'Find your\n[template]', '[Şablonunu]\nbul', null, null, { dev: { x: 19, y: 3, w: 62 } }],
      ['text-bottom', '[Stand out] in\nthe crowd', 'Kalabalıkta\n[öne çık]', null, null, { dev: { x: 19, y: 3, w: 62 } }],
      ['bleed-left', 'Ship\n[faster]', 'Daha [hızlı]\nyayınla', null],
      ['bleed-left', 'Logs in\n[real time]', '[Gerçek zamanlı]\nkayıtlar', null],
      ['text-bottom', 'Start\n[free]', '[Ücretsiz]\nbaşla', null, null, { dev: { x: 19, y: 3, w: 62 } }],
    ]) });

  /* Kairo — lavanta zemin, siyah kalın başlık, mavi çipler, eğik cihazlar */
  defineTemplate({ key: 'kairo', name: 'Kairo', desc: T('Açık lavanta zemin, ortalı siyah kalın başlık ve mavi çip; dönüşümlü eğik beyaz cihaz, bazı karelerde metin altta. Sosyal ve flört uygulamaları için.', 'Light lavender background, centred bold black headline and a blue chip; alternating tilted white device, bottom text on some screens. For social and dating apps.'),
    tags: ['advanced', 'light', 'chips'], cats: ['social networking', 'lifestyle', 'entertainment'], theme: 'light', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 6.6, color: '#111111', accent: '#3b6cff', letterSpacing: -1.5, lineHeight: 1.08, subSize: 2.8, subOpacity: 70 },
    bg: { type: 'solid', c1: '#e6e6ff' }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['tilt', 'Boost\ndownloads', 'İndirmeleri\nartır', null, null, { els: [{ kind: 'pill', x: 50, y: 25, size: 2.4, text: T('Faydaları gör', 'See the Benefits'), emoji: '', bg: '#ffffff', color: '#3b6cff', rot: 0, outline: true }] }],
      ['text-bottom', 'Stand out\nin crowds', 'Kalabalıkta\nöne çık', null, null, { dev: { x: 10, y: 2, w: 66, rot: 10 } }],
      ['tilt-r', 'Find your\ntemplate', 'Şablonunu\nbul', null, null, { els: [{ kind: 'pill', x: 50, y: 25, size: 2.4, text: T('Mesaj gönder', 'Send Message'), emoji: '✈️', bg: '#ffffff', color: '#3b6cff', rot: 0 }] }],
      ['text-bottom', 'Get more\ndownloads', 'Daha çok\nindirme', null, null, { dev: { x: 24, y: 2, w: 66, rot: -10 }, els: [{ kind: 'pill', x: 50, y: 66, size: 2.4, text: T('Planını yükselt', 'Upgrade Your Plan'), emoji: '', bg: '#ffffff', color: '#3b6cff', rot: 0 }] }],
      ['tilt', 'It\'s just so\nsimple', 'Bu kadar\nbasit', null],
      ['tilt-r', 'Meet people\nnearby', 'Yakınındakilerle\ntanış', null],
      ['text-bottom', 'Chat\nsafely', 'Güvenle\nsohbet', null, null, { dev: { x: 10, y: 2, w: 66, rot: 10 } }],
      ['tilt', 'Join\nfree', 'Ücretsiz\nkatıl', null],
    ]) });

  /* Waves — mavi/pembe dalga mesh (panoramik), beyaz başlık, beyaz cihaz */
  defineTemplate({ key: 'waves', name: 'Waves', desc: T('Set boyunca akan mavi-pembe dalga arka plan (panoramik), ortalı beyaz başlık ve beyaz cihaz. Moda, alışveriş ve yaşam uygulamaları için.', 'A blue-pink wave background flowing across the set (panoramic), centred white headline and a white device. For fashion, shopping and lifestyle apps.'),
    tags: ['simple', 'gradient', 'panoramic', 'graphics'], cats: ['shopping', 'lifestyle', 'social networking'], theme: 'colourful', skill: 'simple', panorama: true,
    style: { font: 'inter', weight: 700, size: 5.4, color: '#ffffff', accent: '#ffffff', letterSpacing: -1, lineHeight: 1.12, subSize: 2.8, subColor: '#ffffff', subOpacity: 80, shadow: true },
    bg: { type: 'mesh', c1: '#2e5bff', c2: '#ff5fa2', c3: '#1a2a80', variant: 2, pattern: 'waves', patternColor: '#ffffff', patternOpacity: 25 }, device: { frame: 'iphone-pro', color: 'white', shadow: 50, fit: 'top' },
    screens: S8([
      ['bleed', 'Search through templates\nto find one you love', 'Sevdiğin şablonu\nbulmak için ara', null],
      ['bleed', 'Improve your ASO to\nincrease your downloads', 'ASO\'nu geliştir,\nindirmeleri artır', null],
      ['bleed', 'Show off your app in the\nbest way', 'Uygulamanı en iyi\nşekilde göster', null],
      ['bleed', 'Create your own standout\napp store screenshots', 'Öne çıkan mağaza\ngörsellerini oluştur', null],
      ['bleed', 'Incredible tools to release\nyour app to the world', 'Uygulamanı dünyaya\nyayınlayacak araçlar', null],
      ['bleed', 'New drops\nevery Friday', 'Her cuma\nyeni ürünler', null],
      ['bleed', 'Try before\nyou buy', 'Almadan\ndene', null],
      ['bleed', 'Shop\nnow', 'Şimdi\nalışveriş', null],
    ]) });

  /* Foodie — beyaz zemin, siyah başlık + turuncu/yeşil vurgu, siyah cihaz, hafif yemek dekoru */
  defineTemplate({ key: 'foodie', name: 'Foodie', desc: T('Beyaz zemin, ortalı siyah başlık ve her karede farklı renkte vurgu; ilk karede ikon + ad, düz siyah cihaz. Yemek teslimat ve tarif uygulamaları için.', 'White background, centred black headline with a differently coloured emphasis per screen; icon + name on the first screen, straight black device. For food delivery and recipe apps.'),
    tags: ['simple', 'light', 'colourful'], cats: ['food & drink', 'lifestyle', 'shopping'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 500, size: 5, color: '#111111', accent: '#ff7a1a', letterSpacing: -0.8, lineHeight: 1.15, subSize: 2.8, subOpacity: 65 },
    bg: { type: 'solid', c1: '#ffffff', pattern: 'dots', patternColor: '#ff7a1a', patternOpacity: 12 }, device: { frame: 'iphone-pro', color: 'black', shadow: 35, fit: 'top' },
    screens: S8([
      ['bleed', '', '', null, null, { dev: { x: 17, y: 12, w: 66 }, els: [ICON('appscreens', '#ff7a1a', '#111111', 50, 6)] }],
      ['bleed', '[Create] yours now!\nSerious [appiness] at your\nfingertips', 'Şimdi [oluştur]!\nParmak ucunda\nciddi [mutluluk]', null, null, { titleStyle: { accent: '#ff7a1a' } }],
      ['bleed', 'Over [70 beautiful]\n[templates] to help get you\nstarted', 'Başlaman için\n[70 güzel şablon]', null, null, { titleStyle: { accent: '#2e9e5b' } }],
      ['bleed', 'Search through\n[templates] to find one you\n[love]', '[Sevdiğin] şablonu\nbulmak için ara', null, null, { titleStyle: { accent: '#e0245e' } }],
      ['bleed', 'Select a [panoramic],\ngradient or block colour\n[background]', '[Panoramik], gradyan\nya da düz renk [arka plan] seç', null, null, { titleStyle: { accent: '#7b5cff' } }],
      ['bleed', 'Order from\n[local] favourites', '[Yerel]\nfavorilerden sipariş', null, null, { titleStyle: { accent: '#ff7a1a' } }],
      ['bleed', 'Track it\n[live]', '[Canlı]\ntakip et', null, null, { titleStyle: { accent: '#2e9e5b' } }],
      ['bleed', 'Get\n[started]', '[Hemen]\nbaşla', null, null, { titleStyle: { accent: '#e0245e' } }],
    ]) });

  /* Flo — şeftali pastel, serif başlık, pembe kutu vurgu, pembe kare dönüşümlü */
  defineTemplate({ key: 'flo', name: 'Inspired by Flo', desc: T('Şeftali pastel zemin, siyah serif başlık ve pembe kutu içinde vurgu; bazı kareler pembe zemin + beyaz başlık. Kadın sağlığı, güzellik ve yaşam uygulamaları için.', 'Peach pastel background, black serif headline with a pink boxed emphasis; some screens flip to pink with a white headline. For women\'s health, beauty and lifestyle apps.'),
    tags: ['simple', 'pastel', 'serif', 'box'], cats: ['health & fitness', 'medical', 'lifestyle', 'shopping'], theme: 'light', skill: 'simple',
    style: { font: 'fraunces', weight: 500, size: 6.4, color: '#111111', accent: '#ff5c8a', hlStyle: 'marker', hlTextColor: '#ffffff', letterSpacing: -0.8, lineHeight: 1.08, subFont: 'inter', subSize: 2.8, subOpacity: 70 },
    bg: { type: 'solid', c1: '#fbe8dd' }, device: { frame: 'iphone-pro', color: 'white', shadow: 40, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Trusted\nby over\n[60,000]\n[developers]', '[60.000+]\ngeliştiricinin\ngüvendiği', null, null, { titleStyle: { size: 7.4 }, dev: null, els: [{ kind: 'shape', shape: 'circle', x: 50, y: 74, w: 56, h: 25.8, color: '#ffffff', opacity: 100 }, { kind: 'emoji', x: 50, y: 74, size: 12, text: '🌸' }] }],
      ['bleed', 'Boost your\n[downloads]', '[İndirmeleri]\nartır', null],
      ['bleed', 'Create one\n[design]', 'Tek\n[tasarım]', null, null, Object.assign(solid('#ff5c8a'), { titleStyle: { color: '#ffffff', accent: '#ffffff', hlTextColor: '#ff5c8a' } })],
      ['bleed', 'For all your\n[devices]', 'Tüm\n[cihazların] için', null],
      ['bleed', 'Find your\n[template]', '[Şablonunu]\nbul', null],
      ['bleed', 'Track your\n[cycle]', '[Döngünü]\nizle', null, null, Object.assign(solid('#ff5c8a'), { titleStyle: { color: '#ffffff', accent: '#ffffff', hlTextColor: '#ff5c8a' } })],
      ['bleed', 'Daily\n[insights]', 'Günlük\n[içgörüler]', null],
      ['bleed', 'Start\n[free]', '[Ücretsiz]\nbaşla', null],
    ]) });
})();
