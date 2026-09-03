/* Desarrolla un panel de control de una biblioteca. */
const libros = [
    { titulo: "Cien años de soledad", paginas: 471, disponible: true },
    { titulo: "1984", paginas: 328, disponible: false },
    { titulo: "El principito", paginas: 96, disponible: true },
    { titulo: "Rayuela", paginas: 635, disponible: false },
    { titulo: "Ficciones", paginas: 174, disponible: true },
    { titulo: "La casa de los espíritus", paginas: 512, disponible: false }
];

/* Obtén un array con únicamente los títulos de todos los libros */
const librosTitulos = libros.map(libro=>libro.titulo);
librosTitulos.forEach(libro=>console.log(`El título del libro es: ${libro}`));

/* Obtén un array solo con los libros que están disponibles actualmente */
const librosDisponibles = libros.filter(libro=>libro.disponible===true);
librosDisponibles.forEach(libro=>console.log(`Libro disponible: ${libro.titulo}`));

/* Calcula la cantidad total de páginas sumando todos los libros de la biblioteca */
const sumaTotalPaginas = libros.reduce((acumulador,libro)=>acumulador+libro.paginas,0);
console.log(`La suma total de las páginas es: ${sumaTotalPaginas}`);

/* Encuentra el primer libro que tenga más de 500 páginas */
const libroBusqueda500Paginas = libros.find(libro=>libro.paginas>500);
console.log(`El primer libro que tiene más de 500 páginas es: ${libroBusqueda500Paginas.titulo}`);

/* Verifica si existe algún libro con menos de 100 páginas */
const libroMenor100Paginas = libros.some(libro=>libro.paginas<100);
console.log(`${libroMenor100Paginas?"Si":"No"} existe algun libro menor a 100 páginas`);

/* Verifica si todos los libros de la biblioteca están disponibles */
const librosTodosDisponibles = libros.every(libro=>libro.disponible===true);
console.log(`Todos los libros ${librosTodosDisponibles?"SI":"NO"} estan disponibles`);

/* Obtén un array con el título de cada libro seguido de la cantidad de páginas, con este formato exacto: "1984 (328 páginas)" */
const libroNuevoArray = libros.map(libro=>`${libro.titulo} (${libro.paginas} páginas)`);
console.log(libroNuevoArray);