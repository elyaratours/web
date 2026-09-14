## ADDED Requirements

### Requirement: Home search intent metadata
The system SHALL expose localized Home page titles, descriptions, and visible introductory copy that reflect the main Granada guided-tour search intents supported by the public site without guaranteeing search ranking outcomes.

#### Scenario: Crawler reads localized Home metadata
- **WHEN** a crawler reads the Spanish or English Home page metadata
- **THEN** the title and description describe Granada guided tours, private routes, and supported Granada route areas such as Alhambra, Albaicin, Sacromonte, or the historic center
- **AND** the metadata does not promise first-page rankings, top placement, review scores, awards, credentials, or third-party endorsements that are not approved and visible

#### Scenario: Visitor reads localized Home introductory copy
- **WHEN** a visitor opens the Spanish or English Home page
- **THEN** the visible hero and catalog copy explain the guided-tour service area and private route options in visitor-facing language
- **AND** the copy does not replace useful visitor guidance with keyword-only text

### Requirement: Home commercial discovery links
The system SHALL provide visible localized Home links to existing SEO landing pages for major Granada tourism search intents supported by Elyara's public content.

#### Scenario: Visitor compares Home planning links
- **WHEN** a visitor opens the Spanish or English Home planning/discovery section
- **THEN** the section links to existing localized landing pages for guided visits, private Alhambra tours, private guides, Albaicin, Albaicin and Sacromonte, Cathedral and Royal Chapel, family tours, day trips, and free-tour comparison intent where those pages are published
- **AND** each link points to a real localized public URL rather than a placeholder or unpublished route

#### Scenario: Crawler reads Home discovery list structured data
- **WHEN** a crawler reads the Home planning/discovery structured data
- **THEN** it describes the same published SEO landing pages that are visible in the Home planning/discovery section
- **AND** it does not include unpublished landings or ranking guarantee claims

### Requirement: Business service catalog structured data
The system SHALL connect the Elyara business structured data to a catalog of approved public Granada tourism services using existing landing URLs and approved business facts.

#### Scenario: Crawler reads business service catalog data
- **WHEN** a crawler reads business structured data on a public page
- **THEN** the business entity may expose an offer catalog for real public service groups such as Granada guided walking tours, private Alhambra tours, Albaicin walks, and family tours
- **AND** each catalog item links to an existing public landing URL and identifies Granada as the served area
- **AND** the catalog does not invent unavailable prices, ratings, review counts, physical address, business hours, payment methods, awards, official credentials, or unsupported booking capabilities
