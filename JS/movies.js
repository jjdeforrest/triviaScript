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
    question: 'What saying is the joker known for?',
    answers: {
      a: 'The world is your oyster',
      b: 'Why so serious',
      c: 'Knock knock'
    },
    correctAnswer: 'b'
  },
  {
    question: 'Thanos said',
    answers: {
      a: 'THE HARDEST CHOICES REQUIRE THE STRONGEST WILLS',
      b: 'The avengers are evil',
      c: 'want to be an avenger',
    },
    correctAnswer: 'a'
  },
  {
    question: 'Bane from batman said',
    answers: {
      a: 'Meet you at the bbq',
      b: 'Bat hunting is legit',
      c: ' I am necessary evil',
    },
    correctAnswer: 'c'

  },
  {
    question: 'From what movie does the phrase "You are killing me smalls!" come from?',
    answers: {
      a: 'The Goonies',
      b: 'The Sandlot',
      c: 'Gone Girl',
    },
    correctAnswer: 'b'
  },
  {
    question: 'In the movie, Rocky, what are the names of Rocky Balboa two pet turtles?',
    answers: {
      a: 'Cuff and Link',
      b: 'Yin and Yang',
      c: 'Buster and Douglas',
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
        questionsLabelElem.appendChild(inputtElem);
        inputtElem.setAttribute('type', 'radio');
        inputtElem.setAttribute('name', 'answerRadio' + i);
        inputtElem.setAttribute('value', 'answerVal' + i + letter);

      }

    }
  }
  localStorage.setItem(questions, quizContainer, letter, answers);
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

  for(var i = 0; i < ourQuestions.length; i++){

    var currentLetter = userLetters[i];

    console.log('current letter', currentLetter);
    console.log('correct answer', ourQuestions[i].correctAnswer);
    if(currentLetter === ourQuestions[i].correctAnswer){
      correctNum++;
    }

  }
  localStorage.setItem(ourQuestions, correctAnswer, currentLetter);
  scoresContainer.innerHTML = correctNum + ' out of ' + ourQuestions.length;
}
quizContainer.addEventListener('submit', submitHandler);
