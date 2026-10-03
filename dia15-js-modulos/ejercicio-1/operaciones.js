export const IVA = 0.18;

export function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

export function aplicarDescuento(precio, porcentaje) {
    return precio - (precio * (porcentaje / 100));
}