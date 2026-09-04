/* Construye una ficha de perfil de usuario para una red social. */
/* Crea un objeto usuario con las propiedades: nombre, edad, ciudad, y una propiedad anidada contacto que contenga email y telefono */
const usuario = {
    nombre: "Pedro",
    edad: 32,
    ciudad: "Lima",
    contacto: {
        email: "correo@gmail.com",
        telefono: 987654321
    }
};

/* Accede a nombre con notación de punto, y a edad con notación de corchetes, mostrando ambos en consola */
const nombre = usuario.nombre;
const edad = usuario["edad"];
console.log(`El nombre del usuario es ${nombre} y su edad es ${edad}`);

/* Agrega una nueva propiedad activo con valor true */
usuario.activo = true;

/* Modifica el valor de ciudad a una ciudad distinta a la que pusiste inicialmente */
usuario.ciudad = "Cuzco";

/* Crea un método presentarse dentro del objeto usuario (usando function() {}, no arrow function) que muestre en consola: "Hola, soy [nombre] y vivo en [ciudad]", usando this para acceder a esos valores. Luego llama a ese método */
usuario.presentarse = function() {
    return `Hola, soy ${this.nombre} y vivo en ${this.ciudad}`;
}
console.log(usuario.presentarse());

/* Usa Object.keys() para mostrar todas las claves del objeto usuario */
Object.keys(usuario).forEach(propiedad => console.log(`${propiedad}`));

/* Usa hasOwnProperty() para verificar si el objeto tiene una propiedad llamada "pais", y muestra el resultado */
const existePropiedad = usuario.hasOwnProperty("pais");
console.log(`${existePropiedad?"Si":"No"} existe la propiedad pais`);

/* Accede al email dentro de la propiedad anidada contacto, y muéstralo en consola */
const email = usuario.contacto.email;
console.log(`El email es ${email}`);