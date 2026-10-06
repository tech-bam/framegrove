/* Şablon dosyalarını yükler. Yeni set eklerken listeye yaz. (Node tarafı bu listeyi kendisi okur.) */
(function () {
  var FILES = ['legacy.js', 'set-a.js', 'set-b.js', 'set-c.js', 'set-d.js', 'set-e.js', 'set-f.js', 'studio.js', 'duo.js'];
  var base = (document.currentScript && document.currentScript.src.replace(/index\.js.*$/, '')) || '';
  var v = (document.currentScript && (document.currentScript.src.match(/\?v=(\d+)/) || [])[1]) || '';
  FILES.forEach(function (f) { document.write('<script src="' + base + f + (v ? '?v=' + v : '') + '"><\/script>'); });
  window.TEMPLATE_FILES = FILES;
})();
