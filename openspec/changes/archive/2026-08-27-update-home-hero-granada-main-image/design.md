## Context

The site is a static Astro tourism website with localized home pages generated from `src/pages/[locale]/index.astro`. The Spanish and English home pages share the same hero markup and localized text from `src/lib/i18n.ts`. The current hero image is hardcoded in the page, and its `alt` text is also hardcoded in English.

The requested image already exists under `public/images/Granada-main.jpeg` and can be served as `/images/Granada-main.jpeg` from the GitHub Pages root-path deployment.

## Goals / Non-Goals

**Goals:**
- Use `/images/Granada-main.jpeg` as the hero image for both `/es/` and `/en/`.
- Add `heroImageAlt` to the localized copy config with Spanish and English text.
- Preserve the existing shared localized home page structure and visual layout.
- Use exact filename casing for GitHub Pages compatibility.

**Non-Goals:**
- Change the root `/` landing page image.
- Redesign the hero, cards, spacing, cropping, typography, or calls to action.
- Rename, convert, compress, or move the provided JPEG asset.
- Change tour, blog, contact, booking, API, or backend behavior.

## Decisions

- Keep the hero image path in `src/pages/[locale]/index.astro` because there is only one approved shared image for both localized home pages.
  Alternative considered: add a localized `heroImage` field. Rejected as unnecessary until different images per locale are needed.

- Move the hero image `alt` into `src/lib/i18n.ts` as `heroImageAlt`.
  Alternative considered: keep a single hardcoded `alt` value. Rejected because the home page is localized and the current hardcoded English text is not ideal for the Spanish page.

- Reference the JPEG directly with exact case.
  Alternative considered: convert to WebP/AVIF. Rejected because the user explicitly requested the provided `public/images/Granada-main.jpeg` file and no asset optimization was requested.

## Risks / Trade-offs

- The JPEG is vertical and the hero renders with `object-cover`, so visual cropping should be checked after implementation.
- The filename contains an uppercase `G`; the implementation must use `/images/Granada-main.jpeg` exactly to avoid 404s on case-sensitive hosting.
- The JPEG may be less optimized than WebP/AVIF, but this change prioritizes the approved provided image.
