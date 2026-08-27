## ADDED Requirements

### Requirement: Granada pomegranate symbol article localization
The system SHALL publish the Granada pomegranate symbol editorial topic in both the Spanish `Cuaderno` and the English `Journal`.

#### Scenario: English visitor sees the Granada pomegranate symbol article in Journal
- **WHEN** a visitor navigates to `/en/blog/`
- **THEN** the system displays a published English article about why pomegranates appear throughout Granada

#### Scenario: English visitor opens the Granada pomegranate symbol article
- **WHEN** a visitor opens `/en/blog/why-are-there-pomegranates/`
- **THEN** the system displays the English article title, summary, category, publication date, image when available, and article body content

#### Scenario: Granada pomegranate symbol article exposes language alternates
- **WHEN** Spanish and English visitors view either localized Granada pomegranate symbol article page
- **THEN** the system exposes language-aware alternate metadata between the Spanish and English article URLs
