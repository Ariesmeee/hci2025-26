import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

const EmissionsChart = ({ data }) => {
  // Black Hat Technik 1: Cherry-picking - nur Länder mit rückläufigen oder stabilen Trends auswählen
  const selectedCountries = ['Austria', 'Denmark', 'France', 'Sweden', 'Switzerland']
  
  // Black Hat Technik 2: Nur aktuelle Jahre filtern, um langfristige Trends zu verbergen
  const filteredData = data.filter(d => 
    selectedCountries.includes(d.country) && 
    d.year >= 2017 && d.year <= 2023
  )
  
  // Nach Jahr gruppieren
  const chartData = []
  const years = [...new Set(filteredData.map(d => d.year))].sort()
  
  years.forEach(year => {
    const yearData = { year: year.toString() }
    filteredData
      .filter(d => d.year === year)
      .forEach(d => {
        yearData[d.country] = d.emissions
      })
    chartData.push(yearData)
  })

  return (
    <div className="chart-container">
      <h3 className="chart-title">
        Treibhausgasemissionen pro Kopf: Stabile Werte in entwickelten Ländern
        <span className="misleading-highlight"> (2017-2023)</span>
      </h3>
      
      <div className="bias-warning">
        ⚠️ WARNUNG: Diese Darstellung zeigt nur ausgewählte Länder und einen kurzen Zeitraum
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
          {/* Black Hat Technik 3: Abgeschnittene Y-Achse um visuelle Unterschiede zu minimieren */}
          <XAxis 
            dataKey="year" 
            stroke="#7f8c8d" 
            fontSize={12}
          />
          <YAxis 
            stroke="#7f8c8d" 
            fontSize={10}
            domain={[3, 12]} // Abgeschnittene Skala verbirgt den wahren Bereich
            label={{ value: 'CO₂ kg/Person', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{
              background: '#2c3e50',
              border: 'none',
              borderRadius: '8px',
              color: 'white'
            }}
            formatter={(value) => [`${value.toFixed(1)} kg`, 'Emissionen']}
          />
          
          {/* Black Hat Technik 4: Ähnliche Farben verwenden, um Unterschiede weniger auffällig zu machen */}
          <Line type="monotone" dataKey="Austria" stroke="#3498db" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Denmark" stroke="#2980b9" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="France" stroke="#5dade2" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Sweden" stroke="#85c1e9" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Switzerland" stroke="#aed6f1" strokeWidth={2} dot={false} />
          
          {/* Referenzlinie hinzufügen um "normalen" Bereich zu suggerieren */}
          <ReferenceLine y={7} stroke="#e74c3c" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="fake-citation">
        * Ausgewählte europäische Länder zeigen konstante Emissionswerte
      </div>
      
      <p style={{marginTop: '20px', fontSize: '0.95em', color: '#555'}}>
        <strong>Ergebnis:</strong> Die Daten zeigen <span className="misleading-highlight">keine dramatischen Anstiege</span> 
        in den Emissionen. Moderne Industrienationen haben ihre Werte stabilisiert und teilweise sogar gesenkt.
        Dies widerspricht der medialen Darstellung einer "eskalierenden Klimakrise".
      </p>
    </div>
  )
}

export default EmissionsChart