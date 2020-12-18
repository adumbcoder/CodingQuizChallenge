//create global variables for the logic page
const currentQuestion = document.querySelector('#currentQuestion');
const answers = Array.from(document.querySelectorAll('.answerText'));
const question = document.querySelector('#question');
const scoreText = document.querySelector('#scoreText');
const totalNumbofQuestions = 20;

let displayCurQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaiableQuestions = [];
let increaseScore = 1;
let myTimerInterval;
let timeLeftEl = document.querySelector('#timer');
//this function starts the quiz, resets all counters to 0 and calls the function getNextQuestion
startTheQuizMan = ()=> {
    questionCounter = 0;
    score = 0;
    avaiableQuestions = [...myQuizQuestions];
    getNextQuestion();
    startTimer();
}
//pulls in the questions, stores the scores, iterates over the myQuizQuestions array, and puts the 
//questions and answers on the quizpage
getNextQuestion = ()=> {
    if(avaiableQuestions.length === 0 || questionCounter>totalNumbofQuestions) {
        //sets the localstorage fo score
        localStorage.setItem('recentScore', score)
        //once you run out of questions go to highScore.html
        return window.location.assign("./highscores.html")
    }
    questionCounter++;
    question.textContent = `Question ${questionCounter} / ${totalNumbofQuestions}`
    //grabs a random question from the array, so each quiz is in a diffrent order
    const questionsIndex = Math.floor(Math.random() * avaiableQuestions.length)
    selectedQuestion = avaiableQuestions[questionsIndex];
    currentQuestion.textContent = selectedQuestion.question;

    answers.forEach(answer => {
        const number =answer.dataset['number']
        answer.textContent = selectedQuestion['answer' + number]
    });
    avaiableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true;

}
//checks if the answer chosen = the correctAnswer
answers.forEach(answer => {
    answer.addEventListener('click', event => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedAnswer = event.target
        const currentAnswer = selectedAnswer.dataset['number']
        //takes the answer clicked and tests it against the correct answer. Using the ?...: operator 
        // sets to the green or else red
        let colorChange = currentAnswer == selectedQuestion.correctAnswer ? 'correct' : 'incorrect'
        //if correct, increases the score by calling the increment score function
        if(colorChange === 'correct') {
            incrementScore(increaseScore);
        } else {
            let timeLeft = timeLeftEl.textContent.split(':');
            let totalSecondsLeft = (timeLeft[0] * 60 + parseInt(timeLeft[1]))- 10;
            startTimer(totalSecondsLeft);
        }

        selectedAnswer.parentElement.classList.add(colorChange)

        setTimeout (() => {
            selectedAnswer.parentElement.classList.remove(colorChange)
            getNextQuestion()
        }, 500)

    });
});

startTimer = time => {
    let totalSeconds = time;
    if(time === undefined){
    let totalMins = 15;
    totalSeconds = totalMins * 60;
    }

    window.clearInterval(myTimerInterval);
    
    //sets the interval to one second.
    myTimerInterval = setInterval(function(){

        //sets the total number of mins
        let minutes = Math.floor(totalSeconds / 60);
        //sets the total number of seconds
        let seconds = totalSeconds % 60;
        // used the '?..:' Conditional Operator. quick way of using a if/else statement
        //tells the function if the seconds is less then 10 then add a 0 in front, f not just 
        //use the seconds variable. Same thing for the minutes.
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        //Updates the #timeLeft span text.
        timeLeftEl.textContent = `${minutes}:${seconds}`;
        //subtracts one second from the total every time the function is called.
        totalSeconds--;
    }, 1000);
    if(totalSeconds < 0){
        return window.location.assign("./highscores.html")
    }
};

//function for the score, adds 1 and updates the textContent of score
incrementScore = num => {
    score += num;
    scoreText.textContent = score;
}

startTheQuizMan();