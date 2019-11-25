'use strict';

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

    var outcome = [];
    var answers;
    var letter;

    // we loop through each questions
    for(var i = 0; i < questions.length; i++){

      // the current list of answers should be an empty array
      answers = [];


      // loop through each answer available to a question
      for(letter in questions[i].answers){

        // add an html checkbox
        answers.push(
          '<label' + '<input type="radio" name="question ' + i + ' " value=" ' + letter + ' "> ' + letter + ': ' + questions[i].answers[letter] + '</label>'
        );
      }

      // pushing the question and the answer to the outcome
      outcome.push(
        '<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
      );

    }
    quizContainer.innerHTML = outcome.join('');
  }
  // showQuestions(questions, quizContainer);

  function showScores(questions, quizContainer, scoresContainer){

    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keeping track of users answers
    var userAnswer = '';
    var correctNum = 0;

    // loop through each question
    for(var i = 0; i < questions.length; i++){

      // target the selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      // conditional to check for correct answers
      if(userAnswer === questions[i].correctAnswer){

        correctNum++;

        answerContainers[i].innerHTML = 'You got it right buster!';
      } else {
        answerContainers[i].innerHTML = 'You are damn wrong!';
      }

    }
    // display the total correct number of answewrs
    scoresContainer.innerHTML = correctNum + ' out of ' + questions.length;
  }

  showQuestions(questions, quizContainer);

  // when the user clicks on the submit button it shows them their score

  function clickHandler(){
    showScores(questions, quizContainer, scoresContainer);

  }

  submitButton.addEventListener('click', clickHandler);

  // clickHandler();

}

  ///////////////////////////////////////////////////
 /////////   Famous People Category      ///////////
///////////////////////////////////////////////////


//creating object for identifying famous people
function IdentifyFamousPeople({ question = 'Who is this?' }, cropPicture, options, answer, fullPicture) {
    this.question = question;
    this.cropPicture = cropPicture;
    this.options = options;
    this.answer = answer;
    this.fullPicture = fullPicture;
}

var questionNumber = 0;
var askQuestion = [];
//adding all the objects to array
var questionsArr = [];
questionsArr.push(new IdentifyFamousPeople(' ', 'img/bradley.jpg', ['Bradley Cooper', 'Leonardo Di Caprio', 'Nicholas Cage'], 'option_1', 'img/bradleyFull.jpg'));
questionsArr.push(new IdentifyFamousPeople(' ', 'img/dwayne.jpg', ['Robert Di Nero', 'Dwayne Johnson', 'Hugh Jackman'], 'option_2', 'img/dwayneFull.jpg'));
questionsArr.push(new IdentifyFamousPeople(' ', 'img/gaga.jpg', ['Miley Cyrus', 'Madonna', 'Lady Gaga'], 'option_3', 'img/gagaFull.jpg'));
questionsArr.push(new IdentifyFamousPeople('', 'img/messi.jpg', ['Christiano Ronaldo', 'Lionel Messi', 'David Beckham'], 'option_2', 'img/messiFull.jpg'));
questionsArr.push(new IdentifyFamousPeople(' ', 'img/jennifer.jpg', ['Jennifer Lopez', 'Penelope Cruz', 'Jennifer Aniston'], 'option_1', 'img/jenniferFull.jpg'));

var famousPeopleContainer = document.getElementById('famous_people');

function getQuestion() {
    for (var i = questionNumber; i < questionsArr.length; i++ ){
        //Question Element
        var question = addTextElement('h2', 'id', 'question', famousPeopleContainer, questionsArr[i].question);
        
        //Image Element
        var cropImage = addImage('img', 'id', 'crop_image', famousPeopleContainer, questionsArr[i].cropPicture);
        
        //Answer option element
        var ulElement = addTextElement('ul', 'id', 'ul_element', famousPeopleContainer);
        
        //display all three answer options
        for (var j = 0; j < questionsArr[i].options.length; j++) {
            var option = addTextElement('li', 'id', `option_${j + 1}`, ulElement, questionsArr[i].options[j]);
        }
        break;       
    }

    console.log('questionNumber',questionNumber)
}
getQuestion();




//function to get text element
function addTextElement(tag, attribute, value, famousPeopleContainer, text) {
    var element = document.createElement(tag);
    element.setAttribute(attribute, value);
    famousPeopleContainer.appendChild(element);
    element.textContent = text;
    return element;
}

//function to get image
function addImage(tag, attribute, value, famousPeopleContainer, image) {
    var element = document.createElement(tag);
    element.setAttribute(attribute, value);
    famousPeopleContainer.appendChild(element);
    element.src = image;
    return element;
}

//get options and add event listeners
function getOptions() {
    //get three options and store in variable
    var option1 = document.getElementById('option_1');
    var option2 = document.getElementById('option_2');
    var option3 = document.getElementById('option_3');
    
    //listen to the click event for each option
    option1.addEventListener('click', clickHandler);
    option2.addEventListener('click', clickHandler);
    option3.addEventListener('click', clickHandler);
}
getOptions();

// respond to the click on the options
function clickHandler(event1) {
    var id = event1.target.id;

        if (id === questionsArr[questionNumber].answer) {
            //display answer
            addTextElement('h3', 'id', 'answer', famousPeopleContainer, 'Correct!');
            //display full image
            addImage('img', 'id', 'full_image', famousPeopleContainer, questionsArr[questionNumber].fullPicture);
        }
        else {
            //display answer
            addTextElement('h3', 'id', 'answer', famousPeopleContainer, 'Incorrect!  YOU SUCK!');
            //display full image
            addImage('img', 'id', 'full_image', famousPeopleContainer, questionsArr[questionNumber].fullPicture);
    
        }
        questionNumber++;
        var button  = addTextElement('button', 'id', 'next_button', famousPeopleContainer, 'Next');

        // debugger;
        button.addEventListener('click', nextQuestion);
        option1.removeEventListener('click', clickHandler);
        option2.removeEventListener('click', clickHandler);
        option3.removeEventListener('click', clickHandler);
    
}


function nextQuestion (event2) {
    var id = event2.target.id;
    if (id = 'next_button'){
        var h2Element = document.getElementById('question');
        h2Element.remove();
        var cropImage = document.getElementById('crop_image');
        cropImage.remove();
        var ulElement = document.getElementById('ul_element');
        ulElement.remove();
        var answer = document.getElementById('answer');
        answer.remove();
        var fullImage = document.getElementById('full_image');
        fullImage.remove();
        var nextButton = document.getElementById('next_button');
        nextButton.remove();
    }
    getQuestion();
    getOptions();
}



