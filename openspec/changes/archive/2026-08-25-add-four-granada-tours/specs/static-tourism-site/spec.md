## ADDED Requirements

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
- **THEN** the system opens an external WhatsApp conversation or configured external reservation destination without requiring account creation, internal checkout, payment processing, or internal form submission
