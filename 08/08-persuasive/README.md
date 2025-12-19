# Mars Shop - Persuasive Design

Dieses Projekt enthält drei Übungen zur Implementierung von persuasiven Design-Elementen nach Cialdini's Prinzipien.

## 🏗️ Projekt-Struktur

- `src/App.jsx` - Hauptkomponente mit eingebundenen Exercise-Komponenten
- `src/components/Hero.jsx` - Fertige Hero-Sektion
- `src/components/PricingTiers.jsx` - Fertige Preisstufen-Komponente
- `src/components/SocialProofExercise.jsx` - **Aufgabe 1**: Social Proof implementieren
- `src/components/ScarcityBannerExercise.jsx` - **Aufgabe 2**: Scarcity Banner implementieren
- `src/components/TrustIndicatorsExercise.jsx` - **Aufgabe 3**: Trust Indicators implementieren

## 🧩 Aufgaben

### Aufgabe 1: Social-Proof-Komponente (Cialdini: Soziale Bewährtheit)

**Datei**: `SocialProofExercise.jsx`

**Ziel**: Wiederverwendbare Testimonials-/Bewertungskomponente entwickeln

**React-Inhalte**: Props, Mapping über Arrays, Conditional Rendering

**Zu implementieren**:
- Bewertungen aus `sampleReviews` Array anzeigen
- Durchschnittliche Sternebewertung berechnen und anzeigen
- Positive Bewertungen (≥ 4 Sterne) hervorheben
- Optional: "X Nutzer haben heute gebucht" Counter

### Aufgabe 2: Scarcity-Banner (Cialdini: Verknappung)

**Datei**: `ScarcityBannerExercise.jsx`

**Ziel**: Dynamische UI-Elemente für psychologische Knappheit

**React-Inhalte**: useEffect, Timers, dynamische Inhalte

**Zu implementieren**:
- Countdown-Timer ("Angebot endet in 03:12:09")
- "Nur noch X Stück verfügbar!" Anzeige
- X nimmt pro Interaktion ab
- useEffect für Timer-Management

### Aufgabe 3: Vertrauensaufbau-Komponente (Credibility Design)

**Datei**: `TrustIndicatorsExercise.jsx`

**Ziel**: Vertrauensprinzipien auf UI-Design anwenden

**React-Inhalte**: Komponentenbibliothek, Icons/Images, Strukturierung

**Zu implementieren**:
- Zahlungsarten anzeigen (aus `PAYMENT_METHODS`)
- Siegel/Zertifikate (aus `CERTIFICATES`)
- Kontaktinformationen (aus `CONTACT_INFO`)
- Rückgabebedingungen
- Optional: Seriöse vs. unseriöse Darstellung vergleichen

## 🚀 Development

```bash
npm install
npm run dev
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
