function enviar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoi = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (anoi.value.length <= 0 || anoi.value > ano){
        alert('[ERRO] Preencha todos os campos corretamente!')
    }else{
        var idade = ano - Number(anoi.value)
        var genero = ''
        var sexo = document.getElementsByClassName('rsexo')
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (sexo[0].checked){
            genero = 'homen'

            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebem.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemm.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultom.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosom.png')
            }

            genero = 'mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebef.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemf.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultof.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosof.png')
            }
        }
            res.style.textAlign = 'center'
            res.innerHTML = `Voce é ${genero} e tem ${idade} anos de idade.`
            img.style.width='250px'
            res.appendChild(img)
    }
}