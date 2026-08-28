## Why

The localized contact pages currently use a generic Granada center photo that does not match the softer illustrated visual direction of the contact experience. Replacing it with the approved contact illustration will make the Spanish and English contact pages feel more intentional and on-brand.

## What Changes

- Use the approved `/images/Contacto.png` illustration as the visible image on both localized contact pages.
- Use the same image for contact page metadata/social previews.
- Add localized accessible image text for Spanish and English contact pages.
- Preserve existing contact page routes, copy, email link, Instagram link, footer/header navigation, and the absence of internal forms or booking/payment flows.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Require localized contact pages to display the approved contact illustration with localized accessible text and matching metadata image.

## Impact

- Affects `src/components/ContactPage.astro` and localized contact content in `src/lib/i18n.ts`.
- Uses the existing public image asset `public/images/Contacto.png`; no new dependencies, routes, APIs, contact channels, or content collections are expected.
