export default function isInternalHref(href: string | undefined) {
  if (typeof href === 'undefined' || typeof process.env.PRIMARY_SITE_URL === 'undefined') {
    return false;
  }

  return String(href).match(/^\//) !== null || href.includes(process.env.PRIMARY_SITE_URL);
}
