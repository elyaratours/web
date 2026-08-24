## Context

The site is an Astro static tourism website with localized routes under `/es/` and `/en/`. Tours are already data-driven through Astro Content Collections, using Markdown entries under `src/content/tours/<locale>/` and a custom public `routeSlug` field. The blog should reuse that static, content-first shape instead of introducing a CMS, server runtime, accounts, comments, or internal booking.

## Goals / Non-Goals

**Goals:**
- Add an editorial content model that supports news, curiosities, recommendations, stories, legends, history, and route inspiration.
- Keep Spanish and English as first-class localized experiences while allowing articles to exist in only one language.
- Generate static listing and detail pages that fit the existing Granada tourism visual language.
- Provide SEO metadata and article structured data.
- Allow articles to point readers toward related tours and external reservation channels.

**Non-Goals:**
- No authoring admin, CMS integration, comments, search, tags archive, pagination, RSS, accounts, payments, or internal checkout in the initial version.
- No requirement that every article must have a translated counterpart before publication.
- No change to the existing tour reservation model.

## Decisions

### Use an Astro Content Collection for articles

Create a `blog` collection alongside `tours`, loaded from Markdown files under `src/content/blog/<locale>/`. This mirrors the tour model, keeps content versioned with the site, and preserves GitHub Pages compatibility.

Alternative considered: add a CMS or admin publishing flow. That would make authoring easier for non-technical users, but it adds authentication, external services, preview complexity, and operational overhead before the editorial direction has proven itself.

### Use localized static routes under `/[locale]/blog/`

Generate listing pages at `/es/blog/` and `/en/blog/`, with detail pages at `/es/blog/[slug]/` and `/en/blog/[slug]/`. This matches the current localized site structure and keeps canonical URLs simple.

Alternative considered: place all articles under a root `/blog/` path and infer language from content. That is less consistent with the existing public experience and complicates language alternates.

### Keep `routeSlug`-style explicit public slugs

Use an explicit article public slug field, such as `routeSlug` or `postSlug`, rather than frontmatter `slug`. The tour collection already avoids frontmatter `slug` because Astro treats it as the collection slug and localized entries can collide.

Alternative considered: rely on file paths for public URLs. File paths are simple, but they make URL decisions less explicit and can become awkward when localized titles or filenames change.

### Model article relationships with stable translation and tour references

Use `translationKey` to connect localized versions of the same article topic, as tours already do. Use a list of related tour identifiers or translation keys to connect articles to published tours in the same locale.

Alternative considered: manually write tour links inside article Markdown only. Inline links are flexible, but structured relationships allow consistent related-tour presentation and future reuse in cards or recommendations.

### Treat categories as editorial labels, not deep taxonomy

Start with a small controlled set of categories: news, curiosity, recommendation, story, legend, history, and route inspiration. Display categories on listings and details, but do not add category archive pages in the initial version.

Alternative considered: implement tags and category pages immediately. That adds navigation and URL surface before there is enough content volume to justify it.

### Add Article JSON-LD separately from tour JSON-LD

Extend SEO helpers with article structured data while leaving tour JSON-LD unchanged. Article pages should expose `Article` or `BlogPosting` metadata using article title, description, image, dates, locale, canonical URL, and provider/site name.

Alternative considered: only rely on generic meta tags. That is simpler, but structured article data supports the editorial SEO goal and is consistent with the existing structured data approach for tours.

## Risks / Trade-offs

- Thin initial content set -> Seed the blog with a small number of high-quality evergreen articles before making the section prominent.
- News content can become stale -> Favor evergreen stories, legends, recommendations, and history as the base; use news as a category, not the whole identity.
- Blog navigation can distract from reservations -> Use editorial-to-tour prompts and keep reservation actions external and contextual.
- Related tour references can break if tours change -> Prefer stable identifiers such as translation keys or explicit references instead of fragile display titles.
- Category labels need localization -> Store category identifiers in content and map them to localized display labels through i18n copy.

## Migration Plan

1. Add the blog content collection schema and supporting article helpers.
2. Add localized blog listing and article detail pages.
3. Add SEO and structured data support for article pages.
4. Add navigation/footer links to the editorial section.
5. Seed at least one Spanish and one English article, plus any necessary images.
6. Run the project check/build commands and OpenSpec validation.

Rollback is straightforward because the change is additive: remove the blog pages, collection, helper code, navigation links, and seeded content if the section should not ship.
