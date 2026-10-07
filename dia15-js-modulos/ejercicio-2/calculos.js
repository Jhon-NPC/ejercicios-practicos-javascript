/* Módulo de lógica de precios */

export const planes = {
    basico: { nombre: "Básico", precioBase: 20 },
    pro: { nombre: "Pro", precioBase: 45 },
    premium: { nombre: "Premium", precioBase: 80 }
};

export const extras = {
    dominio: { nombre: "Dominio gratis", costo: 10 },
    soporte: { nombre: "Soporte prioritario", costo: 15 },
    backup: { nombre: "Backup diario", costo: 8 }
};

export function descuentoPorDuracion(meses) {
    if (meses >= 12) return 0.20;
    if (meses >= 6) return 0.10;
    return 0;
}

/* Función por defecto llamada calcularCotizacion, que reciba el plan elegido, la cantidad de meses, y un array con los nombres de los extras seleccionados, y devuelva el precio total (precio base × meses, con el descuento por duración aplicado, más el costo de cada extra elegido, sin descuento sobre los extras). */

export default function calcularCotizacion(planElegido, cantidadMeses, extrasSeleccionados){
    let resultadoPrecioMes = 0; 

    switch(planElegido){
        case "basico": 
            resultadoPrecioMes = planes.basico.precioBase * cantidadMeses;
            break;
        case "pro":
            resultadoPrecioMes = planes.pro.precioBase * cantidadMeses;
            break;
        case "premium":
            resultadoPrecioMes = planes.premium.precioBase * cantidadMeses;
            break;
        default:
            console.log("Plan no seleccionado");
    }

    const descuento = descuentoPorDuracion(cantidadMeses);
    const precioConDescuento = resultadoPrecioMes - (resultadoPrecioMes*descuento);

    let costosExtras = 0;
    for(const seleccionado of extrasSeleccionados){
        if(seleccionado in extras){
            costosExtras += extras[seleccionado].costo;
        }
        /* Otra forma de evaluar una propiedad existente
        if(extras.hasOwnProperty(seleccionado)){
            costosExtras += extras[seleccionado].costo;
        }
        */
    }

    const precioTotal = precioConDescuento + costosExtras;
    return precioTotal;
}