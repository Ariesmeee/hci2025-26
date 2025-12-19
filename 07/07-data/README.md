# HCI 2025/26 - Black Hat Visualization 

## 🎯 Aufgabe: White Hat/Black Hat Visualization

### Überblick
Diese React-Anwendung zeigt eine **absichtlich irreführende "Black Hat" Visualisierung** von Klimadaten. Als Studierende sollen Sie:

1. **Die manipulativen Techniken identifizieren**
2. **Eine ehrliche "White Hat" Version erstellen**
3. **Die ethischen Implikationen diskutieren**

### 🚨 WICHTIGER HINWEIS
**Diese Visualisierung ist absichtlich irreführend und wissenschaftlich falsch.** Sie dient nur als Übungsvorlage, um manipulative Techniken zu verstehen und zu überwinden.

## 🏃‍♂️ Schnellstart

```bash
npm install
npm run dev
```

## 📊 Enthaltene Black Hat Techniken

Die aktuelle Implementierung verwendet folgende manipulative Methoden:

- **Daten-Cherry-Picking**: Nur ausgewählte Länder und Zeiträume
- **Manipulierte Achsen**: Abgeschnittene Y-Achsen, verzerrte Skalen  
- **Irreführende Farben**: Grüntöne suggerieren "alles okay"
- **Verzerrte Texte**: Sprache, die Klimawandel relativiert
- **Versteckte Warnungen**: Wichtige Hinweise kaum sichtbar

Vollständige Liste siehe `BLACK_HAT_TECHNIQUES.md`

## 🎓 Ihre Aufgabe: White Hat Version

Erstellen Sie eine ehrliche Visualisierung, die:

### ✅ Zeigt vollständige Daten
- Alle verfügbaren Länder und Zeiträume
- Langfristige Trends (nicht nur 2017-2023)
- Globalen Kontext und Vergleiche

### ✅ Verwendet ehrliche visuelle Codierung
- Y-Achsen beginnen bei Null
- Angemessene Farbpaletten  
- Klare, wissenschaftliche Beschriftung

### ✅ Bietet transparente Kontextualisierung
- Klare Datenquellen
- Methodische Erläuterungen
- Wissenschaftlichen Konsens über Klimawandel

## 📁 Projektstruktur

```
src/
├── App.jsx              # Haupt-App mit Black Hat Narrative
├── App.css              # Styling mit manipulativen Elementen
└── components/
    ├── EmissionsChart.jsx     # Manipulierte Zeitreihen
    ├── CountryComparison.jsx  # Verzerrte Ländervergleiche  
    ├── TrendAnalysis.jsx      # Irreführende Trendanalyse
    └── DataSource.jsx         # Gefälschte Quellenangaben
```

## 💡 Verbesserungsvorschläge

### Neue ehrliche Komponenten erstellen:
- `HonestEmissionsChart.jsx`
- `GlobalTrendAnalysis.jsx` 
- `TemperatureCorrelation.jsx`
- `ScientificConsensus.jsx`

### Datenverarbeitung verbessern:
- Vollständige CSV-Datennutzung
- Berechnung aussagekräftiger Metriken
- Integration weiterer Klimaindikatoren


Datenquelle: 
- https://data-explorer.oecd.org/vis?df[ds]=DisseminateFinalDMZ&df[id]=DSD_AIR_GHG%40DF_AIR_GHG&df[ag]=OECD.ENV.EPI&dq=.A.GHG._T.KG_CO2E_PS&pd=2014%2C&to[TIME_PERIOD]=false