/**
 * funciones
 */

//somos empleados de una empresa y nesecitamos aplicar descuento a nuestro productos
function calcularPrecioDeDescuento(precio , descuentoEmPorcentaje) {
    const descuento = (precio * descuentoEmPorcentaje) / 100;
    const nuevoPrecio = precio - descuento;
    return nuevoPrecio;
}

const precioOriginal = 1000;
const descuento = 18;
const precioFinal = calcularPrecioDeDescuento(precioOriginal, descuento);

console.log('precio original: Q'+precioOriginal);
console.log('descuento: Q' + descuento + '%');
console.log('precio con descuento: Q' + precioFinal);