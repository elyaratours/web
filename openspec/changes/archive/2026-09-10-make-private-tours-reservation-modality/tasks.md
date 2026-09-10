## 1. Navigation And Localized Copy

- [x] 1.1 Remove `Tours privados` / `Private tours` from primary desktop navigation, mobile navigation, and prominent footer catalog links; verify localized pages still expose tours, day trips, tailor-made, blog, about, contact, and language switching.
- [x] 1.2 Add or update Spanish and English copy for private group booking as a modality on existing tours; verify the copy clearly says the selected route can be requested for a private group without introducing a separate private-tour catalog.

## 2. Tour Reservation Flow

- [x] 2.1 Add route-specific private group WhatsApp/email reservation wording for eligible published tours; verify generated links include the selected tour title and private group intent.
- [x] 2.2 Update tour card reservation actions or availability wording where reservation CTAs are displayed; verify the action remains tied to the same tour detail URL or external reservation flow.
- [x] 2.3 Update published tour detail pages to explain the private group modality near the reservation area; verify the page does not send visitors to a duplicate private-tour product page to book privately.

## 3. SEO Landing And Internal Links

- [x] 3.1 Reframe `tours-privados-granada` / `private-tours-granada` pages as contextual SEO landing pages; verify they link to existing route details, tailor-made inquiry, or contact instead of presenting a separate private-tour catalog.
- [x] 3.2 Update tour detail, authority, blog, sitemap, and other internal-link surfaces that currently treat private tours as a primary section; verify private-tour search pages remain discoverable only where contextually useful.
- [x] 3.3 Review localized metadata and JSON-LD for private-tour landing pages; verify metadata describes private group inquiries or guided routes rather than a distinct private-tour catalog.

## 4. Validation

- [x] 4.1 Run `openspec validate make-private-tours-reservation-modality --type change --strict` and verify the change passes.
- [x] 4.2 Run `npm run check` and verify TypeScript/Astro checks pass.
- [x] 4.3 Run `npm run build` and verify the static site builds successfully with the updated routes and links.
