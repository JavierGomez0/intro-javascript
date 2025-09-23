/**
 * conversiones - explicit type casting
 */

const string = '54'
const interger = parseInt(string)

//console.log(string )
//console.log(interger)

const flotante = parseFloat('3.14')
//console.log(typeof flotante) // number

const binario = 1010
const decimal = parseInt(binario, 2)
//console.log(decimal)

const hexa = 'CAFE'
const decimalh = parseInt(hexa, 16)
//console.log(decimalh)

//implicit type casting

const resultado = '5' + 3
//console.log(resultado) 
//console.log(typeof resultado) 

const sumaBoolean = '3' + true
//console.log(typeof sumaBoolean) 

const sumaConNUmero = true + 2
//console.log(typeof sumaConNUmero)

const valorSrting = '29'
const valorNumber = 11
const valorBoolean = true
console.log(valorSrting + valorSrting) // concatena
console.log(valorSrting + valorNumber) //concatena
console.log(valorSrting + valorBoolean) //concatena

console.log(valorNumber + valorNumber) //suma
console.log(valorNumber + valorSrting) // concatena
console.log(valorNumber + valorBoolean) //suma

console.log(valorBoolean + valorBoolean) //suma
console.log(valorBoolean + valorNumber) //suma
console.log(valorBoolean + valorSrting) // concatena