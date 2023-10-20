const questions = [
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Mars", correct: false },
    ],
  },
  {
    question: "Who discovered gravity?",
    answers: [
      { text: "Zanjoe David", correct: false },
      { text: "Albert Einstein", correct: false },
      { text: "Isaac Newton", correct: true },
      { text: "Nikola Tesla", correct: false },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
      answers : [
        {text : "Mt.Everest", correct : true},
         {text : "Mt.Apo", correct : false},
         {text : "Mt.Fuji", correct : false},
         {text : "Mt.Cocomelon", correct : false},
      ],
  },
  {
    question: "Who is the first scientist?",
      answers : [
        {text : "Cedric", correct : false},
         {text : "Aristotle", correct : true},
         {text : "Galileo Galilei", correct : false},
         {text : "Francis Bacon", correct : false},
      ],
  },
  {
    question: "What language is spoken in Brazil?",
      answers : [
        {text : "Kapampangan", correct : false},
         {text : "Tagalog", correct : false},
         {text : "Portuguese", correct : true},
         {text : "English", correct : false},
        ],
  },
  {
    question: "What is the longest river?",
      answers : [
        {text  : "Amazon", correct : false},
         {text : "Palakul", correct : false},
         {text : "Nile", correct : true},
         {text : "Pulundagal", correct : false},
        ]
  },
  {
    question: "What is the largest animal in the world?",
      answers : [
        {text : "Dog", correct : false},
         {text : "Blue Whale", correct : true},
         {text : "Wayne", correct : false},
         {text : "Kapitbahay namen", correct : false},
        ],
  },
  {
     question: "Who is the father of experimental science?",
          answers : [
            {text : "Zanjoe David", correct : false},
             {text : "Galileo Galilei", correct : true},
             {text : "Francis Bacon", correct : false},
             {text : "Donald Trump", correct : false},
            ],
  },
  {
    question: "What is the last of Jose Rizal before he get executed?",
      answers : [
        {text : "Aray!!", correct : false},
         {text : "Paktay Giatay!", correct : false},
         {text : "Bata pako kol", correct : false},
         {text : "Consumatum Est", correct : true},
        ],
  },
  {
    question: "Uhhhm, Gusto mo ba ko?",
        answers : [
          {text : "Oo", correct : true},
           {text : "Yes", correct : true},
           {text : "Si", correct : true},
           {text : "Sobra", correct : true},
          ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

nextButton.addEventListener("click", function () {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  answerButtons.innerHTML = ""; // Clear previous answer buttons
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(function (answer) {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", function () {
      selectAnswer(answer);
    });
    answerButtons.appendChild(button);
  });
}

function selectAnswer(answer) {
  const buttons = answerButtons.querySelectorAll("button");

  buttons.forEach((button) => {
    if (button.innerHTML === answer.text) {
      if (answer.correct) {
        button.style.backgroundColor = "lightgreen";
      } else {
        button.style.backgroundColor = "red";
      }
    }
    button.disabled = true;
  });

  if (currentQuestionIndex === questions.length - 1) {
    endQuiz();
  } else {
    nextButton.style.display = "block"; // Display the "Next" button for the next question.
  }
}

function endQuiz() {
  document.getElementById('blush2').style.display = "block";
  document.getElementById('h1').innerHTML = "SHEEEEEEEEEEHABLE";
  questionElement.innerHTML = "";
  answerButtons.innerHTML = "Yieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeh";
  nextButton.style.display = "none"; // Hide the "Next" button when the quiz is completed.
  // Play the end quiz audio
  const endQuizAudio = document.getElementById("end-quiz-audio");
  endQuizAudio.style.display = "block";
  endQuizAudio.play();
}

startQuiz();
