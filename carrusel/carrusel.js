const imagenes = document.querySelectorAll('.carrusel-imagen');
let indice = 0;

setInterval(() => {
    imagenes[indice].classList.remove('activa');
    indice = (indice + 1) % imagenes.length;
    imagenes[indice].classList.add('activa');
}, 4000);