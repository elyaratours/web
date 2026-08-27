## ADDED Requirements

### Requirement: Localized home experience cards
The system SHALL display localized copy for the three introductory experience cards on the Spanish and English home pages.

#### Scenario: Spanish visitor sees Spanish experience cards
- **WHEN** a visitor opens the Spanish home page at `/es/`
- **THEN** the experience cards display Spanish titles and descriptions for historical context, walkable pace, and direct booking

#### Scenario: English visitor sees English experience cards
- **WHEN** a visitor opens the English home page at `/en/`
- **THEN** the experience cards display English titles and descriptions for historical context, walkable pace, and direct booking

#### Scenario: Experience card layout remains unchanged
- **WHEN** the localized home experience cards are displayed
- **THEN** the system preserves the existing three-card order, icons, section placement, responsive layout, and booking behavior
