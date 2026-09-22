## Why

The public Alhambra tour price has been reduced and the localized tour entries need the product contract to reflect the new visible price consistently.

## What Changes

- Update the Spanish `Alhambra: símbolos, poder y belleza` tour price from `Desde 150 EUR por grupo, entradas no incluidas` to `Desde 120 EUR por grupo, entradas no incluidas`.
- Update the English `Alhambra: Symbols, Power and Beauty` tour price from `From €150 per group, tickets not included` to `From €120 per group, tickets not included`.
- Keep the existing duration, reservation flow, route slug, imagery, and ticket caveat unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: The localized Alhambra tour entries must display the updated group price while preserving the existing ticket-exclusion caveat.

## Impact

- Affected content: Spanish and English Alhambra tour Markdown entries.
- Affected UI: existing tour catalog cards and tour detail pages that render each tour's `price` field.
- No routing, template, dependency, booking, payment, API, or backend changes.
