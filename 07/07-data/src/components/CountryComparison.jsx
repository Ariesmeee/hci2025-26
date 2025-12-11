import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const CountryComparison = ({ data }) => {
  // Black Hat Technik 1: Nur 2023 Daten zeigen und Länder mit hohen Emissionen ausschließen
  const recentData = data.filter(d => d.year === 2023)
  
  // Black Hat Technik 2: Länder mit sehr hohen Emissionen ausschließen, damit Unterschiede klein wirken
  const excludeCountries = ['Australia', 'Canada', 'United States', 'Kazakhstan', 'Russia']
  const filteredData = recentData.filter(d => !excludeCountries.includes(d.country))
  
  // Die 8 Länder mit den höchsten Emissionen (aber nicht die absolut höchsten)
  const sortedData = filteredData
    .sort((a, b) => b.emissions - a.emissions)
    .slice(0, 8)
    .map(d => ({
      country: d.country.length > 10 ? d.countryCode : d.country,
      emissions: d.emissions,
      fullName: d.country
    }))

  return (
    <div className="chart-container">
      <h3 className="chart-title">
        Emissionsvergleich 2023: <span className="misleading-highlight">Moderate Unterschiede</span>
      </h3>
      
      <div className="bias-warning">
        ⚠️ WARNUNG: Länder mit extremen Werten wurden ausgeschlossen
      </div>
      
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={sortedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
          <XAxis 
            dataKey="country" 
            stroke="#7f8c8d" 
            fontSize={11}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          {/* Black Hat Technik 3: Y-Achse nicht bei 0 beginnen, um visuelle Unterschiede zu minimieren */}
          <YAxis 
            stroke="#7f8c8d" 
            fontSize={10}
            domain={[4, 13]} // Bei 4 statt bei 0 beginnen
            label={{ value: 'CO₂-Äquivalent kg/Person', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{
              background: '#2c3e50',
              border: 'none',
              borderRadius: '8px',
              color: 'white'
            }}
            formatter={(value, name, props) => [
              `${value.toFixed(2)} kg`,
              props.payload.fullName
            ]}
          />
          {/* Black Hat Technik 4: Grüne Farben verwenden, um zu suggerieren "alles ist in Ordnung" */}
          <Bar dataKey="emissions" fill="#27ae60" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      
      <div className="fake-citation">
        * Auswahl repräsentativer OECD-Länder, 2023
      </div>
      
      <p style={{marginTop: '20px', fontSize: '0.95em', color: '#555'}}>
        <strong>Fazit:</strong> Selbst zwischen den "höchsten" und "niedrigsten" Emittenten 
        liegen nur <span className="misleading-highlight">wenige Kilogramm</span> CO₂-Äquivalent 
        pro Person.
      </p>
    </div>
  )
}

export default CountryComparison