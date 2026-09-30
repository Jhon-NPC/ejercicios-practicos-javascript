/* Crea una función validarFormulario() que revise, acumulando los errores en un array */

function validarFormulario(){
    const errores = [];

    //Que nombre no esté vacío (usando .trim())
    const nombre = document.getElementById("nombre").value;
    if(nombre.trim()===""){
        const mensaje = "Campo nombre: vacío";
        console.log(mensaje);
        errores.push(mensaje);
    }

    //Que email tenga un formato válido, usando una expresión regular con .test()
    const email = document.getElementById("correo").value;
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!patronEmail.test(email.trim())){
        const mensaje = "Campo email: Formato incorrecto";
        console.log(mensaje);
        errores.push(mensaje);
    }

    //Que edad sea un número válido entre 18 y 99
    const edad = parseInt(document.getElementById("edad").value);
    if(isNaN(edad) || edad<18 || edad>99){
        const mensaje = "Campo edad: Edad no válida";
        console.log(mensaje);
        errores.push(mensaje);
    }

    //Que se haya seleccionado un género, usando el selector de atributo con :checked (y verificando que el resultado no sea null antes de leer su valor) 
    const genero = document.querySelector('input[name="genero"]:checked');
    if(!genero){
        const mensaje = "Seleccione su género";
        console.log(mensaje);
        errores.push(mensaje);
    }

    //Que el checkbox de términos esté marcado
    const checkTerminos = document.getElementById("terminos");
    if(!checkTerminos.checked){
        const mensaje = "Recuerde aceptar los términos";
        console.log(mensaje);
        errores.push(mensaje);
    }

    return [errores, nombre, email, genero];
}

/* Usa el evento submit del formulario para llamar a validarFormulario(), evitando que la página se recargue */
const formulario = document.getElementById("form-registro");
const contenedorErrores = document.getElementById("contenedorErrores");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (evento) => {   
    evento.preventDefault();
    const [errores, nombre, email, genero] = validarFormulario();

    /* Si hay errores, muéstralos dentro de <div id="contenedorErrores">, limpiando cualquier mensaje anterior antes de mostrar los nuevos */
    resultado.innerHTML = "";
    contenedorErrores.innerHTML = "";

    if(errores.length>0){
        errores.forEach( error => {
            const parrafo = document.createElement("p");
            parrafo.textContent = error;
            contenedorErrores.appendChild(parrafo);
        });
    }else{

        /* Si no hay errores, muestra en <div id="resultado"> un mensaje de bienvenida usando el nombre, el email y el género seleccionados, y limpia el formulario */
        resultado.textContent = `Bienvenido ${nombre}, su email es ${email} y su género asignado es ${genero.value}`;
        console.log("Formulario validado, procesando...");
        formulario.reset();
    }
});