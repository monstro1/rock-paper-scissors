function getComputerChoice() {
	let num = Math.floor(Math.random() * 3) + 1;
	switch(num) {
		case 1:
			return "rock";
		case 2:
			return "paper";
		default:
			return "scissors";
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	playerSelectionCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
	if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
		return "Error: " + playerSelection + " is not a valid choice!";
	}
	if (playerSelection === computerSelection) {
		return "It's a tie! Both players selected " + playerSelection;
	} else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
		return "You win! " + playerSelectionCapitalized + " beats " + computerSelection;
	} else {
		return "You lose! " + playerSelectionCapitalized + " loses to " + computerSelection;
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {
		let playerChoice = prompt("Choose rock, paper, or scissors");
		playRound(playerChoice, getComputerChoice());
	}
}
