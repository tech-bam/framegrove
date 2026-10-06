/* Arayüz dili: anahtar = İngilizce metin. TR sözlüğü; eksik anahtar İngilizce kalır. */
(function (global) {
  const TR = {
    'Projects': 'Projeler', 'Templates': 'Şablonlar', 'Sandbox': 'Deneme', 'Pricing': 'Fiyat', 'Help': 'Yardım', 'Sign in': 'Giriş', 'Editor': 'Editör',
    'Projects & Apps': 'Projeler', 'New Project': 'Yeni proje', 'Last Updated': 'Son güncellenen', 'All Apps': 'Tüm uygulamalar', 'All tags': 'Tüm etiketler', 'Search': 'Ara',
    'Open & edit': 'Aç ve düzenle', 'Screenshots': 'Ekran görüntüsü', 'Last updated': 'Son güncelleme', 'Orientation': 'Yön', 'Language': 'Dil', 'Output sizes': 'Çıktı boyutu',
    'Portrait': 'Dikey', 'Landscape': 'Yatay', 'Rename': 'Yeniden adlandır', 'Duplicate': 'Kopyala', 'Delete': 'Sil', 'Export project (.json)': 'Projeyi dışa aktar (.json)', 'Import project': 'Proje içe aktar',
    'No projects yet. Start with a template or a blank canvas.': 'Henüz proje yok. Bir şablonla ya da boş tuvalle başla.', 'Start with a template': 'Şablonla başla', 'Blank project': 'Boş proje',
    'Delete project "{name}"? This cannot be undone.': '"{name}" projesi silinsin mi? Geri alınamaz.', 'Project name': 'Proje adı', 'Untitled project': 'Adsız proje',
    /* editör */
    'Save': 'Kaydet', 'Saved': 'Kaydedildi', 'Undo': 'Geri al', 'Redo': 'İleri al', 'Globals': 'Genel', 'Setup': 'Kurulum', 'Background': 'Arka plan', 'Localize': 'Yerelleştir', 'App Screens': 'Uygulama ekranları',
    'Preview & Export': 'Önizle ve dışa aktar', 'Back to projects': 'Projelere dön', 'AI captions': 'AI başlıklar', 'Zoom out': 'Uzaklaştır', 'Zoom in': 'Yakınlaştır', 'Keyboard shortcuts': 'Klavye kısayolları',
    'Edit screen': 'Ekranı düzenle', 'Done': 'Bitti', 'Reset screen': 'Ekranı sıfırla', 'Copy screen': 'Ekranı kopyala', 'Paste screen style': 'Ekran stilini yapıştır', 'Download this screen': 'Bu ekranı indir', 'Pin as reference': 'Referans olarak sabitle', 'Delete screen': 'Ekranı sil', 'Add screen': 'Ekran ekle',
    'Layouts & Elements': 'Düzen ve öğeler', 'Layer': 'Katman', 'Add element': 'Öğe ekle', 'Add a new layer': 'Yeni katman ekle', 'Pick a Preset': 'Hazır düzen seç', 'Exact Dimensions': 'Tam ölçüler', 'Save as Preset': 'Düzen olarak kaydet', 'Drag and drop': 'Sürükle-bırak',
    'Text': 'Metin', 'Image': 'Görsel', 'Shape': 'Şekil', 'Device': 'Cihaz', 'Element': 'Öğe', 'Title': 'Başlık', 'Subtitle': 'Alt başlık',
    'Panoramic style': 'Panoramik stil', 'Panoramic background': 'Panoramik arka plan', 'Background style': 'Arka plan stili', 'Background image': 'Arka plan görseli', 'Select Background': 'Arka plan seç', 'Background pattern': 'Arka plan deseni', 'Pattern': 'Desen', 'None': 'Yok',
    'Solid': 'Düz', 'Gradient': 'Gradyan', 'Mesh': 'Mesh', 'Colour': 'Renk', 'Vertical position': 'Dikey konum', 'Image rotation': 'Görsel dönüşü', 'Center': 'Orta', 'Top': 'Üst', 'Bottom': 'Alt',
    'Font family': 'Yazı tipi', 'Weight': 'Kalınlık', 'Size': 'Boyut', 'Line height': 'Satır aralığı', 'Letter spacing': 'Harf aralığı', 'Align': 'Hizalama', 'Left': 'Sol', 'Right': 'Sağ', 'Colour': 'Renk', 'Accent colour': 'Vurgu rengi',
    'Highlight style': 'Vurgu biçimi', 'Marker': 'Fosforlu', 'Underline': 'Alt çizgi', 'Text box': 'Metin kutusu', 'Glass': 'Cam', 'Outline': 'Çerçeve', 'Shadow': 'Gölge', 'Uppercase': 'Büyük harf',
    'Words in [brackets] take the accent colour. Enter = new line.': '[Köşeli parantez] içindeki kelimeler vurgu rengini alır. Enter = yeni satır.',
    'Device type': 'Cihaz tipi', 'Frame design': 'Çerçeve tasarımı', 'Device orientation': 'Cihaz yönü', 'Fit': 'Sığdırma', 'Cover': 'Doldur', 'Contain': 'Sığdır', 'Corner rounding': 'Köşe yuvarlama', 'Add screenshots': 'Ekran görüntüsü ekle', 'Change device': 'Cihazı değiştir',
    'Body colour': 'Gövde rengi', 'Glare': 'Cam parlaması', 'Home indicator': 'Alt çubuk', 'Glow': 'Işıma', 'Glow colour': 'Işıma rengi', 'Tilt': 'Eğim', 'Width': 'Genişlik', 'Height': 'Yükseklik', 'Opacity': 'Opaklık',
    /* setup */
    'About': 'Hakkında', 'Output Sizes': 'Çıktı boyutları', 'Languages': 'Diller', 'Advanced': 'Gelişmiş', 'Update your project settings.': 'Proje ayarlarını güncelle.', 'Name': 'Ad', 'Tags': 'Etiketler', 'Add tag…': 'Etiket ekle…', 'App': 'Uygulama', 'App icon': 'Uygulama ikonu', 'Upload icon': 'İkon yükle',
    'Select the output sizes that you require for export.': 'Dışa aktarmak istediğin çıktı boyutlarını seç.', 'Android': 'Android', 'Apple': 'Apple', 'Other stores': 'Diğer mağazalar', 'Display:': 'Görünüm:',
    'Localisation Languages': 'Yerelleştirme dilleri', 'Default': 'Varsayılan', 'Export languages': 'Dışa aktarılacak diller', 'Add language…': 'Dil ekle…', 'AI context': 'AI bağlamı',
    'Describe what your app does, its audience and preferred tone. Add brand names and terms to keep untranslated.': 'Uygulamanın ne yaptığını, kitlesini ve tonunu anlat. Çevrilmeyecek marka adlarını ekle.',
    'Translate all with AI': 'Tümünü AI ile çevir', 'Export type': 'Dışa aktarma türü', 'Format': 'Biçim', 'Screenshot limit': 'Ekran görüntüsü sınırı', 'Custom fonts': 'Özel fontlar', 'Manage custom fonts': 'Özel fontları yönet', 'Update': 'Güncelle', 'Cancel': 'İptal',
    /* app screens */
    'Raw App Screenshots (By Device)': 'Ham ekran görüntüleri (cihaza göre)', 'Upload raw screenshots captured from your app (before mockups). One per device family gives the best result; the global slot is used when a family is empty.': 'Uygulamandan alınmış ham ekran görüntülerini yükle (maket öncesi). Her cihaz ailesi için ayrı görsel en iyi sonucu verir; aile boşsa global yuva kullanılır.',
    'Screen {n}': 'Ekran {n}', 'Global Screenshot': 'Genel ekran görüntüsü', 'Aspect ratio': 'En-boy oranı', 'Typical size': 'Tipik boyut', 'Bulk upload raw screenshots': 'Toplu yükle', 'Clear': 'Temizle', 'Next': 'Sonraki', 'Drop files here or click': 'Dosyaları buraya bırak ya da tıkla',
    /* export */
    'Preview': 'Önizleme', 'Download': 'İndir', 'Upload to App Stores': 'Mağazalara yükle', 'Export History': 'Geçmiş', 'Coming soon': 'Yakında', 'Preview the output screenshots, size-by-size and language-by-language.': 'Çıktıları boyut boyut, dil dil önizle.',
    'Download a zip with every selected size and language, organised in folders.': 'Seçili her boyut ve dil için klasörlenmiş bir zip indir.', 'Download .zip': '.zip indir', 'Rendering {n} images…': '{n} görsel oluşturuluyor…', '{n} images zipped': '{n} görsel zip\'lendi',
    'Direct upload to App Store Connect and Google Play Console is on the roadmap. For now, download the zip and upload from the console.': 'App Store Connect ve Google Play Console\'a doğrudan yükleme yol haritasında. Şimdilik zip\'i indirip konsoldan yükle.',
    /* AI */
    'AI captions & translations': 'AI başlık ve çeviri', 'Describe your app': 'Uygulamanı anlat', 'Write captions': 'Başlıkları yaz', 'Translate to all project languages': 'Tüm proje dillerine çevir', 'Tone': 'Ton', 'Benefit-led': 'Fayda odaklı', 'Playful': 'Oyunsu', 'Premium': 'Premium', 'Direct': 'Kısa, doğrudan',
    'Anthropic API key': 'Anthropic API anahtarı', 'Stored only in this browser. Calls go straight to Anthropic.': 'Yalnız bu tarayıcıda saklanır. Çağrılar doğrudan Anthropic\'e gider.', 'Copy prompt instead': 'Bunun yerine prompt\'u kopyala', 'Paste AI output': 'AI çıktısını yapıştır', 'Apply': 'Uygula',
    'API key needed — add it in the AI panel.': 'API anahtarı gerekli — AI panelinden ekle.', 'Captions written': 'Başlıklar yazıldı', 'Translated': 'Çevrildi', 'Working…': 'Çalışıyor…',
    /* templates */
    'App Screenshot Templates': 'Uygulama ekran görüntüsü şablonları', 'Screenshot Templates': 'Ekran görüntüsü şablonları',
    'Browse app screenshot templates for App Store and Google Play. Start with a professionally designed layout, customize the text, images, colors, and device frames, then export store-ready screenshots for iPhone, iPad, and Android.': 'App Store ve Google Play için şablonlara göz at. Profesyonel bir düzenle başla; metni, görselleri, renkleri ve cihaz çerçevelerini özelleştir; iPhone, iPad ve Android için mağazaya hazır görselleri dışa aktar.',
    'All templates': 'Tüm şablonlar', 'App Store categories': 'App Store kategorileri', 'Store and device': 'Mağaza ve cihaz', 'Filters': 'Filtreler', 'Free templates': 'Ücretsiz şablonlar', 'Skill': 'Seviye', 'Simple only': 'Sadece basit', 'Theme': 'Tema', 'Light': 'Açık', 'Dark': 'Koyu', 'Colourful': 'Renkli',
    'Template catalog': 'Şablon kataloğu', '{n} templates': '{n} şablon', 'Start with Template': 'Bu şablonla başla', 'Compatible with:': 'Uyumlu:', 'Any device or size': 'Her cihaz ve boyut', 'Load more templates': 'Daha fazla şablon', '{n} remaining': '{n} kaldı',
    'Specifications': 'Özellikler', 'Fully customisable': 'Tamamen özelleştirilebilir', '{n} screenshots': '{n} ekran görüntüsü', '{n}+ device outputs': '{n}+ cihaz çıktısı', 'Portrait orientation': 'Dikey yön', 'Landscape orientation': 'Yatay yön', '{n} language configured': '{n} dil ayarlı', 'Last updated {d}': 'Son güncelleme {d}',
    'Favourite template': 'Favorilere ekle', 'Copy to Account': 'Hesaba kopyala', 'Share template': 'Şablonu paylaş', 'About this template': 'Bu şablon hakkında', 'Screenshot dimensions': 'Ekran görüntüsü ölçüleri', 'More templates': 'Diğer şablonlar', 'Template information': 'Şablon bilgisi',
    'Copy Template to Account': 'Şablonu hesaba kopyala', 'Copy template and save to your account.': 'Şablonu kopyala ve projelerine kaydet.', 'Copy Template to Sandbox': 'Şablonu deneme alanına kopyala', 'Copy template and edit without saving': 'Kaydetmeden dene',
    'Home': 'Ana sayfa', 'templates': 'şablon', 'App Store Screenshot Template': 'App Store Ekran Görüntüsü Şablonu', 'Add any size or device': 'Herhangi bir boyut ya da cihaz ekle',
    /* landing */
    'App Store Screenshot Generator': 'App Store Ekran Görüntüsü Üretici', 'Create screenshots fast': 'Hızlıca oluştur', 'Browse templates': 'Şablonlara göz at', 'Try the editor': 'Editörü dene',
    '5 app store screenshots free · No card required': '5 ekran görüntüsü ücretsiz · Kart gerekmez',
    'Create App Store and Google Play screenshots in minutes. Design once, localize, generate every required iOS & Android size, and export. Start with 150+ fully customizable templates.': 'App Store ve Google Play ekran görüntülerini dakikalar içinde oluştur. Bir kez tasarla, yerelleştir, gereken her iOS ve Android boyutunu üret, dışa aktar. 150+ özelleştirilebilir şablonla başla.',
    'Pick a style, drop in your screens, and get a complete set of store-ready screenshots in minutes.': 'Bir stil seç, ekranlarını bırak, dakikalar içinde mağazaya hazır tam set al.',
    'Everything stays in your browser': 'Her şey tarayıcında kalır',
  };
  let lang = 'en';
  function t(key, vars) {
    let out = (lang === 'tr' && TR[key]) || key;
    if (vars) for (const k in vars) out = out.split('{' + k + '}').join(vars[k]);
    return out;
  }
  function apply(root) {
    (root || document).querySelectorAll('[data-t]').forEach((el) => { if (el.dataset.tOrig == null) el.dataset.tOrig = el.textContent.trim(); el.textContent = t(el.dataset.tOrig); });
    (root || document).querySelectorAll('[data-t-ph]').forEach((el) => { if (el.dataset.tPhOrig == null) el.dataset.tPhOrig = el.placeholder; el.placeholder = t(el.dataset.tPhOrig); });
    (root || document).querySelectorAll('[data-t-title]').forEach((el) => { if (el.dataset.tTitleOrig == null) el.dataset.tTitleOrig = el.title; el.title = t(el.dataset.tTitleOrig); });
    document.documentElement.lang = lang;
  }
  function detect() {
    try { const s = localStorage.getItem('sms-ui-lang'); if (s) return s; } catch (e) { }
    return (navigator.language || 'en').toLowerCase().startsWith('tr') ? 'tr' : 'en';
  }
  function set(l) { lang = l === 'tr' ? 'tr' : 'en'; try { localStorage.setItem('sms-ui-lang', lang); } catch (e) { } apply(); }
  global.t = t;
  global.I18N = { get lang() { return lang; }, set, apply, detect, extend: (d) => Object.assign(TR, d) };
})(window);
