# Ejecutar proyecto, Funcionalidades y Testing

## Como arrancar
Instalar los paquetes de node_modules:
### `npm install`
Crear .env y añadir:
### `SKIP_PREFLIGHT_CHECK=true`
Arrancar en localhost:3000 (por defecto):
### `npm start`

## Funcionalidades de este proyecto
Primera parte:
- Insertar estilos de forma global utilizando Sass
- Crear estilos de forma parcial utilizando Sass
- Importar iconos de Font-Awesome
- Aplicar un estilo en linea (imagen de la tarjeta Sidebar)

Segunda parte:
- Configuración de Redux para la autenticación y mantener el estado de la misma a lo largo de la aplicación
- Creación de 2 Reducer en el Store de Redux
- Utilizar Redux DevTools en el navegador
- Realizar "dispatch" desde cualquier componente
- Configuración de Firebase para la persistencia de la aplicación
- Instalación y configuración de Thunk Middleware para poder realizar acciones asíncronas
- Generar una autentificación con Google Sign-in
- Validación de formularios y genera mensajes de error con SweetAlert 2
- Recuperar valores del state en cada punto (useSelector)
- Mantiene el estado de la autenticación al recargar el navegador
- Creación de Loading en distintos puntos de la aplicación
- Implementación de Logout en Firebase

Tercera parte:
- 
- 

## Hora de testear
Correr todos los tests:
### `npm run test`