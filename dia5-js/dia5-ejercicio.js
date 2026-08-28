/* 
Desarrolla un validador y formateador de nombres de usuario para un sistema de registro.
Muestra cada resultado en consola con un mensaje descriptivo.
*/

const nombreIngresado = "   pablo garcía  ";

/* 
Usa .trim() para quitar los espacios sobrantes y guarda el resultado en una nueva variable.
*/

/*
Usa .length para mostrar cuántos caracteres tiene el nombre ya limpio.
 */

/*
Crea una función formatearNombre(nombre) que reciba el nombre limpio y devuelva la primera letra en mayúscula y el resto igual. Pista: vas a necesitar combinar .slice() con .toUpperCase()
 */

/*
Usa .includes() para verificar si el nombre contiene la palabra "admin" (no debería permitirse un nombre de usuario que la contenga). Muestra "Nombre no permitido" si la contiene, o "Nombre válido" si no
 */

/* 
Usa .split(" ") para separar el nombre completo en un array de palabras (nombre y apellido por separado), y muestra cuántas palabras tiene
*/

/* 
Usa .replace() para reemplazar la palabra "garcía" por "gonzález" dentro del nombre original (sin el trim)
*/