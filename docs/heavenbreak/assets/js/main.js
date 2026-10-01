(() => {
  'use strict';
  const config = window.HEAVENBREAK_CONFIG || {};
  const t = config.TEXT || {};
  const video = document.querySelector('.trailer video');
  video.addEventListener('error', () => { const note = document.querySelector('[data-video-error]'); note.textContent = t.videoFallback || 'Video unavailable. Please use the download link.'; note.hidden = false; });
  const select = (s) => document.querySelector(s);
  const selectAll = (s) => document.querySelectorAll(s);
  const menu = select('.menu-toggle');
  const nav = select('#navigation');
  const closeMenu = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
  document.addEventListener('click', (event) => { if (!event.target.closest('.header')) closeMenu(); });
  select('[data-year]').textContent = String(new Date().getFullYear());
  selectAll('[data-content]').forEach((node) => { const text = config.CONTENT?.[node.dataset.content]; if (typeof text === 'string') node.textContent = text; });
  let steamUrl;
  try { const url = new URL(config.STEAM_URL); if (url.protocol === 'https:' && url.hostname === 'store.steampowered.com' && /^\/app\/\d+(\/|$)/.test(url.pathname)) steamUrl = url.href; } catch (_) { /* 빈 주소는 준비 중으로 유지 */ }
  if (steamUrl) {
    selectAll('[data-steam]').forEach((a) => { a.href = steamUrl; a.target = '_blank'; a.rel = 'noopener noreferrer'; });
    selectAll('[data-steam-label]').forEach((n) => { n.textContent = config.STEAM_CTA || 'Steam에서 보기'; });
    select('[data-steam-note]').textContent = t.steamNote;
    select('[data-steam-message]').textContent = t.steamMessage;
    select('[data-store-status]').textContent = t.store;
  }
  if (config.CONTACT_EMAIL && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.CONTACT_EMAIL)) { const contact = select('[data-contact]'); contact.href = 'mailto:' + config.CONTACT_EMAIL; contact.hidden = false; }
  if (config.HERO_IMAGE) {
    const preload = new Image();
    preload.onload = () => { select('[data-hero]').style.backgroundImage = `url(${JSON.stringify(preload.src)})`; select('[data-art-label]').hidden = true; };
    preload.src = config.HERO_IMAGE;
  }
  if (config.LOGO_IMAGE) { const img = new Image(); img.alt = 'HEAVENBREAK'; img.className = 'logo-image'; img.onload = () => select('[data-logo]').replaceWith(img); img.src = config.LOGO_IMAGE; }
  if (Array.isArray(config.FEATURES) && config.FEATURES.length) {
    const grid = select('[data-features]'); grid.replaceChildren();
    config.FEATURES.forEach((item, i) => {
      const card = document.createElement('article'); card.className = 'feature';
      [['span','feature-number',String(i + 1).padStart(2,'0')],['p','eyebrow',item.category],['h3','',item.title],['p','',item.description]].forEach(([tag, cls, text]) => { const n = document.createElement(tag); n.className = cls; n.textContent = text || ''; card.append(n); });
      if (item.pending) { const pending = document.createElement('span'); pending.className = 'draft-label'; pending.textContent = t.pending; card.append(pending); }
      grid.append(card);
    });
  }
  const screenshots = Array.isArray(config.SCREENSHOTS) && config.SCREENSHOTS.length ? config.SCREENSHOTS : [{src:'',alt:'HEAVENBREAK',caption:'게임 화면'}];
  function media(item, index) {
    const placeholder = document.createElement('span'); placeholder.className = 'image-placeholder ' + (index % 3 === 1 ? 'variant-two' : index % 3 === 2 ? 'variant-three' : '');
    const title = document.createElement('span'); title.textContent = 'HEAVENBREAK';
    const note = document.createElement('small'); note.textContent = `SCREENSHOT ${String(index+1).padStart(2,'0')} / ${t.pending}`;
    placeholder.append(title,note);
    if (!item.src) return placeholder;
    const img = new Image(); img.alt = item.alt || t.galleryIntro; img.loading = 'lazy'; img.src = item.src; img.addEventListener('error', () => img.replaceWith(placeholder), {once:true}); return img;
  }
  const gallery = select('[data-gallery]'); gallery.replaceChildren();
  screenshots.forEach((item,index) => {
    const button = document.createElement('button'); button.className = 'gallery-item' + (index === 0 ? ' wide' : ''); button.setAttribute('aria-label', `${item.alt || item.caption || 'HEAVENBREAK'} — ${t.enlarge}`);
    const caption = document.createElement('span'); caption.className = 'gallery-caption'; caption.append(String(index+1).padStart(2,'0'));
    const label = document.createElement('span'); label.textContent = item.caption || '게임 화면'; const enlarge = document.createElement('span'); enlarge.textContent = t.enlarge; caption.append(label,enlarge); button.append(media(item,index),caption); button.addEventListener('click', () => openGallery(index,button)); gallery.append(button);
  });
  if (screenshots.every(item => item.src)) select('.gallery .section-head>p').textContent = t.galleryIntro;
  const dialog = select('.lightbox'); let current = 0; let opener;
  function renderGallery() { select('[data-lightbox-media]').replaceChildren(media(screenshots[current],current)); select('[data-lightbox-caption]').textContent = `${current+1} / ${screenshots.length} · ${screenshots[current].caption || '게임 화면'}`; }
  function openGallery(index,button) { current=index; opener=button; renderGallery(); dialog.showModal(); document.body.classList.add('no-scroll'); }
  const move = (direction) => { current = (current + direction + screenshots.length) % screenshots.length; renderGallery(); };
  select('[data-close]').addEventListener('click', () => dialog.close());
  select('[data-prev]').addEventListener('click', () => move(-1)); select('[data-next]').addEventListener('click', () => move(1));
  dialog.addEventListener('keydown', (event) => { if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } });
  dialog.addEventListener('click', (event) => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => { document.body.classList.remove('no-scroll'); opener?.focus(); });
})();
