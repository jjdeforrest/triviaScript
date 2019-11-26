'use strict';

var quizContainer = document.getElementById('quiz');
var scoresContainer = document.getElementById('scores');
var submitButton = document.getElementById('submit');

var ourQuestions = [
  {
    question: 'What saying is the joker known for?',
    answers: {
      a: 'Why so serious',
      b: 'Knock knock',
      c: 'The world is your oyster'
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
    question: 'How did the Navy SEALs get their name?',
    answers: {
      a: 'Swimming ability',
      b: 'Favorite animal of the President daughter',
      c: 'Sea air land',
    },
    correctAnswer: 'c'

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


  showQuestions(questions, quizContainer);


}



function submitHandler(event){
  event.preventDefault();
  console.log('submitHandler', event.target.answerRadio0.value);
  console.log('submitHandler', event.target.answerRadio1.value);
  console.log('submitHandler', event.target.answerRadio2.value);

  var type = document.getElementById('quiz');
  console.log('what is this', type)
  if(type[0].checked){
    alert("you got it right");
  }
  else if(type[1].checked){
    alert("you are also right");
  }
  else if(type[2].checked){
    alert("you are so right");
  }


}

quizContainer.addEventListener('submit', submitHandler);