/* Çıktı boyutları (mağaza gereksinimleri) ve her boyutun varsayılan cihaz çerçevesi.
   Tasarım tabanı: dikey 1320×2868 (iPhone 6.9"). Diğer boyutlar yüzde tabanlı yerleşimle uyarlanır. */
(function (global) {
  const OUTPUTS = [
    // Apple
    { id: 'iphone-6.9', store: 'apple', group: 'iPhone', label: 'iPhones - 6.9"', w: 1320, h: 2868, frame: 'iphone-pro', display: 'iPhone 16 Pro Max', free: true, note: 'App Store Connect zorunlu (6.9")' },
    { id: 'iphone-6.7', store: 'apple', group: 'iPhone', label: 'iPhones - 6.7"', w: 1290, h: 2796, frame: 'iphone-pro', display: 'iPhone 15 Pro Max', free: true },
    { id: 'iphone-6.5', store: 'apple', group: 'iPhone', label: 'iPhones - 6.5"', w: 1242, h: 2688, frame: 'iphone-notch', display: 'iPhone 11 Pro Max', free: true },
    { id: 'iphone-6.3', store: 'apple', group: 'iPhone', label: 'iPhones - 6.3"', w: 1206, h: 2622, frame: 'iphone-pro', display: 'iPhone 16 Pro' },
    { id: 'iphone-6.1', store: 'apple', group: 'iPhone', label: 'iPhones - 6.1"', w: 1179, h: 2556, frame: 'iphone-pro', display: 'iPhone 15 Pro' },
    { id: 'iphone-5.5', store: 'apple', group: 'iPhone', label: 'iPhones - 5.5"', w: 1242, h: 2208, frame: 'iphone-classic', display: 'iPhone 8 Plus', free: true },
    { id: 'ipad-13', store: 'apple', group: 'iPad', label: 'iPad - 13"', w: 2064, h: 2752, frame: 'tablet', display: 'iPad Pro 13"', free: true },
    { id: 'ipad-12.9', store: 'apple', group: 'iPad', label: 'iPad Pro (2nd) - 12.9"', w: 2048, h: 2732, frame: 'tablet', display: 'iPad Pro 12.9"' },
    { id: 'ipad-11', store: 'apple', group: 'iPad', label: 'iPad - 11"', w: 1668, h: 2388, frame: 'tablet', display: 'iPad Pro 11"' },
    { id: 'watch', store: 'apple', group: 'Watch', label: 'Apple Watch', w: 396, h: 484, frame: 'watch', display: 'Apple Watch Series 10', landscapeOnly: false },
    { id: 'macos', store: 'apple', group: 'Mac', label: 'Mac OS', w: 2880, h: 1800, frame: 'browser', display: 'Mac Studio Display', landscape: true },
    { id: 'visionpro', store: 'apple', group: 'Vision', label: 'Apple Vision Pro', w: 3840, h: 2160, frame: 'none', display: 'Apple Vision Pro', landscape: true },
    // Apple creative assets: fixed placements, verified 2026-10-06.
    { id: 'apple-header', store: 'apple', group: 'Creative Assets', label: 'Product page header · 21:9', w: 3840, h: 1646, frame: 'none', landscape: true, fixed: true, creative: true, pngOnly: true, free: true },
    { id: 'apple-search', store: 'apple', group: 'Creative Assets', label: 'Search results · 3:2', w: 3840, h: 2560, frame: 'none', landscape: true, fixed: true, creative: true, free: true },
    { id: 'apple-universal', store: 'apple', group: 'Creative Assets', label: 'Header + Search · 16:9', w: 5244, h: 2950, frame: 'none', landscape: true, fixed: true, creative: true, pngOnly: true, free: true },
    // Google
    { id: 'android-phone', store: 'google', group: 'Android', label: 'Android Phones - 16:9', w: 1080, h: 1920, frame: 'android', display: 'Samsung Galaxy S25', free: true },
    { id: 'android-phone-tall', store: 'google', group: 'Android', label: 'Android Phones - tall', w: 1080, h: 2340, frame: 'android', display: 'Samsung Galaxy S25' },
    { id: 'android-tablet-7', store: 'google', group: 'Android', label: 'Android 7" Tablets - 16:9', w: 1080, h: 1920, frame: 'tablet', display: 'Galaxy Tab' },
    { id: 'android-tablet-10', store: 'google', group: 'Android', label: 'Android 10" Tablets - 16:9', w: 2160, h: 3840, frame: 'tablet', display: 'Galaxy Tab S8 Ultra', free: true },
    { id: 'play-feature', store: 'google', group: 'Google Play', label: 'Play feature graphic', w: 1024, h: 500, frame: 'none', display: '—', landscape: true },
    { id: 'wearos', store: 'google', group: 'Wear OS', label: 'Wear OS', w: 512, h: 512, frame: 'watch-round', display: 'Pixel Watch' },
    // Diğer
    { id: 'amazon', store: 'other', group: 'Amazon', label: 'Amazon Appstore', w: 1080, h: 1920, frame: 'android', display: 'Fire phone' },
    { id: 'huawei', store: 'other', group: 'Huawei', label: 'Huawei AppGallery', w: 1080, h: 1920, frame: 'android', display: 'Huawei' },
    { id: 'msstore', store: 'other', group: 'Microsoft', label: 'Microsoft Store mobile', w: 1080, h: 1920, frame: 'android', display: 'Surface Duo' },
  ];
  const byId = (id) => OUTPUTS.find((o) => o.id === id);
  const BASE = { w: 1320, h: 2868 }; // tasarım tabanı

  /* Ham ekran görüntüsü yuvaları: her cihaz ailesi için ayrı görsel verilebilir; yoksa 'global' kullanılır. */
  const SHOT_SLOTS = [
    { id: 'global', label: 'Global Screenshot', ratio: null },
    { id: 'iphone', label: 'iPhones (19.5:9)', ratio: 1320 / 2868, group: 'Apple', typical: '1320×2868', outputs: ['iphone-6.9', 'iphone-6.7', 'iphone-6.5', 'iphone-6.3', 'iphone-6.1', 'iphone-5.5'] },
    { id: 'ipad', label: 'iPad (4:3)', ratio: 2064 / 2752, group: 'Apple', typical: '2064×2752', outputs: ['ipad-13', 'ipad-12.9', 'ipad-11'] },
    { id: 'watch', label: 'Apple Watch', ratio: 396 / 484, group: 'Apple', typical: '396×484', outputs: ['watch', 'wearos'] },
    { id: 'android-phone', label: 'Android phone (19.5:9)', ratio: 1080 / 2340, group: 'Android', typical: '1080×2340', outputs: ['android-phone', 'android-phone-tall', 'amazon', 'huawei', 'msstore'] },
    { id: 'android-tablet', label: 'Android tablet (16:10)', ratio: 1848 / 2960, group: 'Android', typical: '1848×2960', outputs: ['android-tablet-7', 'android-tablet-10'] },
    { id: 'desktop', label: 'Desktop (16:10)', ratio: 2880 / 1800, group: 'Desktop', typical: '2880×1800', outputs: ['macos', 'visionpro'] },
  ];
  const slotForOutput = (outId) => (SHOT_SLOTS.find((s) => (s.outputs || []).includes(outId)) || SHOT_SLOTS[0]).id;

  const dimensions = (o, orientation) => {
    if (o.fixed) return { W: o.w, H: o.h };
    const land = orientation === 'landscape' || o.landscape;
    return { W: land ? Math.max(o.w,o.h) : Math.min(o.w,o.h), H: land ? Math.min(o.w,o.h) : Math.max(o.w,o.h) };
  };
  global.Devices = { OUTPUTS, byId, BASE, SHOT_SLOTS, slotForOutput, dimensions };
})(typeof window !== 'undefined' ? window : globalThis);
