var quizQuestions = [{
	question: "Which of the following can be stored in an array?",
	options: ["Objects", "Strings", "Numbers", "All of the above"],
	answer: "All of the above"
},
{
	question: "An array is enclosed in what?",
	options: ["square brackets []", "curly brackets {}", "parentheses ()", "single quotes ''"],
	answer: "square brackets []"
},
{
	question: "What is used to indicate strict comparison?",
	options: ["==", "===", "!=", "="],
	answer: "==="
},
{
	question: "JavaScript is a ___ language",
	options: ["case sensitive", "case insensitive"],
	answer: "case sensitive"
},
{
	question: "What is the correct way to declare a variable ",
	options: ["variable = 3;", "var = 3;", "var == 3;", "var === 3;"],
	answer: "var = 3;"
},
]
//DOM Elements
var responseEl = document.getElementById("responses");
var timerEL = document.getElementById("timer");
var questionEl = document.getElementById("questions");

//display text
var time = 75;

//quiz control
var quizStatus = "incomplete";
var questionNow = 1;
var correctAnswer;
var userAnswer;

function clearQuiz() {
	responseEl.innerHTML = "";
	questionEl.innerHTML = "";
}

function populate() {
	for (i = 0; i < length.quizQuestions[questionNow].options; i++) {
		var createButton = document.createElement("button");
		var buttonText = document.createTextNode(quizQuestions[questionNow].options[i]);
		createButton.appendChild(buttonText);
		var addId = document.createAttribute("id");
		addId.value = "choice-" + i;
		createButton.setAttribute(addId);
		responseEl.appendChild(createButton);
	}
}
responseEl.addEventListener("click", function () {

})