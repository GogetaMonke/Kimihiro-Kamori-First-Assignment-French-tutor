// questions.js — All lesson question banks

const LESSONS = {

  greetings: [
    {
      type: "multiple-choice",
      question: "What does 'Bonjour' mean?",
      hint: "This is the most common French greeting!",
      options: ["Goodbye", "Good morning / Hello", "Thank you", "Please"],
      answer: "Good morning / Hello"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Thank you' in French?",
      hint: "You might already know this one!",
      options: ["S'il vous plaît", "Excusez-moi", "Merci", "Bonjour"],
      answer: "Merci"
    },
    {
      type: "multiple-choice",
      question: "What does 'Au revoir' mean?",
      hint: "You say this when you're leaving.",
      options: ["Hello", "Sorry", "Goodbye", "Yes"],
      answer: "Goodbye"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Please' in French?",
      hint: "It's a polite word used when making requests.",
      options: ["Merci", "Pardon", "S'il vous plaît", "Non"],
      answer: "S'il vous plaît"
    },
    {
      type: "multiple-choice",
      question: "What does 'Oui' mean?",
      hint: "It's a very short, simple word.",
      options: ["No", "Maybe", "Yes", "Hello"],
      answer: "Yes"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Excuse me' in French?",
      hint: "Used to get someone's attention politely.",
      options: ["Merci", "Excusez-moi", "Bonjour", "Au revoir"],
      answer: "Excusez-moi"
    },
    {
      type: "multiple-choice",
      question: "What does 'Comment ça va?' mean?",
      hint: "A friendly question you'd ask a friend.",
      options: [
        "What is your name?",
        "Where are you from?",
        "How are you?",
        "How old are you?"
      ],
      answer: "How are you?"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'My name is...' in French?",
      hint: "You'd say this when introducing yourself.",
      options: [
        "Je suis...",
        "Je m'appelle...",
        "J'ai...",
        "Je veux..."
      ],
      answer: "Je m'appelle..."
    },
    {
      type: "multiple-choice",
      question: "What does 'Bonsoir' mean?",
      hint: "Similar to Bonjour, but for a different time of day.",
      options: ["Good morning", "Good afternoon", "Good evening", "Goodnight"],
      answer: "Good evening"
    },
    {
      type: "multiple-choice",
      question: "What does 'Non' mean?",
      hint: "The opposite of 'Oui'!",
      options: ["Yes", "Maybe", "Please", "No"],
      answer: "No"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Good night' in French?",
      hint: "You say this before going to sleep.",
      options: ["Bonsoir", "Bonne nuit", "Au revoir", "Salut"],
      answer: "Bonne nuit"
    },
    {
      type: "multiple-choice",
      question: "What does 'Salut' mean?",
      hint: "A casual, informal greeting.",
      options: ["Goodbye (formal)", "Hi / Bye (informal)", "Thank you", "Sorry"],
      answer: "Hi / Bye (informal)"
    }
  ],

  numbers: [
    {
      type: "multiple-choice",
      question: "What does 'Un' mean?",
      hint: "The very first number!",
      options: ["Two", "Three", "One", "Zero"],
      answer: "One"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Two' in French?",
      hint: "Sounds a bit like 'duh'.",
      options: ["Trois", "Un", "Quatre", "Deux"],
      answer: "Deux"
    },
    {
      type: "multiple-choice",
      question: "What does 'Cinq' mean?",
      hint: "Count on one hand — halfway!",
      options: ["Three", "Six", "Five", "Four"],
      answer: "Five"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Ten' in French?",
      hint: "All fingers counted!",
      options: ["Huit", "Neuf", "Sept", "Dix"],
      answer: "Dix"
    },
    {
      type: "multiple-choice",
      question: "What does 'Trois' mean?",
      hint: "Think of a trio!",
      options: ["Two", "Four", "Three", "Six"],
      answer: "Three"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Seven' in French?",
      hint: "Sounds like 'set'.",
      options: ["Six", "Huit", "Sept", "Neuf"],
      answer: "Sept"
    },
    {
      type: "multiple-choice",
      question: "What does 'Zéro' mean?",
      hint: "Nothing at all!",
      options: ["One", "Zero", "Ten", "Two"],
      answer: "Zero"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Eight' in French?",
      hint: "Sounds like 'wheat' without the W.",
      options: ["Sept", "Neuf", "Dix", "Huit"],
      answer: "Huit"
    },
    {
      type: "multiple-choice",
      question: "What does 'Quatre' mean?",
      hint: "One less than cinq.",
      options: ["Five", "Three", "Four", "Six"],
      answer: "Four"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Nine' in French?",
      hint: "Sounds like 'nerf' without the R sound.",
      options: ["Huit", "Dix", "Six", "Neuf"],
      answer: "Nine"
    }
  ],

  colors: [
    {
      type: "multiple-choice",
      question: "What does 'Rouge' mean?",
      hint: "Think of a red rose — une rose rouge!",
      options: ["Blue", "Green", "Red", "Yellow"],
      answer: "Red"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Blue' in French?",
      hint: "Sounds like 'bluh'.",
      options: ["Vert", "Jaune", "Noir", "Bleu"],
      answer: "Bleu"
    },
    {
      type: "multiple-choice",
      question: "What does 'Vert' mean?",
      hint: "The color of grass and trees.",
      options: ["Purple", "Green", "Orange", "White"],
      answer: "Green"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Yellow' in French?",
      hint: "Sounds like 'zhone'.",
      options: ["Blanc", "Gris", "Jaune", "Rose"],
      answer: "Jaune"
    },
    {
      type: "multiple-choice",
      question: "What does 'Noir' mean?",
      hint: "The darkest color — like the night sky.",
      options: ["White", "Gray", "Brown", "Black"],
      answer: "Black"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'White' in French?",
      hint: "Sounds like 'blahnk'.",
      options: ["Gris", "Blanc", "Beige", "Violet"],
      answer: "Blanc"
    },
    {
      type: "multiple-choice",
      question: "What does 'Rose' mean?",
      hint: "Named after the flower!",
      options: ["Red", "Purple", "Pink", "Orange"],
      answer: "Pink"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Orange' in French?",
      hint: "This one's very close to English!",
      options: ["Marron", "Rouge", "Orange", "Jaune"],
      answer: "Orange"
    },
    {
      type: "multiple-choice",
      question: "What does 'Gris' mean?",
      hint: "The color of a cloudy sky.",
      options: ["Brown", "Beige", "Black", "Gray"],
      answer: "Gray"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Purple' in French?",
      hint: "Sounds like 'vee-oh-lay'.",
      options: ["Bleu", "Rose", "Violet", "Indigo"],
      answer: "Violet"
    }
  ],

  food: [
    {
      type: "multiple-choice",
      question: "What does 'Pain' mean in French?",
      hint: "A French bakery staple — not the English word!",
      options: ["Cake", "Bread", "Cheese", "Butter"],
      answer: "Bread"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Water' in French?",
      hint: "Sounds like 'oh'.",
      options: ["Lait", "Jus", "Eau", "Vin"],
      answer: "Eau"
    },
    {
      type: "multiple-choice",
      question: "What does 'Fromage' mean?",
      hint: "France is famous for this food!",
      options: ["Butter", "Milk", "Cheese", "Cream"],
      answer: "Cheese"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Apple' in French?",
      hint: "Sounds like 'pom'.",
      options: ["Poire", "Banane", "Pomme", "Cerise"],
      answer: "Pomme"
    },
    {
      type: "multiple-choice",
      question: "What does 'Lait' mean?",
      hint: "You might put this in your coffee.",
      options: ["Juice", "Water", "Tea", "Milk"],
      answer: "Milk"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Egg' in French?",
      hint: "Sounds like 'uh'.",
      options: ["Beurre", "Oeuf", "Sel", "Sucre"],
      answer: "Oeuf"
    },
    {
      type: "multiple-choice",
      question: "What does 'Poulet' mean?",
      hint: "A common meat — think poultry!",
      options: ["Beef", "Fish", "Chicken", "Pork"],
      answer: "Chicken"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Sugar' in French?",
      hint: "Sounds like 'soo-kruh'.",
      options: ["Sel", "Farine", "Sucre", "Miel"],
      answer: "Sucre"
    },
    {
      type: "multiple-choice",
      question: "What does 'Croissant' mean?",
      hint: "You probably already know this one!",
      options: [
        "A type of cheese",
        "A flaky, crescent-shaped pastry",
        "A French soup",
        "A type of bread loaf"
      ],
      answer: "A flaky, crescent-shaped pastry"
    },
    {
      type: "multiple-choice",
      question: "How do you say 'Coffee' in French?",
      hint: "Very similar to the English word!",
      options: ["Thé", "Café", "Chocolat", "Jus"],
      answer: "Café"
    }
  ]
};
