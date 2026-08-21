/* 
    Vas a construir un procesador de calificaciones de un salón de clases.
    Declara este array:
    const notas = [12, 8, 15, 19, 6, 14, 10, 20, 5, 17];

    Luego aplica estas reglas:
    Usa for...of para recorrer el array y clasificar cada nota:
        0 a 10 → "Desaprobado"
        11 a 15 → "Aprobado"
        16 a 20 → "Excelente"
    Muestra cada resultado así: Nota 12: Aprobado
*/
const notas = [12, 8, 15, 19, 6, 14, 10, 20, 5, 17];
for(const nota of notas){
    if(nota>=0 && nota<=10){
        console.log(`Nota ${nota}: Desaprobado`);
    }else if(nota>=11 && nota<=15){
        console.log(`Nota ${nota}: Aprobado`);
    }else if(nota>=16 && nota<=20){
        console.log(`Nota ${nota}: Excelente`);
    }
}

/* Usa un for clásico (con contador) para sumar todas las notas del array. Al final, muestra el promedio del salón */
let suma = 0;
for(let i=0; i<notas.length; i++){
    suma = suma + notas[i];
    if(i===notas.length-1){
        const prom = suma/notas.length;
        console.log(`El promedio del salón es: ${prom}`);
    }
}

/* Usa un while para encontrar la primera nota desaprobada (menor a 11) del array y muestra en qué posición está. Si no encuentra ninguna, debe indicarlo */
let i = 0;
let encontrada = false;
while(i < notas.length){
    if(notas[i]<11){
        console.log(`Primera nota desaprobada: ${notas[i]} en la posición ${i}`);
        encontrada = true;
        break;
    }
    i++;
}
if(!encontrada){
    console.log("No se encontro nota desaprobada");
}

/* Usa break dentro de un for para detener el recorrido apenas encuentres una nota de 20 (nota perfecta), mostrando un mensaje especial de felicitación antes de salir */

for(const nota of notas){
    if(nota===20){
        console.log(`Felicitaciones por haber obtenido la nota ${nota}`);
        break;
    }
}

/* Usa continue dentro de un for para mostrar únicamente las notas aprobadas (11 o más), saltando las desaprobadas */
for(const nota of notas){
    if(nota<11){
        continue;
    }
    console.log(`Notas aprobatorias ${nota}`);
}

/* Simula un sistema de intentos de acceso con do while*/
let intento = 1;
const claveCorrecta = 1234;
let claveIngresada = 1230;
let accesoConcedido = false;
do{
    console.log(`Intento ${intento}: Verificando clave...`);
    if(claveCorrecta !== claveIngresada){
        console.log(`Clave incorrecta: ${claveIngresada}`)
    }
    if(claveCorrecta === claveIngresada){
        console.log("Acceso concedido");
        accesoConcedido = true;
    }
    intento++;
    claveIngresada++;
}while(!accesoConcedido);

/* Recorre los datos de un producto, muestra los valores de cada uno, si la clave es "stock" y su valor es menor a 10 entonces muestra el mensaje "Stock bajo" */

const producto = {
    nombre: "Laptop",
    precio: 2500,
    stock: 8,
    categoria: "Tecnología"
};
for(const clave in producto){
    console.log(`La clave ${clave} tiene como valor ${producto[clave]}`);
    if(clave==="stock" && producto[clave]<10){
        console.log("Stock bajo")
    }
}