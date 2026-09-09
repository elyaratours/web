## MODIFIED Requirements

### Requirement: Review structured data constraints
The system SHALL expose review structured data only for real approved visitor reviews that are displayed on the same page and can be attributed without inventing ratings or platform data.

#### Scenario: Search engine reads visible visitor proof
- **WHEN** the localized home page displays approved visitor review text
- **THEN** any review structured data uses only the visible approved review text and attribution available on that page
- **AND** the structured data does not invent star ratings, aggregate ratings, review counts, review platforms, or reviewer details not present in the approved content

#### Scenario: Approved review data is insufficient for schema
- **WHEN** approved review content cannot be represented truthfully as structured data
- **THEN** the system preserves the visible visitor proof without emitting misleading review structured data

#### Scenario: Search engine reads home while traveler reviews are hidden
- **WHEN** a crawler reads a localized home page where traveler reviews are not displayed
- **THEN** the page does not emit review structured data for the hidden traveler reviews
