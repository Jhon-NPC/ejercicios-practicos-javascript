/* Módulo de validación */

/* Crea una exportación nombrada validarNombreCliente(nombre), que devuelva true/false según si no está vacío */
function validarNombreCliente(nombre){
    const estaVacio = nombre.trim()==="" ? true : false;
    return estaVacio;
}

/* Crea una exportación nombrada validarEmailCliente(email), usando una expresión regular */
function validarEmailCliente(email){
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]$/;
    return patron.test(email.trim());
}

/* Crea una exportación nombrada validarMeses(meses), que devuelva true/false según si es un número entre 1 y 24*/
function validarMeses(meses){
    const patron = /^\d{1-24}$/;
    return patron.test(meses);
}

export {validarNombreCliente, validarEmailCliente, validarMeses};