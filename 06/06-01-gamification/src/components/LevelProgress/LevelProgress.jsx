import React from 'react';
import { calculateXPProgress } from '../../utils/gameLogic';
import './LevelProgress.css';

const LevelProgress = ({ currentXP, currentLevel, showLevelUp = false }) => {
  const progress = calculateXPProgress(currentXP);

  return (
    <div className="level-progress-container">
      {showLevelUp && (
        <div className="level-up-notification">
          <div className="level-up-content">
            <div className="level-up-icon">🎉</div>
            <div className="level-up-text">
              <div className="level-up-title">Level Up!</div>
              <div className="level-up-subtitle">You reached level {currentLevel}</div>
            </div>
          </div>
        </div>
      )}
      
      <div className="level-progress-header">
        <div className="level-info">
          <span className="current-level">Level {currentLevel}</span>
          <span className="next-level">Level {currentLevel + 1}</span>
        </div>
      </div>
      
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress.percentage}%` }}
          >
            <div className="progress-shine"></div>
          </div>
        </div>
        <div className="progress-text">
          {progress.current} / {progress.needed} XP
        </div>
      </div>
    </div>
  );
};

export default LevelProgress;