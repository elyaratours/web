## 1. Metadata And Sitemap

- [x] 1.1 Add production sitemap discovery, local geo metadata, theme color, and Open Graph image type metadata in the shared SEO head, verified with `npm run build` and generated HTML inspection.
- [x] 1.2 Update HTML `x-default` alternates to use the Spanish equivalent page when available, verified by inspecting generated localized pages.
- [x] 1.3 Add sitemap `lastmod` coverage and translated `x-default` sitemap alternates, verified by inspecting `dist/sitemap.xml` after `npm run build`.

## 2. Structured Data

- [x] 2.1 Add default share imagery for pages without page-specific images, verified by `npm run build` and generated blog/listing page metadata.
- [x] 2.2 Represent public images as JSON-LD `ImageObject` entries with known dimensions, verified by generated tour and landing page JSON-LD inspection.
- [x] 2.3 Enrich business, article, service, and tour structured data with approved business facts, author URL, and EUR offer metadata only when derived from visible price text, verified by generated HTML inspection.

## 3. Verification

- [x] 3.1 Run `npm run check` and verify there are no Astro or TypeScript diagnostics.
- [x] 3.2 Run `npm run build` and verify the static site builds successfully.
- [x] 3.3 Run `git diff --check` and verify the changed files have no whitespace errors.
