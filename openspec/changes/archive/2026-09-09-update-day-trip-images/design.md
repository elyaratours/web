## Context

Day-trip detail pages and cards read their images from the localized tour Markdown frontmatter. SEO/OpenGraph image dimensions are maintained in `src/lib/seo.ts` for known public image paths.

## Goals / Non-Goals

**Goals:**

- Store the two approved images as reusable public assets.
- Point both localized Malaga day-trip entries to the Malaga image.
- Point both localized Cordoba day-trip entries to the Cordoba image.
- Keep localized `imageAlt` values accurate for accessibility and social metadata.
- Preserve all current routes, layouts, CTAs, pricing, copy, and day-trip behavior.

**Non-Goals:**

- No visual redesign of cards, detail pages, landing pages, or navigation.
- No change to tour schema beyond using the existing `image` and `imageAlt` fields.
- No change to the day-trip landing hero unless separately requested.

## Decisions

### Use stable public image names

Add the provided images under `public/images/` with stable, descriptive names:

- `day-trip-malaga-granada.webp`
- `day-trip-cordoba-granada.webp`

Alternatives considered:

- Use generic names like `malaga.webp` and `cordoba.webp`: shorter, but less clear if future Malaga/Cordoba content is added.
- Reuse existing generic Granada images: avoids asset work, but does not satisfy the approved origin-specific imagery request.

### Update only tour entries, not components

Because cards, detail pages, SEO tags, and OpenGraph metadata already consume tour `image` and `imageAlt`, the implementation should update the four localized Markdown entries rather than changing rendering components.

Alternatives considered:

- Add conditional image logic in components: unnecessary and less maintainable.

### Register dimensions for metadata

Add both new image paths to `imageDimensions` in `src/lib/seo.ts` using their actual dimensions after the files are present. This keeps social image metadata consistent with existing site behavior.

## Risks / Trade-offs

- Attached images may not already exist in the repository -> Mitigate by adding them to `public/images/` during implementation before changing frontmatter.
- If image dimensions are recorded incorrectly, social metadata may be inaccurate -> Mitigate by checking file dimensions before updating `src/lib/seo.ts`.
- The filenames assume WebP output -> Mitigate by converting or saving the attached images as WebP during implementation; if conversion is unavailable, use the actual committed format and paths consistently.

## Migration Plan

1. Add the two approved image assets to `public/images/`.
2. Update the four day-trip Markdown entries with new image paths and localized alt text.
3. Register image dimensions in `src/lib/seo.ts`.
4. Run `npm run check`, `npm run build`, and OpenSpec validation.
