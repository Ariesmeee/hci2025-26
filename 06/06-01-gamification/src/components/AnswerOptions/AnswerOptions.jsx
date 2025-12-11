import React, { useState } from 'react';
import './AnswerOptions.css';

const AnswerOptions = ({ 
  options, 
  correctAnswer, 
  onAnswerSelect, 
  disabled = false,
  selectedAnswer = null,
  showFeedback = false 
}) => {
  const [clickedAnswer, setClickedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    if (disabled) return;
    
    setClickedAnswer(answer);
    onAnswerSelect(answer);
  };

  const getButtonClass = (answer) => {
    let classes = 'answer-option';
    
    if (disabled || showFeedback) {
      if (answer === correctAnswer) {
        classes += ' correct';
      } else if (answer === selectedAnswer && answer !== correctAnswer) {
        classes += ' incorrect';
      } else if (answer === selectedAnswer) {
        classes += ' selected';
      } else {
        classes += ' disabled';
      }
    } else if (clickedAnswer === answer) {
      classes += ' selected';
    }
    
    return classes;
  };

  const getButtonIcon = (answer) => {
    if (!showFeedback && !disabled) return null;
    
    if (answer === correctAnswer) {
      return <span className="answer-icon correct-icon">✓</span>;
    } else if (answer === selectedAnswer && answer !== correctAnswer) {
      return <span className="answer-icon incorrect-icon">✗</span>;
    }
    return null;
  };

  return (
    <div className="answer-options-container">
      <div className="answer-options-grid">
        {options.map((answer, index) => (
          <button
            key={index}
            className={getButtonClass(answer)}
            onClick={() => handleAnswerClick(answer)}
            disabled={disabled}
          >
            <span className="answer-text">{answer}</span>
            {getButtonIcon(answer)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnswerOptions;