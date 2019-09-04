//Variables
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = "abcdefghijklmnopqrstuvwxyz"

//Generating the random letter
ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);
function jsGuess() {
    ranLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(ranLetter);

}

//Players input
document.onkeyup = function (event) {
    var playerGuess = event.key;

