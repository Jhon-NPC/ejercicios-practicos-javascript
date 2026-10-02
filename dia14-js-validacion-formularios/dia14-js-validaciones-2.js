const contactos = [];

/* Al enviar el formulario, valida: que el nombre no esté vacío, que el email tenga formato válido (regex), y que el teléfono contenga exactamente 9 dígitos numéricos (sin espacios ni letras — usa una expresión regular para esto, no .length combinado con otra cosa). Si algo falla, muestra los errores acumulados en <div id="contenedorErrores">, limpiando los anteriores, y no agregues ningún contacto */
function validarFormulario(){
    const errores = [];
    const nombreContacto = document.getElementById("nombre-contacto");
    const emailContacto = document.getElementById("email-contacto");
    const telefonoContacto = document.getElementById("telefono-contacto");
    const esFavorito = document.getElementById("favorito-contacto").checked;
    let mensaje = null;

    if(nombreContacto.value.trim() === ""){
        mensaje = "Campo nombre: Ingrese su nombre";
        console.log(mensaje);
        errores.push(mensaje);
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!formatoEmail.test(emailContacto.value.trim())){
        mensaje = "Campo email: Ingrese un email válido";
        console.log(mensaje);
        errores.push(mensaje);
    }

    const formatoNumero = /^\d{9}$/;
    if(!formatoNumero.test(parseInt(telefonoContacto.value.trim()))){
        mensaje = "Campo telefono: Ingrese solamente 9 dígitos del teléfono";
        console.log(mensaje);
        errores.push(mensaje);
    };

    return errores;
};

const formulario = document.getElementById("form-contacto");
const listaContactos = document.getElementById("lista-contactos");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const errores = validarFormulario();
    const contenedorErrores = document.getElementById("contenedorErrores");
    contenedorErrores.innerHTML = "";

    if(errores.length>0){
        errores.forEach(error => {
            const p = document.createElement("p");
            p.textContent = error;
            contenedorErrores.appendChild(p);
        });
    }else{

        /* Si todo es válido, agrega el contacto al array (con un id generado dinámicamente, sin asumir un número fijo), renderízalo en <div id="lista-contactos">, limpia el formulario, y limpia también cualquier error previo que hubiera quedado visible */
        const nombreContacto = document.getElementById("nombre-contacto").value;
        const emailContacto = document.getElementById("email-contacto").value;
        const telefonoContacto = document.getElementById("telefono-contacto").value;
        const esFavorito = document.getElementById("favorito-contacto").checked;
        const idAsignado = contactos.length>0 ? contactos[contactos.length-1].id +1 : 1;

        contactos.push({id: idAsignado, nombre: nombreContacto, email: emailContacto, telefono: telefonoContacto, favorito: esFavorito});

        crearContactoIndividual(idAsignado,nombreContacto,emailContacto,telefonoContacto,esFavorito);
        console.log(contactos);
    }
});

function crearContactoIndividual(id,nombre,email,telefono,esFavorito){
    /* Los contactos marcados como favoritos deben distinguirse visualmente del resto en su tarjeta */
    const contenidoContacto = document.createElement("div");
    contenidoContacto.id = `contacto-${id}`;
    if(esFavorito){
        contenidoContacto.classList.add("favorito");
    }
    contenidoContacto.innerHTML=`
        <p class=nombre${esFavorito?"-favorito":""}>${nombre}</p>
        <p class=email>${email}</p>
        <p class=telefono>${telefono}</p>
    `;
    listaContactos.appendChild(contenidoContacto);
}

function crearTarjetasContactos(contactos){
    contactos.forEach( contacto => {
        const contenidoContacto = document.createElement("div");
        contenidoContacto.id = `contacto-${contacto.id}`;
        contenidoContacto.innerHTML=`
            <p class=nombre>${contacto.nombre}</p>
            <p class=email>${contacto.email}</p>
            <p class=telefono>${contacto.telefono}</p>
        `;
        listaContactos.appendChild(contenidoContacto);
    });
}

/* Cada contacto debe tener un botón para eliminarlo, que lo quite tanto del array como de la vista, y recalcule el resumen de inmediato */

/* Debajo de la lista, el resumen debe mostrar cuántos contactos hay en total y cuántos son favoritos, actualizándose automáticamente tras agregar o eliminar */
const resumenContacto = document.getElementById("resumen-contactos");
const favoritos = contactos.reduce((acumulador,contacto)=>contacto.favorito? acumulador+1:acumulador,0);
resumenContacto.textContent = `Total de contactos: ${contactos.length} | Total de favoritos: ${favoritos}`;

/* Si se intenta agregar un contacto cuyo email ya existe en el array (sin importar mayúsculas o minúsculas), debe rechazarse con un mensaje de error específico indicando que ese correo ya está registrado, sin llegar a agregarlo */