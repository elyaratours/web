## Context

The Astro static site already centralizes SEO head output, JSON-LD generation, image dimensions, and sitemap generation. The safest approach is to extend those shared utilities so all public pages benefit consistently without changing content entries or reservation behavior.

## Goals / Non-Goals

**Goals:**
- Improve crawler and social-platform signals from shared metadata and sitemap code.
- Keep structured data tied to approved public facts and visible page content.
- Preserve static generation and current localized routing.
- Avoid adding operational dependencies or runtime services.

**Non-Goals:**
- No Google ranking guarantees, review/rating schema, unapproved Google Business Profile linkage, physical address, business hours, credentials, or awards.
- No internal booking, checkout, payment, or account flow.
- No redesign of page layout or navigation.

## Decisions

- Centralize default social imagery in the base layout rather than requiring every page to define one. This keeps previews complete for indexable pages while page-specific images still take precedence.
- Generate `x-default` from the Spanish alternate for each localized page when available. This aligns HTML and sitemap alternates with the canonical Spanish equivalent instead of always routing crawlers to `/es/`.
- Add `lastmod` to sitemap entries using a fixed content update date for this SEO batch and existing article update dates where available. This avoids pretending to have per-file runtime modification data while still giving crawlers a reliable batch freshness signal.
- Represent images in JSON-LD as `ImageObject` with known dimensions when available. This gives richer structured data without inventing image metadata for assets that are not registered.
- Parse numeric EUR prices from existing visible price strings only when possible, while preserving the original price text as the offer description. Price-on-request content remains descriptive rather than inventing a numeric price.

## Risks / Trade-offs

- Fixed batch `lastmod` can become stale if future content updates do not refresh it. Mitigation: update the sitemap batch date when publishing future sitewide SEO/content changes, or introduce explicit content update fields later.
- Some legacy image assets remain JPEG/PNG. Mitigation: this change improves metadata and dimensions but does not force unrelated asset conversion.
- Parsed prices are best-effort from visible text. Mitigation: non-numeric prices do not get invented numeric values, and original visible pricing remains in the description.

## Migration Plan

- Deploy as a normal static build.
- If metadata output causes unexpected crawler/social preview issues, revert the shared SEO helper and sitemap changes while leaving content untouched.
