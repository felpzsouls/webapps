let keyboardDiv = document.querySelector('.keyboard'),
    wordDisplay = document.querySelector(`.word-display`),
    gameModal = document.querySelector(`.game-modal`),
    hangmanImage = document.querySelector(`.hangman-box img`),
    guessesText = document.querySelector(`.guesses-text b`),
    playAgainBtn = document.querySelector(`.play-again`),
    currentWord,
    wrongGuessCount,
    maxGuesses = 6,
    correctsLetter;

function resetGame() {
    correctsLetter = [];
    wrongGuessCount = 0;
    hangmanImage.src = `./images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
}

function getRandomWord() {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

function gameOver(isVictory) {
    setTimeout(() => {
        const modalText = isVictory ? `Voce venceu! ` : `A palavra correta era: `;
        gameModal.querySelector("img").src = `./images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'parabens' : 'voce perdeu'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }, 300);
}

function initGame(button, letterClicked) {
    if(currentWord.includes(letterClicked)) {
        [...currentWord].forEach((letter, index) => {
            if(letter === letterClicked) {
                correctsLetter.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    } else {
        wrongGuessCount++;
        hangmanImage.src = `./images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctsLetter.length === currentWord.length) return gameOver(true);
}

for(let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener(`click`, e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener(`click`, getRandomWord);