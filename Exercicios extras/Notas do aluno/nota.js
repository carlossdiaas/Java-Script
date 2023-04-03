document.getElementById('sec')
document.getElementById('jovem')
document.getElementById('idoso')
document.getElementById('crianca')
document.getElementById('adulto')

var idade = prompt('Qual sua idade')
if (idade <=0){
    alert('digite um valor valido')
}else{
    if (idade <+ 15){
        sec.innerHTML = `Você é uma criança`
        crianca.style.display = 'block'
    }else if(idade <=30){
        sec.innerHTML = `Você é um jovem`
        jovem.style.display = 'block'
    }else if(idade > 30 && idade < 60){
        sec.innerHTML = `Você é um adulto`
        adulto.style.display = 'block'
    }else{
        sec.innerHTML = `Você é um idoso`
        idoso.style.display = 'block'
    }
}