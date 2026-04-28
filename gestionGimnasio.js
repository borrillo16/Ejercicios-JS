const inputNombre = document.getElementById("nombre");
const inputPeso = document.getElementById("peso");
const btnRegistrar = document.getElementById("btn-registrar");
const btnRecargar = document.getElementById("btn-recargar");
const lista = document.getElementById("lista");


btnRegistrar.addEventListener("click", () => {
    let nombreCargado = inputNombre.value;
    let pesoCargado = inputPeso.value;
    let style = "";

    if(pesoCargado > 100){
        style = "intensivo";
    }else {
        style = "normal"
    }

    lista.innerHTML += `
    
        <li class="${style}">${capitalizar(nombreCargado)}: ${pesoCargado} Kg</ul>
    
    `;
    inputNombre.value = "";
    inputPeso.value = "";
});
// Función para que el primer caracter sea mayuscula.
function capitalizar(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}


btnRecargar.addEventListener("click", () => {
    lista.innerHTML = "";

});