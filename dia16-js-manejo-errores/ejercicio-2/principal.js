/* Importa procesarLote (la exportación por defecto de lote.js) y CATEGORIAS_PERMITIDAS (de validaciones.js) */
import procesarLote from "./lote.js";
import { categoriasPermitidas } from "./validaciones.js";

/* Las opciones del filtro de categoría (además de “Todas”, que ya está en el HTML) deben generarse desde CATEGORIAS_PERMITIDAS, no escribirse a mano en el HTML. El texto visible de cada opción lleva la primera letra en mayúscula (por ejemplo, Accesorios) */

const filtroCategoria = document.getElementById("filtro-categoria");

categoriasPermitidas.forEach((categoria => {
    const filtro = document.createElement("option");
    filtro.setAttribute("value",categoria);
    filtro.textContent = categoria.slice(0,1).toUpperCase() + categoria.slice(1);
    filtroCategoria.appendChild(filtro);
}));

/* Al hacer clic en el botón de importar:
- Se limpian por completo los mensajes, las dos listas y el resumen de la importación anterior
- El párrafo estado muestra Importando... antes de empezar, y Importación terminada al finalizar, haya salido bien o mal
- Se convierte el texto del <textarea> en un objeto
- Si el JSON es válido pero no contiene la propiedad productos (por ejemplo, si el texto es null, un número, o un objeto sin esa propiedad), lanza un Error propio con el mensaje El JSON no contiene la propiedad productos
- Se llama a procesarLote con la lista de productos, y se extraen aceptados y rechazados del resultado */

const btnImportar = document.getElementById("btn-importar");
const mensajeGeneral = document.getElementById("mensaje-general");
const listaAceptados = document.getElementById("lista-aceptados");
const listaRechazados = document.getElementById("lista-rechazados");
const resumen = document.getElementById("resumen");
const parrafoEstado = document.getElementById("estado");
const textoEntrada = document.getElementById("entrada-json");

btnImportar.addEventListener("click",()=>{
    mensajeGeneral.innerHTML = "";
    mensajeGeneral.setAttribute("class","estilo-mensaje");
    listaAceptados.innerHTML = "";
    listaRechazados.innerHTML = "";
    resumen.innerHTML = "";
    try{
        parrafoEstado.textContent = "Importando...";
        const objetoConvertido = JSON.parse(textoEntrada.value);

        if(objetoConvertido === null || !objetoConvertido.hasOwnProperty("productos")){
            throw new Error("El JSON no contiene la propiedad productos");
        }

        const {aceptados, rechazados} = procesarLote(objetoConvertido.productos);
        productosAceptados(aceptados);
        productosRechazados(rechazados);
        aplicarFiltro();
        mostrarResumen(aceptados,rechazados);

    }catch(error){
        
        /* Todo error que llegue a este nivel se maneja según su tipo (comparando error.name), y siempre se registra además con console.error(error):
        SyntaxError → mensaje en mensaje-general: El texto no tiene formato JSON válido
        Error → muestra en mensaje-general el message del error
        Cualquier otro tipo → mensaje en mensaje-general: Ocurrió un error inesperado. Revisa la consola. (en este nivel no se vuelve a lanzar) */

        if(error.name === "SyntaxError"){
            mensajeGeneral.innerHTML = `<p>El texto no tiene formato JSON válido</p>`
            console.error(error);
        }else
        if(error.name === "Error"){
            mensajeGeneral.innerHTML = `<p>${error.message}</p>`
            console.error(error);
        }else{
            mensajeGeneral.innerHTML = `<p>Ocurrió un error inesperado. Revisa la consola.</p>`
            console.error(error);
        }
    }finally{
        parrafoEstado.textContent = "Importación terminada";
    }

})

/* Cada producto aceptado se muestra en lista-aceptados con este formato: nombre, precio con exactamente 2 decimales, stock y categoría con la primera letra en mayúscula:
    Mouse inalámbrico
    S/. 45.50
    Stock: 12
    Categoría: Accesorios
    
Los productos con stock igual a 0 deben distinguirse visualmente del resto y mostrar además el texto Sin stock */

