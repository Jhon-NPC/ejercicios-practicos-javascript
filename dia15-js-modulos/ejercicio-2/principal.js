/* Importa todo lo necesario de ambos módulos, usando al menos una vez cada una de estas formas: importación nombrada, importación por defecto, e import * as para alguno de los dos archivos (tú decides cuál) */
import calcularCotizacion from "./calculos.js";
import * as validaciones from "./validaciones.js";

/* Al enviar el formulario, valida nombre, email y meses usando las funciones de validaciones.js, acumulando errores y mostrándolos en <div id="contenedorErrores">, limpiando los anteriores */


/* Si es válido, recolecta los extras marcados (deberás obtenerlos de los checkboxes seleccionados, no de una lista fija escrita a mano), calcula la cotización con calcularCotizacion, y agrégala a un array de cotizaciones generadas (en memoria, no hace falta guardarlo en ningún lado más), con un id dinámico */

/* Renderiza cada cotización en <div id="lista-cotizaciones">, mostrando el nombre del cliente, el plan elegido, los meses, los extras (si eligió alguno) y el precio final */

/* Cada cotización debe tener un botón para eliminarla de la lista y del array */

/* En el resumen, muestra cuántas cotizaciones se han generado en total, y el precio promedio entre todas las que queden activas, recalculado tras cada cambio */