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
    listaAceptados.innerHTML = "";
    listaRechazados.innerHTML = "";
    resumen.innerHTML = "";
    try{
        parrafoEstado.textContent = "Importando";
        const objetoConvertido = JSON.parse(textoEntrada.value);

        if(!objetoConvertido.hasOwnProperty("productos")){
            throw new Error("El JSON no contiene la propiedad productos");
        }

        const {aceptados, rechazados} = procesarLote(objetoConvertido.productos);
        productosAceptados(aceptados);
        productosRechazados(rechazados);

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
            mensajeGeneral.innerHTML = `<p>Ocurrió un error inesperado. Revisa la consola</p>`
            console.error(error.message);
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
        itemAceptado.innerHTML = `<p>${p.nombre}</p>
            <p>S/. ${p.precio.toFixed(2)}</p>
            <p ${p.stock===0 ? `class=sin-stock`: ""}>Stock: ${p.stock===0 ? "Sin stock" : p.stock}</p>
            <p class=${p.categoria} >Categoría: ${p.categoria.charAt(0).toUpperCase()+p.categoria.slice(1)}</p>`;
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
    console.log(filtroCategoria.value);

    switch(filtroCategoria.value){
        case "todas":
            break;
        case "accesorios":
            
            break;
        case "audio":
            break;
        case "computo":
            break;
        default:
            mensajeGeneral.innerHTML = "<p>Categoria no encontrada</p>";
            break;
    }
})

/* El resumen (que no cambia con el filtro) muestra, con este formato:
    Aceptados: 3 | Rechazados: 6 | Valor total del inventario aceptado: S/. 8046.00 | Producto más caro: Laptop

El valor total es la suma de precio × stock de todos los aceptados, con 2 decimales. El producto más caro es el aceptado con mayor precio (si hay empate, el primero de la lista). Si no hay ningún producto aceptado, el resumen muestra solo las cantidades de aceptados y rechazados, sin valor total ni producto más caro */

/* Comprobación de la rama inesperada: introduce temporalmente un error de escritura en el nombre de una variable dentro de procesarLote, confirma que aparece el mensaje genérico y que el detalle sale en consola, y luego corrígelo */