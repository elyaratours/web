## Why

The Spanish tour `El alma de Granada` and the English tour `Albaicin and Hidden Viewpoints` need to use the provided `almagranada.jpg` image so their public imagery matches the approved tour presentation instead of the generic Albaicin lane image.

## What Changes

- Reuse the existing public image asset `public/images/almagranada.jpg`.
- Update the Spanish `El alma de Granada` tour entry to reference `/images/almagranada.jpg` in its `image` metadata.
- Update the English `Albaicin and Hidden Viewpoints` tour entry to reference `/images/almagranada.jpg` in its `image` metadata.
- Keep the existing shared tour catalog and detail page rendering unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: The localized Albaicin/Alma de Granada tour entries must display the approved `almagranada.jpg` image wherever those tours' images are rendered.

## Impact

- Affected content: Spanish and English Albaicin tour content entries.
- Affected assets: no new asset; uses existing `public/images/almagranada.jpg`.
- Affected UI: existing catalog cards and tour detail pages that render each tour's `image` field.
- No routing, template, dependency, booking, payment, API, or backend changes.
