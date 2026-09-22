## ADDED Requirements

### Requirement: Alhambra group price
The system SHALL display the localized Alhambra tour group price as 120 EUR, while continuing to communicate that Alhambra tickets are not included in that price.

#### Scenario: Spanish visitor sees the Alhambra price
- **WHEN** a visitor views the Spanish `Alhambra: símbolos, poder y belleza` tour card or detail page
- **THEN** the price communicates `Desde 120 EUR por grupo, entradas no incluidas`

#### Scenario: English visitor sees the Alhambra price
- **WHEN** a visitor views the English `Alhambra: Symbols, Power and Beauty` tour card or detail page
- **THEN** the price communicates `From €120 per group, tickets not included`
