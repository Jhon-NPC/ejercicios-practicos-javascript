/* Importa IVA y calcularTotal desde operaciones.js, usando llaves */
import {IVA, calcularTotal} from "./operaciones.js";

/* Importa aplicarDescuento desde operaciones.js, pero renómbralo a descontar usando as */
import {aplicarDescuento as descontar} from "./operaciones.js";

/* Importa la exportación por defecto de saludo.js, con el nombre que prefieras */
import mensajeSaludo from "./saludo.js";

/* Usa las tres funciones/valores importados para resolver lo siguiente: calcula el total de comprar 3 unidades de un producto de 50 soles, aplícale un descuento del 10% usando la función renombrada, y luego súmale el IVA importado al resultado final. Muestra cada paso en consola */
const unidades = 3;
const producto = 50;
const descuento = 10;
let resultado = null;

const resultadoCalcularTotal = calcularTotal(producto,unidades);
const resultadoDescuento = descontar(resultadoCalcularTotal,descuento);
const resultadoIVA = calcularTotal(resultadoDescuento,IVA);
resultado = resultadoIVA+resultadoDescuento;
console.log(`El resultado final es: ${resultado}`);

/* Muestra en consola el mensaje de bienvenida para un cliente, usando la función importada por defecto */
const mensaje = mensajeSaludo("Daniel");
console.log(mensaje);