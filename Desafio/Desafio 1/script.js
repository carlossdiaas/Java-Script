function carregar(){
    var msg =  window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var fundo = window.document.getElementsByTagName('body')
    msg.innerText = (`Agora são exatamente ${hora} horas. `)
    

    if (hora >=6  && hora < 12){
        img.src = 'imgas/fotomanha.png'
        msg.innerText = (`Agora são exatamente ${hora} horas. Bom Dia! `)
        document.body.style.background = '#B3630E'
    }else if (hora >= 12 && hora < 18){
        img.src = 'imgas/fototarde.png'
        msg.innerText = (`Agora são exatamente ${hora} horas. Boa Tarde! `)
        document.body.style.background = '#E8BF41'
    }else if (hora > 18 && hora < 23.99){
        img.src = 'imgas/fotonoite.png'
        msg.innerText = (`Agora são exatamente ${hora} horas. Boa Noite! `)
        document.body.style.background = 'rgb(24 42 36'
    }else{
        img.src = 'imgas/fotomadrugada.png'  
        msg.innerText = (`Agora são exatamente ${hora} horas. Boa Madrugada! `)  
        document.body.style.background = '#000000'
    }
}
