/* Vas a construir una ficha de un empleado para un sistema de recursos humanos. */
/* Necesitas representar a un empleado con esta información: nombre "Carla Mendoza", puesto "Diseñadora UX", salario 3200, y un departamento que a su vez tenga nombre "Producto" y un jefe a cargo llamado "Renzo Torres". */
const empleado = {
    nombre: "Carla Mendoza",
    puesto: "Diseñadora UX",
    salario: 3200,
    departamento: {
        nombre: "Producto",
        jefe: "Renzo Torres"
    }
};

/* Muestra el nombre del empleado junto con el nombre de su jefe a cargo en un solo mensaje */
console.log(`Nombre: ${empleado.nombre} y Jefe: ${empleado.departamento.jefe}`);

/* La empleada recibió un aumento: incrementa su salario en 400 */
empleado.salario = empleado.salario+400;
console.log(`Nuevo salario: ${empleado.salario}`);

/* Cambió de puesto: actualiza su puesto a "Diseñadora UX Senior" */
empleado.puesto = "Diseñadora UX Senior";
console.log(`Nuevo puesto: ${empleado.puesto}`);

/* Agrega una nueva característica que indique desde qué año trabaja en la empresa (puedes decidir el valor) */
empleado.anioComienzo = 2024;
console.log(`Trabaja desde el año: ${empleado.anioComienzo}`);

/* Dota al empleado de una acción propia que le permita informar si su salario supera los 3000 (debe mostrar un mensaje distinto según el resultado), y ejecútala */
empleado.sueldoMayor= function(){
    console.log(`${this.salario>3000?"El salario supera los 3000":"El salario no es mayor a 3000"}`);
}
empleado.sueldoMayor();

/* Obtén y muestra en consola todos los valores (no los nombres) de las características que tiene el empleado actualmente */
Object.values(empleado).forEach(prop => console.log(`${prop}`));

/* Verifica si el empleado tiene una característica relacionada al correo electrónico, y muestra el resultado */
const resultado = empleado.hasOwnProperty("email");
console.log(`El empleado${resultado?" ":" NO "}tiene la característica de correo electrónico`) ;