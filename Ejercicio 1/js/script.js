//Color Aleatorio

let min = 0;
let max = 255;


//Funcion de Cambio de Color cuando está dentro de los parrafos
function mouseEnter(event) {
    const p = event.currentTarget;
    function aleatorio(min, max){
        return(Math.floor(Math.random() * (max - min) + min));
    }
    let x = aleatorio(min, max);
    let y = aleatorio(min, max);
    let z = aleatorio(min, max);
    
    let color = 'rgb('+ x +','+ y +','+ z +')';
    p.style.color = color;
}

let parrafosDentro = document.querySelectorAll('p');
for(let i = 0; i < parrafosDentro.length; i++){
    parrafosDentro[i].addEventListener('mouseenter', mouseEnter);
}

//Funcion de Vuelta al color original cuando está fuera de los parrafos
function mouseLeave(event) {
    const p = event.currentTarget;
    p.style.color = 'black';
}

let parrafosFuera = document.querySelectorAll('p');
for(let i = 0; i < parrafosFuera.length; i++){
    parrafosFuera[i].addEventListener('mouseleave', mouseLeave);
}   