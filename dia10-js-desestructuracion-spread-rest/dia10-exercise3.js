/* Construye un procesador de reservas para un hotel */
const reserva = ["Habitación 204", "Doble", 3, "Con desayuno"];
const huesped = { nombre: "Camila Rojas", pais: "Chile", membresia: "Gold", noches: 3, tarjeta: "VISA" };

/* Extrae en variables individuales los cuatro datos de la reserva, con nombres que describan claramente cada uno */
const [numHabitacion, tipoCama, nochesProgramada, regimenComida] = reserva;
console.log(`La ${numHabitacion} fue reservada con una cama ${tipoCama} para quedarse ${nochesProgramada} noches y la instancia incluye ${regimenComida}`);

/* Extrae únicamente el nombre y el país del huésped */
const {nombre, pais} = huesped;
console.log(`El cliente ${nombre} de ${pais}`);

/* Extrae la membresía del huésped, pero guárdala en una variable llamada nivelHuesped */
const {membresia: nivelHuesped} = huesped;
console.log(`La membresía es de nivel ${nivelHuesped}`);

/* Extrae una propiedad descuentoTemporada del huésped (que no existe), asignándole un valor por defecto de 10 */
const {descuentoTemporada=10} = huesped;
console.log(`El descuento por temporada es ${descuentoTemporada}`);

/* Del array reserva, extrae solamente la habitación y el tipo de cuarto en variables individuales, y agrupa el resto de los datos en una sola variable */
const [habitacion, tipoCuarto, ...datosReserva] = reserva;
console.log(`${habitacion} y ${tipoCuarto} guardas en variables individuales. "${datosReserva}" en array`);

/* Del objeto huésped, extrae solamente el nombre y la tarjeta en variables individuales, y agrupa el resto de sus propiedades en un solo objeto */
const {nombre:nombreH, tarjeta, ...datosHuesped} = huesped;
console.log(`${nombreH} y ${tarjeta} guardas en variables individuales. "${Object.entries(datosHuesped)}" en objeto`);

/* Crea una copia del objeto huesped llamada huespedActualizado, incrementando en 1 la cantidad de noches que ya tenía registradas */
const huespedActualizado = {...huesped, noches:huesped.noches+1};
console.log(`${Object.values(huespedActualizado)}`);

/* Crea una función calcularCostoTotal que acepte cualquier cantidad de precios por noche como argumentos y devuelva la suma total. Pruébala con al menos 4 precios distintos */
function calcularCostoTotal(...preciosPorNoche){
    return preciosPorNoche.reduce((acumulador, precio)=> acumulador+precio,0);
}
const costoPorNoche = calcularCostoTotal(120,160.90,145.90,270.99,300.99);
console.log(`Suma total de los precios por noche: ${costoPorNoche}`);

/* Crea una función confirmarReserva que reciba directamente un objeto desestructurado en sus parámetros (extrayendo nombre y membresia), y muestre un mensaje combinando esos datos con el total calculado en el punto anterior */
const confirmarReserva = ({nombre,membresia}) =>{
    console.log(`Cliente ${nombre} con membresia ${membresia} tiene un pago pendiente por las habitaciones reservadas por ${costoPorNoche}`);
}
confirmarReserva(huesped);