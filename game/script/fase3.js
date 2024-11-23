const palavras = ["ORIGINAL", "RITMO", "AMOR", "RAPOSA", "CULTURA", "OURO"];
let palavraAtual = palavras[0];
let tentativas = 6;
let letrasCorretas = [];
let letrasErradas = [];
let palavraIndex = 0;

document.getElementById("tentativas").innerText = `Tentativas: ${tentativas}`;
mostrarPalavra();

function mostrarPalavra() {
    let palavraDisplay = '';
    for (let i = 0; i < palavraAtual.length; i++) {
        if (letrasCorretas.includes(palavraAtual[i])) {
            palavraDisplay += palavraAtual[i] + ' ';
        } else {
            palavraDisplay += '_ ';
        }
    }
    document.getElementById("palavra-display").innerText = palavraDisplay.trim();
}

function adivinharLetra() {
    const letra = document.getElementById("letra").value.toUpperCase();
    if (letra && !letrasCorretas.includes(letra) && !letrasErradas.includes(letra)) {
        if (palavraAtual.includes(letra)) {
            letrasCorretas.push(letra);
            atualizarLetrasUsadas(letra, true);
            mostrarPalavra();
            verificarVitoria();
        } else {
            letrasErradas.push(letra);
            tentativas--;
            document.getElementById("tentativas").innerText = `Tentativas: ${tentativas}`;
            atualizarLetrasUsadas(letra, false);
            verificarDerrota();
        }
    }
    document.getElementById("letra").value = '';
}

function atualizarLetrasUsadas(letra, correta) {
    const letrasUsadas = document.getElementById("letras-usadas");
    const span = document.createElement("span");
    span.textContent = letra + " ";
    span.classList.add(correta ? "certa" : "errada");
    letrasUsadas.appendChild(span);
}

function verificarVitoria() {
    if (letrasCorretas.length === new Set(palavraAtual).size) {
        if (palavraIndex === palavras.length - 1) {
            // Última palavra
            document.getElementById("mensagem").innerText = "Parabéns! Você concluiu esta fase!";
            document.getElementById("proxima-palavra").innerText = "Próximo Nível"; // Alterar texto do botão
        } else {
            document.getElementById("mensagem").innerText = "Parabéns! Você acertou a palavra!";
            document.getElementById("proxima-palavra").innerText = "Próxima Palavra"; // Manter texto padrão
        }
        document.getElementById("proxima-palavra").style.display = "inline-block";
    }
}


function verificarDerrota() {
    if (tentativas === 0) {
        document.getElementById("mensagem").innerText = "Você perdeu! O jogo vai reiniciar.";
        setTimeout(reiniciarJogo, 2000);
    }
}

function proximaPalavra() {
    palavraIndex++;
    if (palavraIndex < palavras.length) {
        palavraAtual = palavras[palavraIndex];
        tentativas = 6;
        letrasCorretas = [];
        letrasErradas = [];
        document.getElementById("tentativas").innerText = `Tentativas: ${tentativas}`;
        document.getElementById("mensagem").innerText = '';
        document.getElementById("letras-usadas").innerHTML = "Letras usadas: ";
        mostrarPalavra();
        document.getElementById("proxima-palavra").style.display = "none";
    } else {
        window.location.href = "fase4.html";
    }
}

function reiniciarJogo() {
    palavraIndex = 0;
    palavraAtual = palavras[0];
    tentativas = 6;
    letrasCorretas = [];
    letrasErradas = [];
    document.getElementById("tentativas").innerText = `Tentativas: ${tentativas}`;
    document.getElementById("mensagem").innerText = '';
    document.getElementById("letras-usadas").innerHTML = "Letras usadas: ";
    mostrarPalavra();
    document.getElementById("proxima-palavra").style.display = "none";
}