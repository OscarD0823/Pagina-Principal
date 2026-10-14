# Proyectos de Oscar

Portada animada para los seis proyectos de OscarD0823, con identidad vectorial propia, escenas temáticas y apartados por tipo de herramienta.

| Apartado | Proyecto | Destino |
| --- | --- | --- |
| Sorteos | Fortuna Real | https://oscard0823.github.io/Fortuna-Real/ |
| Juegos | Caja Fantasma | https://oscard0823.github.io/Caja-Fantasma/ |
| Documentos | Asteoria Folio | https://oscard0823.github.io/asteoria-folio/ |
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

Fortuna Real, Caja Fantasma y Asteoria Folio abren sus páginas en la misma pestaña. Los enlaces a los repositorios de SnowRunner Studio, RoadCraft Studio y Lankdea siguen abriendo GitHub en otra pestaña.

## Instalar como aplicación

La portada es una PWA: tiene manifiesto, iconos propios y se abre en una ventana independiente al instalarla desde un navegador compatible. El botón **Instalar** usa la confirmación nativa del navegador cuando está disponible; en otro caso muestra una guía para computador, Android y Safari en iPhone/iPad. No se instala nada automáticamente. El botón se oculta al abrir la app instalada.

En Chrome o Edge, abre https://oscard0823.github.io/Pagina-Principal/ y pulsa **Instalar**, o busca la opción de instalación en el navegador. En Safari para iPhone/iPad, usa **Compartir → Añadir a pantalla de inicio** y activa **Abrir como app web** si aparece.

Tras la primera carga completa, el service worker guarda la portada, sus estilos, scripts, iconos e ilustraciones para poder abrirla sin conexión. Los destinos de los proyectos son sitios independientes y pueden seguir necesitando Internet. El guardado funciona con HTTPS o localhost; no al abrir `index.html` directamente como archivo.

El worker tiene el alcance relativo de esta página (en GitHub Pages, `/Pagina-Principal/`). Solo intercepta la portada y una lista explícita de sus recursos; no guarda ni modifica las páginas de los otros proyectos. Al actualizarse, solo elimina sus propias cachés antiguas. Con conexión se consulta la red primero para recibir los cambios publicados, sin mantener versiones visibles en las tarjetas.

Referencias de instalación: [guía de Chrome/web.dev](https://web.dev/articles/customize-install) y [guía de Safari de Apple](https://support.apple.com/es-co/guide/iphone/iphea86e5236/ios).

ASTEORIA y sus ocho herramientas se enlazan por separado desde Documentos. Asteoria Folio dispone de su propia tarjeta y ruta; ASTEORIA abre la aplicación general en /asteoria/. Cada enlace web permanece en la misma pestaña.

Cada tarjeta de la familia ASTEORIA tiene una escena propia: biblioteca de aplicaciones, escritura, cálculos, diapositivas, relaciones entre tablas y maquetación editorial. La escena original de PDF se conserva como referencia visual. Estas ilustraciones no ejecutan los editores ni modifican documentos; funcionan sin dependencias nuevas y se pausan con los mismos controles del resto de la colección.


ASTEORIA BETA reúne ocho herramientas independientes: Scribe, Orbit, Nova, Folio, Canvas, Atlas, Nexus y Lore. Sus tarjetas y la global enlazan por imagen y botón a sus propias páginas; los iconos mantienen una identidad común original.
