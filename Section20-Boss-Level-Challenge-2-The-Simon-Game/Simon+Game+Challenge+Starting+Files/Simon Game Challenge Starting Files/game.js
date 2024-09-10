var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColour = buttonColours[randomNumber];
// return randomChosenColour;
gamePattern.push(randomChosenColour);
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();
}


$( ".btn" ).on( "click", function() {
    var userChosenColour = $("#" + randomChosenColour);
    console.log(userChosenColour);
  });

console.log(nextSequence());
console.log(gamePattern);





