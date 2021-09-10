export default function isInternalHref(href: string | undefined) {
  const PRIMARY_SITE_URL = process.env.NEXT_PUBLIC_PRIMARY_SITE_URL;

  if (typeof href === 'undefined' || typeof PRIMARY_SITE_URL === 'undefined') {
    return false;
  }

  const isInternalAbsoluteHref = href.includes(PRIMARY_SITE_URL);
  const isMailToHref = String(href).match(/^mailto:/) !== null;
  const isRelativeHref = String(href).match(/^\//) !== null;

  return isInternalAbsoluteHref || isMailToHref || isRelativeHref;
}
