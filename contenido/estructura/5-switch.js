/**
 * estructura switch
 */ 
//las comillas simples salen con alt+96
//costos de una fruta
let compra = 'Manzanas';

switch (compra) {
    case 'Manzanas':
        console.log('El costo de las manzanas es 10 quetzales');
        break;
    case 'Platanos':
        console.log('El costo de los platanos es 15 quetzales');
        break;
    case 'Papayas':
        console.log('El costo de las papayas es 12 quetzales');
        break;
    //caso compatidos
    case 'Fresas':
    case 'Moras':
        console.log('El costo de las fresas y moras es 20 quetzales');
        break;
    default:
        console.log(`Fruta agotada o no se encuentra en el inventario ${compra}`);
        break;
}