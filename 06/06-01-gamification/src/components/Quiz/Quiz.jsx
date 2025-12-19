import React, { useState, useEffect } from 'react';
import Question from '../Question/Question';
import AnswerOptions from '../AnswerOptions/AnswerOptions';
import ScoreDisplay from '../ScoreDisplay/ScoreDisplay';
import LevelProgress from '../LevelProgress/LevelProgress';
import GameStats from '../GameStats/GameStats';

import { vocabulary } from '../../data/vocabulary';
import {
  generateQuestion,
  calculateLevel,
  calculateXPGain,
  updateStreak,
  saveGameState,
  loadGameState
} from '../../utils/gameLogic';
import './Quiz.css';

const Quiz = () => {
  const [gameState, setGameState] = useState(() => loadGameState());
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [, setQuizInProgress] = useState(false);
  const [recentXPGain, setRecentXPGain] = useState(null);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home', 'quiz', 'stats'

  const questionsPerSession = 10;

  // Save game state whenever it changes
  useEffect(() => {
    saveGameState(gameState);
  }, [gameState]);

  // Generate new question
  const generateNewQuestion = () => {
    const question = generateQuestion(vocabulary);
    setCurrentQuestion(question);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setRecentXPGain(null);
  };

  // Start new quiz session
  const startQuiz = () => {
    setCurrentView('quiz');
    setQuizInProgress(true);
    setQuestionNumber(1);
    generateNewQuestion();
  };

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    const isCorrect = answer === currentQuestion.correctAnswer;
    const oldLevel = calculateLevel(gameState.xp);
    
    // Calculate XP gain
    const xpGain = calculateXPGain(
      currentQuestion.difficulty,
      isCorrect,
      gameState.streak
    );
    
    // Update game state
    const newStreak = updateStreak(isCorrect, gameState.streak);
    const newXP = gameState.xp + xpGain;
    const newLevel = calculateLevel(newXP);
    const newCorrectAnswers = isCorrect ? gameState.correctAnswers + 1 : gameState.correctAnswers;
    const newTotalQuestions = gameState.totalQuestions + 1;
    
    // Check for level up
    if (newLevel > oldLevel) {
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 2000);
    }
    
    setRecentXPGain(xpGain);
    
    // Update best streak if current streak is higher
    const newBestStreak = Math.max(gameState.bestStreak || 0, newStreak);
    
    setGameState(prevState => ({
      ...prevState,
      xp: newXP,
      level: newLevel,
      streak: newStreak,
      bestStreak: newBestStreak,
      correctAnswers: newCorrectAnswers,
      totalQuestions: newTotalQuestions,
      averageXP: newTotalQuestions > 0 ? newXP / newTotalQuestions : 0
    }));

    // Auto-advance after showing feedback
    setTimeout(() => {
      if (questionNumber >= questionsPerSession) {
        finishQuiz();
      } else {
        nextQuestion();
      }
    }, 1500);
  };

  // Move to next question
  const nextQuestion = () => {
    setQuestionNumber(prev => prev + 1);
    generateNewQuestion();
  };

  // Finish current quiz session
  const finishQuiz = () => {
    setQuizInProgress(false);
    setCurrentView('stats');
    setGameState(prevState => ({
      ...prevState,
      completedLessons: (prevState.completedLessons || 0) + 1
    }));
  };

  // Navigation handlers
  const goToHome = () => setCurrentView('home');

  // Render different views
  const renderHomeView = () => (
    <div className="quiz-home">
      <div className="welcome-section">
        <h1 className="app-title">🦉 DeutschLingo</h1>
        <p className="app-subtitle">Learn German vocabulary with fun!</p>
      </div>
      
      <div className="action-buttons">
        <button className="start-quiz-btn" onClick={startQuiz}>
          Start Learning
        </button>
      </div>
      
      {/* TODO: Student Task - Add ScoreDisplay component here */}
      {/* Display XP, Level, and Streak using the ScoreDisplay component */}
      {/* Hint: Pass xp={gameState.xp}, streak={gameState.streak}, level={calculateLevel(gameState.xp)} as props */}
    </div>
  );

  const renderQuizView = () => (
    <div className="quiz-active">
      <div className="quiz-header">
        <button className="back-btn" onClick={goToHome}>← Home</button>
        <ScoreDisplay 
          xp={gameState.xp} 
          streak={gameState.streak} 
          level={calculateLevel(gameState.xp)}
          recentXPGain={recentXPGain}
          showAnimation={showFeedback && recentXPGain > 0}
        />
      </div>

      <LevelProgress 
        currentXP={gameState.xp} 
        currentLevel={calculateLevel(gameState.xp)}
        showLevelUp={showLevelUp}
      />

      {currentQuestion && (
        <>
          <Question 
            questionData={currentQuestion}
            questionNumber={questionNumber}
            totalQuestions={questionsPerSession}
          />
          
          <AnswerOptions 
            options={currentQuestion.options}
            correctAnswer={currentQuestion.correctAnswer}
            selectedAnswer={selectedAnswer}
            showFeedback={showFeedback}
            onAnswerSelect={handleAnswerSelect}
            disabled={showFeedback}
          />
          
          {showFeedback && (
            <div className="feedback-section">
              <div className={`feedback-message ${selectedAnswer === currentQuestion.correctAnswer ? 'correct' : 'incorrect'}`}>
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <div>
                    <div className="feedback-icon">🎉</div>
                    <div className="feedback-text">Correct! +{recentXPGain} XP</div>
                  </div>
                ) : (
                  <div>
                    <div className="feedback-icon">😔</div>
                    <div className="feedback-text">
                      Oops! The correct answer was "{currentQuestion.correctAnswer}"
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );

  const renderStatsView = () => (
    <div className="quiz-stats">
      <div className="stats-header">
        <button className="back-btn" onClick={goToHome}>← Home</button>
        <h2>Your Progress</h2>
      </div>
      
      <ScoreDisplay 
        xp={gameState.xp} 
        streak={gameState.streak} 
        level={calculateLevel(gameState.xp)} 
      />
      
      <LevelProgress 
        currentXP={gameState.xp} 
        currentLevel={calculateLevel(gameState.xp)} 
      />
      
      <GameStats 
        totalQuestions={gameState.totalQuestions}
        correctAnswers={gameState.correctAnswers}
        streak={gameState.streak}
        bestStreak={gameState.bestStreak || 0}
        totalXP={gameState.xp}
        averageXP={gameState.averageXP || 0}
        showDetailed={true}
      />
      
      <div className="action-buttons">
        <button className="start-quiz-btn" onClick={startQuiz}>
          Continue Learning
        </button>
      </div>
    </div>
  );



  // Main render
  return (
    <div className="quiz-container">
      {currentView === 'home' && renderHomeView()}
      {currentView === 'quiz' && renderQuizView()}
      {currentView === 'stats' && renderStatsView()}
    </div>
  );
};

export default Quiz;