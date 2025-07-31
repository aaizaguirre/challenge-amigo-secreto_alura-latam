// Creación de un array para almacenar los nombres
let amigos = [];
let amigo = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

//Función para agregar amigos 
function agregarAmigo(){
    if (amigo.value.trim() === ""){
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(amigo.value.trim());
        amigo.value = "";
        actualizarAmigos();
    };
};

// Función para actualizar la lista de amigos
function actualizarAmigos(){
    resultado.innerHTML = "";
    lista.innerHTML = "";
    for(let i=0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    };
};

function sortearAmigo(){
    if (!amigos.length){
        alert("No se insertó ningún nombre");
    } else {
        lista.innerHTML = "";
        resultado.innerHTML = "";
        let indice = Math.floor(Math.random()*amigos.length);
        let mensaje = document.createElement("p");
        mensaje.textContent = "El amigo secreto sorteado es: " + amigos[indice];
        resultado.appendChild(mensaje);
        amigos.length = 0;
    };
};