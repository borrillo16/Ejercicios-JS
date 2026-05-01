const boton = document.getElementById("modo");
const texto = document.getElementById("texto");

boton.addEventListener("click", () => {
    if(document.body.classList.toggle("oscuro")) {
        texto.innerText = "Modo Noche";
    }else{
        texto.innerText = "Modo Día";
    }
});