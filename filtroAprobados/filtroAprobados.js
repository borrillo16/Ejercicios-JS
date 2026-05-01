const boton = document.getElementById("btn-aprobados");
const lista = document.getElementById("lista");

const notas = [4, 8, 3, 10, 5];

boton.addEventListener("click", () => {
   lista.innerHTML = ""; 

    // 2. Recorremos el array. Nota es cada número (4, 8, 3...)
    notas.forEach(nota => {
        if (nota >= 5) {
            lista.innerHTML += `<LI>Aprobado con un: <b>${nota}</b></LI>`
        }else{
            lista.innerHTML += `<li>Suspenso con un: <i>${nota}</i></li>`
        }
   });
});