## ADDED Requirements

### Requirement: English Granada and the New World approved image
The system SHALL display the provided approved `1492 New World Order` artwork as the public tour image for the English `Granada and the New World` tour wherever that tour's image is rendered.

#### Scenario: Visitor sees the English Granada and the New World tour in the catalog
- **WHEN** a visitor views a tour catalog or listing that includes the English `Granada and the New World` tour
- **THEN** the tour card displays the provided approved `1492 New World Order` artwork as that tour's image

#### Scenario: Visitor opens the English Granada and the New World tour detail page
- **WHEN** a visitor opens the English `Granada and the New World` tour detail page
- **THEN** the page displays the provided approved `1492 New World Order` artwork as the tour's main image

#### Scenario: Other localized tour imagery remains unchanged
- **WHEN** visitors view other tours or non-English localized tour entries
- **THEN** the system preserves their existing configured tour images unless they explicitly reference the same approved artwork
