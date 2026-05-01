// 1. ATRAMAPOS LOS ELEMENTOS (El cableado)
const input = document.getElementById("input-producto");
const boton = document.getElementById("btn-añadir");
const listaUl = document.getElementById("lista-cesta");

// 2. NUESTRA MOCHILA (Donde guardaremos los nombres de los productos)
let cesta = [];

// 3. EL EVENTO (Cuando el usuario hace clic)
boton.addEventListener("click", () => {
    
    // Cogemos lo que hay en el cuadro
    const nuevoProducto = input.value.trim();

    if (nuevoProducto !== "") {
        // Metemos el producto en la mochila
        cesta.push(nuevoProducto);
        
        // Limpiamos el cuadro para el siguiente producto
        input.value = "";

        // LLAMAMOS AL OBRERO PARA QUE PINTE
        pintarCesta();
    }
});

// 4. EL OBRERO (La función que dibuja en el HTML)
function pintarCesta() {
    // Primero vaciamos la lista para que no se repitan los de antes
    listaUl.innerHTML = "";

    // Recorremos la mochila y creamos un <li> por cada producto
    cesta.forEach((producto) => {
        listaUl.innerHTML += `<li>🛒 ${producto}</li>`;
    });
}

const buscador = document.getElementById("buscador-cesta");

buscador.addEventListener("input", (event) => {
    const texto = event.target.value.toLowerCase();

    // FILTRAMOS la mochila (cesta)
    const productosFiltrados = cesta.filter(producto => 
        producto.toLowerCase().includes(texto)
    );

    // REUTILIZAMOS al Obrero, pero esta vez le pasamos los filtrados
    pintarCesta(productosFiltrados); 
});