/* 
Vas a construir un sistema de evaluación de empleados.
Crea una función calcularBono(sueldo, aniosEnEmpresa) que devuelva el bono del empleado:
    Si tiene 5 años o más en la empresa, el bono es 15% del sueldo
    Si tiene entre 2 y 4 años, el bono es 10% del sueldo
    Si tiene menos de 2 años, el bono es 5% del sueldo 
*/
function calcularBono(sueldo, aniosEnEmpresa){
    const bono = 0;
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
        for(const clave in empleado){
            if(clave==="puntuacion"){
                const respuestaEvaluada = esEmpleadoDestacado(empleado[clave]);
                respuestaEvaluada ? "Destacado" : "Regular";
                console.log(`${empleado[clave]}`);
            }
        }
    }
}

const equipo = [
    {nombre: "Laura", puntuacion: 95},
    {nombre: "Diego", puntuacion: 72},
    {nombre: "Sofía", puntuacion: 88},
    {nombre: "Martín", puntuacion: 91}
]
clasificarEquipo(equipo);