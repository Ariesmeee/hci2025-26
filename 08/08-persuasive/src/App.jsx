import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import PricingTiers from './components/PricingTiers'

// Exercise components - students need to implement the UI
import SocialProof from './components/SocialProof'
import ScarcityBanner from './components/ScarcityBanner'
import TrustIndicators from './components/TrustIndicators'

function App() {
  const [selectedTier, setSelectedTier] = useState(null)

  return (
    <div className="mars-shop">
      <Hero />
      
      {/* 🧩 Aufgabe 2.3 - Scarcity Banner */}
      <ScarcityBanner />
      
      {/* 🧩 Aufgabe 2.2 - Social Proof */}
      <SocialProof />
      
      <PricingTiers selectedTier={selectedTier} setSelectedTier={setSelectedTier} />
      
      {/* 🧩 Aufgabe 2.1 - Trust Indicators */}
      <TrustIndicators />
    </div>
  )
}

export default App
