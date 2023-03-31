export function isExternalURL(href?: string) {
  if (typeof href === 'undefined') {
    return false;
  }

  const isMailToHref = String(href).match(/^mailto:/) !== null;
  const isRelativeHref = String(href).match(/^\//) !== null;

  return !isMailToHref && !isRelativeHref;
}
