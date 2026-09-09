# Carpeta de Proyectos (`src/data/`)

Este directorio permite agregar o modificar los proyectos mostrados en el portafolio sin necesidad de tocar código React o JSX.

## ¿Cómo agregar un nuevo proyecto?

Abre el archivo `src/data/projects.json` y agrega un nuevo objeto al array. Puedes escribir los textos en español e inglés para que cambien dinámicamente cuando el visitante use el selector de idioma (ES / EN):

```json
{
  "id": 4,
  "title": {
    "es": "Nombre del Proyecto en Español",
    "en": "Project Title in English"
  },
  "company": "Empresa o Cliente (Opcional)",
  "description": {
    "es": "Breve descripción técnica del sistema, decisiones de arquitectura y logros obtenidos.",
    "en": "Technical summary of the system, architecture decisions and achievements."
  },
  "category": {
    "es": "Backend / Microservicios",
    "en": "Backend / Microservices"
  },
  "technologies": ["Java", "Spring Boot", "Docker", "PostgreSQL"],
  "image": "https://images.unsplash.com/... (URL de imagen representativa)",
  "liveUrl": "https://tu-demo.com (dejar vacío \"\" si no aplica)",
  "repositoryUrl": "https://github.com/Saidres/tu-repo (dejar vacío \"\" si es privado)"
}
```

> **Nota**: También puedes pasar texto simple como `"title": "Mi Proyecto"` si solo deseas un texto único; el sistema lo soportará automáticamente en ambos idiomas.

### Campos disponibles:
- **id**: Identificador numérico único (ej. 1, 2, 3...).
- **title**: Título del proyecto (objeto con `es` y `en`, o string simple).
- **company**: Empresa, cliente o iniciativa (se muestra como badge elegante).
- **description**: Resumen del problema resuelto y arquitectura implementada (objeto con `es` y `en`, o string simple).
- **category**: Etiqueta técnica (objeto con `es` y `en`, o string simple).
- **technologies**: Lista de tecnologías utilizadas (se renderizan como badges individuales).
- **image**: URL de imagen de presentación (se recomienda Unsplash o imagen en `public/`).
- **liveUrl**: Enlace a la demo en vivo (si se deja en blanco `""`, el botón no se muestra).
- **repositoryUrl**: Enlace al repositorio de GitHub (si se deja en blanco `""`, el botón no se muestra).
