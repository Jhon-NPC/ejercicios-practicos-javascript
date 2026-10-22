/* 	Una función de descuento que, para un precio, devuelve precio - (precio * porcentaje / 100)	
Si porcentaje no es un número: TypeError con el mensaje El porcentaje debe ser un número. Si es menor a 0 o mayor a 100: RangeError con el mensaje El porcentaje debe estar entre 0 y 100 */

export function crearDescuento(porcentaje){
    if(typeof porcentaje !== "number" || isNaN(porcentaje)){
        throw new TypeError("El porcentaje debe ser un número");
    }
    if(porcentaje<0 || porcentaje > 100){
        throw new RangeError("El porcentaje debe estar entre 0 y 100");
    }
    return function(precio){
        return precio - (precio*porcentaje/100);
    }
};

/* Una función de descuento que aplica el porcentaje solo si el precio recibido es mayor o igual a minimo; si no, devuelve el precio sin cambios. Debe reutilizar crearDescuento
Si minimo no es un número: TypeError con el mensaje El monto mínimo debe ser un número. El porcentaje se valida con las mismas reglas de crearDescuento */

export function crearDescuentoCondicional(minimo, porcentaje){
    if(typeof minimo !== "number" || isNaN(porcentaje)){
        throw new TypeError("El monto mínimo debe ser un número");
    }
    const descuentoBase = crearDescuento(porcentaje);
    return function(precio){
        if(precio>=minimo){
            return descuentoBase(precio);
        }
        return precio;
    }
};

/* Una función de descuento que aplica en orden todos los descuentos recibidos, pasando el resultado de cada uno al siguiente. Sin descuentos, devuelve el precio sin cambios
Si algún elemento recibido no es una función: TypeError con el mensaje Todos los descuentos deben ser funciones */

export function combinarDescuentos(...descuentos){
    for(const d of descuentos) {
        if(typeof d !== "function"){
            throw new TypeError("Todos los descuentos deben ser funciones");
        };
    }

    return function(precio){
        let resultado = precio;
        for (const descuento of descuentos) {
            resultado = descuento(precio);
        }
        return resultado;
    }
};