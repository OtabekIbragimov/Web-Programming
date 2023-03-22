const button = document.querySelector('#button')
const content = document.querySelector('#content')

button.addEventListener('click', () => {
    if (content.classList.toggle('content-hidden')) {
        button.textContent = 'Show Block'
    } else {
        button.textContent = 'Hidden Block'
    }
})