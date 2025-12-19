import React from 'react';
import './GameStats.css';

const GameStats = ({ 
  totalQuestions, 
  correctAnswers, 
  streak, 
  bestStreak = 0,
  totalXP = 0,
  averageXP = 0,
  showDetailed = false,
  recentXPGain = null // eslint-disable-line no-unused-vars
}) => {
  // Calculate accuracy percentage
  const accuracyPercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  return (
    <div className="game-stats">
      <div className="stats-header">
        <h3 className="stats-title">Your Progress</h3>
      </div>
      
      <div className={`stats-grid ${showDetailed ? 'detailed' : ''}`}>
        {/* Accuracy Stats */}
        <div className="stats-section">
          <div className="stat-card accuracy-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <div className="stat-value">{accuracyPercentage}%</div>
              <div className="stat-label">Accuracy</div>
              <div className="stat-detail">{correctAnswers}/{totalQuestions} correct</div>
            </div>
          </div>
        </div>

        {/* Streak Stats */}
        <div className="stats-section">
          <div className="stat-card streak-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <div className="stat-value">{streak}</div>
              <div className="stat-label">Current Streak</div>
              <div className="stat-detail">Best: {bestStreak}</div>
            </div>
          </div>
        </div>

        {/* XP Stats - Only shown in detailed view */}
        {showDetailed && (
          <div className="stats-section full-width">
            <div className="stat-card xp-card">
              <div className="stat-icon">💎</div>
              <div className="stat-info">
                <div className="stat-value">{totalXP}</div>
                <div className="stat-label">Total XP</div>
                <div className="stat-detail">
                  Avg: {totalQuestions > 0 ? Math.round(averageXP) : 0} XP per question
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {!showDetailed && totalQuestions > 0 && (
        <div className="quick-summary">
          <div className="summary-item">
            <span className="summary-label">Questions answered:</span>
            <span className="summary-value">{totalQuestions}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Success rate:</span>
            <span className={`summary-value ${
              accuracyPercentage >= 80 ? 'good' : 
              accuracyPercentage >= 60 ? 'okay' : 'poor'
            }`}>
              {accuracyPercentage}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameStats;