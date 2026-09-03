/* Costruye un analizador de calificaciones de un curso online. */
const estudiantes = [
    { nombre: "Laura", nota: 18 },
    { nombre: "Diego", nota: 9 },
    { nombre: "Sofía", nota: 14 },
    { nombre: "Martín", nota: 6 },
    { nombre: "Valeria", nota: 20 },
    { nombre: "Andrés", nota: 11 }
];

/* Obtén un array con únicamente los nombres de todos los estudiantes */
const arrayNombre = estudiantes.map(estudiante => estudiante.nombre);
console.log(arrayNombre);

/* Obtén un array solo con los estudiantes que aprobaron (nota de 11 a más) */
const estudiantesAprobados = estudiantes.filter(estudiante=>estudiante.nota>=11);
estudiantesAprobados.forEach(estudiante=>console.log(`Estudiante ${estudiante.nombre} aprobado con ${estudiante.nota}`));

/* Calcula el promedio general de notas de todo el curso */
const notaTotal = estudiantes.reduce((acumulador,estudiante)=>acumulador+estudiante.nota, 0);
const promedioGeneralCurso = notaTotal/estudiantes.length;
console.log(`El promedio general de notas del curso es: ${promedioGeneralCurso}`);

/* Encuentra al primer estudiante que tenga una nota perfecta (20) */
const notaPerfecta = estudiantes.find(estudiante=>estudiante.nota===20);
console.log(`El estudiante ${notaPerfecta.nombre} tiene la nota perfecta de ${notaPerfecta.nota}`);

/* Verifica si hay algún estudiante desaprobado con una nota menor a 7 */
const existeEstudianteDesaprobado = estudiantes.some(estudiante=>estudiante.nota<7);
console.log(`${existeEstudianteDesaprobado?"Si":"No"} hay un estudiante desaprobado con nota menor a 7`);

/* Verifica si todos los estudiantes del curso aprobaron */
const aprobaronTodos = estudiantes.every(estudiante=>estudiante.nota>=11);
console.log(`${aprobaronTodos?"Si":"No"} aprobaron todos!`);