/* var randomNum = Math.floor(Math.random() * 101);
var diff = 0, 
lastDiff = 0,
userGuess = document.getElementById('guessInput').value;

$(document).ready(function(){
    $('guessInput').keyup(function(){
        if(event.keycode == 13){
            $('#submit').click();
        }

});

function logPastDiff(userGuess){
    diff = Math.abs(userGuess - randomNum);

    if(userGuess != randomNum){
        lastDiff = diff;
    }
    document.getElementById('#lastGuess').text("" + lastDiff);
};

function getNumber(userGuess){
    do{


    }
}; */

var randomNumber = Math.floor(Math.random() * 101),
        lastDiff = 0,
        diff = 0;

function printDiff(){
    $('#lastGuess').text(diff);
};

function guessNumber(userNumber){
    
    if(userNumber == randomNumber){

        $('#message').text('Hey! You got it!');
        return;
    }        
    
    diff = Math.abs(randomNumber - userNumber);



    $('#gameBox').removeClass('highCold highHot');

    if(isNaN(userNumber)){
        $('#message').text('That\'s not a number.');
        return;
    } else if(userNumber > 100 || userNumber < 0){
        $('#message').text('try a number 1-100');
        return;
    }

    if(diff < lastDiff){

        if(diff < 10){
            $('#message').text('Getting really Hot, Try again!');
            $('#gameBox').addClass('highHot');
            printDiff();

        } else if(diff < 15 && diff > 10){
            $('#message').text('Getting much Warmer, Try again!'); 
            printDiff();

        } else {
            $('#message').text('Getting Warmer, Try again!');
             printDiff();            
        }

    } else {
        if(diff == lastDiff){
            $('#message').text('You already tried that');
            printDiff();

        } else if(diff > 30){
            $('#message').text('Getting Much Colder, Try again!');
            $('#gameBox').addClass('highCold');
            printDiff();

        } else {
            $('#message').text('Getting Colder, Try again!');
             printDiff();            

        } 
    }
    lastDiff = diff;
    
    return diff;
}


//
// DOCUMENT READY
//
$(document).ready(function () {
    var userNumber;
    
    $("#submit").click(function(){
    
         var userNumber = $('#guessInput').val();
        diff = guessNumber(userNumber);
        $('#guessInput').val('');
     });
    // Accept Enter within input
    $('#guessInput').keyup(function(ev){
        if(ev.keyCode == 13){
        $("#submit").click(); 
        }
    });
     $("#reset").click(function(){
        location.reload();
    }); 

    
    $("#lastGuess").text(diff);

});