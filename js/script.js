let largura = 0
let altura = 0
let vidas = 1
let tempo = 10

let criaMosquitoTempo = 1500

let nivel = window.location.search

nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000
} else if(nivel === 'veryhardcore'){
    criaMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo() {
    largura = window.innerWidth - 100
    altura = window.innerHeight - 100

    //console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function () {

    tempo--

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(apareceMosquito)
        window.location.href = 'vitoria.html'

    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)


function criaMosquitao() {
    //remover o mosquito anterior (caso exista)
    let idMosquito = document.getElementById('mosquito')
    if (idMosquito) {
        idMosquito.remove() //remover o elemento selecionado.
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = '/img/coracao_vazio.png'

            vidas++
        }
    }

    let posicaoX = Math.floor(Math.random() * largura)
    let posicaoY = Math.floor(Math.random() * altura)

    //console.log(posicaoX, posicaoY)

    //criar o elemento html
    let mosquito = document.createElement('img')
    mosquito.src = '/img/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }
    document.body.appendChild(mosquito)

    ladoAleatorio()
}

criaMosquitao()



function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:

            return 'mosquito3'
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}


