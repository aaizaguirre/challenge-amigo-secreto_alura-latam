// Creación de un array para almacenar los nombres
let amigos = [];
let amigo = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");

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
    lista.innerHTML = "";
    for(let i=0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    };
};