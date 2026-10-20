/* No guest/staff credentials or transcript access in the host page. */
(() => {
  'use strict';
  const launcher = document.querySelector('[data-vigil-open]');
  const dialog = document.getElementById('vigil-chat');
  if (!launcher || !dialog || typeof dialog.showModal !== 'function') return;
  const url = dialog.dataset.vigilUrl;
  if (!/^https:\/\/app\.vigilcc\.com\/widget\/[A-Za-z0-9_-]{32}$/.test(url || '')) return;
  let frame;
  launcher.hidden = false;
  launcher.addEventListener('click', () => {
    if (!frame) {
      frame = document.createElement('iframe');
      frame.title = 'NEXT3LABS website support chat';
      frame.referrerPolicy = 'no-referrer';
      frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups');
      frame.src = url;
      dialog.querySelector('[data-vigil-frame]').append(frame);
    }
    if (!dialog.open) dialog.showModal();
    launcher.setAttribute('aria-expanded', 'true');
  });
  dialog.querySelector('[data-vigil-close]').addEventListener('click', () => dialog.close());
  // Static presentation actions only. No guest credentials, messages or staff
  // authority cross the frame boundary. Old widgets retain the fallback chrome.
  window.addEventListener('message', event => {
    if (!frame || event.origin !== 'https://app.vigilcc.com' || event.source !== frame.contentWindow) return;
    const type = event.data && event.data.type;
    if (type === 'vigil:ready') {
      const contact = dialog.querySelector('[data-vigil-contact]');
      frame.contentWindow.postMessage({type:'vigil:host-ready',contactAvailable:!!contact}, 'https://app.vigilcc.com');
      dialog.classList.add('vigil-chat--integrated');
    } else if (type === 'vigil:close') {
      dialog.close();
    } else if (type === 'vigil:contact') {
      const contact = dialog.querySelector('[data-vigil-contact]');
      if (contact && /^mailto:[^\s<>]+@[^\s<>]+$/.test(contact.getAttribute('href') || '')) contact.click();
    }
  });
  dialog.addEventListener('close', () => {
    launcher.setAttribute('aria-expanded', 'false');
    launcher.focus();
  });
})();
