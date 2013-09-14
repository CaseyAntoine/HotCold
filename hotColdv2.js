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

(function () {
    "use strict";
    var randomNumber = Math.floor(Math.random() * 101),
        lastDiff = 0,
        diff = 0;
        var userNumber = $('#guessInput').val();
        function printDiff(){
        	getElementById('#lastGuess').text(diff.value);
        };
    
    var guessNumber = function(userNumber){
        
        if(userNumber == randomNumber){
    
            $('#message').text('Hey! You got it!');
            break;
        }        
        
        diff = Math.abs(randomNumber - userNumber);
        //Turn diff into function to print on each guess??

        if(isNaN(userNumber)){
            $('#message').text('That\'s not a number.');
            }
        else if(diff < lastDiff){
            if(diff < 10){
                $('#message').text('Getting so Hot, Try again!');
                document.getElementById('#gamebox').addClass('.highHot');
            }
            else if(diff < 15 && diff > 10){
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
                document.getElementById('#gameBox').addClass('.highCold');
            }else{
                $('#message').text('Getting Colder, Try again!');             
    
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
        
        $("#submit").onclick(function(){
        
             var userNumber = $('#guessInput').val();
            diff = guessNumber(userNumber);
         });
        // Accept Enter within input
        $('#guessInput').keyup(function(){
            if(event.keyCode == 13){
            $("#submit"); 
            }
        });
        /* $("#reset").click(function(){
            location.reload();
        }); */	
        
        $("#lastGuess").text(diff);

    });

} ());