/* Parte A: scope de bloque y hoisting
Dentro de un if (true) { ... }, declara const ciudadBloque = "Cusco" y var ciudadVar = "Arequipa". Después del if, muestra ciudadVar en consola. Dentro de un try...catch, intenta mostrar ciudadBloque, y en el catch muestra error.name. */

if(true){
    const ciudadBloque = "Cusco";
    var ciudadVar = "Arequipa";
};
console.log(ciudadVar);
try {
    console.log(ciudadBloque);
} catch (error) {
    console.error(error.name);
}
/* Muestra en consola precioVar antes de la línea donde lo declaras con var precioVar = 100;. Luego, dentro de un try...catch, intenta mostrar precioLet antes de declararlo con let precioLet = 200; (las dos líneas dentro del try), y en el catch muestra error.name y error.message.  */

console.log(precioVar);
var precioVar = 100;
try{
    console.log(precioLet);
    let precioLet = 200;
}catch(error){
    console.log(error.name, error.message);
}

/* 
Parte B: cadena de scope
Declara una constante global ciudad con "Lima". Crea una función leerCiudad() que devuelva ciudad. Crea una función mostrarCiudades() que declare su propia ciudad con "Cusco" y, dentro de ella, un bloque con llaves sueltas { } que declare otra ciudad con "Arequipa". Dentro del bloque muestra ciudad. Después del bloque (aún dentro de la función) muestra ciudad otra vez. A continuación muestra lo que devuelve leerCiudad(). Llama a mostrarCiudades() y, afuera, muestra ciudad.
*/
const ciudad = "Lima";
function leerCiudad(){
    return ciudad;
}
function mostrarCiudades(){
    const ciudad = "Cusco";
    {
        const ciudad = "Arequipa";
        console.log(ciudad);
    }
    console.log(ciudad);
    console.log(leerCiudad());
}
mostrarCiudades();

/* Parte C: closures
Crea una función fábrica crearDescuento(porcentaje) que devuelva una función que reciba un precio y devuelva precio - (precio * porcentaje / 100). Crea descuento10 con 10 y descuento25 con 25. Muestra descuento10(200), descuento25(200) y crearDescuento(50)(80). */

function crearDescuento(porcentaje){
    return function(precio){
        return precio - (precio * porcentaje / 100);
    }
}
const descuento10 = crearDescuento(10);
const descuento25 = crearDescuento(25);
console.log(descuento10(200));
console.log(descuento25(200));
console.log(crearDescuento(50)(80));

/* Crea una función crearContadorConPaso(inicial, paso) que devuelva una función; cada vez que se la llame, debe sumar paso al valor actual y devolver el nuevo valor. Crea contadorA con inicial 0 y paso 5, y contadorB con inicial 100 y paso 10. Llama en este orden y muestra cada resultado: contadorA, contadorA, contadorB, contadorA. */

function crearContadorConPaso(inicial, paso){
    let actual = inicial;
    return function(){
        actual += paso;
        return actual;
    };
}
const contadorA = crearContadorConPaso(0,5);
const contadorB = crearContadorConPaso(100,10);
console.log(contadorA());
console.log(contadorA());
console.log(contadorB());
console.log(contadorA());

/* Crea una función crearBilletera(saldoInicial) que devuelva un objeto con tres métodos (usando function, no arrow). El saldo debe ser una variable local de la función, no una propiedad del objeto:
recargar(monto): si monto <= 0, lanza un RangeError con el mensaje El monto debe ser mayor a 0. Si no, suma el monto y devuelve el nuevo saldo
pagar(monto): si monto <= 0, lanza el mismo RangeError. Si monto es mayor al saldo, lanza un Error con el mensaje Saldo insuficiente. Si no, resta el monto y devuelve el nuevo saldo
consultarSaldo(): devuelve el saldo
Pruébala en este orden: crea billetera con 100 → recargar(50) → pagar(30) → intenta pagar(500) dentro de un try...catch → intenta recargar(-5) dentro de un try...catch (en cada catch, muestra error.name y error.message) → muestra billetera.saldo → ejecuta billetera.saldo = 999999 y muestra billetera.consultarSaldo(). Después crea otraBilletera con 10, y muestra su consultarSaldo() y el de billetera. */

