var largura = prompt('Digite a largura do terreno')
var comprimento = prompt('Digite a comprimento do terreno')
var area = calcularArea(largura, comprimento)

document.write(`O terreno possui uma area de ${area}m²`)

function calcularArea(largura,comprimento){
    var area = largura * comprimento
    return area
}
