## 1. Home Card Filtering

- [x] 1.1 Add a Home-only filtered local tour collection that excludes `translationKey: cathedral-royal-chapel`, and verify the filter covers both Spanish and English entries.
- [x] 1.2 Render the Home route-card grid from the filtered collection, and verify `Catedral y Capilla Real` and `Cathedral and Royal Chapel` no longer appear in the Home cards.

## 2. Preserve Non-Home Behavior

- [x] 2.1 Keep the Home reservation calendar data source unchanged, and verify the calendar still receives the existing combined tour list.
- [x] 2.2 Keep tour detail URLs and non-Home discovery behavior unchanged, and verify the Cathedral/Royal Chapel tour detail pages still build in Spanish and English.

## 3. Structured Data And Verification

- [x] 3.1 Align the Home tour `ItemList` JSON-LD with the filtered visible Home route-card grid, and verify the hidden tour is not listed there.
- [x] 3.2 Run `npm run check` and verify there are no Astro or TypeScript diagnostics.
- [x] 3.3 Run `npm run build` and verify the static site builds successfully.
- [x] 3.4 Inspect generated Spanish and English Home HTML to verify the Cathedral/Royal Chapel card is absent while the tour detail pages still exist.
