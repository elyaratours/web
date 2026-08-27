## Why

The Spanish and English localized home hero copy needs to use the newly approved positioning: Granada beyond the postcard. The current `heroText` is also reused in the global footer, so the implementation must update the hero without changing the existing footer text.

## What Changes

- Update the Spanish localized home hero title to `Granada, más allá de la postal`.
- Update the Spanish localized home hero body text to `Tours privados y rutas a pie para descubrir la historia, los personajes y los rincones que dan sentido a la ciudad.`.
- Update the English localized home hero title to `Granada, beyond the postcard`.
- Update the English localized home hero body text to `Private tours and walking experiences that reveal the history, characters and hidden corners behind the city`.
- Add separate localized footer intro copy so the footer preserves the previous text after `heroText` changes.
- Keep existing hero layout, image, calls to action, routing, and sections unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: The localized home hero must display the approved Spanish and English copy while the footer keeps its existing localized intro copy.

## Impact

- Affected copy: localized home config in `src/lib/i18n.ts`.
- Affected layout: `src/layouts/BaseLayout.astro` should read footer intro copy from a footer-specific key instead of `heroText`.
- Affected SEO: localized home page SEO titles continue to use the updated `heroTitle`.
- No changes to images, routes, tour content, blog content, contact pages, dependencies, booking, payment, API, or backend behavior.
