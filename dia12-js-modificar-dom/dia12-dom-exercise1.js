/* Usa .textContent para cambiar el texto del <h1> a "Panel de notificaciones (3 nuevas)" */
const titulo = document.querySelector("#titulo");
console.log(titulo.textContent);
titulo.textContent= "Panel de notificaciones (3 nuevas)";

/* Usa .style para cambiar el color de fondo del <h1> a "lightblue" y su tamaño de letra a "28px" */
titulo.style.backgroundColor = "lightblue";
titulo.style.fontSize = "28px";

/* Usa document.createElement() para crear tres elementos <p> nuevos, con los textos: "Tienes una reunión a las 3pm", "Nueva actualización disponible", "Recordatorio: pagar servicios". Insértalos dentro del <div id="lista-notificaciones"> usando .appendChild() */
const listaNotificaciones = document.querySelector("#lista-notificaciones");
const tarea1 = document.createElement("p");
tarea1.textContent = "Tienes una reunión a las 3pm";
const tarea2 = document.createElement("p");
tarea2.textContent = "Nueva actualización disponible"
const tarea3 = document.createElement("p");
tarea3.textContent = "Recordatorio: pagar servicios"
listaNotificaciones.appendChild(tarea1);
listaNotificaciones.appendChild(tarea2);
listaNotificaciones.appendChild(tarea3);

/* Usa .classList.add() para agregarle la clase "urgente" al primer párrafo que creaste (el de la reunión) */
console.log(tarea1);
tarea1.classList.add("urgente");

/* Usa .getAttribute() para mostrar en consola el valor actual del atributo src del <img id="icono"> */
const img = document.getElementById("icono");
console.log(img.getAttribute("src"));

/* Usa .setAttribute() para cambiar el src de esa imagen a "campana-activa.png", y también actualiza su alt a "Icono de notificaciones activas" */
img.setAttribute("src", "assets/campana-activa.png");
img.setAttribute("alt","Icono de notificaciones activas");
console.log(img.getAttribute("src"));
console.log(img.getAttribute("alt"));

/* Usa .classList.contains() para verificar si el primer párrafo tiene la clase "urgente", y muestra el resultado en consola */
const claseEspecifica = "urgente"
const existeClase = tarea1.classList.contains(claseEspecifica);
console.log(`${existeClase?"Si":"No"} existe la clase ${claseEspecifica}`);