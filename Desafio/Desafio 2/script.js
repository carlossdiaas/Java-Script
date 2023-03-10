    function verificar(){
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.getElementById('res')
        if (fano.value.length == 0|| Number(fano.value) > ano){
            alert('[ERRO] Verifique os dados e tente novamente!')
        }else{
            var fsex = document.getElementsByName('radiosex')
            var idade = ano - Number(fano.value)
            var img = document.createElement('img')
            img.setAttribute('id' , 'foto')
            var genero = ''

            
            if (fsex[0].checked){

            
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
                }}
                if (fsex[01].checked){
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