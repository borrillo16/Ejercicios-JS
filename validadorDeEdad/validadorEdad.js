const input = document.getElementById("numero");
const boton = document.getElementById("validar");
const parrafo = document.getElementById("resultado");

boton.addEventListener("click", () => {
    let edad = Number(input.value);
    if (edad >= 18) {
        parrafo.innerText = "Eres mayor de edad";
        parrafo.style.color = "green";
    }else {
        parrafo.innerText = "Eres menor de edad";
        parrafo.style.color = "red";
    }
});