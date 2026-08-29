/* Construye un calculador de propinas y división de cuenta para un restaurante. */
const montoTotalInput = "156.489";
const numeroPersonasInput = "4";
const porcentajePropinaInput = "quince"; 

/* Convierte montoTotalInput a número decimal, y numeroPersonasInput a número entero. */
const montoTotalDecimal = parseFloat(montoTotalInput);
const numeroPersonaEntero = parseInt(numeroPersonasInput);
console.log(`El monto total consumido por las ${numeroPersonasInput} personas es ${montoTotalDecimal}`);

/* Crea una función calcularMontoConPropina(monto, porcentajePropina) que devuelva el monto total sumándole el porcentaje de propina indicado (por ejemplo, si porcentajePropina es 10, se le suma el 10% al monto). El resultado debe tener máximo 2 decimales */
const calcularMontoConPropina = (monto, porcentajePropina) => {
    const montoTotal = monto + (monto* (porcentajePropina/100));
    const montoFormateado = parseFloat(montoTotal.toFixed(2));
    return montoFormateado ;
}

/* Intenta convertir porcentajePropinaInput a número entero. Usa isNaN() para verificar si la conversión fue válida:
Si no fue válida, usa un porcentaje de propina por defecto de 10
Si fue válida, usa ese porcentaje */
let porcentajePropinaEntero = parseInt(porcentajePropinaInput);
if(isNaN(porcentajePropinaEntero)){
    console.log(`Inválido la conversión ingresada: ${porcentajePropinaEntero}`);
    porcentajePropinaEntero = 10;
    console.log(`La nueva propina por defecto es de ${porcentajePropinaEntero}%`);
}

const montoTotalPago = calcularMontoConPropina(montoTotalDecimal,porcentajePropinaEntero);
console.log(`El monto total a pagar con propina es: ${montoTotalPago}`);

/* Crea una función dividirCuenta(montoConPropina, numeroPersonas) que devuelva cuánto le toca pagar a cada persona, con máximo 2 decimales */
function dividirCuenta(montoConPropina, numeroPersonas){
    const pagoPersonal = montoConPropina/numeroPersonas;
    const pagoPersonalFormateado = parseFloat(pagoPersonal.toFixed(2));
    return pagoPersonalFormateado;
}
console.log(`El monto para cada persona es: ${dividirCuenta(montoTotalPago,numeroPersonaEntero)}`)

/* Crea una función generarCodigoMesa() que devuelva un número aleatorio entero entre 1 y 50, representando el número de mesa asignado */
const generarCodigoMesa = () =>{
    const numeroMesa = Math.floor(Math.random()*50)+1;
    return numeroMesa;
}
let codigoMesa = generarCodigoMesa();
console.log(`El número de mesa es: ${codigoMesa}`);

/* Usa Math.min() para determinar cuál de estos tres montos por persona es el más bajo: 23.40, 18.75, 31.20 */
const montoMenor = Math.min(23.40, 18.75, 31.20);
console.log(`El monto menor es: ${montoMenor}`);