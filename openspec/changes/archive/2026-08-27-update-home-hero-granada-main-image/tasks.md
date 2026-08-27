## 1. Localized Home Hero Update

- [x] 1.1 Verify `public/images/Granada-main.jpeg` exists with exact filename casing.
- [x] 1.2 Add localized `heroImageAlt` copy in `src/lib/i18n.ts` for Spanish and English.
- [x] 1.3 Update `src/pages/[locale]/index.astro` to use `/images/Granada-main.jpeg` for the hero image.
- [x] 1.4 Update the hero image `alt` attribute to use `copy.heroImageAlt`.
- [x] 1.5 Confirm the root `/` landing page image remains unchanged.

## 2. Verification

- [x] 2.1 Run `openspec validate update-home-hero-granada-main-image --type change --strict` and verify the change is valid.
- [x] 2.2 Run `npm run check` and verify Astro validation passes.
- [x] 2.3 Run `npm run build` and verify localized home pages build successfully.
- [x] 2.4 Verify `dist/images/Granada-main.jpeg` exists after build.
- [ ] 2.5 Manually review `/es/` and `/en/` in local preview to confirm the hero image loads and cropping is acceptable.
