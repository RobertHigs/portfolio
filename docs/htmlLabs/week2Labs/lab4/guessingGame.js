// JavaScript File

var secretNumber = Math.floor((Math.random() * 10) + 1);
var guess = prompt("Guess a number", "");

if (guess == secretNumber) {
    
    console.log("You are correct!");
    prompt("You are correct!", "");
}

else {
    if  (guess > secretNumber) {
    console.log("You guessed too high! Try again");
    prompt("You guessed too high! Try again");
    }


else  {
    console.log("You guessed too low! Try again.");
    prompt("You guessed too low! Try again.");
}
}