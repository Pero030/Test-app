export function getAppPathname() {
  const base = import.meta.env.BASE_URL || "/";
  const pathname = decodeURI(window.location.pathname);

  if (base !== "/" && pathname.startsWith(base)) {
    return `/${pathname.slice(base.length)}`;
  }

  return pathname;
}

export function appUrl(path = "") {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
}
