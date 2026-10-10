# Proyectos de Oscar

Portada animada para los seis proyectos de OscarD0823, con identidad vectorial propia, escenas temáticas y apartados por tipo de herramienta.

| Apartado | Proyecto | Destino |
| --- | --- | --- |
| Sorteos | Fortuna Real | https://oscard0823.github.io/Fortuna-Real/ |
| Juegos | Caja Fantasma | https://oscard0823.github.io/Caja-Fantasma/ |
| Documentos | Prisma PDF | https://oscard0823.github.io/prisma-pdf/ |
| Modding | SnowRunner Studio | https://github.com/OscarD0823/snowrunner |
| Modding | RoadCraft Studio | https://github.com/OscarD0823/roadcraft |
| Utilidades | Lankdea | https://github.com/OscarD0823/Lankdea-APK |

Los archivos públicos están en `dist/`. Es una página estática sin dependencias.

## Vista local

```sh
python -m http.server 4173 --directory dist
```

Abre http://localhost:4173/.

## Publicación

GitHub Actions publica `dist/` en GitHub Pages al enviar cambios a `main`.

Las rutas de recursos son relativas para funcionar bajo una ruta de proyecto o en un dominio raíz.

Las animaciones se pueden pausar con el botón del encabezado; la preferencia se conserva localmente cuando el navegador permite almacenamiento. Respetan la preferencia de reducir movimiento y se detienen cuando una tarjeta está fuera de pantalla o la pestaña está oculta.

Los filtros se activan con JavaScript. Sin JavaScript, todos los proyectos y enlaces siguen disponibles. La cuadrícula muestra tres columnas en escritorio grande, dos en tamaños intermedios y una en móvil.

Para añadir otra herramienta de documentos, usa `data-category="documentos"` en su tarjeta. Para herramientas personales como Lankdea, usa `utilidades`; para sorteos, `sorteos`. Los contadores de los filtros se calculan automáticamente a partir de las tarjetas. No se muestran tarjetas ficticias para futuros proyectos.

Las tarjetas no muestran versiones de los programas para evitar mantenimiento con cada lanzamiento. Sus enlaces apuntan a las páginas o repositorios de cada proyecto.
