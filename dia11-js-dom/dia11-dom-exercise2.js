/* Obtén el nombre del restaurante y muéstralo en consola */
const nombreRestaurante = document.getElementById("nombre-restaurante");
console.log(`El nombre del restaurante es: ${nombreRestaurante.textContent}`);

/* Obtén únicamente el primer plato del menú y muéstralo */
const primerPlato = document.querySelector(".plato");
console.log(`El primer plato es: ${primerPlato.textContent}`);

/* Obtén todos los platos del menú y muéstralos uno por uno en consola */
const platos = document.querySelectorAll(".plato");
platos.forEach(plato=>console.log(plato.textContent));

/* Muestra cuántos platos hay en total en el menú */
console.log(`Hay ${platos.length} platos`);

/* A partir del contenedor del menú, obtén específicamente el tercer plato de la lista (sin usar directamente su clase para seleccionarlo) */
const menu = document.querySelector("#menu");
console.log(menu.children);
console.log(menu.children[2].textContent);

/* A partir del primer plato del menú, encuentra cuál es el plato que está inmediatamente después de él */
const segundoPlato = platos[0].nextElementSibling;
console.log(segundoPlato.textContent);

/* Obtén el horario del restaurante, y a partir de ese elemento, encuentra a qué contenedor pertenece */
const horario = document.querySelector("span");
const contenedorHorario = horario.parentElement;
console.log(`El horario se encuentra en el div: ${contenedorHorario.id}`);