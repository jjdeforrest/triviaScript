# triviaScript

## Description
- This is a trivia game with different question categories for users to choose from

## Team Members
* Daesy Stephens
* Jerome Joof
* Sergey Voytov
* Joshua Deforrest
* Jitendra Bajracharya
* Dayne Daylong


## Domain Modeling

- Functions

```
function showQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
```

- Objects

```
var categoryQuestions = [
	{
		question: "How many NBA rings did Michaele Jordan won",
		answers: {
			a: '3',
			b: '6',
			c: '11'
		},
		correctAnswer: 'b'
	},
	{
		question: "In which year was java created",
		answers: {
			a: '1995',
			b: '2001',
			c: '1965'
		},
		correctAnswer: 'A'
	}
];
```