/* Muestra el título de la tienda */
const tituloTienda = document.querySelector("#titulo-tienda");
console.log(`El nombre de la tienda es: ${tituloTienda.textContent}`);

/* Obtén todos los libros de toda la tienda (ambas categorías juntas) y muestra cuántos hay en total */
const libros = document.querySelectorAll(".libro");
libros.forEach(libro=>console.log(`Libro: ${libro.textContent}`));

/* Obtén únicamente los libros de la categoría "Infantil" y muéstralos uno por uno (sin seleccionar toda la tienda, solo esa categoría específica) */
const librosInfatiles = document.querySelectorAll("#categoria-infantil .libro");
librosInfatiles.forEach(libro=>console.log(`Libro Infantil: ${libro.textContent}`));

/* A partir de la categoría "Ficción", obtén específicamente su segundo libro, sin usar la clase "libro" directamente para lograrlo */
const librosFiccion = document.querySelector("#categoria-ficcion");
console.log(`El segundo libro es: ${librosFiccion.children[2].textContent}`);

/* Encuentra el título (<h2>) de la categoría "Infantil" a partir de uno de sus libros, sin seleccionar el <h2> directamente */
const tituloH2Infantil = document.querySelector("#categoria-infantil .libro").previousElementSibling;
console.log(`El titulo infantil es: ${tituloH2Infantil.textContent}`);

/* A partir del primer libro de la categoría "Ficción", encuentra el último libro de esa misma categoría, moviéndote paso a paso entre hermanos (sin usar querySelector para saltar directamente a él) */
const categoriFiccion = document.getElementById("categoria-ficcion");
let libroActual = categoriFiccion.children[1];
while(libroActual.nextElementSibling !== null){
    libroActual = libroActual.nextElementSibling;
}
console.log(`El ultimo libro es: ${libroActual.textContent}`)

/* Obtén el teléfono de contacto, y a partir de él, encuentra el horario de atención sin seleccionar el horario directamente por su id */
const telefono = document.getElementById("telefono");
console.log(`Horario: ${telefono.previousElementSibling.textContent}`);

/* Muestra a qué contenedor pertenece el horario de atención */
const horario = document.querySelector("#horario");
console.log(`El horario pertenece al contenedor con ID: ${horario.parentElement.id}`)