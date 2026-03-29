let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    const choices = ['가위', '바위', '보'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = "";
    if (userChoice === computerChoice) {
        result = "무승부";
    } else if (
        (userChoice === "가위" && computerChoice === "보") ||
        (userChoice === "바위" && computerChoice === "가위") ||
        (userChoice === "보" && computerChoice === "바위")
    ) {
        result = "승리!!";
        userScore++;
    } else {
        result = "패배";
        computerScore++;
    }

    document.getElementById("match-up").innerText = `${userChoice} vs ${computerChoice}`;
    document.getElementById("verdict").innerText = result;
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("computer-score").innerText = computerScore;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("computer-score").innerText = computerScore;
    document.getElementById("match-up").innerText = "준비!";
    document.getElementById("verdict").innerText = "게임 시작";
}