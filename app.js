// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un nombre a la lista
function agregarNombre() {
  let inputNombre = document.getElementById("nombre");
  let nombre = inputNombre.value.trim();  // Obtener el nombre ingresado

  // Verificar que el nombre no esté vacío
  if (nombre === "") {
    alert("Por favor, ingresa un nombre.");
    return;
  }

  // Agregar el nombre a la lista
  listaAmigos.push(nombre);
  inputNombre.value = "";  // Limpiar el campo de texto

  // Actualizar la lista visible
  mostrarListaAmigos();
}

// Función para mostrar los nombres en la lista
function mostrarListaAmigos() {
  let listaElement = document.getElementById("listaAmigos");
  listaElement.innerHTML = "";  // Limpiar la lista actual

  // Crear un nuevo elemento de lista por cada nombre
  listaAmigos.forEach((nombre) => {
    let li = document.createElement("li");
    li.textContent = nombre;
    listaElement.appendChild(li);
  });
}

// Función para realizar el sorteo y mostrar el resultado
function realizarSorteo() {
  if (listaAmigos.length < 1) {
    alert("Por favor, agrega al menos un amigo a la lista.");
    return;
  }

  // Seleccionar un nombre aleatorio de la lista
  let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  let amigoSecreto = listaAmigos[indiceAleatorio];

  // Mostrar el resultado en la pantalla
  let resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
}
