// wins, losses, and ties
var wins = 0;
var losses = 0;
var ties = 0;
// array of potential computer choices 
var computerChoices = ["r", "p","s"];
// references to all the html sections we want to update
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses")
var tiesText = document.getElementById("ties");
var userGuessText = document.getElementById("userGuess");
var computerGuessText = document.getElementById("computerGuess");


document.onkeyup = function(event) {
var userGuess = event.key;

    

if(userGuess === "r" || userGuess === "p" || userGuess === "s"){
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if((userGuess === "r" && computerGuess === "s") || 
      (userGuess === "p" && computerGuess === "r") || 
      (userGuess === "s" && computerGuess === "p")){
wins++;
    }else if (userGuess === computerGuess){
        ties++;
    }else{
        losses++;
    }
    directionsText.textContent = "";
    winsText.textContent = wins;
    lossesText.textContent = losses;
    tiesText.textContent = ties;
userGuessText.textContent = userGuess;
computerGuessText.textContent = computerGuess;

    }else{
        alert("Choose 'r', 'p', or 's' to play!");
    }
}