function productosAceptados(lista){
    lista.forEach((p, index) => {
        const itemAceptado = document.createElement("div");
        itemAceptado.id = `item-producto-${index+1}`;
        itemAceptado.setAttribute("class", "tarjeta-producto");
        itemAceptado.innerHTML = `<p>${p.nombre}</p>
            <p>S/. ${p.precio.toFixed(2)}</p>
            <p ${p.stock===0 ? `class=sin-stock`: ""}>Stock: ${p.stock===0 ? "Sin stock" : p.stock}</p>
            <p class="categoria ${p.categoria}" >Categoría: ${p.categoria.charAt(0).toUpperCase()+p.categoria.slice(1)}</p>`;
        listaAceptados.appendChild(itemAceptado);
    });
}

/* Cada producto rechazado se muestra en lista-rechazados con este formato: Producto #3: El nombre del producto no es válido */

function productosRechazados(lista){
    lista.forEach(r => {
        const itemRechazado = document.createElement("div");
        itemRechazado.innerHTML = `<p>Producto #${r.posicion}: ${r.motivo}</p>`;
        listaRechazados.appendChild(itemRechazado);
    });
}

/* Al cambiar la opción del filtro de categoría, solo deben permanecer visibles las tarjetas de productos aceptados de esa categoría (Todas muestra todas). Las demás se ocultan sin eliminarse. Después de cada importación, el filtro que esté seleccionado en ese momento debe seguir aplicándose a las tarjetas recién creadas */

filtroCategoria.addEventListener("change", () => {
    aplicarFiltro();
});

function aplicarFiltro(){
    const tarjetas = [...document.querySelectorAll(".tarjeta-producto")];
    tarjetas.forEach(t => {
        const coincide = filtroCategoria.value === "todas" || t.querySelector(".categoria").classList.contains(filtroCategoria.value);
        t.style.display = coincide ? "" : "none";
    });

    /* OTRA FORMA DE FILTRAR POR CATEGORIA
    switch(filtroCategoria.value){
        case "todas":
            tarjetas.forEach(t => t.style.display = "");
            break;
        case "accesorios":
            const itemsNoAccesorios = tarjetas.filter(t => !t.querySelector(".categoria").classList.contains("accesorios"));
            itemsNoAccesorios.forEach(i => i.style.display = "none");
            break;
        case "audio":
            const itemsNoAudio = tarjetas.filter(t => !t.querySelector(".categoria").classList.contains("audio"));
            itemsNoAudio.forEach(i => i.style.display = "none");
            break;
        case "computo":
            const itemsNoComputo = tarjetas.filter(t => !t.querySelector(".categoria").classList.contains("computo"));
            itemsNoComputo.forEach(i => i.style.display = "none");
            break;
        default:
            mensajeGeneral.innerHTML = "<p>Categoria no encontrada</p>";
            break;
    }
    */
}

/* El resumen (que no cambia con el filtro) muestra, con este formato:
    Aceptados: 3 | Rechazados: 6 | Valor total del inventario aceptado: S/. 8046.00 | Producto más caro: Laptop
El valor total es la suma de precio × stock de todos los aceptados, con 2 decimales. El producto más caro es el aceptado con mayor precio (si hay empate, el primero de la lista). Si no hay ningún producto aceptado, el resumen muestra solo las cantidades de aceptados y rechazados, sin valor total ni producto más caro */

function mostrarResumen(aceptados, rechazados){
    const valorTotal = aceptados.reduce((acumulado,a) => (a.precio*a.stock) + acumulado, 0);
    const precioMaximo = Math.max(...aceptados.map(a => a.precio));
    const productoMasCaro = aceptados.find(a => a.precio === precioMaximo);
    resumen.textContent = `Aceptados: ${aceptados.length} | Rechazados: ${rechazados.length} ${aceptados.length>0?`| Valor total del inventario aceptado: S/. ${valorTotal.toFixed(2)} | Producto más caro: ${productoMasCaro.nombre}` : ""}`;
}

/* TEXTO DE PRUEBA
{"productos":[
    {"nombre":"Mouse inalámbrico","precio":45.5,"stock":12,"categoria":"accesorios"},
    {"nombre":"Audífonos","precio":120,"stock":0,"categoria":"audio"},
    {"nombre":"   ","precio":30,"stock":5,"categoria":"computo"},
    {"nombre":"Teclado","precio":"abc","stock":3,"categoria":"accesorios"},
    {"nombre":"Monitor","precio":-10,"stock":2,"categoria":"computo"},
    {"nombre":"Cable HDMI","precio":15,"stock":-4,"categoria":"accesorios"},
    {"nombre":"Silla gamer","precio":300,"stock":2,"categoria":"muebles"},
    null,
    {"nombre":"Laptop","precio":2500,"stock":3,"categoria":"computo"}
]}
*/