/* 
Construye un procesador de pedidos de una tienda online, donde los datos llegan como strings (simulando que vienen de un formulario).
Muestra todos los resultados en consola.
*/
const precioInput = "45.678";
const cantidadInput = "3";
const codigoDescuentoInput = "diez"; // simulando un error del usuario

/* Convierte precioInput a número decimal, y cantidadInput a número entero. Guarda cada uno en una nueva variable */
const precioDecimal = parseFloat(precioInput);
const precioEntero = parseInt(cantidadInput);
console.log(`El precio es de ${precioDecimal} y la cantidad comprada es ${cantidadInput}`);

/* Crea una función calcularSubtotal(precio, cantidad) que devuelva el precio multiplicado por la cantidad, usando .toFixed(2) para que el resultado tenga máximo 2 decimales */
const calcularSubtotal = (precio, cantidad) => {
    const resultadoSubTotal = precio * cantidad;
    resultadoFormateado = resultadoSubTotal.toFixed(2)
    return resultadoFormateado;
}
console.log(`Precio subtotal: ${calcularSubtotal(precioDecimal,precioEntero)}`);

/* Intenta convertir codigoDescuentoInput con parseInt(). Usa isNaN() para verificar si la conversión fue válida. Si no lo fue, muestra "Código de descuento inválido, no se aplicó descuento". Si lo fue, muestra el descuento aplicado */
const codigoDescEntero = parseInt(codigoDescuentoInput);
if(isNaN(codigoDescEntero)){
    console.log("Código de descuento inválido, no se aplicó descuento.");
}else{
    console.log(`El descuento es de ${codigoDescEntero}`)
}

/* Crea una función generarNumeroPedido() que devuelva un número aleatorio entero entre 1000 y 9999 */
const generarNumeroPedido = () =>{
    return Math.floor(Math.random()*9000)+1000;
}
console.log(`${generarNumeroPedido()}`)

/* Usa Math.max() para determinar cuál de estos tres pedidos anteriores tuvo el subtotal más alto: 120.50, 89.30, 150.75 */
const pedidoMaximo = Math.max(120.50, 89.30, 150.75);
console.log(`El subtotal más alto es: ${pedidoMaximo}`)