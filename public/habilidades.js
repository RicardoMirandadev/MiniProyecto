const habilidades = [
  { nombre: "HTML", nivel: "Intermedio" },
  { nombre: "CSS", nivel: "Intermedio" },
  { nombre: "JavaScript", nivel: "Básico" },
  { nombre: "Git", nivel: "Básico" }
];

const lista = document.getElementById("lista-habilidades");

habilidades.forEach(habilidad => {
  lista.innerHTML += `
    <div>
      <h3>${habilidad.nombre}</h3>
      <p>${habilidad.nivel}</p>
    </div>
  `;
});

document.getElementById("enviar").addEventListener("click", function(e){
    e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if(!nombre || !email || !mensaje){
    alert("Completa todos los campos");
    return;
  }

  alert("Formulario enviado");
});