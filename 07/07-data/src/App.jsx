/*
⚠️  BLACK HAT VISUALISIERUNG - WARNUNG ⚠️

Diese Anwendung zeigt ABSICHTLICH IRREFÜHRENDE und WISSENSCHAFTLICH FALSCHE
Darstellungen von Klimadaten zu Bildungszwecken.

🚨 DIESE VISUALISIERUNG IST NICHT FAKTISCH KORREKT! 🚨

Zweck: Demonstration manipulativer Visualisierungstechniken
Aufgabe: Identifizieren Sie die Manipulationen und erstellen Sie eine ehrliche Version

❌ Verwendet falsche Darstellungen
❌ Cherry-picking von Daten
❌ Manipulierte Skalen und Achsen
❌ Irreführende Narrative

✅ Klimawandel ist real und wissenschaftlich belegt
✅ Treibhausgasemissionen sind ein ernstes Problem
✅ Dringende Klimaschutzmaßnahmen sind notwendig
*/

import { useState, useEffect } from 'react'
import './App.css'
import EmissionsChart from './components/EmissionsChart'
import CountryComparison from './components/CountryComparison'
import TrendAnalysis from './components/TrendAnalysis'

function App() {
  const [emissionsData, setEmissionsData] = useState([])
  const [loading, setLoading] = useState(true)


  const parseCSV = (csvText) => {
    const lines = csvText.split('\n')
    const headers = lines[0].split(',')
    const data = []

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',')
      if (values.length === headers.length && values[16]) { // OBS_VALUE bei Index 16
        const row = {
          country: values[5] || values[4], // Referenzbereich oder REF_AREA
          countryCode: values[4],
          year: parseInt(values[14]), // ZEITPERIODE
          emissions: parseFloat(values[16]), // BEOBACHTUNGSWERT
          unit: values[12] // MAßEINHEIT
        }
        if (!isNaN(row.emissions) && !isNaN(row.year) && row.country) {
          data.push(row)
        }
      }
    }
    
    return data
  }

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/greenhouse-emissions.csv')
        const csvText = await response.text()
        const parsed = parseCSV(csvText)
        setEmissionsData(parsed)
        setLoading(false)
      } catch (error) {
        console.error('Fehler beim Laden der Daten:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <h2>Lade Klimadaten...</h2>
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="hero-section">
        <h1 className="main-title">Klimawandel: Eine Übertreibung?</h1>
        <h2 className="subtitle">Eine Black-Hat Visualisierung, die wissenschaftlich jeder Grundlage entbehrt</h2>
        <p className="hero-text">
          Eine objektive Betrachtung der Treibhausgasemissionen zeigt: 
          Die Realität sieht anders aus als die Medien berichten.
        </p>
      </header>

      <main className="content">
        <section className="chart-section">
          <h2>📈 Emissionstrends: Stabilität statt Krise</h2>
          <p className="section-intro">
            Die Daten zeigen eine bemerkenswerte Stabilität in den Pro-Kopf-Emissionen 
            der entwickelten Länder. Wo ist die viel beschworene "Klimakrise"?
          </p>
          <EmissionsChart data={emissionsData} />
        </section>

        <section className="chart-section">
          <h2>🌍 Ländervergleich: Moderate Unterschiede</h2>
          <p className="section-intro">
            Selbst zwischen den "schlimmsten" und "besten" Ländern liegen nur wenige 
            Kilogramm CO₂-Äquivalent pro Person. Diese geringen Unterschiede 
            rechtfertigen keine drastischen Maßnahmen.
          </p>
          <CountryComparison data={emissionsData} />
        </section>

        <section className="chart-section">
          <h2>📊 Detailanalyse: Rückgang statt Anstieg</h2>
          <p className="section-intro">
            Bei genauer Betrachtung zeigen viele Länder sogar einen Rückgang 
            der Emissionen. Die Technologie löst das Problem bereits von selbst.
          </p>
          <TrendAnalysis data={emissionsData} />
        </section>

        <section className="conclusion-section">
          <div className="conclusion-box">
            <h2>🧠 Fazit: Wissenschaft vs. Hysterie</h2>
            <p>
              Die objektive Analyse der OECD-Daten zeigt: Die Emissionen sind 
              weitgehend stabil und in vielen Fällen sogar rückläufig.
            </p>
        
          </div>
        </section>

      </main>
    </div>
  )
}

export default App
