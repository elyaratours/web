## 1. Localized Copy

- [x] 1.1 Add localized Tailor-made Home WhatsApp CTA copy in Spanish and English and verify `src/lib/i18n.ts` type checks with both locale entries present.
- [x] 1.2 Confirm existing WhatsApp reservation helper copy remains tour-specific and localized by verifying Spanish and English tour WhatsApp URLs still include the selected tour title.

## 2. Home Tour Card Reservation Actions

- [x] 2.1 Update the shared tour-card component to support an explicit WhatsApp reservation CTA mode and verify the component avoids nested interactive links.
- [x] 2.2 Enable the WhatsApp reservation CTA for tour cards rendered in the localized Home catalog and verify `/es/` and `/en/` show a WhatsApp reservation action on every published tour card.
- [x] 2.3 Verify each Home tour-card WhatsApp link opens `https://wa.me/34611126979` with localized prefilled text that identifies that card's tour title.
- [x] 2.4 Verify each Home tour card still exposes a visible link to the corresponding tour detail page.

## 3. Tailor-made Home CTA

- [x] 3.1 Replace the generic Tailor-made Home `WhatsApp` label with localized CTA copy and verify the action still opens the existing tailor-made WhatsApp inquiry URL.
- [x] 3.2 Verify the Tailor-made Home section remains responsive and does not introduce new channels, internal forms, checkout, payment, or account flows.

## 4. Validation

- [x] 4.1 Run `npm run check` and verify TypeScript, Astro, and content validation pass.
- [x] 4.2 Run `npm run build` and verify the static site builds for both localized Home routes.
- [x] 4.3 Run `openspec validate surface-home-whatsapp-reservations --type change --strict` and verify the change artifacts pass strict validation.
