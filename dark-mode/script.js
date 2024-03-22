document.addEventListener("DOMContentLoaded", function () {

    const btn = document.querySelector('.btn'),
        body = document.body,
        img = document.getElementById('img'),
        button = document.querySelector('.img');

    btn.addEventListener('click', () => {
        body.classList.toggle('dark');

        if (body.classList.contains('dark')) {
            img.src = './img/acesa.png';
            button.src = './img/on.png';
        } else {
            img.src = './img/apagada.png';
            button.src = './img/off.png';
        }
    })
})