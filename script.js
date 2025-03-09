function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper or Scissors:").trim().toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];
    
    while (!validChoices.includes(choice)){
        choice = prompt("Invalid choice. Please enter Rock, Paper or Scissors:").trim().toLowerCase();
    }
    
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;

    for (let i = 0; i < rounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const winner = playRound(humanChoice, computerChoice);
        
        console.log(`Round ${i +1}: You chose ${humanChoice}, Computer chose ${computerChoice}`);

        if (winner === "human") {
            humanScore++;
            console.log("You win this round!");
        } else if (winner === "computer") {
            computerScore++;
            console.log("Computer wins this round!");
        } else {
            console.log("It's a tie!");
        }
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        console.log("----------------------------");
    }
    if (humanScore > computerScore) {
        console.log("Congrats! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the games!");
    } else {
        console.log("It's a tie!");
    }
}
playGame();


