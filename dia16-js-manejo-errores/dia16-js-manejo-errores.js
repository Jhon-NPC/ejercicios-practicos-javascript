/* Crea tres bloques try...catch separados. En cada uno provoca a propósito un error distinto: un ReferenceError (usando una variable que no existe), un TypeError (leyendo una propiedad de una variable que vale null) y un RangeError (usando .toFixed(101) sobre un número). En cada catch, muestra en consola error.name y error.message */


/* Crea una función dividir(a, b) que lance new Error("No se puede dividir entre 0") si b vale 0, y devuelva la división en caso contrario. Llámala dentro de un try...catch con una división válida y con una división entre 0, mostrando en consola el resultado o el mensaje del error */


/* Crea una función validarEdad(edad) que lance un TypeError con el mensaje "La edad debe ser un número" si isNaN(edad) es verdadero, un RangeError con el mensaje "La edad debe estar entre 0 y 120" si la edad es menor a 0 o mayor a 120, y devuelva true si es válida */


/* Crea una función procesarUsuario(texto) que reciba un texto JSON, lo convierta en objeto con JSON.parse(), llame a validarEdad(usuario.edad) y devuelva el objeto. Esta función no debe tener ningún try...catch dentro */


/* Agrega un listener de "click" al botón btn-procesar. Dentro del callback, usa try...catch para llamar a procesarUsuario con el texto escrito en el input (con .value):
Si todo sale bien, muestra en <div id="mensajes"> el texto "Usuario válido: [nombre], [edad] años"
Si el error es un SyntaxError, muestra en <div id="mensajes"> el texto "El texto no tiene formato JSON válido"
Si el error es un TypeError o un RangeError, muestra en <div id="mensajes"> el error.message
Si es cualquier otro tipo de error, vuelve a lanzarlo con throw error
Los mensajes deben quedar visibles en la página, no solo en consola, y cada clic debe reemplazar el mensaje anterior en vez de acumularlos */


/* Usa finally para que, antes del try, el párrafo <p id="estado"> muestre "Procesando...", y que al terminar (haya fallado o no) muestre "Proceso terminado" */


/* Dentro del catch, registra también el error con console.error(error), para dejar el detalle técnico en consola mientras el usuario ve el mensaje amigable */