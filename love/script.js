function nao() {
    let btn = document.getElementById(`nao`),
        randomNumber1 = Math.floor(Math.random() * 100),
        randomNumber2 = Math.floor(Math.random() * 100),
        windowWidth = window.innerWidth,
        windowHeight = window.innerHeight,
        maxLeft = windowWidth - btn.offsetWidth,
        maxTop = windowHeight - btn.offsetHeight;

    randomNumber1 = Math.min(randomNumber1, maxTop);
    randomNumber2 = Math.min(randomNumber2, maxLeft);

    btn.style.position += `absolute`
    btn.style.top = randomNumber1 + '%'
    btn.style.left = randomNumber2 + '%'
}

function sim() {
    let img = document.getElementById(`img`),
    button = document.querySelector(`.choose`),
    text = document.querySelector(`h1`);

    text.innerText = `Eu te amo tanto!!!`
    button.style.display = `none`
    img.src = `./img.gif`
}