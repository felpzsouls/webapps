function startCounter() {
    
    document.getElementById('intro').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('counter').style.display = 'block';
        updateCounter();
    }, 800);
}
function updateCounter() {
    const startDate = new Date('2024-01-01'); // Coloque a data real aqui
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('days').innerText = diffDays;
}

function atualizarContador() {
    const dataInicio = new Date("2025-02-08T03:00:00"); // Altere para a data real do relacionamento
    const agora = new Date();

    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();
    let horas = agora.getHours() - dataInicio.getHours();
    let minutos = agora.getMinutes() - dataInicio.getMinutes();
    let segundos = agora.getSeconds() - dataInicio.getSeconds();

    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        let ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoMes;
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    let resultado = "";
    if (anos > 0) resultado += `${anos} ano${anos > 1 ? 's' : ''} `;
    if (meses > 0) resultado += `${meses} m${meses > 1 ? 'eses' : 'ês'} `;
    if (dias > 0) resultado += `${dias} dia${dias > 1 ? 's' : ''} `;
    if (horas > 0) resultado += `${horas} hora${horas > 1 ? 's' : ''} `;
    if (minutos > 0) resultado += `${minutos} minuto${minutos > 1 ? 's' : ''} `;
    if (segundos >= 0) resultado += `${segundos} segundo${segundos > 1 ? 's' : ''} `;

    document.getElementById("contador").innerText = resultado.trim();
}


function showToast() {
    const toast = document.getElementById("toast");
    const progressBar = toast.querySelector(".progress-bar");

    // Remove todas as classes para resetar o estado inicial
    toast.classList.remove("show", "hide");
    void toast.offsetWidth; // Força o navegador a "recalcular" o elemento, garantindo o reset visual

    // Reinicia a barra de progresso para 100%
    progressBar.style.transition = "none"; // Remove a transição
    progressBar.style.width = "100%"; // Redefine a largura para o estado inicial

    // Força o navegador a aplicar o reset antes de ativar a animação
    setTimeout(() => {
        progressBar.style.transition = "width 3.5s linear"; // Reaplica a transição
        progressBar.style.width = "0%"; // Inicia a animação de redução da barra
    }, 10); // Atraso curto para o reset

    // Adiciona a animação de entrada (classe "show")
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    // Adiciona a animação de saída (classe "hide") após 3.5 segundos
    setTimeout(() => {
        toast.classList.add("hide");
    }, 3500);

    // Remove a classe "show" após 3.5 segundos + tempo da animação de saída (500ms)
    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
}

const musicas = [
      "1QD3t3zkwFUdEbMBTApeiZ", // Exemplo 1
      "4irM0ZydWatEXDDC7SflXS", // Exemplo 2
      "4SfD9mJ8qJtjpiZjZs37DA"  // Exemplo 3
    ];

    let index = 0;

    function proximaMusica() {
      index = (index + 1) % musicas.length;
      const player = document.getElementById('player');
      player.src = `https://open.spotify.com/embed/track/${musicas[index]}?utm_source=generator&theme=0`;
    }

setInterval(atualizarContador, 1000);
atualizarContador();