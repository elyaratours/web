## 1. Contact Image Content

- [x] 1.1 Verify `public/images/Contacto.png` exists and matches the approved contact illustration, and verify the implementation will reference the exact public path `/images/Contacto.png`.
- [x] 1.2 Add localized `imageAlt` values to the Spanish and English `contactContent` entries in `src/lib/i18n.ts`, update the contact content type shape, and verify existing contact copy, routes, email, Instagram, reasons, footer labels, and metadata descriptions remain unchanged.

## 2. Contact Page Rendering

- [x] 2.1 Update `src/components/ContactPage.astro` to use one shared contact image path for both `BaseLayout` metadata and the visible image, and verify both references point to `/images/Contacto.png`.
- [x] 2.2 Update the visible contact image to use the localized `content.imageAlt`, and verify Spanish and English pages expose different localized alt text without changing layout structure or contact links.

## 3. Validation

- [x] 3.1 Run `npm run check` and verify the content/type changes produce no Astro or TypeScript errors.
- [x] 3.2 Run `npm run build` and inspect generated `/es/contacto/` and `/en/contact/` pages to verify the visible image and metadata reference `/images/Contacto.png`.
