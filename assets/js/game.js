// wins, losses, and ties
var wins = 0;
var losses = 0;
var guessLeft = 10;
// array of potential computer choices 
var validGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var computerChoices = validGuess;
// references to all the html sections we want to update
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses")
var guessLeftText = document.getElementById("guessLeft");
var userGuessText = document.getElementById("userGuess");
var wrongGuess = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)

document.onkeyup = function(event) {
    var userGuess = event.key;
console.log(validGuess.indexOf(userGuess))
    
    //  index of 
    
    
    if(validGuess.indexOf(userGuess)>-1){
        
        if(userGuess == computerGuess){
            console.log(userGuess);  
            wins++;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerGuess)
            guessLeft = 10;
    }else{
        guessLeft--;
        wrongGuess.push(userGuess)
        console.log(wrongGuess)
        
        if(guessLeft === 0){
            losses++;
            guessLeft = 10;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
    }

}else{
    alert("Please pick a letter to play!")
}
    
    winsText.textContent = wins;
    lossesText.textContent = losses;
userGuessText.textContent = wrongGuess;
guessLeftText.textContent = guessLeft;
};