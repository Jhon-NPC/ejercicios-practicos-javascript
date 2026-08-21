/* Usa un for para mostrar la tabla de multiplicar del 7 (del 1 al 10). Cada línea debe verse así: 7 x 1 = 7 */
for(let i=1; i<11; i++){
    console.log(`7 x ${i} = ${7*i}`);
}

/* 
    Usa un for para recorrer los números del 1 al 20, aplicando estas reglas con el operador %:
    Si el número es divisible entre 3, muestra "Fizz"
    Si es divisible entre 5, muestra "Buzz"
    Si es divisible entre 3 y 5 a la vez, muestra "FizzBuzz"
    Si no es ninguno, muestra el número tal cual 
*/
for(leti=1;i<=20;i++){
    if(i%3===0 && i%5===0){
        console.log(`${i} es divisible por 3 y 5: "FizzBuzz"`);
    }else if(i%3===0){
        console.log(`${i} es divisible por 3: "Fizz"`);
    }else if(i%5===0){
        console.log(`${i} es divisible por 5: "Buzz"`);
    }else{
        console.log(`${i} es número normal`)
    }
}

/* Usa un while para simular una cuenta regresiva desde 10 hasta 1, mostrando cada número. Al llegar a 0, muestra "¡Despegue!" */
let conteo = 10;
while(conteo>=0){
    if(conteo===0){
        console.log(`¡Despegue!`);
        break;
    }
    console.log(`${conteo}`);
    conteo--;
}

/* 
    Usa for...of con este array y saluda a cada persona con un template literal:
    const nombres = ["Ana", "Luis", "María", "Carlos", "Diego"];
*/
const nombres = ["Ana", "Luis", "María", "Carlos", "Diego"];
for(const nombre of nombres){
    console.log(`¡Buenas tardes ${nombre}!`);
}

/* Usa break dentro de un for que recorra del 1 al 100, deteniéndolo apenas encuentres el primer número divisible entre 13 */
for(let i=1; i<101; i++){
    if(i%13===0){
        console.log(`Numero ${i} divisible por 13`)
        break;
    }
    console.log(`Número ${i}`);
}

/* Usa continue dentro de un for que recorra del 1 al 10, mostrando solo los números impares (salta los pares) */
for(let i=1; i<11; i+=1){
    if(i%2===0){
        continue;
    }
    console.log(`Número ${i}`);
}