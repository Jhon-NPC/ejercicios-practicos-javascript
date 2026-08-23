/* 
Vas a construir un sistema de evaluación de empleados.
Crea una función calcularBono(sueldo, aniosEnEmpresa) que devuelva el bono del empleado:
    Si tiene 5 años o más en la empresa, el bono es 15% del sueldo
    Si tiene entre 2 y 4 años, el bono es 10% del sueldo
    Si tiene menos de 2 años, el bono es 5% del sueldo 
*/
function calcularBono(sueldo, aniosEnEmpresa){
    let bono = 0;
    if(aniosEnEmpresa>=5){
        bono = sueldo * 0.15;
    }else if(aniosEnEmpresa>=2 && aniosEnEmpresa<=4){
        bono = sueldo * 0.10;
    }else if(aniosEnEmpresa<2){
        bono = sueldo * 0.05;
    }
    return bono;
}

/* 
Crea una arrow function esEmpleadoDestacado que reciba puntuacion (0 a 100) y devuelva true si es 90 o más, false si no. 
*/
const esEmpleadoDestacado = puntuacion => puntuacion>=90 ? true : false;

/* 
Crea una función clasificarEquipo(empleados) que reciba un array de objetos, donde cada objeto representa un empleado con nombre y puntuacion. 
La función debe:
    Recorrer el array con for...of
    Usar la función esEmpleadoDestacado que ya creaste para evaluar a cada uno
    Mostrar en consola: Nombre: destacado o Nombre: regular
*/

const clasificarEquipo = empleados => {
    for(const empleado of empleados){
        const respuestaEvaluada = esEmpleadoDestacado(empleado["puntuacion"]);
        const clasificacion = respuestaEvaluada ? "Destacado" : "Regular";
        console.log(`${empleado.nombre}: ${clasificacion}`);
    }
}

const equipo = [
    {nombre: "Laura", puntuacion: 95},
    {nombre: "Diego", puntuacion: 72},
    {nombre: "Sofía", puntuacion: 88},
    {nombre: "Martín", puntuacion: 91}
]
clasificarEquipo(equipo);

/*
Crea una función contarDestacados(empleados) que devuelva cuántos empleados del array son destacados (usando esEmpleadoDestacado internamente dentro de un bucle)
*/
const contarDestacados = empleados => {
    let contador = 0;
    for(const empleado of empleados){
        if(esEmpleadoDestacado(empleado["puntuacion"])){
            contador++;
        }
    }
    return contador;
}
const totalDestacados = contarDestacados(equipo);
console.log(`Total de empleados destacados: ${totalDestacados}`);

/* 
Llama a calcularBono con al menos dos ejemplos distintos y muestra el resultado en consola
*/
const bonoNumero1 = calcularBono(1500,3);
const bonoNumero2 = calcularBono(5925,8);
console.log(`El primer bono es: ${bonoNumero1}`);
console.log(`El segundo bono es: ${bonoNumero2}`);