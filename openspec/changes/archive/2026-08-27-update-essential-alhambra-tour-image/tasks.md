## 1. Tour Content Update

- [x] 1.1 Locate the Spanish tour entry titled `Alhambra: símbolos, poder y belleza` and verify its localized content path.
- [x] 1.2 Locate the English tour entry titled `Essential Alhambra at Sunset` and verify its localized content path.
- [x] 1.3 Update both tour entries' `image` metadata to reference `/images/alhambra.jpg`.

## 2. Verification

- [x] 2.1 Verify `public/images/alhambra.jpg` exists.
- [x] 2.2 Run `npm run check` and verify Astro content/schema validation passes.
- [x] 2.3 Run `openspec validate update-essential-alhambra-tour-image --type change --strict` and verify the change is valid.
