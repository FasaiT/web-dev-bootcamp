var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColour = buttonColours[randomNumber];
// return randomChosenColour;
gamePattern.push(randomChosenColour);


}

console.log(nextSequence());
console.log(gamePattern);

