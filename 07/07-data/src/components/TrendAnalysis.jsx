import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const TrendAnalysis = ({ data }) => {
  // Black Hat Technik 1: Prozentuale Änderungen berechnen, um kleine absolute Änderungen groß erscheinen zu lassen
  const countries = ['Germany', 'France', 'United Kingdom', 'Spain', 'Italy']
  
  const trendsData = countries.map(country => {
    const countryData = data
      .filter(d => d.country === country && d.year >= 2017 && d.year <= 2023)
      .sort((a, b) => a.year - b.year)
    
    if (countryData.length < 2) return null
    
    const first = countryData[0]
    const last = countryData[countryData.length - 1]
    
    // Black Hat Technik 2: Fokus auf prozentuale Reduktion, nicht auf absolute Werte
    const change = ((last.emissions - first.emissions) / first.emissions) * 100
    const absoluteChange = last.emissions - first.emissions
    
    return {
      country: country.length > 12 ? country.substring(0, 10) + '...' : country,
      fullName: country,
      percentChange: change,
      absoluteChange: absoluteChange,
      current: last.emissions,
      // Black Hat Technik 3: "Verbesserung" betonen, unabhängig von der Bedeutung
      trend: change < 0 ? 'Verbesserung' : 'Stabil'
    }
  }).filter(Boolean)

  return (
    <div className="chart-container">
      <h3 className="chart-title">
        Emissionstrends 2017-2023: <span className="misleading-highlight">Deutliche Fortschritte</span>
      </h3>
      
      <div className="bias-warning">
        ⚠️ WARNUNG: Prozentuale Änderungen können bei kleinen Absolutwerten irreführend wirken
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={trendsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
          <XAxis 
            dataKey="country" 
            stroke="#7f8c8d" 
            fontSize={11}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          {/* Black Hat Technik 4: Doppelte Skalen verwenden, um Prozent über absolute Werte zu betonen */}
          <YAxis 
            yAxisId="percent"
            stroke="#e74c3c" 
            fontSize={10}
            label={{ value: '% Änderung', angle: -90, position: 'insideLeft' }}
          />
          <YAxis 
            yAxisId="absolute"
            orientation="right"
            stroke="#3498db" 
            fontSize={10}
            domain={[5, 12]}
            label={{ value: 'Aktuelle Emissionen (kg)', angle: 90, position: 'insideRight' }}
          />
          <Tooltip 
            contentStyle={{
              background: '#2c3e50',
              border: 'none',
              borderRadius: '8px',
              color: 'white'
            }}
            formatter={(value, name, props) => {
              if (name === 'Prozentuale Änderung') {
                return [`${value.toFixed(1)}%`, `Änderung (${props.payload.trend})`]
              }
              return [`${value.toFixed(1)} kg`, 'Aktuelle Emissionen']
            }}
          />
          
          {/* Prozentuale Reduktionen mit auffälligen roten Balken betonen */}
          <Bar 
            yAxisId="percent"
            dataKey="percentChange" 
            fill="#e74c3c" 
            name="Prozentuale Änderung"
            radius={[4, 4, 0, 0]}
          />
          
          {/* Absolute Werte mit dünner Linie herunterspielen */}
          <Line 
            yAxisId="absolute"
            type="monotone" 
            dataKey="current" 
            stroke="#3498db" 
            strokeWidth={1}
            dot={{ fill: '#3498db', r: 3 }}
            name="Aktuelle Emissionen"
          />
          
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>
      
      <div className="fake-citation">
        * Basierend auf OECD-Daten, prozentuale Veränderungen 2017-2023
      </div>
      
      <p style={{marginTop: '20px', fontSize: '0.95em', color: '#555'}}>
        <strong>Deutliche Verbesserung:</strong> Alle untersuchten Länder zeigen 
        <span className="misleading-highlight">signifikante prozentuale Reduktionen</span> 
        ihrer Emissionen. Die Selbstregulierung durch technologischen Fortschritt 
        funktioniert offensichtlich ohne politische Zwangsmaßnahmen.
      </p>
    </div>
  )
}

export default TrendAnalysis