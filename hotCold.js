var guessNumber = function(userNumber){
    var randomNumber = Math.floor(Math.random() * 100),
    lastDiff = 0,
    diff = 0;
    
    do{
        if(userNumber == randomNumber){

            alert(" Hey Everybody! They got it!");
            break;
        }        
        
        diff = Math.abs(randomNumber - userNumber);
        
        if(lastDiff && diff < lastDiff){

            if(diff < 10){
                alert(" Getting Much Warmer, Try again!"); 
            }else{
                alert(" Getting Warmer, Try again!");             
            }

        }else{
            if(diff > 30){
                alert(" Getting Much Colder, Try again!");  
            }else{
                alert(" Getting Colder, Try again!");             

            }                
        }
        
        lastDiff = diff;
        
        userNumber = prompt('Try Again: Guess a new number between 1- 100:', " ");
        
        if(userNumber == null){

            alert('You will now exit the game');
            break;
        }
        
    }while(userNumber !== randomNumber)
}

var userGuess = prompt("Guess the number 1- 100", " ");


if(userGuess == null ){
    alert('You will now exit the game.');
    
}else{
    guessNumber(userGuess);
}
