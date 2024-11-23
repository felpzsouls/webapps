const answers = ["queen", "uclã", "eminem", "racionais mcs"]; // Substitua pelos nomes corretos
let currentMusic = 1;

function playMusic(number) {
    const audio = document.getElementById(`audio-${number}`);
    audio.play();
}

function stopMusic(number) {
    const audio = document.getElementById(`audio-${number}`);
    audio.pause();
    audio.currentTime = 0; // Reseta a música para o início
}

function checkAnswer(number) {
    const input = document.getElementById(`answer-${number}`).value.toLowerCase();
    const feedback = document.getElementById(`feedback-${number}`);

    if (input === answers[number - 1]) {
        feedback.textContent = "Correto! Próxima música!";
        feedback.style.color = "green";
        stopMusic(number);

        if (number < 4) {
            document.getElementById(`music-${number}`).classList.add("hidden");
            document.getElementById(`music-${number + 1}`).classList.remove("hidden");
        } else {
            feedback.textContent = "Parabéns! Você completou a fase.";
            setTimeout(() => {
                window.location.href = "fase2.html"; // Redireciona para a próxima fase
            }, 2000);
        }
    } else {
        feedback.textContent = "Errado! Tente novamente.";
        feedback.style.color = "red";
    }
}
