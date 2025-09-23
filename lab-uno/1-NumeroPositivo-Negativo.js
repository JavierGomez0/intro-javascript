//Crea una función que tome un número y retorne "Positivo" si es mayor
//que cero, "Negativo" si es menor que cero, y "Cero" si es igual a cero
//Javier Alesandro Gomez Ramos - 2024026

function evaluarNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}

console.log(evaluarNumero(0)); 