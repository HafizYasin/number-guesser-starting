let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// This function will be called at the start of each new round in order to generate the new secret target number between 0 and 9.
const generateTarget = function() {
  return Math.floor(Math.random() * 10);
}


// This function will be called each round to determine which guess is closest to the target number.
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
	// check user input, should be between 0 and 9
	// This if statement is not working properly: The result should not be shown after clicking ok on alert window.
	if(userGuess < 0 || userGuess > 9) {
		alert("The number should be between 0 and 9");
		return;
	}
    // Compare the absolute value of the difference between the target and each guess
    let userDistance = getAbsoluteDistance(targetNumber, userGuess);
    let computerDistance = getAbsoluteDistance(targetNumber, computerGuess);
    // Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
    if(userDistance === computerDistance || userDistance < computerDistance) {
      return true;
    } else {
      return false;
    }

}


// This function takes two numbers and returns the absolute distance from the target.
const getAbsoluteDistance = (targetNumber, distantNumber) => {
  return Math.abs(targetNumber - distantNumber);
}


// This function will be used to correctly increase the winner’s score after each round.
const updateScore = winner => {
  // Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore(). The string passed in will be either 'human' or 'computer'.
  if(winner === 'human') {
    humanScore ++;
  }
  if(winner === 'computer') {
    computerScore ++;
  }
}


// This function will be used to update the round number after each round. advanceRound() should increase the value of currentRoundNumber by 1.
const advanceRound = () => {
  currentRoundNumber ++;
}

// code testing
/*updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1*/
