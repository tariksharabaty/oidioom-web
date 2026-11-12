// ─── oidioom.com · showcase/sanitize_url.js ───
// EN: Allows only safe URL schemes for links and images.
//     Used when rendering profile links and avatars.
// TR: Bağlantı ve görseller için yalnızca güvenli URL şemalarına izin verir.
//     Profil bağlantıları ve avatarlar gösterilirken kullanılır.
// Excerpt only — the full source code is private. / Yalnızca alıntıdır, tam kaynak kod kapalıdır.

function sanitizeUrl(url) {
  if (!url || typeof url !== 'string') return '';
  const t = url.trim();
  const ok = ['https://', 'http://', 'data:image/', './', '../', '/'];
  return ok.some(p => t.startsWith(p)) ? escapeHtml(t) : '';
}
