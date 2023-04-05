var n1 = prompt('Digite um número')
var tipo = prompt('+ ou -?')
var n2 = prompt('Digite outro número')

function calc (n1,n2,tipo){
    n1=parseFloat(n1)
    n2=parseFloat(n2)

    var resultado = 0

    if (tipo == '+'){
        resultado = n1+n2
    }else{
        resultado = n1-n2
    }
    return resultado
}
document.write(`O resultado da sua operação é: ` + calc(n1,n2,tipo))


