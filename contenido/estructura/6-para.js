/**
 *  for ciclo para
 */

//for | for-of | for-in

let lista = ['eat', 'sleep', 'code' , 'repeat'];

//for
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
console.log('______________');
//for-of [{for each}]
let canasta = ['manzanas', 'platanos', 'papayas'];
for (fruta of canasta) {
    console.log(fruta);
}

//for-in: interar sobre las propiedades de un objeto

const listaDeCOmpras ={
    nombre: 'uva',
    costo: 15.50,
    cantidad: 10,
    marca: 'la mera UVA'
}

console.log('______________');
for (fruta in listaDeCOmpras){
    console.log(fruta);
}

console.log('______________');
for (fruta in listaDeCOmpras){
    console.log(`${fruta}: ${listaDeCOmpras[fruta]}`);
}

console.log('______________');
for (fruta of listaDeCOmpras){
    console.log(fruta); //error que lista de compras no es iterable
}