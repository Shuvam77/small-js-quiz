function populate(){
    if(quiz.isEnded()){
        showScore()
    } else {
        //showQuestion
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //showOptions
        var choices = quiz.getQuestionIndex().choices;
        for (var i =0; i<choices.length; i++){
            var element = document.getElementById("choice"+i)
            element.innerHTML = choices[i];
            guess("btn"+i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById('progress');
    element.innerHTML = "Question " + currentQuestionNumber + " of "+quiz.questions.length;
}

function showScore(){
    var gameOverHtml = "<h1>Results</h1>";
    gameOverHtml += "<h2 id='score'>Your Scores: "+ quiz.score+"/"+quiz.questions.length +"</h2>";

    gameOverHtml += "<button id='btnR' onclick='location.reload();'>Reset</button>";

    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}


var Questions =[
    new Question("what is this?", ["a", "b", "c", "d"], "b"),
    new Question("what is that?", ["e", "f", "g", "h"], "h")

]

var quiz = new Quiz(Questions);
populate();