## ADDED Requirements

### Requirement: Page-specific sitemap freshness for commercial content
The system SHALL expose sitemap freshness metadata for published tours, SEO landing pages, and editorial articles using reliable page-specific update dates when those dates are available.

#### Scenario: Search engine reads sitemap after a tour update
- **WHEN** a published localized tour entry has a reliable content update date
- **THEN** the sitemap entry for that tour URL includes a `lastmod` value derived from the tour's update date
- **AND** the sitemap preserves the tour URL, localized alternates, change frequency, and priority behavior

#### Scenario: Search engine reads sitemap after an SEO landing update
- **WHEN** a published localized SEO landing entry has a reliable content update date
- **THEN** the sitemap entry for that landing URL includes a `lastmod` value derived from the landing's update date
- **AND** the sitemap preserves the landing URL, localized alternates, change frequency, and priority behavior

#### Scenario: Page has no page-specific update date
- **WHEN** a sitemap entry represents a public page without a reliable page-specific update date
- **THEN** the sitemap may use the approved sitewide SEO update date when available
- **AND** it does not invent page-specific freshness metadata for unchanged content

#### Scenario: Published article has publication and update dates
- **WHEN** a published editorial article has both publication and update dates
- **THEN** the sitemap uses the article update date as its freshness metadata
- **AND** article page metadata and structured data remain consistent with the same visible article content

### Requirement: High-intent Alhambra discovery paths
The system SHALL provide clear localized discovery paths from high-intent Alhambra planning content to relevant tour detail, SEO landing, authority, contact, and external inquiry actions.

#### Scenario: Visitor researches private Alhambra guide cost
- **WHEN** a Spanish or English visitor reads public content about private Alhambra guide cost, price, or booking considerations
- **THEN** the page links visibly to the localized private Alhambra landing or Alhambra tour detail page when available
- **AND** the page offers a path to external WhatsApp or email inquiry without introducing internal checkout or payment behavior

#### Scenario: Visitor researches Alhambra tickets unavailable
- **WHEN** a Spanish or English visitor reads public content about unavailable or sold-out Alhambra tickets
- **THEN** the page explains available planning considerations and alternative inquiry paths without promising ticket access that Elyara cannot guarantee
- **AND** the page links to relevant localized Alhambra, Granada route, contact, or tailor-made inquiry content when available
