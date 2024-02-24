// ELEMENTOS QUE IRÃO MUDAR

let header = document.querySelector("header")
let form = document.querySelector("form")
let btnForm = document.querySelector("#enviarForm")

// Botões do HEADER

const blueMode = document.querySelector("#blueMode")
const greenMode = document.querySelector("#greenMode")
const pinkMode = document.querySelector("#pinkMode")

const btnSurprise = document.querySelector("#surprise")
const sectionMeme = document.querySelector("#memesProg")



// MODO AZUL

blueMode.addEventListener('click', modoAzul)

function modoAzul() {
    header.style.background = "#00B4D8"
    form.style.background = "#ADE8F4"
    btnForm.style.background = "#00B4D8"
}



// MODO VERDE 

greenMode.addEventListener('click', modoVerde)

function modoVerde() {
    header.style.background = "#9CC69B"
    form.style.background = "#D7F2BA"
    btnForm.style.background = "#2A7221"
}



// MODO ROSA 

pinkMode.addEventListener('click', modoRosa)

function modoRosa() {
    header.style.background = "#FF8FA3"
    form.style.background = "#FFCCD5"
    btnForm.style.background = "#FF8FA3"
}


// SURPRISE 

btnSurprise.addEventListener('click', function () {
    sectionMeme.style.display = "flex"
})


/* Seta Proximo Meme */

function passarProx() {
    const imgMemes = document.querySelector("#memesImg")
    let img = ["assets/memes/meme2.jpg", "assets/memes/meme3.jpeg", "assets/memes/meme4.jpg", "assets/memes/meme5.jpg", "assets/memes/meme1.png"]


    imgMemes.src = img[Math.floor(Math.random() * img.length)]

}
