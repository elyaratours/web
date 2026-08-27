## Why

The Spanish tour `Granada entre dos mundos` and the English tour `Granada Between Two Worlds` need to use the provided `centro-albayzin.jpg` image so their public imagery matches the approved center/Albayzin photo instead of the generic Granada cathedral image.

## What Changes

- Reuse the existing public image asset `public/images/centro-albayzin.jpg`.
- Update the Spanish `Granada entre dos mundos` tour entry to reference `/images/centro-albayzin.jpg` in its `image` metadata.
- Update the English `Granada Between Two Worlds` tour entry to reference `/images/centro-albayzin.jpg` in its `image` metadata.
- Keep the existing shared tour catalog and detail page rendering unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: The localized Granada Between Two Worlds tour entries must display the approved `centro-albayzin.jpg` image wherever those tours' images are rendered.

## Impact

- Affected content: Spanish and English Granada Between Two Worlds tour content entries.
- Affected assets: uses existing `public/images/centro-albayzin.jpg`.
- Affected UI: existing catalog cards and tour detail pages that render each tour's `image` field.
- No routing, template, dependency, booking, payment, API, or backend changes.
