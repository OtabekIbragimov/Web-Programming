const hex = '0123456789ABCDEF'
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (event.code.toLowerCase() === 'space') {
        clickMe()
    }
})

function clickMe() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}