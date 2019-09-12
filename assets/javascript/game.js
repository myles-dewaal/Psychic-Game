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

    // CORRECT GUESSES 
    if (playerGuess === ranLetter) {
        jsGuess();
        won++;
        attempts = 10;
        usedArray = [];

    }

    //INCORRECT GUESSES
    if (playerGuess !== ranLetter) {
        attempts--;

    }

    if (attempts == 0) {
        jsGuess();
        lost++;
        usedArray = []
        attempts = 10;
    }

    //INCORRECT GUESSES - OUTPUT
    if (usedArray.indexOf(playerGuess) >= 0) {

    } else {
        usedArray.push(playerGuess);
        document.getElementById('playerGuess').innerHTML = usedArray;
        console.log(usedArray);

    }
    //OUTPUT TO HTML
    document.getElementById('won').innerHTML = won;
    document.getElementById('lost').innerHTML = lost;
    document.getElementById('attempts').innerHTML = attempts;

}