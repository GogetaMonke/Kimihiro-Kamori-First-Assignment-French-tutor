// app.js — Core app logic

// =====================
// STATE
// =====================
let currentLesson   = null;
let questions       = [];
let currentIndex    = 0;
let score           = 0;
let streak          = 0;
let bestStreak      = 0;
let answered        = false;
let sessionXP       = 0;

// =====================
// PERSISTENCE (localStorage)
// =====================
function loadProgress() {
  const totalXP      = parseInt(localStorage.getItem('totalXP'))      || 0;
  const lessonsCount = parseInt(localStorage.getItem('lessonsCount')) || 0;
  const completed    = JSON.parse(localStorage.getItem('completed'))  || [];

  document.getElementById('home-xp').textContent      = totalXP + ' XP';
  document.getElementById('home-lessons').textContent = lessonsCount;

  // Update lesson badges
  completed.forEach(lessonKey => {
    const badge = document.getElementById('badge-' + lessonKey);
    if (badge) {
      badge.textContent = '✓ Done';
      badge.classList.add('completed');
    }
  });
}

function saveProgress(lessonKey, xpEarned) {
  let totalXP      = parseInt(localStorage.getItem('totalXP'))      || 0;
  let lessonsCount = parseInt(localStorage.getItem('lessonsCount')) || 0;
  let completed    = JSON.parse(localStorage.getItem('completed'))  || [];

  totalXP += xpEarned;
  lessonsCount += 1;

  if (!completed.includes(lessonKey)) {
    completed.push(lessonKey);
  }

  localStorage.setItem('totalXP',      totalXP);
  localStorage.setItem('lessonsCount', lessonsCount);
  localStorage.setItem('completed',    JSON.stringify(completed));
}

// =====================
// SCREEN NAVIGATION
// =====================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function goHome() {
  loadProgress();
  showScreen('screen-home');
}

// =====================
// START LESSON
// =====================
function startLesson(lessonKey) {
  currentLesson = lessonKey;
  questions     = shuffle([...LESSONS[lessonKey]]);
  currentIndex  = 0;
  score         = 0;
  streak        = 0;
  bestStreak    = 0;
  sessionXP     = 0;
  answered      = false;

  // Set tutor intro message
  document.getElementById('tutor-hint').textContent =
    MESSAGES.tutorIntro[lessonKey];

  showScreen('screen-quiz');
  loadQuestion();
}

// =====================
// SHUFFLE HELPER
// =====================
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// =====================
// LOAD QUESTION
// =====================
function loadQuestion() {
  answered = false;

  const q   = questions[currentIndex];
  const num = questions.length;

  // Update progress bar
  const pct = (currentIndex / num) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';

  // Question number
  document.getElementById('question-number').textContent =
    `Question ${currentIndex + 1} of ${num}`;

  // Question text
  document.getElementById('question-text').textContent = q.question;
  document.getElementById('question-sub').textContent  = '';

  // Tutor hint
  document.getElementById('tutor-hint').textContent = q.hint ||
    getRandom(MESSAGES.hints[currentLesson]);

  // Streak display
  document.getElementById('streak-count').textContent = streak;

  // Hide feedback
  const banner = document.getElementById('feedback-banner');
  banner.classList.add('hidden');
  banner.classList.remove('correct-banner', 'wrong-banner');

  // Render question type
  if (q.type === 'multiple-choice') {
    renderMultipleChoice(q);
  } else if (q.type === 'type-answer') {
    renderTypeAnswer();
  }
}

// =====================
// MULTIPLE CHOICE
// =====================
function renderMultipleChoice(q) {
  document.getElementById('type-answer-wrap').classList.add('hidden');
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';

  // Shuffle options
  const opts = shuffle([...q.options]);

  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className    = 'option-btn';
    btn.textContent  = opt;
    btn.onclick      = () => selectOption(btn, opt, q.answer);
    grid.appendChild(btn);
  });
}

function selectOption(btn, selected, correct) {
  if (answered) return;
  answered = true;

  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);

  if (selected === correct) {
    btn.classList.add('correct');
    handleCorrect();
  } else {
    btn.classList.add('wrong');
    // Highlight correct answer
    allBtns.forEach(b => {
      if (b.textContent === correct) b.classList.add('correct');
    });
    handleWrong(correct);
  }
}

// =====================
// TYPE ANSWER
// =====================
function renderTypeAnswer() {
  document.getElementById('options-grid').innerHTML = '';
  document.getElementById('type-answer-wrap').classList.remove('hidden');
  document.getElementById('type-answer-input').value = '';
  document.getElementById('type-answer-input').focus();
}

