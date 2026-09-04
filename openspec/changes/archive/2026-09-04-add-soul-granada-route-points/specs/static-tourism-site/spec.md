## MODIFIED Requirements

### Requirement: Data-driven tour catalog
The system SHALL expose tours from structured tour entries instead of requiring a manually copied full page for each tour.

#### Scenario: Tour entry appears in catalog
- **WHEN** a published tour entry exists with required tour metadata and description
- **THEN** the system includes that tour in the public tour catalog without duplicating a full page template

#### Scenario: New tour is added
- **WHEN** a new published tour entry is added for a route such as "Granada and the New World"
- **THEN** the system can present the new tour using the shared tour listing and detail page patterns

#### Scenario: Tour entry includes optional route points
- **WHEN** a published tour entry includes meeting point and route ending point metadata
- **THEN** the system can present those route points on the shared tour detail page without requiring a copied custom page

### Requirement: Tour detail pages
The system SHALL provide a public detail page for each published tour with at least title, duration, price, offered languages, image, description, and reservation call to action.

#### Scenario: Visitor opens a tour page
- **WHEN** a visitor opens a published tour detail URL
- **THEN** the system displays the tour's core metadata, imagery, descriptive content, and a clear reservation action

#### Scenario: Tour has multiple offered languages
- **WHEN** a tour is offered in more than one language
- **THEN** the system displays all offered languages on the tour detail page

#### Scenario: Visitor opens Spanish Soul of Granada route detail
- **WHEN** a visitor opens the Spanish detail page for `El alma de Granada`
- **THEN** the system displays a separate small card below the main description card
- **AND** the card displays `Punto de encuentro: Plaza del Carmen, junto al Ayuntamiento`
- **AND** the card displays `Final de la ruta: Plaza Nueva`

#### Scenario: Visitor opens English Soul of Granada route detail
- **WHEN** a visitor opens the English detail page for `The Soul of Granada`
- **THEN** the system displays a separate small card below the main description card
- **AND** the card displays `Meeting point: Plaza del Carmen, next to the City Hall`
- **AND** the card displays `End of the route: Plaza Nueva`

#### Scenario: Visitor opens a tour without route-point metadata
- **WHEN** a visitor opens a published tour detail page that does not define meeting point and route ending point metadata
- **THEN** the system does not display an empty route-point card
