/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;                // Asignar el JSON a la variable comidas
    mostrarComidasConForEach()
  })
  .catch(error => {                   // Manejo de errores
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = [];

const comidaContainer = document.getElementById("comidaContainer");

function mostrarComidasConFor() {
  comidaContainer.innerHTML = ""; 
  for (let i = 0; i < comidas.length; i++) {
    comidaContainer.innerHTML += `
      <article class="card">
        <h2>${comidas[i].nombre}</h2>
        <p>${comidas[i].provincia}</p>
        <span class="categoria">${comidas[i].categoria}</span>
        <ul>
          ${comidas[i].ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
        </ul>
      </article>
    `;
  }
}

function mostrarComidasConForEach() {
  comidaContainer.innerHTML = ""; 
  comidas.forEach(comida => {
    comidaContainer.innerHTML += `
      <article class="card">
        <h2>${comida.nombre}</h2>
        <p>${comida.provincia}</p>
        <span class="categoria">${comida.categoria}</span>
        <ul>
          ${comida.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
        </ul>
      </article>
    `;  
  });
}

const agregarComidaForm = document.getElementById ("agregarComidaForm")

agregarComidaForm.addEventListener("submit", (event) => {

  alert("Comida agregada: " + event.target.nombre.value);

  let nuevaComida = {
  nombre:event.target.nombre.value,
  provincia:event.target.provincia.value,
  categoria:event.target.categoria.value,
  ingredientes:event.target.ingredientes.value
  }

  comidas.push(nuevaComida)
  mostrarComidasConFor(comidas)
  event.target.reset()
})