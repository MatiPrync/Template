/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas-extended.json')          // Ruta al archivo JSON
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

  event.preventDefault()
  //alert("Comida agregada: " + event.target.nombre.value);

  const ingredientesInputs = document.querySelectorAll(".ingrediente");
  let ingredientes = []

  ingredientesInputs.forEach(winput => {
    ingredientes.push(input.value);
  })

  ingredientesContainer.innerHTML = ` 
  <input type="text class=ingrediente" placeholder="Ingrediente" rquiered>
  `

    

  let nuevaComida = {
  nombre:event.target.nombre.value,
  provincia:event.target.provincia.value,
  categoria:event.target.categoria.value,
  ingredientes: ingredientes
  }

  comidas.push(nuevaComida)
  mostrarComidasConFor(comidas)
  event.target.reset()
})

const filtroCategoria = document.getElementById("filtroCategoria")
const filtroProvincia = document.getElementById("filtroCategoria")
const busqueda = document.getElementById("buscador")

function filtrar() {
let comidasFiltradas = comidas.filter( comida => {
  return comida.categoria.includes(filtroCategoria.value)
   && comida.categoria.includes(filtroCategoria.value)
   && comida.provincia.includes(filtroProvincia.value)
})

mostrarComidasConFor(comidasFiltradas)
}

function buscar() {
  let comidasFiltradas = comidas.filter( comida => {
   return comida.nombre.toLowercase().includes(busqueda.value.toLowercase())
        ||  comida.provincia.toLowercase().includes(busqueda.value.toLowercase())
        ||  comida.categoria.toLowercase().includes(busqueda.value.toLowercase())
})

  mostrarComidas(comidasFiltradas)
}

filtroCategoria.addEventListener("change", filtrar)
filtroProvincia.addEventListener("change", filtrar)
busqueda.addEventListener("input", buscar)


const agregarIngredienteBtn = document.getElementById("agregarIngrediente")
const ingredientesContainer = document.querySelector(".contenedor-ingredientes")

agregarIngredienteBtn.addEventListener("click", () => {
  ingredientesContainer.innerHTML +=
    <input type="text class=ingrediente" placeholder="Ingrediente" rquiered>
})