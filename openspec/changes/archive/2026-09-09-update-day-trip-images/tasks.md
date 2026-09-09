## 1. Image Assets

- [x] 1.1 Add the provided Malaga image as `public/images/day-trip-malaga-granada.webp` and verify the file exists in `public/images/`.
- [x] 1.2 Add the provided Cordoba image as `public/images/day-trip-cordoba-granada.webp` and verify the file exists in `public/images/`.
- [x] 1.3 Check the actual dimensions of both added files and verify they are recorded for SEO metadata.

## 2. Tour Content Updates

- [x] 2.1 Update the English and Spanish Malaga day-trip entries to use `/images/day-trip-malaga-granada.webp` and localized alt text, then verify both entries keep their current routes and day-trip metadata.
- [x] 2.2 Update the English and Spanish Cordoba day-trip entries to use `/images/day-trip-cordoba-granada.webp` and localized alt text, then verify both entries keep their current routes and day-trip metadata.

## 3. Verification

- [x] 3.1 Run `npm run check` and verify content schema validation passes.
- [x] 3.2 Run `npm run build` and verify the Malaga and Cordoba day-trip pages are generated in both locales.
- [x] 3.3 Verify rendered Malaga and Cordoba day-trip pages reference the new image paths and localized alt text.
- [x] 3.4 Validate the OpenSpec change with `openspec validate update-day-trip-images --type change --strict` and verify it passes.
