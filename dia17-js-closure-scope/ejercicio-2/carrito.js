export default function crearCarrito(catalogo, aplicarDescuento){
    
    /* Si no se recibe aplicarDescuento, por defecto no se descuenta nada. 
    Si se recibe algo que no es una función: TypeError con el mensaje El descuento debe ser una función */
    
    if(aplicarDescuento!==undefined && typeof aplicarDescuento !== "function"){
        throw new TypeError("El descuento debe ser una función");
    };

    const calcularDescuento = aplicarDescuento ? aplicarDescuento : (total) => total ;
    const items = [];

    return {

        /* Agrega unidades de un producto (si ya estaba, las suma a la línea existente).
        Devuelve la cantidad total de ese producto que hay ahora en el carrito */

        agregar: function(id,cantidad){

            if(typeof cantidad !== "number"){
                throw new TypeError("La cantidad debe ser un número");
            }
            if(cantidad<=0){
                throw new RangeError("La cantidad debe ser mayor a 0");
            }
            if(!Number.isInteger(cantidad)){
                throw new RangeError("La cantidad debe ser un número entero");
            }
            const producto = catalogo.find( c => c.id === id);
            if(producto === undefined){
                throw new Error(`El producto con id ${id} no existe`);
            }

            const item = items.find( i => i.id === id);

            if(cantidad+item.cantidad > producto.stock){
                throw new Error(`Stock insuficiente para "${producto.nombre}"`);
            }

            if(item){
                item.cantidad += cantidad;
            }else{
                items.push({id,cantidad});
            };
            return items.find( i => i.id === id).cantidad;
        },
        
        /* Quita del carrito toda la línea de ese producto. Devuelve la cantidad que había */

        quitar: function(id){

            /* Con un id que no está en el carrito: Error con el mensaje El producto con id X no está en el carrito */

            if(!items.some(i => i.id === id)){
                throw new Error(`El producto con id ${id} no está en el carrito`);
            };

            let index = items.findIndex(i => i.id === id);
            if(index !== -1){
                const cantidadPrevia = items[index].cantidad;
                items.splice(index,1);
                return cantidadPrevia;
            }
            return 0;
        },

        /* Devuelve un array nuevo con un objeto { id, nombre, cantidad, subtotal } por cada línea, en el orden en que se agregaron.
        Modificar lo que devuelve no debe afectar al carrito */

        ObtenerItems: function(){
            return items.map( item => {
                const producto = catalogo.find(c => c.id === item.id);
                return {
                    id: item.id,
                    nombre: producto.nombre,
                    cantidad: item.cantidad,
                    subtotal: item.cantidad * producto.precio
                };
            });
        },

        /* Devuelve el stock del producto menos lo que ya está en el carrito */

        stockDisponible: function(id){

            /* Con un id que no está en el catálogo */
            if(!catalogo.some( c => c.id === id)){
                throw new Error(`El producto con id ${id} no existe`);
            }

            const producto = catalogo.find(c => c.id === id);
            const cantidadEnCarrito = items.find(i => i.id === id).cantidad;
            return producto.stock - cantidadEnCarrito;
        },

        /* Suma los subtotales y aplica el descuento sobre esa suma. Devuelve un número redondeado a 2 decimales (carrito vacío: 0) */

        calcularTotal: function(){
            if(items.length===0) return 0;
            
            const sumaSubTotal = items.reduce((total,item) => {
                const producto = catalogo.find(c => c.id === item.id);
                return total + (producto.precio * item.cantidad );
            }, 0);

            const totalConDescuento = calcularDescuento(sumaSubTotal);
            return Number(totalConDescuento.toFixed(2));
        },

        /* Quita todas las líneas */
        vaciar: items.length = 0
    }
};