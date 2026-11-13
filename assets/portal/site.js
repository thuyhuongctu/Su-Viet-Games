/* ThuyHuong Digital — chuyển ngôn ngữ (Anh mặc định / Việt) và sáng / tối
   cho cổng game và các trang giới thiệu. Mỗi trang đặt sẵn ngôn ngữ và chế độ
   đã lưu bằng một đoạn script nhỏ trong <head> để không nháy màn hình;
   tệp này gắn hai nút #prefLang, #prefTheme và đổi các thuộc tính theo ngôn ngữ:
     data-vi-alt / data-vi-aria-label / data-vi-title / data-vi-content → thuộc tính tương ứng
     data-vi-text → nội dung chữ (dùng cho <title>)
   Bản tiếng Anh là giá trị gốc trong mã HTML. Khi đổi ngôn ngữ, trang phát sự kiện
   «thd:lang»; khi đổi chế độ, phát «thd:theme». */
(function(){
  'use strict';
  var root = document.documentElement;
  var KEY_LANG = 'thd-lang', KEY_THEME = 'thd-theme';
  var ATTRS = ['alt', 'aria-label', 'title', 'content'];
  var dark = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;

  function save(k, v){ try { localStorage.setItem(k, v); } catch (e) {} }
  function lang(){ return root.lang === 'vi' ? 'vi' : 'en'; }
  function mode(){
    var t = root.getAttribute('data-theme');
    if (t === 'light' || t === 'dark') return t;
    return dark && dark.matches ? 'dark' : 'light';
  }

  function swap(el, attr, l){
    var en = 'data-en-' + attr;
    if (!el.hasAttribute(en)) el.setAttribute(en, attr === 'text' ? el.textContent : (el.getAttribute(attr) || ''));
    var v = el.getAttribute('data-' + l + '-' + attr);
    if (attr === 'text') el.textContent = v; else el.setAttribute(attr, v);
  }

  function applyLang(l){
    root.lang = l;
    ATTRS.concat('text').forEach(function(a){
      var list = document.querySelectorAll('[data-vi-' + a + ']');
      for (var i = 0; i < list.length; i++) swap(list[i], a, l);
    });
    var b = document.getElementById('prefLang');
    if (b){
      // Nút ghi tên ngôn ngữ sẽ chuyển sang, viết bằng chính ngôn ngữ đó
      var to = l === 'en' ? 'vi' : 'en';
      b.textContent = to === 'vi' ? 'Tiếng Việt' : 'English';
      b.setAttribute('lang', to);
      b.setAttribute('aria-label', l === 'en' ? 'Xem bằng tiếng Việt' : 'View in English');
      b.removeAttribute('title');
    }
    paintThemeButton();
    document.dispatchEvent(new CustomEvent('thd:lang', { detail: l }));
  }

  function paintThemeButton(){
    var m = mode();
    root.setAttribute('data-mode', m);
    var b = document.getElementById('prefTheme');
    if (b){
      var vi = lang() === 'vi';
      var label = m === 'dark' ? (vi ? 'Chuyển sang nền sáng' : 'Switch to light mode')
                               : (vi ? 'Chuyển sang nền tối' : 'Switch to dark mode');
      b.setAttribute('aria-label', label);
      b.setAttribute('title', label);
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', getComputedStyle(root).getPropertyValue('--ground').trim() || '#1f1509');
  }

  function init(){
    var bl = document.getElementById('prefLang'), bt = document.getElementById('prefTheme');
    if (bl){ bl.hidden = false; bl.addEventListener('click', function(){
      var l = lang() === 'en' ? 'vi' : 'en'; save(KEY_LANG, l); applyLang(l); }); }
    if (bt){ bt.hidden = false; bt.addEventListener('click', function(){
      var m = mode() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', m); save(KEY_THEME, m); paintThemeButton();
      document.dispatchEvent(new CustomEvent('thd:theme', { detail: m })); }); }
    if (dark && dark.addEventListener) dark.addEventListener('change', function(){
      paintThemeButton(); document.dispatchEvent(new CustomEvent('thd:theme', { detail: mode() })); });
    applyLang(lang());
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
