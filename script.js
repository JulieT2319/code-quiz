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
var scorsEl = document.getElementById("scores");

//display text
var time = quizQuestions.length * 15;
timerEL.innerText = time;
//quiz control
var quizStatus = "incomplete";
var questionNow = 0;
var correctAnswer;
var userAnswer;

//score control
var highScores = JSON.parse(localStorage.getItem("highScores"));
var currentScore = "";


if (highScores === null) {
	highScores = [];
}

function displayTime() {

	var timeInterval = setInterval(function () {
		timerEL.innerText = time;
		time--;

		if (quizStatus === "completed") {

			clearInterval(timeInterval);
		}
	}, 1000);
}


function clearQuiz() {
	responseEl.innerHTML = "";
	questionEl.innerHTML = "";
}

function populate() {
	if (questionNow < quizQuestions.length) {

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
	} else {
		quizStatus = "completed";
		questionEl.innerHTML = "<h1 class='score'> Your final score is " + time + "</h1>"
		responseEl.innerHTML = 'Please enter your initials: <input type="text" id="initials" name="initials"><button id="add-score">Submit Score</button>'

	}
}

function checkAnswer() {
	if (correctAnswer === userAnswer) {
		resultEl.innerHTML = "<h1 class='correct'>That's correct!</h1>";
	} else {
		resultEl.innerHTML = "<h1 class='wrong'>That is not correct.</h1>";
		time -= 15;
	}
	function clearResult() {

		setTimeout(function () {
			resultEl.innerHTML = "";
		}, 500)
	}
	clearResult();
	clearInterval(clearResult);
}
responseEl.addEventListener("click", function () {
	var element = event.target;

	if (element.matches("button")) {
		var elId = element.getAttribute("id");
		if (elId === "start") {
			displayTime();
			clearQuiz();
			populate();
		} else if (elId === "add-score") {
			var player = document.getElementById("initials").value;
			currentScore = player + ": " + time;
			highScores.push(currentScore);
			localStorage.setItem("highScores", JSON.stringify(highScores));
			clearQuiz();
			var createButton = document.createElement("button");
			var buttonText = document.createTextNode("Play Again");
			createButton.appendChild(buttonText);
			createButton.setAttribute("id", "start");
			responseEl.appendChild(createButton);
		} else {
			userAnswer = element.innerHTML;
			checkAnswer();
			clearQuiz();
			populate();
		}
	}
})