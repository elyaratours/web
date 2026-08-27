## 1. Tailor-made Image Update

- [x] 1.1 Verify `public/images/mapa.png` exists with exact filename casing.
- [x] 1.2 Add localized map image alt text to `tailorMadeContent` in `src/lib/i18n.ts`.
- [x] 1.3 Update `src/components/TailorMadeHomeSection.astro` to use `/images/mapa.png` and localized alt text.
- [x] 1.4 Update `src/pages/[locale]/[customSlug].astro` to use `/images/mapa.png` for the Tailor-made page image and localized alt text.
- [x] 1.5 Update the Tailor-made page social preview image to `/images/mapa.png`.
- [x] 1.6 Confirm unrelated pages and route behavior remain unchanged.

## 2. Verification

- [x] 2.1 Run `openspec validate update-tailor-made-mapa-image --type change --strict` and verify the change is valid.
- [x] 2.2 Run `npm run check` and verify Astro validation passes.
- [x] 2.3 Run `npm run build` and verify localized home and Tailor-made pages build successfully.
- [x] 2.4 Verify `dist/images/mapa.png` exists after build.
- [ ] 2.5 Manually review `/es/`, `/en/`, `/es/viajes-a-medida/`, and `/en/tailor-made-trips/` in local preview to confirm the image loads and cropping is acceptable.
