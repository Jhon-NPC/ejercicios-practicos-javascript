const tareas = [
    { id: 1, texto: "Comprar víveres", prioridad: "media", completada: false },
    { id: 2, texto: "Estudiar JavaScript", prioridad: "alta", completada: true },
    { id: 3, texto: "Llamar al dentista", prioridad: "baja", completada: false }
];

/* Crea una función que recorra el array tareas y construya dinámicamente, dentro de <div id="lista-tareas">, un elemento por cada una, mostrando su texto. Las tareas con prioridad "alta" deben distinguirse visualmente de las demás, y las que están completadas deben distinguirse también, de una forma distinta a la de prioridad, para que ambas condiciones sean reconocibles a la vez si se dan juntas */
const listaTareas = document.getElementById("lista-tareas");

function crearTareas(tareas){
    for(const tarea of tareas){
        crearTarjetaPorTarea(tarea);
    }
};

function crearTarjetaPorTarea(tarea){
    //Creando la tarjeta y los textos de la tarea 
    const tarjetaTarea = document.createElement("div");
    const textoTarea = document.createElement("p");
    const prioridadTarea = document.createElement("p");
    const completadaTarea = document.createElement("p");

    //Agregando clases para modificar el estilo
    textoTarea.setAttribute("id",tarea.texto);
    textoTarea.setAttribute("class","nombre-tarea");
    tarjetaTarea.setAttribute("class","tarjeta");
    tarjetaTarea.setAttribute("id",`tarjeta-tarea-${tarea.id}`);
    switch(tarea.prioridad){
        case "baja": prioridadTarea.classList.add("prioridad-baja");
            break;
        case "media": prioridadTarea.classList.add("prioridad-media");
            break;
        case "alta": prioridadTarea.classList.add("prioridad-alta");
            break;
        default:
            console.log(`Prioridad no encontrada: ${tarea.prioridad}`);
    };

    if(tarea.completada){
        tarjetaTarea.classList.add("completada-true");
        prioridadTarea.classList.add("completada-true");
    }else{
        tarjetaTarea.classList.add("completada-false");
        prioridadTarea.classList.add("completada-false");
        completadaTarea.classList.add("completada-false-texto");
    }

    //Insertando la tarjeta y contenido de tarea al dom
    textoTarea.textContent = tarea.texto;
    prioridadTarea.textContent = tarea.prioridad;
    completadaTarea.textContent = tarea.completada? "Completado":"¡Pendiente!";
    listaTareas.appendChild(tarjetaTarea);
    tarjetaTarea.appendChild(textoTarea);
    tarjetaTarea.appendChild(prioridadTarea);
    tarjetaTarea.appendChild(completadaTarea);

    /* Cada tarea creada debe tener un evento de clic que alterne su estado entre completada y pendiente — este cambio debe reflejarse tanto en el array de datos como en la tarjeta correspondiente, identificando sobre cuál tarea se hizo clic a través de la información que trae el propio evento, sin volver a buscarla en el DOM */

    const btnEstado = document.createElement("button");
    btnEstado.setAttribute("type","button");
    btnEstado.textContent = !tarea.completada?"Finalizar tarea":"Reiniciar tarea";
    tarjetaTarea.appendChild(btnEstado);

    btnEstado.addEventListener("click", (evento)=>{
        tarea.completada = !tarea.completada;
        completadaTarea.textContent = tarea.completada ? "Completado":"¡Pendiente!";
        btnEstado.textContent = !tarea.completada?"Finalizar tarea":"Reiniciar tarea";
        console.log(`La tarea ${evento.target.parentElement.children[0].textContent} ha sufrido un cambio.`)
        actualizarResumen();

        if(tarea.completada){
            tarjetaTarea.classList.toggle("completada-false");
            prioridadTarea.classList.toggle("completada-false");
            completadaTarea.classList.toggle("completada-false-texto");
            tarjetaTarea.classList.add("completada-true");
            prioridadTarea.classList.add("completada-true");
        }else{
            tarjetaTarea.classList.toggle("completada-true");
            prioridadTarea.classList.toggle("completada-true");
            tarjetaTarea.classList.add("completada-false");
            prioridadTarea.classList.add("completada-false");
            completadaTarea.classList.add("completada-false-texto");
        }
    });
}
crearTareas(tareas);

/* Debajo de la lista, muestra un resumen con el total de tareas, cuántas están completadas, y cuántas de las pendientes son de prioridad alta. Este resumen debe recalcularse automáticamente cada vez que algo cambie en los datos */

const resumenTareas = document.getElementById("resumen-tareas");
function actualizarResumen(){
    let cantidadTareasCompletadas = tareas.reduce((acumulador,tarea)=> acumulador+(tarea.completada?1:0) ,0);
    let cantidadTareasPendientesAlta = tareas.reduce((acumulador,tarea)=> acumulador+(tarea.prioridad==="alta" && tarea.completada===false ? 1: 0) ,0);
    resumenTareas.innerHTML = `Total tareas: ${tareas.length} | Tareas completadas: ${cantidadTareasCompletadas} | Tareas pendientes con alta prioridad: ${cantidadTareasPendientesAlta}`;
}
actualizarResumen();

/* Al enviar el formulario, agrega una nueva tarea al array (generando su id dinámicamente a partir de las tareas existentes, sin asumir un número fijo), tomando el texto y la prioridad seleccionada, y renderízala de inmediato sin recargar la página. Los campos deben quedar limpios después de agregar la tarea */
const formulario = document.getElementById("form-tarea");

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    agregarTarea();
    formulario.reset();
});

function agregarTarea(){
    const tareaValorTexto = document.getElementById("input-tarea").value;
    const tareaValorPrioridad = document.getElementById("select-prioridad").value;
    const ultimaIdTarea = (tareas[tareas.length-1].id)+1;
    tareas.push({id: ultimaIdTarea, texto: tareaValorTexto, prioridad: tareaValorPrioridad, completada: false});
    crearTarjetaPorTarea(tareas.find(tarea=>tarea.id===ultimaIdTarea));
    actualizarResumen();
}

/* Mientras el usuario escribe en el buscador, deben permanecer visibles únicamente las tareas cuyo texto contenga lo escrito (sin importar mayúsculas o minúsculas) — las demás deben ocultarse visualmente sin eliminarse del array de datos. Si el campo de búsqueda queda vacío, todas las tareas deben volver a mostrarse */
const buscador = document.getElementById("buscador");
buscador.addEventListener("input",()=>{
    /* Para desaparecer tareas que existen al principio de la pagina
    const nombreTareas = document.querySelectorAll(".nombre-tarea");
    nombreTareas.forEach(nombre=>{
        if(!nombre.textContent.toLowerCase().includes(buscador.value.toLowerCase())){
            nombre.parentElement.style.display = "none";
        }
    });
    */
    tareas.forEach(tarea => {
        if(!tarea.texto.toLowerCase().includes(buscador.value.toLowerCase())){
            document.getElementById(tarea.texto).parentElement.style.display = "none";
        }else{
            document.getElementById(tarea.texto).parentElement.style.display = "";
        };
    });
});