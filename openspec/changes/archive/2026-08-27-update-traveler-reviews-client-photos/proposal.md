## Why

The Spanish `Opiniones de nuestros viajeros` section and the English `Travelers who walked Granada with us` section need to use the three newly provided client photos instead of the current placeholder group photos, so the public home mosaic reflects the approved traveler imagery.

## What Changes

- Reuse the existing public image assets `public/images/foto-clientes-1.jpeg`, `public/images/Foto-clientes-2.jpeg`, and `public/images/Foto-clientes-3.jpeg`.
- Replace the three current traveler-review mosaic photo URLs with the three approved client photo URLs.
- Keep the existing review cards, localized section titles, popup behavior, and responsive mosaic layout unchanged.
- Update localized `alt` and `caption` text only if needed to match the new photos accurately.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: The localized traveler reviews mosaic must display the approved client photos in Spanish and English home experiences.

## Impact

- Affected content: traveler reviews mosaic data in `src/lib/reviews.ts`.
- Affected assets: uses existing files in `public/images/` with case-sensitive public URLs.
- Affected UI: existing Spanish and English home review mosaic photo cards and photo popups.
- No routing, template, dependency, booking, payment, API, or backend changes.
