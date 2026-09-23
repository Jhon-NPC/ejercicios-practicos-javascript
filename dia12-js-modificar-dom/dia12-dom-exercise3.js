const empleados = [
    { nombre: "Renzo Torres", area: { nombre: "Producto", presupuesto: 15000 }, aniosExperiencia: 6, activo: true },
    { nombre: "Camila Rojas", area: { nombre: "Diseño", presupuesto: 8000 }, aniosExperiencia: 2, activo: true },
    { nombre: "Diego Salas", area: { nombre: "Producto", presupuesto: 15000 }, aniosExperiencia: 4, activo: false },
    { nombre: "Valeria Nuñez", area: { nombre: "Ventas", presupuesto: 12000 }, aniosExperiencia: 7, activo: true },
    { nombre: "Andrés Chávez", area: { nombre: "Diseño", presupuesto: 8000 }, aniosExperiencia: 1, activo: false }
];

/* Solo los empleados activos deben mostrarse en el panel. Los que no están activos ni siquiera deben construirse como tarjeta */
const panelEmpleados = document.getElementById("panel-empleados");

function empleadosActivos({nombre,area,aniosExperiencia,activo}){
    /* Cada tarjeta debe mostrar el nombre del empleado, el nombre de su área (que está anidada dentro del objeto), y sus años de experiencia */

    //Creación de la tarjeta empleado
    const tarjetaEmpleado = document.createElement("div");
    tarjetaEmpleado.setAttribute("class","tarjeta-empleado");

    //Creación del empleado: nombre
    const empleadoNombre = document.createElement("p");
    empleadoNombre.textContent = nombre;

    //Creación del empleado: area
    const areaNombre = document.createElement("p");
    areaNombre.textContent = area.nombre;

    //Creación del empleado: anios
    const empleadoAnios = document.createElement("p");
    empleadoAnios.textContent = aniosExperiencia;

    //Insertando los nuevos elementos
    panelEmpleados.appendChild(tarjetaEmpleado);
    tarjetaEmpleado.appendChild(empleadoNombre);
    tarjetaEmpleado.appendChild(areaNombre);
    tarjetaEmpleado.appendChild(empleadoAnios);

    /* Los empleados con 5 o más años de experiencia deben mostrar, dentro de su tarjeta, un distintivo de "Senior" insertado como una etiqueta HTML real */
    if(aniosExperiencia>=5){
        const senior = document.createElement("p");
        senior.innerHTML = "<strong>Senior</strong>";
        tarjetaEmpleado.appendChild(senior);
    }
}

empleados.forEach(empleado=> empleado.activo ? empleadosActivos(empleado) : console.log(`Empleado ${empleado.nombre} no activo`));

/* En el resumen, muestra: cuántos empleados activos hay, y el promedio de años de experiencia únicamente entre los empleados activos */
function resumenEmpleados(empleados){
    const parrafoResumen = document.getElementById("resumen-empleados");
    const sumaAnios = empleados.reduce( (acumulador,empleado)=> acumulador+empleado.aniosExperiencia ,0);
    const cantidadEmpleadosActivos = empleados.length
    parrafoResumen.textContent = `Hay ${cantidadEmpleadosActivos} empleados activos y en promedio tienen ${sumaAnios/cantidadEmpleadosActivos} años de experiencia`;
}

resumenEmpleados(empleados.filter(empleado=>empleado.activo));

/* Crea una copia del primer empleado del array (sin modificar el original) donde el presupuesto de su área se incremente en 2000. Muestra en consola el presupuesto original y el de la copia, para confirmar que el original no cambió */
const copiaPrimerElemento = {...empleados[0], area:{...empleados[0].area} };
copiaPrimerElemento.area.presupuesto+= 2000;
console.log(`El presuesto ORIGINAL del primer elemento es: ${empleados[0].area.presupuesto}`);
console.log(`El presuesto COPIA del primer elemento es: ${copiaPrimerElemento.area.presupuesto}`);

/* Crea una función que acepte cualquier cantidad de nombres como argumentos, y devuelva si todos esos nombres pertenecen a empleados que están activos (usando el array original de empleados). Pruébala una vez con nombres que deberían dar true y otra vez con una combinación que dé false */
function nombresEmpleadosActivos(...nombres){
    const todosSonActivos = nombres.every( nombre => empleados.some( empleado=> empleado.nombre === nombre && empleado.activo));
    console.log(`Los nombres ingresados ${todosSonActivos?"SI":"NO"} son trabajadores activos`);
}
nombresEmpleadosActivos("Renzo Torres","Camila Rojas","Valeria Nuñez");
nombresEmpleadosActivos("Renzo Torres","Diego Salas");

/* Una vez renderizado el panel, selecciona la primera tarjeta creada, y a partir de ella (sin usar querySelectorAll de nuevo ni acceder por índice a una lista), elimina la tarjeta que le sigue inmediatamente */
const primerTarjeta = document.querySelector(".tarjeta-empleado");
console.log(primerTarjeta.nextElementSibling.remove());