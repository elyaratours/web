## Context

The site is a static Astro tourism website with a localized traveler reviews mosaic on the home page. The mosaic data lives in `src/lib/reviews.ts` and already supports interleaved review items and photo items through `ReviewMosaicItem`. Photo items are rendered by `TravelerReviewsMosaic.astro` using the item `image`, localized `alt`, and localized `caption` fields.

The requested photos already exist under `public/images/` and can be referenced directly as root-relative public paths.

## Goals / Non-Goals

**Goals:**
- Replace the three current mosaic photo assets with `/images/foto-clientes-1.jpeg`, `/images/Foto-clientes-2.jpeg`, and `/images/Foto-clientes-3.jpeg`.
- Preserve the existing ES title `Opiniones de nuestros viajeros` and EN title `Travelers who walked Granada with us`.
- Preserve the existing review items, popup behavior, and responsive layout.
- Use exact filename casing for GitHub Pages compatibility.

**Non-Goals:**
- Add more than three photo cards.
- Redesign the mosaic, cards, modal, cropping, or home page layout.
- Rename, convert, compress, or move the provided JPEG assets.
- Change review text, traveler names, routes, navigation, booking, APIs, or backend behavior.

## Decisions

- Replace the existing three photo item URLs instead of adding three more items.
  Alternative considered: append the three new photos while keeping existing group photos. Rejected because the requested behavior is to substitute the current three photos.

- Keep the change data-driven in `src/lib/reviews.ts`.
  Alternative considered: special-case the images in `TravelerReviewsMosaic.astro`. Rejected because the component already renders photo data correctly and should stay reusable.

- Use the public URLs with exact case.
  Alternative considered: normalize filenames to lowercase. Rejected because the user specified the existing files, and renaming assets is unnecessary for this content change.

## Risks / Trade-offs

- Two filenames begin with uppercase `Foto`, so the implementation must use exact casing to avoid 404s on case-sensitive hosting.
- The JPEG files are larger than optimized WebP/AVIF assets, but this change prioritizes the approved provided photos.
- If a new photo's content differs from the existing captions, captions and alt text should be updated during apply for accessibility accuracy.
