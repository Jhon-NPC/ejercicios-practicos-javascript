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
    contenidoRestringido = false;
}else if(edadUsuario>=13 && edadUsuario<=17){
    mensajeEvaluarEdad = "Contenido no disponible para tu edad";
    contenidoRestringido = false;
}else{
    mensajeEvaluarEdad = "Si";

    if(contenidoRestringido){
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
    }

    opcionDescargar = planUsuario === "premium" && suscripcionActiva ? "Si" : "No";
}



console.log(`Usuario: ${nombreUsuario}`);
console.log(`Edad permitida: ${mensajeEvaluarEdad}`);
console.log(`Calidad de video: ${calidadVideo}`);
console.log(`Puede descargar: ${opcionDescargar}`);