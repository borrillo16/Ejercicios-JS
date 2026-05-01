const circulo = document.getElementById("luz");
const verde = document.getElementById("btn-verde");
const ambar = document.getElementById("btn-ambar");
const rojo = document.getElementById("btn-rojo");

verde.addEventListener("click", () => {
    circulo.style.backgroundColor = "green";
});

ambar.addEventListener("click", () => {
    circulo.style.backgroundColor = "orange";
});

rojo.addEventListener("click", () => {
    circulo.style.backgroundColor = "red";
    circulo.innerText = "ALTO";
});