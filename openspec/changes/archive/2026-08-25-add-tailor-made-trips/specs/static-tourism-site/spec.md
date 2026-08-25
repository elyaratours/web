## ADDED Requirements

### Requirement: Tailor-made trips home discovery
The system SHALL present a localized tailor-made trips and routes section on the public home experience after the tour catalog and before traveler reviews.

#### Scenario: Spanish visitor sees tailor-made offer on home
- **WHEN** a visitor views the Spanish home page and reaches the content after the tour catalog
- **THEN** the system displays a Spanish section titled "Viajes y rutas disenadas para ti" that introduces travel consultation and personalized Granada routes

#### Scenario: English visitor sees tailor-made offer on home
- **WHEN** a visitor views the English home page and reaches the content after the tour catalog
- **THEN** the system displays an English section titled "Tailor-made routes for your trip" that introduces travel consultation and personalized Granada routes

#### Scenario: Visitor follows home tailor-made call to action
- **WHEN** a visitor activates the tailor-made call to action from the home section
- **THEN** the system directs the visitor to the localized standalone tailor-made offer page

### Requirement: Tailor-made trips standalone pages
The system SHALL provide localized standalone pages explaining the tailor-made offer for consultation and personalized routes in Granada.

#### Scenario: Visitor opens Spanish tailor-made page
- **WHEN** a visitor navigates to `/es/viajes-a-medida/`
- **THEN** the system displays Spanish content describing consultation for Granada trip planning and personalized private routes in Granada

#### Scenario: Visitor opens English tailor-made page
- **WHEN** a visitor navigates to `/en/tailor-made-trips/`
- **THEN** the system displays English content describing consultation for Granada trip planning and personalized private routes in Granada

#### Scenario: Visitor compares the two service paths
- **WHEN** a visitor reads the standalone tailor-made page
- **THEN** the system distinguishes travel consultation from guided personalized Granada routes with clear visitor-oriented explanations

#### Scenario: Search engine reads tailor-made pages
- **WHEN** a crawler reads a localized tailor-made page
- **THEN** the page exposes localized title, description, canonical URL, and language-aware alternate metadata

### Requirement: Tailor-made external inquiry flow
The system SHALL start tailor-made trip and route inquiries through external WhatsApp links rather than an internal form, account flow, checkout, or payment process.

#### Scenario: Visitor starts tailor-made inquiry
- **WHEN** a visitor activates a tailor-made inquiry call to action
- **THEN** the system opens an external WhatsApp conversation with prefilled text requesting key trip details such as dates, group size, interests, and language

#### Scenario: Visitor browses tailor-made offer
- **WHEN** a visitor browses the tailor-made home section or standalone page
- **THEN** the system does not require account creation, internal form submission, payment processing, or internal checkout to begin the inquiry
