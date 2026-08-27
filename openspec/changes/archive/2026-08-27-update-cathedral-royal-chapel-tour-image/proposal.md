## Why

The Spanish tour `Catedral y Capilla Real` and the English tour `Cathedral and Royal Chapel` need to use the provided `23.jpg` image so their public imagery matches the approved cathedral interior photo instead of the generic cathedral facade image.

## What Changes

- Reuse the existing public image asset `public/images/23.jpg`.
- Update the Spanish `Catedral y Capilla Real` tour entry to reference `/images/23.jpg` in its `image` metadata.
- Update the English `Cathedral and Royal Chapel` tour entry to reference `/images/23.jpg` in its `image` metadata.
- Update both entries' `imageAlt` text to describe the cathedral interior photo.
- Keep the existing shared tour catalog and detail page rendering unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: The localized Cathedral and Royal Chapel tour entries must display the approved `23.jpg` image wherever those tours' images are rendered.

## Impact

- Affected content: Spanish and English Cathedral and Royal Chapel tour content entries.
- Affected assets: uses existing `public/images/23.jpg`.
- Affected UI: existing catalog cards and tour detail pages that render each tour's `image` field.
- No routing, template, dependency, booking, payment, API, or backend changes.
