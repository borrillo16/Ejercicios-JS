const inputNombre = document.getElementById("nombre");
const inputNota = document.getElementById("nota");
const boton = document.getElementById("btn-añadir");
const tabla = document.getElementById("cuerpo-tabla");

boton.addEventListener("click", () => {
    let nombreCargado = inputNombre.value;
    let notaCargada = inputNota.value;
    let clase = "";

    if(nota <= 5){
        clase = "suspenso";
    }else{
        clase = "aprobado";
    }
    if(inputNombre.value, inputNota.value === ""){
        alert("Campos obligatorios");
    }

    tabla.innerHTML += `<tr class="${clase}">
        <td>${nombreCargado}</td>
        <td>${notaCargada}</td>
    </tr>`;

    inputNombre.value = "";
    inputNota.value = "";
});
