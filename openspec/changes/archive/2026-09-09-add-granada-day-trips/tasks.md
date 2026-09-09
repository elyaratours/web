## 1. Content Model And Helpers

- [x] 1.1 Add a lightweight tour category/type field that supports day-trip entries and verify existing published tours still load with `npm run check`.
- [x] 1.2 Add helper functions for standard tours and day trips, including localized day-trip paths, and verify callers can retrieve day trips separately from existing Granada routes.
- [x] 1.3 Add localized day-trip navigation, CTA, and WhatsApp inquiry copy in `src/lib/i18n.ts` and verify Spanish and English labels resolve correctly in rendered pages.

## 2. Day-Trip Content

- [x] 2.1 Add English and Spanish Markdown entries for the Malaga/Costa del Sol day trip with `Price on request` or `Precio bajo consulta`, day-trip category metadata, SEO description, FAQ, and reservation email URL; verify the generated URLs match the spec.
- [x] 2.2 Add English and Spanish Markdown entries for the Cordoba day trip with `Price on request` or `Precio bajo consulta`, day-trip category metadata, SEO description, FAQ, and reservation email URL; verify the generated URLs match the spec.
- [x] 2.3 Ensure all day-trip content states that Alhambra or monument entries depend on availability and verify no page copy promises guaranteed access.

## 3. Day-Trip Section And Navigation

- [x] 3.1 Create a reusable localized day-trip landing component using existing `section-shell`, `card`, `btn-primary`, `btn-secondary`, typography, and color classes; verify it renders both origin cards and request CTAs.
- [x] 3.2 Add Spanish and English route wrappers for `/es/excursiones-un-dia-granada/` and `/en/day-trips-granada/`; verify both pages build and expose localized metadata and alternates.
- [x] 3.3 Add the day-trip link to desktop and mobile primary navigation and verify the header remains usable at mobile and desktop widths.
- [x] 3.4 Add a visible day-trip category entry point from the relevant tours/private-tours area and verify visitors can reach the day-trip landing without relying only on the header.

## 4. Detail Page Experience Builder

- [x] 4.1 Add conditional day-trip sections to the shared tour detail page for `Choose your Granada experience` and verify only day-trip pages display them.
- [x] 4.2 Add the two main experience cards for Alhambra private tour and Historic Centre plus Albaicin, and verify the Historic Centre plus Albaicin option is presented as a complete alternative rather than a mandatory same-day add-on.
- [x] 4.3 Add the `Make your day complete` complements for private transfer, local restaurant lunch, and tailor-made itinerary, and verify no fixed restaurant, fixed menu, or fixed price is displayed.
- [x] 4.4 Add origin-specific logistics copy for Malaga/Costa del Sol and Cordoba detail pages and verify each page displays the required origin details from the spec.
- [x] 4.5 Adjust day-trip CTAs to use request-oriented wording and approved external WhatsApp/email channels, and verify no internal form, checkout, account creation, or payment flow appears.

## 5. SEO, Sitemap, And Verification

- [x] 5.1 Include the day-trip landing pages in sitemap generation with localized alternates and verify `/sitemap.xml` contains the new landing and detail URLs.
- [x] 5.2 Ensure day-trip landing and detail pages expose truthful localized SEO metadata, breadcrumbs, and structured data based on visible content; verify no unsupported ratings, schedules, restaurants, or guaranteed ticket claims are emitted.
- [x] 5.3 Run `npm run check` and verify it completes successfully.
- [x] 5.4 Run `npm run build` and verify the static build completes successfully.
- [x] 5.5 Validate the OpenSpec change with `openspec validate add-granada-day-trips --type change --strict` and verify it passes.
