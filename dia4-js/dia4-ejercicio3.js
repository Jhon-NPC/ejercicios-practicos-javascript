/* Construcción de un sistema de reservas para un cine */
const reservas = [
    { pelicula: "Dune 2", asientos: 3, esVIP: true },
    { pelicula: "Intensamente 2", asientos: 5, esVIP: false },
    { pelicula: "Deadpool 3", asientos: 1, esVIP: true },
    { pelicula: "Godzilla", asientos: 8, esVIP: false }
];

/* 
Precio base por asiento: 20 soles. Si es VIP, el precio por asiento sube a 35 soles.
Crea una arrow function calcularPrecio(asientos, esVIP) que devuelva el precio total de una reserva.
*/
const calcularPrecio = (asientos,esVIP) => asientos * (esVIP ? 35:25 );

/* 
Crea una función aplicarDescuento(precio, asientos) que devuelva el precio con descuento aplicado:
    Si la reserva tiene 5 o más asientos, aplica 10% de descuento
    Si no, el precio se mantiene igual
*/
function aplicarDescuento(precio,asientos){
    let precioActualizado = 0;
    if(asientos>=5){
        precioActualizado = precio - (precio*0.1);
    }else{
        precioActualizado = precio;
    }
    return precioActualizado;
}

/*
Crea una función procesarReservas(listaReservas) que recorra el array con for...of y, para cada reserva:
Calcule el precio con calcularPrecio
Le aplique el descuento con aplicarDescuento
Muestre en consola: Dune 2 | 3 asientos | Total: 105 soles
*/
const procesarReservas = function(listaReservas){
    for(const reserva of listaReservas){
        const precioTotal = calcularPrecio(reserva.asientos, reserva.esVIP);
        const precioConDesc = aplicarDescuento(precioTotal,reserva.asientos);
        console.log()
    }
}

