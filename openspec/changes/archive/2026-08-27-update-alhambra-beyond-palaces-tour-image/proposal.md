## Why

The Spanish tour `La Alhambra más allá de los palacios` and the English tour `The Alhambra Beyond the Palaces` need to use the provided `puerta-del-vino-01.jpg` image so their public imagery matches the approved Puerta del Vino photo instead of the generic Alhambra courtyard image.

## What Changes

- Reuse the existing public image asset `public/images/puerta-del-vino-01.jpg`.
- Update the Spanish `La Alhambra más allá de los palacios` tour entry to reference `/images/puerta-del-vino-01.jpg` in its `image` metadata.
- Update the English `The Alhambra Beyond the Palaces` tour entry to reference `/images/puerta-del-vino-01.jpg` in its `image` metadata.
- Keep the existing shared tour catalog and detail page rendering unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: The localized Alhambra beyond the palaces tour entries must display the approved `puerta-del-vino-01.jpg` image wherever those tours' images are rendered.

## Impact

- Affected content: Spanish and English Alhambra beyond the palaces tour content entries.
- Affected assets: uses `public/images/puerta-del-vino-01.jpg`.
- Affected UI: existing catalog cards and tour detail pages that render each tour's `image` field.
- No routing, template, dependency, booking, payment, API, or backend changes.
