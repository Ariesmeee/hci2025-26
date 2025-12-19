// Level and XP calculation
export const calculateLevel = (xp) => {
  return Math.floor(xp / 100) + 1;
};

export const calculateXPForNextLevel = (currentXP) => {
  const currentLevel = calculateLevel(currentXP);
  return currentLevel * 100;
};

export const calculateXPProgress = (currentXP) => {
  const currentLevel = calculateLevel(currentXP);
  const xpAtCurrentLevel = (currentLevel - 1) * 100;
  const xpNeededForNextLevel = currentLevel * 100;
  const progressInCurrentLevel = currentXP - xpAtCurrentLevel;
  
  return {
    current: progressInCurrentLevel,
    needed: xpNeededForNextLevel - xpAtCurrentLevel,
    percentage: (progressInCurrentLevel / (xpNeededForNextLevel - xpAtCurrentLevel)) * 100
  };
};

// Scoring system
export const calculateXPGain = (difficulty, isCorrect, streak) => {
  if (!isCorrect) return 0;
  
  const baseXP = {
    beginner: 10,
    intermediate: 15,
    advanced: 20
  };
  
  const streakMultiplier = Math.min(1 + (streak * 0.1), 2); // Max 2x multiplier
  
  return Math.floor(baseXP[difficulty] * streakMultiplier);
};

// Streak calculation
export const updateStreak = (isCorrect, currentStreak) => {
  if (isCorrect) {
    return currentStreak + 1;
  } else {
    return 0;
  }
};

// Accuracy calculation
export const calculateAccuracy = (correctAnswers, totalAnswers) => {
  if (totalAnswers === 0) return 0;
  return Math.round((correctAnswers / totalAnswers) * 100);
};

// Generate leaderboard data (simulated for demo)
export const generateLeaderboardData = (currentPlayerScore) => {
  const names = [
    "Alex", "Maria", "John", "Sophie", "David", "Emma", "Lucas", "Anna",
    "Michael", "Lisa", "Chris", "Sarah", "Tom", "Julia", "Mark", "Nina"
  ];
  
  const leaderboard = names.slice(0, 10).map((name, index) => ({
    id: index + 1,
    name: name,
    xp: Math.floor(Math.random() * 2000) + 500,
    level: 0,
    streak: Math.floor(Math.random() * 20) + 1
  }));
  
  // Add current player
  leaderboard.push({
    id: 'current',
    name: "You",
    xp: currentPlayerScore.xp,
    level: calculateLevel(currentPlayerScore.xp),
    streak: currentPlayerScore.streak,
    isCurrentPlayer: true
  });
  
  // Calculate levels and sort by XP
  const processedLeaderboard = leaderboard.map(player => ({
    ...player,
    level: calculateLevel(player.xp)
  })).sort((a, b) => b.xp - a.xp);
  
  // Add ranks
  return processedLeaderboard.map((player, index) => ({
    ...player,
    rank: index + 1
  }));
};

// Question generation
export const generateQuestion = (vocabulary, difficulty = null) => {
  let filteredVocab = vocabulary;
  
  if (difficulty) {
    filteredVocab = vocabulary.filter(word => word.difficulty === difficulty);
  }
  
  const randomWord = filteredVocab[Math.floor(Math.random() * filteredVocab.length)];
  
  // Generate wrong answers
  const wrongAnswers = vocabulary
    .filter(word => word.english !== randomWord.english)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(word => word.english);
  
  // Combine and shuffle all answers
  const allAnswers = [randomWord.english, ...wrongAnswers]
    .sort(() => 0.5 - Math.random());
  
  return {
    question: `What does "${randomWord.german}" mean in English?`,
    correctAnswer: randomWord.english,
    options: allAnswers,
    difficulty: randomWord.difficulty,
    word: randomWord
  };
};

// Save/Load game state to localStorage
export const saveGameState = (gameState) => {
  try {
    localStorage.setItem('duolingo-quiz-state', JSON.stringify(gameState));
  } catch (error) {
    console.error('Failed to save game state:', error);
  }
};

export const loadGameState = () => {
  try {
    const saved = localStorage.getItem('duolingo-quiz-state');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error('Failed to load game state:', error);
  }
  
  // Return default state if nothing saved or error occurred
  return {
    xp: 0,
    level: 1,
    streak: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    badges: [],
    completedLessons: 0
  };
};