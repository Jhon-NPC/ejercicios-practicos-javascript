/*
    Sistema de acceso a una plataforma de streaming.

    Declara estas variables:
    nombreUsuario — string con un nombre
    edad — number
    suscripcionActiva — boolean
    planUsuario — string: puede ser "basico", "estandar" o "premium"
    contenidoRestringido — boolean — indica si el contenido es solo para mayores de 18

    Luego aplica estas reglas:
    Si el usuario es menor de 13 años, muestra "Acceso denegado, se requiere autorización de un adulto" y no sigas evaluando
    Si tiene entre 13 y 17 años y el contenido es restringido, muestra "Contenido no disponible para tu edad" y no sigas evaluando
    Si puede acceder, usa un switch con planUsuario para determinar la calidad de video:
        "basico" → "480p"
        "estandar" → "1080p"
        "premium" → "4K"
        cualquier otro → "Plan no reconocido"
    Si la suscripción no está activa, la calidad baja automáticamente a "144p" sin importar el plan
    Usa un ternario para mostrar si el usuario puede descargar contenido — solo pueden los de plan "premium" con suscripción activa
    Muestra el resultado

*/

const nombreUsuario = "Diego";
const edadUsuario = 33;
const suscripcionActiva = true;
const planUsuario = "premium"; // basico, estandar o premium
let contenidoRestringido = true; 
let mensajeEvaluarEdad = null;
let calidadVideo = "0p";
let opcionDescargar = "No";

if(edadUsuario<13){
    mensajeEvaluarEdad = "Acceso denegado, se requiere autorización de un adulto";
}else if(edadUsuario>=13 && edadUsuario<=17 && contenidoRestringido){
    mensajeEvaluarEdad = "Contenido no disponible para tu edad";
}else{
    mensajeEvaluarEdad = "Si";

    if(!suscripcionActiva){
        calidadVideo = "144p";
    }else{
        switch(planUsuario){
            case "basico":
                calidadVideo = "480p";
                break;
            case "estandar":
                calidadVideo = "1080p";
                break;
            case "premium":
                calidadVideo = "4K";
                break;
            default:
                calidadVideo = "Plan no reconocido";
        }
    }

    opcionDescargar = planUsuario === "premium" && suscripcionActiva ? "Si" : "No";
}

console.log(`Usuario: ${nombreUsuario}`);
console.log(`Edad permitida: ${mensajeEvaluarEdad}`);
console.log(`Calidad de video: ${calidadVideo}`);
console.log(`Puede descargar: ${opcionDescargar}`);