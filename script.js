

const dispositivos = [
  {
    nombre: "Desktop Gaming",
    categoria: "Desktop",
    descripcion: "PC de escritorio para tareas diarias y videojuegos.",
    especificaciones: "16 GB RAM · SSD 1 TB",
    imagen: "https://placehold.co/600x400/1e293b/ffffff?text=Desktop"
  },
  {
    nombre: "Workstation Pro",
    categoria: "Workstation",
    descripcion: "Equipo para diseño 3D, ingeniería y edición.",
    especificaciones: "32 GB RAM · SSD 2 TB",
    imagen: "https://placehold.co/600x400/334155/ffffff?text=Workstation"
  },
  {
    nombre: "Laptop Ultrabook",
    categoria: "Laptop",
    descripcion: "Computadora portátil para estudiar y trabajar.",
    especificaciones: "16 GB RAM · SSD 512 GB",
    imagen: "https://placehold.co/600x400/475569/ffffff?text=Laptop"
  },
  {
    nombre: "Smartphone",
    categoria: "Móviles",
    descripcion: "Dispositivo móvil para comunicación y aplicaciones.",
    especificaciones: "Pantalla táctil · Cámara integrada",
    imagen: "https://placehold.co/600x400/0f766e/ffffff?text=Smartphone"
  }
];

const catalogo = document.getElementById("catalogo");
const busqueda = document.getElementById("busqueda");
const botones = document.querySelectorAll("[data-categoria]");

let categoriaActual = "Todos";

function mostrarDispositivos() {
  const termino = busqueda.value.toLowerCase().trim();

  const resultados = dispositivos.filter(dispositivo => {
    const coincideCategoria =
      categoriaActual === "Todos" ||
      dispositivo.categoria === categoriaActual;

    const texto = (
      dispositivo.nombre + " " +
      dispositivo.categoria + " " +
      dispositivo.descripcion
    ).toLowerCase();

    return coincideCategoria && texto.includes(termino);
  });

  catalogo.replaceChildren();

  if (resultados.length === 0) {
    catalogo.textContent = "No se encontraron dispositivos.";
    return;
  }

  resultados.forEach(dispositivo => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";

    const imagen = document.createElement("img");
    imagen.src = dispositivo.imagen;
    imagen.alt = dispositivo.nombre;
    imagen.loading = "lazy";

    const contenido = document.createElement("div");
    contenido.className = "contenido";

    const etiqueta = document.createElement("span");
    etiqueta.className = "categoria";
    etiqueta.textContent = dispositivo.categoria;

    const titulo = document.createElement("h3");
    titulo.textContent = dispositivo.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = dispositivo.descripcion;

    const especificaciones = document.createElement("p");
    especificaciones.textContent = dispositivo.especificaciones;

    contenido.append(etiqueta, titulo, descripcion, especificaciones);
    tarjeta.append(imagen, contenido);
    catalogo.append(tarjeta);
  });
}

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    categoriaActual = boton.dataset.categoria;

    botones.forEach(item => item.classList.remove("activo"));
    boton.classList.add("activo");

    mostrarDispositivos();
  });
});

busqueda.addEventListener("input", mostrarDispositivos);

mostrarDispositivos();
