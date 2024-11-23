const pokemons = [
    { 
        nome: "MEOWTH", 
        silhueta: "dynamic/pokemon/meowth.png", 
        revelado: "dynamic/pokemon/meowth1.png",
        tipos: ["Normal"],
        cores: ["Bege", "Marrom"],
        evolucao: "Persian"
    },
    { 
        nome: "IVYSAUR", 
        silhueta: "dynamic/pokemon/ivysaur.png", 
        revelado: "dynamic/pokemon/ivysaur1.png",
        tipos: ["Grama", "Venenoso"],
        cores: ["Verde", "Rosa"],
        evolucao: "Venusaur"
    },
    { 
        nome: "GEODUDE", 
        silhueta: "dynamic/pokemon/geodude.png", 
        revelado: "dynamic/pokemon/geodude1.png",
        tipos: ["Pedra", "Terra"],
        cores: ["Cinza", "Marrom"],
        evolucao: "Graveler"
    },
    { 
        nome: "ODDISH", 
        silhueta: "dynamic/pokemon/oddish.png", 
        revelado: "dynamic/pokemon/oddish1.png",
        tipos: ["Grama", "Venenoso"],
        cores: ["Verde", "Azul"],
        evolucao: "Gloom"
    }
];


let pokemonIndex = 0;
let erros = 0;

function verificarPokemon() {
    const resposta = document.getElementById("resposta").value.toUpperCase().trim();
    const mensagem = document.getElementById("mensagem");

    if (resposta === pokemons[pokemonIndex].nome) {
        mensagem.innerText = "Acertou!";
        mensagem.style.color = "green";
        revelarPokemon();
    } else {
        erros++;
        mensagem.innerText = "Tente novamente!";
        mensagem.style.color = "red";
        verificarDicas(); // Chama a função para exibir as dicas
    }

    document.getElementById("resposta").value = '';
}

function verificarDicas() {
    const mensagem = document.getElementById("mensagem");
    const dicas = document.getElementById("dicas");

    if (erros === 3) {
        dicas.innerText = `Dica: Tipos do Pokémon: ${pokemons[pokemonIndex].tipos.join(", ")}`;
    } else if (erros === 5) {
        dicas.innerText = `Dica: Cores do Pokémon: ${pokemons[pokemonIndex].cores.join(", ")}`;
    } else if (erros === 7) {
        dicas.innerText = `Dica: Próxima evolução: ${pokemons[pokemonIndex].evolucao}`;
    }
}

function revelarPokemon() {
    const img = document.getElementById("pokemon-img");
    const mensagem = document.getElementById("mensagem");
    const dicas = document.getElementById("dicas");

    // Mostra a imagem revelada do Pokémon
    img.src = pokemons[pokemonIndex].revelado;
    mensagem.innerText = "É o " + pokemons[pokemonIndex].nome + "!";
    dicas.innerText = ""; // Limpa as dicas
    erros = 0; // Reseta os erros para o próximo Pokémon

    setTimeout(() => {
        pokemonIndex++;
        if (pokemonIndex < pokemons.length) {
            mostrarProximoPokemon();
        } else {
            encerrarFase();
        }
    }, 2000); // Mostra o Pokémon revelado por 2 segundos antes de passar ao próximo
}

function mostrarProximoPokemon() {
    const img = document.getElementById("pokemon-img");
    const mensagem = document.getElementById("mensagem");
    const dicas = document.getElementById("dicas");
    mensagem.innerText = '';
    dicas.innerText = '';
    img.src = pokemons[pokemonIndex].silhueta;
}

function encerrarFase() {
    window.location.href = "finalMessage.html"; // Redireciona para a próxima página
}
