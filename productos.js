// ============================================================
//  CONFIGURACIÓN — editá esto y listo
// ============================================================
window.CONFIG = {
  titulo: "Venta x mudanza",
  subtitulo: "Me mudo en diciembre y vendo cosas de casa. Retiro en zona — coordinamos por WhatsApp.",
  // Número en formato internacional, sin +, espacios ni guiones.
  // Argentina celular: 549 + código de área sin 0 + número sin 15. Ej: 5491123456789
  whatsapp: "5491169987319",
  moneda: "$",
  acento: "#ff385c",      // color de acento
  acentoTexto: "#ffffff", // color del texto sobre el acento
};

// ============================================================
//  PRODUCTOS
//  estado: "disponible" | "reservado" | "vendido"
//  fotos: rutas dentro de /fotos (la primera es la portada). Si está vacío, muestra un placeholder.
// ============================================================
window.PRODUCTOS = [
  {
    id: "comoda-6-cajones",
    nombre: "Cómoda vintage de 6 cajones",
    precio: null,
    categoria: "Muebles",
    estado: "disponible",
    descripcion: "Cómoda de los años 50/60 en madera enchapada, con marquetería geométrica en los frentes, tiradores de bronce y patas cónicas con punteras doradas. Seis cajones amplios. Ideal como cómoda, aparador o mueble para equipo de música.",
    fotos: [
      "fotos/comoda-6-cajones-1.jpg",
      "fotos/comoda-6-cajones-2.jpg",
      "fotos/comoda-6-cajones-3.jpg",
      "fotos/comoda-6-cajones-4.jpg",
      "fotos/comoda-6-cajones-5.jpg",
      "fotos/comoda-6-cajones-6.jpg",
    ],
  },
  {
    id: "mueble-cajones-puerta",
    nombre: "Mueble vintage con cajones y puerta",
    precio: null,
    categoria: "Muebles",
    estado: "disponible",
    descripcion: "Mueble estilo mid-century en madera lustrada, con dos cajones, una puerta lateral y patas cónicas. Sirve como aparador, mesa de arrimo o escritorio chico.",
    fotos: [
      "fotos/mueble-nogal-1.jpg",
      "fotos/mueble-nogal-2.jpg",
    ],
  },
  {
    id: "mesa-ratona",
    nombre: "Mesa ratona vintage con vidrio",
    precio: null,
    categoria: "Muebles",
    estado: "disponible",
    descripcion: "Mesa ratona de madera estilo mid-century, con tapa de vidrio, patas abiertas y un compartimento bajo el vidrio (pintado en verde agua) para guardar revistas, libros o lo que quieras tener a mano.",
    fotos: [
      "fotos/mesa-ratona-1.jpg",
      "fotos/mesa-ratona-2.jpg",
    ],
  },
  {
    id: "estanteria-mimbre",
    nombre: "Estantería de mimbre con arco",
    precio: null,
    categoria: "Muebles",
    estado: "disponible",
    descripcion: "Estantería alta de mimbre pintado de blanco, con remate en arco y cinco estantes. Súper liviana y decorativa: queda hermosa con plantas, libros o canastos.",
    fotos: [
      "fotos/estanteria-mimbre-1.jpg",
      "fotos/estanteria-mimbre-2.jpg",
    ],
  },
  {
    id: "mueble-vinilos",
    nombre: "Mueble para vinilos de hierro",
    precio: null,
    categoria: "Muebles",
    estado: "disponible",
    descripcion: "Mueble de hierro negro estilo retro, con estante superior de malla (ideal para la bandeja tocadiscos) y separador de discos abajo. Liviano, firme y con mucha onda.",
    fotos: [
      "fotos/mueble-vinilos-1.jpg",
      "fotos/mueble-vinilos-2.jpg",
      "fotos/mueble-vinilos-3.jpg",
    ],
  },
  {
    id: "perchero-estantes",
    nombre: "Perchero con estantes",
    precio: null,
    categoria: "Muebles",
    estado: "disponible",
    descripcion: "Perchero de hierro blanco con estantes de madera natural y barral para colgar ropa. Práctico para un dormitorio, una entrada o un monoambiente.",
    fotos: [
      "fotos/perchero-3.jpg",
      "fotos/perchero-1.jpg",
      "fotos/perchero-2.jpg",
    ],
  },
  {
    id: "espejo-ondulado",
    nombre: "Espejo vintage con marco ondulado",
    precio: null,
    categoria: "Muebles",
    estado: "disponible",
    descripcion: "Espejo antiguo con vidrio biselado y marco de madera oscura de forma ondulada. Trae cadena para colgar.",
    fotos: [
      "fotos/espejo-ondulado-1.jpg",
      "fotos/espejo-ondulado-2.jpg",
      "fotos/espejo-ondulado-3.jpg",
    ],
  },
  {
    id: "espejo-pie",
    nombre: "Espejo de pie",
    precio: null,
    categoria: "Muebles",
    estado: "disponible",
    descripcion: "Espejo de cuerpo entero con marco de madera y pata trasera para apoyarlo en el piso.",
    fotos: [
      "fotos/espejo-pie-1.jpg",
      "fotos/espejo-pie-2.jpg",
    ],
  },
  {
    id: "repisa-rombo",
    nombre: "Repisa de pared en rombo",
    precio: null,
    categoria: "Muebles",
    estado: "disponible",
    descripcion: "Repisa de pared con estructura de hierro blanco en forma de rombo y tres estantes de madera. Súper decorativa para libros, plantas y objetos.",
    fotos: [
      "fotos/repisa-rombo-1.jpg",
      "fotos/repisa-rombo-2.jpg",
      "fotos/repisa-rombo-3.jpg",
    ],
  },
];
