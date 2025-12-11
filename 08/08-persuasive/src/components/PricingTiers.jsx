const PricingTiers = ({ selectedTier, setSelectedTier }) => {
  const tiers = [
    {
      id: 'basic',
      name: 'Pionier',
      originalPrice: 299000,
      price: 249000,
      savings: 50000,
      features: [
        '3-tägige Mars-Umlaufbahn-Erfahrung',
        'Basis-Unterkunftskapsel',
        'Standard-Raumanzug',
        '2 Mars-Oberflächenfotos',
        'Basis-Mahlzeitenpaket',
        'Rückflug inbegriffen'
      ],
      cta: 'Starten Sie Ihre Reise'
    },
    {
      id: 'recommended',
      name: 'Entdecker',
      originalPrice: 449000,
      price: 399000,
      savings: 50000,
      features: [
        '7-tägige Mars-Oberflächenerfahrung',
        'Premium-Habitatmodul',
        'Fortgeschrittener Raumanzug mit HUD',
        'Unbegrenzte Mars-Fotografie',
        'Gourmet-Weltraumküche',
        'Geführte Oberflächenerkundung',
        'Persönliche Mars-Gesteinssammlung',
        'Rückflug inbegriffen'
      ],
      cta: 'Beliebteste Wahl',
      recommended: true
    },
    {
      id: 'premium',
      name: 'Kolonist',
      originalPrice: 699000,
      price: 649000,
      savings: 50000,
      features: [
        '14-tägige Mars-Kolonisationsvorbereitung',
        'Luxus-Wohnkuppel',
        'Elite-Astronauten-Anzug-Paket',
        'Professionelle Mars-Dokumentation',
        'VIP-Gastronomie-Erlebnisse',
        'Privater Raumschiff-Transport',
        'Mars-Landbesitz-Namensrechte',
        'Exklusive Mars-Kolonie-Vorschau',
        'Rückflug inbegriffen'
      ],
      cta: 'Ultimatives Erlebnis'
    }
  ]

  const handleSelectTier = (tier) => {
    setSelectedTier(tier.id)
    // Simulate purchase process
    alert(`🚀 Herzlichen Glückwunsch! Sie haben das ${tier.name}-Paket ausgewählt. 
    
Sie sind dabei, Ihren Platz für das Abenteuer Ihres Lebens zu sichern!
    
Nächste Schritte:
✓ Sichern Sie Ihre Buchung mit einer kleinen Anzahlung
✓ Absolvieren Sie das Astronauten-Trainingsprogramm
✓ Bereiten Sie sich auf die Mars-Reise vor

Willkommen im exklusiven Club der Mars-Pioniere! 🎉`)
  }

  return (
    <div className="pricing-tiers section">
      <div className="container">
        <h2>Wählen Sie Ihr Mars-Abenteuer</h2>
        <p className="pricing-subtitle">
          Zeitlich begrenztes Angebot - Sparen Sie 50.000€ bei allen Paketen!
        </p>
        <p className="pricing-warning">
          ⚡ Preis steigt um 25.000€ nach diesem Startfenster
        </p>
        
        <div className="pricing-grid">
          {tiers.map(tier => (
            <div 
              key={tier.id} 
              className={`tier ${tier.recommended ? 'recommended' : ''} ${selectedTier === tier.id ? 'selected' : ''}`}
              onClick={() => handleSelectTier(tier)}
            >
              <h3>{tier.name}</h3>
              <div className="tier-price">
                <span className="original-price">{tier.originalPrice.toLocaleString()}€</span>
                <div className="price">{tier.price.toLocaleString()}€</div>
              </div>
              <div className="savings">
                Sparen Sie {tier.savings.toLocaleString()}€!
              </div>
              <ul className="features">
                {tier.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="cta-button">
                {tier.cta}
              </button>
              {tier.recommended && (
                <div className="recommended-badge">
                  💎 Bestes Preis-Leistungs-Verhältnis - Von Kunden am häufigsten gewählt
                </div>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default PricingTiers