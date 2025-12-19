export const vocabulary = [
  {
    id: 1,
    german: "Hallo",
    english: "Hello",
    difficulty: "beginner",
    category: "greetings"
  },
  {
    id: 2,
    german: "Auf Wiedersehen",
    english: "Goodbye",
    difficulty: "beginner",
    category: "greetings"
  },
  {
    id: 3,
    german: "Danke",
    english: "Thank you",
    difficulty: "beginner",
    category: "politeness"
  },
  {
    id: 4,
    german: "Bitte",
    english: "Please",
    difficulty: "beginner",
    category: "politeness"
  },
  {
    id: 5,
    german: "Entschuldigung",
    english: "Excuse me",
    difficulty: "beginner",
    category: "politeness"
  },
  {
    id: 6,
    german: "Wasser",
    english: "Water",
    difficulty: "beginner",
    category: "food"
  },
  {
    id: 7,
    german: "Brot",
    english: "Bread",
    difficulty: "beginner",
    category: "food"
  },
  {
    id: 8,
    german: "Apfel",
    english: "Apple",
    difficulty: "beginner",
    category: "food"
  },
  {
    id: 9,
    german: "Katze",
    english: "Cat",
    difficulty: "beginner",
    category: "animals"
  },
  {
    id: 10,
    german: "Hund",
    english: "Dog",
    difficulty: "beginner",
    category: "animals"
  },
  {
    id: 11,
    german: "Haus",
    english: "House",
    difficulty: "beginner",
    category: "objects"
  },
  {
    id: 12,
    german: "Auto",
    english: "Car",
    difficulty: "beginner",
    category: "objects"
  },
  {
    id: 13,
    german: "Schön",
    english: "Beautiful",
    difficulty: "intermediate",
    category: "adjectives"
  },
  {
    id: 14,
    german: "Schwierig",
    english: "Difficult",
    difficulty: "intermediate",
    category: "adjectives"
  },
  {
    id: 15,
    german: "Verstehen",
    english: "To understand",
    difficulty: "intermediate",
    category: "verbs"
  },
  {
    id: 16,
    german: "Sprechen",
    english: "To speak",
    difficulty: "intermediate",
    category: "verbs"
  },
  {
    id: 17,
    german: "Freundschaft",
    english: "Friendship",
    difficulty: "advanced",
    category: "abstract"
  },
  {
    id: 18,
    german: "Verantwortung",
    english: "Responsibility",
    difficulty: "advanced",
    category: "abstract"
  },
  {
    id: 19,
    german: "Entwicklung",
    english: "Development",
    difficulty: "advanced",
    category: "abstract"
  },
  {
    id: 20,
    german: "Gesellschaft",
    english: "Society",
    difficulty: "advanced",
    category: "abstract"
  }
];

// Generate wrong answers for multiple choice
export const generateWrongAnswers = (correctAnswer, allWords) => {
  const wrongAnswers = allWords
    .filter(word => word.english !== correctAnswer)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(word => word.english);
  
  return wrongAnswers;
};

// Shuffle array
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};