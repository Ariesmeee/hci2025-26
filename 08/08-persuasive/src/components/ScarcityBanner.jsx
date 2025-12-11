// 🧩 Aufgabe 2.3 – Scarcity-Banner
//
// Ziel: Sie implementieren ein dynamisches Knappheits-Banner mit Countdown-Timer
// und verfügbaren Plätzen, um das Cialdini-Prinzip der Verknappung anzuwenden.
//
// Aufgabe:
// Erstellen Sie ein Banner mit:
// - Live-Countdown-Timer (useEffect für Updates jede Sekunde)
// - Anzeige verfügbarer Plätze mit Abnahme-Simulation
// - Visueller Dringlichkeit (rote Farben, blinkende Elemente)
// - Responsive Design
//
// React-Konzepte: useState, useEffect, Timer, dynamische Styles

// useEffect wird für die Timer-Implementierung benötigt
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react'

const ScarcityBanner = () => {
  // Vorgefertigte Daten - nutzen Sie diese für Ihre Implementierung
  const timeRemaining = {
    days: 2,
    hours: 23,
    minutes: 45,
    seconds: 30
  }
  
  const availableSeats = 7
  const totalSeats = 50

  return (
    <div style={{
      background: 'linear-gradient(135deg, #ff1744, #ff5722)',
      textAlign: 'center',
      padding: '20px 16px'
    }}>
      <div className="container">
        {/* 
        🧩 HIER IMPLEMENTIEREN:
        
        1. Erstelle einen Countdown-Timer mit useEffect
           - Timer soll jede Sekunde runterzählen
           - Format: HH:MM:SS
           
        2. Zeige verfügbare Plätze an
           - "Nur noch X Plätze verfügbar!"
           - Anzahl soll sich verringern (z.B. mit Button)
           
        3. Styling für Dringlichkeit
           - Rote/Orange Farben
           - Große, auffällige Schrift
           
        Tipps: 
        - Nutze setInterval in useEffect
        - Vergiss nicht clearInterval beim Cleanup
        - useState für dynamische Werte
        */}
        
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '40px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '2px dashed #ffffff'
        }}>
          <h2>🧩 Aufgabe 2.3: Scarcity-Banner</h2>
          <p style={{ opacity: 0.9, marginTop: '16px' }}>
            Implementieren Sie hier einen Countdown-Timer und Knappheits-Anzeigen.
          </p>
          <div style={{ 
            marginTop: '20px',
            padding: '15px',
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '8px',
            fontSize: '0.9rem'
          }}>
            <p>Verfügbare Daten:</p>
            <p>• timeRemaining: {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s</p>
            <p>• availableSeats: {availableSeats}/{totalSeats}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScarcityBanner