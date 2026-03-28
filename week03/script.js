let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  let choices = ['가위', '바위', '보'];
  let randomIndex = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomIndex];

  let resultText = '';

  if (userChoice === computerChoice) {
    resultText = '무!';
  } else if (
    (userChoice === '가위' && computerChoice === '보') ||
    (userChoice === '바위' && computerChoice === '가위') ||
    (userChoice === '보' && computerChoice === '바위')
  ) {
    resultText = '승!';
    userScore = userScore + 1;
  } else {
    resultText = '패!';
    computerScore = computerScore + 1;
  }

  document.getElementById('user-image').src = getImage(userChoice);
  document.getElementById('computer-image').src = getImage(computerChoice);

  document.getElementById('score').innerText = userScore + ' : ' + computerScore;
  document.getElementById('result-text').innerText = resultText;
}

function getImage(choice) {
  if (choice === '가위') {
    return 'images/scissors.png';
  } else if (choice === '바위') {
    return 'images/rock.png';
  } else {
    return 'images/paper.png';
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;

  document.getElementById('score').innerText = '0 : 0';
  document.getElementById('result-text').innerText = '승!';

  document.getElementById('user-image').src = 'images/scissors.png';
  document.getElementById('computer-image').src = 'images/rock.png';
}