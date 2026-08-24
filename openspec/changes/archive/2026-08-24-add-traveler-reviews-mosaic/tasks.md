## 1. Content And Assets

- [x] 1.1 Define the initial review/photo mosaic content model with stable ids, item type, localized ES/EN copy, traveler attribution, image paths, and image alt text; verify TypeScript checking accepts the structure.
- [x] 1.2 Add the initial approved group photo assets using web-friendly formats and verify every photo referenced by the content model exists under the public assets path.
- [x] 1.3 Add short visible excerpts and full popup text for each review in Spanish and English, using adapted translations; verify no placeholder reviews, social counters, statistics, or booking widgets are included.

## 2. Reviews Mosaic UI

- [x] 2.1 Create a dedicated traveler reviews mosaic component that accepts the active locale and renders the localized section title; verify Spanish shows "Opiniones de nuestros viajeros" and English shows "Travelers who walked Granada with us".
- [x] 2.2 Implement the compact mosaic layout that interleaves review cards and group photo items; verify desktop uses an editorial mosaic and mobile uses two columns.
- [x] 2.3 Keep review cards readable with short excerpts in the mosaic; verify long review text appears only in the popup content.

## 3. Popup Interaction

- [x] 3.1 Implement click/tap expansion for photo items; verify activating a photo opens a popup with the enlarged image and accessible text.
- [x] 3.2 Implement click/tap expansion for review items; verify activating a review opens a popup with the full localized review and traveler attribution.
- [x] 3.3 Add accessible close behavior for the popup; verify it can be closed with a visible close control, backdrop interaction, and the Escape key.

## 4. Page Integration

- [x] 4.1 Add the mosaic section after the tours catalog on the Spanish and English localized home pages; verify the section appears below tours on `/es/` and `/en/`.
- [x] 4.2 Preserve the existing tourism visual language and spacing; verify the new section matches the current warm card, serif, and Granada-focused styling rather than a generic testimonial layout.

## 5. Verification

- [x] 5.1 Run `npm run check` and verify it succeeds.
- [x] 5.2 Run `npm run build` and verify the static build succeeds.
- [x] 5.3 Manually verify desktop and mobile rendering, including the two-column mobile mosaic and popup behavior for both photos and reviews.
- [x] 5.4 Run `openspec validate add-traveler-reviews-mosaic --type change --strict` and verify the change passes validation.
