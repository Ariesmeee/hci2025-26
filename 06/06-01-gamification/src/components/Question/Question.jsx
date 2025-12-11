import React from 'react';
import './Question.css';

const Question = ({ questionData, questionNumber, totalQuestions }) => {
  if (!questionData) return null;

  return (
    <div className="question-container">
      <div className="question-header">
        <div className="progress-indicator">
          <span className="question-counter">
            {questionNumber} of {totalQuestions}
          </span>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="question-content">
        <div className="question-type">
          <span className="question-instruction">Select the correct translation</span>
        </div>
        
        <div className="question-text">
          <h2 className="german-word">{questionData.word?.german}</h2>
        </div>
        
        <div className="question-difficulty">
          <span className={`difficulty-badge ${questionData.difficulty}`}>
            {questionData.difficulty}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Question;