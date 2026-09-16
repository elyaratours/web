## 1. GBP Trust Signal

- [x] 1.1 Centralize the verified Google Business Profile URL `https://maps.app.goo.gl/9bterUh4xSYH5jCf6` in shared public profile/contact data and verify the value is reused instead of duplicated in page code.
- [x] 1.2 Add a visible Google Business Profile link to approved public trust/contact/footer surfaces and verify it renders in both Spanish and English pages.
- [x] 1.3 Ensure business JSON-LD `sameAs` includes the Google Business Profile URL only on pages where the URL is visibly linked and verify generated page source contains no hidden-only GBP claim.

## 2. Approved Reviews

- [x] 2.1 Add an approved-review data structure with fields for source, approved attribution, original language, original text, optional approved localized text, approval/publication state, and optional date; verify incomplete or unapproved entries are filtered from public output.
- [x] 2.2 Add a concise traveler-proof/review component that renders only approved real review entries and verify it displays no review section, carousel, star rating, aggregate rating, or review count when no approved entries exist.
- [x] 2.3 Add the 8 real Google Business Profile reviews after exact approved text, attribution, language, and translation approval are supplied; verify each public review matches the approved source entry and includes Google Business Profile context.
- [x] 2.4 Inspect rendered metadata for review pages/sections and verify no invented `AggregateRating`, rating values, review counts, reviewer details, awards, or unsupported platform claims are emitted.

## 3. Editorial Clusters

- [x] 3.1 Create Spanish and English cluster articles for private Alhambra tour guidance and verify each localized article has substantial body content, SEO metadata, canonical metadata, and contextual links to relevant tours/landings/contact paths.
- [x] 3.2 Create Spanish and English cluster articles for free tour versus private visit comparison and verify each localized article has substantial body content, SEO metadata, canonical metadata, and contextual links to relevant tours/landings/contact paths.
- [x] 3.3 Create Spanish and English cluster articles for Granada in two days and verify each localized article has substantial body content, SEO metadata, canonical metadata, and contextual links to relevant tours/landings/contact paths.
- [x] 3.4 Create Spanish and English cluster articles for Albaicin and Sacromonte route choice and verify each localized article has substantial body content, SEO metadata, canonical metadata, and contextual links to relevant tours/landings/contact paths.
- [x] 3.5 Create Spanish and English cluster articles for Granada day trip from Malaga and verify each localized article has substantial body content, SEO metadata, canonical metadata, and contextual links to relevant tours/landings/contact paths.
- [x] 3.6 Create Spanish and English cluster articles for choosing a private guide in Granada and verify each localized article has substantial body content, SEO metadata, canonical metadata, and contextual links to relevant tours/landings/contact paths.

## 4. Internal Links And Listings

- [x] 4.1 Update localized blog listings if needed so published cluster articles appear with titles, excerpts, dates, category labels, imagery when available, and detail links; verify unpublished drafts do not appear.
- [x] 4.2 Add or strengthen localized links from relevant SEO landing pages to supporting cluster articles and verify links are visible, localized, and do not remove existing reservation actions.
- [x] 4.3 Add article-to-article related links within each localized cluster where useful and verify Spanish pages link to Spanish targets and English pages link to English targets when localized targets exist.

## 5. Verification

- [x] 5.1 Run `npm run check` and verify it completes successfully.
- [x] 5.2 Run `npm run build` and verify the static build completes successfully with expected blog, landing, tour, and sitemap output.
- [x] 5.3 Inspect representative generated Spanish and English pages and verify visible GBP links, no hidden-only structured data claims, no fake reviews, no aggregate ratings without approved data, and correct localized internal links.
- [x] 5.4 Run `openspec validate strengthen-seo-with-gbp-reviews-and-editorial-clusters --type change --strict` and verify the change passes strict validation.
