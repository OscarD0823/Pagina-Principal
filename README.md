# Proyectos de Oscar

Portada animada para los cinco proyectos de OscarD0823.

| Proyecto | Destino |
| --- | --- |
| Fortuna Real | https://oscard0823.github.io/Fortuna-Real/ |
| Caja Fantasma | https://oscard0823.github.io/Caja-Fantasma/ |
| SnowRunner Studio | https://github.com/OscarD0823/snowrunner |
| RoadCraft Studio | https://github.com/OscarD0823/roadcraft |
| Lankdea | https://github.com/OscarD0823/Lankdea-APK |

Los archivos públicos están en `dist/`. Es una página estática sin dependencias.

## Vista local

```sh
python -m http.server 4173 --directory dist
```

Abre http://localhost:4173/.

## Publicación

GitHub Actions publica `dist/` en GitHub Pages al enviar cambios a `main`.

Las rutas de recursos son relativas para funcionar bajo una ruta de proyecto o en un dominio raíz.

Las animaciones se pueden pausar con el botón del encabezado. Respetan la preferencia de reducir movimiento y se detienen cuando una tarjeta está fuera de pantalla o la pestaña está oculta.