function crearBilletera(saldoInicial){
    let saldo = saldoInicial;
    return {
        recargar: function(monto){
            if(monto <= 0){
                throw new RangeError("El monto debe ser mayor a 0");
            }else{
                saldo += monto;
                return saldo;
            }
        },
        pagar: function(monto){
            if(monto <= 0){
                throw new RangeError("El monto debe ser mayor a 0");
            }else if(monto>saldo){
                throw new Error("Saldo insuficiente");
            }else {
                saldo -= monto;
                return saldo;
            }
        },
        consultarSaldo: function(){
            return saldo;
        }
    };
}

const billetera = crearBilletera(100);
console.log(billetera.recargar(50));
console.log(billetera.pagar(30));
try{
    console.log(billetera.pagar(500));
}catch(error){
    console.error(error.name, error.message);
}
try{
    console.log(billetera.recargar(-5));
}catch(error){
    console.error(error.name, error.message);
}
console.log(billetera.saldo);
console.log(billetera.saldo = 99999);
console.log(billetera.consultarSaldo());
const otraBilletera = crearBilletera(10);
console.log(otraBilletera.consultarSaldo());
console.log(billetera.consultarSaldo());

/* Parte D: var frente a let en bucles
Crea una función compararBucles() que:
Cree un array funcionesVar y, con un for que use var i de 0 a 2, agregue con .push() en cada vuelta una función que devuelva i * 10
Haga lo mismo con un array funcionesLet, usando let i
Devuelva un objeto con dos propiedades, conVar y conLet, donde cada una sea un array con los resultados de ejecutar todas las funciones de su array (usa .map())
Muestra el resultado de llamar a compararBucles(). */

function compararBucles(){
    const funcionesVar = [];
    for(var i = 0; i<3 ;i++ ){
        funcionesVar.push(function(){
            return i*10;
        });
    };
    const funcionesLet = [];
    for(let i = 0; i<=2 ;i++ ){
        funcionesLet.push(function(){
            return i*10;
        });
    };
    return {conVar: funcionesVar.map(fn => fn()), conLet: funcionesLet.map(fn => fn())};
}
const {conVar,conLet} = compararBucles();
console.log(conVar);
console.log(conLet);

/*
Parte E: IIFE
Resuelve estas tres:
a) Crea una IIFE que declare const claveInterna = "abc123" y muestre en consola Inicializando.... Después, fuera de ella, intenta mostrar claveInterna dentro de un try...catch, y en el catch muestra error.name
b) Crea una IIFE con sintaxis de arrow function que reciba nombre y devuelva Usuario: seguido del nombre en mayúsculas. Llámala con "pablo", guarda el resultado en una constante y muéstralo
c) Crea generarNumeroPedido como una IIFE que mantenga un contador interno ultimo que empieza en 0 y devuelva una función. Cada vez que se llame a generarNumeroPedido(), esta debe devolver PED- seguido del siguiente número. Llámala 3 veces y muestra cada resultado
*/

/*
Parte F: closures en el DOM
Declara este array:
js
    const planes = [
        { nombre: "Básico", precio: 20 },
        { nombre: "Pro", precio: 45 },
        { nombre: "Premium", precio: 80 }
    ];

Selecciona los tres botones con querySelectorAll(".boton-plan") y recórrelos con un for que use let i. A cada botón agrégale un listener de "click" que muestre en <p id="mensaje-plan"> este texto (usa la i del bucle directamente; no uses evento.target):
Elegiste el plan [nombre] (opción [número] de [total]): S/. [precio con 2 decimales]

Luego, temporalmente, cambia let i por var i, haz clic en un botón y observa la consola. Escribe como comentario en tu código, con tus palabras, qué error apareció y por qué ocurre (qué valor tiene i cuando ocurre el clic y cuántas i existen). Después vuelve a dejar let.
*/