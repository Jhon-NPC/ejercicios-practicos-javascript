const productos = [
    { nombre: "Casaca de cuero", precio: 250, imagen: "casaca.jpg", enStock: true, categoria: "Abrigos" },
    { nombre: "Polo básico", precio: 45, imagen: "polo.jpg", enStock: true, categoria: "Polos" },
    { nombre: "Zapatillas urbanas", precio: 180, imagen: "zapatillas.jpg", enStock: false, categoria: "Calzado" },
    { nombre: "Gorra deportiva", precio: 35, imagen: "gorra.jpg", enStock: true, categoria: "Accesorios" },
    { nombre: "Chaqueta impermeable", precio: 210, imagen: "chaqueta.jpg", enStock: false, categoria: "Abrigos" }
];

/* Crea una función que reciba cada producto (desestructurado directamente en sus parámetros) y construya su tarjeta visual completa dentro del catálogo: el nombre, el precio, y una imagen cuyo atributo de origen apunte al archivo indicado en los datos del producto, con un texto alternativo descriptivo generado a partir del nombre */
const catalogo = document.getElementById("catalogo");
const insertarProductos = ({nombre,precio,imagen,enStock,categoria,descuento=0}) =>{

    //Creacion de un contenedor div para los productos
    const tarjetaProducto = document.createElement("div");
    tarjetaProducto.setAttribute("class","tarjeta-producto");

    //Creacion de la etiqueta p para el nombre del producto
    const nombreProducto = document.createElement("p");
    nombreProducto.textContent = nombre;
    nombreProducto.setAttribute("class","nombre-producto");

    //Nueva etiqueta para precio
    /* Al construir cada tarjeta, si el producto no tuviera una propiedad de descuento definida (ninguno la tiene en este caso), debe asumirse un valor por defecto de 0, sin que tu código falle si en el futuro algún producto sí la trajera */
    const precioProducto = document.createElement("p");
    precioProducto.textContent = `S/. ${precio-descuento}`;
    precioProducto.setAttribute("class","precio-producto");

    //Nueva div y etiqueta para imagen
    const contenedorImagenProducto = document.createElement("div");
    contenedorImagenProducto.setAttribute("class","contenedor-imagen");

    const imagenProducto = document.createElement("img");
    imagenProducto.setAttribute("src",`assets/${imagen}`);
    imagenProducto.setAttribute("alt",`Imagen de ${nombre}`);
    imagenProducto.style.width= "200px";

    /* Los productos con precio de 200 soles a más deben mostrar, dentro de su misma tarjeta, un distintivo adicional de "Premium", insertado como una etiqueta HTML real (no como texto plano) */
    if(precio>=200){
        const etiquetaPremium = document.createElement("p");
        etiquetaPremium.innerHTML = "<strong>Premium</strong>";
        contenedorImagenProducto.appendChild(etiquetaPremium);
    }

    //Nueva etiqueta para categoria
    const categoriaProducto = document.createElement("p");
    categoriaProducto.textContent = categoria;
    categoriaProducto.setAttribute("class","categoria-producto");

    //Insercion de la tarjeta y los valores del producto
    catalogo.appendChild(tarjetaProducto);
    tarjetaProducto.appendChild(nombreProducto);
    tarjetaProducto.appendChild(categoriaProducto);
    tarjetaProducto.appendChild(precioProducto);
    tarjetaProducto.appendChild(contenedorImagenProducto);
    contenedorImagenProducto.appendChild(imagenProducto);

    /* Los productos que no están en stock deben distinguirse visualmente del resto de alguna forma, y además el texto de su tarjeta debe indicar explícitamente que no está disponible */
    if(!enStock){
        const sinStock = "No está disponible";
        const mensajeStock = document.createElement("p");
        mensajeStock.textContent = sinStock;
        mensajeStock.classList.add("no-disponible","sin-stock");
        nombreProducto.classList.add("no-disponible");
        precioProducto.classList.add("no-disponible");
        categoriaProducto.classList.add("no-disponible");
        tarjetaProducto.appendChild(mensajeStock);
    }
}

productos.forEach(producto=>insertarProductos(producto));

/* Debajo del catálogo, en el resumen, muestra: cuántos productos hay en total, cuántos están actualmente disponibles, y la suma total en soles de únicamente los productos disponibles */
function resumirCatalogo(productos){
    //Desarrollo de la logica pedida
    const totalProductos = productos.length;
    const productosDisponibles = productos.reduce((acumulador,producto)=> producto.enStock+acumulador, 0);
    const sumaTotalDisponibles = productos.reduce((acumulador,producto)=> producto.enStock? acumulador+producto.precio: acumulador, 0);

    //Modificando el DOM
    const textoTotalProductos = document.getElementById("resumen-catalogo");
    textoTotalProductos.textContent = `En total hay ${totalProductos} productos, ${productosDisponibles} estan disponibles y la sumatoria de precios de los que estan disponibles es S/. ${sumaTotalDisponibles}`;
}
resumirCatalogo(productos);

/* Cualquier producto cuyo precio sea menor a 40 soles debe eliminarse por completo de la vista, después de haberse mostrado inicialmente */
const tarjetaProductos = document.querySelectorAll(".tarjeta-producto");
for(const tarjeta of tarjetaProductos){
    const precio = parseFloat(tarjeta.querySelector(".precio-producto").textContent.slice(4));
    if(precio<40){
        tarjeta.remove();
    }
}