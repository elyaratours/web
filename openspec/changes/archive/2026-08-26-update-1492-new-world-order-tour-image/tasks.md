## 1. Asset Preparation

- [x] 1.1 Locate the existing public image organization and verify the target directory for tour imagery is identified.
- [x] 1.2 Save the user-provided Image 1 as the source artwork and verify the saved source visually matches the `1492 New World Order` image from the request.
- [x] 1.3 Convert or export the artwork to a web-optimized public asset, preferably WebP or AVIF, using a stable descriptive filename such as `1492-new-world-order.webp`, and verify the file exists under `public` with acceptable visual quality.

## 2. Tour Content Update

- [x] 2.1 Locate the English `Granada and the New World` tour entry by searching localized tour content and verify the matched entry has `locale: en` or lives under the English tour content path.
- [x] 2.2 Update only that English tour entry's `image` metadata to reference the new public asset path and verify no unrelated tour entries were changed.

## 3. Verification

- [x] 3.1 Run `npm run check` and verify the project passes content/schema validation.
- [x] 3.2 Run `npm run build` and verify the static production build succeeds with the new image asset.
- [x] 3.3 Inspect the generated or local English tour catalog/detail output and verify the `Granada and the New World` tour displays the provided artwork while other localized tour images remain unchanged.
- [x] 3.4 Run `openspec validate update-1492-new-world-order-tour-image --type change --strict` and verify the change remains valid after implementation.
