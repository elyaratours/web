## Context

See `proposal.md` for motivation. The current site is a static Astro app with localized routes, content collections for blog/tours/SEO landings, shared SEO helpers, legal/trust pages, and existing safeguards against fake reviews, aggregate ratings, unsupported credentials, addresses, business hours, and ranking guarantees.

The verified Google Business Profile URL is `https://maps.app.goo.gl/9bterUh4xSYH5jCf6`. The user has 8 real reviews available, but implementation must receive approved review text and attribution before publishing them. Spanish and English customers should be prioritized equally.

## Goals / Non-Goals

**Goals:**

- Publish the verified GBP link visibly and mirror it in business JSON-LD `sameAs`.
- Add a small, truthful approved-review data model and display path.
- Support bilingual review presentation without silent or unapproved translation.
- Add priority editorial article pairs for Spanish and English search intents.
- Strengthen internal links between articles, landings, tours, contact, and tailor-made inquiry paths.

**Non-Goals:**

- No fake testimonials, placeholder reviews, scraped review text, invented authors, star ratings, aggregate ratings, or review counts.
- No claim that Elyara ranks first, is the best, has official credentials, or has awards unless those facts are separately approved and visible.
- No dependency on Google APIs, dynamic review fetching, analytics, checkout, or internal booking.
- No publication of incomplete review data or thin editorial pages.

## Decisions

1. Store approved reviews as explicit local data, not live Google fetches.

   Add a small source-controlled review module or content collection with fields for source, approved display name, original language, original text, optional approved localized text, approval state, and optional review date. Render only approved entries.

   Alternative considered: fetch Google reviews dynamically. Rejected because the site is static, Google review APIs add complexity, and visible review claims must remain manually approved.

2. Do not emit aggregate review structured data in this change.

   Even with 8 real reviews, the safest SEO posture is visible review proof without `AggregateRating` unless a public rating summary is explicitly approved later. Review schema may be omitted entirely or kept to visible review excerpts only if implementation can represent it truthfully.

   Alternative considered: add aggregate star rating immediately. Rejected because the approved review count/rating summary was not provided and invented ratings are explicitly disallowed.

3. Publish GBP through one approved constant/config path.

   Use the verified maps URL as the public approved value and expose it in visible footer/contact/authority surfaces. Business JSON-LD can include the same URL in `sameAs` because it is visible.

   Alternative considered: keep the GBP URL environment-only. Rejected because the URL is now approved and stable enough to publish; environment-only would risk forgetting visible publication.

4. Keep review UI concise and trust-oriented.

   Display a small section on Home or authority/contact rather than a heavy carousel. The section should link to GBP and focus on approved excerpts. If review entries are unavailable during implementation, build the data model and omit the section until entries are approved.

   Alternative considered: restore the old hidden reviews mosaic. Rejected because that prior pattern was explicitly hidden until real approved reviews exist and may include old assumptions.

5. Implement editorial clusters as bilingual article pairs.

   Create Spanish and English articles for six priority topics: private Alhambra tour fit, free tour versus private visit, Granada in two days, Albaicin/Sacromonte route choice, Granada day trip from Malaga, and private guide selection. Each article should link to existing localized landings/tours and related articles.

   Alternative considered: create more SEO landings. Rejected because the site already has many landings; editorial depth is the missing support layer.

## Risks / Trade-offs

- Review text not supplied before implementation -> Build data model and pause publication of review entries until exact approved text/attribution is available.
- Review translations could distort source meaning -> Store original and approved localized text separately; do not auto-translate at render time.
- Too many articles at once may reduce quality -> Use six focused bilingual pairs with substantial content and internal links, not thin pages.
- GBP short URL may change over time -> Centralize the URL so it can be updated once if needed.
- Review structured data can trigger rich-result risk if inaccurate -> Prefer no review schema or strictly visible-review-only schema; never add aggregate rating without approved public rating data.

## Migration Plan

1. Add approved GBP URL to shared profile/contact data and visible surfaces.
2. Add approved review data structure and rendering component with no output when no approved entries exist.
3. Add the 8 real review entries only after exact approved text/attribution/translation state is available.
4. Create six Spanish and six English priority cluster articles and wire related tours/landings.
5. Add or strengthen landing-to-article related links where the article supports the landing topic.
6. Build and inspect representative output for metadata, visible links, no fake review/rating claims, GBP consistency, and sitemap inclusion.

Rollback is low risk: remove review entries or hide the review section, remove cluster article publication flags, and keep the existing static site behavior intact.
