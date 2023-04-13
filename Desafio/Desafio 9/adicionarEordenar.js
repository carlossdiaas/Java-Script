var objetos = Array('Cadeira', 'Impressora', 'Garfo')
console.log(objetos)
function adicionar(){
    var objeto = document.getElementById('txt').value
    if (objeto != ''){
        if (objeto.indexOf(objeto) !== -1){
            alert('Obejeto já foi adicionado')
        }else {
            objetos.push(objeto)
            console.log(objetos)
            document.getElementById('objeto.value')
        }
    }else{
            alert('informe um valor válido')
    }

}
