//Escribe un programa que solicite la edad de un usuario y determine si
//es mayor de edad (18 años o más).
//Javier Alesandro Gomez Ramos - 2024026

function verificarEdad(edad) {
    if (edad >= 18) {
        return "Eres mayor de edad.";
    } else {
        return "Eres menor de edad.";
    }
}

const edadUsuario = parseInt(prompt("Introduce tu edad:"));
console.log(verificarEdad(edadUsuario));