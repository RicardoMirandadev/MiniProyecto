const misHabilidades = [
  { id: "skill-html", nivel: "Intermedio" },
  { id: "skill-ailustrator", nivel: "intermedio" },
  { id: "skill-photoshop", nivel: "intermedio" },
  { id: "skill-premier", nivel: "Básico" },
  { id: "skill-github", nivel: "Básico" },
  { id: "skill-css", nivel: "Intermedio" },
  { id: "skill-js", nivel: "Básico" },
  { id: "skill-git", nivel: "Básico" },
  { id: "skill-unreal", nivel: "Intermedio" },
  { id: "skill-word", nivel: "Avanzado" },
  { id: "skill-powerpoint", nivel: "Avanzado" },
  { id: "skill-excel", nivel: "Intermedio" },
  { id: "skill-blender", nivel: "Básico" },
  { id: "skill-cpp", nivel: "Básico" },
  { id: "skill-logica", nivel: "Avanzado" }
];

misHabilidades.forEach((habilidad) => {
  const tarjeta = document.getElementById(habilidad.id);
  if (tarjeta) {
  
    tarjeta.innerHTML += `<p class="text-[10px] text-soft-gray uppercase tracking-wider mt-2">${habilidad.nivel}</p>`;
  }
});


document.getElementById("enviar").addEventListener("click", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if (!nombre || !email || !mensaje) {
    alert("Completa todos los campos");
    return;
  }

  alert("Formulario enviado");
});


const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});





