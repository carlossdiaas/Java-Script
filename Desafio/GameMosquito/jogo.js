var altura = 0
var largura = 0
var vidas = 1
var tempo = 5

function tamanhoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

tamanhoJogo()
var cronometro = setInterval(function(){
    tempo --
    if (tempo < 0){
        clearInterval(cronometro)
        document.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = `Tempo restante: ${tempo}`
    }
},1000)

function posicaoRandomica(){
    //REMOVER MOSQUITO CASO JÁ EXISTA
 if(document.getElementById('mosquito')  ){
    document.getElementById('mosquito').remove()
    if (vidas >= 3){
        window.location.href = 'fim_de_jogo.html'
    }else{
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        vidas++
    }
    

    
 }   
 document.getElementById('mosquito')   

 var posicaoY = Math.floor(Math.random() *altura) -100
 var posicaoX = Math.floor(Math.random() * largura) -100

 posicaoX = posicaoX < 0 ? 0 : posicaoX 
 posicaoY = posicaoY < 0 ? 0 : posicaoY 
 

 console.log(posicaoX, posicaoY)

 //CRIAR ELEMENTO HTML
 var mosquito = document.createElement('img')
 mosquito.src = 'imagens/mosca.png'
 mosquito.className = tamanhoAleatorio() + ' ' +  ladoAleatorio()
 mosquito.style.left = posicaoX  + 'px'
 mosquito.style.top = posicaoY + 'px'
 mosquito.style.position = 'absolute'
 document.body.appendChild(mosquito)
 mosquito.id = 'mosquito'
 mosquito.onclick = function (){
    this.remove()
 }

}


 function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

console.log(ladoAleatorio())