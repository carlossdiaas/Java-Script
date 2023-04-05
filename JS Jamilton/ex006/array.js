/*
var lista_frutas = Array()
lista_frutas[0] = 'banana'
lista_frutas[1] = 'maça'
lista_frutas[2] = 'pera'
lista_frutas[3] = 'uva'

console.log(lista_frutas)
*/

/*
var lista_frutas = Array('banana', 'uva', 'pera', 'morango')

console.log(lista_frutas[0])
*/


//ARRYS MULTI DIMENCIONAS

var lista_coisas = Array()
lista_coisas['Frutas'] = Array('banana',' maca', 'pera','uva')
lista_coisas['Pessoas'] = Array()
lista_coisas['Pessoas']['a'] = 'Joao'
lista_coisas['Pessoas']['b'] = 'Pedro'
lista_coisas['Pessoas']['c'] = 'Maria'
lista_coisas['Pessoas']['d'] = 'Edu'

document.write(lista_coisas['Pessoas']['a'])
document.write(lista_coisas['Pessoas']['b'])
document.write(lista_coisas['Pessoas']['c'])
document.write(lista_coisas['Pessoas']['d'])

