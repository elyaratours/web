## 1. Asset Preparation

- [x] 1.1 Confirm the existing Spanish source image `public/images/1492-esp.png` visually matches the user-provided `1492 Nuevo Orden Mundial` artwork.
- [x] 1.2 Convert or export the Spanish artwork to a web-optimized public asset, preferably WebP or AVIF, using a stable descriptive filename such as `1492-nuevo-orden-mundial.webp`, and verify the file exists under `public/images` with acceptable visual quality.
- [x] 1.3 Decide whether the untracked source PNG should be committed or left out, and verify the final staged asset set matches that decision.

## 2. Tour Content Update

- [x] 2.1 Locate the Spanish `1492 Nuevo Orden Mundial` tour entry by searching localized tour content and verify the matched entry has `locale: es` or lives under the Spanish tour content path.
- [x] 2.2 Update only that Spanish tour entry's `image` metadata to reference the new public Spanish artwork path and update `imageAlt` to describe the artwork; verify the English tour entry remains unchanged.

## 3. Verification

- [x] 3.1 Run `npm run check` and verify the project passes content/schema validation.
- [x] 3.2 Run `npm run build` and verify the static production build succeeds with the new Spanish image asset.
- [x] 3.3 Inspect the generated or local Spanish tour catalog/detail output and verify the `1492 Nuevo Orden Mundial` tour displays the provided Spanish artwork while the English `Granada and the New World` tour keeps its English artwork.
- [x] 3.4 Run `openspec validate update-1492-nuevo-orden-mundial-tour-image --type change --strict` and verify the change remains valid after implementation.
