const numeroSecreto = Math.floor(Math.random() * 10 + 1);
const numeroJugador = parseInt(prompt('Adivina el número secreto entre 1 y 10'));

if (numeroJugador === numeroSecreto) {
    console.log('¡Felicidades! Adivinaste el número secreto.');
} else if (numeroSecreto < numeroJugador) {
   console.log('El número secreto es mu bajo ');
} else {
   console.log('El número secreto es muy alto');
}
