/*
    Simulador de descuento para una tienda online.

    Declara estas variables:
    nombreCliente — string con un nombre
    esPremium — boolean
    tieneCupon — boolean
    montoCompra — number mayor a 100
    productoAgotado — boolean

    Luego aplica estas reglas:
    Si el producto está agotado, muestra "Producto agotado, no se puede comprar" y no sigas evaluando.
    Si el monto no supera los 100 soles, el descuento es 0% sin importar el tipo de cliente.
    Si el monto supera los 100 soles, aplica el descuento según el tipo de cliente:
        Es premium → 20% de descuento
        No es premium pero tiene cupón → 10% de descuento
        Ninguna de las anteriores → 0% de descuento
    Determina si el monto de compra es par o impar-
    Muestra el resultado final en consola-
*/

const nombreCliente = "Pedro";
const esPremium = false;
const tieneCupon = false;
const montoCompra = 200;
const productoAgotado = false;
let mensajeAgotado = null;
let descuento = null;
let calculoDescuento = null;
let montoFinal = null;
let imparOPar = null;

let comprobarDisponible = !productoAgotado ? "Sí" : "No";
if(productoAgotado){
    mensajeAgotado = "Producto agotado, no se puede comprar";
}else{
    if(montoCompra<=100){
        descuento = 0;
    }else{
        if(esPremium){
            descuento = 0.2;
        }else if(tieneCupon){
            descuento = 0.1;
        }else{
            descuento = 0;
        }
    }
}

calculoDescuento = montoCompra * descuento;
montoFinal = montoCompra - calculoDescuento;
imparOPar = montoFinal%2 === 0 ? "par" : "impar";

console.log(`Cliente: ${nombreCliente}`);
console.log(`Producto disponible: ${comprobarDisponible}`);
console.log(mensajeAgotado);
if(!productoAgotado){
    console.log(`Monto original: ${montoCompra} soles`);
    console.log(`Descuento aplicado: ${descuento*100}%`);
    console.log(`Monto final: ${montoFinal} soles`);
    console.log(`El monto es ${imparOPar}`);
}