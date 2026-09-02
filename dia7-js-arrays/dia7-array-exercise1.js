/* Vas a construir un gestor de lista de tareas pendientes (To-Do List) */
const tareas = ["Comprar víveres", "Estudiar JavaScript", "Llamar al dentista"]; 

/* Muestra la cantidad de tareas que hay actualmente en la lista*/
console.log(`${tareas.length} tareas`);

/* Agrega una nueva tarea: "Pagar servicios" */
tareas.push("Pagar servicios");

/* Agrega una tarea urgente al inicio de la lista: "Enviar informe" */
tareas.unshift("Enviar informe");

/* Muestra la lista completa de tareas ya actualizada numerando cada tarea así: 1. Enviar informe */
let contador = 0;
for(const tarea of tareas){
    contador+=1
    console.log(`${contador}. ${tarea}`);
}

/* Verifica si la tarea "Estudiar JavaScript" sigue en la lista, y muestra un mensaje según el resultado */
const estudiarJavaScript = "Estudiar JavaScript"
const evaluarInclude = tareas.includes(estudiarJavaScript);
console.log(`${estudiarJavaScript}: ${evaluarInclude?"Pendiente por realizar":"Tarea finalizada"}`);

/* Simula que completaste la primera tarea de la lista: quitala, y guarda en una variable la tarea que fue eliminada. Muestra un mensaje: "Tarea completada: Enviar informe" */
const tareaTerminada = tareas.shift();
console.log(`Tarea completada: ${tareaTerminada}`);

/* Muestra todas las tareas restantes en una sola línea, separadas por " | " */
const formatoString = tareas.join(" | ");
console.log(formatoString);

/* Encuentra en qué posición está la tarea "Pagar servicios" dentro de la lista actual */
const posicionTarea = tareas.indexOf("Pagar servicios");
console.log(`Se encuentra en la posicion: ${posicionTarea}`)