## Why

The localized home page is shared by Spanish and English routes, but the three introductory experience cards are currently hardcoded in Spanish. As a result, English visitors see Spanish copy for `Contexto historico`, `Ritmo caminable`, and `Reserva directa` on `/en/`.

## What Changes

- Add localized copy for the three home experience cards to `src/lib/i18n.ts`.
- Update `src/pages/[locale]/index.astro` so the experience cards render from localized copy instead of hardcoded Spanish strings.
- Preserve the existing Spanish meaning for `/es/`.
- Show English translations for `/en/`.
- Keep existing icons, layout, section order, routes, images, calls to action, and reservation behavior unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: The localized home experience cards must display Spanish copy on `/es/` and English copy on `/en/`.

## Impact

- Affected page: `src/pages/[locale]/index.astro`.
- Affected copy: localized config in `src/lib/i18n.ts`.
- No changes to images, tours, blog content, contact pages, routes, dependencies, booking, payment, API, or backend behavior.
