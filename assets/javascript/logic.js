//minTime for minutes span
//secTime for seconds span
//button is #start



//Variables for timer
const totalMinutes = 40;
let totalSeconds = totalMinutes * 60;
let timeLeftEl = document.querySelector('#timeLeft');
let startBut = document.querySelector('#start');


//function for the timer.
//uses jquery to a click event to the #start button.
$('#start').click(function() {
    //sets the interval to one second.
    let myTimerInterval = setInterval(function(){

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
        timeLeftEl.textContent = `${minutes}: ${seconds}`;
        //subtracts one second from the total every time the function is called.
        totalSeconds--;
    }, 1000);
});



