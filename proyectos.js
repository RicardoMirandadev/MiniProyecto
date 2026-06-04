
const misProyectos = [
  {
    titulo: "Maintenance Technician",
    descripcion: "Trabajos especializados de mantenimiento industrial y soldadura en altura.",
    imagen: "./public/hig.jpg"
  },
  {
    titulo: "Field Photography & Fixer",
    descripcion: "Producción de campo bilingüe y fotografía documental para el RAMM Museum de Inglaterra.",
    imagen: "./public/foto.jpg"
  },
  {
    titulo: "Welding & Fabrication",
    descripcion: "Diseño, corte y ensamble de piezas metálicas y herramientas personalizadas.",
    imagen: "./public/work.jpg"
  }
];


const contenedorProyectos = document.getElementById("contenedor-proyectos");


misProyectos.forEach((proyecto) => {
  contenedorProyectos.innerHTML += `
    <div class="bg-deep-blue rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(227,255,106,0.3)]">
      <div class="h-60 overflow-hidden relative group">
        <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
      </div>
      <div class="p-6">
        <h3 class="text-light text-xl font-bold mb-2 ">${proyecto.titulo}</h3>
        <p class="text-soft-gray text-sm leading-relaxed">${proyecto.descripcion}</p>
      </div>
    </div>
  `;
});