let board,
    boardWidth = 750,
    boardHeight = 250,
    context;

let dinoWidth = 88,
    dinoHeight = 94,
    dinoX = 50,
    dinoY = boardHeight - dinoHeight,
    dinoImg,
    dinoRun1Img,
    dinoRun2Img,
    dinoCurrentImgIndex = 0,
    dinoSprites = [],
    dino = {
        x: dinoX,
        y: dinoY,
        width: dinoWidth,
        height: dinoHeight
    };

let cactusArray = [],
    cactus1Width = 34,
    cactus2Width = 69,
    cactus3Width = 102,
    cactusHeight = 70,
    cactusX = 700,
    cactusY = boardHeight - cactusHeight,
    cactus1Img,
    cactus2Img,
    cactus3Img;

let velocityX = -8,
    velocityY = 0,
    gravity = 0.4,
    gameOver = false,
    score = 0,
    isJumping = false,
    jumpVelocity = -10;

    let currentCactusInterval = 1000; // Intervalo inicial de aparecimento dos cactos
    const initialCactusInterval = 1000; // Intervalo inicial de aparecimento dos cactos
    const cactusIntervalDecreaseRate = 5; // Taxa de diminuição do intervalo (em milissegundos por segundo)

let animationFrameCount = 0;

window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d");

    dinoImg = new Image();
    dinoImg.src = './img/dino.png';
    dinoImg.onload = function () {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height)
    }

    cactus1Img = new Image();
    cactus1Img.src = './img/cactus1.png';

    cactus2Img = new Image();
    cactus2Img.src = './img/cactus2.png';

    cactus3Img = new Image();
    cactus3Img.src = './img/cactus3.png';

    dinoRun1Img = new Image();
    dinoRun1Img.src = './img/dino-run1.png';

    dinoRun2Img = new Image();
    dinoRun2Img.src = './img/dino-run2.png';

    dinoSprites = [dinoRun1Img, dinoRun2Img];

    requestAnimationFrame(update);
    document.addEventListener("keydown", moveDino)
    document.addEventListener("keyup", moveDino2)
}

function update(timeElapsedInSeconds) {
    requestAnimationFrame(update);
    if (gameOver) return;

    context.clearRect(0, 0, boardWidth, boardHeight)

    velocityY += gravity;
    dino.y = Math.min(dino.y + velocityY, dinoY);

    context.drawImage(dinoSprites[dinoCurrentImgIndex], dino.x, dino.y, dino.width, dino.height);
    animationFrameCount++;

    if (animationFrameCount % 10 === 0) {
        dinoCurrentImgIndex = (dinoCurrentImgIndex + 1) % dinoSprites.length;
    }

    for (let i = 0; i < cactusArray.length; i++) {
        let cactus = cactusArray[i];
        cactus.x += velocityX
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);

        if (detectCollision(dino, cactus)) {
            gameOver = true;
            dinoImg.src = "./img/dino-dead.png";
            dinoImg.onload = function () {
                context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height)
            }
        }
    }

    context.fillStyle = "black";
    context.font = "20px courier"
    score++;
    context.fillText(score, 5, 20)

    // Atualizar a velocidade dos cactos a cada segundo
    if (animationFrameCount % 60 === 0) {
        currentCactusInterval -= cactusIntervalDecreaseRate;
    }

    // Colocar cactos com o intervalo atualizado
    if (animationFrameCount % currentCactusInterval === 0) {
        placeCactus();
    }
}

function moveDino2(e) {
    if ((e.code == "Space" || e.code == "ArrowUp") && isJumping && velocityY < 0) {
        // Diminui a velocidade de subida quando a tecla é solta
        velocityY *= 0.5;
    }
}

function moveDino(e) {
    if ((e.code == "Space" || e.code == "ArrowUp") && gameOver) {
        dino.y = dinoY;
        cactusArray = [];
        score = 0;
        dinoImg.src = './img/dino.png'
        dinoImg.onload = function () {
            context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height)
        }
        gameOver = false
    } else if ((e.code == "Space" || e.code == "ArrowUp") && dino.y == dinoY) {
        isJumping = true;
        velocityY = -10
    } else if ((e.code == "Space" || e.code == "ArrowUp") && velocityY < 0 && isJumping) {
        velocityY *= 0.5;
    }
}

function placeCactus() {
    let cactus = {
        img: null,
        x: cactusX,
        y: cactusY,
        width: null,
        height: cactusHeight
    },
        placeCactusChance = Math.random();

    if (placeCactusChance > 0.9) {
        cactus.img = cactus3Img;
        cactus.width = cactus3Width;
        cactusArray.push(cactus)
    } else if (placeCactusChance > 0.7) {
        cactus.img = cactus3Img;
        cactus.width = cactus3Width;
        cactusArray.push(cactus)
    } else if (placeCactusChance > 0.5) {
        cactus.img = cactus1Img;
        cactus.width = cactus1Width;
        cactusArray.push(cactus)
    }

    if (cactusArray.length > 5) {
        cactusArray.shift();
    }

    currentCactusInterval = Math.max(initialCactusInterval - score * cactusIntervalDecreaseRate, 200);
}

function detectCollision(a, b) {
    const dinoCenterX = a.x + a.width / 2;
    const dinoCenterY = a.y + a.height / 2;
    const dinoRadius = Math.min(a.width, a.height) / 2;

    // Calcular as coordenadas do centro e o raio do círculo envolvendo o cacto
    const cactusCenterX = b.x + b.width / 2;
    const cactusCenterY = b.y + b.height / 2;
    const cactusRadius = Math.min(b.width, b.height) / 2;

    // Calcular a distância entre os centros dos dois círculos
    const distanceX = dinoCenterX - cactusCenterX;
    const distanceY = dinoCenterY - cactusCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Se a distância entre os centros for menor que a soma dos raios, houve uma colisão
    return distance < dinoRadius + cactusRadius;
}

let lastUpdateTime = performance.now();
gameLoop();

// Iniciar o loop do jogo
function gameLoop() {
    let currentTime = performance.now();
    update((currentTime - lastUpdateTime) / 1000);
    lastUpdateTime = currentTime;

    requestAnimationFrame(gameLoop);
}
