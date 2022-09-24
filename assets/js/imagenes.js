import Animales from "./consulta.js";


document.getElementById("animal").addEventListener('change', async () => {
    const { animales } = await Animales.getData();
    const animal = document.getElementById("animal").value;
    const previewAnimal = document.getElementById("preview");

    animales.forEach((element) => {
        if (element.name == animal) {
            previewAnimal.innerHTML = `<img height="220px" src="./assets/imgs/${element.imagen}"/>`;
        };
    });
});