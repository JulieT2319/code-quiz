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
var resultEl = document.getElementById("result");

//display text
var time = quizQuestions.length * 15;
timerEL.innerText = time;
//quiz control
var quizStatus = "incomplete";
var questionNow = 0;
var correctAnswer;
var userAnswer;

function clearQuiz() {
	responseEl.innerHTML = "";
	questionEl.innerHTML = "";
}

function populate() {
	for (i = 0; i < quizQuestions[questionNow].options.length; i++) {
		var createButton = document.createElement("button");
		var buttonText = document.createTextNode(quizQuestions[questionNow].options[i]);
		createButton.appendChild(buttonText);
		createButton.setAttribute("id", "choice-" + i);
		responseEl.appendChild(createButton);

	}
	questionEl.innerHTML = "<h1 class='question'>" + quizQuestions[questionNow].question + "</h1>"
	correctAnswer = quizQuestions[questionNow].answer;
	questionNow++
}

function checkAnswer() {
	if (correctAnswer === userAnswer) {
		resultEl.innerHTML = "<h1 class='correct'>That's correct!</h1>";
	} else {
		resultEl.innerHTML = "<h1 class='wrong'>That is not correct.</h1>";
		time -= 15;
		//for testing purposes
		console.log(time);
	}
	function clearResult() {

		setTimeout(function () {
			resultEl.innerHTML = "";
		}, 1500)
	}
	clearResult();
	clearInterval(clearResult);
}
responseEl.addEventListener("click", function () {

})