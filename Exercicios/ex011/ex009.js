var idade = 65
console.log(`Você tem ${idade} anos de idade. `)
if (idade < 16){
    console.log('Nao vota')
} else if (idade < 18 || idade >= 65){
    console.log ('Voto é opcional')
}else {
    console.log ('Voto obrigatorio')
}
