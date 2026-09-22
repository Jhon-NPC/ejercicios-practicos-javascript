const empleados = [
    { nombre: "Renzo Torres", area: { nombre: "Producto", presupuesto: 15000 }, aniosExperiencia: 6, activo: true },
    { nombre: "Camila Rojas", area: { nombre: "Diseño", presupuesto: 8000 }, aniosExperiencia: 2, activo: true },
    { nombre: "Diego Salas", area: { nombre: "Producto", presupuesto: 15000 }, aniosExperiencia: 4, activo: false },
    { nombre: "Valeria Nuñez", area: { nombre: "Ventas", presupuesto: 12000 }, aniosExperiencia: 7, activo: true },
    { nombre: "Andrés Chávez", area: { nombre: "Diseño", presupuesto: 8000 }, aniosExperiencia: 1, activo: false }
];

/* Solo los empleados activos deben mostrarse en el panel. Los que no están activos ni siquiera deben construirse como tarjeta */
/* Cada tarjeta debe mostrar el nombre del empleado, el nombre de su área (que está anidada dentro del objeto), y sus años de experiencia */
/* Los empleados con 5 o más años de experiencia deben mostrar, dentro de su tarjeta, un distintivo de "Senior" insertado como una etiqueta HTML real */
/* En el resumen, muestra: cuántos empleados activos hay, y el promedio de años de experiencia únicamente entre los empleados activos */
/* Crea una copia del primer empleado del array (sin modificar el original) donde el presupuesto de su área se incremente en 2000. Muestra en consola el presupuesto original y el de la copia, para confirmar que el original no cambió */
/* Crea una función que acepte cualquier cantidad de nombres como argumentos, y devuelva si todos esos nombres pertenecen a empleados que están activos (usando el array original de empleados). Pruébala una vez con nombres que deberían dar true y otra vez con una combinación que dé false */
/* Una vez renderizado el panel, selecciona la primera tarjeta creada, y a partir de ella (sin usar querySelectorAll de nuevo ni acceder por índice a una lista), elimina la tarjeta que le sigue inmediatamente */