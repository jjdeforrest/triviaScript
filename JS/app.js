'use strict';
// // question-functions
// // things needed for the function
// // quiz questions
// // where to put the quiz
// // where to put the scores
// // a submit button

// // grabbing elements from html
// var quizContainer = document.getElementById('quiz');
// var scoresContainer = document.getElementById('scores');
// var submitButton = document.getElementById('submit');

// // array objects for our questions
// var ourQuestions = [
//   {
//     question: 'What saying is the joker known for?',
//     answers: {
//       a: 'Why so serious',
//       b: 'Knock knock',
//       c: 'The world is your oyster'
//     },
//     correctAnswer: 'a'
//   },
//   {
//     question: 'Against what opposing team did Babe Ruth hit his first career home run?',
//     answers: {
//       a: 'Seattle Mariners',
//       b: 'New York Yankees',
//       c: 'Houston Astros',
//     },
//     correctAnswer: 'b'
//   },
//   {
//     question: 'How did the Navy SEALs get their name?',
//     answers: {
//       a: 'Swimming ability',
//       b: 'Favorite animal of the President daughter',
//       c: 'Sea air land',
//     },
//     correctAnswer: 'c'

//   }

// ];

// showQuiz(ourQuestions, quizContainer, scoresContainer, submitButton);

// // function which holds the quiz questions
// function showQuiz(questions, quizContainer, scoresContainer, submitButton){

//   function showQuestions(questions, quizContainer){

//     var outcome = [];
//     var answers;
//     var letter;

//     // we loop through each questions
//     for(var i = 0; i < questions.length; i++){

//       // the current list of answers should be an empty array
//       answers = [];


//       // loop through each answer available to a question
//       for(letter in questions[i].answers){

//         // add an html checkbox
//         answers.push(
//           '<label>' + '<input type="checkbox" name="question ' + i + ' " value=" ' + letter + ' "> ' + letter + ': ' + questions[i].answers[letter] + '</label>'
//         );
//       }

//       // pushing the question and the answer to the outcome
//       outcome.push(
//         '<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
//       );

//     }
//     quizContainer.innerHTML = outcome.join('');
//   }

//   function showScores(questions, quizContainer, scoresContainer){

//     var answerContainers = quizContainer.querySelectorAll('.answers');

//     // keeping track of users answers
//     var userAnswer = '';
//     var correctNum = 0;

//     // loop through each question
//     for(var i = 0; i < questions.length; i++){

//       // target the selected answer
//       userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

//       // conditional to check for correct answers
//       if(userAnswer === questions[i].correctAnswer){

//         correctNum++;

//         answerContainers[i].style.color = 'green';
//       } else {
//         answerContainers[i].style.color = 'red';
//       }

//     }
//     // display the total correct number of answewrs
//     scoresContainer.innerHTML = correctNum + ' out of ' + questions.length;
//   }

//   showQuestions(questions, quizContainer);

//   // when the user clicks on the submit button it shows them their score

//   function clickHandler(){
//     showScores(questions, quizContainer, scoresContainer);

//   }

//   submitButton.addEventListener('click', clickHandler);

//   // clickHandler();

// }

  ///////////////////////////////////////////////////
 /////////   Famous People Category      ///////////
///////////////////////////////////////////////////


//creating object for identifying famous people
// function IdentifyFamousPeople({ question = 'Who is this?' }, cropPicture, options, answer, fullPicture) {
//     this.question = question;
//     this.cropPicture = cropPicture;
//     this.options = options;
//     this.answer = answer;
//     this.fullPicture = fullPicture;
// }

// var questionNumber = 0;
// var askQuestion = [];
// //adding all the objects to array
// var questionsArr = [];
// questionsArr.push(new IdentifyFamousPeople(' ', 'img/bradley.jpg', ['Bradley Cooper', 'Leonardo Di Caprio', 'Nicholas Cage'], 'option_1', 'img/bradleyFull.jpg'));
// questionsArr.push(new IdentifyFamousPeople(' ', 'img/dwayne.jpg', ['Robert Di Nero', 'Dwayne Johnson', 'Hugh Jackman'], 'option_2', 'img/dwayneFull.jpg'));
// questionsArr.push(new IdentifyFamousPeople(' ', 'img/gaga.jpg', ['Miley Cyrus', 'Madonna', 'Lady Gaga'], 'option_3', 'img/gagaFull.jpg'));
// questionsArr.push(new IdentifyFamousPeople('', 'img/messi.jpg', ['Christiano Ronaldo', 'Lionel Messi', 'David Beckham'], 'option_2', 'img/messiFull.jpg'));
// questionsArr.push(new IdentifyFamousPeople(' ', 'img/jennifer.jpg', ['Jennifer Lopez', 'Penelope Cruz', 'Jennifer Aniston'], 'option_1', 'img/jenniferFull.jpg'));

// var famousPeopleContainer = document.getElementById('famous_people');

// function getQuestion() {
//     for (var i = questionNumber; i < questionsArr.length; i++ ){
//         //Question Element
//         var question = addTextElement('h2', 'id', 'question', famousPeopleContainer, questionsArr[i].question);
        
//         //Image Element
//         var cropImage = addImage('img', 'id', 'crop_image', famousPeopleContainer, questionsArr[i].cropPicture);
        
//         //Answer option element
//         var ulElement = addTextElement('ul', 'id', 'ul_element', famousPeopleContainer);
        
