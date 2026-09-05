/* Construye una ficha de un producto para una tienda online. 
Representa un producto con la siguiente información: nombre "Auriculares Bluetooth", precio 149.90, stock 25, y una categoría que a su vez tenga nombre "Audio" y un código "AUD-01".
*/
const producto = {
    nombre: "Auriculares Bluetooth",
    precio: 149.90,
    stock: 25,
    categoria: {
        nombre: "Audio",
        codigo: "AUD-01"
    }
};

/* Muestra el nombre del producto y el nombre de su categoría en un solo mensaje */
const nombreProducto = producto.nombre;
const nombreCategoriaProducto = producto.categoria.nombre;
console.log(`El nombre del producto es ${nombreProducto} y el nombre de categoria es ${nombreCategoriaProducto}`);

/* El producto acaba de recibir una rebaja: baja su precio a 129.90 */
producto.precio = 129.90;
console.log(`Precio actual: ${producto.precio}`);

/* Se vendieron 5 unidades: reduce el stock en esa cantidad */
producto.stock = producto.stock - 5;
console.log(`Stock actual: ${producto.stock}`);

/* Agrega una nueva característica al producto: que indique si tiene envío gratis (puedes decidir el valor) */
producto.deliveryFree = true;

/* Dota al producto de una acción propia que le permita informar si todavía tiene unidades disponibles (stock mayor a 0), y ejecútala */
producto.stokDisponible = function(){
    console.log(`${this.stock>0?`Hay unidades disponibles: ${this.stock}`:`Se necesita reponer el producto: ${this.stock}`}`);
}
producto.stokDisponible();

/* Obtén y muestra en consola todos los nombres de las características que tiene el producto actualmente */
Object.keys(producto).forEach(prod => console.log(`${prod}`));

/* Verifica si el producto tiene una característica relacionada a la marca, y muestra el resultado */
const existePropiedad = "marca" in producto;
console.log(`${existePropiedad?"Propiedad encontrada":"No existe la propiedad"}`);