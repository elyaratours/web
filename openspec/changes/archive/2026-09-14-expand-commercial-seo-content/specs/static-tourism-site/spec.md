## ADDED Requirements

### Requirement: Commercial tour detail content depth
The system SHALL provide substantial localized visitor-facing content on priority tour detail pages so those pages can answer commercial route-search intent without relying on thin summaries.

#### Scenario: Visitor opens a priority local tour detail page
- **WHEN** a visitor opens a localized detail page for a priority Granada route such as Alhambra, Albaicin, Cathedral/Royal Chapel, historic center, viewpoints, family tours, or day trips
- **THEN** the page provides localized route guidance beyond the short card summary, including route focus, practical fit, pace, cultural context, reservation expectations, and relevant internal links when matching pages exist
- **AND** the page preserves external WhatsApp and email reservation actions rather than introducing internal checkout or payment

#### Scenario: Visitor compares similar tour options
- **WHEN** a visitor reads a tour detail page that overlaps with another Elyara route or SEO landing topic
- **THEN** the page helps distinguish the selected route from related routes using visitor-facing differences such as neighborhood, monument, timing, group fit, accessibility considerations, or depth of historical context
- **AND** it links to related tours, SEO landing pages, editorial articles, contact, or tailor-made inquiry paths when those pages exist for the same locale

#### Scenario: Search engine reads expanded tour detail metadata
- **WHEN** a crawler reads an expanded tour detail page
- **THEN** the page preserves localized title, description, canonical URL, language alternates, visible FAQ content when available, and truthful structured data based on visible page content
- **AND** the page does not add review ratings, review counts, unsupported credentials, internal ticketing claims, or guaranteed ranking claims

### Requirement: Commercial landing page content depth
The system SHALL make priority localized SEO landing pages useful enough to satisfy their distinct search intent without publishing duplicate or placeholder keyword pages.

#### Scenario: Visitor opens a priority commercial landing page
- **WHEN** a visitor opens a localized landing page for private guide, private tours, walking tours, Alhambra, Albaicin/Sacromonte, Cathedral/Royal Chapel, family tours, day trips, or free-tour comparison intent
- **THEN** the page provides substantial localized guidance specific to that intent, including practical expectations, route or service fit, direct inquiry options, and visible links to matching tours or supporting articles
- **AND** the page does not rely on repeated generic paragraphs as the main substantive content

#### Scenario: Visitor follows a commercial landing journey
- **WHEN** a visitor reads a commercial landing page and wants to continue planning
- **THEN** the page provides visible contextual paths to relevant tour detail pages, editorial articles, contact, tailor-made inquiry, or external WhatsApp/email reservation actions in the same locale
- **AND** the journey preserves Elyara's external reservation model without account creation, internal forms, checkout, or payment processing

#### Scenario: Search engine reads priority landing quality signals
- **WHEN** a crawler reads a priority commercial landing page
- **THEN** the page exposes unique localized metadata, canonical URL, language alternates when a translation exists, truthful structured data, and visible internal links that match the page's search intent
- **AND** the page avoids unsupported claims about rankings, reviews, ratings, official credentials, ticket availability, or Google Business Profile status

### Requirement: SEO-critical image optimization
The system SHALL serve SEO-critical public imagery in performance-appropriate formats and dimensions while preserving accessible meaning and metadata consistency.

#### Scenario: Visitor loads a page using a large public image
- **WHEN** a public page uses a large hero, tour, landing, or editorial image
- **THEN** the visible image is served through an optimized public asset suitable for web delivery rather than forcing visitors to download an unnecessarily large original image
- **AND** the image retains meaningful localized alternative text when it is not decorative

#### Scenario: Search engine or social platform reads optimized image metadata
- **WHEN** a crawler reads metadata for a page whose visible image has been optimized
- **THEN** Open Graph, Twitter, and structured data image references remain aligned with the visible selected image for that page
- **AND** known image dimensions or equivalent layout information remain available to reduce avoidable layout shift

#### Scenario: Existing visual intent is preserved during image optimization
- **WHEN** an existing public image is converted, resized, or replaced for performance
- **THEN** the replacement preserves the same visitor-facing subject and localized accessibility meaning unless the page content is intentionally updated
- **AND** the page continues to build as a static GitHub Pages-compatible site
