/* Construye un analizador de ventas de una tienda. */
const ventas = [150, 320, 85, 420, 60, 275, 500, 30];

/* Usa .forEach() para mostrar cada venta en consola con el formato: Venta: 150 soles */
ventas.forEach(venta => console.log(`Venta: ${venta} soles`));

/* Usa .map() para crear un nuevo array donde cada venta tenga un 5% de comisión aplicada (multiplica cada venta por 1.05), y muestra el array resultante */
const ventasComision = ventas.map(venta => venta*1.05);
ventasComision.forEach(ventaComision => console.log(`Venta aplicada con una comisión del 5%: ${ventaComision}`));

/* Usa .filter() para crear un array solo con las ventas mayores a 200 soles, y muéstralo */
const ventasMayorA200 = ventas.filter(venta => venta > 200);
console.log(`Ventas mayores a 200 soles: ${ventasMayorA200}`);

/* Usa .reduce() para calcular la suma total de todas las ventas, y muéstrala */
const ventaTotal = ventas.reduce((acumulador,venta)=>acumulador+venta,0);
console.log(`La venta total es: ${ventaTotal} soles`);

/* Usa .find() para encontrar la primera venta que sea menor a 100 soles, y muéstrala */
const primeraVentaMenorA100 = ventas.find(venta => venta<100);
console.log(`La primera venta menor a 100 soles es: ${primeraVentaMenorA100}`);

/* Usa .some() para verificar si existe alguna venta mayor a 450 soles, y muestra el resultado */
const existeVentaMayorA450 = ventas.some(venta => venta>450);
console.log(`${existeVentaMayorA450?"Existe":"No existe"} una venta mayor a 450 soles`);

/* Usa .every() para verificar si todas las ventas son mayores a 0, y muestra el resultado */
const todaVentaMayorA0 = ventas.every(venta=>venta>0);
console.log(`Todas las ventas ${todaVentaMayorA0?"SI":"NO"} son mayores a 0 soles`);