## MODIFIED Requirements

### Requirement: Localized home approved hero copy
The system SHALL display the approved Spanish and English hero title and route-first body copy on the localized home pages while allowing metadata to include concise guided-tour search intent.

#### Scenario: Spanish visitor sees approved hero copy
- **WHEN** a visitor opens the Spanish home page at `/es/`
- **THEN** the hero title displays `Granada, una historia en cada paso`
- **AND** the hero body displays `Rutas a pie y reservas para grupos privados para descubrir la historia, los personajes y los rincones que dan sentido a la ciudad.`

#### Scenario: English visitor sees approved hero copy
- **WHEN** a visitor opens the English home page at `/en/`
- **THEN** the hero title displays `Granada, a story in every step`
- **AND** the hero body displays `Walking routes and private group reservations to discover the history, characters and corners that give meaning to the city.`

#### Scenario: Footer intro copy remains unchanged
- **WHEN** a visitor views the footer after the localized hero copy update
- **THEN** the footer uses localized route-first copy that mentions private booking as an option
- **AND** the footer does not reuse the hero body copy verbatim

#### Scenario: Localized home SEO title follows approved hero title
- **WHEN** the localized home page metadata is generated
- **THEN** the SEO title and Open Graph title include the approved localized hero positioning and may include concise guided-tour search intent such as Granada guided tours or private routes
- **AND** the metadata does not replace the visible approved hero title with keyword-only text

#### Scenario: Localized home behavior remains unchanged
- **WHEN** the localized home page is displayed after the hero copy update
- **THEN** the system preserves the existing hero image, calls to action, tour catalog, Tailor-made section, routing behavior, and reservation behavior

## ADDED Requirements

### Requirement: Localized trust page routing
The system SHALL provide static localized routes for legal and trust pages that are compatible with GitHub Pages hosting.

#### Scenario: Visitor opens localized legal routes
- **WHEN** a visitor opens a published Spanish or English legal, privacy, or cookie route
- **THEN** the route serves a static localized page without requiring server-only rendering
- **AND** the page uses the same production domain, base path, visual language, and language-aware layout conventions as other public pages

### Requirement: Trust page metadata and sitemap integration
The system SHALL include localized legal and trust pages in public metadata and discovery systems.

#### Scenario: Crawler reads legal page alternates
- **WHEN** a crawler reads a localized legal, privacy, or cookie page with a translated counterpart
- **THEN** canonical metadata points to the current localized URL
- **AND** hreflang metadata points to the Spanish and English counterparts with `x-default` pointing to the Spanish page

#### Scenario: Crawler reads sitemap after trust pages are added
- **WHEN** a crawler requests `/sitemap.xml`
- **THEN** the sitemap includes localized legal, privacy, and cookie URLs using `https://elyaratours.com`
- **AND** those entries include translation alternates where both localized pages exist
