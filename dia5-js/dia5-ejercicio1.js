/* 
Desarrolla un validador y formateador de nombres de usuario para un sistema de registro.
Muestra cada resultado en consola con un mensaje descriptivo.
*/

const nombreIngresado = "   pablo garcía  ";

/* Quita los espacios sobrantes y guarda el resultado en una nueva variable. */
const nombreSinEspaciosExternos = nombreIngresado.trim();
console.log(`El nuevo nombre sin espacios sobrantes es: ${nombreSinEspaciosExternos}`);


/* Muestra cuántos caracteres tiene el nombre ya limpio. */
const nombreCantidadCaracteres = nombreSinEspaciosExternos.length;
console.log(`El nombre tiene ${nombreCantidadCaracteres} caracteres`);

/*
Crea una función formatearNombre(nombre) que reciba el nombre limpio y devuelva la primera letra en mayúscula y el resto igual.
*/
const formatearNombre = (nombreLimpio) =>{
    const letraMayuscula = nombreLimpio.slice(0,1).toUpperCase();
    const nombreCortado = nombreLimpio.slice(1);
    return letraMayuscula + nombreCortado;
}
const nombreConPrimeraLetraMayuscula = formatearNombre(nombreSinEspaciosExternos);
console.log(nombreConPrimeraLetraMayuscula);

/*
Verifica si el nombre contiene la palabra "admin" (no debería permitirse un nombre de usuario que la contenga). Muestra "Nombre no permitido" si la contiene, o "Nombre válido" si no
 */
const nombrePermitido = nombreSinEspaciosExternos.toLowerCase().includes("admin");
if(!nombrePermitido){
    console.log("Nombre válido");
}else{
    console.log("Nombre no permitido");
}

/* 
Separa el nombre completo en un array de palabras (nombre y apellido por separado), y muestra cuántas palabras tiene
*/
const nombreArray = nombreSinEspaciosExternos.split(" ");
for( const dato of nombreArray){
    console.log(`${dato} tiene ${dato.length} caracteres`);
}

/* Reemplaza la palabra "garcía" por "gonzález" dentro del nombre original (sin el trim) */
const nombreReemplazo = nombreIngresado.replace("garcía","gonzález");
console.log(nombreReemplazo);