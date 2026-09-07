## MODIFIED Requirements

### Requirement: Search engine metadata and structured data
The system SHALL provide complete SEO metadata for public pages, structured data for tour detail and relevant listing pages, and discoverability metadata for search engines.

#### Scenario: Search engine reads a public page
- **WHEN** a crawler reads a public home, catalog, contact, tailor-made, commercial landing, blog, or tour detail page
- **THEN** the page exposes appropriate title, description, canonical metadata, and language-aware metadata
- **AND** canonical, hreflang, Open Graph, image, and structured-data URLs use `https://elyaratours.com`
- **AND** the page exposes social metadata sufficient for a useful large-image preview when a page image is available

#### Scenario: Search engine reads localized alternates
- **WHEN** a crawler reads language alternate metadata on a localized public page
- **THEN** Spanish and English alternates point to the matching localized pages on `https://elyaratours.com`
- **AND** the `x-default` alternate points to the Spanish home page at `https://elyaratours.com/es/`

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
- **THEN** the system serves a sitemap containing indexable public localized home, tour, blog, contact, tailor-made, and commercial landing URLs
- **AND** sitemap URLs use the same configured production site URL as canonical metadata
- **AND** sitemap entries include freshness metadata when the corresponding public content provides a reliable publication or update date

#### Scenario: Search engine reads robots instructions
- **WHEN** a crawler requests `/robots.txt`
- **THEN** the system allows public crawling
- **AND** the file declares `Sitemap: https://elyaratours.com/sitemap.xml`

## ADDED Requirements

### Requirement: Data-driven tour FAQ content
The system SHALL support localized visible FAQ content on published tour detail pages without requiring copied page templates per tour.

#### Scenario: Tour entry includes FAQ content
- **WHEN** a published localized tour entry defines one or more FAQ entries
- **THEN** the corresponding tour detail page displays those localized questions and answers on the page
- **AND** the page exposes matching FAQ structured data for those same visible entries

#### Scenario: Tour entry has no FAQ content
- **WHEN** a published localized tour entry defines no FAQ entries
- **THEN** the corresponding tour detail page remains valid and does not display an empty FAQ section
- **AND** the page does not expose FAQ structured data for that tour

### Requirement: Commercial Granada tour landing pages
The system SHALL provide localized commercial landing content for high-intent Granada tour searches while preserving existing published tour detail URLs.

#### Scenario: Spanish visitor opens private tours landing page
- **WHEN** a visitor navigates to the Spanish commercial landing page for private or guided tours in Granada
- **THEN** the system displays Spanish content explaining Elyara's private tours, cultural walking routes, languages, reservation channel, and links to relevant published tour pages

#### Scenario: English visitor opens private tours landing page
- **WHEN** a visitor navigates to the English commercial landing page for private or guided tours in Granada
- **THEN** the system displays English content explaining Elyara's private tours, cultural walking routes, languages, reservation channel, and links to relevant published tour pages

#### Scenario: Search engine reads commercial landing metadata
- **WHEN** a crawler reads a localized commercial landing page
- **THEN** the page exposes localized title, description, canonical URL, language alternates, breadcrumb structured data, and relevant business or service structured data

#### Scenario: Visitor starts inquiry from commercial landing page
- **WHEN** a visitor activates a reservation or inquiry call to action from a commercial landing page
- **THEN** the system opens an external email flow to `elyaratours@gmail.com`
- **AND** the system does not require account creation, internal form submission, checkout, or payment processing

### Requirement: SEO-oriented internal linking
The system SHALL expose contextual internal links between public discovery, commercial, tour, tailor-made, contact, and editorial pages.

#### Scenario: Visitor reads a tour detail page
- **WHEN** a visitor reads a published tour detail page
- **THEN** the page provides relevant internal links to related discovery, inquiry, or editorial content when such content exists for the same locale

#### Scenario: Visitor reads a commercial landing page
- **WHEN** a visitor reads a localized commercial landing page
- **THEN** the page links to relevant published tours, tailor-made inquiry content, contact content, and relevant editorial content for the same locale when available

#### Scenario: Visitor reads home discovery content
- **WHEN** a visitor reads a localized home page
- **THEN** the page provides a clear internal path to tours, tailor-made content, contact content, blog content, and any localized commercial tour landing page

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
