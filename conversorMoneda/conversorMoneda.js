const input = document.getElementById("euros");
const boton = document.getElementById("dolar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
    let numero = Number(input.value);
    numero = numero * 1.08;
    resultado.innerText = `El resultado Es: ${numero.toFixed(2)}`;
});