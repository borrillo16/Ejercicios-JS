const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=30"

let pokemonOriginal = [];

async function obtenerPokemon() {
    const respuesta = await fetch(API_URL);
    const datos = await respuesta.json();
    pokemonOriginal = datos.results;

    pokemonOriginal.forEach(async(item) => {
        const respuesta = await fetch(item.url);
        const detalle = await respuesta.json();
        pintarPokemon(detalle);
    });
}
function pintarPokemon(datos) {
    const list = document.getElementById("lista-pokemon");
    const card = document.createElement("div");
    const nombre = document.createElement("h2");
    const img = document.createElement("img")
    nombre.textContent = datos.name;
    img.src = datos.sprites.front_default;
    card.appendChild(nombre);
    card.appendChild(img);
    list.appendChild(card);

}

async function buscarPokemon() {
    // 1. Capturamos el nombre
    const nombre = document.getElementById("input-busqueda").value.toLowerCase();
    if(nombre === "") return;

    // 2. Limpiamos el contenedor (la "pared")
    const list = document.getElementById("lista-pokemon");
    list.innerHTML = "";

    // 3. Pedimos los datos del Pokémon específico
    const urlBusqueda = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
    const respuesta = await fetch(urlBusqueda);

    // 4. Si la API lo encuentra, lo pintamos
    if (respuesta.ok) {
        const datos = await respuesta.json();
        pintarPokemon(datos);
    }else {
        alert("Pokémon no encontrado.");
    }
}


function limpiarPokemon() {
    document.getElementById("lista-pokemon").innerHTML = "";
    document.getElementById("input-busqueda").value = "";

}
document.getElementById("btn-buscar").addEventListener("click", buscarPokemon);
document.getElementById("btn-limpiar").addEventListener("click", limpiarPokemon);


/*
// 1. Atrapamos los tres elementos
const cuadro = document.getElementById("nombre");
const boton = document.getElementById("btn-saludo");
const destino = document.getElementById("contenedor-saludo");

// 2. Ponemos el "oído" al botón
boton.addEventListener("click", () => {
    
    // 3. CAPTURAMOS lo que hay escrito en ese momento
    const nombreEnElCuadro = cuadro.value;

    // 4. VALIDACIÓN (Lógica básica)
    if (nombreEnElCuadro === "") {
        destino.innerHTML = "<p style='color:red;'>Por favor, escribe algo primero.</p>";
    } else {
        // 5. MOSTRAR el resultado
        destino.innerHTML = `<h3>¡Hola, ${nombreEnElCuadro}, qué alegría verte!</h3>`;
    }
});


const precios = [5, 12, 50, 8, 25, 40, 10];

// El filtro recorre cada "p" (precio) de la lista
const baratos = precios.filter(p => {
    // ¿Qué condición pondrías aquí para que solo pasen los menores de 20?
    return p < 20; 
});

console.log(baratos); 
// Debería mostrar: [5, 12, 8, 10]
*/