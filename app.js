let nombres =  [];


function sortearAmigo(){
    console.log(nombres.length);
    const sorteo = Math.floor(Math.random()*nombres.length);
    console.log(sorteo);
    asignarTextoElemento('#listaAmigos', '');
    asignarTextoElemento('#resultado', `El amigo secreto sorteado es: ${nombres[sorteo]}` );    
    nombres.splice(sorteo, 1);
}

function agregarAmigo(){
    const input = document.getElementById("amigo");
    const valor = input.value.trim(); // Elimina espacios al inicio y final
    console.log(valor);
    asignarTextoElemento('#resultado', '');

    if (valor === "") {
        alert("El campo no puede estar vacío");
        input.focus(); // Lleva el cursor al campo
    } else {
        nombres.push(valor);
        console.log(nombres);
        crearParticipante();
        input.value = '';
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function crearParticipante(){
    asignarTextoElemento('#listaAmigos', '');
    for(let i = 0; i < nombres.length; i++){
        const li = document.createElement("li");
        li.textContent = nombres[i];
        document.getElementById("listaAmigos").appendChild(li);
    }
}

