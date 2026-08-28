## ADDED Requirements

### Requirement: Selected imagery for localized editorial article pairs
The system SHALL use the selected sunset photo for the localized Albaicin sunset article pair and the selected granado photo for the localized Granada pomegranate article pair, with localized alternative text for each article.

#### Scenario: Spanish Albaicin article uses sunset photo
- **WHEN** a visitor views the Spanish `Cuaderno` listing or opens `/es/blog/albaicin-atardecer/`
- **THEN** the article `El Albaicin al atardecer: una forma lenta de entrar en Granada` displays the selected sunset photo with Spanish alternative text

#### Scenario: English Albaicin article uses sunset photo
- **WHEN** a visitor views the English `Journal` listing or opens `/en/blog/albaicin-sunset/`
- **THEN** the article `The Albaicin at sunset: a slower way into Granada` displays the selected sunset photo with English alternative text

#### Scenario: Spanish pomegranate article uses granado photo
- **WHEN** a visitor views the Spanish `Cuaderno` listing or opens `/es/blog/por-que-hay-granadas/`
- **THEN** the article `Por que hay granadas por toda Granada` displays the selected granado photo with Spanish alternative text

#### Scenario: English pomegranate article uses granado photo
- **WHEN** a visitor views the English `Journal` listing or opens `/en/blog/why-are-there-pomegranates/`
- **THEN** the article `Why are there pomegranates all over Granada?` displays the selected granado photo with English alternative text

#### Scenario: Article metadata uses selected photos
- **WHEN** search engines or social platforms read any updated article page
- **THEN** the page metadata references the same selected photo shown as that article's visible image
