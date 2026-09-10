## 1. Targeted Display Changes

- [x] 1.1 Remove visible `whatsappDisplayNumber` and `contactEmail` text from the localized Home hero reservation area, then verify `/es/` and `/en/` still display the WhatsApp and email reservation buttons.
- [x] 1.2 Remove visible `whatsappDisplayNumber` and `contactEmail` text from scheduled-date cards in the shared reservation calendar, then verify calendar cards still display localized WhatsApp and email reservation buttons.

## 2. Preservation Checks

- [x] 2.1 Verify reservation button URLs still open the approved external WhatsApp and email flows for generic and scheduled-date reservations.
- [x] 2.2 Verify contact details remain available in non-targeted areas such as the footer and contact pages.

## 3. Validation

- [x] 3.1 Run `npm run check` and verify TypeScript, Astro, and content validation pass.
- [x] 3.2 Run `npm run build` and inspect generated Spanish and English Home/calendar HTML to verify the targeted visible contact values are absent while reservation buttons remain present.
- [x] 3.3 Run `openspec validate hide-home-calendar-contact-details --type change --strict` and verify the change passes strict validation.
