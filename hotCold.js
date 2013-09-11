$document.ready(function(){
    $("#submit").onclick(function(){
    $("#lastGuess").val(diff);
    guessNumber(userNumber);
    /*var numGuess = document.getElementById('guessInput').value;*/

    $('guessInput').keyup(function(){
        if(event.keycode == 13){
            $('#submit').click();
        }
    });

     });
    /* $("#reset").click(function(){
        location.reload();
    }); */
});

var randomNumber = Math.floor(Math.random() * 101),
    lastDiff = 0,
    diff = 0;


var guessNumber = function(userNumber){
    
    
    do{
        if(userNumber == randomNumber){

            $('#message').text('Hey Everybody! They got it!');
            break;
        }        
        
        diff = Math.abs(randomNumber - userNumber);
        if(isNaN(userNumber)){
            $('#message').text('That\'s not a number wise guy.');
            }
        else if(diff < lastDiff){
            if(diff < 5){
                $('#message').text('Getting so Hot, Try again!');
            }
            else if(diff < 10){
                $('#message').text('Getting much Warmer, Try again!'); 
            }else{
                $('#message').text('Getting Warmer, Try again!');             
            }

        }else{
            if(diff == lastDiff){
                $('#message').text('You already tried that');
            }
            else if(diff > 30){
                $('#message').text('Getting Much Colder, Try again!');  
            }else{
                $('#message').text('Getting Colder, Try again!');             

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