//Colores del Gato

let color = ["blue", "red"];
let i = 0;

function colorGato(event) {
    //*nota personal* debo practicar más el uso de este operador ternario.
    i = i <= color.length ? ++i : 0;
    event.target.style.backgroundColor = color[i];
}
//*nota* tratar de realizar el juego ya con circulos y equis

let cuadradosGato = document.querySelectorAll('div');

for (let i = 0; i < elements.length; i++) {
    cuadradosGato[i].addEventListener('click', colorGato);
}

