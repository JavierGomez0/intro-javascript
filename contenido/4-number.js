/**
 * tipo de datos number
 */

//1. entero y decimal
const entero = 42;
const decimal = 3.14;

// 2.notación científica
const cientifica = 5e3

// 3.infinitos y NaN
const infinito = Infinity;
const noNumero = NaN;

// operaciones aritmeticas
// 1. suma, resta, multiplicacion y division
const suma = 5 + 6;
const resta = 5 - 6;
const multiplicacion = 5 * 6;
const division = 5 / 6;

// 2. modulo y exponenciacion
const modulo = 5 % 6;
const exponenciacion = 5 ** 6;

// presicion,  javaScript tiene problemas de calculo

const resultado = 0.1 + 0.2;
//console.log(resultado);
//console.log(resultado.toFixed(1));
//console.log(resultado == 0.3);

//operaciones avanzadas
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-5);
const aleatorio = Math.random();
let numero = aleatorio * 20 + 10;

//console.log(raizCuadrada);
//console.log(valorAbsoluto);
//onsole.log(Math.trunc(numero));

//ejemplo
const numero2 = 2
const booleano = true
console.log(numero2 + booleano) 