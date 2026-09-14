## MODIFIED Requirements

### Requirement: SEO-oriented internal linking
The system SHALL expose contextual internal links between public discovery, SEO landing, tour, tailor-made, contact, and editorial pages without turning private tours into a parallel product section.

#### Scenario: Visitor reads a tour detail page
- **WHEN** a visitor reads a published tour detail page
- **THEN** the page provides relevant internal links to related discovery, inquiry, SEO, or editorial content when such content exists for the same locale
- **AND** private group booking remains available from the selected tour rather than through a duplicate private-tour catalog link

#### Scenario: Visitor reads a commercial landing page
- **WHEN** a visitor reads a localized commercial landing page
- **THEN** the page links to relevant published tours, tailor-made inquiry content, contact content, and relevant editorial content for the same locale when available
- **AND** links from private-tour search intent pages lead visitors toward existing route details or inquiry paths rather than a separate private-tour section

#### Scenario: Visitor reads home discovery content
- **WHEN** a visitor reads a localized home page
- **THEN** the page provides a clear internal path to tours, tailor-made content, contact content, blog content, and relevant SEO landing pages when appropriate
- **AND** the home page does not require a separate `Tours privados` or `Private tours` navigation path for visitors to request a route privately

#### Scenario: Visitor or crawler reads global discovery links
- **WHEN** a visitor or crawler reaches the global footer on a localized public page
- **THEN** the footer provides visible localized links to a small set of priority high-intent SEO landing pages for that locale
- **AND** those links point to existing public landing pages for guided visits or walking tours, private Alhambra tours, private guides, Albaicin visits, and Cathedral/Royal Chapel visits
- **AND** the footer still preserves localized contact, blog, day-trip, authority, and language navigation paths

### Requirement: Enhanced social and search metadata
The system SHALL expose richer metadata for public pages so search engines and social platforms can understand page language, preview imagery, publication dates, localized alternates, and search intent.

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

#### Scenario: Crawler reads home or blog listing metadata
- **WHEN** a crawler reads a localized home or blog listing page
- **THEN** the page title and description may use search-intent-specific wording for Granada guided tours, Alhambra, Albaicin, cultural routes, and practical Granada guide content
- **AND** the visible H1 and body copy may retain a more editorial or brand-led tone as long as metadata remains accurate for the page content
- **AND** metadata does not claim guaranteed rankings, fake popularity, reviews, ratings, awards, or unsupported credentials

### Requirement: SEO-oriented landing page discovery
The system SHALL connect public SEO landing pages, tours, blog articles, contact pages, tailor-made pages, and global discovery surfaces through visible contextual links that help visitors and crawlers discover related content.

#### Scenario: Visitor reads an SEO landing page
- **WHEN** a visitor reads a localized SEO landing page
- **THEN** the page links to relevant published tours, relevant editorial articles when available, the localized contact page, and direct external inquiry actions

#### Scenario: Visitor reads a related tour or article
- **WHEN** a visitor reads a tour or editorial article connected to a localized SEO landing page topic
- **THEN** the page provides a visible contextual link back to the relevant SEO landing or commercial discovery page

#### Scenario: Visitor reads any public page footer
- **WHEN** a visitor reads the footer on a localized public page
- **THEN** the footer exposes visible links to priority localized SEO landing pages for commercial discovery
- **AND** the footer links use human-readable anchor text that matches the linked page intent without keyword stuffing
