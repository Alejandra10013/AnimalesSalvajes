// IMPORTANDO ANIMALES
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/animales.js";

let animales = [];

let btnRegistro = document.getElementById("btnRegistrar");

btnRegistro.addEventListener("click", () => {

    let nombre = document.getElementById("animal").value;
    let edad = document.getElementById("edad").value;
    let comentario = document.getElementById("comentarios").value;
    let preview = document.getElementById("preview").innerHTML;


    if ((nombre == "") || (edad == "") || (comentario == "") || (preview == "")) {
        alert("Complete el formulario");
    } else {

        let nuevoAnimal;

        // INSTANCIAS SEGUN ANIMAL

        if (nombre === "Leon") {
            nuevoAnimal = new Leon(nombre, edad, comentario, preview, "rugir")
        } else if (nombre === "Lobo") {
            nuevoAnimal = new Lobo(nombre, edad, comentario, preview, "aullar")
        } else if (nombre === "Oso") {
            nuevoAnimal = new Oso(nombre, edad, comentario, preview, "gruñir")
        } else if (nombre === "Serpiente") {
            nuevoAnimal = new Serpiente(nombre, edad, comentario, preview, "sisear")
        } else if (nombre === "Aguila") {
            nuevoAnimal = new Aguila(nombre, edad, comentario, preview, "chillar")
        }

        animales.push(nuevoAnimal);

        // CARGANDO TABLA
        cargarTabla();

        document.getElementById("animal").value = "inicial";
        document.getElementById("edad").value = "inicial";
        document.getElementById("comentarios").value = "";
        document.getElementById("preview").innerHTML = "";
    }
});

// AGREGAR ANIMALES A LA TABLA
const cargarTabla = () => {
    const tablaAnimales = document.getElementById("Animales");

    tablaAnimales.innerHTML = "";

    animales.forEach((item) => {

        let sonido;

        // METODO DE SONIDO PARA CADA ANIMAL
        if (item.getSonido() === "rugir") {
            sonido = item.rugir();
        } else if (item.getSonido() === "aullar") {
            sonido = item.aullar();
        } else if (item.getSonido() === "gruñir") {
            sonido = item.gruñir();
        } else if (item.getSonido() === "sisear") {
            sonido = item.sisear();
        } else if (item.getSonido() === "chillar") {
            sonido = item.chillar();
        }

        // MANIPULANDO EL DOM
        tablaAnimales.innerHTML +=
            `
                <div class="card text-white bg-dark mr-3" style="width: 15rem">
                    ${item.getImg()}
                    <div class="card-body">
                        <h4 class="card-title">${item.getNombre()}, ${item.getEdad()}</h4>
                        <p class="card-text">Comentarios: ${item.getComentarios()}</p>
                    </div>
                </div>
            `;

        // this.modalAnimal(item.getNombre(), item.getEdad(), item.getComentarios(), item.getImg());
    })

    // modalAnimal(getNombre(), getEdad(), getComentarios(), getimg()) {        el modal deberia funcionar pero los parametros son incorrectos?
    //     const nuevoModal = document.getElementById("modalAnimal");
    //     const printModal = `
    //         <div class="img-modal">
    //             <img src="./assets/imgs/${getImg()}" alt="">
    //         </div>
    //         <div class="cuerpo-modal">
    //             <h5>${getEdad()}</h5>
    //             <h3>Comentarios: </h3>
    //             <hr>
    //             <p>${getComentarios()}</p>
    //         </div>
    //     `;

    //     nuevoModal.innerHTML += printModal;
    // }
}