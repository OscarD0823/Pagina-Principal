# Ilustraciones de la portada

Las ilustraciones de SnowRunner Studio, RoadCraft Studio y Caja Fantasma se crearon con la herramienta integrada de ImageGen. Son ilustraciones conceptuales originales, no modelos oficiales de los juegos. El emblema de Fortuna Real y el cofre de Lankdea proceden de sus proyectos originales y conservan sus formas.

## Archivos finales

- [Camión de SnowRunner Studio](dist/assets/snow-truck.webp)
- [Maquinaria de RoadCraft Studio](dist/assets/road-machine.webp)
- [Caja de recompensas](dist/assets/phantom-crate.webp)

Los originales PNG están en `D:/Pagina Principal/project-art/`. Las tres ilustraciones generadas usan copias WebP optimizadas, con transparencia, que en conjunto pesan aproximadamente 580 KB.

El archivo `dist/assets/lankdea-cofre.webp` es una copia WebP optimizada (212 KB) del [atlas original de Lankdea](https://github.com/OscarD0823/Lankdea-APK/blob/main/1-programa/assets/cofre_atlas_gothic.png), publicado bajo la licencia MIT del proyecto, conservada en `dist/assets/lankdea-LICENSE.txt`. Contiene los estados cerrado y abierto; CSS muestra un fotograma a la vez sin alterar la ilustración.

## Identidad y documentos

El nuevo monograma OD de `dist/favicon.svg` es un dibujo vectorial creado para esta portada; se reutiliza como logo del encabezado y favicon. No añade dependencias ni imágenes grandes.

Los PNG de `dist/icons/` son exportaciones del mismo SVG para la aplicación instalable: tamaños de 192 y 512 px, un icono Apple de 180 px y una variante adaptable de 512 px con margen de seguridad para recortes del sistema. No se utilizan logos distintos ni imágenes externas para la instalación.

La escena de Prisma PDF se construye con HTML, CSS y SVG propios: hojas apiladas, selección de texto, cursor y firma animada. Es una representación ilustrativa de sus funciones, no un editor integrado ni una copia de la interfaz o del logo de la aplicación. Su nombre y destino se verificaron en el chat «Crear editor de PDF con logo e UI» y el repositorio público `OscarD0823/prisma-pdf`.

Las demás tarjetas Prisma siguen esa misma dirección visual, con escenas vectoriales distintas: una biblioteca conectada a los seis editores, escritura progresiva en Writer, selección y suma en Sheets, tres composiciones de diapositivas en Slides, tablas relacionadas y consulta en Data, y una publicación con guías de maquetación en Publisher. Son demostraciones ilustrativas, no documentos reales ni aplicaciones incrustadas. Reutilizan los seis logos SVG existentes sin modificar sus archivos. Las animaciones son CSS, no videos ni imágenes nuevas, y respetan los controles globales de pausa, visibilidad y movimiento reducido.

## Prompts

Dirección compartida: original polished cinematic semi-realistic 3D illustration, readable silhouette, centered full object, three-quarter perspective, transparent alpha, no landscape, ground, text, logos or watermark.

Camión: dark navy and burnt orange six-wheel expedition truck, rugged tires with light snow, cold blue rim light, front facing right, wide 3:2.

Maquinaria: industrial amber tracked bulldozer, realistic steel tracks and front blade, cyan rim light, front facing left, wide 3:2.

Caja: gunmetal sci-fi reward chest, bronze accents, crisp cyan illuminated seams, slightly open lid with restrained cyan glow, square.

Se hizo una generación por ilustración, sin variantes ni reintentos. Las animaciones se aplican mediante CSS y no modifican los archivos gráficos.
