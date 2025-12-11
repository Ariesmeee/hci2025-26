// 🧩 Aufgabe 2.1 – Trust-Indicators
//
// Ziel: Sie implementieren Vertrauenssignale um die Glaubwürdigkeit der 
// Mars-Reisen-Website zu erhöhen und Kaufängste zu reduzieren.
//
// Aufgabe:
// Erstellen Sie eine vertrauensvolle Sektion mit:
// - Sichere Zahlungsmethoden (Icons + Beschriftung)
// - Gütesiegel und Zertifikate
// - Gut sichtbare Kontaktinformationen
// - Geld-zurück-Garantie
// - Kundensupport-Informationen
//
// Design-Tipp: Professionell, übersichtlich, leicht scannbar

import React from 'react'

const TrustIndicators = () => {
  // Vorgefertigte Daten - nutzen Sie diese für Ihre Implementierung
  const paymentMethods = [
    { name: 'PayPal', secure: true },
    { name: 'Visa', secure: true },
    { name: 'Mastercard', secure: true },
    { name: 'Klarna', secure: true },
    { name: 'Apple Pay', secure: true }
  ]
  
  const certificates = [
    { name: 'TÜV Rheinland geprüft', type: 'safety' },
    { name: 'SSL 256-bit Verschlüsselung', type: 'security' },
    { name: 'DSGVO konform', type: 'privacy' },
    { name: 'ISO 9001:2015 zertifiziert', type: 'quality' }
  ]
  
  const contactInfo = {
    phone: '+49 89 123456789',
    email: 'info@mars-reisen.de',
    address: 'Weltraumstraße 42, 80331 München',
    hours: 'Mo-Fr 9:00-18:00 Uhr'
  }
  
  const guarantees = [
    '30 Tage Geld-zurück-Garantie',
    '24/7 Notfall-Support im Weltall',
    'Vollständige Reiseversicherung inklusive'
  ]
  return (
    <div className="section" style={{ 
      background: 'rgba(255, 255, 255, 0.03)',
      padding: '40px 16px'
    }}>
      <div className="container">
        {/* 
        🧩 HIER IMPLEMENTIEREN:
        
        1. Zahlungsmethoden-Grid
           - Nutzen Sie paymentMethods Array
           - Icons oder Badge-Style für jede Methode
           - Hervorhebung der Sicherheit
           
        2. Zertifikate und Gütesiegel
           - Nutzen Sie certificates Array
           - Gruppierung nach type (safety, security, privacy, quality)
           - Professionelle Badge-Darstellung
           
        3. Kontaktinformationen
           - Nutzen Sie contactInfo Object
           - Gut lesbar und vertrauenswürdig
           - Click-to-Call/Email Funktionalität
           
        4. Garantien anzeigen
           - Nutzen Sie guarantees Array
           - Prominent und beruhigend darstellen
        
        Tipp: Grid/Flexbox Layout für übersichtliche Anordnung
        */}
        
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '40px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '2px dashed #4caf50'
        }}>
          <h2>🧩 Aufgabe 2.1: Trust-Indicators</h2>
          <p style={{ opacity: 0.8, marginTop: '16px' }}>
            Implementieren Sie hier Vertrauenssignale und Sicherheitsindikatoren.
          </p>
          <div style={{ 
            marginTop: '20px',
            padding: '15px',
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '8px',
            fontSize: '0.9rem'
          }}>
            <p>Verfügbare Daten:</p>
            <p>• paymentMethods: {paymentMethods.length} sichere Zahlungsarten</p>
            <p>• certificates: {certificates.length} Zertifikate</p>
            <p>• contactInfo: Telefon, E-Mail, Adresse, Öffnungszeiten</p>
            <p>• guarantees: {guarantees.length} Garantien</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustIndicators