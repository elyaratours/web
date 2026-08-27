## Why

The Spanish tour `Alhambra: símbolos, poder y belleza` and the English tour `Essential Alhambra at Sunset` need to use the provided `alhambra.jpg` image so their public imagery matches the approved Alhambra photo instead of the generic courtyard image.

## What Changes

- Reuse the existing public image asset `public/images/alhambra.jpg`.
- Update the Spanish `Alhambra: símbolos, poder y belleza` tour entry to reference `/images/alhambra.jpg` in its `image` metadata.
- Update the English `Essential Alhambra at Sunset` tour entry to reference `/images/alhambra.jpg` in its `image` metadata.
- Keep the existing shared tour catalog and detail page rendering unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: The localized essential Alhambra tour entries must display the approved `alhambra.jpg` image wherever those tours' images are rendered.

## Impact

- Affected content: Spanish and English essential Alhambra tour content entries.
- Affected assets: uses `public/images/alhambra.jpg`.
- Affected UI: existing catalog cards and tour detail pages that render each tour's `image` field.
- No routing, template, dependency, booking, payment, API, or backend changes.
