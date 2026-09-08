## ADDED Requirements

### Requirement: Localized high-intent SEO landing pages
The system SHALL provide localized public landing pages for high-intent Granada tourism searches that connect search visitors to relevant tours, tailor-made inquiries, contact channels, and editorial context.

#### Scenario: Spanish visitor opens guided visits landing page
- **WHEN** a visitor navigates to the Spanish guided visits landing page for Granada
- **THEN** the system displays Spanish visitor-facing content about guided visits in Granada, relevant published tours, direct reservation channels, and internal links to related discovery pages

#### Scenario: English visitor opens walking tours landing page
- **WHEN** a visitor navigates to the English walking tours landing page for Granada
- **THEN** the system displays English visitor-facing content about Granada walking tours, relevant published tours, direct reservation channels, and internal links to related discovery pages

#### Scenario: Visitor opens monument or neighborhood landing page
- **WHEN** a visitor navigates to a localized SEO landing page for Alhambra, Albaicin, Cathedral/Royal Chapel, viewpoints, or historic Granada intents
- **THEN** the system displays useful localized content for that intent
- **AND** the page links to relevant published tours and inquiry actions for the same locale

#### Scenario: Visitor opens free-tour intent landing page
- **WHEN** a visitor navigates to a localized landing page targeting free-tour Granada search intent
- **THEN** the system clearly explains Elyara's external reservation model and available routes without presenting an internal free-tour checkout or payment flow
- **AND** the page links visitors to relevant tours or direct WhatsApp/email inquiry channels

### Requirement: Enhanced social and search metadata
The system SHALL expose richer metadata for public pages so search engines and social platforms can understand page language, preview imagery, publication dates, and localized alternates.

#### Scenario: Social platform reads a page with image metadata
- **WHEN** a crawler reads a public page that provides a visible page image
- **THEN** the page exposes Open Graph and Twitter image metadata using the production site URL
- **AND** the image metadata includes useful alt text and dimensions when dimensions are known

#### Scenario: Crawler reads localized alternate metadata
- **WHEN** a crawler reads a localized public page that has an equivalent page in another language
- **THEN** the page exposes Spanish and English alternate links for the equivalent localized URLs
- **AND** the page exposes Open Graph locale alternate metadata for the other localized version

#### Scenario: Crawler reads an editorial article page
- **WHEN** a crawler reads a published editorial article page
- **THEN** the page exposes article publication and modification metadata when those dates are available
- **AND** the page preserves article structured data for the same visible article content

### Requirement: Multilingual sitemap alternates
The system SHALL expose multilingual alternate relationships in the sitemap for localized public pages that have equivalent Spanish and English versions.

#### Scenario: Search engine reads localized sitemap entries
- **WHEN** a crawler reads `/sitemap.xml`
- **THEN** localized home, tour, blog, contact, tailor-made, and SEO landing entries with known translations include Spanish and English alternate relationships
- **AND** every sitemap URL and alternate URL uses `https://elyaratours.com`

#### Scenario: Page has no translated counterpart
- **WHEN** a sitemap entry represents public content that exists only in one locale
- **THEN** the sitemap still includes the available URL without inventing an unavailable alternate URL

### Requirement: Comprehensive tour FAQ coverage
The system SHALL provide localized visible FAQ content for every published tour detail page and expose matching FAQ structured data for the same questions and answers.

#### Scenario: Visitor opens any published tour detail page
- **WHEN** a visitor opens a published Spanish or English tour detail page
- **THEN** the page displays localized FAQ content that helps answer practical reservation, language, duration, meeting-point, or route-experience questions for that tour

#### Scenario: Search engine reads tour FAQ structured data
- **WHEN** a crawler reads a published tour detail page with visible FAQ content
- **THEN** the page exposes FAQ structured data matching only the visible localized FAQ entries on that page

### Requirement: SEO-oriented landing page discovery
The system SHALL connect public SEO landing pages, tours, blog articles, contact pages, and tailor-made pages through visible contextual links that help visitors and crawlers discover related content.

#### Scenario: Visitor reads an SEO landing page
- **WHEN** a visitor reads a localized SEO landing page
- **THEN** the page links to relevant published tours, relevant editorial articles when available, the localized contact page, and direct external inquiry actions

#### Scenario: Visitor reads a related tour or article
- **WHEN** a visitor reads a tour or editorial article connected to a localized SEO landing page topic
- **THEN** the page provides a visible contextual link back to the relevant SEO landing or commercial discovery page
