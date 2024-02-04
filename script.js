const imagenes = document.querySelectorAll('.imagen')

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        removeActiveClasses()
        imagen.classList.add('vista')
    })
})

function removeActiveClasses() {
    imagenes.forEach(imagen => {
        imagen.classList.remove('vista')
    })
}