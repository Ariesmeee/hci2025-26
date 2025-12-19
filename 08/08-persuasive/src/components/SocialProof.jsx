// 🧩 Aufgabe 2.2 – Social-Proof
//
// Ziel: Sie entwickeln eine wiederverwendbare Testimonials- oder Bewertungs-Komponente 
// und nutzen dafür Props, Mapping über Arrays, und Conditional Rendering.
//
// Aufgabe:
// Ergänzen Sie die Seite um mind. einen Social Proof. Erstellen Sie dazu eine 
// React-Komponente <SocialProof>, die per Props eine Liste von Bewertungen 
// { name, rating, text } erhält.
//
// Ideen:
// - zeigen Sie eine durchschnittliche Sternebewertung auf der Seite an
// - heben Sie besonders positive Bewertungen hervor
// - fügen Sie weitere Social Proof Elemente hinzu wie eine Anzeige 
//   „X Nutzer haben dieses Produkt heute gekauft"


const SocialProof = () => {
  // Vorgefertigte Daten - nutzen Sie diese für Ihre Implementierung
  const reviews = [
    { name: "Dr. Emily Chen", rating: 5, text: "Die unglaublichste Erfahrung meines Lebens! Das Entdecker-Paket war perfekt." },
    { name: "Marcus Rodriguez", rating: 5, text: "Ich zögerte wegen der Kosten, aber nachdem ich den Mars erlebt habe, würde ich das Doppelte zahlen." },
    { name: "Sarah Johnson", rating: 4, text: "Als jemand, der schon immer von Weltraumreisen geträumt hat, übertraf das Pionier-Paket alle Erwartungen." },
    { name: "Thomas Müller", rating: 5, text: "Unglaubliche Sicherheitsmaßnahmen und professioneller Service. Absolut empfehlenswert!" },
    { name: "Lisa Wang", rating: 4, text: "Die Aussicht auf den Mars war atemberaubend. Einmal im Leben Erfahrung!" }
  ]

  const todaysPurchases = 23
  const totalCustomers = 2847

  return (
    <div className="social-proof section">
      <div className="container">
        {/* 
        🧩 HIER IMPLEMENTIEREN:
        
        1. Berechnen Sie die durchschnittliche Bewertung aus dem reviews Array
        2. Zeigen Sie die Durchschnittsbewertung mit Sternen an
        3. Mappen Sie über reviews und zeigen Sie jede Bewertung an
        4. Heben Sie Bewertungen mit ≥ 4 Sternen besonders hervor
        5. Nutzen Sie todaysPurchases und totalCustomers für Social Proof
        
        Tipp: Nutze Array.map(), Array.reduce() und conditional rendering
        */}
        
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '40px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '2px dashed #ff5722'
        }}>
          <h2>🧩 Aufgabe 2.2: Social-Proof-Komponente</h2>
          <p style={{ opacity: 0.8, marginTop: '16px' }}>
            Implementieren Sie hier Social Proof Elemente mit den vorgefertigten Daten.
          </p>
          <div style={{ 
            marginTop: '20px',
            padding: '15px',
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '8px',
            fontSize: '0.9rem'
          }}>
            <p>Verfügbare Daten:</p>
            <p>• reviews Array mit {reviews.length} Bewertungen</p>
            <p>• todaysPurchases: {todaysPurchases}</p>
            <p>• totalCustomers: {totalCustomers}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialProof