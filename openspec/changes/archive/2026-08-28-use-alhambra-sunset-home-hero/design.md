## Context

See `proposal.md` for motivation. The localized home hero image is rendered in `src/pages/[locale]/index.astro` using `/images/Granada-main.jpeg`, while localized alternative text comes from `src/lib/i18n.ts`. The current OpenSpec contract explicitly names `/images/Granada-main.jpeg`, so this change updates that contract to the selected cloudy Alhambra asset path.

The selected replacement image is a wide Alhambra view beneath clouds. The existing hero image container uses a fixed height and `object-cover`, so the implementation should preserve the existing layout while ensuring the Alhambra remains visible.

## Goals / Non-Goals

**Goals:**

- Add the provided image as a new public asset named `/images/alhambra-clouds.jpeg`.
- Use that asset on both `/es/` and `/en/`.
- Update Spanish and English alt text to accurately describe the selected image.
- Frame the image so the visible Alhambra remains prominent in the existing hero card.

**Non-Goals:**

- Replace the root landing page image at `/`.
- Remove or rename `public/images/Granada-main.jpeg` as part of this change.
- Redesign the localized home layout or change hero copy, calls to action, tours, tailor-made content, reviews, routing, or booking behavior.

## Decisions

- Use a new filename instead of replacing `Granada-main.jpeg` in place.
  - Rationale: a content-based filename is clearer and avoids browser cache confusion around the old asset URL.
  - Alternative considered: overwrite `Granada-main.jpeg`. This is less code but keeps a generic name and may show stale imagery locally or in production caches.

- Use a single shared image reference in the localized home page.
  - Rationale: the ES and EN pages should now display the same selected image, so a conditional locale switch would add unnecessary complexity.
  - Alternative considered: keep locale-specific image selection. This is no longer needed because both locales should use `/images/alhambra-clouds.jpeg`.

- Keep the cloudy Alhambra view centered in the existing hero image container unless visual verification shows it needs adjustment.
  - Rationale: the selected image is already centered on the Alhambra and works with the existing `object-cover` treatment.
  - Alternative considered: use bottom-oriented positioning from the previous sunset image. This is unnecessary for the cloudy Alhambra image and could overemphasize the lower foreground.

## Risks / Trade-offs

- The provided image may still crop differently across viewport widths -> verify `/es/` and `/en/` at desktop and mobile widths, and adjust `object-position` if needed.
- Keeping the old `Granada-main.jpeg` leaves unused media in `public/images` -> defer removal unless a separate cleanup confirms no remaining references.
- The image supplied through the chat must be available as a local file during implementation -> save it as `public/images/alhambra-clouds.jpeg` before updating references.

## Migration Plan

- Add the replacement image to `public/images/alhambra-clouds.jpeg`.
- Update the localized home page image reference and remove unnecessary locale-specific image selection.
- Update `heroImageAlt` for Spanish and English.
- Run checks/build and verify both localized home pages use the cloudy Alhambra image while `/` remains unchanged.
