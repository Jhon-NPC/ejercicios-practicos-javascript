/*
    Crea una ficha de perfil de un usuario con las siguientes condiciones:
    1. El usuario se llama Ana García, tiene 32 años y es de México
    2. Tiene una suscripción activa (true)
    3. Su descuento actual es de null (no tiene ninguno asignado)
    4. Tiene una variable ultimaCompra que todavía no tiene valor
    5. El saldo de su cuenta es 150.75

    Muestra todos los datos con console.log(), con un texto descriptivo
    Muestra el tipo de dato de cada variable con typeof
*/

const usuario = "Ana García";
const edadUsuario = 32;
const paisUsuario = 'México';
const tieneSuscripcion = true;
let descuento = null;
let ultimaCompra;
let saldoUsuario = 150.75;
console.log("Usuario: " + usuario + " Edad: " + edadUsuario + " País: " +paisUsuario + " Saldo: " +saldoUsuario + " Descuento: " +descuento);
console.log(typeof usuario, typeof edadUsuario, typeof paisUsuario, typeof tieneSuscripcion, typeof descuento, typeof ultimaCompra, typeof saldoUsuario);