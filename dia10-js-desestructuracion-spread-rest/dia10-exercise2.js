/* Desarrolla un procesador de pedidos para una cafetería. */
const pedido = ["Mesa 5", "Cappuccino", 12.50, "Sin azúcar"];
const cliente = { nombre: "Rodrigo Paz", tipoCliente: "Frecuente", puntos: 340, telefono: "987654321" };

/* Extrae en variables individuales los cuatro datos del pedido, con nombres que describan claramente cada uno */
const [numeroMesa, tipoBebida, precioBebida, condicionAzucar] = pedido;
console.log(`La ${numeroMesa} tiene como pedido un ${tipoBebida} ${condicionAzucar} que cuesta ${precioBebida}`);

/* Extrae únicamente el nombre y los puntos del cliente */
const {nombre, puntos} = cliente;
console.log(`El cliente ${nombre} tiene ${puntos} puntos`); 

/* Extrae el teléfono del cliente, pero guárdalo en una variable llamada contactoCliente */
const {telefono:contactoCliente} = cliente;
console.log(`El teléfono del cliente: ${contactoCliente}`);

/* Extrae una propiedad descuentoVIP del cliente (que no existe), asignándole un valor por defecto de 5 */
const {descuentoVIP=5} = cliente;
console.log(`Descuento: ${descuentoVIP}`);

/* Del array pedido, extrae solamente la mesa y la bebida en variables individuales, y agrupa el resto de los datos (los que no extrajiste) en una sola variable */
const [mesa, bebida, ...datoExtraPedido] = pedido
console.log(`Sitio: ${mesa}, Bebida: ${bebida}, Dato adicional: ${datoExtraPedido}`);

/* Del objeto cliente, extrae solamente el nombre en una variable, y agrupa el resto de sus propiedades (las que no extrajiste) en un solo objeto */
const {nombre: nombreCliente, ...datosCliente} = cliente;
console.log(`Nombre: ${nombreCliente}, Datos adicionales: ${Object.values(datosCliente)}`);

/* Crea una copia del objeto cliente llamada clienteActualizado, sumándole 50 puntos adicionales a los que ya tenía */
const clienteActualizado = {...cliente, puntos: cliente.puntos+50};
console.log(`${Object.values(clienteActualizado)}`);

/* Crea una función calcularTotalPedidos que acepte cualquier cantidad de montos como argumentos y devuelva la suma total de todos ellos. Pruébala con al menos 4 montos distintos */
function calcularTotalPedidos(...montoPedidos){
    return montoPedidos.reduce( (acumulador,elemento) => acumulador+elemento ,0);
}
const montoTotal = calcularTotalPedidos(15.20,19.67,25.7,9.99,41.3,5.90);
console.log(`La suma de los montos de los pedidos es: ${montoTotal}`);

/* Crea una función resumenPedido que reciba directamente un objeto desestructurado en sus parámetros (extrayendo nombre y tipoCliente), y muestre un mensaje combinando esos datos con el total calculado en el punto anterior */
const resumenPedido = function({nombre, tipoCliente}){
    console.log(`${nombre} es un cliente ${tipoCliente} cuyos pedidos consumidos ascienden a ${montoTotal}`);
}
resumenPedido(cliente);