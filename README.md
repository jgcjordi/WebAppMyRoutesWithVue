# Web App Progrogresiva PWA, con Vue, Vue Material y Google Maps Api

Para instalar la web app progresiva en el dispositivo movil entrar en el siguiente enlace con un dispositivo movil, en el menu del navegador seleccionar: "Añadir a pantalla de inicio", y se añadira como una aplicación del dispositivo

[https://jgcjordi.github.io/WebAppMyRoutesWithVue/](https://jgcjordi.github.io/WebAppMyRoutesWithVue/)

![image](https://github.com/jgcjordi/WebAppMyRoutesWithVue/blob/master/readme_assets/web-app-schema.jpg?raw=true)

## Tecnologías Utilizadas

Para el desarrollo de la web app progresiva se ha utilizado Vue, Vue-Material, CSS3 y SCSS, JS, y Google Maps Api.

![image](https://raw.githubusercontent.com/jgcjordi/WebAppMyRoutesWithVue/master/readme_assets/tecnologies.jpg)

### Funcionalidades

* En la ventana HOME, se inicia la grabación de una nueva ruta, y se para al pulsar sobre Stop, la grabacion sigue activa aunque se cambie de pestaña

* En la ventana ROUTES, se añaden las rutas grabadas en la pestaña home, se puede modificar la visibilidad, y el color de estas en la ventana Map, tambien se pueden borrar y editar cada ruta en el menu desplegable, en caso de intentar borrar una ruta que esta siendo grabada, saltara un snackbar denegando la opción.

* En la ventana MAP, se muestran las rutas grabadas segun su visibilidad y color en la ventana Routes, esta ventana utiliza el api de google maps.

* La app carga 3 rutas de ejemplo en primera instancia, a partir de ese momento almacena los cambios realizados por el usuario en el localStorage.
