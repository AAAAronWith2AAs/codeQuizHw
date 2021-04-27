var timeEl = document.querySelector(".time");
var secondsLeft = 60;
var startButton = document.getElementById("startButton");
var questionIndex = 0;
var answerButtons = document.getElementById("answerButtons");

var questionBody = [
  {
    questionTitle: "Title1",
    choices: ["choice one", "choice two", "choice three", "choice four"],
    answer: "1",
  },
  {
    questionTitle: "Title2",
    choices: ["choice one", "choice two", "choice three", "choice four"],
    answer: 1,
  },
  {
    questionTitle: "Title3",
    choices: ["choice one", "choice two", "choice three", "choice four"],
    answer: 1,
  },
  {
    questionTitle: "Title4",
    choices: ["choice one", "choice two", "choice three", "choice four"],
    answer: 1,
  },
];

startButton.addEventListener("click", startGame);

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--; //60
    timeEl.textContent = secondsLeft + " seconds remain"; //60 + text

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
  timeEl.textContent = secondsLeft + " seconds remain"; //60 + text
}

function startGame() {
  setTime();
  getQuestion();
}

function selectAnswer() {
  console.log(this.value);
  if (this.value !== questionBody[questionIndex].answer) {
    console.log("wrong answer");
  } else {
    console.log("correct answer");
  }

  questionIndex++;
  getQuestion();
}

function getQuestion() {
  var currentQuestion = questionBody[questionIndex];
  var currentQTitle = document.getElementById("question");
  currentQTitle.textContent = currentQuestion.questionTitle;
  answerButtons.innerHTML = "";

  for (i = 0; i < currentQuestion.choices.length; i++) {
    var button = document.createElement("button");
    button.setAttribute("class", "choices");
    button.setAttribute("value", i + 1);
    button.textContent = currentQuestion.choices[i];
    button.onclick = selectAnswer;
    answerButtons.appendChild(button);
  }
}
