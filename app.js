// Creación de un array para almacenar los nombres
let amigos = [];
let amigo = document.getElementById("amigo");

//Función para agregar amigos 
function agregarAmigo(){
    if (amigo.value.trim() === ""){
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(amigo.value.trim());
        amigo.value = "";
    };
};
