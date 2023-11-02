let ComputerScore = 0;
let HumanScore = 0;

function log(choice) {
    document.getElementById("winnerText").textContent = "";
    console.log("I choose " + choice);

    const options = ["Scissors", "Rock", "Paper"];
    const computerChoice = options[Math.floor(Math.random() * 3)];

    console.log("Computer choose " + computerChoice);

    let result = roundWinner(choice, computerChoice);
    console.log(result);

    updateScore(result);

    determineWinner(result);

    document.getElementById("score").textContent = `${HumanScore}:${ComputerScore}`;

    addToMatchHistory(result);
    
}

function roundWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw!";
    } else if (
        (playerChoice === "Scissors" && computerChoice === "Paper") ||
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
        return "Player won!";
    } else {
        return "Computer won!";
    }
}

function updateScore(result) {
    if (result === "Player won!") {
        HumanScore++;
        console.log("Human won!");
    } else if (result === "Computer won!") {
        ComputerScore++;
        console.log("Computer won!");
    }


    console.log("Human Score: " + HumanScore);
    console.log("Computer Score: " + ComputerScore);
}

function determineWinner(){
    if(HumanScore == 5){
        console.log("Player won the game!")
        ComputerScore = 0;
        HumanScore = 0;
        document.getElementById("winnerText").textContent = `Player won the game!`;
        document.getElementById("matchHistory").textContent = "";
    } else if(ComputerScore == 5){
        console.log("Computer won the game!")
        ComputerScore = 0;
        HumanScore = 0;
        document.getElementById("winnerText").textContent = `Computer won the game!`;
        document.getElementById("matchHistory").textContent = "";
    }
}
function addToMatchHistory(result){
    const matchHistoryList = document.getElementById("matchHistory");
    const listItem = document.createElement("li")
    listItem.textContent = result;
    matchHistoryList.appendChild(listItem);

}