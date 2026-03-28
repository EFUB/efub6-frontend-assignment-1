// 1. 스코어 변수 선언 및 초기화
let userScore = 0;
let computerScore = 0;

// 2. DOM 요소 선택
const userImg = document.getElementById('userImg');
const computerImg = document.getElementById('computerImg');
const resultMsg = document.getElementById('result');
const scoreBoard = document.getElementById('score');
const resetBtn = document.getElementById('resetBtn');

// 3. 0.6초 대기 (비동기)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms)); //단순 기다리기(넘겨줄 데이터 없음)

// 4. 선택에 따른 이미지 매칭
const getImgFile = (choice) => {
    const files = {
        '가위': '가위.png',
        '바위': '바위.jpg',
        '보': '보.png'
    };
    return files[choice];
};

// 5. 컴퓨터의 랜덤 선택
const getComputerChoice = async () => {
    resultMsg.innerText = "컴퓨터가 내는 중...";
    await delay(200); 
    
    const choices = ['가위', '바위', '보'];
    return choices[Math.floor(Math.random() * 3)];
};

// 6. 승패 판정
const judge = (user, computer) => {
    if (user === computer) return '무승부';
    if (
        (user === '가위' && computer === '보') ||
        (user === '바위' && computer === '가위') ||
        (user === '보' && computer === '바위')
    ) {
        userScore++;
        return '인간 승';
    }
    computerScore++;
    return '컴퓨터 승';
};

// 7. 게임 실행 메인 로직
const play = async (userChoice) => {
    // 유저 이미지 즉시 업데이트
    userImg.src = getImgFile(userChoice);
    
    // 컴퓨터의 선택 (비동기 대기)
    const computerChoice = await getComputerChoice();
    computerImg.src = getImgFile(computerChoice);
    
    // 결과 출력
    const result = judge(userChoice, computerChoice);
    resultMsg.innerText = result === '무승부' ? "비겼습니다!" : `${result}!`;
    
    // 점수판 업데이트
    scoreBoard.innerText = `${userScore} : ${computerScore}`;
};

// 8. 초기화 버튼 클릭 시
resetBtn.onclick = () => {
    userScore = 0;
    computerScore = 0;
    userImg.src = '바위.jpg';
    computerImg.src = '바위.jpg';
    resultMsg.innerText = "가위, 바위, 보 중 하나를 선택하세요!";
    scoreBoard.innerText = "0 : 0";
};