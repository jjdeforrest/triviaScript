

function ProgrammingQuestion(question, options, answer) {
  this.question = question;
  this.options = options;
  this.answer = answer;
}

var programQuestionArr = [];

programQuestionArr.push(new ProgrammingQuestion('What is the correct way to write a JS array?', ['var colors = "red", "green", "blue"', 'var colors = ["red", "green", "blue"]', 'var colors = (1:"red", 2:"green", 3:"blue")'], 'option_2'));
programQuestionArr.push(new ProgrammingQuestion('What does ' === 'mean in javascript?', [`lol. no such thing as '==='`, 'equal value and equal type', 'equal variables only'], 'option_1'));
programQuestionArr.push(new ProgrammingQuestion('What is the JavaScript syntax for printing values in Console?', ['print(5)', 'console.log(5);(correct)', 'console.print(5);'], 'option_2'));
programQuestionArr.push(new ProgrammingQuestion('I designed a mechanical computer called the Analytical Engine who am I?', [' Bill Gates', 'Sylvester Stallone', 'Charles Babbage(correct)'], 'option_3'));
programQuestionArr.push(new ProgrammingQuestion('What website do we use for version control?', ['GitHub', 'Slack', 'Googledocs'], 'option_1'));



function getProgrammingQuestion() {
  for (var i = 0; i < programQuestionArr.length; i++) {
    var element = document.createElement('h2');
    var programmingContainer = document.getElementById('programming');
    programmingContainer.appendChild(element);
    //Question Element

    console.log(element);
    // addTextElement('h2', 'id', 'programmingQuestion', programmingContainer, programQuestionArr[i].question);
    element.textContent = programQuestionArr[i].question;
  }
}
console.log('test')
getProgrammingQuestion();