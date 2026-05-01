const input = document.getElementById("texto");
const boton = document.getElementById("btn-añadir");
const estado = document.getElementById("prioridad");
const lista = document.getElementById("lista-tarea");


let tareas = [];
// Pasamos los datos a texto y luego lo parseamos.
const datosGuardados = localStorage.getItem("mis_tareas");
if (datosGuardados !== null) {
    tareas = JSON.parse(datosGuardados);
    pintarTareas();
}
boton.addEventListener ("click", () => {
    const error = document.getElementById("error");
    const nombre = input.value.trim();
    const prioridad = estado.value;
    const tareaObjeto = {
        texto: nombre,
        urgencia: prioridad,
        completada: false  // <-- booleano
    };
   // Añadimos tareas con (push) a la lista.
    if (nombre !== "") {
        tareas.push(tareaObjeto);
        guardarEnLocalStorage();
        input.value = "";
        error.innerText = "";
    }else {
        error.innerText = "Escribe el nombre de la tarea."
    }
    

        
    
  
    pintarTareas();
});

// Función para que el primer caracter sea mayuscula.
function capitalizar(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function pintarTareas() {
    const mensaje = document.getElementById("mensaje-contador");
    const pendientes = tareas.filter(tareas => tareas.completada === false);
    if (tareas.length === 0) {
        mensaje.innerText = "¡Felicidades! No tienes tareas pendientes."
    }else{
        mensaje.innerText = `tienes  ${pendientes.length}  tareas`;
    }
    lista.innerHTML = "";
    tareas.forEach ((tarea, indice) => {
        let color = "black";
        let marcador = "";
        let botonHTML = "";

        if (tarea.completada === false){
            botonHTML =  `<button onclick="borrarTarea(${indice})">Eliminar</button>`
        }

        if (tarea.urgencia === "Urgente") {
            color = "red";
        }
   
        if (tarea.completada) {
            marcador = "text-decoration: line-through";
        }

       

        lista.innerHTML += `
        <li style="color: ${color}; ${marcador}">
        <span onclick="marcarTareas(${indice})" style="cursor:pointer">
        ${capitalizar(tarea.texto)}
        </span> 
         ${tarea.urgencia}  ${botonHTML}
     
        </li>`;
       
    });

  
} 
// Función para borrar tareas de la lista.
function borrarTarea(posicion)  {
    tareas.splice(posicion, 1);
    guardarEnLocalStorage();

    pintarTareas();
   
};
// Función para guardar datos en memoria del navegador.
function guardarEnLocalStorage() {
    const lista = JSON.stringify(tareas);
    localStorage.setItem("mis_tareas", lista);
};

// Función para tachar las tareas finalizadas.

function marcarTareas(indice) {
    tareas[indice].completada = !tareas[indice].completada;
    guardarEnLocalStorage();
    pintarTareas();
}