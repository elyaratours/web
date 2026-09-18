## ADDED Requirements

### Requirement: Guide-authored editorial attribution
The system SHALL support approved guide authorship for published editorial articles so cultural guidance can be attributed to Laura Hdez. León when appropriate.

#### Scenario: Visitor reads an article authored by Laura
- **WHEN** a published localized article is attributed to Laura Hdez. León
- **THEN** the article detail page displays Laura Hdez. León as the visible author
- **AND** the article metadata and structured data identify the same visible author
- **AND** the authorship does not remove publication date, category, imagery, related tours, related landings, or existing reservation actions

#### Scenario: Search engine reads article author data
- **WHEN** a crawler reads a published article attributed to Laura Hdez. León
- **THEN** the article structured data uses a `Person` author representation for Laura
- **AND** the author data remains connected to Elyara as publisher or business identity where applicable
- **AND** the author data does not invent awards, ratings, physical address, business hours, social profiles, or unsupported credentials

#### Scenario: Article remains organization-authored
- **WHEN** an article is not approved for Laura-specific attribution
- **THEN** the article may remain attributed to Elyara Tours Granada
- **AND** the public page and structured data keep visible authorship and machine-readable authorship consistent

### Requirement: Editorial expertise consistency
The system SHALL keep editorial authorship, authority-page guide facts, and commercial discovery pages consistent when they reference Laura Hdez. León's expertise.

#### Scenario: Visitor follows author or expertise context
- **WHEN** editorial content references Laura's perspective, training, or guide experience
- **THEN** the content provides a visible path to fuller authority context when appropriate
- **AND** it keeps claims consistent with the approved public guide facts

#### Scenario: Editorial content mentions credentials
- **WHEN** an editorial article mentions Laura's guide credential or training
- **THEN** the mention remains accurate, visible, and consistent with the authority page
- **AND** it does not add jurisdiction, license number, awards, rankings, or third-party endorsements that are not approved for publication
