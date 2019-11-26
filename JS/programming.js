'use strict;'

//////////////////////////////////////////
////      programming                  ////
//////////////////////////////////////////


function ProgrammingQuestion(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
}

var programQuestionArr = [];
var questionNumber = 0;
var correctAnswer = 0;


programQuestionArr.push(new ProgrammingQuestion('What is the correct way to write a JS array?', ['var colors = "red", "green", "blue"', 'var colors = ["red", "green", "blue"]', 'var colors = (1:"red", 2:"green", 3:"blue")'], 'option_2'));
programQuestionArr.push(new ProgrammingQuestion('What does \"===\" mean in javascript?', [`lol. no such thing as '==='`, 'equal value and equal type', 'equal variables only'], 'option_1'));
programQuestionArr.push(new ProgrammingQuestion('What is the JavaScript syntax for printing values in Console?', ['print(5)', 'console.log(5);', 'console.print(5);'], 'option_2'));
programQuestionArr.push(new ProgrammingQuestion('I designed a mechanical computer called the Analytical Engine who am I?', [' Bill Gates', 'Sylvester Stallone', 'Charles Babbage'], 'option_3'));
programQuestionArr.push(new ProgrammingQuestion('What website do we use for version control?', ['GitHub', 'Slack', 'Googledocs'], 'option_1'));

//function to get text element
function addTextElement(tag, attribute, value, container, text) {
    var element = document.createElement(tag);
    element.setAttribute(attribute, value);
    container.appendChild(element);
    element.textContent = text;
    return element;
}

var programmingContainer = document.getElementById('programming');

function getProgrammingQuestion() {
    for (var i = questionNumber; i < programQuestionArr.length; i++) {
        addTextElement('h2', 'id', 'question', programmingContainer,programQuestionArr[i].question);
        
        console.log('questioln', programQuestionArr[i].question);
        //Answer option element
        var ulElement = addTextElement('ul', 'id', 'ul_element', programmingContainer);

        //display all three answer options
        for (var j = 0; j < programQuestionArr[i].options.length; j++) {
            addTextElement('span', 'id', `option_${j + 1}`, ulElement, programQuestionArr[i].options[j]);
        }
        break;
        // console.log(element);
    }
}
getProgrammingQuestion();

//get three options and store in variable
var option1 = document.getElementById('option_1');
var option2 = document.getElementById('option_2');
var option3 = document.getElementById('option_3');

//listen to the click event for each option
option1.addEventListener('click', clickHandler);
option2.addEventListener('click', clickHandler);
option3.addEventListener('click', clickHandler);

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


function clickHandler(event) {
    var id = event.target.id;

    if (id === programQuestionArr[questionNumber].answer) {
        //display answer
        addTextElement('h3', 'id', 'answer', programmingContainer, 'Correct!');
        correctAnswer++;
    }
    else {
        //display answer
        addTextElement('h3', 'id', 'answer', programmingContainer, 'Incorrect!');
    }
    questionNumber++;

    // debugger;
    option1.removeEventListener('click', clickHandler);
    option2.removeEventListener('click', clickHandler);
    option3.removeEventListener('click', clickHandler);
    var button = addTextElement('button', 'id', 'next_button', programmingContainer, 'Next');
    button.addEventListener('click', nextQuestion);
}

function nextQuestion(event2) {
    var id = event2.target.id;
    if (id = 'next_button') {

        var h2Element = document.getElementById('question');
        h2Element.remove();
        
        var ulElement = document.getElementById('ul_element');
        ulElement.remove();
        var answer = document.getElementById('answer');
        answer.remove();
        var nextButton = document.getElementById('next_button');
        nextButton.remove();
    }
    if (questionNumber === 4) {
        window.location = 'category.html';
        console.log('answer', questionNumber);
        return;
    }
    getProgrammingQuestion();
    getOptions();
}
