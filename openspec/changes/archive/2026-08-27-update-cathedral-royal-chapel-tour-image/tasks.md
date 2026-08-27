## 1. Tour Content Update

- [x] 1.1 Locate the Spanish tour entry titled `Catedral y Capilla Real` and verify its localized content path.
- [x] 1.2 Locate the English tour entry titled `Cathedral and Royal Chapel` and verify its localized content path.
- [x] 1.3 Update both tour entries' `image` metadata to reference `/images/23.jpg`.
- [x] 1.4 Update both tour entries' `imageAlt` metadata to describe the cathedral interior image.

## 2. Verification

- [x] 2.1 Verify `public/images/23.jpg` exists.
- [x] 2.2 Run `npm run check` and verify Astro content/schema validation passes.
- [x] 2.3 Run `openspec validate update-cathedral-royal-chapel-tour-image --type change --strict` and verify the change is valid.
