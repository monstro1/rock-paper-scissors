const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");

rockButton.addEventListener("click", function() {
	playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", function() {
	playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", function() {
	playRound("scissors", getComputerChoice());
});

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

let playerScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");
const playerChoices = document.querySelector("#player-choices");
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const winnerDiv = document.querySelector("#winner");

function playRound(playerSelection, computerSelection) {
	playerChoices.textContent = `You chose ${playerSelection}, the computer chose ${computerSelection}`;
	if (playerSelection === computerSelection) {
	} else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
		playerScoreSpan.textContent = ++playerScore;
	} else {
		computerScoreSpan.textContent = ++computerScore;
	}
	if (playerScore >= 5 || computerScore >= 5) {
		if (playerScore > computerScore) {
			winnerDiv.textContent = "You win!";
		} else {
			winnerDiv.textContent = "You lose!";
		}
	}
}
