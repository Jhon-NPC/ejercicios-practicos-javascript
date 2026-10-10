/* Importa procesarLote (la exportación por defecto de lote.js) y CATEGORIAS_PERMITIDAS (de validaciones.js) */

/* Las opciones del filtro de categoría (además de “Todas”, que ya está en el HTML) deben generarse desde CATEGORIAS_PERMITIDAS, no escribirse a mano en el HTML. El texto visible de cada opción lleva la primera letra en mayúscula (por ejemplo, Accesorios) */

/* Al hacer clic en el botón de importar:
Se limpian por completo los mensajes, las dos listas y el resumen de la importación anterior
El párrafo estado muestra Importando... antes de empezar, y Importación terminada al finalizar, haya salido bien o mal
Se convierte el texto del <textarea> en un objeto
Si el JSON es válido pero no contiene la propiedad productos (por ejemplo, si el texto es null, un número, o un objeto sin esa propiedad), lanza un Error propio con el mensaje El JSON no contiene la propiedad productos
Se llama a procesarLote con la lista de productos, y se extraen aceptados y rechazados del resultado */

/* Todo error que llegue a este nivel se maneja según su tipo (comparando error.name), y siempre se registra además con console.error(error):
SyntaxError → mensaje en mensaje-general: El texto no tiene formato JSON válido
Error → muestra en mensaje-general el message del error
Cualquier otro tipo → mensaje en mensaje-general: Ocurrió un error inesperado. Revisa la consola. (en este nivel no se vuelve a lanzar) */

/* Cada producto aceptado se muestra en lista-aceptados con este formato: nombre, precio con exactamente 2 decimales, stock y categoría con la primera letra en mayúscula:
    Mouse inalámbrico
    S/. 45.50
    Stock: 12
    Categoría: Accesorios

Los productos con stock igual a 0 deben distinguirse visualmente del resto y mostrar además el texto Sin stock */

/* Cada producto rechazado se muestra en lista-rechazados con este formato: Producto #3: El nombre del producto no es válido */

/* Al cambiar la opción del filtro de categoría, solo deben permanecer visibles las tarjetas de productos aceptados de esa categoría (Todas muestra todas). Las demás se ocultan sin eliminarse. Después de cada importación, el filtro que esté seleccionado en ese momento debe seguir aplicándose a las tarjetas recién creadas */

/* El resumen (que no cambia con el filtro) muestra, con este formato:
    Aceptados: 3 | Rechazados: 6 | Valor total del inventario aceptado: S/. 8046.00 | Producto más caro: Laptop

El valor total es la suma de precio × stock de todos los aceptados, con 2 decimales. El producto más caro es el aceptado con mayor precio (si hay empate, el primero de la lista). Si no hay ningún producto aceptado, el resumen muestra solo las cantidades de aceptados y rechazados, sin valor total ni producto más caro */

/* Comprobación de la rama inesperada: introduce temporalmente un error de escritura en el nombre de una variable dentro de procesarLote, confirma que aparece el mensaje genérico y que el detalle sale en consola, y luego corrígelo */