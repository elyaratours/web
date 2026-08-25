## Why

The current catalog has a small initial set of tours, but Elyara now needs four additional Granada experiences to better cover viewpoints, legends, cultural transitions, the Alhambra beyond palace highlights, and the Cathedral/Royal Chapel itinerary. Adding these as data-driven entries expands the offer without changing the static site architecture.

## What Changes

- Add four additional Spanish tour entries:
  - `Granada entre miradores y leyendas`
  - `Granada entre dos mundos`
  - `La Alhambra más allá de los palacios`
  - `Catedral y Capilla Real`
- Add matching English localized tour entries:
  - `Granada Viewpoints and Legends`
  - `Granada Between Two Worlds`
  - `The Alhambra Beyond the Palaces`
  - `Cathedral and Royal Chapel`
- Keep the three existing tours intact; these are additional catalog items.
- Use the existing Astro Content Collections tour model and generated tour pages.
- Provide localized route slugs, SEO descriptions, images, image alt text, duration, price, language metadata, ordering, and WhatsApp reservation URLs for each new tour.
- Use existing public images unless new approved tour imagery is provided separately.
- Start the four new tours as non-featured catalog entries ordered after the existing tours.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Extend the data-driven tour catalog with four additional localized tour offerings.

## Impact

- Affected content: new Markdown entries under `src/content/tours/es/` and `src/content/tours/en/`.
- Affected generated pages: new localized tour detail URLs and catalog cards.
- No changes to routing templates, reservations architecture, dependencies, backend behavior, accounts, checkout, or payment flow.
