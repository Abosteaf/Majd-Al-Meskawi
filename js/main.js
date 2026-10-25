/* Majd Al-Meskawi - single page site logic */
(function () {
  'use strict';

  var ICONS = {
    whatsapp: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
    instagram: 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077',
    facebook: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
    snapchat: 'M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z'
  };

  var CONTACTS = [
    { id: 'whatsapp', href: 'https://wa.me/962791807043', external: true, sub: '0791807043', color: '#25D366', textDark: false },
    { id: 'instagram', href: 'https://www.instagram.com/maajd.04?xtok=MWlpOTE1d2RxdGJkOQ%3D%3D&utm_source=qr', external: true, color: '#E4405F' },
    { id: 'facebook', href: 'https://www.facebook.com/Majd.Al.Meskawi?mibextid=wwXIfr&rdid=hYOkgl2e0ZuCH4Mj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EFfdtTUUe%2F%3Fmibextid%3DwwXIfr#', external: true, color: '#1877F2' },
    { id: 'snapchat', href: 'https://snapchat.com/t/Rfj31e7N', external: true, color: '#FFFC00', darkIcon: true },
    { id: 'website', href: 'https://afaqtravel.site/', external: true, sub: 'afaqtravel.site', color: '#1F4E8C', full: true },
    { id: 'email', href: 'mailto:almeskawimajd@gmail.com', external: false, sub: 'almeskawimajd@gmail.com', color: '#800020', wide: true }
  ];

  var I18N = {
    ar: {
      title: 'مجد المسكاوي | Majd Al-Meskawi',
      name: 'مجد المسكاوي',
      role1: 'المدير العام التنفيذي لشركة آفاق الشرق للسياحة والسفر',
      role2: 'مختص بمجال السياحة والسفر والحج والعمرة',
      role3: 'منسق رحلات ومغامرات',
      role4: 'خبير ومستشار سياحي',
      contactTitle: 'طرق التواصل',
      ticker: 'مجد المسكاوي للسياحة والسفر',
      footerName: 'مجد المسكاوي للسياحة والسفر',
      rights: 'جميع الحقوق محفوظة',
      whatsapp: 'واتساب', instagram: 'إنستغرام', facebook: 'فيسبوك', snapchat: 'سناب شات', website: 'الموقع الإلكتروني', email: 'البريد الإلكتروني',
      langBtn: 'EN', langAria: 'Switch to English', themeAria: 'تبديل الوضع الداكن',
      logoAlt: 'شعار آفاق الشرق للسياحة والسفر والحج والعمرة',
      avatarAlt: 'صورة مجد المسكاوي',
      open: 'فتح', copied: 'تم نسخ البريد الإلكتروني', copy: 'نسخ البريد الإلكتروني'
    },
    en: {
      title: 'Majd Al-Meskawi | Tourism & Travel',
      name: 'Majd Al-Meskawi',
      role1: 'Executive General Manager at Afaq Al-Sharq Tourism and Travel',
      role2: 'Specialist in Tourism, Travel, Hajj and Umrah',
      role3: 'Trips and Adventures Coordinator',
      role4: 'Tourism Expert and Consultant',
      contactTitle: 'Contact Me',
      ticker: 'Majd Al-Meskawi | Tourism & Travel',
      footerName: 'Majd Al-Meskawi | Tourism & Travel',
      rights: 'All rights reserved',
      whatsapp: 'WhatsApp', instagram: 'Instagram', facebook: 'Facebook', snapchat: 'Snapchat', website: 'Website', email: 'Email',
      langBtn: 'AR', langAria: 'التبديل إلى العربية', themeAria: 'Toggle dark mode',
      logoAlt: 'AFAQ logo - Afaq Al-Sharq Tourism, Travel, Hajj and Umrah',
      avatarAlt: 'Portrait of Majd Al-Meskawi',
      open: 'Open', copied: 'Email copied', copy: 'Copy email address'
    }
  };

  var root = document.documentElement;
  var lang = 'ar';
  var toastTimer;

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function svgIcon(path) {
    return '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false"><path fill="currentColor" d="' + path + '"/></svg>';
  }
  var MAIL_SVG = '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';
  var GLOBE_SVG = '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
  var ARROW_SVG = '<svg class="arrow" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  var COPY_SVG = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';

  function buildCards() {
    var ul = document.getElementById('cards');
    ul.innerHTML = '';
    CONTACTS.forEach(function (c) {
      var li = document.createElement('li');
      li.className = 'card-wrap' + (c.wide ? ' card-wrap--wide' : '') + (c.full ? ' card-wrap--full' : '');
      li.style.setProperty('--brand', c.color);
      var a = document.createElement('a');
      a.className = 'card card--' + c.id;
      a.href = c.href;
      a.setAttribute('data-id', c.id);
      if (c.external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      a.innerHTML =
        '<span class="card__icon' + (c.darkIcon ? ' card__icon--dark' : '') + '">' + (c.id === 'email' ? MAIL_SVG : c.id === 'website' ? GLOBE_SVG : svgIcon(ICONS[c.id])) + '</span>' +
        '<span class="card__text"><span class="card__name" data-card="' + c.id + '"></span>' +
        (c.sub ? '<span class="card__sub" dir="ltr">' + c.sub + '</span>' : '') + '</span>' +
        ARROW_SVG;
      li.appendChild(a);
      if (c.id === 'email') {
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'copy-btn'; b.innerHTML = COPY_SVG;
        b.addEventListener('click', function (e) {
          e.preventDefault(); e.stopPropagation();
          copyEmail();
        });
        li.appendChild(b);
      }
      ul.appendChild(li);
    });
  }

  function copyEmail() {
    var addr = 'almeskawimajd@gmail.com';
    var done = function () { showToast(I18N[lang].copied); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(addr).then(done, fallback);
    } else { fallback(); }
    function fallback() {
      var t = document.createElement('textarea');
      t.value = addr; t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); done(); } catch (e) {}
      document.body.removeChild(t);
    }
  }

  function showToast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 1800);
  }

  /* Ticker: two identical halves, each wide enough to cover the viewport */
  function buildTicker() {
    var track = document.getElementById('tickerTrack');
    var text = I18N[lang].ticker;
    var unit = '<span class="ticker__item">' + text + '</span><span class="ticker__sep">&#9992;</span>';
    track.innerHTML = '<div class="ticker__half"></div><div class="ticker__half"></div>';
    var halves = track.children;
    var need = Math.max(window.innerWidth, 360);
    var html = unit;
    halves[0].innerHTML = html;
    var guard = 0;
    while (halves[0].scrollWidth < need && guard++ < 40) { html += unit; halves[0].innerHTML = html; }
    halves[1].innerHTML = html;
  }

  function applyLang(l) {
    lang = l;
    var d = I18N[l];
    root.lang = l;
    root.dir = l === 'ar' ? 'rtl' : 'ltr';
    document.title = d.title;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n'); if (d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll('[data-card]').forEach(function (el) { el.textContent = d[el.getAttribute('data-card')]; });
    document.querySelectorAll('.card').forEach(function (a) {
      var id = a.getAttribute('data-id');
      var sub = a.querySelector('.card__sub');
      a.setAttribute('aria-label', d[id] + (sub ? ' - ' + sub.textContent : ''));
    });
    var cb = document.querySelector('.copy-btn');
    if (cb) { cb.setAttribute('aria-label', d.copy); cb.title = d.copy; }
    document.getElementById('langLabel').textContent = d.langBtn;
    var lb = document.getElementById('langBtn');
    lb.setAttribute('aria-label', d.langAria); lb.title = d.langAria;
    var tb = document.getElementById('themeBtn');
    tb.setAttribute('aria-label', d.themeAria); tb.title = d.themeAria;
    document.getElementById('avatarImg').alt = d.avatarAlt;
    store('lang', l);
    buildTicker();
  }

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    store('theme', t);
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', t === 'dark' ? '#14090c' : '#800020');
    document.getElementById('themeBtn').setAttribute('aria-pressed', String(t === 'dark'));
  }

  /* Site-wide background video: starts muted/inline; falls back to the static
     background image (already painted behind it) if it can't or shouldn't play. */
  function initBgVideo() {
    var v = document.getElementById('bgVideo');
    if (!v) return;
    var drop = function () { root.classList.remove('has-video'); if (v.parentNode) v.parentNode.removeChild(v); };
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var c = navigator.connection || {};
    if (reduce || c.saveData) { drop(); return; }
    v.muted = true; v.defaultMuted = true; v.setAttribute('muted', '');
    var on = function () { root.classList.add('has-video'); };
    v.addEventListener('playing', on);
    v.addEventListener('error', drop, true);          /* missing/unsupported file */
    var src = v.querySelector('source');
    if (src) src.addEventListener('error', drop);
    var p = v.play();
    if (p && p.catch) p.catch(function () {            /* autoplay blocked (e.g. low-power mode) */
      var retry = function () { v.play().then(on, function () {}); };
      ['touchstart', 'click', 'scroll'].forEach(function (e) { window.addEventListener(e, retry, { once: true, passive: true }); });
    });
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden && v.paused && root.classList.contains('has-video')) v.play().catch(function () {});
    });
  }

  function init() {
    initBgVideo();
    buildCards();
    document.getElementById('year').textContent = new Date().getFullYear();
    applyTheme(root.getAttribute('data-theme') || 'light');
    applyLang(load('lang') === 'en' ? 'en' : 'ar');
    document.getElementById('langBtn').addEventListener('click', function () { applyLang(lang === 'ar' ? 'en' : 'ar'); });
    document.getElementById('themeBtn').addEventListener('click', function () {
      root.classList.add('theme-anim');
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      setTimeout(function () { root.classList.remove('theme-anim'); }, 450);
    });
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(buildTicker, 250); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(buildTicker);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
