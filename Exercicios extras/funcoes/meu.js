var largura = prompt('Digite a largura do terreno')
var comprimento = prompt('Digite a comprimento do terreno')
var area = calcularArea(largura, comprimento)

document.write(`O terreno possui uma area de ${area}m²`)

function calcularArea(largura,comprimento){
    var area = largura * comprimento
    return area
}
if (area > 200){
    document.write(`O terreno possui mais de 200 metros`)
}else{
    document.write(`-----------------O terreno possui menos de 200 metros`)
}