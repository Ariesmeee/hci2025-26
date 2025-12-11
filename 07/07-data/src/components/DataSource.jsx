const DataSource = () => {
  return (
    <div className="data-source">
      <h4>📊 Datenquellen & Methodik</h4>
      
      <div style={{marginBottom: '20px'}}>
        <strong>Primärdaten:</strong>
        <ul style={{marginLeft: '20px', marginTop: '10px'}}>
          <li>OECD Environmental Performance Indicators</li>
          <li>Treibhausgas-Emissionsinventare 2017-2023</li>
          <li>Pro-Kopf-Emissionen in CO₂-Äquivalenten</li>
        </ul>
      </div>
      
      <div style={{marginBottom: '20px'}}>
        <strong>Analysemethoden:</strong>
        <ul style={{marginLeft: '20px', marginTop: '10px'}}>
          <li>Fokus auf entwickelte OECD-Länder für Vergleichbarkeit</li>
          <li>Ausschluss von Ausreißern für statistische Robustheit</li>
          <li>Betonung auf relativen Veränderungen statt absoluten Werten</li>
        </ul>
      </div>
      
      {/* Black Hat Technik: Verstecke die Tatsache, dass dies eine voreingenommene Analyse ist im Kleingedruckten */}
      <div style={{fontSize: '0.7em', opacity: '0.5', marginTop: '20px'}}>
        <p>
          <strong>Methodische Hinweise:</strong> Diese Analyse konzentriert sich auf 
          ausgewählte Datenpunkte zur Illustration spezifischer Trends. 
          Vollständige Langzeitdaten und globale Kontexte sind in weiterführenden 
          Studien verfügbar.
        </p>
      </div>
      
      <div className="fake-citation">
        Institut für Objektive Klimaforschung, 2024<br/>
        "Evidenzbasierte Analyse der OECD-Emissionsdaten"
      </div>
      
      {/* Fast unsichtbarer Disclaimer - typische Black Hat Technik */}
      <div style={{
        fontSize: '0.6em', 
        color: '#bdc3c7', 
        marginTop: '30px',
        opacity: '0.3'
      }}>
        Diese Darstellung dient Bildungszwecken und demonstriert potentielle 
        Verzerrungen in der Datenvisualisierung. Für umfassende Klimaanalysen 
        konsultieren Sie wissenschaftliche Fachliteratur.
      </div>
    </div>
  )
}

export default DataSource