/* Importa validarProducto desde validaciones.js y exporta por defecto una función procesarLote(lista) que recibe un array de elementos y devuelve un objeto con dos propiedades */

/* aceptados: un array con los productos que pasaron la validación */

/* rechazados: un array de objetos, uno por cada elemento rechazado, con la posicion que ocupaba en la lista original (empezando desde 1) y el motivo del rechazo */


/* Reglas de esta función:
Un elemento inválido no debe impedir que se procesen los elementos siguientes
Un error de tipo Error, TypeError o RangeError se considera un motivo de rechazo normal (el motivo es el mensaje del error)
Cualquier otro tipo de error no debe tratarse como rechazo: debe seguir su camino hacia quien llamó a la función 
*/