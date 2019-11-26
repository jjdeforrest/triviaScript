'use strict';

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

  function showScores(questions, quizContainer, scoresContainer){

    var answerContainers = quizContainer.querySelectorAll('.answers');
    console.log(answerContainers);

    // keeping track of users answers
    var userAnswer = '';
    var correctNum = 0;

    // loop through each question
    for(var i = 0; i < questions.length; i++){

      console.log(answerContainers);
      // target the selected answer
      var currentContainer = answerContainers[i];
      console.log('----------', currentContainer);
      userAnswer = document.querySelector('input[name=question'+i+']:checked');
      // userAnswer = (currentContainer.querySelector('input[name=question'+i+']:checked'));

      console.log(userAnswer);

      // conditional to check for correct answers
      if(userAnswer === questions[i].correctAnswer){

        correctNum++;

        answerContainers[i].style.color = 'green';
      } else {
        answerContainers[i].style.color = 'red';
      }

    }
    showScores(questions, quizContainer, scoresContainer);

    // display the total correct number of answewrs
    scoresContainer.innerHTML = correctNum + ' out of ' + questions.length;
  }

  showQuestions(questions, quizContainer);


  // when the user clicks on the submit button it shows them their score

  // function clickHandler(){

  // }

  // submitButton.addEventListener('click', clickHandler);
}

function submitHandler(event){

  // var answerData = new inputData()

  event.preventDefault();
  console.log('submitHandler', event.target.answerRadio0.value);
  console.log('submitHandler', event.target.answerRadio1.value);
  console.log('submitHandler', event.target.answerRadio2.value);



}

quizContainer.addEventListener('submit', submitHandler);


// function submitHandler(event){

//   event.preventDefault();
//   console.log('submitHandler');


// DATA CHART
// function makeChart(){
//   var namesArray = [];
//   var scoreArray =[];

//   // name arrays here or questions arrays

//   for(var i = 0; i < User.scoreArray.length; i++){
//     var score = User.scoreArray[i].clicks;
//     scoreArray.push(score);
//   }

//   var chartContent = document.getElementById('user-chart').getContext('2d');
//   var gameChart = new chartContent(chartContent, {
//     type: 'bar',

//     data: {
//       labels: //questions arrays
//       datasets: [{
//         label: 'score',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: //scoreArray,
//       }]
//     }
//     // Configuration options go here
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: true
//           }
//         }]
//       }
//     }
//   });
// }

// getOptions();


// END DATA CHART


// START SETTING UP TABLE

// var container = document.getElementById('tableData');

// var article = addElement('article', container); // Creates a container
// var tableElem = addElement('table', article); // Creates a table

// var personData = [
//   {name:'Jitendra', score: 5},
//   {name:'Jerome', score: 3},
//   {name:'Joshua', score: 2},
//   {name:'Sergey', score: 4},
//   {name:'Daesy', score: 5},
// ];

// // window.onload = () => {
// //   loadTableData(personData)
// // }

// function addElement(tag, prevTag, text) {
//   var element = document.createElement(tag);
//   prevTag.appendChild(element);
//   element.textContent = text;
//   return element;
// }

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

// function loadTableData(personData){
//   // Creates a header row
//   var makeHeaderRow = function(){
//     var headerRowElem = addElement('tr', tableElem);
//     // addElement('th', headerRowElem, ' ');
//     addElement('th', headerRowElem, 'Name');
//     addElement('th', headerRowElem, 'Score');
//   }

//   makeHeaderRow()
//   // ADD BODY OF TABLE
//   var render = function() {

//     // addElement('td', dataRowElem, this.name);
//     for (var person of personData) {
//       var dataRowElem = addElement('tr', tableElem);
//       addElement('td', dataRowElem, person.name);
//       addElement('td', dataRowElem, person.score);
//     }
//   }

//   render()

//   // SORTING
//   var shouldSwitch,switching,rows,x,y;
//   switching = true;
//   rows=tableElem.rows;
//   while (switching) {
//     switching = false;
//     for (var i = 1; i < (rows.length - 1); i++) {
//       shouldSwitch = false;
//       x = rows[i].getElementsByTagName("td")[1];
//       y = rows[i + 1].getElementsByTagName("td")[1];

//       if (Number(x.innerHTML) < Number(y.innerHTML)) {
//         //if so, mark as a switch and break the loop:
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       /*If a switch has been marked, make the switch
//       and mark that a switch has been done:*/
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }
// }

