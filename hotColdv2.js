var randomNum = Math.floor(Math.random() * 101);
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
};