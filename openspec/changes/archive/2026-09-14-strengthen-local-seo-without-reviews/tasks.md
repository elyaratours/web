## 1. Trust Content And Approved Facts

- [x] 1.1 Audit current local trust copy in `src/components/AuthorityPage.astro`, `src/components/ContactPage.astro`, `src/components/TailorMadeHomeSection.astro`, SEO landings, and shared i18n copy; verify the audit identifies every public place that mentions reviews, Google, credentials, awards, service area, languages, WhatsApp, or email.
- [x] 1.2 Update Spanish and English public trust copy to emphasize approved facts only: Elyara Tours Granada name, Granada service area, Spanish/English support, guide-led cultural routes, private group availability, and WhatsApp/email reservation; verify affected pages render the updated copy in both locales.
- [x] 1.3 Keep Google Business Profile references absent until an approved verified URL exists; verify source and built HTML do not contain an unapproved Google Business Profile link or verified-profile claim.

## 2. Review Readiness Without Fake Social Proof

- [x] 2.1 Remove, disable, or quarantine current non-approved review/testimonial data and UI paths such as `src/lib/reviews.ts`, `src/components/TravelerReviewsMosaic.astro`, and any related JSON-LD helpers unless each item is a real approved review; verify public pages do not display review sections, testimonial quotes, star ratings, review counts, or aggregate ratings.
- [x] 2.2 Add Spanish and English post-tour review request copy for future real customers through an appropriate shared content/module location; verify the copy asks for honest voluntary feedback through approved external channels and does not offer incentives.
- [x] 2.3 Ensure structured data remains limited to approved visible facts and does not emit `Review`, `AggregateRating`, rating values, or review counts before approved reviews exist; verify by inspecting source usage and built output.

## 3. Long-Tail Editorial Content

- [x] 3.1 Expand or add Spanish and English private-guide/private-tour articles that explain fit, route focus, language, pace, group needs, and WhatsApp/email booking; verify each article links to relevant route, SEO landing, contact, or tailor-made paths.
- [x] 3.2 Expand or add Spanish and English Alhambra planning articles that explain tickets, timing, realistic itinerary planning, private-group fit, and alternatives if access is unavailable; verify the copy does not promise unavailable access, internal ticketing, or website checkout.
- [x] 3.3 Expand or add Spanish and English Albaicin route-choice articles that cover slopes, timing, viewpoints, pace, cultural context, and Albaicin/Sacromonte decisions; verify each article links to matching Albaicin tours, SEO landings, or related editorial content.
- [x] 3.4 Expand or add Spanish and English free-tour versus private-visit comparison content that explains pricing model, group size, flexibility, route depth, booking expectations, and traveler fit; verify it stays factual and does not claim Elyara is the best option without approved evidence.

## 4. Internal Links And Structured Data Integration

- [x] 4.1 Strengthen internal links among authority pages, SEO landings, blog articles, tour detail pages, contact pages, and tailor-made inquiry paths for priority Granada search intents; verify links resolve in both locales and avoid duplicate canonical targets.
- [x] 4.2 Confirm article, page, organization, and tour JSON-LD reflect only visible approved facts and existing page relationships; verify generated structured data remains consistent with visible page content.

## 5. Validation

- [x] 5.1 Run `openspec validate "strengthen-local-seo-without-reviews" --type change --strict` and verify it passes.
- [x] 5.2 Run `npm run check` and verify it passes.
- [x] 5.3 Run `npm run build` and verify it passes, then inspect representative built Spanish and English pages for no review/rating/GBP claims before approved facts exist.
