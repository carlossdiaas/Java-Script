let num = [5,2,4,7,9,8,6,3,1]
console.log(num)
console.log (`Nosso vetor tem ${num.length} elementos`)
console.log (`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(10)

if (pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 9 está na posição ${pos}`)
}
