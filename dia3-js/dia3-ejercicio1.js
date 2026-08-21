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

for(i=1;i<=20;i++){
    if(i%3===0 && i%5===0){
        console.log(`${i} es divisible por 3 y 5: "Fizz"`);
    }else if(i%3===0){
        console.log(`${i} es divisible por 3: "Fizz"`);
    }else if(i%5===0){
        console.log(`${i} es divisible por 5: "FizzBuzz"`);
    }else{
        console.log(`${i} es número normal`)
    }
}