//Escribe un programa que ordene un arreglo de números de menor a mayor.
//Javier Alesandro Gomez Ramos - 2024026
function ordenarArreglo(arr) {
    return arr.sort((a, b) => a - b);
}

const numeros = [53, 3, 89, 1, 65];
console.log(ordenarArreglo(numeros));