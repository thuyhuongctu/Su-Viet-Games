/* ThuyHuong Digital — thư viện ảnh trên trang giới thiệu: bấm ảnh nhỏ để đổi ảnh lớn.
   Mỗi nút ảnh nhỏ mang data-src, data-alt-en / data-alt-vi, data-cap-en / data-cap-vi;
   chú thích và mô tả ảnh đổi theo ngôn ngữ đang chọn (sự kiện «thd:lang» của site.js). */
(function(){
  'use strict';
  var shot = document.getElementById('shot'), cap = document.getElementById('shotCap');
  var btns = document.querySelectorAll('.thumbs button');
  if (!shot || !btns.length) return;
  function lang(){ return document.documentElement.lang === 'vi' ? 'vi' : 'en'; }
  function show(b){
    var l = lang();
    for (var i = 0; i < btns.length; i++) btns[i].setAttribute('aria-pressed', btns[i] === b ? 'true' : 'false');
    if (shot.getAttribute('src') !== b.dataset.src) shot.src = b.dataset.src;
    shot.alt = b.getAttribute('data-alt-' + l);
    // ảnh lớn không còn theo cặp data-vi-alt của site.js nữa, gallery tự lo
    shot.removeAttribute('data-vi-alt'); shot.removeAttribute('data-en-alt');
    if (cap) cap.textContent = b.getAttribute('data-cap-' + l);
  }
  function current(){
    for (var i = 0; i < btns.length; i++) if (btns[i].getAttribute('aria-pressed') === 'true') return btns[i];
    return btns[0];
  }
  for (var i = 0; i < btns.length; i++) btns[i].addEventListener('click', function(){ show(this); });
  document.addEventListener('thd:lang', function(){ show(current()); });
  show(current());
})();
