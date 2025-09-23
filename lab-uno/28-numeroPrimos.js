//Crea una función que reciba un número y determine si es un número primo.
//Javier Alesandro Gomez Ramos - 2024026
function esNumeroPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

const numeroUsuario = parseInt(prompt("Introduce un número:"));
console.log(esNumeroPrimo(numeroUsuario));