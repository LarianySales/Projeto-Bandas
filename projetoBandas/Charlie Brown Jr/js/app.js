const curtir = document.querySelectorAll('.curtir')
const tocar = document.querySelectorAll('.tocar')
let tocando = false
curtir.forEach(curtida => {
    curtida.addEventListener('click', (e) => {
        let style = e.currentTarget.classList
        if(style.contains('curtido')){
            curtida.classList = 'curtir'
            curtida.setAttribute('src', 'img/coracao.svg')
        } else{
            curtida.classList = 'curtir curtido'
            curtida.setAttribute('src', 'img/coracaoVermelho.svg')
        }
    })
})
tocar.forEach(musica => {
    musica.addEventListener('click', (e) => {
        let classes = e.currentTarget.classList
        let id = musica.id
        let audio = document.querySelector(`.${id}`)
        if(classes.contains('tocando')){
            musica.classList = 'tocar'
            musica.setAttribute('src', 'img/play.svg')
            audio.pause()
            tocando = false
        } else if(!tocando){
            musica.classList = 'tocar tocando'
            musica.setAttribute('src', 'img/stop.svg')
            audio.play()
            tocando = true
        }
    })
})