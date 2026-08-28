## Context

`src/components/ContactPage.astro` renders both localized contact routes and currently hardcodes `/images/granada-cathedral.webp` for the layout image metadata and visible page image. Localized contact copy lives in `src/lib/i18n.ts`, and `public/images/Contacto.png` already exists as the approved illustration.

## Goals / Non-Goals

**Goals:**

- Reuse `/images/Contacto.png` for the visible contact image and contact page metadata in both locales.
- Keep one shared image path so Spanish and English contact pages stay consistent.
- Add localized `imageAlt` content to the contact content object and consume it from the shared contact page component.

**Non-Goals:**

- Changing contact page layout, routes, copy, CTA cards, email, Instagram, footer, or header navigation.
- Adding a new contact form, backend contact handling, WhatsApp contact channel, payment flow, or booking flow.
- Renaming or converting the existing `Contacto.png` asset.

## Decisions

- Use the existing `/images/Contacto.png` path because the approved asset is already present in `public/images/` and was selected for both localized contact sections. Alternative considered: create a lowercase duplicate filename; rejected to avoid duplicate assets for the same image.
- Introduce a single shared image path constant inside `ContactPage.astro` so the visible image and metadata cannot drift. Alternative considered: leave two hardcoded strings; rejected because the current component already needs the same path in two places.
- Add `imageAlt` to `contactContent` for each locale because the contact image is visible content and should have language-specific accessible text. Alternative considered: use one neutral English alt string; rejected because the surrounding contact page is localized.

## Risks / Trade-offs

- The filename contains an uppercase letter -> keep the exact public path `/images/Contacto.png` and verify generated pages reference it consistently.
- The illustration has a wide aspect ratio and the existing image container crops with `object-cover` -> inspect the generated contact pages and adjust only if the approved image loses essential content.
- Adding `imageAlt` changes the contact content type shape -> update the `satisfies` type in `src/lib/i18n.ts` and verify with `npm run check`.
