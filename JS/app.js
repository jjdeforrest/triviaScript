'use strict';
//creating object for identifying famous people
function IdentifyFamousPeople({question = 'Who is this?'}, cropPicture, options, answer, fullPicture) {
    this.question = question;
    this.cropPicture = cropPicture;
    this.options = options;
    this.answer = answer;
    this.fullPicture = fullPicture;
}

var questionsArr = [];
questionsArr.push(new IdentifyFamousPeople(' ','img/bradley.jpg', ['Bradley Cooper', 'Leonardo Di Caprio', 'Nicholas Cage'], 'Bradley Cooper', 'img/bradleyCooper.jpg'));
questionsArr.push(new IdentifyFamousPeople(' ', 'img/dwayne.jpg', ['Robert Di Nero', 'Dwayne Johnson', 'Hugh Jackman'], 'Dwayne Johnson', 'img/dwayne_.jpg'));

var container = document.getElementById('famous_people');

//Question Element
var question1 = addTextElement('h2', container, questionsArr[0].question);

//Image Element
var cropImage = addImage('img', container, questionsArr[0].cropPicture);

//Answer option element
var ulElement = addTextElement('ul', container);

//display all three answer options
function getOptionsElement() {
    for (var i = 0; i < questionsArr[0].options.length; i++){
        var option = document.createElement('li');
        ulElement.appendChild(option);
        option.textContent = questionsArr[0].options[i];   
    }
    return option;
}
getOptionsElement();


//text element function 
function addTextElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    element.textContent = text;
    return element;
}

//function to get image
function addImage(tag, container, cropImage) {
    var element = document.createElement(tag);
    container.appendChild(element);
    element.src = cropImage;
    return element;
}

