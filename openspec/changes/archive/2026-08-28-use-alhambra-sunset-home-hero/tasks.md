## 1. Asset Preparation

- [x] 1.1 Add the provided Alhambra cloudy-view image as `public/images/alhambra-clouds.jpeg` and verify the file exists locally.
- [x] 1.2 Verify the dev server or static build can serve `/images/alhambra-clouds.jpeg` with an image response.

## 2. Localized Home Update

- [x] 2.1 Update `src/pages/[locale]/index.astro` so both `/es/` and `/en/` use `/images/alhambra-clouds.jpeg`, and verify neither localized page renders `/images/alhambra-sunset.jpeg`.
- [x] 2.2 Keep the cloudy Alhambra image centered in the existing hero card and verify the Alhambra remains visible.
- [x] 2.3 Update Spanish and English `heroImageAlt` values in `src/lib/i18n.ts` and verify they describe the cloudy Alhambra image.

## 3. Regression Checks

- [x] 3.1 Verify the root page `/` still uses its existing image and does not switch to `/images/alhambra-clouds.jpeg`.
- [x] 3.2 Run `npm run check` and verify Astro reports no diagnostics.
- [x] 3.3 Run `npm run build` and verify the static build completes with `dist/images/alhambra-clouds.jpeg` present.
- [x] 3.4 Validate this OpenSpec change with `openspec validate use-alhambra-sunset-home-hero --type change --strict` and verify it passes.
