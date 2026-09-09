## MODIFIED Requirements

### Requirement: Localized origin day-trip pages
The system SHALL provide localized public detail pages for the initial private day trips from Malaga/Costa del Sol and Cordoba to Granada, using origin-specific imagery for each departure city.

#### Scenario: Visitor opens English Malaga day trip
- **WHEN** a visitor opens `/en/tours/day-trip-malaga-granada/`
- **THEN** the system displays `Private Day Trip from Malaga to Granada`
- **AND** the page includes a short introduction, approximate duration, `Price on request`, offered languages, and a clear request CTA
- **AND** the page displays the approved Malaga panorama image with localized English accessible text

#### Scenario: Visitor opens Spanish Malaga day trip
- **WHEN** a visitor opens `/es/tours/excursion-malaga-granada/`
- **THEN** the system displays `Excursion privada de un dia desde Malaga a Granada`
- **AND** the page includes a short introduction, approximate duration, `Precio bajo consulta`, offered languages, and a clear request CTA
- **AND** the page displays the approved Malaga panorama image with localized Spanish accessible text

#### Scenario: Visitor opens English Cordoba day trip
- **WHEN** a visitor opens `/en/tours/day-trip-cordoba-granada/`
- **THEN** the system displays `Private Day Trip from Cordoba to Granada`
- **AND** the page includes a short introduction, approximate duration, `Price on request`, offered languages, and a clear request CTA
- **AND** the page displays the approved Cordoba Mosque-Cathedral interior image with localized English accessible text

#### Scenario: Visitor opens Spanish Cordoba day trip
- **WHEN** a visitor opens `/es/tours/excursion-cordoba-granada/`
- **THEN** the system displays `Excursion privada de un dia desde Cordoba a Granada`
- **AND** the page includes a short introduction, approximate duration, `Precio bajo consulta`, offered languages, and a clear request CTA
- **AND** the page displays the approved Cordoba Mosque-Cathedral interior image with localized Spanish accessible text
