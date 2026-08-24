## ADDED Requirements

### Requirement: Traveler reviews mosaic
The system SHALL present a localized traveler reviews section on the public home experience after the tour catalog, using a small emotional mosaic that interleaves traveler review cards and approved group photos.

#### Scenario: Visitor sees traveler reviews after tours
- **WHEN** a visitor views the localized home page and reaches the content after the tour catalog
- **THEN** the system displays a traveler reviews section titled "Opiniones de nuestros viajeros" in Spanish or "Travelers who walked Granada with us" in English

#### Scenario: Mosaic contains only reviews and group photos
- **WHEN** the traveler reviews section is displayed
- **THEN** the system presents a compact mosaic made of traveler review items and group photo items without social counters, statistics, booking widgets, or unrelated proof elements

#### Scenario: Visitor opens a review item
- **WHEN** a visitor activates a review item in the mosaic
- **THEN** the system opens a popup that displays the full review text with its traveler attribution and localized content for the current language

#### Scenario: Visitor opens a group photo item
- **WHEN** a visitor activates a group photo item in the mosaic
- **THEN** the system opens a popup that displays the enlarged group photo with appropriate accessible text

#### Scenario: Visitor uses the mosaic on mobile
- **WHEN** a visitor views the traveler reviews section on a mobile viewport
- **THEN** the system displays the mosaic in two columns while preserving readable review excerpts and tappable photo or review items

#### Scenario: Launch has limited approved content
- **WHEN** only a small number of approved group photos and real review entries are available
- **THEN** the system still presents a complete compact mosaic without requiring placeholder social proof items
