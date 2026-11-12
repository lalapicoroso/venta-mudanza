# Venta x mudanza

Catálogo estático: cada producto tiene un botón que abre WhatsApp con un mensaje ya escrito.

## Cómo editar
- **Todo se edita en `productos.js`**: número de WhatsApp, título y la lista de productos.
- Fotos: subilas a la carpeta `fotos/` y referencialas como `"fotos/sofa-1.jpg"`. Mejor si pesan menos de ~300 KB (exportá a 1200 px de ancho).
- Para marcar algo como reservado o vendido, cambiá `estado` a `"reservado"` o `"vendido"`.
- Link directo a un producto: `https://<usuario>.github.io/<repo>/#<id>`

## Publicar
Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
