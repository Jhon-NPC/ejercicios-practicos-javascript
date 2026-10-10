/* Debes exportar con exportación nombrada: 
Una constante CATEGORIAS_PERMITIDAS, con este valor exacto: ["accesorios", "audio", "computo"] 
Una función validarProducto(producto) que lanza un error ante el primer problema que encuentre, revisando en este orden, y devuelve true si el producto es válido */


/* | # | Condición | Tipo de error | Mensaje exacto |
| --- | --- | --- | --- |
| 1 | El elemento recibido es null | TypeError | El elemento no es un producto válido |
| 2 | El nombre no es un texto, o queda vacío al quitarle los espacios de los extremos | Error | El nombre del producto no es válido |
| 3 | El precio no es un número | TypeError | El precio debe ser un número |
| 4 | El precio es menor o igual a 0 | RangeError | El precio debe ser mayor a 0 |
| 5 | El stock no es un número | TypeError | El stock debe ser un número |
| 6 | El stock es menor a 0 | RangeError | El stock no puede ser negativo |
| 7 | La categoría no está en CATEGORIAS_PERMITIDAS (comparación exacta, sin cambiar mayúsculas) | Error | La categoría "X" no está permitida |*/

export const categoriasPermitidas = ["accesorios", "audio", "computo"];
export function validarProducto(producto){

    if(producto === null){
        throw new TypeError("El elemento no es un producto válido");
    }
    if(typeof producto.nombre !== "string" || producto.nombre.trim() === "" || producto.nombre === null){
        throw new Error("El nombre del producto no es válido");
    }
    if(isNaN(parseFloat(producto.precio))){
        throw new TypeError("El precio debe ser un número");
    }
    if(producto.precio<=0){
        throw new RangeError("El precio debe ser mayor a 0");
    }
    if(isNaN(parseInt(producto.stock))  || !Number.isInteger(Number(producto.stock))){
        throw new TypeError("El stock debe ser un número entero");
    }
    if(Number(producto.stock)<0){
        throw new RangeError("El stock no puede ser negativo");
    }
    if(!categoriasPermitidas.some(c => (producto.categoria === c)) ){
        throw new Error(`La categoría ${producto.categoria} no está permitida`);
    }
    return true;
}