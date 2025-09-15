let listaNombresAmigos = [];
let amigosSorteados = [];
let maximoAmigos = 6;
let minimoAmigos = 2;


let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultadoSorteo = document.getElementById('resultado');

function agregarAmigo() {
    let nombre = inputAmigo.value.trim();
    
    // Validar que se haya agregado un nombre
    if (nombre == "") {
        alert("Por favor, escribe un nombre");
        return;
    }
    
    // Validar que no sea un número
    if (!isNaN(nombre)) {
        alert("Por favor, escribe un nombre válido, no un número");
        limpiarCaja();
        return;
    }
    
    // Validar que no se haya alcanzado el máximo de cantidad de Amigos para el sorteo
    if (listaNombresAmigos.length >= maximoAmigos) {
        alert(`El cupo máximo para agregar a tus amigos es de ${maximoAmigos}`);
        limpiarCaja();
        return;
    }

     
function limpiarCaja() {
   document.getElementById('amigo').value = '';
}
    
    // Validar que no exista ya en la lista
    if (listaNombresAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista");
        return;
    }
    
    // Agregar el nombre a la lista
    listaNombresAmigos.push(nombre);
    
    // Crear elemento de lista
    let listaNueva = document.createElement("li");
    listaNueva.textContent = nombre;
    
    // Agregar a la lista en el HTML
    listaAmigos.appendChild(listaNueva);
    limpiarCaja();

}

function reiniciarSorteo() {
    document.getElementById('listaAmigos').innerHTML = '';

    amigosSorteados = [];
     listaNombresAmigos = [];

     document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';  
    document.getElementById('amigo').value = '';           
    

}

function sortearAmigo() {
    if (listaNombresAmigos.length < 2) {
        alert("Necesitas al menos 2 amigos para realizar el sorteo");
        return;
    }

    
    let indiceAleatorio = Math.floor(Math.random() * listaNombresAmigos.length);
    let amigoSecreto = listaNombresAmigos[indiceAleatorio];

    // Verificar si ya fue sorteado 
    if (amigosSorteados.includes(amigoSecreto)) {
        return sortearAmigo(); 
    } else {
        amigosSorteados.push(amigoSecreto);
    }

    resultadoSorteo.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
    resultadoSorteo.appendChild(li);

    if (amigosSorteados.length === listaNombresAmigos.length) {
        setTimeout(() => {
        alert('¡Ya se sortearon todos los nombres!');
        reiniciarSorteo();
             
        }, 2000);
    }
       return amigoSecreto;
    }

    
