## 1. Tour Data

- [x] 1.1 Add optional `meetingPoint` and `endingPoint` fields to the tour content schema.
- [x] 1.2 Add Spanish Soul of Granada values: `Plaza del Carmen, junto al Ayuntamiento` and `Plaza Nueva`.
- [x] 1.3 Add English Soul of Granada values: `Plaza del Carmen, next to the City Hall` and `Plaza Nueva`.

## 2. Tour Detail Presentation

- [x] 2.1 Render a separate small card below the main route description card when `meetingPoint` and `endingPoint` exist.
- [x] 2.2 Localize the labels as `Punto de encuentro` / `Final de la ruta` in Spanish and `Meeting point` / `End of the route` in English.
- [x] 2.3 Verify tours without these optional fields do not display an empty route-point card.

## 3. Validation

- [x] 3.1 Run `npm run check` and verify there are no Astro, TypeScript, or content collection errors.
- [x] 3.2 Run `npm run build` and verify the production build succeeds.
- [x] 3.3 Inspect generated Spanish and English Soul of Granada pages and verify the card appears below the description card.
- [x] 3.4 Inspect at least one unrelated tour page and verify it does not show the route-point card.
- [x] 3.5 Run `openspec validate add-soul-granada-route-points --type change --strict` and verify the OpenSpec change is valid.
