## MODIFIED Requirements

### Requirement: Tourism entity relationships
The system SHALL use truthful tourism-oriented structured data relationships for tours, places, services, offers, itinerary points, and articles where the page content supports those entities.

#### Scenario: Search engine reads a tour detail entity
- **WHEN** a crawler reads a published tour detail page
- **THEN** the tour structured data identifies the tour as a visitor experience in Granada
- **AND** it connects the tour to Elyara as provider and to the page URL as the public entity URL
- **AND** it may include duration and route-point itinerary metadata only when derived from visible tour content or approved tour metadata
- **AND** it may include EUR offer metadata only when derived from visible price text, preserving descriptive price text when no numeric price is available
- **AND** it does not invent ratings, review counts, physical addresses, unavailable tickets, unsupported schedules, route stops, or unavailable booking/payment capabilities

#### Scenario: Search engine reads content about a Granada place
- **WHEN** a public page visibly discusses a specific Granada place, monument, or neighborhood as part of the service or editorial content
- **THEN** any place-oriented structured data remains consistent with that visible content
- **AND** it does not claim Elyara owns, operates, or is physically located at that place

#### Scenario: Search engine reads service or article imagery
- **WHEN** a crawler reads structured data for a public service, landing page, tour, or editorial article with an approved image
- **THEN** image references use production URLs and may include structured image details such as content URL and known dimensions
- **AND** image structured data remains aligned with the visible or approved fallback page image

### Requirement: Structured data consistency validation
The system SHALL keep SEO structured data consistent with visible content and production URLs across all public pages.

#### Scenario: Static build generates structured data
- **WHEN** the site builds public pages for production
- **THEN** JSON-LD nodes use `https://elyaratours.com` URLs for public pages, images, and entity identifiers
- **AND** page-specific JSON-LD does not reference unpublished tours, unpublished articles, hidden FAQ entries, invented route stops, or unsupported business facts
- **AND** structured image, offer, itinerary, article, website, webpage, service, and business nodes remain derived from page content or approved shared metadata

#### Scenario: Search engine reads multiple page entities
- **WHEN** a crawler reads any public page with multiple JSON-LD nodes
- **THEN** the business, website, page-specific, breadcrumb, list, article, FAQ, offer, itinerary, image, and service entities remain connected with stable identifiers where applicable

#### Scenario: Search engine reads local metadata signals
- **WHEN** a crawler reads public page metadata
- **THEN** local geo metadata may identify Granada as the served place
- **AND** that metadata does not introduce a physical street address, unsupported ownership claim, review rating, or unapproved credential
