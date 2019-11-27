'use strict';
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

var correctAnswer = 0;
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
  for (var i = questionNumber; i < questionsArr.length; i++) {
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
  console.log('questionNumber', questionNumber);
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
  console.log('fdsffsdfsdfsdfsfs');
  //listen to the click event for each option
  option1.addEventListener('click', clickHandler);
  option2.addEventListener('click', clickHandler);
  option3.addEventListener('click', clickHandler);
}
getOptions();

// respond to the click on the options
function clickHandler(event1) {
  var id = event1.target.id;
  console.log('removeeeeeeeee');

  var option1 = document.getElementById('option_1');
  var option2 = document.getElementById('option_2');
  var option3 = document.getElementById('option_3');
  option1.removeEventListener('click', clickHandler);
  option2.removeEventListener('click', clickHandler);
  option3.removeEventListener('click', clickHandler);

  if (id === questionsArr[questionNumber].answer) {
    //display answer
    addTextElement('h3', 'id', 'answer', famousPeopleContainer, 'Correct!');
    correctAnswer++;
    console.log('correct', correctAnswer);
    
    //display full image
    addImage('img', 'id', 'full_image', famousPeopleContainer, questionsArr[questionNumber].fullPicture);
    
  }
  else {
    //display answer
    addTextElement('h3', 'id', 'answer', famousPeopleContainer, 'Incorrect!');
    //display full image
    addImage('img', 'id', 'full_image', famousPeopleContainer, questionsArr[questionNumber].fullPicture);
  }

  if (questionNumber === 3) {
    addTextElement('h3', 'id', 'result',famousPeopleContainer, `You got ${correctAnswer} out of ${questionNumber} correct.`);
  }
  questionNumber++;

  // debugger;
  var button = addTextElement('button', 'id', 'next_button', famousPeopleContainer, 'Next');
  button.addEventListener('click', nextQuestion);
}

function nextQuestion(event2) {
  var id = event2.target.id;
  if (id = 'next_button') {
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
  if (questionNumber === 4) {
    window.location = 'category.html';
    console.log('answer', questionNumber);
    return;
  }
  getQuestion();
  getOptions();
}