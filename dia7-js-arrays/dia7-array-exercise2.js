/* Construye un gestor de inventario de una tienda de electrónica. */
const inventario = ["Laptop", "Mouse", "Teclado", "Monitor"];

/* Muestra cuántos productos hay actualmente en el inventario */
console.log(`Hay ${inventario.length} productos en el inventario`);

/* Llegaron dos productos nuevos a la tienda: "Audífonos" y "Webcam". Agrégalos al inventario, considerando que deben quedar al final de la lista */
inventario.push("Audífonos","Webcam");

/* Llegó una reposición urgente: "Cargador". Debe aparecer primero que todos los demás productos en el inventario */
inventario.unshift("Cargador");

/* Muestra el inventario completo, numerando cada producto empezando desde 1 */
let contador = 0;
for(const item of inventario){
    contador+=1;
    console.log(`${contador}. ${item}`);
}

/* Un cliente pregunta si tienes "Impresora" disponible. Verifica si está en el inventario y muéstrale un mensaje adecuado según el resultado */
const respuestaBoolean = inventario.includes("Impresora");
console.log(`Impresora ${respuestaBoolean?"":"no "}existe en el inventario`);

/* Se vendió el producto que llegó más recientemente al inventario. Elimínalo de la lista, guarda su nombre, y muestra un mensaje confirmando qué producto se vendió */
const itemVendido = inventario.pop();
console.log(`El producto ${itemVendido} ha sido vendido`);

/* Muestra el inventario restante en una sola línea de texto, con los productos separados por - */
const stringInventario = inventario.join(" - ");
console.log(stringInventario);

/* Necesitas saber en qué posición exacta del inventario se encuentra "Teclado" actualmente */
const posicionItem = inventario.indexOf("Teclado");
console.log(`El teclado se encuentra en la posición ${posicionItem}`);