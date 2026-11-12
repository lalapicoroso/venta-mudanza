// ============================================================
//  CONFIGURACIÓN — editá esto y listo
// ============================================================
window.CONFIG = {
  titulo: "Venta x mudanza",
  subtitulo: "Me mudo en diciembre y vendo cosas de casa. Retiro en zona — coordinamos por WhatsApp.",
  // Número en formato internacional, sin +, espacios ni guiones.
  // Argentina celular: 549 + código de área sin 0 + número sin 15. Ej: 5491123456789
  whatsapp: "5491100000000",
  moneda: "$",
};

// ============================================================
//  PRODUCTOS
//  estado: "disponible" | "reservado" | "vendido"
//  fotos: rutas dentro de /fotos (la primera es la portada). Si está vacío, muestra un placeholder.
// ============================================================
window.PRODUCTOS = [
  {
    id: "sofa",
    nombre: "Sofá 3 cuerpos",
    precio: 180000,
    categoria: "Living",
    estado: "disponible",
    descripcion: "Tela gris, 2 años de uso, muy buen estado. 210 × 90 cm.",
    fotos: [],
  },
  {
    id: "mesa-comedor",
    nombre: "Mesa de comedor + 4 sillas",
    precio: 150000,
    categoria: "Comedor",
    estado: "disponible",
    descripcion: "Madera maciza, 140 × 80 cm. Las sillas tienen algún detalle de uso.",
    fotos: [],
  },
  {
    id: "microondas",
    nombre: "Microondas",
    precio: 45000,
    categoria: "Cocina",
    estado: "reservado",
    descripcion: "20 litros, funciona perfecto.",
    fotos: [],
  },
  {
    id: "lampara",
    nombre: "Lámpara de pie",
    precio: 25000,
    categoria: "Living",
    estado: "vendido",
    descripcion: "Metal negro, luz cálida. Incluye lamparita.",
    fotos: [],
  },
];
