// select all elements
var quiz = document.getElementById('quizMilitary');
var question = document.getElementById('question');
var qImg = document.getElementById('qImg');
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var counter = document.getElementById('counter');
var timeLine = document.getElementById('timeLine');
var progress = document.getElementById('progress');
var scoreDiv = document.getElementById('scoreContainer');

// create our questions
var questionsCoding = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    imgSrc: 'img/coding.jpg',
    choiceA: 'js',
    choiceB: 'javascript',
    choiceC: 'script',
    correct: 'C'
  }, {
    question: 'What is the correct way to write a JS array?',
    imgSrc: 'img/coding.jpg',
    choiceA: 'var colors = "red", "green", "blue"',
    choiceB: 'var colors = ["red", "green", "blue"]',
    choiceC: 'var colors = (1:"red", 2:"green", 3:"blue")',
    correct: 'B'
  }, {
    question: 'What tag is used to define an image – or add an image – to an HTML page?',
    imgSrc: 'img/coding.jpg',
    choiceA: 'img',
    choiceB: 'div',
    choiceC: 'meta',
    correct: 'A'
  }
  , {
    question: 'Java was originally developed by James Gosling in which year?',
    imgSrc: 'img/coding.jpg',
    choiceA: '1995',
    choiceB: '1996',
    choiceC: '2017',
    correct: 'A'
  },
  {
    question: 'An inherited class is called a?',
    imgSrc: 'img/coding.jpg',
    choiceA: 'Object Oriented Programming',
    choiceB: 'Subclass of its parent class',
    choiceC: 'HTML element',
    correct: 'B'
  }

];
// variables
var lastQuestion = questionsCoding.length - 1;
var currentQuestion = 0;
var count = 0;
var questionTime = 10; // 10s
var lineWidth = 150; // 150px
var lineUnit = lineWidth / questionTime;
var TIMER;
var score = 0;
// render a question
function renderQuestion() {
  var q = questionsCoding[currentQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  localStorage.setItem(q);
}


// start quiz
function startQuiz() {
  renderQuestion();
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (var qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render
function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeLine.style.width = count * lineUnit + "px";
    count++;
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (currentQuestion < lastQuestion) {
      currentQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer
function checkAnswer(answer) {
  if (answer === questionsCoding[currentQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = 0;
  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
  localStorage.setItem(answer);
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(currentQuestion).style.backgroundColor = '#0f0';
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(currentQuestion).style.backgroundColor = '#f00';
}

// score render
function scoreRender() {
  scoreDiv.style.display = 'block';

  // calculate the amount of question percent answered by the user
  var scorePerCent = Math.round(100 * score / questionsCoding.length);


  scoreDiv.innerHTML = `You got ${score} questions correct and your score is ${scorePerCent} %`;
}

startQuiz();
