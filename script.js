// 🌟 Star Background
const bg = document.getElementById('background');
for (let i = 0; i < 200; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  const size = Math.random() * 3 + 1;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.opacity = Math.random() * 0.8 + 0.2;
  star.style.animationDuration = (Math.random() * 5 + 3) + 's';
  if (Math.random() > 0.8) {
    star.style.background = ['#fff', '#a0e7e5', '#b4f8c8', '#fbe7c6'][Math.floor(Math.random() * 4)];
  }
  bg.appendChild(star);
}

// 🌙 Quiz Data
const questions = [
  {
    q: "How do you handle challenges?",
    a: [
      { text: "I shine brighter and take charge ✨", planet: "Sun" },
      { text: "I stay calm and figure it out quietly 🌊", planet: "Neptune" },
      { text: "I ground myself and stay steady 🌱", planet: "Earth" },
      { text: "I think deeply and plan carefully 🪐", planet: "Saturn" },
      { text: "I adapt fast & keep moving 🚀", planet: "Mercury" }
    ]
  },
  {
    q: "In a group, you are usually the one who…",
    a: [
      { text: "Leads and inspires others ☀️", planet: "Sun" },
      { text: "Brings harmony 🌍", planet: "Earth" },
      { text: "Offers wisdom quietly 🌙", planet: "Saturn" },
      { text: "Listens & supports 🌊", planet: "Neptune" },
      { text: "Stirs excitement & curiosity 🔥", planet: "Mars" }
    ]
  },
  {
    q: "When things don’t go as planned, you…",
    a: [
      { text: "Adapt fast & find a way 🚀", planet: "Mercury" },
      { text: "Wait & watch patiently 🌙", planet: "Saturn" },
      { text: "Stay grounded 🌳", planet: "Earth" },
      { text: "Go with the flow 🌊", planet: "Neptune" },
      { text: "Push through with determination 🔥", planet: "Mars" }
    ]
  },
  {
    q: "What gives you the most joy?",
    a: [
      { text: "Achieving goals 🌟", planet: "Sun" },
      { text: "Helping others feel calm 🌊", planet: "Neptune" },
      { text: "Connecting deeply 🌎", planet: "Earth" },
      { text: "Learning & mastering 🌙", planet: "Saturn" },
      { text: "Exploring & experimenting 🚀", planet: "Mercury" }
    ]
  },
  {
    q: "How do you recharge your energy?",
    a: [
      { text: "In the spotlight 🔥", planet: "Sun" },
      { text: "In quiet solitude 🌌", planet: "Neptune" },
      { text: "With loved ones 🌻", planet: "Earth" },
      { text: "Reflecting & planning 🌙", planet: "Saturn" },
      { text: "Diving into something new 🚀", planet: "Mercury" }
    ]
  }
];

const funFacts = {
  Sun: "You’re not technically a planet, but a star that gives life & warmth to everything around you!",
  Earth: "You’re nurturing, balanced, and deeply connected to those around you.",
  Neptune: "You’re dreamy, calm, and intuitive, just like the mystical blue planet.",
  Saturn: "You’re wise, disciplined, and thoughtful, always thinking ahead.",
  Mercury: "You’re fast, curious, and full of energy — just like the speedy planet!",
  Mars: "You’re passionate, fiery, and full of determination!"
};

const planetImages = {
  Sun: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg",
  Earth: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
  Neptune: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
  Saturn: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  Mercury: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
  Mars: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"
};

let currentQ = 0;
let scores = {};

function startQuiz() {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  document.getElementById('totalQ').textContent = questions.length;
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQ];
  document.getElementById('qNum').textContent = currentQ + 1;
  document.getElementById('questionText').textContent = q.q;
  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';
  q.a.forEach(ans => {
    const btn = document.createElement('button');
    btn.textContent = ans.text;
    btn.className = 'answer-btn';
    btn.onclick = () => selectAnswer(ans.planet);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(planet) {
  scores[planet] = (scores[planet] || 0) + 1;
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  let topPlanet = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  document.getElementById('resultPlanet').textContent = `You are like the ${topPlanet}!`;
  document.getElementById('funFact').textContent = funFacts[topPlanet];
  document.getElementById('planetImg').src = planetImages[topPlanet];
}
