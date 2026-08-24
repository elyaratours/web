## Why

Elyara needs an editorial layer with personality to publish stories, news, curiosities, recommendations, and cultural context about Granada. This creates a richer visitor experience, supports SEO, and gives the tour catalog a natural way to connect with people before they are ready to reserve.

## What Changes

- Add a multilingual editorial blog section for Spanish and English visitors.
- Present the section publicly as a personality-led Granada journal/cuaderno rather than a generic corporate blog.
- Support data-driven article entries with metadata, categories, imagery, SEO descriptions, publication state, and optional relationships to tours.
- Add public listing and detail pages for published articles.
- Provide article SEO metadata and structured data suitable for editorial content.
- Add navigation paths so visitors can discover the editorial section from the public site.
- Keep reservations external; articles may link readers toward related routes or WhatsApp but do not introduce internal booking, accounts, comments, or payments.

## Capabilities

### New Capabilities
- `editorial-blog`: Provides the multilingual public editorial blog/journal for Granada stories, news, recommendations, curiosities, and related tour discovery.

### Modified Capabilities
- None.

## Impact

- Adds a new Astro Content Collection for editorial blog entries.
- Adds localized public blog index and article detail pages under locale-aware routes.
- Adds reusable article listing/detail presentation patterns aligned with the existing Granada tourism visual language.
- Extends i18n copy, navigation, SEO helpers, and structured data support for article pages.
- May require additional WebP/AVIF images in `public/images/` for article cards and hero imagery.
