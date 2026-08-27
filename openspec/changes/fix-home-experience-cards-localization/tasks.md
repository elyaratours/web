## 1. Home Experience Card Localization

- [ ] 1.1 Add Spanish localized fields for the three experience card titles and descriptions in `src/lib/i18n.ts`.
- [ ] 1.2 Add English localized fields for the three experience card titles and descriptions in `src/lib/i18n.ts`.
- [ ] 1.3 Update `src/pages/[locale]/index.astro` so each card title reads from localized copy.
- [ ] 1.4 Update `src/pages/[locale]/index.astro` so each card description reads from localized copy.
- [ ] 1.5 Confirm icons, layout, section id, and order remain unchanged.

## 2. Verification

- [ ] 2.1 Run `openspec validate fix-home-experience-cards-localization --type change --strict` and verify the change is valid.
- [ ] 2.2 Run `npm run check` and verify Astro validation passes.
- [ ] 2.3 Run `npm run build` and verify localized home pages build successfully.
- [ ] 2.4 Manually review `/es/` and `/en/` in local preview to confirm the cards are localized correctly.
