// Fetch the stored questions and answers from local storage or a backend
const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris"]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Mars"]
  }
  // Add more questions and answers here
];

const questionDiv = document.getElementById('question');
const answerInput = document.getElementById('answer');
const checkButton = document.getElementById('check-answer');
const resultPara = document.getElementById('result');

let currentQuestionIndex = 0;
let currentPlayer = 1;
let player1Time = 200;
let player2Time = 200;

// Function to display the current question
function displayQuestion() {
  questionDiv.innerText = `Question: ${questions[currentQuestionIndex].question}`;
}

// Function to check the typed answer
checkButton.addEventListener('click', function() {
  const typedAnswer = answerInput.value.trim();
  const correctAnswers = questions[currentQuestionIndex].answers.map(answer => answer.toLowerCase());

  if (correctAnswers.includes(typedAnswer.toLowerCase())) {
    resultPara.innerText = 'Correct answer!';
    // Logic to deduct time from the other player's clock
  } else {
    resultPara.innerText = 'Wrong answer!';
  }

  // Logic to switch to the next question or end the game based on player times
});

// Initial setup: display the first question
displayQuestion();
