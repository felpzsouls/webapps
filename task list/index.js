function task() {
    const list = document.querySelector('ul'),
        input = document.getElementById('task')

        if(input.value.trim() !== '') {
            const listItem = document.createElement('li'),
                checkbox = document.createElement('input');

            checkbox.type = 'checkbox';

            listItem.classList.add('task-item')
            listItem.appendChild(checkbox);
            listItem.appendChild(document.createTextNode(input.value))

            list.appendChild(listItem)

            input.value = ''
        }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.inputs');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado

        task(); // Chama a função task() quando o formulário é enviado
    });
});

document.addEventListener('keydown', (k) => {
    if(k.key === 'Enter') {
        task()
    }
})