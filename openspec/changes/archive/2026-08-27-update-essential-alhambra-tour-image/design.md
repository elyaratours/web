## Context

The site is a static Astro tourism website with localized, data-driven tour entries. Tour images are configured in Markdown frontmatter through the `image` field and rendered by shared catalog/detail templates. The requested image exists at `public/images/alhambra.jpg` and fits the content schema when referenced as `/images/alhambra.jpg`.

## Goals / Non-Goals

**Goals:**
- Use `/images/alhambra.jpg` for the Spanish `Alhambra: símbolos, poder y belleza` tour.
- Use `/images/alhambra.jpg` for the English `Essential Alhambra at Sunset` tour.
- Preserve the existing data-driven image metadata pattern.

**Non-Goals:**
- Redesign tour cards, detail pages, cropping, or shared templates.
- Convert or rename the provided JPEG asset.
- Change titles, descriptions, pricing, reservation links, route slugs, or SEO behavior.
- Add dependencies, routes, booking behavior, APIs, or backend features.

## Decisions

- Keep image selection in localized tour content metadata.
  Alternative considered: hard-code image selection in shared components. Rejected because tour imagery is already content-driven and should remain maintainable per locale.

- Reference the existing JPEG directly.
  Alternative considered: convert the asset to WebP or AVIF. Rejected for this change because the user specifically requested the existing `public/images/alhambra.jpg` file and no asset optimization was required.

- Update only the two requested localized entries.
  Alternative considered: update all Alhambra tour entries. Rejected because the requested scope names exactly two public tour titles.

## Risks / Trade-offs

- The JPEG may be less optimized than WebP/AVIF assets, but this change prioritizes the explicitly approved photo.
- Existing `imageAlt` text remains unchanged; if the new photo content differs significantly, a follow-up accessibility copy update may be needed.
- Browser/CDN caches can continue showing the old image until cache refresh after deployment.
