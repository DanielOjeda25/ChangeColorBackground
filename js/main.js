//creamos una conexcion con los elementos html
const button = document.querySelector("button");
const h2El = document.querySelector("h1");
const divEl = document.querySelector("div");

//Agregamos un evento al boton
button.addEventListener("click", () => {
    let color = "#";
    //a esta variable guardamos un numero random, pasado 16 digitos a string, y cortamos desde la posicion 2 a la 8
    color += Math.random().toString(16).slice(2, 8);
    //guardamos el elemento modificando el stilo del fondo
    divEl.style.backgroundColor = color;
    //mostramos el valor del elemento
    h2El.innerText = color;
});