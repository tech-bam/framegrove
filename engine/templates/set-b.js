/* Set B — appscreens kataloğu 29-60 (Givelify … Luma) yeniden çizim; metinler örnek, EN+TR. */
(function () {
  const T = (tr, en) => ({ en, tr });
  const S8 = (rows) => rows.map(([layout, en, tr, sub_en, sub_tr, extra]) => Object.assign({ layout, title: T(tr, en), sub: sub_en == null ? false : T(sub_tr || sub_en, sub_en) }, extra || {}));
  const alt = (i, a, b) => (i % 2 ? b : a);

  /* Givelify — sıcak pastel dönüşümlü zeminler, siyah kalın başlık, düz cihaz */
  defineTemplate({ key: 'givelify', name: 'Inspired by Givelify', desc: T('Ekran başına değişen sıcak pastel zemin (yeşil, pembe, mavi, şeftali), kalın koyu başlık ve düz cihaz. Bağış, topluluk ve yaşam uygulamaları için.', 'A warm pastel background per screen (green, pink, blue, peach), bold dark headline and a straight device. For donation, community and lifestyle apps.'),
    tags: ['simple', 'colourful', 'pastel'], cats: ['lifestyle', 'social networking', 'finance', 'education'], theme: 'colourful', skill: 'simple',
    style: { font: 'nunito', weight: 900, size: 7.4, color: '#1f2a1e', accent: '#e4572e', letterSpacing: -1, lineHeight: 1.06, subSize: 3, subOpacity: 75 },
    device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S8([
      ['text-top', 'Small donations,\n[big] impacts!', 'Küçük bağış,\n[büyük] etki!', null, null, { bg: { type: 'solid', c1: '#e9f3d6' } }],
      ['bleed', 'See your\nkindness add up.', 'İyiliğinin\nbirikimini gör.', null, null, { bg: { type: 'solid', c1: '#dff1d8' } }],
      ['bleed', 'Find causes that\nmatch your heart.', 'Kalbine uyan\nnedenleri bul.', null, null, { bg: { type: 'solid', c1: '#f4d9dc' } }],
      ['bleed', 'Know where your\ndonation goes.', 'Bağışın nereye\ngittiğini bil.', null, null, { bg: { type: 'solid', c1: '#d6e6f7' } }],
      ['bleed', 'Give safely in\njust a few taps.', 'Birkaç dokunuşla\ngüvenle ver.', null, null, { bg: { type: 'solid', c1: '#fbe3cf' } }],
      ['bleed', 'Set up a\nrecurring gift.', 'Düzenli bağış\nayarla.', null, null, { bg: { type: 'solid', c1: '#e9f3d6' } }],
      ['bleed', 'Track every\nreceipt.', 'Her makbuzu\ntakip et.', null, null, { bg: { type: 'solid', c1: '#f4d9dc' } }],
      ['bleed', 'Join your\ncommunity.', 'Topluluğuna\nkatıl.', null, null, { bg: { type: 'solid', c1: '#d6e6f7' } }],
    ]) });

  /* CampusSync — lila zemin, mavi/mor başlık, laurel çifti, beyaz + siyah cihaz */
  defineTemplate({ key: 'campussync', name: 'CampusSync', desc: T('Açık lila zemin, mor başlık ve büyük siyah puan rozetleri; ilk karede "#1" iddiası ve iki laurel. Öğrenci ve verimlilik uygulamaları için.', 'Light lilac background, purple headline and prominent rating; a "#1" claim with two laurels on the first screen. For student and productivity apps.'),
    tags: ['advanced', 'light', 'badges'], cats: ['education', 'productivity', 'utilities'], theme: 'light', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 7.6, color: '#2a2b7a', accent: '#6d5ce7', letterSpacing: -2, lineHeight: 1.05, subSize: 3, subColor: '#3d3f6b', subOpacity: 90 },
    bg: { type: 'solid', c1: '#ebe9ff' }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed', 'The [#1] college\napp for students', 'Öğrenciler için\n[#1] kampüs uygulaması', 'Keep every class, event and deadline in one place.', 'Her ders, etkinlik ve teslim tarihi tek yerde.', { titleBox: { y: 28, x: 8, align: 'left' }, subBox: { x: 8, align: 'left' }, dev: { x: 34, y: 43, w: 84, rot: -22, color: 'black' }, els: [{ kind: 'rating', x: 24, y: 12, size: 2.4, text: T('4.9 · Öğrenciler seviyor', '4.9 · Loved by students'), bg: '#ffffff' }, { kind: 'laurel', x: 20, y: 86, size: 2.2, text: T('2M+\nÖğrenci', '2M+\nStudents'), color: '#2a2b7a' }, { kind: 'laurel', x: 60, y: 86, size: 2.2, text: T('Editörün\nSeçimi', "Editors'\nchoice"), color: '#2a2b7a' }] }],
      ['bleed', 'Plan your\nday [smarter]', 'Gününü daha\n[akıllı] planla', null, null, { dev: { x: 10, y: 30, w: 80, rot: 8, color: 'black' } }],
      ['bleed', 'Build better\ndaily [habits]', 'Daha iyi\n[alışkanlıklar]', null],
      ['bleed', 'Beat every\n[deadline]', 'Her [teslimi]\nyetiştir', null],
      ['bleed', 'Lock in\nyour [focus]', '[Odağını]\nkilitle', null, null, { bg: { type: 'solid', c1: '#0f1030' }, titleStyle: { color: '#ffffff' }, dev: { color: 'black' } }],
      ['bleed', 'Sync with\nyour [calendar]', '[Takvimle]\neşitle', null],
      ['bleed', 'Study with\n[friends]', '[Arkadaşlarla]\nçalış', null],
      ['bleed', 'Free for\n[students]', 'Öğrencilere\n[ücretsiz]', null],
    ]) });

  /* Spotify — pembe/yeşil neon düz renk, büyük harf başlık, siyah cihaz */
  defineTemplate({ key: 'spotify', name: 'Inspired by Spotify', desc: T('Neon pembe ve yeşil düz zeminler, büyük harfli beyaz başlık ve vurgulu kelime; ilk karede ikon + ad. Müzik ve podcast uygulamaları için.', 'Flat neon pink and green backgrounds, uppercase white headline with an emphasised word; icon + name on the first screen. For music and podcast apps.'),
    tags: ['simple', 'colourful', 'bold'], cats: ['music', 'entertainment'], theme: 'colourful', skill: 'simple',
    style: { font: 'montserrat', weight: 500, size: 5.6, color: '#111111', accent: '#111111', hlStyle: 'none', uppercase: true, letterSpacing: 0, lineHeight: 1.12, subSize: 2.8, subOpacity: 80 },
    bg: { type: 'solid', c1: '#ffb3e6' }, device: { frame: 'iphone-pro', color: 'black', shadow: 40, fit: 'top' },
    screens: S8([
      ['text-top', 'Music, podcasts\n& audiobooks\nin one place', 'Müzik, podcast\nve sesli kitap\ntek yerde', null, null, { els: [{ kind: 'icon', x: 50, y: 4.5, size: 2.6, text: T('Soundora', 'Soundora'), iconBg: '#1db954', color: '#111111' }], titleBox: { y: 9 } }],
      ['bleed', 'Podcasts worth\nyour time', 'Zamanına değer\npodcastler', null, null, { bg: { type: 'solid', c1: '#1ed760' } }],
      ['tilt', 'Lyrics that move\nwith you', 'Seninle akan\nsözler', null],
      ['bleed', 'Playlists\npicked for you', 'Sana seçilmiş\nlisteler', null, null, { bg: { type: 'solid', c1: '#1ed760' } }],
      ['bleed', 'Share the music\nwith friends', 'Müziği arkadaşlarla\npaylaş', null],
      ['tilt-r', 'Download and\nlisten offline', 'İndir, çevrimdışı\ndinle', null, null, { bg: { type: 'solid', c1: '#1ed760' } }],
      ['bleed', 'Hi-fi sound\non every device', 'Her cihazda\nhi-fi ses', null],
      ['bleed', 'Try premium\nfor free', 'Premium\'u ücretsiz\ndene', null, null, { bg: { type: 'solid', c1: '#1ed760' } }],
    ]) });

  /* ADHD — lacivert tek renk, beyaz başlık, italik vurgu, laurel */
  defineTemplate({ key: 'adhd', name: 'Inspired by ADHD', desc: T('Lacivert zemin, büyük harfli beyaz başlık ve italik vurgu; koyu cihaz ortada. Odak, alışkanlık ve sağlık uygulamaları için.', 'Navy background, uppercase white headline with an italic emphasis; dark device centred. For focus, habit and wellness apps.'),
    tags: ['simple', 'dark', 'minimal'], cats: ['health & fitness', 'productivity', 'medical'], theme: 'dark', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 7.2, color: '#ffffff', accent: '#9fb4ff', letterSpacing: -1.5, lineHeight: 1.06, subSize: 3, subColor: '#ffffff', subOpacity: 70 },
    bg: { type: 'solid', c1: '#1b2350' }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['bleed', 'Turn your\nADHD into an\n[advantage]', 'DEHB\'ni bir\n[avantaja]\nçevir', null, null, { titleBox: { y: 8, align: 'left', x: 8 }, titleStyle: { uppercase: true, size: 7 }, dev: { x: 14, y: 40, w: 72, rot: 0 } }],
      ['bleed', 'Build better\ndaily habits', 'Daha iyi günlük\nalışkanlıklar', null],
      ['bleed', 'See progress\nevery day', 'Her gün\nilerlemeyi gör', null],
      ['bleed', 'Your habits\nat a glance', 'Alışkanlıkların\nbir bakışta', null],
      ['bleed', 'Focus timers\nthat adapt', 'Uyum sağlayan\nodak sayaçları', null],
      ['bleed', 'Gentle\nreminders', 'Nazik\nhatırlatmalar', null],
      ['bleed', 'Track your\nmood', 'Ruh halini\ntakip et', null],
      ['bleed', 'Made with\nexperts', 'Uzmanlarla\nyapıldı', null],
    ]) });

  /* Subway Surfers — tam ekran oyun, üst köşe HUD çipleri */
  defineTemplate({ key: 'subway-surfers', name: 'Inspired by Subway Surfers', desc: T('Oyun ekranı tüm kareyi kaplar; başlık ilk karede logo gibi, diğerlerinde HUD sayaç çipleri ve PLAY rozeti. Koşu ve arcade oyunları için.', 'The game fills the whole frame; a logo-style title on the first screen, HUD counters and a PLAY badge on the rest. For runner and arcade games.'),
    tags: ['simple', 'colourful', 'photo'], cats: ['games', 'entertainment'], theme: 'colourful', skill: 'simple',
    style: { font: 'baloo', weight: 800, size: 10, color: '#ffe600', accent: '#ff3d3d', uppercase: true, letterSpacing: 0, lineHeight: 0.95, shadow: true, subSize: 3, subColor: '#ffffff', subOpacity: 100 },
    bg: { type: 'linear', c1: '#ff9f2e', c2: '#7b2ff7', angle: 160 }, device: { frame: 'none', fit: 'cover', shadow: 0 },
    screens: S8([
      ['full', 'Rail\n[Rush]', 'Ray\n[Koşusu]', null, null, { titleBox: { y: 8 }, els: [{ kind: 'pill', x: 50, y: 88, size: 4.4, text: T('OYNA', 'PLAY'), bg: '#ffe600', color: '#4a2a00', emoji: '', rot: 0 }] }],
      ['full', '', '', null, null, { els: [{ kind: 'pill', x: 20, y: 3, size: 3, text: '2/10', emoji: '🏆', bg: '#ffffff', color: '#222222', rot: 0 }, { kind: 'pill', x: 78, y: 3, size: 3, text: '012456', emoji: '🪙', bg: '#ffffff', color: '#222222', rot: 0 }] }],
      ['full', '', '', null, null, { els: [{ kind: 'pill', x: 20, y: 3, size: 3, text: '3/10', emoji: '🏆', bg: '#ffffff', color: '#222222', rot: 0 }, { kind: 'pill', x: 78, y: 3, size: 3, text: '019880', emoji: '🪙', bg: '#ffffff', color: '#222222', rot: 0 }] }],
      ['full-bottom', '[Play] with\nfriends', 'Arkadaşlarla\n[oyna]', null, null, { titleStyle: { size: 8 } }],
      ['full', '', '', null, null, { els: [{ kind: 'pill', x: 20, y: 3, size: 3, text: '6/10', emoji: '🏆', bg: '#ffffff', color: '#222222', rot: 0 }, { kind: 'pill', x: 78, y: 3, size: 3, text: '034560', emoji: '🪙', bg: '#ffffff', color: '#222222', rot: 0 }] }],
      ['full-bottom', 'Daily\n[rewards]', 'Günlük\n[ödüller]', null, null, { titleStyle: { size: 8 } }],
      ['full-bottom', 'New\n[worlds]', 'Yeni\n[dünyalar]', null, null, { titleStyle: { size: 8 } }],
      ['full', '[Play]\nnow', 'Şimdi\n[oyna]', null, null, { titleBox: { y: 8 } }],
    ]) });

  /* Nova — mor→pembe→turuncu gradyan, ortalı ince beyaz başlık, koyu cihaz */
  defineTemplate({ key: 'nova', name: 'Nova', desc: T('Mor-pembe-turuncu dikey gradyan, ortalı beyaz başlık; ilk karede ikon + ad. Sağlık, fitness ve takip uygulamaları için.', 'Vertical purple-pink-orange gradient, centred white headline; icon + name on the first screen. For health, fitness and tracking apps.'),
    tags: ['simple', 'gradient', 'colourful'], cats: ['health & fitness', 'medical', 'lifestyle'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 600, size: 6.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.2, lineHeight: 1.1, subSize: 3, subColor: '#ffffff', subOpacity: 80 },
    bg: { type: 'linear', c1: '#7b4dff', c2: '#ff7a59', angle: 180, noise: 4 }, device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S8([
      ['bleed', 'Track your\nhealth and vitals', 'Sağlığını ve\nvitallerini izle', null, null, { els: [{ kind: 'icon', x: 50, y: 4.5, size: 2.6, text: T('appscreens', 'appscreens'), iconBg: '#ffffff', color: '#ffffff' }], titleBox: { y: 9 } }],
      ['bleed', 'Track your\nhealth and vitals', 'Sağlığını ve\nvitallerini izle', null],
      ['bleed', 'Analyze data from\nyour time asleep', 'Uyku verini\nanaliz et', null],
      ['bleed', 'Review your\nnutrition over time', 'Beslenmeni\nzamanla izle', null],
      ['bleed', 'Watch your VO2\nmax climb or fall', 'VO2 max\'ını\nizle', null],
      ['bleed', 'Share reports\nwith your doctor', 'Raporları doktorunla\npaylaş', null],
      ['bleed', 'Works with\nApple Watch', 'Apple Watch ile\nçalışır', null],
      ['bleed', 'Start your\nfirst week', 'İlk haftana\nbaşla', null],
    ]) });

  /* VPN App — parlak mavi, beyaz kalın başlık, kalkan/QR/ikon görselleri */
  defineTemplate({ key: 'vpn-app', name: 'Inspired by VPN App', desc: T('Parlak mavi zemin, ortalı kalın beyaz başlık ve vurgu; ilk karede yıldız + laurel rozetleri. Güvenlik, VPN ve araç uygulamaları için.', 'Bright blue background, centred bold white headline with an emphasis; stars + laurel badges on the first screen. For security, VPN and utility apps.'),
    tags: ['advanced', 'colourful', 'badges'], cats: ['utilities', 'productivity', 'business'], theme: 'colourful', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 6.8, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.5, lineHeight: 1.08, subSize: 3, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'solid', c1: '#1f6bff' }, device: { frame: 'iphone-pro', color: 'white', shadow: 50, fit: 'top' },
    screens: S8([
      ['text-top', 'Join 100,000+\nsecured accounts', '100.000+ güvenli\nhesaba katıl', null, null, { dev: null, els: [{ kind: 'emoji', x: 50, y: 42, size: 16, text: '🛡️' }, { kind: 'stars', x: 50, y: 62, size: 3, color: '#ffd23f' }, { kind: 'text', x: 50, y: 68, size: 2.6, text: T('5 YILDIZ', '5 STAR RATED'), color: '#ffffff' }, { kind: 'laurel', x: 50, y: 84, size: 2.6, text: T('#1 DOĞRULAMA\nUYGULAMASI', '#1 AUTHENTICATOR\nAPP'), color: '#ffffff' }] }],
      ['small', 'Fast & easy\nQR setup', 'Hızlı ve kolay\nQR kurulum', null],
      ['small', 'Unlock with\n[Face ID]', '[Face ID] ile\naç', 'Multi-factor security', 'Çok faktörlü güvenlik'],
      ['small', 'Backup & sync\nusing [iCloud]', '[iCloud] ile\nyedekle ve eşitle', null],
      ['text-top', 'Compatible with\nall your online\naccounts', 'Tüm çevrimiçi\nhesaplarınla\nuyumlu', null, null, { dev: null, els: [{ kind: 'emoji', x: 30, y: 45, size: 9, text: '🔐' }, { kind: 'emoji', x: 70, y: 45, size: 9, text: '📧' }, { kind: 'emoji', x: 30, y: 65, size: 9, text: '💬' }, { kind: 'emoji', x: 70, y: 65, size: 9, text: '🛒' }] }],
      ['small', 'One tap\n[approve]', 'Tek dokunuşla\n[onayla]', null],
      ['small', 'Never lose\naccess again', 'Erişimini bir daha\nkaybetme', null],
      ['small', 'Free\nforever', 'Sonsuza dek\nücretsiz', null],
    ]) });

  /* Postpartum — beyaz zemin, siyah başlık + kırmızı vurgu, cihaz altta */
  defineTemplate({ key: 'postpartum', name: 'Postpartum', desc: T('Beyaz zemin, ortalı siyah başlık ve mercan kırmızısı vurgu; ilk kare tam kare fotoğraf alt kutu ile. Beslenme ve anne-bebek uygulamaları için.', 'White background, centred black headline with a coral-red emphasis; first screen is a full photo with a bottom caption. For nutrition and mother & baby apps.'),
    tags: ['simple', 'light', 'photo'], cats: ['health & fitness', 'food & drink', 'medical', 'lifestyle'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 6.4, color: '#111111', accent: '#e8503a', letterSpacing: -1.5, lineHeight: 1.08, subSize: 2.9, subOpacity: 70 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'white', shadow: 35, fit: 'top' },
    screens: S8([
      ['full-bottom', 'Balanced meal\nplans for\n[postpartum]\nrecovery', '[Doğum sonrası]\ntoparlanma için\ndengeli menüler', 'Nourishment that meets new mom\'s needs.', 'Yeni annenin ihtiyacına uygun beslenme.', { bg: { type: 'linear', c1: '#f3c6c0', c2: '#e8a79e', angle: 180 }, titleStyle: { color: '#ffffff', shadow: true, size: 6 }, subStyle: { color: '#ffffff', opacity: 90 } }],
      ['bleed', 'Track your\ndays and [macros]', 'Günlerini ve\n[makrolarını] izle', null],
      ['bleed', 'Health, quick\nrecipes for all\n[moods]', 'Her [ruh haline]\nsağlıklı, hızlı\ntarifler', null],
      ['bleed', 'Track your mood\n& [nutrition] history', 'Ruh hali ve\n[beslenme] geçmişi', null],
      ['bleed', 'Explore variety\nof [recipes] you like', 'Sevdiğin [tarifleri]\nkeşfet', null],
      ['bleed', 'Gentle\n[workouts]', 'Nazik\n[egzersizler]', null],
      ['bleed', 'Sleep and\n[hydration]', 'Uyku ve\n[su] takibi', null],
      ['bleed', 'Made with\n[dietitians]', '[Diyetisyenlerle]\nhazırlandı', null],
    ]) });

  /* Finance — yeşil pastel, etiket çipi + başlık, siyah cihaz, yorum kutusu */
  defineTemplate({ key: 'finance', name: 'Finance', desc: T('Açık yeşil zemin, üstte koyu etiket çipi, siyah başlık; ilk karede özellik çipleri, yıldızlı kullanıcı yorumu. Finans ve bütçe uygulamaları için.', 'Light green background, dark label chip above the black headline; feature chips on the first screen and a starred user review. For finance and budgeting apps.'),
    tags: ['advanced', 'light', 'badges', 'chips'], cats: ['finance', 'business', 'productivity'], theme: 'light', skill: 'advanced',
    style: { font: 'inter', weight: 700, size: 6.6, color: '#12261a', accent: '#8fe36a', hlStyle: 'marker', letterSpacing: -1.5, lineHeight: 1.08, subSize: 3, subOpacity: 75 },
    bg: { type: 'solid', c1: '#dff3d0' }, device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed', 'A finance app\nyou\'ll [actually use]', '[Gerçekten]\nkullanacağın\nfinans uygulaması', null, null, { bg: { type: 'solid', c1: '#a9d97a' }, titleBox: { x: 8, y: 10, align: 'left' }, dev: { x: 30, y: 62, w: 76, rot: -6 }, els: [{ kind: 'pill', x: 30, y: 36, size: 2.6, text: T('kategori oluştur', 'create categories'), emoji: '', bg: '#eef8e4', color: '#12261a', rot: 0 }, { kind: 'pill', x: 30, y: 42, size: 2.6, text: T('bütçe limiti koy', 'set budget limit'), emoji: '', bg: '#eef8e4', color: '#12261a', rot: 0 }, { kind: 'pill', x: 30, y: 48, size: 2.6, text: T('harcama kaydet', 'log expenses'), emoji: '', bg: '#eef8e4', color: '#12261a', rot: 0 }, { kind: 'pill', x: 30, y: 54, size: 2.6, text: T('harcamayı analiz et', 'analyze spendings'), emoji: '', bg: '#eef8e4', color: '#12261a', rot: 0 }] }],
      ['text-top', 'Manage budget\nwithout stress', 'Stressiz\nbütçe yönet', null, null, { titleBox: { y: 9 }, dev: { x: 26, y: 27, w: 60, rot: 6 }, els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('AKILLI FİNANS', 'SMART FINANCE'), emoji: '', bg: '#12261a', color: '#ffffff', rot: 0 }] }],
      ['text-top', 'Track expenses\ninstantly', 'Harcamaları\nanında izle', null, null, { titleBox: { y: 9 }, dev: { x: 28, y: 25, w: 44, rot: 0 }, els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('KOLAY BÜTÇE', 'EASY BUDGETING'), emoji: '', bg: '#12261a', color: '#ffffff', rot: 0 }, { kind: 'stars', x: 50, y: 80, size: 2.6, color: '#12261a' }, { kind: 'quote', x: 50, y: 88, w: 80, size: 2.3, text: T('Hep geride hissederken artık paramın kontrolü bende. Bütçe yapmak zahmetsiz.', 'I went from always feeling behind to finally being in control of my money. This app makes budgeting effortless.'), color: '#12261a' }] }],
      ['text-top', 'Set monthly\nspending limits', 'Aylık harcama\nlimiti koy', null, null, { titleBox: { y: 9 }, dev: { x: 28, y: 27, w: 60, rot: -6 }, els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('KOLAY PLANLAMA', 'EASY PLANNING'), emoji: '', bg: '#12261a', color: '#ffffff', rot: 0 }] }],
      ['text-top', 'Voice powered\nexpense logging', 'Sesle harcama\nkaydı', null, null, { titleBox: { y: 9 }, dev: { x: 16, y: 27, w: 60, rot: 6 }, els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('SESLİ KAYIT', 'VOICE LOGGING'), emoji: '', bg: '#12261a', color: '#ffffff', rot: 0 }] }],
      ['text-top', 'Insights every\nweek', 'Her hafta\niçgörü', null, null, { titleBox: { y: 9 }, dev: { x: 22, y: 27, w: 56, rot: 0 }, els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('RAPORLAR', 'REPORTS'), emoji: '', bg: '#12261a', color: '#ffffff', rot: 0 }] }],
      ['text-top', 'Shared wallets\nfor families', 'Aile için\nortak cüzdan', null, null, { titleBox: { y: 9 }, dev: { x: 26, y: 27, w: 60, rot: 6 }, els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('BİRLİKTE', 'TOGETHER'), emoji: '', bg: '#12261a', color: '#ffffff', rot: 0 }] }],
      ['text-top', 'Start\nfor free', 'Ücretsiz\nbaşla', null, null, { titleBox: { y: 9 }, dev: { x: 22, y: 27, w: 56, rot: 0 }, els: [{ kind: 'pill', x: 50, y: 5, size: 2.2, text: T('ÜCRETSİZ', 'FREE'), emoji: '', bg: '#12261a', color: '#ffffff', rot: 0 }] }],
    ]) });

  /* BetterSleep — gece mavisi gradyan, serif başlık, yıldızlı gök */
  defineTemplate({ key: 'bettersleep', name: 'Inspired by BetterSleep', desc: T('Gece mavisi gradyan ve ışıltılı yıldızlar, ince serif beyaz başlık; ilk karede eğik cihaz yığını. Uyku, meditasyon ve sağlık için.', 'Night-blue gradient with sparkling stars and a light serif white headline; a tilted device stack on the first screen. For sleep, meditation and wellness.'),
    tags: ['advanced', 'dark', 'gradient', 'serif'], cats: ['health & fitness', 'lifestyle', 'medical'], theme: 'dark', skill: 'advanced',
    style: { font: 'playfair', weight: 600, size: 6.4, color: '#ffffff', accent: '#c9b8ff', letterSpacing: -0.5, lineHeight: 1.1, subFont: 'inter', subSize: 2.8, subColor: '#ffffff', subOpacity: 75 },
    bg: { type: 'linear', c1: '#1a2250', c2: '#0b0f2a', angle: 180, pattern: 'sparkles', patternColor: '#ffffff', patternOpacity: 55 }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Sleep better\nevery night', 'Her gece\ndaha iyi uyu', 'Sleep stories, sounds & meditations', 'Uyku hikâyeleri, sesler ve meditasyon', { dev: { x: 22, y: 30, w: 80, rot: -18 } }],
      ['tilt-r', 'Relax with\nsoothing sounds', 'Rahatlatıcı seslerle\ngevşe', null],
      ['bleed', 'Drift off with\nsleep stories', 'Uyku hikâyeleriyle\ndal', null],
      ['bleed', 'Guided\nbreathing', 'Rehberli\nnefes', null],
      ['bleed', 'Sleep\nmeditations', 'Uyku\nmeditasyonları', null],
      ['bleed', 'Track your\nsleep', 'Uykunu\nizle', null],
      ['bleed', 'Wake up\ngently', 'Nazikçe\nuyan', null],
      ['bleed', 'Start\ntonight', 'Bu gece\nbaşla', null],
    ]) });

  /* Royal Match — tam ekran oyun, alt mavi şerit + oyunsu başlık */
  defineTemplate({ key: 'royal-match', name: 'Inspired by Royal Match', desc: T('Oyun ekranı tam kare, altta parlak mavi şerit üzerinde büyük harfli oyunsu başlık. Eşleştirme ve bulmaca oyunları için.', 'Full-frame game screen with a bright blue bottom strip carrying an uppercase playful title. For match-3 and puzzle games.'),
    tags: ['simple', 'colourful', 'bold'], cats: ['games', 'entertainment'], theme: 'colourful', skill: 'simple',
    style: { font: 'baloo', weight: 800, size: 6.2, color: '#ffffff', accent: '#ffe066', uppercase: true, letterSpacing: 0, lineHeight: 1, shadow: true, titleBox: { y: 80, h: 16 } },
    bg: { type: 'linear', c1: '#3a2a6a', c2: '#1a1440', angle: 180 }, device: { frame: 'none', fit: 'cover', shadow: 0, x: 0, y: 0, w: 100 },
    screens: S8([
      ['full-bottom', 'Solve castle\npuzzles', 'Kale bulmacalarını\nçöz', null, null, { under: [{ kind: 'shape', shape: 'rect', x: 50, y: 88, w: 100, h: 24, color: '#1e78ff', radius: 0, opacity: 100 }] }],
      ['full-bottom', 'Prince rescue\nmatch', 'Prensi kurtar\neşleştir', null, null, { under: [{ kind: 'shape', shape: 'rect', x: 50, y: 88, w: 100, h: 24, color: '#1e78ff', radius: 0, opacity: 100 }] }],
      ['full-bottom', 'Match gems\nto rescue', 'Kurtarmak için\ntaşları eşle', null, null, { under: [{ kind: 'shape', shape: 'rect', x: 50, y: 88, w: 100, h: 24, color: '#1e78ff', radius: 0, opacity: 100 }] }],
      ['full-bottom', 'Defeat the\ndungeon beast', 'Zindan canavarını\nyen', null, null, { under: [{ kind: 'shape', shape: 'rect', x: 50, y: 88, w: 100, h: 24, color: '#1e78ff', radius: 0, opacity: 100 }] }],
      ['full-bottom', 'Avoid\ndeadly traps', 'Ölümcül tuzaklardan\nkaç', null, null, { under: [{ kind: 'shape', shape: 'rect', x: 50, y: 88, w: 100, h: 24, color: '#1e78ff', radius: 0, opacity: 100 }] }],
      ['full-bottom', 'Collect\nroyal coins', 'Kraliyet altınlarını\ntopla', null, null, { under: [{ kind: 'shape', shape: 'rect', x: 50, y: 88, w: 100, h: 24, color: '#1e78ff', radius: 0, opacity: 100 }] }],
      ['full-bottom', 'Build your\ncastle', 'Kaleni\ninşa et', null, null, { under: [{ kind: 'shape', shape: 'rect', x: 50, y: 88, w: 100, h: 24, color: '#1e78ff', radius: 0, opacity: 100 }] }],
      ['full-bottom', 'Play\nfree', 'Ücretsiz\noyna', null, null, { under: [{ kind: 'shape', shape: 'rect', x: 50, y: 88, w: 100, h: 24, color: '#1e78ff', radius: 0, opacity: 100 }] }],
    ]) });

  /* Tali — beyaz zemin, büyük harf siyah başlık, yeşil marker vurgu, laurel çifti */
  defineTemplate({ key: 'tali', name: 'Tali', desc: T('Beyaz zemin, büyük harfli siyah başlık ve yeşil fosforlu vurgu kelimesi; ilk karede iki laurel ve eğik cihaz. Eğitim, ödev ve araç uygulamaları için.', 'White background, uppercase black headline with a green marker-highlighted word; two laurels and a tilted device on the first screen. For education, homework and utility apps.'),
    tags: ['advanced', 'light', 'bold', 'badges'], cats: ['education', 'reference', 'utilities'], theme: 'light', skill: 'advanced',
    style: { font: 'inter', weight: 900, size: 6.6, color: '#111111', accent: '#1fc35c', hlStyle: 'marker', hlTextColor: '#ffffff', uppercase: true, letterSpacing: -1, lineHeight: 1.12, subSize: 2.8, subOpacity: 70 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'white', shadow: 40, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Stuck on a\nproblem?\n[Solve it]\ninstantly', 'Bir soruda\ntakıldın mı?\n[Anında] çöz', null, null, { dev: { x: 18, y: 42, w: 66, rot: -8 }, els: [{ kind: 'icon', x: 14, y: 3.5, size: 2.2, text: 'SOLVO', iconBg: '#1fc35c', color: '#111111' }, { kind: 'laurel', x: 20, y: 34, size: 2, text: T('Apple\nÖne Çıkardı', 'Featured\nby Apple'), color: '#111111' }, { kind: 'laurel', x: 60, y: 34, size: 2, text: T('15M+\nKullanıcı', '15M+\nUsers'), color: '#111111' }] }],
      ['bleed', 'Point it\n[scan it]\nsolve it', 'Tut\n[tara]\nçöz', null],
      ['bleed', 'Not just answer\n[all the steps]', 'Sadece cevap değil\n[tüm adımlar]', null],
      ['bleed', 'Every type\nof math\n[one app]', 'Her tür\nmatematik\n[tek uygulama]', null],
      ['tilt', 'See math.\nDon\'t just\n[solve it]', 'Matematiği gör.\nSadece [çözme]', null],
      ['bleed', 'Graphs that\n[explain]', '[Açıklayan]\ngrafikler', null],
      ['bleed', 'Practice\n[daily]', '[Her gün]\npratik', null],
      ['bleed', 'Free to\n[start]', 'Ücretsiz\n[başla]', null],
    ]) });

  /* Fishing App — okyanus mavisi, büyük harf beyaz + sarı vurgu, laurel */
  defineTemplate({ key: 'fishing', name: 'Inspired by Fishing App', desc: T('Derin mavi gradyan, büyük harfli beyaz başlık ve sarı vurgu; ilk karede laurel, ikinci karede konum çipleri. Açık hava, balıkçılık ve hava durumu için.', 'Deep blue gradient, uppercase white headline with a yellow emphasis; laurel on the first screen, location chips on the second. For outdoors, fishing and weather apps.'),
    tags: ['advanced', 'colourful', 'bold', 'badges', 'chips'], cats: ['sports', 'weather', 'lifestyle', 'navigation'], theme: 'colourful', skill: 'advanced',
    style: { font: 'inter', weight: 900, size: 6.6, color: '#ffffff', accent: '#ffd400', uppercase: true, letterSpacing: -0.5, lineHeight: 1.08, subSize: 3, subColor: '#ffffff', subOpacity: 85, shadow: true },
    bg: { type: 'linear', c1: '#1d5fb8', c2: '#0a2a5e', angle: 180 }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['text-top', 'Fish [smarter]\nstay ahead', 'Daha [akıllı]\nbalık tut', null, null, { dev: null, els: [{ kind: 'emoji', x: 50, y: 50, size: 20, text: '🎣' }, { kind: 'laurel', x: 50, y: 82, size: 2.8, text: T('5M+\nİndirme', '5M+\nDownloads'), color: '#ffffff' }] }],
      ['text-top', 'Best [spots]\nnear you', 'Yakınındaki\nen iyi [noktalar]', null, null, { dev: { x: 20, y: 44, w: 60 }, els: [{ kind: 'pill', x: 26, y: 27, size: 2.4, text: 'FLORIDA', emoji: '', bg: '#ffffff', color: '#0a2a5e', rot: -6 }, { kind: 'pill', x: 58, y: 25, size: 2.4, text: 'VIRGINIA', emoji: '', bg: '#ffffff', color: '#0a2a5e', rot: 4 }, { kind: 'pill', x: 84, y: 30, size: 2.4, text: 'USA', emoji: '', bg: '#ffffff', color: '#0a2a5e', rot: 8 }, { kind: 'pill', x: 30, y: 36, size: 2.4, text: 'CANADA', emoji: '', bg: '#ffffff', color: '#0a2a5e', rot: 3 }, { kind: 'pill', x: 66, y: 36, size: 2.4, text: 'WALES', emoji: '', bg: '#ffffff', color: '#0a2a5e', rot: -5 }] }],
      ['bleed', 'Live [weather]\nupdate', 'Canlı [hava]\ngüncellemesi', null],
      ['bleed', '1,000,000+\n[angler] community', '1.000.000+\n[balıkçı] topluluğu', null],
      ['bleed', 'Plan [every]\nhour', '[Her] saati\nplanla', null],
      ['bleed', 'Log your\n[catches]', '[Avlarını]\nkaydet', null],
      ['bleed', 'Tide &\n[moon] charts', 'Gelgit ve\n[ay] grafikleri', null],
      ['bleed', 'Try it\n[free]', '[Ücretsiz]\ndene', null],
    ]) });

  /* AirHelp — mor→pembe gradyan, italik+kalın karışık başlık, eğik cihaz */
  defineTemplate({ key: 'airhelp', name: 'Inspired by Airhelp', desc: T('Mor-pembe-mavi yumuşak gradyan, italik vurgulu beyaz başlık ve dönüşümlü eğik cihaz. Seyahat ve hizmet uygulamaları için.', 'Soft purple-pink-blue gradient, white headline with an italic emphasis and an alternating tilted device. For travel and service apps.'),
    tags: ['simple', 'gradient', 'colourful'], cats: ['travel', 'navigation', 'utilities'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 6.8, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.5, lineHeight: 1.08, subSize: 3, subColor: '#ffffff', subOpacity: 80 },
    bg: { type: 'mesh', c1: '#8b5cf6', c2: '#ec6ea8', c3: '#3b82f6', variant: 1, noise: 4 }, device: { frame: 'iphone-pro', color: 'white', shadow: 55, fit: 'top' },
    screens: S8([
      ['text-top', 'Fly [smarter]\nstress less', 'Daha [akıllı] uç\ndaha az stres', null, null, { dev: { x: 18, y: 32, w: 64, rot: 0 }, els: [{ kind: 'rating', x: 50, y: 28, size: 2.4, text: T('4.8 · 2 milyon yolcu', '4.8 · 2M travellers'), bg: '#ffffff' }] }],
      ['tilt', 'Real-time\n[flight] status', 'Gerçek zamanlı\n[uçuş] durumu', null],
      ['tilt-r', 'Never miss\n[updates]', '[Güncellemeleri]\nkaçırma', null],
      ['tilt', 'Connect calendar\n& [Gmail]', 'Takvim ve\n[Gmail] bağla', null],
      ['tilt-r', 'Get paid\nfor [delays]', '[Gecikmeler] için\nödeme al', null],
      ['tilt', 'Know your\n[rights]', '[Haklarını]\nbil', null],
      ['tilt-r', 'Claims in\n[minutes]', '[Dakikalar] içinde\nbaşvuru', null],
      ['tilt', 'Download\n[free]', '[Ücretsiz]\nindir', null],
    ]) });

  /* MyFitnessPal — mavi zemin, beyaz başlık + sarı marker vurgu, ok çizgisi */
  defineTemplate({ key: 'myfitnesspal', name: 'Inspired from MyFitnessPal', desc: T('Parlak mavi zemin, beyaz başlık ve sarı fosforlu vurgu; ilk karede ikon+ad ve kalın büyük başlık. Beslenme ve fitness uygulamaları için.', 'Bright blue background, white headline with a yellow marker highlight; icon + name and a big bold title on the first screen. For nutrition and fitness apps.'),
    tags: ['simple', 'colourful', 'bold'], cats: ['health & fitness', 'food & drink', 'medical'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 6.8, color: '#ffffff', accent: '#ffd233', hlStyle: 'marker', hlTextColor: '#0f2a6b', letterSpacing: -1.5, lineHeight: 1.08, subSize: 3, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'solid', c1: '#1e6bff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Your\nall-in-one\nnutrition\ntracker', 'Hepsi bir arada\nbeslenme\ntakipçin', null, null, { titleStyle: { size: 8.4 }, dev: { x: 18, y: 38, w: 64, rot: -8 }, els: [{ kind: 'icon', x: 14, y: 3.5, size: 2.2, text: 'myfitnessbuddy', iconBg: '#ffd233', color: '#ffffff' }] }],
      ['bleed', 'Stay\n[healthy]', '[Sağlıklı]\nkal', null],
      ['bleed', 'Scan\n[meals]', '[Öğünleri]\ntara', null],
      ['bleed', 'Achieve\n[goals]', '[Hedeflere]\nulaş', null],
      ['bleed', 'Plan\n[meals]', '[Öğün]\nplanla', null],
      ['bleed', 'Track\n[macros]', '[Makroları]\nizle', null],
      ['bleed', 'Log\n[water]', '[Su]\nkaydet', null],
      ['bleed', 'Start\n[free]', '[Ücretsiz]\nbaşla', null],
    ]) });

  /* Ivo — canlı düz renkler (mor, kırmızı, yeşil, siyah, mavi), Bricolage başlık */
  defineTemplate({ key: 'ivo', name: 'Ivo', desc: T('Her karede farklı canlı düz zemin (mor, kırmızı, yeşil, siyah, mavi) ve karakterli beyaz başlık; cihaz alttan taşar. Not, düşünce ve verimlilik uygulamaları için.', 'A different vivid flat background per screen (purple, red, green, black, blue) with a characterful white headline; the device bleeds off the bottom. For notes, thinking and productivity apps.'),
    tags: ['simple', 'colourful', 'bold'], cats: ['productivity', 'education', 'lifestyle'], theme: 'colourful', skill: 'simple',
    style: { font: 'bricolage', weight: 800, size: 7.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.5, lineHeight: 1.04, subSize: 3, subColor: '#ffffff', subOpacity: 80 },
    device: { frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top' },
    screens: S8([
      ['bleed', 'See your\nthinking take\nshape.', 'Düşüncenin\nşekil alışını\ngör.', null, null, { bg: { type: 'solid', c1: '#6a3df5' } }],
      ['bleed', 'See where\nyour mind is\ngoing.', 'Zihninin nereye\ngittiğini gör.', null, null, { bg: { type: 'solid', c1: '#e63b3b' } }],
      ['bleed', 'Save it before\nit disappears.', 'Kaybolmadan\nkaydet.', null, null, { bg: { type: 'solid', c1: '#2bb673' } }],
      ['text-bottom', 'One idea\nleads to\nanother.', 'Bir fikir\ndiğerini\ngetirir.', null, null, { bg: { type: 'solid', c1: '#0b0b0b' }, dev: { x: 19, y: 4, w: 62 } }],
      ['bleed', 'Search the\nway you\nremember.', 'Hatırladığın\ngibi ara.', null, null, { bg: { type: 'solid', c1: '#1e63ff' } }],
      ['bleed', 'Write\nfreely.', 'Serbestçe\nyaz.', null, null, { bg: { type: 'solid', c1: '#6a3df5' } }],
      ['bleed', 'Connect\nthe dots.', 'Noktaları\nbirleştir.', null, null, { bg: { type: 'solid', c1: '#e63b3b' } }],
      ['bleed', 'Think\nbetter.', 'Daha iyi\ndüşün.', null, null, { bg: { type: 'solid', c1: '#2bb673' } }],
    ]) });

  /* Walmart — mavi zemin, beyaz başlık + sarı vurgu, düz cihaz */
  defineTemplate({ key: 'walmart', name: 'Inspired by Walmart', desc: T('Walmart mavisi düz zemin, ortalı beyaz başlık ve sarı vurgu kelimesi; ilk karede ikon+ad ve alt başlık. Alışveriş ve perakende için.', 'Flat retail blue, centred white headline with a yellow emphasis; icon + name and a subtitle on the first screen. For shopping and retail apps.'),
    tags: ['simple', 'colourful', 'minimal'], cats: ['shopping', 'food & drink', 'lifestyle'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 6.4, color: '#ffffff', accent: '#ffc220', letterSpacing: -1.2, lineHeight: 1.1, subSize: 2.9, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'solid', c1: '#0e6ee0' }, device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S8([
      ['text-top', 'Create your\nscreenshots', 'Ekran görüntülerini\noluştur', 'Meet new friends faster', 'Yeni arkadaşlar edin', { els: [{ kind: 'icon', x: 50, y: 4.5, size: 2.6, text: 'appscreens', iconBg: '#ffc220', color: '#ffffff' }], titleBox: { y: 9 } }],
      ['bleed', 'Stand out\nin the [crowd]', '[Kalabalıkta]\nöne çık', null],
      ['bleed', 'Find your\n[fave] template', '[Favori]\nşablonunu bul', null],
      ['bleed', 'Boost conversions\n[up to 35%]', 'Dönüşümü\n[%35\'e kadar] artır', null],
      ['bleed', '[One] design\nfor all requirements', 'Her gereksinime\n[tek] tasarım', null, null, { bg: { type: 'solid', c1: '#ffffff' }, titleStyle: { color: '#0e6ee0', accent: '#ffc220' } }],
      ['bleed', 'Deals\n[every day]', '[Her gün]\nfırsat', null],
      ['bleed', 'Free\n[delivery]', 'Ücretsiz\n[teslimat]', null],
      ['bleed', 'Shop\n[now]', '[Şimdi]\nalışveriş', null],
    ]) });

  /* RevenueCat — kırmızı zemin, sol beyaz kalın başlık, dönüşümlü beyaz kare */
  defineTemplate({ key: 'revenuecat', name: 'Inspired by RevenueCat', desc: T('Mercan kırmızısı düz zemin, sol hizalı beyaz kalın başlık; bazı kareler beyaz zemin + kırmızı başlıkla değişir. İş ve geliştirici araçları için.', 'Flat coral-red background with a left-aligned bold white headline; some screens flip to white with a red headline. For business and developer tools.'),
    tags: ['simple', 'colourful', 'bold', 'minimal'], cats: ['business', 'developer tools', 'productivity'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 800, size: 7.4, color: '#ffffff', accent: '#ffffff', letterSpacing: -2, lineHeight: 1.05, subSize: 3, subColor: '#ffffff', subOpacity: 80 },
    bg: { type: 'solid', c1: '#f2545b' }, device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed-left', 'Grow your\napp ASO', 'Uygulama\nASO\'nu büyüt', null, null, { els: [{ kind: 'icon', x: 14, y: 3.5, size: 2.2, text: 'appscreens', iconBg: '#ffffff', color: '#ffffff' }], titleBox: { y: 8 } }],
      ['bleed-left', 'Make\nscreenshots\nfor your app\nin minutes', 'Uygulaman için\ndakikalar içinde\nekran görüntüsü', null],
      ['bleed-left', 'Over 100\ntemplates\nready to drop\nin and go', '100\'den fazla\nhazır şablon', null, null, { bg: { type: 'solid', c1: '#ffffff' }, titleStyle: { color: '#f2545b' } }],
      ['bleed-left', 'Localise your\napp and reach\nthe world', 'Uygulamanı\nyerelleştir,\ndünyaya ulaş', null],
      ['bleed-left', 'Improve your\nconversions\nby up to 35%', 'Dönüşümlerini\n%35\'e kadar\nartır', null, null, { bg: { type: 'solid', c1: '#ffffff' }, titleStyle: { color: '#f2545b' } }],
      ['bleed-left', 'Analytics\nthat matter', 'Önemli\nanalizler', null],
      ['bleed-left', 'Works with\nyour stack', 'Altyapınla\nçalışır', null, null, { bg: { type: 'solid', c1: '#ffffff' }, titleStyle: { color: '#f2545b' } }],
      ['bleed-left', 'Start free', 'Ücretsiz\nbaşla', null],
    ]) });

  /* Spy Game — koyu lacivert, büyük harf ince yazı, ilk karede logo, altta metin */
  defineTemplate({ key: 'spy-game', name: 'Spy Game', desc: T('Koyu lacivert zemin, büyük harfli beyaz başlık, geniş harf aralığı; koyu cihaz ortada, son karede metin altta. Parti ve sosyal oyunlar için.', 'Dark navy background, uppercase white headline with wide letter spacing; dark device centred, last screen with text at the bottom. For party and social games.'),
    tags: ['simple', 'dark', 'minimal'], cats: ['games', 'entertainment', 'social networking'], theme: 'dark', skill: 'simple',
    style: { font: 'space-grotesk', weight: 700, size: 5.6, color: '#ffffff', accent: '#3ddc84', uppercase: true, letterSpacing: 2, lineHeight: 1.15, subSize: 2.8, subColor: '#ffffff', subOpacity: 70 },
    bg: { type: 'solid', c1: '#0e1a3a' }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['text-top', 'Can you catch\nthe [spy]?', '[Casusu]\nyakalayabilir misin?', null, null, { dev: null, els: [{ kind: 'emoji', x: 50, y: 50, size: 22, text: '🕵️' }, { kind: 'text', x: 50, y: 74, size: 8, text: 'SPY', color: '#ffffff', weight: 900 }] }],
      ['small', 'New locations\nevery game', 'Her oyunda\nyeni mekânlar', null],
      ['small', 'Set players,\nspies & time in\nseconds', 'Oyuncu, casus ve\nsüreyi saniyede\nayarla', null],
      ['small', 'Find out who\nyou are — a spy\nor civilian!', 'Kim olduğunu\nöğren — casus mu\nsivil mi!', null],
      ['small', 'Every second\ncounts', 'Her saniye\nönemli', null, null, { layout: 'text-bottom', titleBox: { y: 74 }, dev: { x: 24, y: 6, w: 52 } }],
      ['small', 'Play with\n3-12 friends', '3-12 arkadaşla\noyna', null],
      ['small', 'No internet\nneeded', 'İnternet\ngerekmez', null],
      ['small', 'Free to\nplay', 'Ücretsiz\noyna', null],
    ]) });

  /* Dogo — yeşil gradyan, beyaz başlık, mavi cihaz, rozetler */
  defineTemplate({ key: 'dogo', name: 'Inspired by Dogo', desc: T('Yeşil-nane gradyan zemin, beyaz kalın başlık; ilk karede #1 ve 10M+ rozetleri. Evcil hayvan, eğitim ve yaşam uygulamaları için.', 'Green-mint gradient, bold white headline; #1 and 10M+ badges on the first screen. For pet, training and lifestyle apps.'),
    tags: ['advanced', 'colourful', 'gradient', 'badges'], cats: ['lifestyle', 'education', 'health & fitness'], theme: 'colourful', skill: 'advanced',
    style: { font: 'nunito', weight: 900, size: 6.8, color: '#ffffff', accent: '#ffffff', letterSpacing: -1, lineHeight: 1.08, subSize: 3, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'linear', c1: '#17b26a', c2: '#79e0a6', angle: 160 }, device: { frame: 'iphone-pro', color: 'white', shadow: 50, fit: 'top' },
    screens: S8([
      ['text-top-left', 'The smarter\nway to train\nyour dog', 'Köpeğini eğitmenin\ndaha akıllı yolu', null, null, { dev: null, els: [{ kind: 'laurel', x: 24, y: 34, size: 2.4, text: T('#1\nKöpek Eğitimi', '#1\nDog Training'), color: '#ffffff' }, { kind: 'laurel', x: 66, y: 34, size: 2.4, text: T('10M+\nİndirme', '10M+\nDownloads'), color: '#ffffff' }, { kind: 'emoji', x: 50, y: 70, size: 24, text: '🐶' }] }],
      ['bleed', 'From puppy to adult\nwe\'ve got you', 'Yavrudan yetişkine\nyanındayız', null, null, { els: [{ kind: 'pill', x: 78, y: 30, size: 2.4, text: T('+100 numara', '+100 tricks'), emoji: '', bg: '#ffffff', color: '#17b26a', rot: 8 }] }],
      ['bleed', 'Track potty times\nwith smart reminders', 'Tuvalet saatlerini\nakıllı hatırlatmayla izle', null],
      ['bleed', 'Walk, track &\nimprove daily activity', 'Yürü, izle ve\ngünlük aktiviteyi artır', null],
      ['bleed', 'Train your dog\nthe right way', 'Köpeğini doğru\nşekilde eğit', null],
      ['bleed', 'Video lessons\nfrom experts', 'Uzmanlardan\nvideo dersler', null],
      ['bleed', 'Clicker &\nwhistle built in', 'Yerleşik klik\nve düdük', null],
      ['bleed', 'Start\nfor free', 'Ücretsiz\nbaşla', null],
    ]) });

  /* Zumba — açık gri/limon, siyah büyük harf, çipler, laurel; mor gradyan kare */
  defineTemplate({ key: 'zumba', name: 'Inspired by Zumba', desc: T('Açık zemin, büyük harfli siyah başlık ve limon yeşili vurgu; ilk karede özellik çipleri ve laurel, bazı kareler mor gradyan. Fitness ve dans uygulamaları için.', 'Light background, uppercase black headline with a lime emphasis; feature chips and a laurel on the first screen, some screens in purple gradient. For fitness and dance apps.'),
    tags: ['advanced', 'colourful', 'bold', 'badges', 'chips'], cats: ['health & fitness', 'sports', 'lifestyle'], theme: 'colourful', skill: 'advanced',
    style: { font: 'montserrat', weight: 800, size: 6.2, color: '#111111', accent: '#8be000', hlStyle: 'marker', hlTextColor: '#111111', uppercase: true, letterSpacing: -0.5, lineHeight: 1.1, subSize: 2.8, subOpacity: 75 },
    bg: { type: 'solid', c1: '#f2f2f2' }, device: { frame: 'iphone-pro', color: 'black', shadow: 45, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Dance your\nway to [fitness]', 'Dans ederek\n[forma] gir', null, null, { dev: null, els: [{ kind: 'pill', x: 20, y: 28, size: 2.2, text: T('Stres yok', 'Stress free'), emoji: '', bg: '#8be000', color: '#111111', rot: 0 }, { kind: 'pill', x: 40, y: 28, size: 2.2, text: T('Yağ yak', 'Burn fat'), emoji: '', bg: '#8be000', color: '#111111', rot: 0 }, { kind: 'pill', x: 26, y: 33, size: 2.2, text: T('Özgüven', 'Boost confidence'), emoji: '', bg: '#8be000', color: '#111111', rot: 0 }, { kind: 'emoji', x: 50, y: 58, size: 22, text: '💃' }, { kind: 'laurel', x: 24, y: 88, size: 2.2, text: T('1M+\nİndirme', '1M+\nDownloads'), color: '#111111' }, { kind: 'laurel', x: 66, y: 88, size: 2.2, text: T('#1\nDans Fitness', '#1\nDance Fitness'), color: '#111111' }] }],
      ['bleed', 'A fresh program\nfor beginners', 'Yeni başlayanlara\ntaze program', 'Move, sweat, and have fun while working out', 'Hareket et, terle ve eğlen', { bg: { type: 'linear', c1: '#5b1fd6', c2: '#9b3ff0', angle: 170 }, titleStyle: { color: '#ffffff' }, subStyle: { color: '#ffffff', opacity: 85 } }],
      ['bleed', 'Works for all\nfitness [goals]', 'Her fitness\n[hedefine] uygun', 'Get fit, lose weight, or dance for fun', 'Forma gir, kilo ver ya da eğlen'],
      ['bleed', '100+ exclusive\ntracks for training', 'Antrenman için\n100+ özel parça', 'New workouts to try each week', 'Her hafta yeni antrenman', { bg: { type: 'linear', c1: '#5b1fd6', c2: '#e93fa0', angle: 170 }, titleStyle: { color: '#ffffff' }, subStyle: { color: '#ffffff', opacity: 85 } }],
      ['bleed', 'Hit your\n[fitness] goals', '[Fitness]\nhedeflerini tuttur', 'Create weekly goals and see your results', 'Haftalık hedef koy, sonucu gör', { bg: { type: 'linear', c1: '#5b1fd6', c2: '#9b3ff0', angle: 170 }, titleStyle: { color: '#ffffff' }, subStyle: { color: '#ffffff', opacity: 85 } }],
      ['bleed', 'Live classes\nevery day', 'Her gün\ncanlı ders', null],
      ['bleed', 'Track your\n[calories]', '[Kalorini]\nizle', null, null, { bg: { type: 'linear', c1: '#5b1fd6', c2: '#9b3ff0', angle: 170 }, titleStyle: { color: '#ffffff' } }],
      ['bleed', 'Start your\nfree [trial]', 'Ücretsiz [deneme]\nbaşlat', null],
    ]) });

  /* Streaming App — yeşil zemin, beyaz başlık, siyah cihaz, ilk karede yelpaze */
  defineTemplate({ key: 'streaming', name: 'Inspired by streaming app', desc: T('Yeşil düz zemin, sol hizalı beyaz başlık; ilk karede yelpaze gibi açılmış cihazlar, alt metin. Dizi, film ve eğlence uygulamaları için.', 'Flat green background, left-aligned white headline; fanned devices and a bottom caption on the first screen. For series, film and entertainment apps.'),
    tags: ['advanced', 'colourful', 'multi layered'], cats: ['entertainment', 'photo & video', 'music'], theme: 'colourful', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 6.6, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.5, lineHeight: 1.08, subSize: 3, subColor: '#ffffff', subOpacity: 80 },
    bg: { type: 'solid', c1: '#1f9d55' }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['text-top-left', 'Track\nyour favorite\nshows', 'Sevdiğin\ndizileri\ntakip et', null, null, { dev: { x: 22, y: 28, w: 70, rot: 14 }, extra: [{ type: 'device', name: 'Device 2', frame: 'iphone-pro', color: 'black', shadow: 50, fit: 'top', x: 4, y: 30, w: 70, rot: -8 }], els: [{ kind: 'text', x: 70, y: 90, size: 3.2, text: T('Hiçbir bölümü\nkaçırma', 'Never miss\nan episode'), color: '#ffffff', weight: 800 }] }],
      ['text-top-left', 'Track\nyour favorite\nshows', 'Sevdiğin\ndizileri\ntakip et', null, null, { dev: { x: 14, y: 30, w: 76, rot: 10 } }],
      ['bleed', 'Add shows to\nyour watchlist', 'Dizileri izleme\nlistene ekle', null],
      ['bleed', 'Sync across\nall your devices', 'Tüm cihazlarında\neşitle', null],
      ['bleed', 'Browse upcoming\nepisodes', 'Yaklaşan bölümlere\ngöz at', null],
      ['bleed', 'Get notified\non release', 'Yayınlanınca\nhaber al', null],
      ['bleed', 'Rate and\nreview', 'Puanla ve\nyorumla', null],
      ['bleed', 'Free to\nuse', 'Ücretsiz\nkullan', null],
    ]) });

  /* Microsoft Copilot — çok açık pastel, üst çip etiket, küçük başlık, cihaz ortada */
  defineTemplate({ key: 'copilot', name: 'Inspired by Microsoft Copilot', desc: T('Çok açık pastel zemin, üstte ikonlu çip etiketi ve küçük siyah başlık; beyaz cihaz ortada, arkasında pastel ışıma. Yapay zekâ asistanları ve araçlar için.', 'Very light pastel background, an icon chip label above a small black headline; white device centred with a pastel glow. For AI assistants and utilities.'),
    tags: ['simple', 'light', 'minimal', 'chips'], cats: ['productivity', 'utilities', 'education'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 5.2, color: '#111111', accent: '#111111', letterSpacing: -0.8, lineHeight: 1.15, subSize: 2.6, subOpacity: 65, titleBox: { y: 9 } },
    bg: { type: 'solid', c1: '#f4f2ff' }, device: { frame: 'iphone-pro', color: 'white', shadow: 30, glow: '#c9b8ff', glowStrength: 40, fit: 'top' },
    screens: S8([
      ['small', 'Turn ideas into\nimages', 'Fikirleri görsele\ndönüştür', null, null, { els: [{ kind: 'pill', x: 50, y: 5, size: 2.4, text: T('Görsel Üretimi', 'Image Generation'), emoji: '🎨', bg: '#ffffff', color: '#111111', rot: 0 }] }],
      ['small', 'Meet your AI\ncompanion', 'Yapay zekâ\nyoldaşınla tanış', null, null, { bg: { type: 'solid', c1: '#fff1ea' }, els: [{ kind: 'pill', x: 50, y: 5, size: 2.4, text: 'Mico', emoji: '🙂', bg: '#ffffff', color: '#111111', rot: 0 }] }],
      ['small', 'Explore new\nideas', 'Yeni fikirler\nkeşfet', null, null, { bg: { type: 'solid', c1: '#eaf6ff' }, els: [{ kind: 'pill', x: 50, y: 5, size: 2.4, text: T('Keşfet', 'Discover'), emoji: '🔎', bg: '#ffffff', color: '#111111', rot: 0 }] }],
      ['small', 'Hands-free\nconversations', 'Eller serbest\nsohbet', null, null, { bg: { type: 'solid', c1: '#eafbf1' }, els: [{ kind: 'pill', x: 50, y: 5, size: 2.4, text: T('Ses', 'Voice'), emoji: '🎙️', bg: '#ffffff', color: '#111111', rot: 0 }] }],
      ['small', 'Never overpay\nagain', 'Bir daha fazla\nödeme', null, null, { bg: { type: 'solid', c1: '#fff7e6' }, els: [{ kind: 'pill', x: 50, y: 5, size: 2.4, text: T('Alışveriş', 'Shopping'), emoji: '🛍️', bg: '#ffffff', color: '#111111', rot: 0 }] }],
      ['small', 'Summarise any\ndocument', 'Her belgeyi\nözetle', null, null, { els: [{ kind: 'pill', x: 50, y: 5, size: 2.4, text: T('Belgeler', 'Documents'), emoji: '📄', bg: '#ffffff', color: '#111111', rot: 0 }] }],
      ['small', 'Plan your\nweek', 'Haftanı\nplanla', null, null, { bg: { type: 'solid', c1: '#eaf6ff' }, els: [{ kind: 'pill', x: 50, y: 5, size: 2.4, text: T('Planlama', 'Planning'), emoji: '🗓️', bg: '#ffffff', color: '#111111', rot: 0 }] }],
      ['small', 'Free to\nstart', 'Ücretsiz\nbaşla', null, null, { bg: { type: 'solid', c1: '#fff1ea' }, els: [{ kind: 'pill', x: 50, y: 5, size: 2.4, text: T('Başla', 'Get started'), emoji: '✨', bg: '#ffffff', color: '#111111', rot: 0 }] }],
    ]) });

  /* Munch — krem zemin, serif+italik başlık, üst küçük italik etiket, cihaz altta */
  defineTemplate({ key: 'munch', name: 'Munch', desc: T('Krem zemin, siyah serif başlık ve kırmızı vurgu; üstte küçük italik etiket, ilk kare fotoğraf. Yemek ve restoran uygulamaları için.', 'Cream background, black serif headline with a red emphasis; a small italic label on top, photo-led first screen. For food and restaurant apps.'),
    tags: ['simple', 'light', 'serif', 'photo'], cats: ['food & drink', 'lifestyle', 'shopping'], theme: 'light', skill: 'simple',
    style: { font: 'playfair', weight: 800, size: 7, color: '#1a1a1a', accent: '#d7263d', letterSpacing: -0.5, lineHeight: 1.05, subFont: 'lora', subSize: 3, subOpacity: 75, titleBox: { y: 9 } },
    bg: { type: 'solid', c1: '#f6efe3' }, device: { frame: 'iphone-pro', color: 'white', shadow: 40, fit: 'top' },
    screens: S8([
      ['text-only', 'MUNCH', 'MUNCH', 'The food app you have been looking for!', 'Aradığın yemek uygulaması!', { titleBox: { y: 24, x: 8, align: 'left' }, subBox: { x: 8, align: 'left' }, titleStyle: { size: 11, letterSpacing: 2 }, els: [{ kind: 'emoji', x: 50, y: 74, size: 26, text: '🌮' }] }],
      ['bleed', 'Right [here]', 'Tam [burada]', null, null, { els: [{ kind: 'text', x: 50, y: 4.5, size: 2.4, text: T('Canın ne çekerse', 'Everything you crave'), color: '#1a1a1a', weight: 500 }] }],
      ['bleed', 'Eat [happy]', '[Mutlu] ye', null, null, { els: [{ kind: 'text', x: 50, y: 4.5, size: 2.4, text: T('Ruh halin ne olursa olsun', 'Whatever your mood'), color: '#1a1a1a', weight: 500 }] }],
      ['bleed', 'Eat [better]', 'Daha [iyi] ye', null, null, { els: [{ kind: 'text', x: 50, y: 4.5, size: 2.4, text: T('Daha az ara', 'Search less'), color: '#1a1a1a', weight: 500 }] }],
      ['bleed', 'Your [way]', 'Senin [tarzın]', null, null, { els: [{ kind: 'text', x: 50, y: 4.5, size: 2.4, text: T('Her lokma senin', 'Make every bite'), color: '#1a1a1a', weight: 500 }] }],
      ['bleed', 'Order [fast]', '[Hızlı] sipariş', null, null, { els: [{ kind: 'text', x: 50, y: 4.5, size: 2.4, text: T('Dakikalar içinde', 'In minutes'), color: '#1a1a1a', weight: 500 }] }],
      ['bleed', 'Save [more]', 'Daha [çok] biriktir', null, null, { els: [{ kind: 'text', x: 50, y: 4.5, size: 2.4, text: T('Her siparişte', 'On every order'), color: '#1a1a1a', weight: 500 }] }],
      ['bleed', 'Try [free]', '[Ücretsiz] dene', null, null, { els: [{ kind: 'text', x: 50, y: 4.5, size: 2.4, text: T('Bugün başla', 'Start today'), color: '#1a1a1a', weight: 500 }] }],
    ]) });

  /* Awake — sıcak sarı-turuncu gradyan, küçük siyah başlık, ekran çerçevesiz */
  defineTemplate({ key: 'awake', name: 'Inspired by Awake', desc: T('Sıcak sarı-turuncu gradyan, küçük ve sakin siyah başlık; ekranlar çerçevesiz kart gibi. Alarm, uyku ve sabah rutini uygulamaları için.', 'Warm yellow-orange gradient with a small, calm black headline; screens sit as frameless cards. For alarm, sleep and morning-routine apps.'),
    tags: ['simple', 'gradient', 'minimal'], cats: ['health & fitness', 'utilities', 'lifestyle'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 600, size: 4.6, color: '#1a1a1a', accent: '#1a1a1a', letterSpacing: -0.8, lineHeight: 1.15, subSize: 2.6, subOpacity: 65, titleBox: { y: 8 } },
    bg: { type: 'linear', c1: '#ffd77a', c2: '#ffb347', angle: 180 }, device: { frame: 'none', fit: 'top', shadow: 45, radius: 6 },
    screens: S8([
      ['card', 'Struggling to\nwake up on time?', 'Zamanında uyanmakta\nzorlanıyor musun?', null, null, { titleBox: { align: 'center' } }],
      ['card', 'Wake up by\ncompleting missions', 'Görevleri tamamlayarak\nuyan', null, null, { titleBox: { align: 'center' }, dev: { x: 14, y: 26, w: 72, rot: -10, frame: 'iphone-pro', color: 'black' } }],
      ['card', 'Start your day\nfeeling in control', 'Güne kontrol\nhissiyle başla', null, null, { titleBox: { align: 'center' } }],
      ['card', 'A clear view of\nyour sleep habits', 'Uyku alışkanlıklarına\nnet bakış', null, null, { titleBox: { align: 'center' } }],
      ['card', 'Alarm sounds that\nactually wake you', 'Gerçekten uyandıran\nalarm sesleri', null, null, { titleBox: { align: 'center' } }],
      ['card', 'Gentle\nsleep tracking', 'Nazik\nuyku takibi', null, null, { titleBox: { align: 'center' } }],
      ['card', 'Weekly\ninsights', 'Haftalık\niçgörüler', null, null, { titleBox: { align: 'center' } }],
      ['card', 'Try it\nfree', 'Ücretsiz\ndene', null, null, { titleBox: { align: 'center' } }],
    ]) });

  /* Earkick — lila pastel, siyah başlık, çipler, basın logoları yerine metin */
  defineTemplate({ key: 'earkick', name: 'Inspired by Earkick', desc: T('Lila-pembe pastel gradyan, siyah kalın başlık; ilk karede "App Store\'da öne çıktı" rozeti ve basın satırı, diğerlerinde özellik çipleri. Ruh sağlığı uygulamaları için.', 'Lilac-pink pastel gradient, bold black headline; a "Featured on App Store" badge and press line on the first screen, feature chips on the rest. For mental health apps.'),
    tags: ['advanced', 'pastel', 'chips', 'badges'], cats: ['health & fitness', 'medical', 'lifestyle'], theme: 'light', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 6.4, color: '#1a1a2e', accent: '#7b5cff', letterSpacing: -1.5, lineHeight: 1.08, subSize: 3, subOpacity: 75 },
    bg: { type: 'linear', c1: '#e6dcff', c2: '#ffd9ec', angle: 170 }, device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['text-only', 'Improve\nyour mental\nhealth', 'Ruh sağlığını\niyileştir', null, null, { titleBox: { y: 30, x: 8, align: 'left' }, els: [{ kind: 'emoji', x: 24, y: 14, size: 12, text: '🐼' }, { kind: 'laurel', x: 24, y: 64, size: 2.2, text: T('App Store\nÖne Çıkan', 'Featured by\nApp Store'), color: '#1a1a2e' }, { kind: 'text', x: 50, y: 82, size: 2.4, text: 'TIME · Forbes · BBC · The Guardian', color: '#1a1a2e', weight: 700 }] }],
      ['small', 'Safe & private\nconversations', 'Güvenli ve özel\nsohbetler', null, null, { els: [{ kind: 'pill', x: 30, y: 26, size: 2.2, text: T('Sınırsız', 'Unlimited'), emoji: '✅', bg: '#ffffff', color: '#1a1a2e', rot: 0 }, { kind: 'pill', x: 68, y: 26, size: 2.2, text: T('Hızlı', 'Fast'), emoji: '✅', bg: '#ffffff', color: '#1a1a2e', rot: 0 }, { kind: 'pill', x: 30, y: 32, size: 2.2, text: T('Günlük içgörü', 'Daily insights'), emoji: '✅', bg: '#ffffff', color: '#1a1a2e', rot: 0 }, { kind: 'pill', x: 68, y: 32, size: 2.2, text: T('Günlük', 'Journaling'), emoji: '✅', bg: '#ffffff', color: '#1a1a2e', rot: 0 }] }],
      ['small', 'Track\nprogress', 'İlerlemeyi\nizle', 'Not just feelings', 'Sadece duygu değil', { subBox: { y: 90 }, subStyle: { flow: false, size: 4, weight: 800, opacity: 100 } }],
      ['small', 'AI that\nunderstands you', 'Seni anlayan\nyapay zekâ', null, null, { titleBox: { y: 40 }, dev: { x: 24, y: 52, w: 52 }, els: [{ kind: 'emoji', x: 50, y: 12, size: 8, text: '😊 😐 😟' }] }],
      ['small', 'Stress support\nanytime', 'Her an\nstres desteği', null, null, { els: [{ kind: 'emoji', x: 50, y: 30, size: 10, text: '🐼' }] }],
      ['small', 'Breathing\nexercises', 'Nefes\negzersizleri', null],
      ['small', 'Your data\nstays yours', 'Verin\nsende kalır', null],
      ['small', 'Start\nfor free', 'Ücretsiz\nbaşla', null],
    ]) });

  /* DuoDo — yeşil zemin, beyaz ortalı başlık, çerçevesiz kart ekranlar, alt metin */
  defineTemplate({ key: 'duodo', name: 'Inspired by DuoDo', desc: T('Koyu yeşil düz zemin, ortalı beyaz başlık; ekranlar çerçevesiz yuvarlak kartlar, bazı karelerde metin altta. Yemek keşif ve rehber uygulamaları için.', 'Flat dark green, centred white headline; screens as frameless rounded cards, text at the bottom on some screens. For food discovery and guide apps.'),
    tags: ['simple', 'colourful', 'card'], cats: ['food & drink', 'travel', 'lifestyle'], theme: 'colourful', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 5.8, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.2, lineHeight: 1.1, subSize: 2.8, subColor: '#ffffff', subOpacity: 80 },
    bg: { type: 'solid', c1: '#178a5a' }, device: { frame: 'none', fit: 'top', shadow: 40, radius: 8 },
    screens: S8([
      ['text-top', 'Discover delicious\nfoodie locations', 'Lezzetli mekânları\nkeşfet', null, null, { dev: { x: 8, y: 24, w: 84 } }],
      ['text-bottom', 'Search for your\nfave cuisine', 'Favori mutfağını\nara', null, null, { dev: { x: 8, y: 6, w: 84 } }],
      ['text-top', 'Check out our\nfeatured places', 'Öne çıkan yerlere\nbak', null, null, { dev: { x: 8, y: 24, w: 84 } }],
      ['text-top', 'Advanced search\nand filters', 'Gelişmiş arama\nve filtreler', null, null, { dev: { x: 8, y: 24, w: 84 } }],
      ['text-top', 'Bookmark your\nfaves', 'Favorilerini\nkaydet', null, null, { dev: { x: 8, y: 24, w: 84 } }],
      ['text-bottom', 'Reviews from\nreal foodies', 'Gerçek gurmelerden\nyorumlar', null, null, { dev: { x: 8, y: 6, w: 84 } }],
      ['text-top', 'Share with\nfriends', 'Arkadaşlarla\npaylaş', null, null, { dev: { x: 8, y: 24, w: 84 } }],
      ['text-top', 'Get\nstarted', 'Hemen\nbaşla', null, null, { dev: { x: 8, y: 24, w: 84 } }],
    ]) });

  /* GlowFit — lila→lacivert gradyan, ortalı beyaz başlık, laurel, siyah cihaz */
  defineTemplate({ key: 'glowfit', name: 'GlowFit', desc: T('Lila-mavi-lacivert dikey gradyan, ortalı beyaz kalın başlık; ilk karede laurel ve alıntı, ikinci karede yıldızlar. Fitness ve koçluk uygulamaları için.', 'Vertical lilac-blue-navy gradient, centred bold white headline; laurel and quote on the first screen, stars on the second. For fitness and coaching apps.'),
    tags: ['advanced', 'gradient', 'badges'], cats: ['health & fitness', 'sports', 'lifestyle'], theme: 'dark', skill: 'advanced',
    style: { font: 'inter', weight: 800, size: 7, color: '#ffffff', accent: '#ffffff', letterSpacing: -1.5, lineHeight: 1.08, subSize: 3, subColor: '#ffffff', subOpacity: 85 },
    bg: { type: 'linear', c1: '#a78bfa', c2: '#1e1b4b', angle: 180 }, device: { frame: 'iphone-pro', color: 'black', shadow: 55, fit: 'top' },
    screens: S8([
      ['text-top', 'The app for\n[fitness]', '[Fitness]\nuygulaması', null, null, { dev: { x: 22, y: 46, w: 56 }, els: [{ kind: 'laurel', x: 26, y: 30, size: 2, text: T('Günün\nUygulaması', 'App of\nthe Day'), color: '#ffffff' }, { kind: 'laurel', x: 66, y: 30, size: 2, text: T('Editörün\nSeçimi', "Editors'\nChoice"), color: '#ffffff' }, { kind: 'quote', x: 50, y: 40, w: 80, size: 2.3, text: T('"Bu uygulama fitness yolculuğumu değiştirdi"', '"This app has changed my life and fitness journey"'), color: '#ffffff' }] }],
      ['text-top', '1M+\n[happy] users', '1M+\n[mutlu] kullanıcı', 'Turn your beautiful vision into reality', 'Hayalini gerçeğe dönüştür', { els: [{ kind: 'stars', x: 50, y: 22, size: 2.8, color: '#ffd23f' }], subBox: { y: 26 }, subStyle: { flow: false, size: 3.4, weight: 800, opacity: 100 }, dev: { x: 22, y: 36, w: 56 } }],
      ['bleed', 'Reduce stress\nwith simple charts', 'Basit grafiklerle\nstresi azalt', null],
      ['bleed', 'Your new program\nis waiting', 'Yeni programın\nseni bekliyor', null],
      ['bleed', 'Search for\nany workout', 'Her antrenmanı\nara', null],
      ['bleed', 'Track your\nprogress', 'İlerlemeni\nizle', null],
      ['bleed', 'Coaches\non demand', 'İstediğin an\nkoç', null],
      ['bleed', 'Start\nfree', 'Ücretsiz\nbaşla', null],
    ]) });

  /* Calm (inspired) — açık mavi gradyan, ilk karede eğik büyük cihaz, sonra çerçevesiz kartlar */
  defineTemplate({ key: 'calm', name: 'Inspired by Calm', desc: T('Açık mavi-beyaz gradyan; ilk iki karede eğik büyük cihaz ve alt metin, diğerlerinde çerçevesiz ekran kartları ve küçük başlık. Yaşam, güzellik ve içerik uygulamaları için.', 'Light blue-white gradient; a big tilted device with bottom text on the first two screens, frameless screen cards with a small headline on the rest. For lifestyle, beauty and content apps.'),
    tags: ['advanced', 'light', 'minimal', 'multi layered'], cats: ['lifestyle', 'health & fitness', 'shopping'], theme: 'light', skill: 'advanced',
    style: { font: 'inter', weight: 600, size: 4.6, color: '#111111', accent: '#111111', letterSpacing: -0.8, lineHeight: 1.15, subSize: 2.6, subOpacity: 70 },
    bg: { type: 'linear', c1: '#a8d4ff', c2: '#eef6ff', angle: 200 }, device: { frame: 'none', fit: 'top', shadow: 40, radius: 8 },
    screens: S8([
      ['bleed', '', '', null, null, { dev: { x: 30, y: 24, w: 90, rot: -22, frame: 'iphone-pro', color: 'white' }, els: [{ kind: 'icon', x: 24, y: 6, size: 2.6, text: 'appscreens', iconBg: '#1e6bff', color: '#111111' }] }],
      ['text-bottom', 'Do more.\nStress less.\n[Perform better.]', 'Daha çok yap.\nDaha az stres.\n[Daha iyi performans.]', null, null, { titleBox: { y: 74, x: 40, w: 54, align: 'right' }, titleStyle: { size: 5, weight: 500, letterSpacing: -0.5 }, dev: { x: -30, y: 4, w: 96, rot: 18, frame: 'iphone-pro', color: 'white' } }],
      ['card', 'Screenshots to help\nyou sell more apps', 'Daha çok uygulama satmana\nyardım eden görseller', null, null, { titleBox: { align: 'center' }, dev: { x: 10, y: 22, w: 80 } }],
      ['card', 'Screenshots to help\nyou sell more apps', 'Daha çok uygulama satmana\nyardım eden görseller', null, null, { titleBox: { align: 'center' }, dev: { x: 10, y: 22, w: 80 } }],
      ['card', 'Screenshots to help\nyou sell more apps', 'Daha çok uygulama satmana\nyardım eden görseller', null, null, { titleBox: { align: 'center' }, dev: { x: 10, y: 22, w: 80 } }],
      ['card', 'Beauty trends\nevery week', 'Her hafta\ngüzellik trendleri', null, null, { titleBox: { align: 'center' }, dev: { x: 10, y: 22, w: 80 } }],
      ['card', 'Curated\nfor you', 'Senin için\nseçildi', null, null, { titleBox: { align: 'center' }, dev: { x: 10, y: 22, w: 80 } }],
      ['card', 'Join\ntoday', 'Bugün\nkatıl', null, null, { titleBox: { align: 'center' }, dev: { x: 10, y: 22, w: 80 } }],
    ]) });

  /* Duolingo — canlı düz renkler (mavi, mor, sarı, kırmızı), kalın beyaz başlık */
  defineTemplate({ key: 'duolingo', name: 'Inspired by Duolingo', desc: T('Her karede farklı canlı düz zemin (mavi, yeşil, mor, sarı, kırmızı), sol hizalı kalın beyaz başlık; cihaz alttan taşar. Eğitim ve dil uygulamaları için.', 'A different vivid flat colour per screen (blue, green, purple, yellow, red) with a bold left-aligned white headline; the device bleeds off the bottom. For education and language apps.'),
    tags: ['simple', 'colourful', 'bold'], cats: ['education', 'games', 'lifestyle'], theme: 'colourful', skill: 'simple',
    style: { font: 'nunito', weight: 900, size: 6, color: '#ffffff', accent: '#ffffff', letterSpacing: -0.8, lineHeight: 1.1, subSize: 3, subColor: '#ffffff', subOpacity: 85 },
    device: { frame: 'iphone-pro', color: 'white', shadow: 45, fit: 'top' },
    screens: S8([
      ['bleed-left', 'the app store\nscreenshot\ngenerator\nyou need', 'ihtiyacın olan\nekran görüntüsü\nüretici', null, null, { bg: { type: 'solid', c1: '#1cb0f6' } }],
      ['bleed-left', 'the fastest way\nto make\nscreenshots for\nyour app release', 'sürüm için en hızlı\nekran görüntüsü\nyolu', null, null, { bg: { type: 'solid', c1: '#58cc02' } }],
      ['bleed-left', 'over 100 quick,\neasy and\nprofessional\ntemplates', '100\'den fazla\nhızlı, kolay,\nprofesyonel şablon', null, null, { bg: { type: 'solid', c1: '#ce82ff' } }],
      ['bleed-left', 'localise your\napp instantly,\nreaching the\nworld', 'uygulamanı anında\nyerelleştir,\ndünyaya ulaş', null, null, { bg: { type: 'solid', c1: '#ffc800' } }],
      ['bleed-left', 'improve your app\nstore optimisation\nby up to 35%', 'mağaza\noptimizasyonunu\n%35\'e kadar artır', null, null, { bg: { type: 'solid', c1: '#ff4b4b' } }],
      ['bleed-left', 'learn with\nbite-sized\nlessons', 'küçük derslerle\nöğren', null, null, { bg: { type: 'solid', c1: '#1cb0f6' } }],
      ['bleed-left', 'keep your\nstreak alive', 'serini\ncanlı tut', null, null, { bg: { type: 'solid', c1: '#58cc02' } }],
      ['bleed-left', 'free.\nfun.\neffective.', 'ücretsiz.\neğlenceli.\netkili.', null, null, { bg: { type: 'solid', c1: '#ce82ff' } }],
    ]) });

  /* AFK Arena — tam ekran fantezi görsel, üstte serif büyük harf başlık, altta karakter adı */
  defineTemplate({ key: 'afk-arena', name: 'Inspired by AFK Arena', desc: T('Ekran görüntüsü tüm kareyi kaplar; üstte serif büyük harfli başlık, altta karakter adı gibi geniş aralıklı etiket. Fantezi ve RPG oyunları için.', 'Screenshot fills the frame; a serif uppercase title on top and a wide-spaced character-name label at the bottom. For fantasy and RPG games.'),
    tags: ['simple', 'dark', 'serif', 'photo'], cats: ['games', 'entertainment'], theme: 'dark', skill: 'simple',
    style: { font: 'playfair', weight: 600, size: 5.6, color: '#ffffff', accent: '#f5d67a', uppercase: true, letterSpacing: 1, lineHeight: 1.12, shadow: true },
    bg: { type: 'linear', c1: '#2a1d4a', c2: '#0a0714', angle: 180 }, device: { frame: 'none', fit: 'cover', shadow: 0 },
    screens: S8([
      ['full', 'Choose your\nfavourite\n[AFK] hero', 'Favori [AFK]\nkahramanını seç', null, null, { els: [{ kind: 'text', x: 50, y: 92, size: 2.6, text: 'AURELIA', color: '#f5d67a', weight: 500 }] }],
      ['full', 'Summon epic\nfantasy', 'Epik fanteziyi\nçağır', null, null, { els: [{ kind: 'text', x: 50, y: 92, size: 2.6, text: 'SERAPHINA', color: '#f5d67a', weight: 500 }] }],
      ['full', 'Claim mythic\nchampions', 'Efsanevi\nşampiyonları al', null, null, { els: [{ kind: 'text', x: 50, y: 92, size: 2.6, text: 'MALDRAVEN', color: '#f5d67a', weight: 500 }] }],
      ['full', 'Master the\nrealm', 'Diyara\nhükmet', null, null, { els: [{ kind: 'text', x: 50, y: 92, size: 2.6, text: 'ELYSARA', color: '#f5d67a', weight: 500 }] }],
      ['full', 'Build a team\nof legends', 'Efsanelerden\nbir takım kur', null, null, { els: [{ kind: 'text', x: 50, y: 92, size: 2.6, text: 'RAZGAR', color: '#f5d67a', weight: 500 }] }],
      ['full', 'Idle\nrewards', 'Beklerken\nödül', null, null, { els: [{ kind: 'text', x: 50, y: 92, size: 2.6, text: 'THORNE', color: '#f5d67a', weight: 500 }] }],
      ['full', 'Guild\nbattles', 'Lonca\nsavaşları', null, null, { els: [{ kind: 'text', x: 50, y: 92, size: 2.6, text: 'VESPER', color: '#f5d67a', weight: 500 }] }],
      ['full', 'Play\nfree', 'Ücretsiz\noyna', null, null, { els: [{ kind: 'text', x: 50, y: 92, size: 2.6, text: 'NYX', color: '#f5d67a', weight: 500 }] }],
    ]) });

  /* Luma — beyaz zemin, siyah başlık + alt açıklama, ince siyah çerçeveli düz cihaz */
  defineTemplate({ key: 'luma', name: 'Luma', desc: T('Beyaz zemin, ortalı siyah başlık ve küçük gri açıklama; siyah cihaz alttan taşar. Mobilya, alışveriş ve yaşam uygulamaları için sade.', 'White background, centred black headline with a small grey description; the black device bleeds off the bottom. Clean for furniture, shopping and lifestyle apps.'),
    tags: ['simple', 'light', 'minimal'], cats: ['shopping', 'lifestyle', 'business'], theme: 'light', skill: 'simple',
    style: { font: 'inter', weight: 700, size: 5.8, color: '#111111', accent: '#111111', letterSpacing: -1.2, lineHeight: 1.1, subSize: 2.7, subOpacity: 65 },
    bg: { type: 'solid', c1: '#ffffff' }, device: { frame: 'iphone-pro', color: 'black', shadow: 35, fit: 'top' },
    screens: S8([
      ['bleed', 'Improve your\napp screens.', 'Uygulama ekranlarını\niyileştir.', 'App subtitle text, intuitive design and powerful features.', 'Alt başlık metni, sezgisel tasarım ve güçlü özellikler.'],
      ['bleed', 'Elevate your\napp presence.', 'Uygulama varlığını\nyükselt.', 'App subtitle text, intuitive design and powerful features.', 'Alt başlık metni, sezgisel tasarım ve güçlü özellikler.'],
      ['bleed', 'Stand out from\nthe crowd.', 'Kalabalıktan\nsıyrıl.', 'App subtitle text, intuitive design and powerful features.', 'Alt başlık metni, sezgisel tasarım ve güçlü özellikler.'],
      ['bleed', 'Show off your\nfeatures.', 'Özelliklerini\ngöster.', 'App subtitle text, intuitive design and powerful features.', 'Alt başlık metni, sezgisel tasarım ve güçlü özellikler.'],
      ['bleed', 'Start with a\ntemplate.', 'Bir şablonla\nbaşla.', 'App subtitle text, intuitive design and powerful features.', 'Alt başlık metni, sezgisel tasarım ve güçlü özellikler.'],
      ['bleed', 'Curated\ncollections.', 'Seçilmiş\nkoleksiyonlar.', 'Designer pieces, delivered.', 'Tasarım parçalar, kapında.'],
      ['bleed', 'Save your\nwish list.', 'İstek listeni\nkaydet.', 'Come back anytime.', 'İstediğin zaman dön.'],
      ['bleed', 'Shop\ntoday.', 'Bugün\nalışveriş.', 'Free delivery on first order.', 'İlk siparişte ücretsiz teslimat.'],
    ]) });
})();
