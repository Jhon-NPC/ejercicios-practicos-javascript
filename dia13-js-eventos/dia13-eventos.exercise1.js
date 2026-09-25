/* Declara una variable cuenta con valor inicial 0. Usa addEventListener con "click" sobre btnSumar para incrementarla en 1 y mostrar el resultado en <p id="contador">; haz lo mismo con btnRestar, restando 1 */

/* Dentro del listener de btnSumar, usa evento.target para mostrar en consola qué elemento disparó el clic */
/* Usa "mouseover" y "mouseout" sobre <div id="caja">, para que cambie su color de fondo a "yellow" cuando el cursor entre, y vuelva a "white" cuando salga */
/* Usa "keydown" sobre document para mostrar en consola, con evento.key, cada tecla que el usuario presione en cualquier parte de la página */
/* Usa "input" sobre campoTexto, para que mientras el usuario escribe, <p id="vistaPrevia"> muestre el texto en tiempo real usando .value */
/* Usa "change" sobre selectorColor, para que el color de texto del <h1 id="titulo"> cambie al valor seleccionado apenas el usuario elija una opción */
/* Usa "submit" sobre miFormulario. Dentro del listener, usa .preventDefault() para evitar que la página se recargue, y muestra en <p id="mensajeFormulario"> el mensaje "Gracias, [nombre ingresado]", usando .value del campo del formulario */
/* Crea una función con nombre (no anónima) que muestre "Este botón ya no volverá a funcionar" en consola. Agrégala como listener de "click" sobre btnUnaVez, y dentro de esa misma función, usa removeEventListener para que el botón deje de reaccionar después del primer clic */