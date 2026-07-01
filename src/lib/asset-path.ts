const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a root-relative asset path with the site's basePath.
 *
 * next/image with `images.unoptimized: true` does not automatically
 * prepend basePath to `src`, so static assets referenced by absolute
 * path (e.g. "/logo.svg") must be resolved through this helper to load
 * correctly when the site is deployed under a subpath (e.g. GitHub Pages
 * project sites at "/cryptocoin-site").
 */
export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
