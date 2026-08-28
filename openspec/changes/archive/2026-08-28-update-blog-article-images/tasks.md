## 1. Image Asset

- [x] 1.1 Verify the sunset photo exists at `public/images/sunset.jpeg` and is usable as the final path referenced by the Albaicin article frontmatter.
- [x] 1.2 Add or verify the granado photo at `public/images/granada-pomegranates.jpeg` and verify the final file exists at the path used by the pomegranate article frontmatter.

## 2. Article Frontmatter

- [x] 2.1 Update `src/content/blog/es/es-albaicin-atardecer.md` so `image` points to `/images/sunset.jpeg` and `imageAlt` is localized Spanish text, and verify the title, slug, body, category, related tours, order, and publication status are unchanged.
- [x] 2.2 Update `src/content/blog/en/en-albaicin-sunset.md` so `image` points to `/images/sunset.jpeg` and `imageAlt` is localized English text, and verify the title, slug, body, category, related tours, order, and publication status are unchanged.
- [x] 2.3 Update `src/content/blog/es/es-granada-granadas.md` so `image` points to `/images/granada-pomegranates.jpeg` and `imageAlt` is localized Spanish text, and verify the title, slug, body, category, related tours, order, and publication status are unchanged.
- [x] 2.4 Update `src/content/blog/en/en-granada-pomegranates.md` so `image` points to `/images/granada-pomegranates.jpeg` and `imageAlt` is localized English text, and verify the title, slug, body, category, related tours, order, and publication status are unchanged.

## 3. Validation

- [x] 3.1 Run `npm run check` and verify the content collection accepts all updated article entries with no Astro or TypeScript errors.
- [x] 3.2 Inspect the Spanish and English blog listing/detail behavior in the generated pages or dev server and verify the selected photos appear for all target articles without component changes.
