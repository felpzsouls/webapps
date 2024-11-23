document.addEventListener("DOMContentLoaded", () => {
    const secretPhrase = "quer namorar comigo";
    const displayElement = document.getElementById("wordDisplay");
    const messageOutput = document.getElementById("messageOutput");
    const hiddenInput = document.getElementById("hiddenInput");

    // Exibir tracinhos no início (sem tracinhos para espaços)
    const displayArray = secretPhrase.split('').map(char => (char === ' ' ? ' ' : '_'));
    displayElement.innerHTML = displayArray.map(char => {
        if (char === ' ') {
            return '<span class="space"> </span>';
        } else {
            return `<span>${char}</span>`;
        }
    }).join('');

    // Focar no campo de texto oculto para ativar o teclado virtual
    hiddenInput.focus();

    function processInput(keyPressed) {
        // Verificar se a letra pressionada está na frase secreta e se ainda não foi encontrada
        let updated = false;
        for (let i = 0; i < secretPhrase.length; i++) {
            if (secretPhrase[i] === keyPressed && displayArray[i] === '_') {
                displayArray[i] = keyPressed.toUpperCase();
                updated = true;
                break; // Parar depois de atualizar a primeira ocorrência
            }
        }

        // Atualizar a exibição
        displayElement.innerHTML = displayArray.map(char => {
            if (char === ' ') {
                return '<span class="space"> </span>';
            } else {
                return `<span>${char}</span>`;
            }
        }).join('');

        // Verificar se a frase está completa e adicionar o ponto de interrogação
        if (updated && displayArray.join('') === secretPhrase.split('').map(char => (char === ' ' ? ' ' : char.toUpperCase())).join('')) {
            displayElement.innerHTML += '<span>?</span>';
            messageOutput.innerText = "Parabéns! Você adivinhou a frase!";
        }
    }

    hiddenInput.addEventListener("input", (event) => {
        const keyPressed = event.data.toLowerCase();
        processInput(keyPressed);

        // Limpar o campo de texto oculto após cada input
        hiddenInput.value = '';
    });

    document.addEventListener("keydown", (event) => {
        const keyPressed = event.key.toLowerCase();
        processInput(keyPressed);
    });
});
