/* Set D — appscreens kataloğu 93-124 (Superlist … Cityscape) yeniden çizim; metinler örnek, EN+TR. */
(function () {
  const T = (tr, en) => ({ en, tr });
  const S8 = (rows) => rows.map(([layout, en, tr, sub_en, sub_tr, extra]) => Object.assign({ layout, title: T(tr, en), sub: sub_en == null ? false : T(sub_tr || sub_en, sub_en) }, extra || {}));
  const ICON = (name, bg, color, x, y) => ({ kind: 'icon', x: x ?? 50, y: y ?? 4.5, size: 2.6, text: name, iconBg: bg, color });
  const solid = (c) => ({ bg: { type: 'solid', c1: c } });
  const white = { color: '#ffffff', accent: '#ffffff' };

  /* Superlist — her karede farklı düz renk (lila, siyah, kırmızı, lavanta, yeşil), metin bazen altta */
  defineTemplate({ key: 'superlist', name: 'Inspired by Superlist', desc: T('Her karede farklı canlı düz zemin (lila, siyah, kırmızı, lavanta, yeşil); başlık bazen üstte bazen altta, vurgu renkli. Görev ve verimlilik uygulamaları için.', 'A different vivid flat colour per screen (lilac, black, red, lavender, green); headline sometimes top, sometimes bottom, with a coloured emphasis. For task and productivity apps.'),
    tags: ['advanced', 'colourful', 'bold'], cats: ['productivity', 'business', 'utilities'], theme: 'colourful', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 6.6, color: '#111111', accent: '#e05a2b', letterSpacing: -1.5, lineHeight: 1.08, subSize: 2.9, subOpacity: 75 },
    device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Tools with\n[Super Powers]', '[Süper güçlü]\naraçlar', 'Customise, plan, capture and get more done with AI', 'Özelleştir, planla, yakala; AI ile daha çok bitir', Object.assign(solid('#d9d4ff'), { titleStyle: { accent: '#e05a2b' }, els: [ICON('appscreens', '#e05a2b', '#111111', 14, 4.5)], titleBox: { y: 9 } })],
      ['text-bottom-left', 'Top rated\ncoffee [shop]', 'En iyi\nkahve [dükkânı]', null, null, Object.assign(solid('#111111'), { titleStyle: Object.assign({}, white, { accent: '#e05a2b' }), dev: { x: 24, y: 2, w: 66, rot: -8 } })],
      ['text-bottom-left', 'Boost\n[conversions]\nby up to 35%', '[Dönüşümü]\n%35\'e kadar\nartır', null, null, Object.assign(solid('#e05a2b'), { titleStyle: Object.assign({}, white), dev: { x: 19, y: 2, w: 62 } })],
      ['bleed-left', '[One design]\nfor all of your\noutput sizes', 'Tüm boyutlara\n[tek tasarım]', null, null, Object.assign(solid('#efeaff'), { titleStyle: { accent: '#7b5cff' } })],
      ['text-bottom-left', 'Automatic\n[App Store]\nuploads', 'Otomatik\n[App Store]\nyükleme', null, null, Object.assign(solid('#1f7a5c'), { titleStyle: Object.assign({}, white, { accent: '#b8f0d5' }), dev: { x: 19, y: 2, w: 62 } })],
      ['bleed-left', 'Plan the\n[week]', '[Haftayı]\nplanla', null, null, Object.assign(solid('#d9d4ff'), { titleStyle: { accent: '#e05a2b' } })],
      ['text-bottom-left', 'Share with\nyour [team]', '[Ekibinle]\npaylaş', null, null, Object.assign(solid('#111111'), { titleStyle: Object.assign({}, white, { accent: '#e05a2b' }), dev: { x: 19, y: 2, w: 62 } })],
      ['bleed-left', 'Start\n[free]', '[Ücretsiz]\nbaşla', null, null, Object.assign(solid('#efeaff'), { titleStyle: { accent: '#7b5cff' } })],
    ]) });

  /* CommBank — beyaz zemin, sarı marker vurgu, siyah cihaz, ince başlık */
  defineTemplate({ key: 'commbank', name: 'Inspired by CommBank', desc: T('Beyaz zemin, sol hizalı ince siyah başlık ve sarı fosforlu vurgu; düz siyah cihaz. Bankacılık ve finans uygulamaları için.', 'White background, left-aligned regular black headline with a yellow marker highlight; straight black device. For banking and finance apps.'),
    tags: ['simple', 'light', 'marker'], cats: ['finance', 'business', 'utilities'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 500, size: 5.4, color: '#111111', accent: '#ffe23a', hlStyle: 'marker', hlTextColor: '#111111', letterSpacing: -1, lineHeight: 1.15, subSize: 2.8, subOpacity: 65 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 35, fit: 'top' },
    screens: S8([
      ['bleed-left', '[Search through]\ntemplates to find one\nyou love', 'Sevdiğin şablonu\nbulmak için [ara]', null],
      ['bleed-left', '[Design your]\nscreenshot set once\nfor all devices', 'Setini bir kez [tasarla],\nher cihaz için', null],
      ['bleed-left', '[Improve ASO]\nperformance to\nincrease downloads', '[ASO\'yu geliştir],\nindirmeleri artır', null],
      ['bleed-left', '[Display all]\nthe best parts of your\napp', 'Uygulamanın en iyi\nyanlarını [göster]', null],
      ['bleed-left', '[Standout]\nfrom the crowd\nabove the rest', 'Kalabalıktan\n[sıyrıl]', null],
      ['bleed-left', '[Spend] smarter\nwith insights', 'İçgörülerle daha\nakıllı [harca]', null],
      ['bleed-left', '[Pay] anyone\nin seconds', 'Saniyeler içinde\n[öde]', null],
      ['bleed-left', '[Open] an account\ntoday', 'Bugün hesap\n[aç]', null],
    ]) });

  /* Paramount+ — koyu mavi (yıldızlı), büyük harf beyaz başlık, siyah cihaz */
  defineTemplate({ key: 'paramount', name: 'Inspired by Paramount+', desc: T('Koyu mavi, hafif ışıltılı zemin; büyük harfli kalın beyaz başlık ve siyah cihaz. Yayın ve eğlence uygulamaları için.', 'Deep blue, subtly sparkling background; uppercase bold white headline and a black device. For streaming and entertainment apps.'),
    tags: ['simple', 'dark', 'bold'], cats: ['entertainment', 'photo & video', 'music'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 5.4, color: '#ffffff', accent: '#5aa9ff', uppercase: true, letterSpacing: 0, lineHeight: 1.12, subSize: 2.8, subColor: '#ffffff', subOpacity: 70 },
    bg: { type: 'linear', c1: '#0b2a6b', c2: '#061436', angle: 180, pattern: 'sparkles', patternColor: '#ffffff', patternOpacity: 30 }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['bleed', 'All the features you\nneed for top 100', 'İlk 100 için gereken\ntüm özellikler', null],
      ['bleed', 'Templates ready\nto go', 'Hazır\nşablonlar', null],
      ['bleed', 'Boost conversions by\nup to 35%', 'Dönüşümü %35\'e\nkadar artır', null],
      ['bleed', 'One design for all\noutput devices', 'Her cihaza\ntek tasarım', null],
      ['bleed', 'Automatic App Store\nupload', 'Otomatik App Store\nyükleme', null],
      ['bleed', 'Live sports\nand news', 'Canlı spor\nve haber', null],
      ['bleed', 'Download and\nwatch offline', 'İndir, çevrimdışı\nizle', null],
      ['bleed', 'Try it\nfree', 'Ücretsiz\ndene', null],
    ]) });

  /* Mira — lila→pembe pastel gradyan, siyah başlık, beyaz cihaz */
  defineTemplate({ key: 'mira', name: 'Mira', desc: T('Lila-pembe yumuşak gradyan zemin, ortalı siyah başlık ve beyaz cihaz. Güzellik, alışveriş ve yaşam uygulamaları için.', 'Soft lilac-pink gradient background, centred black headline and a white device. For beauty, shopping and lifestyle apps.'),
    tags: ['simple', 'pastel', 'gradient'], cats: ['shopping', 'lifestyle', 'health & fitness'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 5.8, color: '#1a1030', accent: '#7b5cff', letterSpacing: -1.2, lineHeight: 1.1, subSize: 2.8, subOpacity: 70 },
    bg: { type: 'linear', c1: '#d8ccff', c2: '#ffd6e8', angle: 180 }, device: { frame: 'iphone-pro', color: 'white', shadow: 40, fit: 'top' },
    screens: S8([
      ['bleed', 'Search through\ntemplates to find\none you love', 'Sevdiğin şablonu\nbulmak için ara', null],
      ['bleed', 'Improve your ASO\nto increase your\ndownloads', 'ASO\'nu geliştir,\nindirmeleri artır', null],
      ['bleed', 'Show off your app\nin the best way in\nthe app stores', 'Uygulamanı\nmağazalarda en iyi\nşekilde göster', null],
      ['bleed', 'Create your own\nstandout app\nstore screenshots', 'Öne çıkan mağaza\ngörsellerini oluştur', null],
      ['bleed', 'Incredible tools to\nrelease your app to\nthe world', 'Uygulamanı dünyaya\nyayınlayacak araçlar', null],
      ['bleed', 'Beauty trends\nevery week', 'Her hafta\ngüzellik trendleri', null],
      ['bleed', 'Try on\nvirtually', 'Sanal\ndene', null],
      ['bleed', 'Shop\nnow', 'Şimdi\nalışveriş', null],
    ]) });

  /* FitMenCook — sarı zemin, büyük harf siyah başlık, siyah cihaz, ilk kare fotoğraf */
  defineTemplate({ key: 'fitmencook', name: 'Inspired by FitMenCook', desc: T('Parlak sarı düz zemin, büyük harfli kalın siyah başlık ve siyah cihaz; ilk karede laurel yerine kutu etiket. Yemek, fitness ve tarif uygulamaları için.', 'Bright flat yellow, uppercase bold black headline and a black device; a boxed label on the first screen. For food, fitness and recipe apps.'),
    tags: ['simple', 'colourful', 'bold'], cats: ['food & drink', 'health & fitness', 'lifestyle'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 900, size: 6, color: '#111111', accent: '#111111', uppercase: true, letterSpacing: -0.5, lineHeight: 1.1, subSize: 2.8, subOpacity: 70 },
    bg: { type: 'solid', c1: '#ffde2e' }, device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S8([
      ['tilt', '70+ templates', '70+ şablon', null, null, { els: [{ kind: 'pill', x: 50, y: 88, size: 2.6, text: T('AppScreens şablonları', 'Templates by AppScreens'), emoji: '', bg: '#111111', color: '#ffffff', rot: 0 }] }],
      ['text-top', 'Quick & super\nsimple!', 'Hızlı ve\nçok basit!', null, null, { dev: null, els: [{ kind: 'emoji', x: 50, y: 60, size: 26, text: '🧑‍🍳' }, { kind: 'pill', x: 50, y: 90, size: 2.6, text: T('AppScreens şablonları', 'Templates by AppScreens'), emoji: '', bg: '#111111', color: '#ffffff', rot: 0 }] }],
      ['bleed', 'Phones, tablets,\nwatch & more', 'Telefon, tablet,\nsaat ve dahası', null],
      ['bleed', 'Improve your\nsales & ASO', 'Satış ve\nASO\'nu artır', null],
      ['bleed', 'Create app store\nscreenshots', 'Mağaza görselleri\noluştur', null],
      ['bleed', 'Meal prep\nin minutes', 'Dakikalar içinde\nöğün hazırlığı', null],
      ['bleed', 'Macros\ndone for you', 'Makrolar\nhazır', null],
      ['bleed', 'Start\ncooking', 'Pişirmeye\nbaşla', null],
    ]) });

  /* Fitness App — beyaz/mor dönüşümlü, siyah kalın başlık, eğik cihaz */
  defineTemplate({ key: 'fitness-app', name: 'Inspired from Fitness App', desc: T('Beyaz ve lila dönüşümlü zeminler, ortalı kalın siyah başlık; eğik siyah cihaz ve son karede limon grafik. Fitness ve antrenman uygulamaları için.', 'Alternating white and lilac backgrounds, centred bold black headline; tilted black device and a lime chart on the last screen. For fitness and workout apps.'),
    tags: ['simple', 'light', 'bold'], cats: ['health & fitness', 'sports', 'lifestyle'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 6.4, color: '#111111', accent: '#7b5cff', letterSpacing: -1.5, lineHeight: 1.08, subSize: 2.8, subOpacity: 70 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Your All-In-One\n[Fitness] App', 'Hepsi bir arada\n[Fitness] uygulaman', 'Workouts · Meals · Progress', 'Antrenman · Öğün · İlerleme', { dev: { x: 24, y: 34, w: 72, rot: -10 } }],
      ['tilt', 'Create your\nworkout [routine]', 'Antrenman\n[rutinini] oluştur', null],
      ['bleed', '', '', null, null, Object.assign(solid('#8b6cff'), { dev: { x: 12, y: 8, w: 76, rot: -12, frame: 'iphone-pro', color: 'black' } })],
      ['tilt-r', 'Get personalized\nworkout [plans]', 'Kişisel antrenman\n[planları] al', null],
      ['bleed', 'Track your\nfitness [progress]', 'Fitness\n[ilerlemeni] izle', null, null, Object.assign(solid('#f1edff'), { titleStyle: { accent: '#5b3df5' } })],
      ['tilt', 'Weekly\n[challenges]', 'Haftalık\n[meydan okumalar]', null],
      ['tilt-r', 'Train with\n[friends]', '[Arkadaşlarla]\nantrenman', null],
      ['bleed', 'Start\n[free]', '[Ücretsiz]\nbaşla', null, null, Object.assign(solid('#f1edff'), { titleStyle: { accent: '#5b3df5' } })],
    ]) });

  /* Shop — şeftali/krem zemin, siyah başlık + turuncu vurgu, eğik cihaz */
  defineTemplate({ key: 'shop', name: 'Shop', desc: T('Şeftali-krem zemin, sol hizalı siyah başlık ve turuncu vurgu; ilk karede büyük eğik cihaz. Yemek siparişi ve alışveriş uygulamaları için.', 'Peach-cream background, left-aligned black headline with an orange emphasis; a big tilted device on the first screen. For food-ordering and shopping apps.'),
    tags: ['simple', 'light', 'pastel'], cats: ['shopping', 'food & drink', 'lifestyle'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 6, color: '#111111', accent: '#f26a3d', letterSpacing: -1.5, lineHeight: 1.1, subSize: 2.8, subOpacity: 70 },
    bg: { type: 'solid', c1: '#fbe9dc' }, device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S8([
      ['text-top-left', 'The smart\nway to\n[AppScreens]', '[AppScreens]\'e\nakıllı yol', null, null, { dev: { x: 22, y: 30, w: 84, rot: -14 } }],
      ['bleed', '', '', null, null, { dev: { x: 4, y: 12, w: 84, rot: 14 }, els: [ICON('appscreens', '#f26a3d', '#111111', 20, 92)] }],
      ['text-bottom-left', 'Get great plans for\n[everyone].', '[Herkes] için\nharika planlar.', null, null, { dev: { x: 19, y: 2, w: 62 } }],
      ['bleed-left', 'Play before you\n[purchase].', '[Satın almadan]\nönce oyna.', null, null, { els: [{ kind: 'pill', x: 30, y: 26, size: 2.2, text: 'VISA · Mastercard · Apple Pay', emoji: '', bg: '#ffffff', color: '#111111', rot: 0 }] }],
      ['bleed-left', 'Make your\nscreenshots the\n[way you want them].', 'Görsellerini\n[istediğin gibi]\nyap.', null],
      ['bleed-left', 'Order in\n[seconds].', '[Saniyede]\nsipariş.', null],
      ['bleed-left', 'Track your\n[delivery].', '[Teslimatı]\ntakip et.', null],
      ['bleed-left', 'Free first\n[order].', 'İlk [sipariş]\nücretsiz.', null],
    ]) });

  /* Arden — nane pastel zemin, kutu vurgu başlık, beyaz cihaz + saat */
  defineTemplate({ key: 'arden', name: 'Arden', desc: T('Nane-krem pastel zemin, koyu yeşil kutu içinde vurgulu başlık ve ince alt satır; beyaz cihaz, yaprak dokunuşları. Yaşam, sağlık ve seyahat uygulamaları için.', 'Mint-cream pastel background, headline with a deep-green boxed emphasis and a light second line; white device with leafy accents. For lifestyle, health and travel apps.'),
    tags: ['advanced', 'pastel', 'box', 'graphics'], cats: ['lifestyle', 'health & fitness', 'travel'], theme: 'light', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 6, color: '#123d2a', accent: '#1f7a5c', hlStyle: 'marker', hlTextColor: '#ffffff', letterSpacing: -1.5, lineHeight: 1.1, subSize: 2.9, subColor: '#123d2a', subOpacity: 80 },
    bg: { type: 'solid', c1: '#e9f5ee', pattern: 'blobs', patternColor: '#1f7a5c', patternOpacity: 10 }, device: { frame: 'iphone-pro', color: 'white', shadow: 40, fit: 'top' },
    screens: S8([
      ['bleed', '[Over 100]', '[100\'den fazla]', 'picture perfect templates', 'kusursuz şablon', { els: [{ kind: 'emoji', x: 14, y: 90, size: 7, text: '🌿' }] }],
      ['bleed', '[Boost ASO]', '[ASO\'yu artır]', 'conversions up to 35%', 'dönüşüm %35\'e kadar', { els: [{ kind: 'emoji', x: 86, y: 90, size: 7, text: '🍃' }] }],
      ['bleed', '[Professional]', '[Profesyonel]', 'app store screenshots', 'mağaza görselleri'],
      ['bleed', '[App Store]', '[App Store]', 'upload saves you time', 'yükleme zaman kazandırır'],
      ['bleed', '[Saves time]', '[Zaman kazandırır]', 'like hours and days', 'saatler ve günler'],
      ['bleed', '[Wellness]', '[Sağlık]', 'routines that stick', 'kalıcı rutinler'],
      ['bleed', '[Sync]', '[Eşitle]', 'with your watch', 'saatinle'],
      ['bleed', '[Start]', '[Başla]', 'your first week free', 'ilk hafta ücretsiz'],
    ]) });

  /* Halo — yeşil pastel zemin, koyu yeşil kalın başlık + alt açıklama, yeşil çerçeveli cihaz */
  defineTemplate({ key: 'halo', name: 'Halo', desc: T('Yeşil pastel zemin, ortalı koyu yeşil kalın başlık ve küçük açıklama; yeşil gövdeli cihaz alttan taşar. Yemek, kahve ve yerel uygulamalar için.', 'Green pastel background, centred bold deep-green headline with a small description; green-bodied device bleeding off the bottom. For food, coffee and local apps.'),
    tags: ['simple', 'light', 'minimal'], cats: ['food & drink', 'lifestyle', 'shopping'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 6.2, color: '#0f4d3a', accent: '#0f4d3a', letterSpacing: -1.5, lineHeight: 1.08, subSize: 2.8, subColor: '#0f4d3a', subOpacity: 70 },
    bg: { type: 'solid', c1: '#e3f3e6' }, device: { frame: 'iphone-pro', color: 'mint', shadow: 40, fit: 'top' },
    screens: S8([
      ['bleed', 'App Store\nAssets.', 'App Store\nGörselleri.', 'Create your app store screenshots with AppScreens.', 'Mağaza görsellerini AppScreens ile oluştur.'],
      ['bleed', 'One Design\nFor All.', 'Herkese\nTek Tasarım.', 'Create your app store screenshots with AppScreens.', 'Mağaza görsellerini AppScreens ile oluştur.'],
      ['bleed', 'Boost\nDownloads.', 'İndirmeleri\nArtır.', 'Create your app store screenshots with AppScreens.', 'Mağaza görsellerini AppScreens ile oluştur.'],
      ['bleed', 'Stand Out In\nCrowds.', 'Kalabalıkta\nÖne Çık.', 'Create your app store screenshots with AppScreens.', 'Mağaza görsellerini AppScreens ile oluştur.'],
      ['bleed', 'Quick and\nSimple.', 'Hızlı ve\nBasit.', 'Create your app store screenshots with AppScreens.', 'Mağaza görsellerini AppScreens ile oluştur.'],
      ['bleed', 'Order\nAhead.', 'Önceden\nSipariş.', 'Skip the queue every morning.', 'Her sabah sırayı atla.'],
      ['bleed', 'Earn\nRewards.', 'Ödül\nKazan.', 'A free coffee every ten.', 'Her onda bir kahve bedava.'],
      ['bleed', 'Join\nToday.', 'Bugün\nKatıl.', 'It takes thirty seconds.', 'Otuz saniye sürer.'],
    ]) });

  /* Midnight — gece mavisi gradyan, serif beyaz başlık, üst üste eğik cihazlar */
  defineTemplate({ key: 'midnight', name: 'Midnight', desc: T('Gece mavisi gradyan, ortalı serif beyaz başlık ve ince açıklama; ilk karede yelpaze cihazlar, bazı karelerde metin altta. Sosyal ve seyahat uygulamaları için.', 'Midnight-blue gradient, centred serif white headline with a light description; fanned devices on the first screen, bottom text on some. For social and travel apps.'),
    tags: ['advanced', 'dark', 'serif', 'multi layered'], cats: ['social networking', 'travel', 'photo & video'], theme: 'dark', skill: 'advanced',
    style: { font: 'playfair', weight: 500, size: 6, color: '#ffffff', accent: '#ffffff', letterSpacing: -0.5, lineHeight: 1.1, subFont: 'inter', subSize: 2.7, subColor: '#ffffff', subOpacity: 70 },
    bg: { type: 'linear', c1: '#1d2b64', c2: '#0b1024', angle: 180 }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Stackable layers', 'Yığılabilir katmanlar', 'App subtitle text, intuitive design and powerful features.', 'Alt başlık, sezgisel tasarım ve güçlü özellikler.', { dev: { x: 26, y: 30, w: 70, rot: 14 }, extra: [{ type: 'device', name: 'Device 2', frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top', x: 2, y: 34, w: 70, rot: -10 }] }],
      ['text-bottom', 'New from\nAppScreens', 'AppScreens\'ten\nyeni', null, null, { dev: { x: 10, y: 2, w: 66, rot: 10 } }],
      ['bleed', 'Smart Design', 'Akıllı Tasarım', 'App subtitle text, intuitive design and powerful features.', 'Alt başlık, sezgisel tasarım ve güçlü özellikler.', { els: [{ kind: 'sparkle', x: 50, y: 6, size: 2.4, color: '#c9b8ff' }], titleBox: { y: 10 } }],
      ['text-bottom', 'Latest Devices', 'En yeni cihazlar', 'App subtitle text, intuitive design and powerful features.', 'Alt başlık, sezgisel tasarım ve güçlü özellikler.', { dev: { x: 19, y: 2, w: 62 } }],
      ['bleed', 'Pixel-Perfect', 'Piksel Mükemmel', 'App subtitle text, intuitive design and powerful features.', 'Alt başlık, sezgisel tasarım ve güçlü özellikler.', { els: [{ kind: 'sparkle', x: 50, y: 6, size: 2.4, color: '#ffb8d9' }], titleBox: { y: 10 } }],
      ['bleed', 'Share moments', 'Anları paylaş', 'With the people who matter.', 'Önemli insanlarla.'],
      ['text-bottom', 'Plan trips', 'Gezi planla', 'Together, in one place.', 'Birlikte, tek yerde.', { dev: { x: 19, y: 2, w: 62 } }],
      ['bleed', 'Join tonight', 'Bu gece katıl', 'Free forever.', 'Sonsuza dek ücretsiz.'],
    ]) });

  /* Nexa — kırmızı→mor gradyan, büyük harf beyaz başlık, eğik cihazlar, alt metin */
  defineTemplate({ key: 'nexa', name: 'Nexa', desc: T('Kırmızı-mor gradyan zemin, büyük harfli beyaz başlık; dönüşümlü eğik cihaz, bazı karelerde metin altta. Sosyal ve flört uygulamaları için.', 'Red-to-purple gradient background, uppercase white headline; alternating tilted device with bottom text on some screens. For social and dating apps.'),
    tags: ['advanced', 'gradient', 'bold'], cats: ['social networking', 'lifestyle', 'entertainment'], theme: 'colourful', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 5, color: '#ffffff', accent: '#ffffff', uppercase: true, letterSpacing: 0.5, lineHeight: 1.15, subSize: 2.8, subColor: '#ffffff', subOpacity: 80 },
    bg: { type: 'linear', c1: '#e63946', c2: '#5a2ea6', angle: 160 }, device: { frame: 'iphone-pro', color: 'white', shadow: 50, fit: 'top' },
    screens: S8([
      ['text-top-left', 'appscreens', 'appscreens', 'Serious appiness at your fingertips!', 'Parmak ucunda ciddi mutluluk!', { titleStyle: { uppercase: false, size: 7, weight: 700 }, dev: { x: 14, y: 40, w: 72, rot: -10 } }],
      ['tilt', 'Start your\nAppScreens journey,\nuse our templates\nand stand out\nfrom the crowd', 'AppScreens\nyolculuğuna başla,\nşablonları kullan,\nöne çık', null],
      ['text-bottom', 'Start your\nAppScreens journey,\nuse our templates\nand stand out\nfrom the crowd', 'AppScreens\nyolculuğuna başla,\nşablonları kullan,\nöne çık', null, null, { dev: { x: 24, y: 2, w: 66, rot: 10 } }],
      ['tilt-r', 'Start your\nAppScreens journey,\nuse our templates\nand stand out\nfrom the crowd', 'AppScreens\nyolculuğuna başla,\nşablonları kullan,\nöne çık', null],
      ['text-bottom', 'Start your\nAppScreens journey', 'AppScreens\nyolculuğuna başla', null, null, { dev: { x: 10, y: 2, w: 66, rot: -10 } }],
      ['tilt', 'Meet people\nnear you', 'Yakınındaki\ninsanlarla tanış', null],
      ['tilt-r', 'Match by\ninterests', 'İlgi alanına göre\neşleş', null],
      ['text-bottom', 'Join\nfree', 'Ücretsiz\nkatıl', null, null, { dev: { x: 19, y: 2, w: 62 } }],
    ]) });

  /* Cove — açık nane zemin, sol koyu başlık, yeşil çerçeveli cihaz, güneş dekoru */
  defineTemplate({ key: 'cove', name: 'Cove', desc: T('Açık nane zemin, koyu yeşil kalın başlık; ilk karede büyük eğik cihaz ve güneş simgesi, yeşil çerçeveli düz cihaz. Kahve, yemek ve seyahat uygulamaları için.', 'Light mint background, bold deep-green headline; a big tilted device and a sun icon on the first screen, green-framed straight device elsewhere. For coffee, food and travel apps.'),
    tags: ['advanced', 'light', 'minimal'], cats: ['food & drink', 'travel', 'lifestyle'], theme: 'light', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 5.8, color: '#0f4d3a', accent: '#0f4d3a', letterSpacing: -1.5, lineHeight: 1.1, subSize: 2.8, subColor: '#0f4d3a', subOpacity: 70 },
    bg: { type: 'solid', c1: '#e8f6f1' }, device: { frame: 'iphone-pro', color: 'mint', shadow: 40, fit: 'top' },
    screens: S8([
      ['text-bottom', 'Create your\nApp Store\nscreenshots\nwith AppScreens', 'Mağaza\ngörsellerini\nAppScreens ile\noluştur', null, null, { titleBox: { x: 46, w: 50, y: 58, align: 'left' }, dev: { x: -34, y: 2, w: 76, rot: 14 }, els: [{ kind: 'ring', x: 74, y: 44, size: 3, color: '#0f4d3a' }] }],
      ['bleed', '', '', null, null, { dev: { x: 16, y: 8, w: 70, rot: 8 } }],
      ['bleed', 'Improve your ASO\nand downloads', 'ASO\'nu ve\nindirmeleri artır', null],
      ['bleed', 'Use automatic\ntranslations', 'Otomatik çeviri\nkullan', null],
      ['bleed', 'Add panoramic\nimages & gradients', 'Panoramik görsel\nve gradyan ekle', null],
      ['bleed', 'Find cafés\nnearby', 'Yakındaki\nkafeleri bul', null],
      ['bleed', 'Save your\nfavourites', 'Favorilerini\nkaydet', null],
      ['bleed', 'Start\nexploring', 'Keşfetmeye\nbaşla', null],
    ]) });

  /* Tinder — kırmızı→pembe gradyan, beyaz başlık, düz cihaz, ilk kare fotoğraf */
  defineTemplate({ key: 'tinder', name: 'Inspired by Tinder', desc: T('Kırmızı-pembe gradyan zemin, ortalı kalın beyaz başlık ve düz siyah cihaz; ilk karede kutu vurgulu başlık ve fotoğraf alanı. Flört ve sosyal uygulamalar için.', 'Red-to-pink gradient, centred bold white headline and a straight black device; a boxed emphasis and photo area on the first screen. For dating and social apps.'),
    tags: ['simple', 'gradient', 'colourful'], cats: ['social networking', 'lifestyle', 'entertainment'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.5, lineHeight: 1.1, subSize: 2.8, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'linear', c1: '#fd267a', c2: '#ff6036', angle: 200 }, device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S8([
      ['bleed-left', 'See What\'s\nOut There\n[Show Off]', 'Neler Var\nGör\n[Göster]', null, null, { titleStyle: { hlStyle: 'marker', accent: '#111111', hlTextColor: '#ffffff' }, dev: { x: 17, y: 30, w: 66, rot: -8 } }],
      ['bleed', '', '', null, null, { dev: { x: 10, y: 6, w: 80, rot: 0 } }],
      ['bleed', 'Complete your app\nscreens', 'Uygulama ekranlarını\ntamamla', null],
      ['bleed', 'Connect with a\ncompany who share\nyour interests', 'İlgi alanlarını paylaşan\nbir şirketle bağlan', null],
      ['bleed', 'Setup your profile', 'Profilini kur', 'Add your apps to your account to keep your projects organised', 'Projelerini düzenli tutmak için uygulamalarını ekle'],
      ['bleed', 'Swipe with\nintention', 'Niyetle\nkaydır', null],
      ['bleed', 'Safer\nby design', 'Tasarımı gereği\ndaha güvenli', null],
      ['bleed', 'Start\nswiping', 'Kaydırmaya\nbaşla', null],
    ]) });

  /* Translate — kırmızı→mavi dikey gradyan, beyaz kutu içinde siyah başlık, düz cihaz */
  defineTemplate({ key: 'translate', name: 'Translate', desc: T('Kırmızıdan maviye dikey gradyan, beyaz kutu içinde sol hizalı siyah başlık ve alt satır; düz siyah cihaz. Çeviri, dil ve iletişim uygulamaları için.', 'Vertical red-to-blue gradient, left-aligned black headline in a white box with a second line; straight black device. For translation, language and communication apps.'),
    tags: ['simple', 'gradient', 'box'], cats: ['reference', 'education', 'utilities'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 5.4, color: '#111111', accent: '#111111', letterSpacing: -1.2, lineHeight: 1.12, box: 'solid', boxColor: '#ffffff', boxRadius: 1.5, subSize: 2.6, subColor: '#111111', subOpacity: 100, titleBox: { x: 8, w: 60, h: 10 }, subBox: { x: 8 } },
    bg: { type: 'linear', c1: '#ff2d2d', c2: '#2d6bff', angle: 180 }, device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Hello!', 'Merhaba!', 'All around the world.', 'Tüm dünyada.', { subStyle: { box: 'solid', boxColor: '#ffffff' } }],
      ['bleed-left', 'Automatic.', 'Otomatik.', 'From Google Translate.', 'Google Translate\'ten.'],
      ['bleed-left', 'Translations.', 'Çeviriler.', 'In each language.', 'Her dilde.'],
      ['bleed-left', 'Customisable.', 'Özelleştirilebilir.', 'For each translation.', 'Her çeviri için.'],
      ['bleed-left', 'For Your App.', 'Uygulaman İçin.', 'Ready to upload.', 'Yüklemeye hazır.'],
      ['bleed-left', 'Camera.', 'Kamera.', 'Point and translate.', 'Tut ve çevir.'],
      ['bleed-left', 'Offline.', 'Çevrimdışı.', 'No signal needed.', 'Sinyal gerekmez.'],
      ['bleed-left', 'Free.', 'Ücretsiz.', 'Download today.', 'Bugün indir.'],
    ]) });

  /* Flirtfame — siyah/beyaz dönüşümlü, kalın başlık, eğik cihaz çifti */
  defineTemplate({ key: 'flirtfame', name: 'Inspired by Flirtfame', desc: T('Siyah ve beyaz dönüşümlü zeminler, ortalı kalın başlık; ilk karede iki eğik cihaz ve alt metin. Flört, yemek ve sosyal uygulamalar için.', 'Alternating black and white backgrounds, centred bold headline; two tilted devices and bottom text on the first screen. For dating, food and social apps.'),
    tags: ['advanced', 'dark', 'bold', 'multi layered'], cats: ['social networking', 'food & drink', 'lifestyle'], theme: 'dark', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 6.2, color: '#ffffff', accent: '#ff4d6d', letterSpacing: -1.5, lineHeight: 1.08, subSize: 2.8, subColor: '#ffffff', subOpacity: 75 },
    bg: { type: 'solid', c1: '#111111' }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Swipe.\nMatch.\nGrill.', 'Kaydır.\nEşleş.\nIzgara.', null, null, { dev: { x: 24, y: 30, w: 70, rot: 12 }, extra: [{ type: 'device', name: 'Device 2', frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top', x: 2, y: 34, w: 70, rot: -8 }], els: [{ kind: 'text', x: 24, y: 88, size: 3, text: T('Izgara ve BBQ\nilhamı', 'Grill & BBQ\nInspiration'), color: '#ffffff', weight: 800 }] }],
      ['tilt', 'Your next\nflame awaits', 'Sıradaki\naşkın bekliyor', null],
      ['bleed', 'Match on\nTaste & [Vibes]', 'Damak ve\n[enerjiye] göre eşleş', null, null, Object.assign(solid('#ffffff'), { titleStyle: { color: '#111111' }, dev: { color: 'white' } })],
      ['bleed', 'Matches you\'ll\nactually [like]', 'Gerçekten\n[seveceğin] eşleşmeler', null, null, Object.assign(solid('#ffffff'), { titleStyle: { color: '#111111' }, dev: { color: 'white' } })],
      ['bleed', 'Plan perfect\ndate [together]', 'Mükemmel buluşmayı\n[birlikte] planla', null, null, Object.assign(solid('#ffffff'), { titleStyle: { color: '#111111' }, dev: { color: 'white' } })],
      ['tilt-r', 'Chat with\n[confidence]', '[Güvenle]\nsohbet', null],
      ['bleed', 'Verified\n[profiles]', 'Doğrulanmış\n[profiller]', null, null, Object.assign(solid('#ffffff'), { titleStyle: { color: '#111111' }, dev: { color: 'white' } })],
      ['tilt', 'Join\n[free]', '[Ücretsiz]\nkatıl', null],
    ]) });

  /* Solis — canlı düz renkler (mavi, turuncu, sarı), büyük harf başlık, siyah cihaz */
  defineTemplate({ key: 'solis', name: 'Solis', desc: T('Her karede farklı canlı düz zemin (kırmızı, mavi, turuncu, sarı); büyük harfli kalın başlık ve düz siyah cihaz, ilk karede çift cihaz. Sosyal ve eğlence uygulamaları için.', 'A different vivid flat colour per screen (red, blue, orange, yellow); uppercase bold headline and a straight black device, two devices on the first screen. For social and entertainment apps.'),
    tags: ['simple', 'colourful', 'bold'], cats: ['social networking', 'entertainment', 'lifestyle'], theme: 'colourful', skill: 'simple', free: false,
    style: { font: 'inter', weight: 900, size: 5.4, color: '#ffffff', accent: '#ffffff', uppercase: true, letterSpacing: 0, lineHeight: 1.12, subSize: 2.8, subColor: '#ffffff', subOpacity: 85 },
    device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Create [beautiful] app\nscreenshots like this', 'Böyle [güzel] uygulama\ngörselleri oluştur', null, null, Object.assign(solid('#e63946'), { dev: { x: 34, y: 28, w: 66, rot: 0 }, extra: [{ type: 'device', name: 'Device 2', frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top', x: -10, y: 36, w: 66, rot: 0 }], els: [{ kind: 'text', x: 26, y: 90, size: 2.4, text: T('• Uygulamanı göster\n• Kalabalıktan sıyrıl\n• Daha çok indirme', '• Show off your app\n• Stand out from the crowd\n• Get more downloads'), color: '#ffffff', weight: 600 }] })],
      ['bleed', 'Show off your app in\nthe [best] way', 'Uygulamanı [en iyi]\nşekilde göster', null, null, Object.assign(solid('#5aa9ff'), { titleStyle: { accent: '#0b2a6b' } })],
      ['bleed', 'Create [standout] app\nscreenshots like this', 'Böyle [öne çıkan]\ngörseller oluştur', null, null, Object.assign(solid('#ff7a1a'), { titleStyle: { accent: '#111111' } })],
      ['bleed', 'Show off your app in\nthe [best] way', 'Uygulamanı [en iyi]\nşekilde göster', null, null, Object.assign(solid('#ffb703'), { titleStyle: { color: '#111111', accent: '#ffffff' } })],
      ['bleed', 'Create [standout] app\nscreenshots like this', 'Böyle [öne çıkan]\ngörseller oluştur', null, null, Object.assign(solid('#ffde2e'), { titleStyle: { color: '#111111', accent: '#e63946' } })],
      ['bleed', 'Share with\n[friends]', '[Arkadaşlarla]\npaylaş', null, null, Object.assign(solid('#e63946'))],
      ['bleed', 'Discover\n[more]', 'Daha [çok]\nkeşfet', null, null, Object.assign(solid('#5aa9ff'), { titleStyle: { accent: '#0b2a6b' } })],
      ['bleed', 'Join\n[today]', '[Bugün]\nkatıl', null, null, Object.assign(solid('#ff7a1a'), { titleStyle: { accent: '#111111' } })],
    ]) });

  /* Ember — koyu kırmızı/bordo gradyan, beyaz başlık, eğik cihazlar */
  defineTemplate({ key: 'ember', name: 'Ember', desc: T('Bordo-kırmızı koyu gradyan, ortalı kalın beyaz başlık; ilk karede eğik cihaz çifti. Sosyal ve fotoğraf uygulamaları için.', 'Deep maroon-red gradient, centred bold white headline; a tilted device pair on the first screen. For social and photo apps.'),
    tags: ['advanced', 'dark', 'gradient', 'multi layered'], cats: ['social networking', 'photo & video', 'entertainment'], theme: 'dark', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 5.8, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.5, lineHeight: 1.1, subSize: 2.8, subColor: '#ffffff', subOpacity: 75 },
    bg: { type: 'linear', c1: '#7a1030', c2: '#2a0a12', angle: 180 }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['text-top', 'Search through\ntemplates to find\none you love', 'Sevdiğin şablonu\nbulmak için ara', null, null, { dev: { x: 24, y: 30, w: 70, rot: 12 }, extra: [{ type: 'device', name: 'Device 2', frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top', x: 4, y: 34, w: 70, rot: -8 }] }],
      ['tilt', 'Improve your ASO\nto increase your\ndownloads', 'ASO\'nu geliştir,\nindirmeleri artır', null],
      ['bleed', 'Show off your app in\nthe best way in the\nstore', 'Uygulamanı mağazada\nen iyi şekilde göster', null],
      ['bleed', 'Create your own\nstandout app store\nscreenshots', 'Öne çıkan mağaza\ngörsellerini oluştur', null],
      ['bleed', 'Incredible tools to\nrelease your app to\nthe world', 'Uygulamanı dünyaya\nyayınlayacak araçlar', null],
      ['tilt-r', 'Share\nmoments', 'Anları\npaylaş', null],
      ['bleed', 'Go\nlive', 'Canlı\nyayın', null],
      ['bleed', 'Join\nfree', 'Ücretsiz\nkatıl', null],
    ]) });

  /* Kic — pastel dönüşümlü (nane, mavi, pembe, sarı), koyu başlık, beyaz cihaz */
  defineTemplate({ key: 'kic', name: 'Inspired by Kic', desc: T('Her karede farklı pastel zemin (nane, mavi, pembe, sarı, lavanta); koyu kalın başlık ve beyaz düz cihaz, ilk karede ikon + ad. Fitness ve sağlık uygulamaları için.', 'A different pastel per screen (mint, blue, pink, yellow, lavender); bold dark headline and a straight white device, icon + name on the first screen. For fitness and wellness apps.'),
    tags: ['simple', 'pastel', 'colourful'], cats: ['health & fitness', 'lifestyle', 'food & drink'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 5.6, color: '#1a1a2e', accent: '#1a1a2e', letterSpacing: -1.2, lineHeight: 1.12, subSize: 2.8, subOpacity: 70 },
    device: { frame: 'iphone-pro', color: 'white', shadow: 40, fit: 'top' },
    screens: S8([
      ['bleed', 'Create\napp store\nassets', 'Mağaza\ngörselleri\noluştur', null, null, Object.assign(solid('#cdeee3'), { titleStyle: { uppercase: true, size: 6.2 }, titleBox: { y: 9 }, els: [ICON('appscreens', '#1a1a2e', '#1a1a2e')] })],
      ['bleed', 'Browse through our\nstunning templates to find\nyour favourites', 'Çarpıcı şablonlar\narasında favorini bul', null, null, solid('#d6e6ff')],
      ['bleed', 'Enhance your ASO to\nimprove downloads and\nconversions', 'ASO\'nu güçlendir,\nindirme ve dönüşümü artır', null, null, solid('#ffd9e0')],
      ['bleed', 'Create your stunning\nstandout app store\nscreenshots', 'Çarpıcı, öne çıkan\nmağaza görsellerini oluştur', null, null, solid('#fff1c2')],
      ['bleed', 'Incredible tools to help\nrelease your app to the\nworld', 'Uygulamanı dünyaya\nyayınlayacak araçlar', null, null, solid('#e4dbff')],
      ['bleed', 'Workouts\nfor every mood', 'Her ruh haline\nantrenman', null, null, solid('#cdeee3')],
      ['bleed', 'Recipes\nyou\'ll crave', 'Canının çekeceği\ntarifler', null, null, solid('#d6e6ff')],
      ['bleed', 'Start\nfree', 'Ücretsiz\nbaşla', null, null, solid('#ffd9e0')],
    ]) });

  /* Axiom — lacivert-gri, büyük tek kelime başlık + renkli nokta, siyah cihaz, laurel */
  defineTemplate({ key: 'axiom', name: 'Axiom', desc: T('Koyu füme zemin, büyük tek kelimelik beyaz başlık ve renkli nokta vurgusu; siyah cihaz, bazı karelerde metin ortada ve Editörün Seçimi laureli. Fitness ve premium uygulamalar için.', 'Dark charcoal background, big single-word white headline with a coloured full stop; black device, mid-screen text and an Editors\' Choice laurel on some screens. For fitness and premium apps.'),
    tags: ['advanced', 'dark', 'bold', 'badges'], cats: ['health & fitness', 'sports', 'business'], theme: 'dark', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 8.6, color: '#ffffff', accent: '#ff5ca8', letterSpacing: -2.5, lineHeight: 1.04, subSize: 2.8, subColor: '#ffffff', subOpacity: 70 },
    bg: { type: 'solid', c1: '#20242e' }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Design[.]', 'Tasarla[.]', null, null, { titleStyle: { accent: '#ff5ca8' } }],
      ['bleed-left', 'Create[.]', 'Oluştur[.]', null, null, { titleStyle: { accent: '#4cc9ff' } }],
      ['bleed-left', 'Build[.]', 'Kur[.]', null, null, { titleStyle: { accent: '#ffd23f' } }],
      ['text-bottom', 'Take your projects\nfurther than [ever]\nbefore.', 'Projelerini her\nzamankinden [ileri]\ntaşı.', null, null, { titleStyle: { size: 5.2, letterSpacing: -1, accent: '#ff5ca8' }, titleBox: { y: 40, h: 16 }, dev: { x: 19, y: -50, w: 62 }, extra: [{ type: 'device', name: 'Device 2', frame: 'iphone-pro', color: 'black', shadow: 40, fit: 'top', x: 19, y: 58, w: 62, rot: 0 }] }],
      ['text-bottom', '', '', null, null, { dev: { x: 19, y: -50, w: 62 }, extra: [{ type: 'device', name: 'Device 2', frame: 'iphone-pro', color: 'black', shadow: 40, fit: 'top', x: 19, y: 66, w: 62, rot: 0 }], els: [{ kind: 'laurel', x: 50, y: 50, size: 2.6, text: T('App Store\nEditörün Seçimi', "App Store\nEditors' Choice"), color: '#ffffff' }] }],
      ['bleed-left', 'Train[.]', 'Antrenman[.]', null, null, { titleStyle: { accent: '#7cff6b' } }],
      ['bleed-left', 'Track[.]', 'İzle[.]', null, null, { titleStyle: { accent: '#4cc9ff' } }],
      ['bleed-left', 'Win[.]', 'Kazan[.]', null, null, { titleStyle: { accent: '#ffd23f' } }],
    ]) });

  /* Snapchat — sarı düz zemin, kalın siyah başlık + alt açıklama, beyaz cihaz */
  defineTemplate({ key: 'snapchat', name: 'Inspired by Snapchat', desc: T('Parlak sarı düz zemin, ortalı kalın siyah tek kelime başlık ve alt açıklama; beyaz cihaz. Sosyal ve mesajlaşma uygulamaları için.', 'Bright flat yellow, centred bold single-word black headline with a description; white device. For social and messaging apps.'),
    tags: ['simple', 'colourful', 'bold'], cats: ['social networking', 'photo & video', 'entertainment'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 7, color: '#111111', accent: '#111111', letterSpacing: -2, lineHeight: 1.05, subSize: 2.9, subOpacity: 80 },
    bg: { type: 'solid', c1: '#fffc00' }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed', 'Create', 'Oluştur', 'Make your best app screenshots', 'En iyi uygulama görsellerini yap'],
      ['bleed', 'Discover', 'Keşfet', 'Over 50 templates ready to use', '50\'den fazla hazır şablon'],
      ['bleed', 'Design', 'Tasarla', 'Limitless options for your app', 'Uygulaman için sınırsız seçenek'],
      ['bleed', 'Improve', 'Geliştir', 'Make your app standout', 'Uygulamanı öne çıkar'],
      ['bleed', 'Create', 'Oluştur', 'Make your best app screenshots', 'En iyi uygulama görsellerini yap'],
      ['bleed', 'Snap', 'Çek', 'Share the moment instantly', 'Anı anında paylaş'],
      ['bleed', 'Chat', 'Sohbet', 'Messages that disappear', 'Kaybolan mesajlar'],
      ['bleed', 'Join', 'Katıl', 'Free, today', 'Ücretsiz, bugün'],
    ]) });

  /* Rove — koyu yeşil zemin, ince beyaz başlık, beyaz cihaz, metin bazen altta */
  defineTemplate({ key: 'rove', name: 'Rove', desc: T('Koyu orman yeşili zemin, ortalı ince beyaz başlık; beyaz düz cihaz, bazı karelerde metin altta. Seyahat, mesajlaşma ve yaşam uygulamaları için.', 'Deep forest-green background, centred regular white headline; straight white device with bottom text on some screens. For travel, messaging and lifestyle apps.'),
    tags: ['simple', 'dark', 'minimal'], cats: ['travel', 'social networking', 'lifestyle'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 500, size: 5.2, color: '#ffffff', accent: '#ffffff', letterSpacing: -1, lineHeight: 1.15, subSize: 2.8, subColor: '#ffffff', subOpacity: 70 },
    bg: { type: 'solid', c1: '#173d33' }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed', 'Easy, simple, limitless.\nUpdated as you go.', 'Kolay, basit, sınırsız.\nAnında güncel.', null],
      ['bleed', 'Search through lots\nof templates', 'Çok sayıda şablon\narasında ara', null],
      ['text-bottom', 'Improve your ASO &\nincrease downloads', 'ASO\'nu geliştir,\nindirmeleri artır', null, null, { dev: { x: 19, y: 4, w: 62 } }],
      ['text-bottom', 'Show off your app in\nthe best way', 'Uygulamanı en iyi\nşekilde göster', null, null, { dev: { x: 19, y: 4, w: 62 } }],
      ['bleed', 'Create your standout\nApp Store screenshots', 'Öne çıkan mağaza\ngörsellerini oluştur', null],
      ['bleed', 'Plan trips\ntogether', 'Birlikte\ngezi planla', null],
      ['text-bottom', 'Split costs\nfairly', 'Masrafları adil\nböl', null, null, { dev: { x: 19, y: 4, w: 62 } }],
      ['bleed', 'Start\nroving', 'Yola\nçık', null],
    ]) });

  /* Bubbles — pembe/mavi pastel, kalın başlık, siyah kutu vurgu, siyah cihaz */
  defineTemplate({ key: 'bubbles', name: 'Bubbles', desc: T('Pembe ve mavi pastel zeminler, kalın başlık ve siyah kutu içinde beyaz vurgu; siyah cihaz, ilk karede italik satır. Sosyal ve arkadaşlık uygulamaları için.', 'Pink and blue pastel backgrounds, bold headline with a white-on-black boxed emphasis; black device with an italic line on the first screen. For social and friendship apps.'),
    tags: ['advanced', 'pastel', 'box', 'bold'], cats: ['social networking', 'lifestyle', 'entertainment'], theme: 'light', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 6.4, color: '#111111', accent: '#111111', hlStyle: 'marker', hlTextColor: '#ffffff', letterSpacing: -1.5, lineHeight: 1.08, subSize: 2.8, subOpacity: 70 },
    bg: { type: 'solid', c1: '#ffd6e6' }, device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Find new\nbesties\nwith your\ninterests\nat heart 💛', 'İlgi alanlarınla\nyeni dostlar\nbul 💛', null, null, { titleStyle: { color: '#ffffff', weight: 600, size: 6.4 }, bg: { type: 'linear', c1: '#ff5c8a', c2: '#ff9a3c', angle: 160 }, dev: null, els: [{ kind: 'emoji', x: 50, y: 72, size: 24, text: '🙋‍♂️' }] }],
      ['bleed', 'Meet new\n[friends]', 'Yeni\n[arkadaşlar]', null],
      ['bleed', 'Follow the\n[feeds]', '[Akışları]\ntakip et', null, null, solid('#d6e8ff')],
      ['text-bottom', 'Notify\n[friends]', '[Arkadaşları]\nbilgilendir', null, null, Object.assign(solid('#d6e8ff'), { dev: { x: 19, y: 4, w: 62 } })],
      ['bleed', 'Scroll through\nyour favourite\n[feeds]', 'Favori [akışlarını]\nkaydır', null],
      ['bleed', 'Plan\n[meetups]', '[Buluşmalar]\nplanla', null, null, solid('#d6e8ff')],
      ['bleed', 'Safe\n[spaces]', 'Güvenli\n[alanlar]', null],
      ['bleed', 'Join\n[free]', '[Ücretsiz]\nkatıl', null, null, solid('#d6e8ff')],
    ]) });

  /* Power — koyu füme, büyük harf geniş aralıklı ince başlık, beyaz cihaz */
  defineTemplate({ key: 'power', name: 'Power', desc: T('Koyu füme zemin, büyük harfli geniş aralıklı ince beyaz başlık; beyaz cihaz, ilk kare fotoğraf üstünde alt metin. Fitness ve spor uygulamaları için.', 'Dark charcoal background, uppercase wide-spaced light white headline; white device, first screen is a photo with bottom text. For fitness and sports apps.'),
    tags: ['simple', 'dark', 'minimal', 'photo'], cats: ['health & fitness', 'sports', 'lifestyle'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 500, size: 3.8, color: '#ffffff', accent: '#ffffff', uppercase: true, letterSpacing: 3, lineHeight: 1.3, subSize: 2.6, subColor: '#ffffff', subOpacity: 70, titleBox: { y: 8 } },
    bg: { type: 'solid', c1: '#1e1f24' }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['full-bottom', 'Create\nscreenshots', 'Görsel\noluştur', null, null, { titleStyle: { size: 4.6 }, bg: { type: 'linear', c1: '#5a4a6a', c2: '#1e1f24', angle: 180 } }],
      ['small', 'Create your screenshots\nanytime, anywhere', 'Görsellerini her an,\nher yerde oluştur', null],
      ['small', 'Create your screenshots\nanytime, anywhere', 'Görsellerini her an,\nher yerde oluştur', null],
      ['small', 'Create your screenshots\nanytime, anywhere', 'Görsellerini her an,\nher yerde oluştur', null],
      ['small', 'Create your screenshots\nanytime, anywhere', 'Görsellerini her an,\nher yerde oluştur', null],
      ['small', 'Train\nanywhere', 'Her yerde\nantrenman', null],
      ['small', 'Measure\neverything', 'Her şeyi\nölç', null],
      ['small', 'Start\ntoday', 'Bugün\nbaşla', null],
    ]) });

  /* Aeris — koyu yeşil zemin, beyaz başlık, üst üste cihazlar, yaprak dekoru */
  defineTemplate({ key: 'aeris', name: 'Aeris', desc: T('Koyu çam yeşili zemin, ortalı beyaz başlık ve alt satır; üst üste bindirilmiş iki beyaz cihaz, şeftali çipler. Yaşam ve iş uygulamaları için.', 'Deep pine-green background, centred white headline with a second line; two overlapping white devices and peach chips. For lifestyle and business apps.'),
    tags: ['advanced', 'dark', 'multi layered', 'chips'], cats: ['lifestyle', 'business', 'productivity'], theme: 'dark', skill: 'advanced',
    style: { font: 'inter', weight: 700, size: 5.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.2, lineHeight: 1.12, subSize: 2.8, subColor: '#ffffff', subOpacity: 75 },
    bg: { type: 'solid', c1: '#1d4a3e' }, device: { frame: 'iphone-pro', color: 'white', shadow: 50, fit: 'top' },
    screens: S8([
      ['text-top', 'Your Logo', 'Logon', 'Complete customisation', 'Tam özelleştirme', { dev: { x: 24, y: 30, w: 60, rot: 0 }, extra: [{ type: 'device', name: 'Device 2', frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top', x: 10, y: 36, w: 60, rot: 0 }], titleStyle: { size: 7, weight: 800 } }],
      ['bleed', 'Auto translate or\nmanually add captions.', 'Otomatik çevir ya da\nelle başlık ekle.', null, null, { els: [{ kind: 'pill', x: 74, y: 24, size: 2.4, text: T('Merhaba!', 'Hello!'), emoji: '👋', bg: '#ffb69e', color: '#1d4a3e', rot: 6 }, { kind: 'pill', x: 30, y: 84, size: 2.4, text: T('Çeviri hazır', 'Translation ready'), emoji: '', bg: '#ffb69e', color: '#1d4a3e', rot: -4 }] }],
      ['bleed', 'Elevate your app store\npresence.', 'Mağaza varlığını\nyükselt.', null],
      ['text-top', 'Show off all your apps\nfeatures.', 'Uygulamanın tüm\nözelliklerini göster.', null, null, { dev: { x: 24, y: 30, w: 60 }, extra: [{ type: 'device', name: 'Device 2', frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top', x: 10, y: 36, w: 60, rot: 0 }] }],
      ['text-top', 'Export screenshots for\nall devices.', 'Tüm cihazlar için\ndışa aktar.', null, null, { dev: { x: 24, y: 30, w: 60 }, extra: [{ type: 'device', name: 'Device 2', frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top', x: 10, y: 36, w: 60, rot: 0 }] }],
      ['bleed', 'Plan your\nweek.', 'Haftanı\nplanla.', null],
      ['bleed', 'Share with\nyour team.', 'Ekibinle\npaylaş.', null],
      ['bleed', 'Start\nfree.', 'Ücretsiz\nbaşla.', null],
    ]) });

  /* Beauty — krem/şeftali pastel, serif başlık + pembe italik vurgu, çerçevesiz kart */
  defineTemplate({ key: 'beauty', name: 'Beauty', desc: T('Krem-şeftali pastel zemin, serif siyah başlık ve pembe italik vurgu; ilk iki kare fotoğraf, diğerlerinde çerçevesiz ekran kartı. Güzellik ve alışveriş uygulamaları için.', 'Cream-peach pastel background, serif black headline with a pink italic emphasis; photo-led first screens, frameless screen cards elsewhere. For beauty and shopping apps.'),
    tags: ['advanced', 'pastel', 'serif', 'photo'], cats: ['shopping', 'lifestyle', 'health & fitness'], theme: 'light', skill: 'advanced',
    style: { font: 'playfair', weight: 500, size: 5.6, color: '#1a1a1a', accent: '#d9738f', letterSpacing: -0.3, lineHeight: 1.1, subFont: 'inter', subSize: 2.7, subOpacity: 65 },
    bg: { type: 'linear', c1: '#f3e3d8', c2: '#efd9cc', angle: 180 }, device: { frame: 'none', fit: 'top', shadow: 40, radius: 6 },
    screens: S8([
      ['full', '', '', null, null, { bg: { type: 'linear', c1: '#e9d3c4', c2: '#d9bfae', angle: 180 }, dev: { x: 0, y: 0, w: 100 }, els: [{ kind: 'laurel', x: 50, y: 90, size: 2.2, text: T('Apple\nÖne Çıkan', 'Featured\nby Apple'), color: '#1a1a1a' }] }],
      ['full', '', '', null, null, { bg: { type: 'linear', c1: '#e9d3c4', c2: '#d9bfae', angle: 180 }, dev: { x: 0, y: 0, w: 100 } }],
      ['card', 'Simple, [Elegant],\nAmazing', 'Basit, [Zarif],\nMuhteşem', null, null, { titleBox: { align: 'center' }, dev: { x: 12, y: 22, w: 76 } }],
      ['card', 'Simple, [Elegant],\nAmazing', 'Basit, [Zarif],\nMuhteşem', null, null, { titleBox: { align: 'center' }, dev: { x: 12, y: 22, w: 76 } }],
      ['card', '', '', null, null, { dev: { x: 22, y: 8, w: 70, rot: 6 }, extra: [{ type: 'device', name: 'Device 2', frame: 'none', fit: 'top', shadow: 40, radius: 6, x: 6, y: 20, w: 70, rot: -6 }] }],
      ['card', 'Glow, [Naturally]', 'Doğal [ışıltı]', null, null, { titleBox: { align: 'center' }, dev: { x: 12, y: 22, w: 76 } }],
      ['card', 'Curated for [you]', '[Sana] özel seçki', null, null, { titleBox: { align: 'center' }, dev: { x: 12, y: 22, w: 76 } }],
      ['card', 'Shop the [look]', '[Görünümü] al', null, null, { titleBox: { align: 'center' }, dev: { x: 12, y: 22, w: 76 } }],
    ]) });

  /* Eventbrite — beyaz zemin, kalın siyah + turuncu vurgu satırı, siyah cihaz */
  defineTemplate({ key: 'eventbrite', name: 'Inspired by Eventbrite', desc: T('Beyaz zemin, sol hizalı kalın siyah başlık; ikinci satır turuncu vurgulu, altında küçük açıklama; siyah düz cihaz. Etkinlik, bilet ve yaşam uygulamaları için.', 'White background, left-aligned bold black headline with an orange-highlighted second line and a small description; straight black device. For events, ticketing and lifestyle apps.'),
    tags: ['simple', 'light', 'minimal'], cats: ['entertainment', 'lifestyle', 'travel'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 5.6, color: '#111111', accent: '#f05537', letterSpacing: -1.5, lineHeight: 1.1, subSize: 2.6, subOpacity: 65 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 35, fit: 'top' },
    screens: S8([
      ['bleed-left', 'AppScreens is\n[ready for you]', 'AppScreens\n[senin için hazır]', 'Beautifully designed templates to find one you love', 'Sevdiğin birini bulacağın güzel şablonlar'],
      ['bleed-left', 'One design\n[for all devices]', 'Tek tasarım\n[tüm cihazlara]', 'Design your screenshot set once, one project for all devices', 'Seti bir kez tasarla, tüm cihazlara tek proje'],
      ['bleed-left', 'Enhance\n[your app preview]', '[Önizlemeni]\ngüçlendir', 'Improve your ASO to increase your downloads and sales', 'ASO\'nu geliştir, indirme ve satışı artır'],
      ['bleed-left', 'Show off\n[what you do]', '[Ne yaptığını]\ngöster', 'Display all the best parts of your app in its best light', 'Uygulamanın en iyi yanlarını göster'],
      ['bleed-left', 'Standout\n[from the crowd]', '[Kalabalıktan]\nsıyrıl', 'It\'s never been more important to stand above the rest', 'Öne çıkmak hiç bu kadar önemli olmamıştı'],
      ['bleed-left', 'Find events\n[near you]', '[Yakınındaki]\netkinlikleri bul', null],
      ['bleed-left', 'Tickets\n[in seconds]', '[Saniyede]\nbilet', null],
      ['bleed-left', 'Get\n[started]', '[Hemen]\nbaşla', null],
    ]) });

  /* Starbucks — koyu yeşil zemin, büyük harf geniş aralıklı küçük başlık, siyah cihaz */
  defineTemplate({ key: 'starbucks', name: 'Inspired by Starbucks', desc: T('Koyu yeşil düz zemin, büyük harfli geniş aralıklı küçük beyaz başlık; siyah cihaz ortada. Kahve, yemek ve sadakat uygulamaları için.', 'Flat dark-green background, small uppercase wide-spaced white headline; black device centred. For coffee, food and loyalty apps.'),
    tags: ['simple', 'dark', 'minimal'], cats: ['food & drink', 'shopping', 'lifestyle'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 3.6, color: '#ffffff', accent: '#ffffff', uppercase: true, letterSpacing: 2.5, lineHeight: 1.3, subSize: 2.6, subColor: '#ffffff', subOpacity: 70, titleBox: { y: 9 } },
    bg: { type: 'solid', c1: '#0f3d2e' }, device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S8([
      ['small', 'One design & all devices', 'Tek tasarım, tüm cihazlar', null],
      ['small', 'Improve your ASO', 'ASO\'nu geliştir', null],
      ['small', 'Release to the world', 'Dünyaya yayınla', null],
      ['small', 'Unlimited layouts', 'Sınırsız düzen', null],
      ['small', 'Discover templates', 'Şablonları keşfet', null],
      ['small', 'Order ahead', 'Önceden sipariş', null],
      ['small', 'Earn stars', 'Yıldız kazan', null],
      ['small', 'Join rewards', 'Ödüllere katıl', null],
    ]) });

  /* Vero — canlı düz renkler (mavi, yeşil, turuncu, kırmızı, pembe), beyaz kalın başlık, eğik cihaz */
  defineTemplate({ key: 'vero', name: 'Vero', desc: T('Her karede farklı canlı düz zemin (mavi, yeşil, turuncu, kırmızı, pembe); ortalı kalın beyaz başlık ve dönüşümlü eğik siyah cihaz. Sosyal ve yaşam uygulamaları için.', 'A different vivid flat colour per screen (blue, green, orange, red, pink); centred bold white headline and an alternating tilted black device. For social and lifestyle apps.'),
    tags: ['simple', 'colourful', 'bold'], cats: ['social networking', 'lifestyle', 'entertainment'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 5.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.2, lineHeight: 1.12, subSize: 2.8, subColor: '#ffffff', subOpacity: 85 },
    device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S8([
      ['bleed', 'Design high-quality, pixel\nperfect screenshots!', 'Yüksek kaliteli, piksel\nmükemmel görseller!', null, null, Object.assign(solid('#2f80ed'), { els: [{ kind: 'emoji', x: 20, y: 90, size: 8, text: '🎉' }] })],
      ['tilt', 'Design high-quality, pixel\nperfect screenshots!', 'Yüksek kaliteli, piksel\nmükemmel görseller!', null, null, Object.assign(solid('#27ae60'), { extra: [{ type: 'device', name: 'Device 2', frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top', x: 34, y: 34, w: 64, rot: 8 }] })],
      ['bleed', 'Design high-quality, pixel\nperfect screenshots!', 'Yüksek kaliteli, piksel\nmükemmel görseller!', null, null, Object.assign(solid('#f2a20c'), { els: [{ kind: 'laurel', x: 50, y: 26, size: 2, text: T('Editörün\nSeçimi', "Editors'\nChoice"), color: '#ffffff' }], dev: { y: 34 } })],
      ['bleed', 'Design high-quality, pixel\nperfect screenshots!', 'Yüksek kaliteli, piksel\nmükemmel görseller!', null, null, solid('#e63946')],
      ['tilt-r', 'Design high-quality, pixel\nperfect screenshots!', 'Yüksek kaliteli, piksel\nmükemmel görseller!', null, null, Object.assign(solid('#e0479e'), { els: [{ kind: 'emoji', x: 24, y: 40, size: 12, text: '🧘' }] })],
      ['bleed', 'Share what\nyou love', 'Sevdiğini\npaylaş', null, null, solid('#2f80ed')],
      ['tilt', 'Follow real\npeople', 'Gerçek insanları\ntakip et', null, null, solid('#27ae60')],
      ['bleed', 'Join\ntoday', 'Bugün\nkatıl', null, null, solid('#f2a20c')],
    ]) });

  /* Icy — buz mavisi zemin, sol mavi başlık, büyük eğik beyaz cihaz */
  defineTemplate({ key: 'icy', name: 'Icy', desc: T('Buz mavisi açık zemin, sol hizalı mavi başlık; ilk karede büyük eğik beyaz cihaz, sonra düz cihazlar. Seyahat ve otel uygulamaları için.', 'Icy light-blue background, left-aligned blue headline; a large tilted white device on the first screen, straight devices after. For travel and hotel apps.'),
    tags: ['simple', 'light', 'minimal'], cats: ['travel', 'lifestyle', 'business'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 600, size: 5.2, color: '#1e5bd6', accent: '#1e5bd6', letterSpacing: -1, lineHeight: 1.15, subSize: 2.8, subColor: '#1e5bd6', subOpacity: 70 },
    bg: { type: 'solid', c1: '#e8f1fb' }, device: { frame: 'iphone-pro', color: 'white', shadow: 40, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Manage your\napp screenshots\nfrom your\nprojects page\nwherever you\nare its easy', 'Görsellerini\nprojeler sayfasından\nher yerde\nyönet, kolay', null, null, { titleBox: { w: 46 }, dev: { x: 40, y: 12, w: 84, rot: -14 } }],
      ['bleed', '', '', null, null, { dev: { x: -24, y: 8, w: 84, rot: 14 } }],
      ['bleed', 'Limitless layout\nvariations to suit\nyour app needs', 'İhtiyacına uygun\nsınırsız düzen', null],
      ['bleed', 'Start creating your brand\nnew app screenshots today\nand get noticed', 'Yeni görsellerini bugün\noluştur, fark edil', null],
      ['bleed', 'Limitless layout\nvariations to suit\nyour app needs', 'İhtiyacına uygun\nsınırsız düzen', null],
      ['bleed', 'Book stays\nin seconds', 'Saniyeler içinde\nrezervasyon', null],
      ['bleed', 'Member\nprices', 'Üye\nfiyatları', null],
      ['bleed', 'Start\nexploring', 'Keşfetmeye\nbaşla', null],
    ]) });

  /* Mono — koyu gri, ortalı beyaz başlık, siyah cihaz (sade) */
  defineTemplate({ key: 'mono-dark', name: 'Mono', desc: T('Koyu gri düz zemin, ortalı orta kalınlıkta beyaz başlık ve siyah cihaz. Her kategori için sade ve güvenli.', 'Flat dark-grey background, centred medium-weight white headline and a black device. Clean and safe for any category.'),
    tags: ['simple', 'dark', 'minimal'], cats: ['utilities', 'productivity', 'business', 'lifestyle'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 600, size: 5.4, color: '#ffffff', accent: '#ffffff', letterSpacing: -1, lineHeight: 1.15, subSize: 2.8, subColor: '#ffffff', subOpacity: 65 },
    bg: { type: 'solid', c1: '#2b2d31' }, device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S8([
      ['bleed', 'Relaxing into\na good night\'s\nrest.', 'İyi bir gece\nuykusuna\ngevşe.', null],
      ['bleed', 'Learn to dream\nand build your\napp\'s worth.', 'Hayal et,\nuygulamanın değerini\nkur.', null],
      ['bleed', 'Download your\napp store\nscreenshots.', 'Mağaza görsellerini\nindir.', null],
      ['bleed', 'Simple design\nand amazing\nfeatures.', 'Basit tasarım,\nharika özellikler.', null],
      ['bleed', 'Reduce your\ntodo list, just\ncopy a template.', 'Yapılacaklar listeni\nkısalt, şablonu kopyala.', null],
      ['bleed', 'Everything\nin one place.', 'Her şey\ntek yerde.', null],
      ['bleed', 'Fast and\nreliable.', 'Hızlı ve\ngüvenilir.', null],
      ['bleed', 'Get\nstarted.', 'Hemen\nbaşla.', null],
    ]) });

  /* Ori — mor→pembe gradyan (set boyunca), beyaz başlık, beyaz cihaz, laurel */
  defineTemplate({ key: 'ori', name: 'Ori', desc: T('Set boyunca akan mor-pembe panoramik gradyan, ortalı beyaz başlık ve beyaz cihaz; ilk karede laurel ve ikon + ad. Sosyal ve yaşam uygulamaları için.', 'A panoramic purple-pink gradient flowing across the set, centred white headline and a white device; laurel and icon + name on the first screen. For social and lifestyle apps.'),
    tags: ['simple', 'gradient', 'panoramic', 'badges'], cats: ['social networking', 'lifestyle', 'photo & video'], theme: 'colourful', skill: 'simple', panorama: true,
    style: { font: 'inter', weight: 700, size: 5.4, color: '#ffffff', accent: '#ffffff', letterSpacing: -1, lineHeight: 1.12, subSize: 2.8, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'linear', c1: '#7b2ff7', c2: '#f107a3', angle: 45 }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed', '', '', null, null, { dev: { y: 26 }, els: [{ kind: 'laurel', x: 50, y: 8, size: 2.2, text: T('Günün\nUygulaması', 'App of\nthe Day'), color: '#ffffff' }, ICON('appscreens', '#ffffff', '#ffffff', 50, 19)] }],
      ['bleed', 'Design your next app store\nassets with no skill required', 'Sıradaki mağaza görsellerini\nbeceri gerekmeden tasarla', null],
      ['bleed', 'Search through all our\ntemplates to find your fave', 'Tüm şablonlar arasında\nfavorini bul', null],
      ['bleed', 'Create your own new\nstandout app store\nscreenshots', 'Öne çıkan yeni\nmağaza görsellerini oluştur', null],
      ['bleed', 'Improve your ASO to\nincrease your downloads', 'ASO\'nu geliştir,\nindirmeleri artır', null],
      ['bleed', 'Share your\nstory', 'Hikâyeni\npaylaş', null],
      ['bleed', 'Discover\ncreators', 'Yaratıcıları\nkeşfet', null],
      ['bleed', 'Join\nfree', 'Ücretsiz\nkatıl', null],
    ]) });

  /* Cityscape — şehir silüeti hissi (sıcak gradyan), büyük harf ince başlık, siyah cihaz */
  defineTemplate({ key: 'cityscape', name: 'Cityscape', desc: T('Sıcak gün batımı gradyanı (fotoğraf yerine), büyük harfli ince siyah/beyaz başlık ve siyah cihaz. Seyahat, şehir ve yaşam uygulamaları için.', 'Warm sunset gradient (swap for a skyline photo), uppercase light headline and a black device. For travel, city and lifestyle apps.'),
    tags: ['simple', 'photo', 'gradient'], cats: ['travel', 'navigation', 'lifestyle'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 600, size: 4.6, color: '#111111', accent: '#111111', uppercase: true, letterSpacing: 2, lineHeight: 1.25, subSize: 2.6, subOpacity: 70, titleBox: { y: 8 } },
    bg: { type: 'linear', c1: '#f6e7c1', c2: '#c9a27a', angle: 180, noise: 5 }, device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S8([
      ['small', 'Hello\nhow are you?', 'Merhaba\nnasılsın?', null],
      ['small', 'Templates\nready to use', 'Kullanıma hazır\nşablonlar', null, null, { bg: { type: 'linear', c1: '#ffffff', c2: '#e9e2d6', angle: 180 } }],
      ['small', 'All in one\nsystem', 'Hepsi bir arada\nsistem', null, null, { bg: { type: 'linear', c1: '#ffffff', c2: '#e9e2d6', angle: 180 } }],
      ['small', 'Increase\ndownloads', 'İndirmeleri\nartır', null, null, { bg: { type: 'linear', c1: '#ffffff', c2: '#e9e2d6', angle: 180 } }],
      ['small', 'Create\nscreenshots', 'Görsel\noluştur', null],
      ['small', 'Explore\nthe city', 'Şehri\nkeşfet', null, null, { bg: { type: 'linear', c1: '#ffffff', c2: '#e9e2d6', angle: 180 } }],
      ['small', 'Book\ntables', 'Masa\nayırt', null, null, { bg: { type: 'linear', c1: '#ffffff', c2: '#e9e2d6', angle: 180 } }],
      ['small', 'Start\ntoday', 'Bugün\nbaşla', null],
    ]) });
})();
