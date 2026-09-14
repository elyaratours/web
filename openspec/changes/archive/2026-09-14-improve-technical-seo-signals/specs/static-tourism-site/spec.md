## MODIFIED Requirements

### Requirement: Search engine metadata and structured data
The system SHALL provide complete SEO metadata for public pages, structured data for tour detail and relevant listing pages, and discoverability metadata for search engines.

#### Scenario: Search engine reads a public page
- **WHEN** a crawler reads a public home, catalog, contact, tailor-made, commercial landing, blog, or tour detail page
- **THEN** the page exposes appropriate title, description, canonical metadata, and language-aware metadata
- **AND** canonical, hreflang, Open Graph, image, and structured-data URLs use `https://elyaratours.com`
- **AND** the page exposes social metadata sufficient for a useful large-image preview, using a page-specific image when available and an approved default share image otherwise
- **AND** the page exposes sitemap discovery metadata pointing to the production sitemap

#### Scenario: Search engine reads localized alternates
- **WHEN** a crawler reads language alternate metadata on a localized public page
- **THEN** Spanish and English alternates point to the matching localized pages on `https://elyaratours.com`
- **AND** the `x-default` alternate points to the matching Spanish page when a Spanish equivalent exists, otherwise to the Spanish home page at `https://elyaratours.com/es/`

#### Scenario: Search engine reads the localized home page
- **WHEN** a crawler reads `/es/` or `/en/`
- **THEN** the page exposes an Open Graph image using the approved home hero image on `https://elyaratours.com`
- **AND** the page exposes structured data describing the visible published tour catalog as a public list

#### Scenario: Search engine reads a tour detail page
- **WHEN** a crawler reads a published tour detail page
- **THEN** the page includes JSON-LD structured data describing the tour using the available tour metadata
- **AND** structured-data URLs use `https://elyaratours.com`
- **AND** the tour structured data is connected to the Elyara business identity
- **AND** the page exposes breadcrumb structured data for the localized tour hierarchy

#### Scenario: Search engine requests the sitemap
- **WHEN** a crawler requests `/sitemap.xml`
- **THEN** the system serves a sitemap containing indexable public localized home, tour, blog, contact, tailor-made, authority, day-trip, and commercial landing URLs
- **AND** sitemap URLs use the same configured production site URL as canonical metadata
- **AND** sitemap entries include freshness metadata for public pages when a reliable content update date or sitewide SEO update date is available
- **AND** localized sitemap entries with known translations include Spanish and English alternate links plus an `x-default` link to the Spanish equivalent
- **AND** sitemap entries may include change frequency and priority hints that reflect each public page type without changing canonical URLs

#### Scenario: Search engine reads robots instructions
- **WHEN** a crawler requests `/robots.txt`
- **THEN** the system allows public crawling
- **AND** the file declares `Sitemap: https://elyaratours.com/sitemap.xml`

### Requirement: Public image SEO and performance signals
The system SHALL present important public images with accessible text and performance-friendly metadata suitable for static hosting.

#### Scenario: Visitor loads an above-the-fold page image
- **WHEN** a visitor opens a public page with an above-the-fold hero or main image
- **THEN** the image has meaningful localized accessible text when it is not decorative
- **AND** the image is delivered with dimensions or equivalent layout information that helps avoid avoidable layout shift
- **AND** the image is prioritized appropriately for initial page rendering

#### Scenario: Visitor loads below-the-fold imagery
- **WHEN** a visitor browses below-the-fold tour, blog, traveler, or supporting imagery
- **THEN** the images remain accessible and are eligible for lazy loading without hiding required textual content from crawlers

#### Scenario: Search engine or social platform reads page image metadata
- **WHEN** a public page provides an image for search or social metadata
- **THEN** the metadata image matches a relevant visible page image whenever a visible image exists
- **AND** the metadata image URL uses the configured production site URL
- **AND** Open Graph metadata includes known image dimensions and image MIME type when those values are known
- **AND** JSON-LD image references use structured image objects with known dimensions when those values are known

### Requirement: Enhanced social and search metadata
The system SHALL expose richer metadata for public pages so search engines and social platforms can understand page language, preview imagery, publication dates, and localized alternates.

#### Scenario: Social platform reads a page with image metadata
- **WHEN** a crawler reads a public page that provides a visible page image or approved fallback share image
- **THEN** the page exposes Open Graph and Twitter image metadata using the production site URL
- **AND** the image metadata includes useful alt text, dimensions when dimensions are known, and image MIME type when the type can be determined

#### Scenario: Crawler reads localized alternate metadata
- **WHEN** a crawler reads a localized public page that has an equivalent page in another language
- **THEN** the page exposes Spanish and English alternate links for the equivalent localized URLs
- **AND** the page exposes Open Graph locale alternate metadata for the other localized version
- **AND** the page exposes an `x-default` link to the Spanish equivalent when one exists

#### Scenario: Crawler reads an editorial article page
- **WHEN** a crawler reads a published editorial article page
- **THEN** the page exposes article publication and modification metadata when those dates are available
- **AND** the page preserves article structured data for the same visible article content

### Requirement: Multilingual sitemap alternates
The system SHALL expose multilingual alternate relationships in the sitemap for localized public pages that have equivalent Spanish and English versions.

#### Scenario: Search engine reads localized sitemap entries
- **WHEN** a crawler reads `/sitemap.xml`
- **THEN** localized home, tour, blog, contact, tailor-made, authority, day-trip, and SEO landing entries with known translations include Spanish and English alternate relationships
- **AND** every sitemap URL and alternate URL uses `https://elyaratours.com`
- **AND** each translated group exposes an `x-default` alternate pointing to the Spanish equivalent URL
- **AND** entries expose freshness metadata when a reliable update date is available

#### Scenario: Page has no translated counterpart
- **WHEN** a sitemap entry represents public content that exists only in one locale
- **THEN** the sitemap still includes the available URL without inventing an unavailable alternate URL
