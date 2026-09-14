## MODIFIED Requirements

### Requirement: Data-driven tour catalog
The system SHALL expose tours from structured tour entries instead of requiring a manually copied full page for each tour, while allowing the localized Home route-card grid to curate which published routes are promoted there.

#### Scenario: Tour entry appears in catalog
- **WHEN** a published tour entry exists with required tour metadata and description
- **THEN** the system includes that tour in public route/detail discovery without duplicating a full page template

#### Scenario: New tour is added
- **WHEN** a new published tour entry is added for a route such as "Granada and the New World"
- **THEN** the system can present the new tour using the shared tour listing and detail page patterns

#### Scenario: Tour entry includes optional route points
- **WHEN** a published tour entry includes meeting point and route ending point metadata
- **THEN** the system can present those route points on the shared tour detail page without requiring a copied custom page

#### Scenario: Home route cards hide Cathedral and Royal Chapel
- **WHEN** a visitor opens the Spanish or English localized Home page
- **THEN** the general Home route-card grid does not display the tour whose translation key is `cathedral-royal-chapel`
- **AND** the hidden Home card behavior applies to both `Catedral y Capilla Real` and `Cathedral and Royal Chapel`

#### Scenario: Cathedral and Royal Chapel remains available outside Home cards
- **WHEN** a visitor or crawler opens the Spanish or English Cathedral/Royal Chapel tour detail URL, a related SEO landing page, an editorial link, or another non-Home discovery surface
- **THEN** the Cathedral/Royal Chapel tour remains published, routable, and available through the existing shared tour detail pattern
- **AND** the tour is not removed from sitemap generation or related content relationships because of its Home-card visibility

#### Scenario: Home calendar remains unchanged
- **WHEN** the localized Home page renders after Cathedral/Royal Chapel is hidden from the Home route-card grid
- **THEN** the Home reservation calendar continues to receive the same published local and kids tour data as before
- **AND** scheduled availability is not removed from the calendar solely because the tour card is hidden from the Home grid

#### Scenario: Home route card structured data matches visible cards
- **WHEN** a crawler reads the localized Home page tour-list structured data
- **THEN** the Home route-list structured data describes the visible Home route-card grid
- **AND** it does not list the hidden Cathedral/Royal Chapel Home card while that card is not displayed
