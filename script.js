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
	if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
		return "error";
	}
	if (playerSelection === computerSelection) {
		return "draw";
	} else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
		return "win";
	} else {
		return "loss";
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {
		let playerChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
		let playerChoiceCapitalized = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
		let computerChoice = getComputerChoice();
		let gameResult = playRound(playerChoice, computerChoice);
		switch (gameResult) {
			case "error":
				return `Error: ${playerChoice} is not a valid choice.`;
			case "draw":
				console.log(`It's a tie! Both players selected ${playerChoice}.`);
				break;
			case "win":
				playerScore++;
				console.log(`You win! ${playerChoiceCapitalized} beats ${computerChoice}.`);
				break;
			default:
				computerScore++;
				console.log(`You lose! ${playerChoiceCapitalized} loses to ${computerChoice}.`);
		}
	}
	if (playerScore === computerScore) {
		return `It's a tie! Both players have a score of ${playerScore}.`;
	} else if (playerScore > computerScore) {
		return `You win! Your score: ${playerScore}; the computer's score: ${computerScore}.`;
	} else {
		return `You lose! The computer's score: ${computerScore}; your score: ${playerScore}.`;
	}
}
