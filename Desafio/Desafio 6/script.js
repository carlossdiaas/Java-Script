//VALORES
var carro = 57
var moto = 93
var caminhao = 82
//QUANTIDADE
var Qcarro = 10
var Qmoto = 5
var Qcaminhao = 20
//TOTAL
var total = Qcarro * carro + Qmoto * moto + Qcaminhao * caminhao
console.log(`O valor total do dinheiro arecadado com o pedagio foi de R$${total} Reais.
Passaram ${carro} carros, ${moto} motos e ${caminhao} caminhões!`)

if (carro>moto && carro>caminhao){
    console.log('Passaram mais carros')
}else if(moto>carro && moto>caminhao){
    console.log('Passaram mais motos')
}else{
    console.log('passaram mais caminhoes')
}
    