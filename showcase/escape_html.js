// ─── oidioom.com · showcase/escape_html.js ───
// EN: Escapes user-provided text before it is rendered into the page (XSS protection).
//     Used by every page that shows usernames, bios or other user data.
// TR: Kullanıcıdan gelen metni sayfaya basmadan önce güvenli hale getirir (XSS koruması).
//     Kullanıcı adı, biyografi gibi kullanıcı verisi gösteren tüm sayfalarda kullanılır.
// Excerpt only — the full source code is private. / Yalnızca alıntıdır, tam kaynak kod kapalıdır.

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
