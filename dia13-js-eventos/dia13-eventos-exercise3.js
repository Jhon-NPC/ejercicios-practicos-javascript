const gastos = [
    { id: 1, descripcion: "Almuerzo", monto: 25, categoria: "comida" },
    { id: 2, descripcion: "Taxi", monto: 18, categoria: "transporte" },
    { id: 3, descripcion: "Cine", monto: 35, categoria: "ocio" },
    { id: 4, descripcion: "Paseo", monto: 82, categoria: "ocio" }
];

/* Renderiza los gastos dentro de <div id="lista-gastos">, ordenados de mayor a menor monto (sin importar el orden en que estén en el array original). Cada tarjeta debe mostrar la descripción, el monto y la categoría */
const divListaGastos = document.getElementById("lista-gastos");

function ordenarGastos(gastos){
    const gastosOrdenados = [...gastos];
    for (let i = 0; i < gastosOrdenados.length; i++) {
        for (let j = 0; j < gastosOrdenados.length -1 -i ; j++) {
            if(gastosOrdenados[j].monto < gastosOrdenados[j+1].monto){
                let objetoTemporal = gastosOrdenados[j];
                gastosOrdenados[j]= gastosOrdenados[j+1];
                gastosOrdenados[j+1] = objetoTemporal;
            }
        }
    };
    return gastosOrdenados;
}

const mostrarGastos = (gastos) => {
    divListaGastos.innerHTML = "";
    const gastosOrdenados = ordenarGastos(gastos);
    gastosOrdenados.forEach(gasto => crearTarjetaGastos(gasto));
    agregarbtnEditar();
    agregarBtnEliminar();
    agregarBtnEliminarEvento();
}

mostrarGastos(gastos);

function crearTarjetaGastos(gasto){
    //Nuevos elementos
    const descripcionGasto = document.createElement("p");
    const montoGasto = document.createElement("p");
    const categoriaGasto = document.createElement("p");
    const tarjetaGasto = document.createElement("div");
    tarjetaGasto.setAttribute("class","gasto-item");
    tarjetaGasto.setAttribute("id",gasto.id);
    descripcionGasto.setAttribute("class","descripcion");

    //Insertando contenido dentro de las etiquetas
    descripcionGasto.textContent = gasto.descripcion;
    montoGasto.textContent = `S/. ${gasto.monto}`;
    categoriaGasto.textContent = gasto.categoria;

    //Incrustando los nuevos elementos al DOM
    divListaGastos.appendChild(tarjetaGasto);
    tarjetaGasto.appendChild(descripcionGasto);
    tarjetaGasto.appendChild(montoGasto);
    tarjetaGasto.appendChild(categoriaGasto);
} 

/* Cada tarjeta debe tener también un botón para editar la descripción del gasto: al presionarlo, ese texto debe convertirse en un campo editable (un <input> con el valor actual ya escrito dentro). Al presionar Enter dentro de ese campo, el nuevo texto debe guardarse tanto en el array como visualmente, y el campo debe volver a mostrarse como texto normal, no como input */
function agregarbtnEditar(){
    const gastoItem = document.querySelectorAll(".gasto-item");
    gastoItem.forEach(gasto => {
        const btnEditar = document.createElement("button");
        btnEditar.setAttribute("type","button");
        btnEditar.textContent = "Editar descripción";
        agregarbtnEditarEvento(btnEditar);
        gasto.appendChild(btnEditar);
    });
}

function agregarbtnEditarEvento(boton){
    boton.addEventListener("click",(evento)=>{
        //Obteniendo el elemento parrafo 
        const parrafo = evento.target.parentElement.querySelector(".descripcion");
        const idGasto = Number(evento.target.parentElement.getAttribute("id"));
        if(!parrafo) return;
        const gastoBuscado = gastos.find(gasto=>gasto.id===idGasto);

        //Creando y reemplazando por el input
        const nuevoInput = document.createElement("input");
        nuevoInput.setAttribute("id",`campo-texto-${gastoBuscado.id}`);
        nuevoInput.setAttribute("type","text");
        nuevoInput.setAttribute("value",parrafo.textContent);
        parrafo.replaceWith(nuevoInput);

        //Agregando evento al input
        nuevoInput.addEventListener("keydown",(evento)=>{
            if(evento.key === "Enter"){
                const valorIngresado = evento.target.value.trim();
                if(valorIngresado !== ""){
                    gastoBuscado.descripcion = valorIngresado;
                    mostrarGastos(gastos);
                }else{
                    evento.target.value = "Campo vacio...";
                }
            }
        });
        console.log(parrafo);
    });
}

/* Cada tarjeta debe tener un botón para eliminar ese gasto específico. Al presionarlo, el gasto debe desaparecer tanto del array de datos como visualmente de la página, y el resumen debe recalcularse de inmediato */
function agregarBtnEliminar(){
    const gastoItem = document.querySelectorAll(".gasto-item");
    gastoItem.forEach(gasto => {
        const btnEliminar = document.createElement("button");
        btnEliminar.setAttribute("type","button");
        btnEliminar.textContent = "Eliminar gasto";
        btnEliminar.setAttribute("class","btn-eliminar");
        gasto.appendChild(btnEliminar);
    });
}

function agregarBtnEliminarEvento(){
    const botonesElimnar = document.querySelectorAll(".btn-eliminar");
    botonesElimnar.forEach(boton => {
        boton.addEventListener("click", (evento)=>{
            const idGasto = Number(evento.target.parentElement.getAttribute("id"));
            for (const gasto of gastos) {
                if(gasto.id===idGasto){
                    console.log(`Gasto eliminado: ${gasto.descripcion}`);
                    gastos.splice(gastos.indexOf(gasto), 1);
                }
            }
            evento.target.parentElement.remove();
            mostrarResumenGastos();
        });
    });
}

/* El formulario debe validar, antes de agregar el gasto, que el monto ingresado sea un número mayor a 0 — si no lo es, no debe agregarse ningún gasto y debe mostrarse una advertencia visible en la página (no basta con un mensaje en consola) */

/* El resumen debe mostrar el total gastado, y además el monto total gastado específicamente en la categoría "comida", recalculándose tras cualquier cambio (agregar, eliminar o editar) */
const resumenGastos = document.getElementById("resumen-gastos");
function mostrarResumenGastos(){
    const sumaGastos = gastos.reduce((acumulado, gasto)=> acumulado+gasto.monto, 0);
    const sumaComidaGastos = gastos.reduce((acumulado, gasto)=> acumulado+(gasto.categoria==="comida"?gasto.monto: 0) ,0);
    resumenGastos.textContent=`Total gastos: S/.${sumaGastos} | Total gastado en comida: S/.${sumaComidaGastos}`;
}

mostrarResumenGastos();