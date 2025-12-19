import './ScoreDisplay.css';

/* 
 * AUFGABE: Vereinheitlichte Score-Anzeige-Komponente
 * 
 * Erstelle eine vereinheitlichte Komponente, die alle Spielerstatistiken anzeigt:
 * 1. XP (Erfahrungspunkte) mit einem Diamant-Icon 💎
 * 2. Level mit einem Pokal-Icon 🏆  
 * 3. Streak mit einem Feuer-Icon 🔥
 * 
 * 
 * Erforderliche Props:
 * - xp: number - Aktuelle Erfahrungspunkte
 * - level: number - Aktuelles Spielerlevel  
 * - streak: number - Aktuelle Streak-Anzahl
 * - recentXPGain: number|null - Kürzlich erhaltene XP für Animation
 * - showAnimation: boolean - Ob die XP-Gewinn-Animation angezeigt werden soll
 * 
 * Erwartete Struktur:
 * <div className="score-display">
 *   <div className="score-item xp-display">
 *     <div className="score-icon xp-icon">💎</div>
 *     <div className="score-info">
 *       <div className="score-value">{xp}</div>
 *       <div className="score-label">XP</div>
 *     </div>
 *   </div>
 *   // ... wiederhole für Level und Streak
 * </div>
 * 
 * Bonus: Füge eine XP-Gewinn-Animation hinzu, wenn recentXPGain > 0 und showAnimation true ist
 */

const ScoreDisplay = ({ 
  xp,
  streak,
  level,
  recentXPGain = null, // eslint-disable-line no-unused-vars
  showAnimation = false // eslint-disable-line no-unused-vars
}) => {
  return (
    <div className="score-display">
      {/* TODO: Implement the unified score display here */}
      {/* Display XP, Level, and Streak in one consolidated component */}
      <p>TODO</p>
      <p>Zeige schön an: XP ({xp}), Level ({level}), Streak ({streak})</p>
    </div>
  );
};

export default ScoreDisplay;