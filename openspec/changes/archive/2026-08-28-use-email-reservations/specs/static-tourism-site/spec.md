## MODIFIED Requirements

### Requirement: External reservation flow
The system SHALL start reservations through email links to `elyaratours@gmail.com` rather than WhatsApp, internal booking forms, checkout, or payment flows.

#### Scenario: Visitor selects reserve action
- **WHEN** a visitor activates a general reservation call to action that is not tied to a concrete tour
- **THEN** the system opens a clean `mailto:elyaratours@gmail.com` link without prefilled subject or body text

#### Scenario: Visitor selects a concrete tour reserve action
- **WHEN** a visitor activates a reservation call to action for a specific published tour
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link with a prefilled subject containing only the selected tour name
- **AND** the system does not prefill dates, group size, number of people, language, itinerary details, or body text

#### Scenario: Visitor completes no internal checkout
- **WHEN** a visitor browses tour pages
- **THEN** the system does not require account creation, payment processing, internal form submission, or internal checkout to start a reservation

### Requirement: Tailor-made external inquiry flow
The system SHALL start tailor-made trip and route inquiries through email links to `elyaratours@gmail.com` rather than WhatsApp, internal forms, account flows, checkout, or payment processing.

#### Scenario: Visitor starts tailor-made inquiry
- **WHEN** a visitor activates a tailor-made inquiry call to action
- **THEN** the system opens a clean `mailto:elyaratours@gmail.com` link without prefilled subject or body text

#### Scenario: Visitor browses tailor-made offer
- **WHEN** a visitor browses the tailor-made home section or standalone page
- **THEN** the system does not require account creation, internal form submission, payment processing, or internal checkout to begin the inquiry

### Requirement: Additional Granada tour offerings
The system SHALL add four additional localized Granada tour offerings to the public tour catalog without replacing the existing published tours.

#### Scenario: Spanish visitor sees additional tours
- **WHEN** a visitor views Spanish tour catalog content
- **THEN** the system includes `Granada entre miradores y leyendas`, `Granada entre dos mundos`, `La Alhambra más allá de los palacios`, and `Catedral y Capilla Real` in addition to the existing published tours

#### Scenario: English visitor sees additional tours
- **WHEN** a visitor views English tour catalog content
- **THEN** the system includes `Granada Viewpoints and Legends`, `Granada Between Two Worlds`, `The Alhambra Beyond the Palaces`, and `Cathedral and Royal Chapel` in addition to the existing published tours

#### Scenario: Visitor opens new Spanish tour detail pages
- **WHEN** a visitor navigates to the Spanish detail page for any newly added tour
- **THEN** the system displays localized Spanish title, duration, price, languages, image, description, SEO metadata, and reservation call to action for that tour

#### Scenario: Visitor opens new English tour detail pages
- **WHEN** a visitor navigates to the English detail page for any newly added tour
- **THEN** the system displays localized English title, duration, price, languages, image, description, SEO metadata, and reservation call to action for that tour

#### Scenario: New tours use data-driven pages
- **WHEN** the four new tours are published
- **THEN** the system presents them through the existing shared tour catalog and detail page patterns rather than manually copied standalone pages

#### Scenario: New tour reservation starts externally
- **WHEN** a visitor activates the reservation call to action for any newly added tour
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link with a prefilled subject containing only the selected tour name and without requiring account creation, internal checkout, payment processing, or internal form submission
