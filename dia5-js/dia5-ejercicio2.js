/* Construye un procesador de comentarios para un sistema de moderación básico. */

const comentario = "  Este PRODUCTO es una ESTAFA total, no lo compren!!!  ";
/* Lista de palabras prohibidas: ["estafa", "fraude", "falso"] */

/*Limpia espacios sobrantes del comentario y guárdalo en una nueva variable */
const comentarioSinEspaciosExternos = comentario.trim();
console.log(`Comentario: ${comentarioSinEspaciosExternos}`);

/* 
Crea una función contienePalabraProhibida(texto, palabrasProhibidas) que reciba el comentario limpio y el array de palabras prohibidas. Devuelve true si encuentra alguna palabra prohibida dentro del texto, o false si no encuentra ninguna
*/
const palabrasProhibidas = ["estafa", "fraude","falso"];

const contienePalabraProhibida = function(texto, listaProhibida){
    const textoMinuscula = texto.toLowerCase();
    for(const palabra of listaProhibida){
        if(textoMinuscula.includes(palabra.toLowerCase())){
            return true;
        }
    }
    return false;
}

/*
Según el resultado del punto anterior, muestra "Comentario bloqueado por contenido inapropiado" o "Comentario aprobado"
*/
const valorBooleano = contienePalabraProhibida(comentarioSinEspaciosExternos,palabrasProhibidas);
const mensajeResultado = valorBooleano ? "Comentario bloqueado por contenido inapropiado": "Comentario aprobado";
console.log(mensajeResultado);

/* 
Crea una función contarPalabras(texto) que use .split(" ") para separar el texto en palabras y devuelva cuántas palabras tiene
*/
function contarPalabras(texto){
    const textoArray = texto.split(" ");
    let sumaCaracteres = 0; 
    for(const palabra of textoArray){
        sumaCaracteres += palabra.length;
    }
    return sumaCaracteres;
}

/*  Censurar la palabra "ESTAFA" reemplazándola por "****" dentro del comentario limpio */
const comentarioCensurado = comentarioSinEspaciosExternos.replace("ESTAFA","****");

/* 
Muestra el comentario ya censurado, junto con la cantidad de palabras que tiene (usando la función contarPalabras)
*/
const total = contarPalabras(comentarioCensurado);
console.log(`Suma total de carácteres: ${total}`);