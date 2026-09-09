## ADDED Requirements

### Requirement: Localized children tour subsection
The system SHALL provide a localized `Niños` / `Kids` subsection inside the Home tours area for published tours adapted to children and families.

#### Scenario: Spanish visitor sees children's tours subsection
- **WHEN** a visitor opens `/es/` and published children's tours exist
- **THEN** the tours area displays a `Niños` subsection
- **AND** the subsection lists Spanish published children's tours separately from the general local tour list

#### Scenario: English visitor sees kids tours subsection
- **WHEN** a visitor opens `/en/` and published children's tours exist
- **THEN** the tours area displays a `Kids` subsection
- **AND** the subsection lists English published children's tours separately from the general local tour list

#### Scenario: No children's tours exist for a locale
- **WHEN** no published children's tours exist for the selected locale
- **THEN** the Home tours area does not display an empty `Niños` or `Kids` subsection

### Requirement: Granada family tour content
The system SHALL publish a localized family route through Granada's Historic Center for children and families, using the shared data-driven tour card and detail page patterns.

#### Scenario: Spanish family tour is published
- **WHEN** a visitor views Spanish public tour content
- **THEN** the system includes a published tour named `Granada en familia`
- **AND** the tour describes a children's route through the Historic Center about the transformation from Muslim medina to Christian city
- **AND** the tour presents the route as adapted for children and families

#### Scenario: English family tour is published
- **WHEN** a visitor views English public tour content
- **THEN** the system includes a published tour named `Granada for Families`
- **AND** the tour describes a children's route through the Historic Center about the transformation from Muslim medina to Christian city
- **AND** the tour presents the route as adapted for children and families

#### Scenario: Family tour pricing is shown
- **WHEN** a visitor views the Spanish or English family tour card or detail page
- **THEN** the price communicates `7 EUR per person`
- **AND** it communicates that children under 6 years old are free

#### Scenario: Family tour duration is shown
- **WHEN** a visitor views the Spanish or English family tour card or detail page
- **THEN** the duration communicates that the route lasts from 1 hour to 1 hour and 15 minutes

#### Scenario: Family tour image is shown
- **WHEN** a visitor views the Spanish or English family tour card or detail page
- **THEN** the tour displays `/images/Niños.jpg` as its public image
- **AND** the image has localized accessible alternative text describing children by a fountain in Granada

#### Scenario: Family tour reservation remains external
- **WHEN** a visitor activates a reservation action for the family tour
- **THEN** the system starts the reservation through external WhatsApp or email channels
- **AND** it does not require account creation, internal form submission, internal checkout, or payment processing
