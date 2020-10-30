const quizData = [
  {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd'
  },
  {
    question: 'What does HTML stands for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a'
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'd'
  },
  {
    question: 'which one is not a frontend framework?',
    a: 'React.js',
    b: 'Vue.js',
    c: 'Node.js',
    d: 'Angular.js',
    correct: 'c'
  },
  {
    question: 'What does TS stands for?',
    a: 'Terminal Services',
    b: 'JavaScript',
    c: 'Tip Stop',
    d: 'TypeScript',
    correct: 'd'
  }
];

const questionText = document.getElementById('question-text');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;


const loadQuiz = () => {
  const currentQuizData = quizData[currentQuiz];

  questionText.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
};

loadQuiz();

submitBtn.addEventListener('click', () => {
  if (currentQuiz == quizData.length - 1) {
    currentQuiz = 0;
    loadQuiz();
  }

  currentQuiz++;
  loadQuiz();
})
