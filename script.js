function playGame() {
    // Computer picks
    function computerPlay() {
      let finalpick;
      let randomNumber = Math.floor((Math.random() * 3) + 1);
      if (randomNumber === 1) {
        finalpick = "Rock";
      } else if (randomNumber === 2) {
        finalpick = "Paper";
      } else {
        finalpick = "Scissors";
      }
      const randomSelection = finalpick // save the computers selection here
      return randomSelection
    }
  
    // gets the players selection
    const playerSelection = document.getElementById("myInput").value;
  

    const computerSelection = computerPlay();
  
    // plays round
    function playRound(playerSelection, computerSelection) {
  
      // sets evverything to lowercase
      let playerchoice = playerSelection.toLowerCase();
      let computerchoice = computerSelection.toLowerCase();
      let result;
  
      if (playerchoice == "paper" && computerchoice == "rock") {
        result = "You win! Paper beats Rock";
      } else if (playerchoice == "rock" && computerchoice == "paper") {
        result = "You loose! Paper beats Rock";
      } else if (playerchoice == "scissors" && computerchoice == "paper") {
        result = "You win! Scissors beats Paper";
      } else if (playerchoice == "paper" && computerchoice == "scissors") {
        result = "You loose! Scissors beats Paper";
      } else if (playerchoice == "rock" && computerchoice == "scissors") {
        result = "You win! Rock beats Scissors";
      } else if (playerchoice == "scissors" && computerchoice == "rock") {
        result = "You loose! Rock beats Scissors"
      } else if (playerchoice == "rock" && computerchoice == "rock") {
        result = "You Tied! Computer also chose Rock!"
      } else if (playerchoice == "scissors" && computerchoice == "scissors") {
        result = "You Tied! Computer also chose Scissors";
      } else if (playerchoice == "paper" && computerchoice == "paper") {
        result = "You Tied! Computer also chose Paper";
      }
      const finalMessage = result;
      return finalMessage
    }
  
  
    const result = playRound(playerSelection, computerSelection); // Assuming playerSelection and computerSelection are defined
  
    // Get the HTML element where you want to display the result
    const resultElement = document.getElementById("result");
  
    // Update the content of the HTML element with the returned value
    resultElement.innerText = result;
  
  }
  