### 3주차 세미나 [ Javascript 심화 ]

해당 파일 삭제 후 과제 진행

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Pretendard", sans-serif;
      }

      body {
        background-color: #0a0b10;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
      }

      header {
        text-align: center;
        padding: 50px, 0px;
      }

      h1 {
        color: #00d2ff;
        text-shadow:
          0 0 10px #00d2ff,
          0 0 20px #00d2ff;
        letter-spacing: 4px;
        margin-bottom: 20px;
      }

      .score-display {
        font-size: 3rem;
        font-weight: bold;
        border: 2px solid #00d2ff;
        padding: 10px 30px;
        border-radius: 15px;
        box-shadow: 0 0 15px rgba(0, 210, 255, 0.5);
      }

      main {
        text-align: center;
        flex: 1;
      }

      #result {
        font-size: 1.4rem;
        color: #ff007f;
        text-shadow: 0 0 8px #ff007f;
        margin-bottom: 30px;
      }

      .battle {
        display: flex;
        align-items: center;
        gap: 30px;
      }

      #user-emoji,
      #computer-emoji {
        width: 120px;
        height: 120px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        font-size: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .control {
        display: flex;
        gap: 15px;
        margin-bottom: 30px;
      }

      .choice {
        background: transparent;
        color: #00d2ff;
        border: 2px solid #00d2ff;
        padding: 10px 25px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        justify-content: center;
      }

      footer {
        flex-direction: column;
        align-items: center;
      }

      .player {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      }

      .resetbtn {
        margin: 0;
        padding: 0;
      }

      .reset {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    </style>
  </head>

  <body>
    <header>
      <h1>가위바위보 삼세판</h1>
      <div class="score-display">
        <span id="user-score">0</span> : <span id="computer-score">0</span>
      </div>
    </header>

    <main>
      <div id="result">게임을 시작하세요</div>
      <div class="battle">
        <div class="player">
          <span class="label">인간</span>
          <div id="user-emoji">
            <img id="user-img" src="" alt="" style="width:100%; height:100%; object-fit:contain; display:none;">
          </div>
        </div>

        <div class="player">
          <span class="label">컴퓨터</span>
          <div id="computer-emoji">
            <img id="computer-img" src="" alt="" style="width:100%; height:100%; object-fit:contain; display:none;">
          </div>
        </div>
      </div>
    </main>

    <footer>
      <div class="control">
        <button class="choice" onclick="play('scissors')">가위</button>
        <button class="choice" onclick="play('rock')">바위</button>
        <button class="choice" onclick="play('paper')">보</button>
      </div>

      <div class="reset">
        <button class="choice" onclick="resetGame()">초기화</button>
      </div>
    </footer>

    <script>
        const images = {
            scissors : "가위이모지.jpg",
            rock : "바위이모지.jpg",
            paper : "보이모지2.jpg"
        }

        const choices = ["scissors", "rock", "paper"];

        let userScore = 0;
        let computerScore = 0;

        function play(userChoice){
            const randomIndex = Math.floor(Math.random() * 3);
            const computerChoice = choices[randomIndex];

            document.getElementById("user-img").src = images[userChoice];
            document.getElementById("user-img").style.display = "block";
            document.getElementById("computer-img").src = images[computerChoice];
            document.getElementById("computer-img").style.display = "block";

            const result = getResult(userChoice, computerChoice);

            if (result === "win") {
                userScore++;
            } else if (result === "lose") {
                computerScore++;
            }
            document.getElementById("user-score").textContent = userScore;
            document.getElementById("computer-score").textContent = computerScore;

            const resultEl = document.getElementById("result");
            if (result === "win")       resultEl.textContent ="승리!!!";
            else if (result === "lose") resultEl.textContent ="패배;;;"
            else                        resultEl.textContent ="무승부!!!"
        }

        function getResult(user, computer) {
    if (user === computer) return "draw";
    if (
      (user === "scissors" && computer === "paper") ||
      (user === "rock"     && computer === "scissors") ||
      (user === "paper"    && computer === "rock")
    ) {
      return "win";
    }
    return "lose";
  }

  function resetGame() {
    userScore = 0;
    computerScore = 0;

    document.getElementById("user-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;
    document.getElementById("result").textContent = "게임을 시작하세요";

    
    document.getElementById("user-img").style.display = "none";
    document.getElementById("computer-img").style.display = "none";
  }
</script>

    </script>
  </body>
</html>

