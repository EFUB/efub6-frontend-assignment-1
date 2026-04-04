const comment = document.getElementById("comment");
const humanScore = document.getElementById("human-score");
const comScore = document.getElementById("com-score");
const humanPlay = document.getElementById("human-play");
const comPlay = document.getElementById("com-play");
const scissorBtn = document.getElementById("scissor");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const resetBtn = document.getElementById("reset");

function getResult(human, com) {
  const currentHumanScore = parseInt(humanScore.innerText);
  const currentComScore = parseInt(comScore.innerText);
  if (human == com) comment.innerText = "무승부";
  else if (
    (human == 0 && com == 2) ||
    (human == 1 && com == 0) ||
    (human == 2 && com == 1)
  ) {
    comment.innerText = "승리!";
    humanScore.innerText = currentHumanScore + 1;
  } else {
    comment.innerText = "패배";
    comScore.innerText = currentComScore + 1;
  }
}

scissorBtn.onclick = () => {
  const humanNum = 0;
  humanPlay.innerText = "✌️";

  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) comPlay.innerText = "✌️";
  else if (randomNum == 1) comPlay.innerText = "✊";
  else comPlay.innerText = "🖐️";

  getResult(humanNum, randomNum);
};

rockBtn.onclick = () => {
  const humanNum = 1;
  humanPlay.innerText = "✊";

  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) comPlay.innerText = "✌️";
  else if (randomNum == 1) comPlay.innerText = "✊";
  else comPlay.innerText = "🖐️";

  getResult(humanNum, randomNum);
};

paperBtn.onclick = () => {
  const humanNum = 2;
  humanPlay.innerText = "🖐️";

  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) comPlay.innerText = "✌️";
  else if (randomNum == 1) comPlay.innerText = "✊";
  else comPlay.innerText = "🖐️";

  getResult(humanNum, randomNum);
};

resetBtn.onclick = () => {
  humanScore.innerText = 0;
  comScore.innerText = 0;
  comment.innerText = "버튼을 눌러 게임을 시작해 주세요.";
  humanPlay.innerText = " ";
  comPlay.innerText = " ";
};
