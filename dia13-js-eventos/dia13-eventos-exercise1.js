/* Declara una variable cuenta con valor inicial 0. Usa addEventListener con "click" sobre btnSumar para incrementarla en 1 y mostrar el resultado en <p id="contador">; haz lo mismo con btnRestar, restando 1 */
const contador = document.getElementById("contador");
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
let valorContador = parseInt(contador.textContent);

btnSumar.addEventListener("click", function(evento){ 
    valorContador++;
    contador.textContent = valorContador;
    /* Dentro del listener de btnSumar, usa evento.target para mostrar en consola qué elemento disparó el clic */
    console.log(evento.target);
});

btnRestar.addEventListener("click", () => { 
    valorContador--;
    contador.textContent = valorContador;
});

/* Usa "mouseover" y "mouseout" sobre <div id="caja">, para que cambie su color de fondo a "yellow" cuando el cursor entre, y vuelva a "white" cuando salga */
const contenedorCaja = document.getElementById("caja");
contenedorCaja.addEventListener("mouseover",()=>contenedorCaja.style.backgroundColor="yellow");
contenedorCaja.addEventListener("mouseout", ()=>contenedorCaja.style.backgroundColor="white");

/* Usa "keydown" sobre document para mostrar en consola, con evento.key, cada tecla que el usuario presione en cualquier parte de la página */
document.addEventListener("keydown",(evento)=>console.log(evento.key));

/* Usa "input" sobre campoTexto, para que mientras el usuario escribe, <p id="vistaPrevia"> muestre el texto en tiempo real usando .value */
const campoTexto = document.getElementById("campoTexto");
const vistaPrevia = document.getElementById("vistaPrevia");
campoTexto.addEventListener("input", (evento)=> vistaPrevia.textContent = evento.target.value);

/* Usa "change" sobre selectorColor, para que el color de texto del <h1 id="titulo"> cambie al valor seleccionado apenas el usuario elija una opción */
const selectorColor = document.getElementById("selectorColor");
const titulo = document.getElementById("titulo");
selectorColor.addEventListener("change", (evento)=> titulo.style.color = evento.target.value );

/* Usa "submit" sobre miFormulario. Dentro del listener, usa .preventDefault() para evitar que la página se recargue, y muestra en <p id="mensajeFormulario"> el mensaje "Gracias, [nombre ingresado]", usando .value del campo del formulario */
const form = document.getElementById("miFormulario");
const mensajeFormulario = document.getElementById("mensajeFormulario");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const textoNombre = document.getElementById("campoFormulario");
    mensajeFormulario.textContent = `Gracias, ${textoNombre.value}`;
});

/* Crea una función con nombre (no anónima) que muestre "Este botón ya no volverá a funcionar" en consola. Agrégala como listener de "click" sobre btnUnaVez, y dentro de esa misma función, usa removeEventListener para que el botón deje de reaccionar después del primer clic */
function btnUnaVez(){
    console.log("Este botón ya no volverá a funcionar");
    btnUnicaVez.removeEventListener("click",btnUnaVez);
}
const btnUnicaVez = document.getElementById("btnUnaVez");
btnUnicaVez.addEventListener("click",btnUnaVez);