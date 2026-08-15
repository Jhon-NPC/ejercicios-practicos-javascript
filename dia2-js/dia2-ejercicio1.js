/* 
    Clasificador de candidatos para una empresa.
    Declara las variables:
        nombre — string con un nombre
        edad — number entre 20 y 45
        aniosExperiencia — number entre 0 y 10
        tieneCertificacion — boolean

    Luego aplica estas reglas:
        Usa un ternario para mostrar si puede postular o no según su edad (mínimo 18 años)
        
        Si puede postular, usa if/else if/else para clasificarlo:
            Si tiene 3 o más años de experiencia Y certificación → "Candidato SENIOR"
            Si tiene 3 o más años de experiencia O certificación → "Candidato SEMI-SENIOR"
            Si no cumple ninguna → "Candidato JUNIOR"

        Usa un switch con aniosExperiencia para mostrar su nivel:
            0 → "Sin experiencia"
            1 o 2 → "Experiencia inicial"
            3, 4 o 5 → "Experiencia media"
            cualquier otro → "Experiencia avanzada"
*/

const nombreCandidato = "Martin";
const edadCandidato = 32;
const aniosExperienciaCandidato = 4;
const tieneCertificacionCandidato = true;
let mensajeEvaluarEdad = null
let candidatoClasificacion = null;
let candidatoNivel = null;

const evaluarEdad = edadCandidato>=18 ? true : false;
if(evaluarEdad){
    mensajeEvaluarEdad = "Usted tiene el requerimiento de edad para postular";
    if(aniosExperienciaCandidato>=3 && tieneCertificacionCandidato){
        candidatoClasificacion = "Candidato Senior";
    }else if(aniosExperienciaCandidato>=3 || tieneCertificacionCandidato){
        candidatoClasificacion = "Candidato Semi Senior";
    }else{
        candidatoClasificacion = "Candidato Junior";
    }
}else{
    mensajeEvaluarEdad = "La edad mínima para postular es de 18 años";
}

switch (aniosExperienciaCandidato){
    case 0:
        candidatoNivel = "Sin experiencia";
        break;
    case 1:
    case 2:
        candidatoNivel = "Experiencia inicial";
        break;
    case 3:
    case 4:
    case 5:
        candidatoNivel = "Experiencia media";
        break;
    default: 
        candidatoNivel = "Experiencia avanzada";
}

console.log(`${mensajeEvaluarEdad}. Ademas, usted es un ${candidatoClasificacion} y usted tiene ${candidatoNivel}`);