/**
 *  operadores de comparacion 
 */


// == :igualdad
// === :para comparar igualdad en valor y en tipo de dato
// != :desigualdad, devuelve un true: diferente o false: igual
// !== :para comparar desigualdad en valor y en tipo de dato

// < :menor que
// > :mayor que
// <= :menor o igual que
// >= :mayor o igual que

const a = 10
const b = 20
const c = '10'

console.log(a == b) // false
console.log(a === c) // false
console.log(a == c) // true
console.log(a != c) // false -> se interpreta como iguales
console.log(a !== c) // true 

