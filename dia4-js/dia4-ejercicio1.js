/* Caja de herramientas matemáticas para una calculadora simple.
Crea una función clásica sumar(a, b) que use return para devolver la suma de ambos números
*/
function sumar(a,b){
    return a +b;
}
console.log(sumar(4,6));

/* Crea una función clásica restar(a, b) que devuelva la resta */
function restar(a,b){
    return a-b;
}
console.log(restar(5,2));

const resta = function(a,b){
    return a-b;
}
console.log(resta(9,1));

/* Crea una arrow function "multiplicar" que reciba dos parámetros y devuelva la multiplicación, usando la sintaxis corta de una sola línea (sin llaves) */
const multiplicar = (a,b) => a * b;
console.log(multiplicar(5,9));

/* Crea una arrow function "dividir" que reciba dos parámetros. Si el segundo parámetro es 0, debe devolver el string "Error: no se puede dividir entre 0". Si no, devuelve la división normal */
const dividir = (a,b) => {
    if(b===0){
        const mensaje = "Error: no se puede dividir entre 0";
        return mensaje;
    }
    const resultado = a/b;
    return resultado;
}
console.log(`La división es ${dividir(50,0)}`);

/* Crea una función esPar(numero) que devuelva true si el número es par, false si es impar */
const esPar = function(numero){
    if(numero%2===0){
        return true;
    }else{
        return false;
    }
}
console.log(`Es par: ${esPar(59)}`);

/* Crea una función saludarUsuario que muestre un saludo personalizado con console.log, usando el valor por defecto si no se le pasa ningún argumento */
function saludarUsuario(nombre = "Invitado"){
    console.log(`Bienvenido usuario ${nombre}`);
}
saludarUsuario();