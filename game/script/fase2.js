const words = ["nobre", "amigo", "massa"]; // Palavras a serem adivinhadas
let currentWordIndex = 0;
let currentAttempt = 0;
const maxAttempts = 6;

const wordleBoard = document.getElementById('wordleBoard');
const wordInput = document.getElementById('wordInput');
const submitWord = document.getElementById('submitWord');
const message = document.getElementById('message');

submitWord.addEventListener('click', handleWordSubmit);

function initializeBoard() {
    wordleBoard.innerHTML = '';
    for (let i = 0; i < maxAttempts; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('div');
            cell.classList.add('letter');
            row.appendChild(cell);
        }
        wordleBoard.appendChild(row);
    }
    wordInput.value = '';
    message.innerText = '';
}

function handleWordSubmit() {
    const guessedWord = wordInput.value.toLowerCase();
    if (guessedWord.length !== 5) {
        message.innerText = 'A palavra deve ter 5 letras.';
        return;
    }

    const currentWord = words[currentWordIndex];
    const row = wordleBoard.children[currentAttempt];

    for (let i = 0; i < 5; i++) {
        const cell = row.children[i];
        cell.innerText = guessedWord[i];

        if (guessedWord[i] === currentWord[i]) {
            cell.classList.add('correct');
        } else if (currentWord.includes(guessedWord[i])) {
            cell.classList.add('present');
        } else {
            cell.classList.add('absent');
        }
    }

    if (guessedWord === currentWord) {
        message.innerText = 'Você acertou! Próxima palavra...';
        currentWordIndex++;
        if (currentWordIndex < words.length) {
            currentAttempt = 0;
            setTimeout(initializeBoard, 1000);
        } else {
            message.innerText = 'Parabéns! Você completou todas as palavras!';
            setTimeout(() => {
                window.location.href = "fase3.html"; // Redireciona para a próxima fase
            }, 2000);
        }
    } else {
        currentAttempt++;
        if (currentAttempt >= maxAttempts) {
            message.innerText = 'Você não acertou. Voltando ao início...';
            setTimeout(() => {
                currentWordIndex = 0;
                currentAttempt = 0;
                initializeBoard();
            }, 2000);
        }
    }

    wordInput.value = '';
}

initializeBoard();
