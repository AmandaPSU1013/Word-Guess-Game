console.log("file linked")

function newGame() {

    gameRunning = true;
    guessesLeft = 12;
    userGuess = [];
    wrongLetter = [];
    chosenWords = [];
}



var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wordBank = ["Paterno", "Mcsorley", "Franklin", "Sanders"];
var chosenWords = 3;
var userGuess = (alphabet);
var letterGuess = [];
var wrongLetter = [];
var guessesLeft = 12;
var wins = 0;
var loses = 0;
var gameRunning = true
var lives = 4;

var chosenWords = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log("chosenWords", chosenWords);




var placeholder = "";
for (var i; i < chosenWords.length; i++) {
    placeholder += "-"
    console.log("----")
}


document.onkeyup = function (event) {
        userGuess = event.key;
        if (chosenWords.indexOf(userGuess > -1) {

            }
            for (var i = 0; i < chosenWords.length; i++) {

            } else {
                wrongLetter.push(userGuess);
                guessesLeft--;
                console.log(wrongLetter)
            }
        }