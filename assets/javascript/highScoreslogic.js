    //create a list item
    let submit = document.querySelector('#submit');
    let initials = document.querySelector('#initials');
    let highScoreList = document.querySelector('#highScores')
    let clear = document.querySelector('#clear');
    let goBack = document.querySelector('#goBack');
    // function to populate the list
    submit.addEventListener('click', function() {
        //pull in the score
        let highScore = window.localStorage.getItem('recentScore');
        //create the list element
        let newScore = document.createElement('li');
        //get a value for the length of initials
        let initialslen = initials.value.length;
        //checks if the length is 4 or less
        if(initialslen <= 4 && initialslen !== 0) {
            if(highScore !== null) {
                //sets the intials value  
                newInitials = initials.value;
                //create a string for the list item
                newHighScoreEntry = `${newInitials}: ${highScore}`;
                //append the list item to ordered list
                highScoreList.appendChild(newScore);
                //set the list items text to newHighScoreEntry string
                newScore.textContent = newHighScoreEntry;
            }
            else{
                alert('You have not taken the quiz yet.')
            }
        }
        else {
            alert('Your initials must be between one and four letters long.')
        }

    })
    
    //clears the local storage when you leave the page
    goBack.addEventListener('click', function() {
        window.localStorage.clear();
    })
    //empties the ordered list
    clear.addEventListener('click', function(){

        highScoreList.textContent = '';
    })