/* Construye un procesador de datos de inscripción a un curso. */
const inscripcion = ["Marco Reyes", "marco@email.com", 27, "Lima"];
const estudiante = { nombre: "Valeria Soto", curso: "JavaScript", nivel: "Intermedio", precio: 250 };

/* Usa desestructuración de array para extraer nombreInscrito, emailInscrito, edadInscrito y ciudadInscrita desde inscripcion, y muéstralos en un mensaje */
const [nombreInscrito, emailInscrito, edadInscrito, ciudadInscrita] = inscripcion;
console.log(`Nombre: ${nombreInscrito}, Email: ${emailInscrito}, Edad: ${edadInscrito}, Ciudad: ${ciudadInscrita}`); 

/* Usa desestructuración de objeto para extraer nombre y curso desde estudiante, y muéstralos en un mensaje */
const {nombre, curso, nivel, precio} = estudiante;
console.log(`Estudiante: ${nombre}, Curso: ${curso}, Nivel: ${nivel}, Precio:${precio}`);

/* Usa desestructuración de objeto con renombrado para extraer precio desde estudiante, pero guárdalo en una variable llamada costoCurso */
const {precio: costoCurso} = estudiante;
console.log(`El precio del curso es: ${costoCurso}`);

/* Usa desestructuración de objeto con valor por defecto para extraer una propiedad descuento desde estudiante (que no existe), con un valor por defecto de 0 */
const {descuento = 0} = estudiante;
console.log(`El descuento del curso es: ${descuento}`);

/* Usa spread para crear una copia del objeto estudiante llamada estudianteActualizado, pero con el nivel cambiado a "Avanzado" */
const estudianteActualizado = {...estudiante, nivel: "Avanzado"};
console.log(`${Object.values(estudianteActualizado)}`);

/* Crea una función contarInscritos que use rest para aceptar cualquier cantidad de nombres como argumentos, y devuelva cuántos fueron pasados. Pruébala con al menos 3 nombres distintos */
const contarInscritos = (...nombres) =>{
    return nombres.length;
}
const contado = contarInscritos("Lorenzo","Pedro","Daniel","Rafael");
console.log(`Fueron pasados ${contado} nombres`);