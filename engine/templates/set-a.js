/* Set A — appscreens kataloğundaki ilk 24 şablonun yeniden çizimi (aynı adlar, aynı ruh; metinler örnek). */
(function () {
  const T = (tr, en) => ({ en, tr });
  const S8 = (rows) => rows.map(([layout, en, tr, sub_en, sub_tr, extra]) => Object.assign({ layout, title: T(tr, en), sub: sub_en == null ? false : T(sub_tr || sub_en, sub_en) }, extra || {}));

  /* 1 Kova — mor pastel, sol hizalı mor başlık, ışıltı + kıvrım */
  defineTemplate({ key: 'kova', name: 'Kova', desc: T('Mor pastel zemin, sol hizalı kalın başlık, ışıltı ve kıvrım süsleri. Eğitim, sağlık, verimlilik için oyunsu bir ürün sayfası.', 'Vibrant purple, soft abstract accents and bold headline areas give this template a playful learning product-page feel.'),
    tags: ['advanced', 'multi layered', 'gradient', 'colourful', 'graphics'], cats: ['education', 'lifestyle', 'productivity', 'health & fitness', 'books'], theme: 'colourful', skill: 'advanced',
    style: { font: 'rubik', weight: 800, size: 9.6, color: '#6d4ee6', accent: '#8f7bff', letterSpacing: -2, lineHeight: 1.02, subSize: 3.2, subColor: '#5b4fb3', subOpacity: 85, decoration: 'squiggle' },
    bg: { type: 'linear', c1: '#ded6ff', c2: '#efe9ff', angle: 170, pattern: 'sparkles', patternColor: '#7c5cff', patternOpacity: 80 },
    device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Learn\nLanguages in\nMinutes', 'Dakikalar\niçinde dil\nöğren', null],
      ['text-top-left', 'Speak from\nday one', 'İlk günden\nkonuş', 'Bite-sized lessons every day', 'Her gün küçük dersler'],
      ['tilt', 'Practice with\nreal voices', 'Gerçek seslerle\npratik', 'Native speakers, instant feedback', 'Ana dil konuşanlar, anında geri bildirim'],
      ['text-bottom-left', 'Track your\nstreak', 'Serini\ntakip et', 'Small goals, big progress', 'Küçük hedef, büyük ilerleme'],
      ['bleed-left', 'Learn\nanywhere', 'Her yerde\nöğren', null],
      ['text-top-left', '40+ languages', '40+ dil', 'Switch whenever you like', 'İstediğin an geç'],
      ['tilt-r', 'Made for\nbusy people', 'Yoğun insanlar\niçin', '5 minutes is enough', '5 dakika yeter'],
      ['text-bottom-left', 'Start\ntoday', 'Bugün\nbaşla', 'First lesson is free', 'İlk ders ücretsiz'],
    ]) });

  /* 2 Inspired by Photo Editor App — tam ekran fotoğraf, serif/italik başlık */
  defineTemplate({ key: 'photo-editor', name: 'Inspired by Photo Editor App', desc: T('Ekran görüntüsü tüm kareyi doldurur; üstte büyük harfli, vurgulu italik başlık. Fotoğraf ve video uygulamaları için.', 'Full-bleed screenshot with an uppercase headline and an emphasised word. Built for photo & video apps.'),
    tags: ['simple', 'photo', 'dark', 'bold'], cats: ['photo & video', 'graphics & design', 'entertainment'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 7, color: '#ffffff', accent: '#ffffff', hlStyle: 'underline', uppercase: true, letterSpacing: 0, lineHeight: 1.08, subSize: 2.8, subColor: '#ffffff', subOpacity: 80, shadow: true },
    bg: { type: 'solid', c1: '#0b0b0f' }, device: { frame: 'none', fit: 'cover', shadow: 0 },
    screens: S8([
      ['full', 'Your camera\nbut [cinematic]', 'Kameran\nama [sinematik]', null],
      ['full', 'Film perfection\non one tap', 'Tek dokunuşta\nfilm dokusu', null],
      ['full', 'Capture\n[like a pro]', '[Pro] gibi\nçek', null],
      ['full', 'Colour\n[grading]', 'Renk\n[düzenleme]', null],
      ['full-bottom', 'Presets you\nwill love', 'Seveceğin\nön ayarlar', null],
      ['full', 'Portrait\n[mode]', 'Portre\n[modu]', null],
      ['full-bottom', 'Edit in\n[batches]', 'Toplu\n[düzenle]', null],
      ['full', 'Export\n[lossless]', 'Kayıpsız\n[aktar]', null],
    ]) });

  /* 3 Pluto — açık, siyah sol başlık + mavi vurgu, mavi ışımalı cihaz */
  defineTemplate({ key: 'pluto', name: 'Pluto', desc: T('Açık gri zemin, sol hizalı siyah başlık ve mavi vurgu; cihazın arkasında hafif mavi ışıma. Finans ve verimlilik için temiz.', 'Light grey background, left-aligned black headline with a blue accent and a soft blue glow behind the device. Clean for finance and productivity.'),
    tags: ['simple', 'light', 'minimal', 'glow'], cats: ['finance', 'productivity', 'business', 'utilities'], theme: 'light', skill: 'simple',
    style: { font: 'lexend', weight: 700, size: 8.6, color: '#111827', accent: '#2f80ed', letterSpacing: -2.5, lineHeight: 1.05, subSize: 3.1, subColor: '#4b5563', subOpacity: 100 },
    bg: { type: 'solid', c1: '#f7f8fb' }, device: { frame: 'iphone-pro', color: 'black', shadow: 30, glow: '#8ab8ff', glowStrength: 55, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Visualize all\nyour [finances].', 'Tüm [finansını]\ngör.', 'Build forecasts and track habits', 'Tahmin kur, alışkanlık takip et'],
      ['bleed-left', 'Budget without\n[effort].', 'Zahmetsiz\n[bütçe].', 'See the end of the month in advance', 'Ay sonunu önceden gör'],
      ['bleed-left', 'Every account,\n[one] screen.', 'Her hesap,\n[tek] ekran.', 'Banks, cards and cash together', 'Banka, kart ve nakit bir arada'],
      ['bleed-left', 'Catch\n[subscriptions].', '[Abonelikleri]\nyakala.', 'The payments you forgot are visible', 'Unuttuğun ödemeler görünür'],
      ['bleed-left', 'Log it by\n[voice].', '[Sesle]\nkaydet.', 'Say the receipt, the app writes it', 'Fişi söyle, uygulama yazsın'],
      ['bleed-left', 'Reach your\n[goal].', '[Hedefine]\nulaş.', 'Grow savings step by step', 'Birikimi adım adım büyüt'],
      ['bleed-left', 'Insights that\n[matter].', 'Önemli\n[içgörüler].', 'AI spots the leaks', 'Kaçakları AI bulur'],
      ['bleed-left', 'Start\n[free].', '[Ücretsiz]\nbaşla.', 'No card needed', 'Kart gerekmez'],
    ]) });

  /* 4 Astra — lacivert, sol beyaz başlık + lila vurgu, lila çerçeveli eğik cihaz */
  defineTemplate({ key: 'astra', name: 'Astra', desc: T('Koyu lacivert zemin, beyaz başlık ve lila vurgu; lila gövdeli eğik cihaz köşeden taşar. Sosyal ve mesajlaşma uygulamaları için.', 'Deep navy background, white headline with a lilac accent and a lilac-bodied tilted device bleeding off the corner. For social and messaging apps.'),
    tags: ['advanced', 'dark', 'bold', 'multi layered'], cats: ['social networking', 'entertainment', 'lifestyle'], theme: 'dark', skill: 'advanced',
    style: { font: 'poppins', weight: 800, size: 8.6, color: '#ffffff', accent: '#b9a7ff', letterSpacing: -1.5, lineHeight: 1.05, subSize: 3.1, subColor: '#ffffff', subOpacity: 75 },
    bg: { type: 'solid', c1: '#1c2340' }, device: { frame: 'iphone-pro', color: 'lilac', shadow: 60, fit: 'top' },
    screens: S8([
      ['text-top-left', '[Groups] with\nyour mates', 'Arkadaşlarınla\n[gruplar]', null, null, { dev: { x: 10, y: 33, w: 96, rot: -8 } }],
      ['text-top-left', 'Never miss a\n[message]', 'Hiçbir [mesajı]\nkaçırma', null, null, { dev: { x: -6, y: 33, w: 96, rot: 8 } }],
      ['text-top-left', 'Share the\n[moment]', '[Anı]\npaylaş', null, null, { dev: { x: 10, y: 33, w: 96, rot: -8 } }],
      ['text-top-left', 'Calls that\n[just work]', '[Sorunsuz]\naramalar', null, null, { dev: { x: -6, y: 33, w: 96, rot: 8 } }],
      ['text-top-left', '[Private]\nby design', 'Tasarımı gereği\n[özel]', null, null, { dev: { x: 10, y: 33, w: 96, rot: -8 } }],
      ['text-top-left', 'Quiet\n[hours]', 'Sessiz\n[saatler]', null, null, { dev: { x: -6, y: 33, w: 96, rot: 8 } }],
      ['text-top-left', 'Stickers &\n[reactions]', 'Çıkartma ve\n[tepkiler]', null, null, { dev: { x: 10, y: 33, w: 96, rot: -8 } }],
      ['text-top-left', 'Bring your\n[people]', '[Ekibini]\ngetir', null, null, { dev: { x: -6, y: 33, w: 96, rot: 8 } }],
    ]) });

  /* 5 Vela — gökyüzü/dağ hissi (mesh), büyük harf sarı vurgu, laurel */
  defineTemplate({ key: 'vela', name: 'Vela', desc: T('Gök mavisi mesh zemin, büyük harfli beyaz başlık ve sarı vurgu; altta müşteri sayısı laureli. Eğitim ve kişisel gelişim için.', 'Sky-blue mesh background, uppercase white headline with a yellow accent and a customer-count laurel at the bottom. For learning and self-improvement apps.'),
    tags: ['advanced', 'colourful', 'bold', 'badges'], cats: ['education', 'books', 'productivity', 'reference'], theme: 'colourful', skill: 'advanced',
    style: { font: 'poppins', weight: 800, size: 7.8, color: '#ffffff', accent: '#ffe23a', uppercase: true, letterSpacing: -0.5, lineHeight: 1.05, subSize: 3, subColor: '#ffffff', subOpacity: 85, shadow: true },
    bg: { type: 'mesh', c1: '#5ea8ff', c2: '#dbe9ff', c3: '#2f6fe0', variant: 2, noise: 6 }, device: { frame: 'iphone-pro', color: 'silver', shadow: 60, fit: 'top' },
    screens: S8([
      ['bleed', 'A [sharper]\nmind starts\nhere', 'Daha [keskin]\nbir zihin\nburada başlar', null, null, { els: [{ kind: 'laurel', x: 50, y: 90, size: 2.4, text: T('1M+ MUTLU\nKULLANICI', '1M+ HAPPY\nCUSTOMERS'), color: '#ffffff' }] }],
      ['bleed', 'Complex ideas\nmade [crystal]\nclear', 'Karmaşık fikirler\n[kristal] gibi\nnet', null, null, { els: [{ kind: 'pill', x: 50, y: 91, size: 2.6, text: T('2 DAKİKA', '2 MINUTES'), bg: '#ffe23a', color: '#1b2a4a' }] }],
      ['bleed', 'Show up and\nwatch it\n[compound]', 'Gel ve\n[birikimini]\nizle', null],
      ['bleed', 'Start your\nfirst [summary]\ntoday', 'İlk [özetini]\nbugün\noku', null],
      ['bleed', 'Listen or\n[read]', 'Dinle ya da\n[oku]', null],
      ['bleed', 'Learn in\n[15 minutes]\na day', 'Günde\n[15 dakika]\nöğren', null],
      ['bleed', 'Build a\n[daily] habit', '[Günlük]\nalışkanlık kur', null],
      ['bleed', 'Start\n[free]', '[Ücretsiz]\nbaşla', null],
    ]) });

  /* 6 Planner — beyaz, sol hizalı siyah başlık + mavi vurgu, düz cihaz */
  defineTemplate({ key: 'planner', name: 'Planner', desc: T('Beyaz zemin, sol hizalı büyük siyah başlık ve açık mavi vurgu; cihaz alttan taşar. Planlayıcı ve verimlilik uygulamaları için.', 'White background, large left-aligned black headline with a light-blue accent; the device bleeds off the bottom. For planners and productivity apps.'),
    tags: ['simple', 'light', 'minimal'], cats: ['productivity', 'business', 'education', 'lifestyle'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 9.6, color: '#0f172a', accent: '#1aa9ff', letterSpacing: -3, lineHeight: 1.02, subSize: 3.1, subColor: '#475569', subOpacity: 100 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 40, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Your\n[All-in-one]\nPlanner', 'Hepsi bir arada\n[Planlayıcın]', null],
      ['bleed-left', 'Plan your\n[day]', '[Gününü]\nplanla', 'Tasks, events and focus in one view', 'Görev, etkinlik ve odak tek ekranda'],
      ['bleed-left', 'Build\n[habits]', '[Alışkanlık]\nkur', 'Streaks that keep you going', 'Seni devam ettiren seriler'],
      ['bleed-left', 'Focus\n[timer]', 'Odak\n[sayacı]', 'Pomodoro, your way', 'Pomodoro, senin tarzında'],
      ['bleed-left', 'Sync with\n[calendar]', '[Takvimle]\neşle', 'Google, Apple, Outlook', 'Google, Apple, Outlook'],
      ['bleed-left', 'Notes that\n[stick]', 'Kalıcı\n[notlar]', 'Attach them to any task', 'Her göreve iliştir'],
      ['bleed-left', 'Weekly\n[review]', 'Haftalık\n[bakış]', 'See what moved the needle', 'Neyin işe yaradığını gör'],
      ['bleed-left', 'Start\n[today]', '[Bugün]\nbaşla', 'Free forever plan', 'Ömür boyu ücretsiz plan'],
    ]) });

  /* 7 Orin — mavi gradyan, üst etiket, eğik gümüş cihaz, laurel */
  defineTemplate({ key: 'orin', name: 'Orin', desc: T('Mavi gradyan zemin, üstte küçük etiket, büyük beyaz başlık, eğik gümüş cihaz ve kullanıcı sayısı laureli. Araç ve iş uygulamaları için.', 'Blue gradient, small top label, large white headline, tilted silver device and a user-count laurel. For utilities and business apps.'),
    tags: ['advanced', 'gradient', 'bold', 'badges'], cats: ['utilities', 'business', 'productivity', 'developer tools'], theme: 'colourful', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 9.2, color: '#ffffff', accent: '#ffffff', letterSpacing: -2.5, lineHeight: 1.04, subSize: 3, subColor: '#ffffff', subOpacity: 85, titleBox: { y: 9 } },
    bg: { type: 'linear', c1: '#2b5bff', c2: '#1a34b8', angle: 170 }, device: { frame: 'iphone-pro', color: 'silver', shadow: 60, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Record &\nTranscribe\nLive', 'Kaydet ve\nCanlı\nYazıya Dök', null, null, { dev: { x: 24, y: 32, w: 100, rot: -12 }, els: [{ kind: 'pill', x: 26, y: 4.5, size: 2.4, text: T('#1 Kayıt ve Transkript', '#1 Recording & Transcribing App'), bg: '#1a34b8', color: '#ffffff', outline: false, rot: 0, shadow: false }, { kind: 'laurel', x: 22, y: 86, size: 2.6, text: T('250K\nKullanıcı', '250K\nUsers'), color: '#ffffff' }] }],
      ['text-top-left', 'Summaries\nin seconds', 'Saniyeler\niçinde özet', 'AI pulls out what matters', 'Önemli olanı AI çıkarır', { dev: { x: -20, y: 32, w: 100, rot: 12 } }],
      ['text-top-left', 'Search\nevery word', 'Her kelimeyi\nara', 'Jump to the moment it was said', 'Söylendiği ana atla', { dev: { x: 24, y: 32, w: 100, rot: -12 } }],
      ['text-top-left', 'Share\nnotes fast', 'Notları hızla\npaylaş', 'Export to Notion, Docs, Slack', 'Notion, Docs, Slack\'e aktar', { dev: { x: -20, y: 32, w: 100, rot: 12 } }],
      ['text-top-left', 'Works\noffline', 'Çevrimdışı\nçalışır', 'Record on the plane, sync later', 'Uçakta kaydet, sonra eşitle', { dev: { x: 24, y: 32, w: 100, rot: -12 } }],
      ['text-top-left', '90+\nlanguages', '90+\ndil', 'Transcribe in any language', 'Her dilde yazıya dök', { dev: { x: -20, y: 32, w: 100, rot: 12 } }],
      ['text-top-left', 'Private by\ndefault', 'Varsayılan\nolarak özel', 'Your recordings stay yours', 'Kayıtların sende kalır', { dev: { x: 24, y: 32, w: 100, rot: -12 } }],
      ['text-top-left', 'Try it\nfree', 'Ücretsiz\ndene', '3 recordings a week', 'Haftada 3 kayıt', { dev: { x: -20, y: 32, w: 100, rot: 12 } }],
    ]) });

  /* 8 Inspired by Roy Story — oyun, tam ekran + alt kutu başlık */
  defineTemplate({ key: 'roy-story', name: 'Inspired by Roy Story', desc: T('Oyun ekranı tüm kareyi kaplar; başlık alt kısımda büyük, kalın ve renkli. Puzzle ve casual oyunlar için.', 'The game screen fills the frame; the caption sits at the bottom in a large, chunky, colourful style. For puzzle and casual games.'),
    tags: ['simple', 'colourful', 'bold'], cats: ['games', 'entertainment'], theme: 'colourful', skill: 'simple',
    style: { font: 'baloo', weight: 800, size: 9, color: '#ffffff', accent: '#ffd23f', uppercase: true, letterSpacing: 0, lineHeight: 0.98, subSize: 3, subColor: '#ffffff', subOpacity: 90, shadow: true },
    bg: { type: 'linear', c1: '#ff9a3c', c2: '#ff3c6e', angle: 160 }, device: { frame: 'none', fit: 'cover', shadow: 0 },
    screens: S8([
      ['full-bottom', '[Blast]\npuzzle', '[Patlat]\nbulmaca', null],
      ['full-bottom', 'Match &\n[win]', 'Eşle ve\n[kazan]', null],
      ['full-bottom', 'Epic\n[boosters]', 'Epik\n[güçler]', null],
      ['full-bottom', 'Daily\n[rewards]', 'Günlük\n[ödüller]', null],
      ['full-bottom', 'Play with\n[friends]', 'Arkadaşlarla\n[oyna]', null],
      ['full-bottom', '1000+\n[levels]', '1000+\n[bölüm]', null],
      ['full-bottom', 'Play\n[offline]', '[Çevrimdışı]\noyna', null],
      ['full-bottom', 'Free to\n[play]', 'Ücretsiz\n[oyna]', null],
    ]) });

  /* 9 Inspired by Current Banking App — siyah, limon vurgu, dönüşümlü eğik, laurel */
  defineTemplate({ key: 'current-banking', name: 'Inspired by Current Banking App', desc: T('Siyah zemin, limon yeşili vurgu, dönüşümlü eğik cihaz ve kullanıcı sayısı laureli. Fintech için.', 'Black background, lime accent, alternating tilted device and a user-count laurel. For fintech.'),
    tags: ['advanced', 'dark', 'bold', 'badges'], cats: ['finance', 'business'], theme: 'dark', skill: 'advanced',
    style: { font: 'manrope', weight: 800, size: 7.6, color: '#ffffff', accent: '#c8f542', letterSpacing: -2, lineHeight: 1.05, subSize: 3, subColor: '#ffffff', subOpacity: 65 },
    bg: { type: 'solid', c1: '#000000', noise: 5 }, device: { frame: 'iphone-pro', color: 'graphite', shadow: 60, fit: 'top' },
    screens: S8([
      ['right', 'Get paid\n[2 days] early', 'Maaşın\n[2 gün] erken', 'With direct deposit', 'Doğrudan yatırma ile', { els: [{ kind: 'laurel', x: 22, y: 78, size: 2.4, text: T('250K\nKullanıcı', '250K\nUsers'), color: '#ffffff' }] }],
      ['left', '[No] fees', 'Ücret [yok]', 'No monthly fee, no minimum', 'Aylık ücret yok, minimum yok'],
      ['right', '[Earn] as\nyou spend', 'Harcadıkça\n[kazan]', 'Points on every purchase', 'Her alışverişte puan', { els: [{ kind: 'pill', emoji: '💸', x: 24, y: 44, size: 3, text: T('+₺35 iade', '+$3.50 back'), bg: '#c8f542', color: '#000000', rot: -6 }] }],
      ['left', '[Freeze]\nthe card', 'Kartı\n[dondur]', 'One tap, instantly', 'Tek dokunuş, anında'],
      ['right', 'Savings\n[pods]', 'Birikim\n[kovaları]', 'Split it, fill it automatically', 'Böl, otomatik doldur'],
      ['left', 'Spend\n[abroad]', 'Yurt dışında\n[harca]', 'Real rate, no surprises', 'Gerçek kur, sürpriz yok'],
      ['right', 'Insights,\n[weekly]', 'Haftalık\n[içgörü]', 'Where the money went', 'Para nereye gitti'],
      ['bleed', 'Open in\n[3 minutes]', '[3 dakikada]\naç', 'ID and a selfie', 'Kimlik ve selfie'],
    ]) });

  /* 10 Inner Glow — siyah, cihaz arkasında renkli ışıma, vurgu yeşil */
  defineTemplate({ key: 'inner-glow', name: 'Inner Glow', desc: T('Siyah zemin, her karede cihazın arkasında farklı renkte ışıma; beyaz başlık ve yeşil vurgu. Sağlık ve spor uygulamaları için.', 'Black background with a different coloured glow behind the device on every frame; white headline with a green accent. For health and fitness apps.'),
    tags: ['advanced', 'dark', 'glow', 'multi layered'], cats: ['health & fitness', 'medical', 'lifestyle', 'sports'], theme: 'dark', skill: 'advanced',
    style: { font: 'rubik', weight: 700, size: 8.2, color: '#ffffff', accent: '#4ade80', letterSpacing: -2, lineHeight: 1.05, subSize: 3, subColor: '#ffffff', subOpacity: 65 },
    bg: { type: 'solid', c1: '#050505', noise: 6 }, device: { frame: 'iphone-pro', color: 'black', shadow: 0, glow: '#ef4444', glowStrength: 60, fit: 'top' },
    screens: S8([
      ['bleed', 'Keep track\nof your [chats]', 'Sohbetlerini\n[takip et]', null, null, { dev: { glow: '#ef4444' } }],
      ['bleed', 'Facetime all\nyour [friends]', 'Tüm arkadaşlarını\n[ara]', null, null, { dev: { glow: '#22d3ee' } }],
      ['bleed', 'Add your\ndaily [stories]', 'Günlük\n[hikâyeni] ekle', null, null, { dev: { glow: '#4ade80' } }],
      ['bleed', 'Don\'t miss a\n[moment]', 'Hiçbir [anı]\nkaçırma', null, null, { dev: { glow: '#f59e0b' } }],
      ['bleed', 'Read your\n[sleep]', '[Uykunu]\noku', null, null, { dev: { glow: '#3b82f6' } }],
      ['bleed', 'Count your\n[steps]', '[Adımlarını]\nsay', null, null, { dev: { glow: '#a855f7' } }],
      ['bleed', 'Log the\n[workout]', '[Antrenmanı]\nkaydet', null, null, { dev: { glow: '#ec4899' } }],
      ['bleed', 'Pair with\nyour [watch]', '[Saatinle]\neşle', null, null, { dev: { glow: '#22d3ee' } }],
    ]) });

  /* 11 Inspired by Bevel — koyu, cam kart başlık, yumuşak mesh */
  defineTemplate({ key: 'bevel', name: 'Inspired by Bevel', desc: T('Koyu mesh zemin, cam kutu içinde başlık, küçük cihaz. Sağlık verileri ve takip uygulamaları için.', 'Dark mesh background, headline inside a glass box, small device. For health data and tracking apps.'),
    tags: ['advanced', 'dark', 'gradient', 'minimal'], cats: ['health & fitness', 'medical', 'utilities'], theme: 'dark', skill: 'advanced',
    style: { font: 'inter', weight: 700, size: 6.4, color: '#ffffff', accent: '#8be9fd', letterSpacing: -1.5, lineHeight: 1.1, subSize: 2.9, subColor: '#ffffff', subOpacity: 70, box: 'glass', boxRadius: 3 },
    bg: { type: 'mesh', c1: '#1e2a5a', c2: '#3a1f5c', c3: '#0b0f1e', variant: 1, noise: 8 }, device: { frame: 'iphone-pro', color: 'graphite', shadow: 60, fit: 'top' },
    screens: S8([
      ['small', 'Your body,\n[measured]', 'Bedenin,\n[ölçülmüş]', 'Sleep, strain and recovery', 'Uyku, yük ve toparlanma'],
      ['small', 'Recovery\n[score]', 'Toparlanma\n[skoru]', 'Know when to push', 'Ne zaman yükleneceğini bil'],
      ['small', 'Sleep\n[stages]', 'Uyku\n[evreleri]', 'Deep, REM, light', 'Derin, REM, hafif'],
      ['small', 'Heart rate\n[zones]', 'Nabız\n[bölgeleri]', 'Train in the right zone', 'Doğru bölgede çalış'],
      ['small', 'Weekly\n[trends]', 'Haftalık\n[eğilimler]', 'See the pattern', 'Örüntüyü gör'],
      ['small', 'Works with\n[your watch]', '[Saatinle]\nçalışır', 'Apple Watch, Garmin, Oura', 'Apple Watch, Garmin, Oura'],
      ['small', 'Private\n[health data]', 'Özel\n[sağlık verisi]', 'Encrypted on device', 'Cihazda şifreli'],
      ['small', 'Start\n[tracking]', '[Takibe]\nbaşla', '7 days free', '7 gün ücretsiz'],
    ]) });

  /* 12 Inspired by NordVPN — koyu lacivert, mavi vurgu, kalkan çip */
  defineTemplate({ key: 'nordvpn', name: 'Inspired by NordVPN', desc: T('Koyu lacivert zemin, mavi vurgu, güven çipleri ve düz cihaz. VPN ve güvenlik uygulamaları için.', 'Dark navy background, blue accent, trust chips and a straight device. For VPN and security apps.'),
    tags: ['simple', 'dark', 'badges'], cats: ['utilities', 'productivity', 'business'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 7.8, color: '#ffffff', accent: '#4687ff', letterSpacing: -2, lineHeight: 1.06, subSize: 3, subColor: '#ffffff', subOpacity: 70 },
    bg: { type: 'linear', c1: '#0a1128', c2: '#101c45', angle: 180 }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['text-top', 'Browse\n[privately]', '[Gizli]\ngez', 'One tap, you are protected', 'Tek dokunuş, korundun', { els: [{ kind: 'pill', emoji: '🛡', x: 50, y: 24, size: 2.6, text: T('Kayıt tutmaz', 'No logs'), bg: '#4687ff', color: '#ffffff', rot: 0 }] }],
      ['text-top', '[6000+]\nservers', '[6000+]\nsunucu', 'In 100+ countries', '100+ ülkede'],
      ['text-top', 'Threat\n[protection]', 'Tehdit\n[koruması]', 'Blocks ads, trackers, malware', 'Reklam, izleyici, zararlı engellenir'],
      ['text-top', 'Fastest\n[speeds]', 'En yüksek\n[hız]', 'Stream and game without lag', 'Takılmadan izle ve oyna'],
      ['text-top', '[10] devices,\none account', '[10] cihaz,\ntek hesap', 'Phone, laptop, TV', 'Telefon, dizüstü, TV'],
      ['text-top', 'Auto\n[connect]', 'Otomatik\n[bağlan]', 'Safe on public Wi-Fi', 'Halka açık Wi-Fi\'da güvende'],
      ['text-top', '24/7\n[support]', '7/24\n[destek]', 'Real humans, any time', 'Gerçek insanlar, her an'],
      ['text-top', '30-day\n[guarantee]', '30 gün\n[garanti]', 'Money back, no questions', 'Para iadesi, soru yok'],
    ]) });

  /* 13 Sive — bento kartlar, mor */
  defineTemplate({ key: 'sive', name: 'Sive', desc: T('Beyaz zeminde büyük mor kartlar: başlık kartı, özellik kartları ve laurel kartı. Alışkanlık ve sağlık uygulamaları için bento düzeni.', 'Large purple cards on white: a headline card, feature cards and a laurel card. A bento layout for habit and wellness apps.'),
    tags: ['advanced', 'colourful', 'graphics', 'multi layered'], cats: ['health & fitness', 'lifestyle', 'productivity'], theme: 'colourful', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 9, color: '#ffffff', accent: '#ffffff', letterSpacing: -2.5, lineHeight: 1.0, subSize: 3, subColor: '#ffffff', subOpacity: 95, subFlow: false, titleBox: { x: 8, y: 8, w: 84, h: 30, valign: 'middle' }, subBox: { x: 8, y: 41, w: 84 } },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 40, fit: 'top' },
    screens: S8([
      ['text-top', '#1\nHabit\nTracking', '#1\nAlışkanlık\nTakibi', 'create your perfect daily routine', 'mükemmel günlük rutinini kur', { dev: null, under: [{ kind: 'shape', shape: 'rect', x: 50, y: 26, w: 92, h: 47, color: '#7b5cf5', radius: 5, opacity: 100 }, { kind: 'shape', shape: 'rect', x: 27, y: 66, w: 45, h: 24, color: '#7b5cf5', radius: 5, opacity: 100 }, { kind: 'shape', shape: 'rect', x: 73, y: 66, w: 45, h: 24, color: '#7b5cf5', radius: 5, opacity: 100 }, { kind: 'shape', shape: 'rect', x: 50, y: 89, w: 92, h: 18, color: '#7b5cf5', radius: 5, opacity: 100 }], els: [{ kind: 'emoji', x: 27, y: 63, size: 5, text: '🌳' }, { kind: 'emoji', x: 73, y: 63, size: 5, text: '🔥' },
        { kind: 'text', x: 27, y: 75, size: 2.6, text: T('Sağlıklı kal', 'Stay Healthy'), color: '#ffffff' }, { kind: 'text', x: 73, y: 75, size: 2.6, text: T('Alışkanlık kur', 'Build Habits'), color: '#ffffff' },
        { kind: 'laurel', x: 50, y: 89, size: 2.2, text: T('100.000+\nKULLANICI', '100,000+\nUSERS'), sub: '★★★★★', color: '#ffffff' }] }],
      ['text-top', 'Build\nroutines', 'Rutin\nkur', 'morning, day and night', 'sabah, gün ve gece', { titleBox: { x: 8, y: 6, w: 84, h: 18, valign: 'middle' }, subBox: { x: 8, y: 25, w: 84 }, dev: { x: 15, y: 33, w: 70 }, under: [{ kind: 'shape', shape: 'rect', x: 50, y: 17, w: 92, h: 26, color: '#7b5cf5', radius: 5, opacity: 100 }], els: [] }],
      ['text-top', 'Track\nstreaks', 'Serileri\ntakip et', 'stay consistent', 'tutarlı kal', { titleBox: { x: 8, y: 6, w: 84, h: 18, valign: 'middle' }, subBox: { x: 8, y: 25, w: 84 }, dev: { x: 15, y: 33, w: 70 }, under: [{ kind: 'shape', shape: 'rect', x: 50, y: 17, w: 92, h: 26, color: '#7b5cf5', radius: 5, opacity: 100 }], els: [] }],
      ['text-top', 'Gentle\nreminders', 'Nazik\nhatırlatma', 'at the right time', 'doğru anda', { titleBox: { x: 8, y: 6, w: 84, h: 18, valign: 'middle' }, subBox: { x: 8, y: 25, w: 84 }, dev: { x: 15, y: 33, w: 70 }, under: [{ kind: 'shape', shape: 'rect', x: 50, y: 17, w: 92, h: 26, color: '#7b5cf5', radius: 5, opacity: 100 }], els: [] }],
      ['text-top', 'See your\nprogress', 'İlerlemeni\ngör', 'weekly and monthly', 'haftalık ve aylık', { titleBox: { x: 8, y: 6, w: 84, h: 18, valign: 'middle' }, subBox: { x: 8, y: 25, w: 84 }, dev: { x: 15, y: 33, w: 70 }, under: [{ kind: 'shape', shape: 'rect', x: 50, y: 17, w: 92, h: 26, color: '#7b5cf5', radius: 5, opacity: 100 }], els: [] }],
      ['text-top', 'Mood\njournal', 'Ruh hâli\ngünlüğü', 'one tap a day', 'günde bir dokunuş', { titleBox: { x: 8, y: 6, w: 84, h: 18, valign: 'middle' }, subBox: { x: 8, y: 25, w: 84 }, dev: { x: 15, y: 33, w: 70 }, under: [{ kind: 'shape', shape: 'rect', x: 50, y: 17, w: 92, h: 26, color: '#7b5cf5', radius: 5, opacity: 100 }], els: [] }],
      ['text-top', 'Widgets\n& watch', 'Widget\nve saat', 'tick from anywhere', 'her yerden işaretle', { titleBox: { x: 8, y: 6, w: 84, h: 18, valign: 'middle' }, subBox: { x: 8, y: 25, w: 84 }, dev: { x: 15, y: 33, w: 70 }, under: [{ kind: 'shape', shape: 'rect', x: 50, y: 17, w: 92, h: 26, color: '#7b5cf5', radius: 5, opacity: 100 }], els: [] }],
      ['text-top', 'Start\ntoday', 'Bugün\nbaşla', 'free, no ads', 'ücretsiz, reklamsız', { titleBox: { x: 8, y: 6, w: 84, h: 18, valign: 'middle' }, subBox: { x: 8, y: 25, w: 84 }, dev: { x: 15, y: 33, w: 70 }, under: [{ kind: 'shape', shape: 'rect', x: 50, y: 17, w: 92, h: 26, color: '#7b5cf5', radius: 5, opacity: 100 }], els: [] }],
    ]) });

  /* 14 Triton — mavi gradyan, ortalı beyaz yuvarlak font */
  defineTemplate({ key: 'triton', name: 'Triton', desc: T('Parlak mavi gradyan, ortalı yuvarlak beyaz başlık, koyu cihaz. Finans ve bütçe uygulamaları için.', 'Bright blue gradient, centred rounded white headline, dark device. For finance and budgeting apps.'),
    tags: ['simple', 'gradient', 'colourful'], cats: ['finance', 'utilities', 'business'], theme: 'colourful', skill: 'simple', devices: ['iphone', 'android'],
    style: { font: 'fredoka', weight: 700, size: 8.4, color: '#ffffff', accent: '#ffe066', letterSpacing: -1, lineHeight: 1.05, subSize: 3, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'linear', c1: '#1e88ff', c2: '#0b4fd6', angle: 180 }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['bleed', 'Watch your\naccounts\n[grow]', 'Hesaplarının\n[büyümesini]\nizle', null],
      ['bleed', 'Budget by\n[category]', '[Kategoriye]\ngöre bütçe', null],
      ['bleed', 'Bills,\n[on time]', 'Faturalar,\n[zamanında]', null],
      ['bleed', 'Goals you\ncan [see]', '[Görebildiğin]\nhedefler', null],
      ['bleed', 'Shared\n[wallets]', 'Ortak\n[cüzdanlar]', null],
      ['bleed', 'Smart\n[insights]', 'Akıllı\n[içgörüler]', null],
      ['bleed', 'Bank-grade\n[security]', 'Banka düzeyi\n[güvenlik]', null],
      ['bleed', 'Free to\n[start]', 'Ücretsiz\n[başla]', null],
    ]) });

  /* 15 Zeus — açık, sol başlık mor+siyah, eğik cihaz */
  defineTemplate({ key: 'zeus', name: 'Zeus', desc: T('Açık gri zemin, sol hizalı iki renkli başlık (mor + siyah), eğik cihaz alttan taşar. Fitness ve spor için.', 'Light grey background, left-aligned two-tone headline (purple + black), tilted device bleeding off the bottom. For fitness and sports apps.'),
    tags: ['simple', 'light', 'bold'], cats: ['health & fitness', 'sports', 'lifestyle'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 7.8, color: '#111827', accent: '#6b5cf6', letterSpacing: -2.5, lineHeight: 1.06, subSize: 3.1, subColor: '#4b5563', subOpacity: 100 },
    bg: { type: 'solid', c1: '#f3f4f8' }, device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S8([
      ['text-top-left', '[Feel Fitness]\nConfidence', '[Formda]\nHisset', 'Follow programs anywhere, anytime that suits your routine', 'Programları her yerde, rutinine uyan saatte takip et', { dev: { x: 10, y: 30, w: 92, rot: -8 } }],
      ['text-top-left', '[Workouts]\nfor every level', 'Her seviyeye\n[antrenman]', 'Beginner to advanced', 'Başlangıçtan ileri düzeye', { dev: { x: -2, y: 30, w: 92, rot: 8 } }],
      ['text-top-left', '[Track]\nyour progress', 'İlerlemeni\n[izle]', 'Weight, reps and personal bests', 'Ağırlık, tekrar ve rekorlar', { dev: { x: 10, y: 30, w: 92, rot: -8 } }],
      ['text-top-left', '[Plans]\nthat adapt', 'Uyum sağlayan\n[planlar]', 'Miss a day? It reschedules.', 'Gün kaçırdın mı? Yeniden planlar.', { dev: { x: -2, y: 30, w: 92, rot: 8 } }],
      ['text-top-left', '[Video]\nguidance', '[Videolu]\nrehber', 'Form tips from real coaches', 'Gerçek koçlardan form ipuçları', { dev: { x: 10, y: 30, w: 92, rot: -8 } }],
      ['text-top-left', '[Nutrition]\nincluded', '[Beslenme]\ndahil', 'Meal plans that fit your goals', 'Hedefine uyan öğün planı', { dev: { x: -2, y: 30, w: 92, rot: 8 } }],
      ['text-top-left', '[Community]\nchallenges', '[Topluluk]\nmeydan okumaları', 'Stay motivated together', 'Birlikte motive kal', { dev: { x: 10, y: 30, w: 92, rot: -8 } }],
      ['text-top-left', '[Start]\ntoday', '[Bugün]\nbaşla', '7-day free trial', '7 gün ücretsiz', { dev: { x: -2, y: 30, w: 92, rot: 8 } }],
    ]) });

  /* 16 Eira — açık lila gradyan, siyah ortalı başlık, çerçevesiz kart cihaz */
  defineTemplate({ key: 'eira', name: 'Eira', desc: T('Açık lila gradyan, siyah ortalı başlık, çerçevesiz yuvarlak köşeli ekran kartı. AI ve eğitim uygulamaları için.', 'Light lilac gradient, centred black headline, frameless rounded screen card. For AI and education apps.'),
    tags: ['simple', 'light', 'gradient', 'minimal'], cats: ['education', 'productivity', 'developer tools', 'utilities'], theme: 'light', skill: 'simple',
    style: { font: 'plus-jakarta', weight: 800, size: 6.8, color: '#111214', accent: '#7c5cff', letterSpacing: -2, lineHeight: 1.08, subSize: 3, subColor: '#111214', subOpacity: 60 },
    bg: { type: 'linear', c1: '#f4f1ff', c2: '#d9d0ff', angle: 180 }, device: { frame: 'none', fit: 'top', shadow: 45 },
    screens: S8([
      ['card', 'Learn coding\nwith your [AI tutor]', '[AI eğitmeninle]\nkodlama öğren', null, null, { dev: { x: 8, y: 22, w: 84 }, titleBox: { align: 'center' }, els: [{ kind: 'emoji', x: 50, y: 18, size: 6, text: '👾' }] }],
      ['card', 'See every concept\n[come to life]', 'Her kavram\n[canlansın]', null, null, { dev: { x: 8, y: 22, w: 84 }, titleBox: { align: 'center' } }],
      ['card', 'Debug code with\n[AI guidance]', 'Kodu [AI rehberliğiyle]\nayıkla', null, null, { dev: { x: 8, y: 22, w: 84 }, titleBox: { align: 'center' } }],
      ['card', 'Learn AI concepts\n[the visual way]', 'AI kavramlarını\n[görsel] öğren', null, null, { dev: { x: 8, y: 22, w: 84 }, titleBox: { align: 'center' } }],
      ['card', 'Start at your\n[own pace]', 'Kendi [hızında]\nbaşla', null, null, { dev: { x: 8, y: 22, w: 84 }, titleBox: { align: 'center' } }],
      ['card', 'Projects, not\njust [theory]', 'Sadece [teori]\ndeğil, proje', null, null, { dev: { x: 8, y: 22, w: 84 }, titleBox: { align: 'center' } }],
      ['card', 'Earn\n[certificates]', '[Sertifika]\nkazan', null, null, { dev: { x: 8, y: 22, w: 84 }, titleBox: { align: 'center' } }],
      ['card', 'Free to\n[start]', 'Ücretsiz\n[başla]', null, null, { dev: { x: 8, y: 22, w: 84 }, titleBox: { align: 'center' } }],
    ]) });

  /* 17 Inspired by Stripe — beyaz, mor/indigo gradyan başlık, ince cihaz */
  defineTemplate({ key: 'stripe', name: 'Inspired by Stripe', desc: T('Beyaz zemin, gradyanlı mor başlık, gri alt başlık, ince koyu cihaz. Fintech ve B2B için.', 'White background, gradient purple headline, grey subtitle, slim dark device. For fintech and B2B apps.'),
    tags: ['simple', 'light', 'gradient', 'minimal'], cats: ['finance', 'business', 'developer tools'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 7.4, color: '#5b5bd6', accent: '#5b5bd6', letterSpacing: -2.5, lineHeight: 1.06, subSize: 3, subColor: '#425466', subOpacity: 100, gradient: { c1: '#635bff', c2: '#a960ee' } },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 30, fit: 'top' },
    screens: S8([
      ['text-top', 'Payments\ninfrastructure', 'Ödeme\naltyapısı', 'Accept payments in minutes', 'Dakikalar içinde ödeme al'],
      ['text-top', 'Real-time\nrevenue', 'Gerçek zamanlı\ngelir', 'Every metric, one dashboard', 'Her metrik, tek pano'],
      ['text-top', 'Invoices\nthat get paid', 'Ödenen\nfaturalar', 'Send, remind, reconcile', 'Gönder, hatırlat, eşleştir'],
      ['text-top', 'Subscriptions\nmade simple', 'Basit\nabonelikler', 'Trials, upgrades, dunning', 'Deneme, yükseltme, tahsilat'],
      ['text-top', 'Instant\npayouts', 'Anında\nödeme', 'Money in your account today', 'Para bugün hesabında'],
      ['text-top', 'Fraud\nprotection', 'Dolandırıcılık\nkoruması', 'Machine learning on every charge', 'Her işlemde makine öğrenmesi'],
      ['text-top', 'Works\nglobally', 'Küresel\nçalışır', '135+ currencies', '135+ para birimi'],
      ['text-top', 'Start\nbuilding', 'İnşa etmeye\nbaşla', 'No setup fees', 'Kurulum ücreti yok'],
    ]) });

  /* 18 Alora — pembe/şeftali gradyan, beyaz yuvarlak, cihaz ortada */
  defineTemplate({ key: 'alora', name: 'Alora', desc: T('Şeftali-pembe gradyan, ortalı beyaz yuvarlak başlık, gümüş cihaz. Yaşam, güzellik ve sosyal uygulamalar için.', 'Peach-pink gradient, centred rounded white headline, silver device. For lifestyle, beauty and social apps.'),
    tags: ['simple', 'gradient', 'colourful'], cats: ['lifestyle', 'social networking', 'health & fitness', 'shopping'], theme: 'colourful', skill: 'simple', devices: ['iphone', 'android'],
    style: { font: 'nunito', weight: 900, size: 7.8, color: '#ffffff', accent: '#fff3b0', letterSpacing: -1, lineHeight: 1.05, subSize: 3, subColor: '#ffffff', subOpacity: 90 },
    bg: { type: 'linear', c1: '#ff9a8b', c2: '#ff6a88', angle: 160 }, device: { frame: 'iphone-pro', color: 'silver', shadow: 50, fit: 'top' },
    screens: S8([
      ['text-top', 'Glow from\n[within]', '[İçten]\nparla', 'Skincare routines that stick', 'Kalıcı cilt bakımı rutinleri'],
      ['text-top', 'Your daily\n[ritual]', 'Günlük\n[ritüelin]', 'Morning and night, guided', 'Sabah ve gece, rehberli'],
      ['text-top', 'Track your\n[skin]', '[Cildini]\ntakip et', 'Photos, notes, progress', 'Fotoğraf, not, ilerleme'],
      ['text-top', 'Products\nthat [fit]', 'Sana [uyan]\nürünler', 'Matched to your skin type', 'Cilt tipine göre'],
      ['text-top', 'Learn from\n[experts]', '[Uzmanlardan]\nöğren', 'Dermatologist-approved tips', 'Dermatolog onaylı ipuçları'],
      ['text-top', 'Gentle\n[reminders]', 'Nazik\n[hatırlatmalar]', 'Never skip a step', 'Hiçbir adımı atlama'],
      ['text-top', 'A community\nthat [cares]', '[Umursayan]\nbir topluluk', 'Share and cheer each other on', 'Paylaş ve birbirini destekle'],
      ['text-top', 'Start your\n[glow-up]', '[Parlamaya]\nbaşla', 'Free 7-day plan', 'Ücretsiz 7 günlük plan'],
    ]) });

  /* 19 Inspired by JSHealth — krem, serif, yeşil vurgu */
  defineTemplate({ key: 'jshealth', name: 'Inspired by JSHealth', desc: T('Krem zemin, serif başlık, adaçayı yeşili vurgu; yumuşak gölgeli cihaz. Beslenme ve wellness için.', 'Cream background, serif headline, sage-green accent and a softly shadowed device. For nutrition and wellness apps.'),
    tags: ['simple', 'light', 'serif', 'minimal'], cats: ['health & fitness', 'food & drink', 'lifestyle'], theme: 'light', skill: 'simple',
    style: { font: 'fraunces', weight: 600, size: 7.6, color: '#2b2b26', accent: '#6f8f5e', letterSpacing: -1.5, lineHeight: 1.06, subSize: 3, subColor: '#2b2b26', subOpacity: 60 },
    bg: { type: 'solid', c1: '#f6f1e7', noise: 5 }, device: { frame: 'iphone-pro', color: 'silver', shadow: 35, fit: 'top' },
    screens: S8([
      ['text-top', 'Nourish\nyour [body]', '[Bedenini]\nbesle', 'Meal plans by real nutritionists', 'Gerçek diyetisyenlerden öğün planı'],
      ['text-top', 'Recipes you\nwill [love]', '[Seveceğin]\ntarifler', '500+ simple, wholesome meals', '500+ basit, sağlıklı yemek'],
      ['text-top', 'Track\n[mindfully]', '[Bilinçli]\ntakip', 'No calorie obsession', 'Kalori takıntısı yok'],
      ['text-top', 'Move\n[gently]', '[Nazikçe]\nhareket et', 'Pilates, yoga, walks', 'Pilates, yoga, yürüyüş'],
      ['text-top', 'Sleep\n[better]', 'Daha [iyi]\nuyu', 'Evening wind-down rituals', 'Akşam sakinleşme ritüelleri'],
      ['text-top', 'Weekly\n[shopping list]', 'Haftalık\n[alışveriş listesi]', 'Generated from your plan', 'Planından üretilir'],
      ['text-top', 'Real\n[support]', 'Gerçek\n[destek]', 'Coaches who answer', 'Cevap veren koçlar'],
      ['text-top', 'Begin\n[today]', '[Bugün]\nbaşla', 'First week on us', 'İlk hafta bizden'],
    ]) });

  /* 20 Runa — koyu yeşil, sarımsı vurgu, spor */
  defineTemplate({ key: 'runa', name: 'Runa', desc: T('Koyu orman yeşili zemin, kireç vurgusu, kalın büyük harf başlık, dönüşümlü eğik cihaz. Koşu ve spor için.', 'Deep forest-green background, lime accent, bold uppercase headline and an alternating tilted device. For running and sports apps.'),
    tags: ['advanced', 'dark', 'bold'], cats: ['sports', 'health & fitness'], theme: 'dark', skill: 'advanced',
    style: { font: 'montserrat', weight: 900, size: 8, color: '#ffffff', accent: '#d7ff3a', uppercase: true, letterSpacing: -1, lineHeight: 1.0, subSize: 3, subColor: '#ffffff', subOpacity: 70 },
    bg: { type: 'radial', c1: '#1f5a3a', c2: '#0b2a1a', noise: 8 }, device: { frame: 'iphone-pro', color: 'black', shadow: 60, fit: 'top' },
    screens: S8([
      ['tilt', 'Run\n[further]', 'Daha [uzağa]\nkoş', 'GPS, pace, heart rate', 'GPS, tempo, nabız'],
      ['tilt-r', 'Beat your\n[record]', '[Rekorunu]\nkır', 'Segments and PBs', 'Segmentler ve rekorlar'],
      ['tilt', 'Plans that\n[adapt]', 'Uyum sağlayan\n[planlar]', 'From 5K to marathon', '5K\'dan maratona'],
      ['tilt-r', 'Train by\n[heart rate]', '[Nabızla]\nçalış', 'Zones that make sense', 'Anlamlı bölgeler'],
      ['tilt', 'Routes\nnear [you]', '[Yakınındaki]\nrotalar', 'Popular, safe, scenic', 'Popüler, güvenli, manzaralı'],
      ['tilt-r', 'Run with\n[friends]', 'Arkadaşlarla\n[koş]', 'Clubs and challenges', 'Kulüpler ve meydan okumalar'],
      ['tilt', 'Recovery\n[matters]', 'Toparlanma\n[önemli]', 'Sleep and load tracking', 'Uyku ve yük takibi'],
      ['bleed', 'Get out\n[today]', '[Bugün]\nçık', 'Free to start', 'Ücretsiz başla'],
    ]) });

  /* 21 Inspired by Brain Training — canlı turuncu-mor, kalın, oyunsu */
  defineTemplate({ key: 'brain-training', name: 'Inspired by Brain Training', desc: T('Canlı mor zemin, turuncu vurgu, kalın yuvarlak başlık, düz cihaz. Beyin egzersizi ve eğitim oyunları için.', 'Vivid purple background, orange accent, chunky rounded headline, straight device. For brain-training and educational games.'),
    tags: ['simple', 'colourful', 'bold'], cats: ['games', 'education', 'health & fitness'], theme: 'colourful', skill: 'simple',
    style: { font: 'baloo', weight: 800, size: 8.2, color: '#ffffff', accent: '#ffb443', letterSpacing: -0.5, lineHeight: 1.02, subSize: 3, subColor: '#ffffff', subOpacity: 90 },
    bg: { type: 'solid', c1: '#5b3df5' }, device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S8([
      ['text-top', 'Train your\n[brain]', '[Beynini]\nçalıştır', '5 minutes a day', 'Günde 5 dakika'],
      ['text-top', 'Sharpen\n[memory]', '[Hafızanı]\nkeskinleştir', 'Games backed by science', 'Bilime dayalı oyunlar'],
      ['text-top', 'Boost\n[focus]', '[Odağını]\nartır', 'Track attention over time', 'Dikkati zamanla izle'],
      ['text-top', 'Faster\n[thinking]', 'Daha hızlı\n[düşün]', 'Speed and logic drills', 'Hız ve mantık alıştırmaları'],
      ['text-top', 'Daily\n[workout]', 'Günlük\n[egzersiz]', 'A fresh mix every morning', 'Her sabah yeni karışım'],
      ['text-top', 'See your\n[score]', '[Puanını]\ngör', 'Compare with your age group', 'Yaş grubunla karşılaştır'],
      ['text-top', '60+\n[games]', '60+\n[oyun]', 'Puzzles, words, numbers', 'Bulmaca, kelime, sayı'],
      ['text-top', 'Start\n[free]', '[Ücretsiz]\nbaşla', 'No ads', 'Reklam yok'],
    ]) });

  /* 22 Vanta — mat siyah, ince beyaz serif, minimal */
  defineTemplate({ key: 'vanta', name: 'Vanta', desc: T('Mat siyah zemin, ince beyaz serif başlık, gri alt başlık, küçük grafit cihaz. Premium ve minimal ürünler için.', 'Matte black background, thin white serif headline, grey subtitle, small graphite device. For premium, minimal products.'),
    tags: ['simple', 'dark', 'serif', 'minimal'], cats: ['lifestyle', 'productivity', 'finance', 'photo & video'], theme: 'dark', skill: 'simple',
    style: { font: 'playfair', weight: 500, size: 7.2, color: '#f5f5f0', accent: '#d4af37', letterSpacing: -1, lineHeight: 1.08, subSize: 2.9, subColor: '#f5f5f0', subOpacity: 55 },
    bg: { type: 'solid', c1: '#0d0d0d', noise: 8, vignette: 25 }, device: { frame: 'iphone-pro', color: 'graphite', shadow: 65, fit: 'top' },
    screens: S8([
      ['small', 'Less noise,\nmore [signal]', 'Daha az gürültü,\ndaha çok [sinyal]', 'A calmer way to read', 'Daha sakin bir okuma'],
      ['small', 'Curated\n[daily]', '[Günlük]\nseçki', 'Ten stories, no more', 'On haber, fazlası yok'],
      ['small', 'Read\n[offline]', '[Çevrimdışı]\noku', 'Saved for the flight', 'Uçuş için kaydedildi'],
      ['small', 'Type\nthat [rests]', '[Dinlendiren]\ntipografi', 'Serif, warm, adjustable', 'Serif, sıcak, ayarlanabilir'],
      ['small', 'Highlights,\n[kept]', 'Vurgular,\n[saklı]', 'Your notes, exportable', 'Notların, dışa aktarılabilir'],
      ['small', 'No\n[tracking]', '[İzleme]\nyok', 'We don\'t sell attention', 'Dikkat satmıyoruz'],
      ['small', 'Dark by\n[default]', 'Varsayılan\n[koyu]', 'Easy on the eyes at night', 'Gece gözü yormaz'],
      ['small', 'Subscribe\n[quietly]', 'Sessizce\n[abone ol]', 'One price, no tiers', 'Tek fiyat, kademe yok'],
    ]) });

  /* 23 Inspired by Seed — yeşil, yuvarlak, bitki */
  defineTemplate({ key: 'seed', name: 'Inspired by Seed', desc: T('Açık yeşil zemin, koyu yeşil yuvarlak başlık, beyaz cihaz. Bahçe, bitki ve sürdürülebilirlik uygulamaları için.', 'Light green background, dark-green rounded headline, white device. For gardening, plant and sustainability apps.'),
    tags: ['simple', 'light', 'colourful'], cats: ['lifestyle', 'education', 'utilities'], theme: 'light', skill: 'simple',
    style: { font: 'nunito', weight: 900, size: 7.8, color: '#1f4d2b', accent: '#2fa25a', letterSpacing: -1, lineHeight: 1.05, subSize: 3, subColor: '#1f4d2b', subOpacity: 70 },
    bg: { type: 'solid', c1: '#e6f4ea' }, device: { frame: 'iphone-pro', color: 'white', shadow: 35, fit: 'top' },
    screens: S8([
      ['text-top', 'Grow\n[anything]', '[Her şeyi]\nyetiştir', 'Care guides for 10,000 plants', '10.000 bitki için bakım rehberi'],
      ['text-top', 'Water\n[on time]', '[Zamanında]\nsula', 'Reminders per plant', 'Bitki başına hatırlatma'],
      ['text-top', 'Identify\nin a [snap]', 'Bir [çekimde]\ntanı', 'Point the camera, know the plant', 'Kamerayı tut, bitkiyi bil'],
      ['text-top', 'Diagnose\n[problems]', '[Sorunları]\nteşhis et', 'Yellow leaves? We know why.', 'Sarı yaprak mı? Nedenini biliyoruz.'],
      ['text-top', 'Light\n[meter]', 'Işık\n[ölçer]', 'Find the perfect spot', 'Mükemmel yeri bul'],
      ['text-top', 'Your\n[journal]', 'Bitki\n[günlüğün]', 'Photos that show growth', 'Büyümeyi gösteren fotoğraflar'],
      ['text-top', 'Community\n[help]', 'Topluluk\n[desteği]', 'Ask other growers', 'Diğer yetiştiricilere sor'],
      ['text-top', 'Plant your\n[first seed]', '[İlk tohumunu]\nek', 'Free to start', 'Ücretsiz başla'],
    ]) });

  /* 24 Inspired by Claude by Anthropic — sıcak krem/turuncu, serif */
  defineTemplate({ key: 'claude-ai', name: 'Inspired by Claude by Anthropic', desc: T('Sıcak krem zemin, turuncu vurgu, serif başlık, küçük cihaz. AI asistan ve yazı uygulamaları için.', 'Warm cream background, terracotta accent, serif headline, small device. For AI assistant and writing apps.'),
    tags: ['simple', 'light', 'serif', 'minimal'], cats: ['productivity', 'utilities', 'education', 'business'], theme: 'light', skill: 'simple',
    style: { font: 'lora', weight: 600, size: 7.2, color: '#2a2622', accent: '#d97757', letterSpacing: -1.2, lineHeight: 1.08, subSize: 3, subColor: '#2a2622', subOpacity: 60, subFont: 'inter' },
    bg: { type: 'solid', c1: '#f4efe7' }, device: { frame: 'iphone-pro', color: 'silver', shadow: 35, fit: 'top' },
    screens: S8([
      ['small', 'Think\n[together]', '[Birlikte]\ndüşün', 'An assistant that reasons with you', 'Seninle akıl yürüten bir asistan'],
      ['small', 'Write\n[clearly]', '[Açık]\nyaz', 'Drafts, edits, tone', 'Taslak, düzenleme, ton'],
      ['small', 'Understand\n[documents]', '[Belgeleri]\nanla', 'PDFs, spreadsheets, images', 'PDF, tablo, görsel'],
      ['small', 'Code with\n[confidence]', '[Güvenle]\nkodla', 'Explain, fix, refactor', 'Açıkla, düzelt, iyileştir'],
      ['small', 'Talk it\n[through]', 'Konuşarak\n[çöz]', 'Voice conversations', 'Sesli sohbet'],
      ['small', 'Projects that\n[remember]', '[Hatırlayan]\nprojeler', 'Context that stays', 'Kalıcı bağlam'],
      ['small', 'Safe by\n[design]', 'Tasarımı gereği\n[güvenli]', 'Your data is not training data', 'Verin eğitim verisi değil'],
      ['small', 'Start\n[free]', '[Ücretsiz]\nbaşla', 'No card required', 'Kart gerekmez'],
    ]) });
})();
