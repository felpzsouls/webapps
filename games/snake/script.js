let playBoard = document.querySelector(`.play-board`),
    scoreElement = document.querySelector(`.score`),
    highScoreElement = document.querySelector(`.highscore`),
    controls = document.querySelectorAll(`.controls i`),
    foodX,
    foodY,
    snakeX = 5,
    snakeY = 10,
    velocityX = 0,
    velocityY = 0,
    snakeBody = [],
    gameOver = false,
    setIntervalId,
    score = 0,
    highScore = localStorage.getItem("high-score") || 0;
    
function changeFoodPosition() {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

function handleGameOver() {
    clearInterval(setIntervalId);
    alert("Fim de jogo, aperte 'OK' para jogar novamente...");
    location.reload();
}

function changeDirection(e) {
    if (e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
    initGame();
}

controls.forEach(key => {
    key.addEventListener(`click`, () => changeDirection({key: key.dataset.key}))
})

function initGame() {
    if (gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    highScoreElement.innerText =`High Score: ${highScore}`;

    if (snakeY === foodY && snakeX === foodX) {
        changeFoodPosition();
        snakeBody.push([foodX, foodY]);
        score++;

        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText =`Score: ${score}`;
        highScoreElement.innerText =`High Score: ${highScore}`;
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY];

    snakeX += velocityX;
    snakeY += velocityY;

    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }

    playBoard.innerHTML = htmlMarkup;
};


changeFoodPosition();
setIntervalId = setInterval(initGame, 125);
document.addEventListener(`keydown`, changeDirection);