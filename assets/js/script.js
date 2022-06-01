var starterBtn = document.getElementById("start-btn")
var timerEl = document.getElementById('timer');
var quizPageEl = document.getElementById("display-quiz-page");
var resultsPage = document.getElementById('result-page');
var displayResults = document.getElementById('display-reults')
var intervalTimer;
var specTime = 90;
var globalIndex = 0;
var questions = [
    { 
        "title": "Which of the following keywords is used to define a variable in Javascript?",
        "options": ["var", "let", "both var and let", "none of the above"],
        "answer": "both var and let"
    },
    { 
        "title": "Javascript is an _______ language?",
        "options": ["object-oriented", "object-based", "procedural", "none of the above"],
        "answer": "object-oriented"
    },
    { 
        "title": "Upon encountering empty statements, what does the Javascript Interpreter do?",
        "options": ["throws an error", "ignores the statements", "gives a warning", "none of the above"],
        "answer": "ignores the statements"
    },
    { 
        "title": "What keyword is used to check whether a given property is valid or not?",
        "options": ["in", "is in", "exists", "lies"],
        "answer": "in"
    },
    {
        "title": "When an operator’s value is NULL, the type of returned by the unary operator is:",
        "options": ["boolean", "unidefined", "object", "integer"],
        "answer": "object"
    },
    { 
        "title": "What does the Javascript “debugger” statement do?",
        "options": ["it will debug the errors in the program at runtime", "it will act as a breakpoint in a program", "it will debug error in the current statement if any", "all the above"],
        "answer": "it will act as a breakpoint in a program"
    },
    { 
        "title": "Which function is used to serialize an object into a JSON string in Javascript?",
        "options": ["stringify()", "parse()", "convert()", "none of the above"],
        "answer": "stringify()"
    },
    { 
        "title": "Which of the following are closures in Javascript?",
        "options": ["variables", "functions", "objects", "all the above"],
        "answer": "all the above"
    },
    { 
        "title": "Which of the following is not a Javascript framework?",
        "options": ["node", "vue", "react", "cassandra"],
        "answer": "cassandra"
    },
    { 
        "title": "Which of the following keywords is used to define a variable in Javascript?",
        "options": ["var", "let", "both var and let", "none of the above"],
        "answer": "both var and let"
    },
]

// Start of Starter Function
function starterFunc() {
    var starterPageEl = document.getElementById("stater-page");
    starterPageEl.style.display = "none";

    quizPageEl.style.display = "block";

    intervalTimer = setInterval(setTimer, 1000);
    displayQuestion();
}

function setTimer() {
    
    specTime = specTime -1;  
    timerEl.innerText = specTime;
    if(specTime <= 0){
        clearInterval(intervalTimer);
    }
}

function displayQuestion(){
    quizPageEl.innerHTML = '';
    var titleQUEST = document.createElement('h2');
    titleQUEST.textContent = questions[globalIndex].title;
    quizPageEl.appendChild(titleQUEST);
    var quizQuests = document.createElement('div');
    for (var i = 0; i < questions[globalIndex].options.length; i++) {
        var quizQuest = document.createElement('button');
        quizQuest.textContent = questions[globalIndex].options[i]
        quizQuest.onclick = checkAnswer;
        quizQuests.appendChild(quizQuest);

    }


    quizPageEl.appendChild(quizQuests);

}

function checkAnswer(event){
    if (event.target.textContent === questions[globalIndex].answer){
        displayResults.textContent = 'correct';
    } else {
        specTime = specTime - 5;
        displayResults.textContent = 'incorrect';
    }
    // check if user's answer is correct or not.
    globalIndex++;
    // increase globalindex
    setTimeout(function(){
        displayResults.textContent = '';
        displayQuestion();
    }, 1000)
    // call displayQuestion
}



function stopTime(){
if (specTime <= 0 || questions[globalIndex].options.length > 9){
    alert('game is over')
} 
};
console.log(checkAnswer);
starterBtn.addEventListener("click", starterFunc);