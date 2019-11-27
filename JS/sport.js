'use strict';

// question-functions
// things needed for the function
// quiz questions
// where to put the quiz
// where to put the scores
// a submit button

// grabbing elements from html
var quizContainer = document.getElementById('quiz');
var scoresContainer = document.getElementById('scores');
var submitButton = document.getElementById('submit');

// array objects for our questions
var ourQuestions = [
  {
    question: 'Who was the first player in NBA history to be elected league MVP by a unanimous vote?',
    answers: {
      a: 'Stephen Curry',
      b: 'Kurt Cousins',
      c: 'Kevin Durant'
    },
    correctAnswer: 'a'
  },
  {
    question: 'Against what opposing team did Babe Ruth hit his first career home run?',
    answers: {
      a: 'Seattle Mariners',
      b: 'New York Yankees',
      c: 'Houston Astros',
    },
    correctAnswer: 'b'
  },
  {
    question: 'What player won All-Star Game MVP, NBA MVP, and NBA Finals MVP awards in 2000?',
    answers: {
      a: 'Swimming ability',
      b: 'Favorite animal of the President daughter',
      c: 'Shaquille Oneal',
    },
    correctAnswer: 'c'

  },
  {
    question: 'Which man won the 100m in a world record time of 9.58 seconds?',
    answers: {
      a: 'JB Tellez',
      b: 'Usain Bolt',
      c: 'Benjamin Franklin',
    },
    correctAnswer: 'b'
  },
  {
    question: 'Who is the most decorated Olympian?',
    answers: {
      a: 'Michael Phelps',
      b: 'Barack Obama',
      c: 'Ellen Degeneres',
    },
    correctAnswer: 'a'
  }
];

showQuiz(ourQuestions, quizContainer, scoresContainer, submitButton);

// function which holds the quiz questions
function showQuiz(questions, quizContainer, scoresContainer, submitButton){

  function showQuestions(questions, quizContainer){

    var letter;

    // we loop through each questions
    for(var i = 0; i < questions.length; i++){

      var currentQuestionElem = document.getElementById('questions' + i);

      var questionsLegendElem = document.createElement('legend');
      console.log(questionsLegendElem);

      questionsLegendElem.textContent = questions[i].question;
      currentQuestionElem.appendChild(questionsLegendElem);

      //   // loop through each answer available to a question
      for(letter in questions[i].answers){

        var questionsLabelElem = document.createElement('label');
        questionsLabelElem.textContent = letter + ': ' + questions[i].answers[letter];
        currentQuestionElem.appendChild(questionsLabelElem);
        var inputtElem = document.createElement('INPUT');
        inputtElem.setAttribute('type', 'radio');
        questionsLabelElem.appendChild(inputtElem);
        inputtElem.setAttribute('name', 'answerRadio' + i);
        inputtElem.setAttribute('value', 'answerVal' + i + letter);


      }

    }
  }
  localStorage.setItem(letter, currentQuestion, currentLetter, answers);
  showQuestions(questions, quizContainer);
}


var correctNum = 0;


// handle click handler for all functions
function submitHandler(event){

  event.preventDefault();
  var userAnswer0 = event.target.answerRadio0.value;
  var userAnswer1 = event.target.answerRadio1.value;
  var userAnswer2 = event.target.answerRadio2.value;
  var userAnswer3 = event.target.answerRadio3.value;
  var userAnswer4 = event.target.answerRadio4.value;


  var userLetter0 = userAnswer0.charAt(userAnswer0.length - 1);
  var userLetter1 = userAnswer1.charAt(userAnswer1.length - 1);
  var userLetter2 = userAnswer2.charAt(userAnswer2.length - 1);
  var userLetter3 = userAnswer3.charAt(userAnswer3.length - 1);
  var userLetter4 = userAnswer4.charAt(userAnswer4.length - 1);

  var userLetters = [userLetter0, userLetter1, userLetter2, userLetter3, userLetter4];


  console.log(userLetters);

  for(var i = 0; i < ourQuestions.length; i++){

    var currentLetter = userLetters[i];

    console.log('current letter', currentLetter);
    console.log('correct answer', ourQuestions[i].correctAnswer);
    if(currentLetter === ourQuestions[i].correctAnswer){
      correctNum++;
    }
  }
  localStorage.setItem(ourQuestions, userLetters, currentLetter);
  scoresContainer.innerHTML = correctNum + ' out of ' + ourQuestions.length;
}

quizContainer.addEventListener('submit', submitHandler);

localStorage.setItem(quizContainer, submitHandler, ourQuestions, currentLetter);