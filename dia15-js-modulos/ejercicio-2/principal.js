/* Importa todo lo necesario de ambos módulos, usando al menos una vez cada una de estas formas: importación nombrada, importación por defecto, e import * as para alguno de los dos archivos (tú decides cuál) */

import calcularCotizacion, {planes, extras as catalogoExtras} from "./calculos.js";
import * as validaciones from "./validaciones.js";

/* Al enviar el formulario, valida nombre, email y meses usando las funciones de validaciones.js, acumulando errores y mostrándolos en <div id="contenedorErrores">, limpiando los anteriores */
const cotizaciones = [];

const formulario = document.getElementById("form-cotizacion");
formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const nombre = document.getElementById("nombre-cliente").value;
    const email = document.getElementById("email-cliente").value;
    const planSeleccionado = document.getElementById("select-plan").value;
    const meses = parseInt(document.getElementById("meses").value);
    const extras = document.querySelectorAll('input[type="checkbox"]:checked');
    
    //Validando errores
    const errores = [];
    validaciones.validarNombreCliente(nombre) ? null : errores.push("El campo nombre se encuentra vacío.");
    validaciones.validarEmailCliente(email) ? null : errores.push("El campo email no tiene el formato de un correo.");
    validaciones.validarMeses(meses) ? null : errores.push("El campo mes tiene hasta un plazo de 24 meses de contratación.");
    
    const contenedorErrores = document.getElementById("contenedorErrores");
    contenedorErrores.innerHTML = "";
    if(errores.length>0){
        errores.forEach(error => {
            const p = document.createElement("p");
            p.textContent = error;
            contenedorErrores.appendChild(p);
        });
    }else{
        /* Si es válido, recolecta los extras marcados (deberás obtenerlos de los checkboxes seleccionados, no de una lista fija escrita a mano), calcula la cotización con calcularCotizacion, y agrégala a un array de cotizaciones generadas (en memoria, no hace falta guardarlo en ningún lado más), con un id dinámico */

        const valoresExtra = [...extras].map(extra=>extra.value);
        const precioTotal = calcularCotizacion(planSeleccionado,meses,valoresExtra);

        cotizaciones.push({id: cotizaciones.length===0 ? 1 : cotizaciones[cotizaciones.length-1].id+1, nombre: nombre, plan: planSeleccionado, meses: meses, extras: valoresExtra, cotizacion: precioTotal});

        /* Renderiza cada cotización en <div id="lista-cotizaciones">, mostrando el nombre del cliente, el plan elegido, los meses, los extras (si eligió alguno) y el precio final */
        
        const listaCotizaciones = document.getElementById("lista-cotizaciones");
        listaCotizaciones.innerHTML = "";
        cotizaciones.forEach(c => {
            const tarjetaCotizacion = document.createElement("div");
            tarjetaCotizacion.setAttribute("class","tarjeta-cotizacion");
            tarjetaCotizacion.setAttribute("id", c.id);
            tarjetaCotizacion.innerHTML = `
                <p>Cliente: ${c.nombre}</p>
                <p>Plan: ${planes[c.plan].nombre}</p>
                <p>Meses: ${c.meses}</p>
                <p>Extras: ${c.extras.length>0 ? c.extras.map(e=>catalogoExtras[e].nombre).join(", ") :"Ninguno"} </p>
                <p>Precio final: ${c.cotizacion}</p>
                `;
            listaCotizaciones.appendChild(tarjetaCotizacion);
        });

        /* Cada cotización debe tener un botón para eliminarla de la lista y del array */
        const tarjetas = document.querySelectorAll(".tarjeta-cotizacion");
        tarjetas.forEach(t => {
            const btnEliminar = document.createElement("button");
            btnEliminar.type = "button";
            btnEliminar.textContent = "Eliminar cotización";
            btnEliminar.addEventListener("click", (e) => {
                const indice = cotizaciones.findIndex(c => parseInt(t.getAttribute("id")) === c.id);
                if(indice!==-1){
                    cotizaciones.splice(indice,1);
                    e.target.parentElement.remove();
                    actualizarResumen();
                }
            });
            t.appendChild(btnEliminar);
        })

        /* En el resumen, muestra cuántas cotizaciones se han generado en total, y el precio promedio entre todas las que queden activas, recalculado tras cada cambio */

        actualizarResumen();
    }
})

function actualizarResumen(){
    const resumenCotizaciones = document.getElementById("resumen-cotizaciones");
    if(cotizaciones.length===0){
        resumenCotizaciones.textContent = "No hay cotizaciones";
        return;
    }
    const sumaCotizacion = cotizaciones.reduce((acumulaciones, c) => acumulaciones+c.cotizacion, 0);
    const promedio = (sumaCotizacion/cotizaciones.length).toFixed(2);
    resumenCotizaciones.textContent = `En total se generaron ${cotizaciones.length} cotizaciones | El promedio de las cotizaciones es de S/.${promedio} `;
}