/* Usa getElementById() para seleccionar el <h1>, guárdalo en una variable, y muestra su .textContent en consola */
const tituloPrincipal = document.getElementById("titulo-principal");
console.log(tituloPrincipal.textContent);

/* Usa querySelector() para seleccionar el primer elemento con clase "producto", y muestra su .textContent */
const primerProducto = document.querySelector(".producto");
console.log(primerProducto.textContent);

/* Usa querySelectorAll() para seleccionar todos los elementos con clase "producto", y recórrelos con .forEach() mostrando cada uno en consola */
const productos = document.querySelectorAll(".producto");
productos.forEach(producto=>console.log(producto));

/* Muestra cuántos elementos con clase "producto" existen en total, usando .length */
console.log(`Existen ${productos.length} productos`);

/* Selecciona el <div id="contenedor">, y usa .children para acceder y mostrar el <span> que tiene adentro */
const divContenedor = document.getElementById("contenedor");
console.log(divContenedor);
const elementoHijo = divContenedor.children;
console.log(elementoHijo[0]);

/* Selecciona el <span> directamente con querySelector(), y usa .parentElement para mostrar en consola a qué elemento pertenece (deberías obtener el <div>) */
const elementoSpan = document.querySelector("span");
console.log(elementoSpan);
const elementoPadre = elementoSpan.parentElement;
console.log(elementoPadre);