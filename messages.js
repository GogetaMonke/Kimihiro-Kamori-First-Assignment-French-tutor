// messages.js — Encouragement and feedback message banks

const MESSAGES = {

  correct: [
    "Parfait! That's exactly right! 🎉",
    "Très bien! You're on fire! ⭐",
    "Oui, oui! Magnifique! 🌟",
    "Excellent! You nailed it! 💪",
    "Bravo! Keep it up! 🎊",
    "Fantastique! You're doing great! ✨",
    "C'est correct! Wonderful! 🥳",
    "Incroyable! You're a natural! 🌈",
    "Super! That was perfect! 🏅",
    "Génial! Great work! 🎯"
  ],

  wrong: [
    "So close! Don't worry — every mistake helps you learn! 💙",
    "Not quite, but you're doing great! Keep going! 🌱",
    "Presque! (Almost!) You'll get it next time! 😊",
    "No worries — French takes practice! You've got this! 💪",
    "That one's tricky! Now you know for next time! 🧠",
    "Pas de problème! (No problem!) Keep going! 🌟",
    "Oops! But hey — mistakes are how we learn! 📚",
    "Not this time, but you're still doing wonderfully! 💫"
  ],

  streakMilestones: {
    3:  "🔥 3 in a row! You're warming up!",
    5:  "🔥🔥 5 in a row! Incroyable!",
    7:  "🔥🔥🔥 7 in a row! You're on FIRE!",
    10: "🏆 10 in a row! PARFAIT! Legendary!",
    15: "👑 15 in a row! Are you sure you're a beginner?!"
  },

  hints: {
    greetings: [
      "Think about how you'd say hello on a French street!",
      "This is one of the first things you'd learn in France.",
      "Imagine you're in a Paris café — what would you say?",
      "This phrase is used all over the French-speaking world!"
    ],
    numbers: [
      "Try counting on your fingers as you learn!",
      "Numbers are super useful — you'll use these every day!",
      "Think about how it sounds out loud.",
      "French numbers have a fun rhythm to them!"
    ],
    colors: [
      "Colors are everywhere — great for describing the world!",
      "Think of something that color and picture it in French.",
      "Many French color words sound similar to English ones!",
      "Artists love colors — les artistes adorent les couleurs!"
    ],
    food: [
      "Food vocabulary is great for traveling in France!",
      "Imagine you're ordering at a French restaurant.",
      "Many French food words are used in English too!",
      "Bon appétit! (Enjoy your meal!)"
    ]
  },

  results: {
    perfect:    "Parfait! A perfect score! You're incredible! 🏆",
    great:      "Très bien! Really strong work today! 🌟",
    good:       "Bien! Solid effort — keep practicing! 💪",
    keep_going: "C'est un début! (It's a start!) Every lesson makes you better! 🌱"
  },

  tutorIntro: {
    greetings: "Let's practice French greetings! These are the first words you'd use in France. 🇫🇷",
    numbers:   "Time for numbers! Count along in French — un, deux, trois! 🔢",
    colors:    "Let's explore colors in French! The world is more beautiful en français! 🎨",
    food:      "Bon appétit! Let's learn some delicious French food vocabulary! 🥐"
  }
};

// Helper: get a random message from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
