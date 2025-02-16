// Array vacío para agregar lista de nombres
let nombresUsuarios = [];

// Ingresar amigo
function agregarAmigo() {
    let input = document.querySelector('#amigo'); 
    let nombre = input.value.trim();
if (nombre === "") {
    alert("Ingresa un nombre válido");
    return;
}
// Agregar nombre al array
nombresUsuarios.push(nombre);
input.value = ""; // Limpiar campo de entrada
    actualizarLista();
}

// Función para actualizar lista en panalla
function actualizarLista() {
    let lista = document.querySelector("#listaAmigos"); // <li> es una etiqueta para crear elementos en bloque o lista
    lista.innerHTML = ""; // Limpia lista antes de actualizarla

    // Recorremos el array nombreUsuarios y agregamos cada nombre a la lista
    nombresUsuarios.forEach(function(nombre) {
        let elemento = document.createElement("li"); // Crea <li>
        elemento.textContent = nombre; // Se agrega nombre a <li>
        lista.appendChild(elemento); //Se agrega <ul> al <li>
    });
}

// Función que sortea amigos
function sortearAmigo() {
    if (nombresUsuarios.length === 0) {
        alert("Debes ingresar al menos un nombre a la lista");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * nombresUsuarios.length); // Generación de índice aleatorio
    let amigoSecreto = nombresUsuarios[indiceAleatorio];
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>¡El amigo secreto elegido es ${amigoSecreto}!</li>`
}