function submitTypedAnswer() {
  if (answered) return;
  const input   = document.getElementById('type-answer-input');
  const typed   = input.value.trim().toLowerCase();
  const correct = questions[currentIndex].answer.toLowerCase();

  if (!typed) return;
  answered = true;
  input.disabled = true;

  if (typed === correct) {
    handleCorrect();
  } else {
    handleWrong(questions[currentIndex].answer);
  }
}

// Allow pressing Enter to submit typed answer
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const wrap = document.getElementById('type-answer-wrap');
    if (!wrap.classList.contains('hidden')) {
      submitTypedAnswer();
    } else if (!document.getElementById('feedback-banner')
                         .classList.contains('hidden')) {
      nextQuestion();
    }
  }
});

// =====================
// HANDLE CORRECT
// =====================
function handleCorrect() {
  score++;
  streak++;
  if (streak > bestStreak) bestStreak = streak;
  sessionXP += 10;

  document.getElementById('streak-count').textContent = streak;

  // Check streak milestones
  if (MESSAGES.streakMilestones[streak]) {
    showStreakPopup(MESSAGES.streakMilestones[streak]);
  }

  showFeedback(true, getRandom(MESSAGES.correct), '');
}

// =====================
// HANDLE WRONG
// =====================
function handleWrong(correctAnswer) {
  streak = 0;
  document.getElementById('streak-count').textContent = streak;

  const msg = getRandom(MESSAGES.wrong);
  showFeedback(false, msg, `The answer was: "${correctAnswer}"`);
}

// =====================
// SHOW FEEDBACK BANNER
// =====================
function showFeedback(isCorrect, title, detail) {
  const banner = document.getElementById('feedback-banner');
  banner.classList.remove('hidden', 'correct-banner', 'wrong-banner');
  banner.classList.add(isCorrect ? 'correct-banner' : 'wrong-banner');

  document.getElementById('feedback-icon').textContent  = isCorrect ? '✅' : '❌';
  document.getElementById('feedback-title').textContent = title;
  document.getElementById('feedback-msg').textContent   = detail;
}

// =====================
// STREAK POPUP
// =====================
function showStreakPopup(msg) {
  // Remove existing popup if any
  const existing = document.querySelector('.streak-popup');
  if (existing) existing.remove();

  const popup = document.createElement('div');
  popup.className   = 'streak-popup';
  popup.textContent = msg;
  document.body.appendChild(popup);

  setTimeout(() => popup.remove(), 2600);
}

// =====================
// NEXT QUESTION
// =====================
function nextQuestion() {
  currentIndex++;

  if (currentIndex >= questions.length) {
    showResults();
  } else {
    loadQuestion();
  }
}

// =====================
// RESULTS SCREEN
// =====================
function showResults() {
  const total = questions.length;
  const pct   = score / total;

  // XP: 10 per correct + streak bonus
  const xpEarned = sessionXP + (bestStreak >= 5 ? 20 : 0);

  // Save to localStorage
  saveProgress(currentLesson, xpEarned);

  // Trophy / title
  let trophy, title;
  if (pct === 1)       { trophy = '🏆'; title = 'Perfect Score!'; }
  else if (pct >= 0.8) { trophy = '🥇'; title = 'Excellent Work!'; }
  else if (pct >= 0.6) { trophy = '🥈'; title = 'Good Effort!'; }
  else                 { trophy = '🥉'; title = 'Keep Practicing!'; }

  document.getElementById('results-trophy').textContent   = trophy;
  document.getElementById('results-title').textContent    = title;
  document.getElementById('result-score').textContent     = `${score}/${total}`;
  document.getElementById('result-streak').textContent    = bestStreak;
  document.getElementById('result-xp').textContent        = `+${xpEarned} XP`;

  // Tutor message
  let tutorMsg;
  if (pct === 1)       tutorMsg = MESSAGES.results.perfect;
  else if (pct >= 0.8) tutorMsg = MESSAGES.results.great;
  else if (pct >= 0.6) tutorMsg = MESSAGES.results.good;
  else                 tutorMsg = MESSAGES.results.keep_going;

  document.getElementById('results-tutor-msg').textContent = tutorMsg;

  // Progress bar to 100%
  document.getElementById('progress-bar').style.width = '100%';

  showScreen('screen-results');
}

// =====================
// RETRY LESSON
// =====================
function retryLesson() {
  startLesson(currentLesson);
}

// =====================
// INIT
// =====================
window.onload = function () {
  loadProgress();
  showScreen('screen-home');
};