//         //display all three answer options
//         for (var j = 0; j < questionsArr[i].options.length; j++) {
//             var option = addTextElement('li', 'id', `option_${j + 1}`, ulElement, questionsArr[i].options[j]);
//         }
//         break;       
//     }

//     console.log('questionNumber',questionNumber)
// }
// getQuestion();




// //function to get text element
// function addTextElement(tag, attribute, value, famousPeopleContainer, text) {
//     var element = document.createElement(tag);
//     element.setAttribute(attribute, value);
//     famousPeopleContainer.appendChild(element);
//     element.textContent = text;
//     return element;
// }

// //function to get image
// function addImage(tag, attribute, value, famousPeopleContainer, image) {
//     var element = document.createElement(tag);
//     element.setAttribute(attribute, value);
//     famousPeopleContainer.appendChild(element);
//     element.src = image;
//     return element;
// }

// //get options and add event listeners
// function getOptions() {
//     //get three options and store in variable
//     var option1 = document.getElementById('option_1');
//     var option2 = document.getElementById('option_2');
//     var option3 = document.getElementById('option_3');
    
//     //listen to the click event for each option
//     option1.addEventListener('click', clickHandler);
//     option2.addEventListener('click', clickHandler);
//     option3.addEventListener('click', clickHandler);
// }
// getOptions();

// // respond to the click on the options
// function clickHandler(event1) {
//     var id = event1.target.id;

//         if (id === questionsArr[questionNumber].answer) {
//             //display answer
//             addTextElement('h3', 'id', 'answer', famousPeopleContainer, 'Correct!');
//             //display full image
//             addImage('img', 'id', 'full_image', famousPeopleContainer, questionsArr[questionNumber].fullPicture);
//         }
//         else {
//             //display answer
//             addTextElement('h3', 'id', 'answer', famousPeopleContainer, 'Incorrect!  YOU SUCK!');
//             //display full image
//             addImage('img', 'id', 'full_image', famousPeopleContainer, questionsArr[questionNumber].fullPicture);
    
//         }
//         questionNumber++;
//         var button  = addTextElement('button', 'id', 'next_button', famousPeopleContainer, 'Next');

//         // debugger;
//         button.addEventListener('click', nextQuestion);
//         option1.removeEventListener('click', clickHandler);
//         option2.removeEventListener('click', clickHandler);
//         option3.removeEventListener('click', clickHandler);
    
// }


// function nextQuestion (event2) {
//     var id = event2.target.id;
//     if (id = 'next_button'){
//         var h2Element = document.getElementById('question');
//         h2Element.remove();
//         var cropImage = document.getElementById('crop_image');
//         cropImage.remove();
//         var ulElement = document.getElementById('ul_element');
//         ulElement.remove();
//         var answer = document.getElementById('answer');
//         answer.remove();
//         var fullImage = document.getElementById('full_image');
//         fullImage.remove();
//         var nextButton = document.getElementById('next_button');
//         nextButton.remove();
//     }
//     getQuestion();
//     getOptions();
// }


// DATA CHART
function makeChart(){
  var namesArray = [];
  var scoreArray =[];

  // name arrays here or questions arrays

  for(var i = 0; i < User.scoreArray.length; i++){
    var score = User.scoreArray[i].clicks;
    scoreArray.push(score);
  }

  var chartContent = document.getElementById('user-chart').getContext('2d');
  var gameChart = new chartContent(chartContent, {
    type: 'bar',

    data: {
      labels: //questions arrays
      datasets: [{
        label: 'score',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: //scoreArray,
      }]
    }
    // Configuration options go here
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
// END DATA CHART


// START SETTING UP TABLE

var container = document.getElementById('tableData');

var article = addElement('article', container); // Creates a container
var tableElem = addElement('table', article); // Creates a table

var personData = [
  {name:'Jitendra', score: 5},
  {name:'Jerome', score: 3},
  {name:'Joshua', score: 2},
  {name:'Sergey', score: 4},
  {name:'Daesy', score: 5},
];

// window.onload = () => {
//   loadTableData(personData)
// }

function addElement(tag, prevTag, text) {
  var element = document.createElement(tag);
  prevTag.appendChild(element);
  element.textContent = text;
  return element;
}

// function loadTableData(personData){
//   var tableBody = document.getElementById('tableData');
//   var dataHtml = "";


//   for(var person of personData){
//     dataHtml += `<tr><td>$(person.name)</td><td>$(person.score)</td></tr>`;
//     console.log(person.name);
//   }
  
//   console.log(dataHtml);

//   tableBody.innerHTML = dataHtml;
// }

// END OF TABLE

function loadTableData(personData){
  // Creates a header row
  var makeHeaderRow = function(){
    var headerRowElem = addElement('tr', tableElem);
    // addElement('th', headerRowElem, ' ');
    addElement('th', headerRowElem, 'Name');
    addElement('th', headerRowElem, 'Score');
  }

  makeHeaderRow()
  // ADD BODY OF TABLE
  var render = function() {
    
    // addElement('td', dataRowElem, this.name);
    for (var person of personData) {
      var dataRowElem = addElement('tr', tableElem);
      addElement('td', dataRowElem, person.name);
      addElement('td', dataRowElem, person.score);
    }
  }

  render()

  // SORTING
  var shouldSwitch,switching,rows,x,y;
  switching = true;
  rows=tableElem.rows;
  while (switching) {
    switching = false;
    for (var i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];
      
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


