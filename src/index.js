import express from "express";
import {PORT} from "./config.js";
import rutaUsuarios from './routes/usuarios.routes.js'
import rutaHabitaciones from './routes/habitaciones.routes.js'
import rutaClientes from './routes/clientes.routes.js'

//importamos morgan para ver las peticiones HTTP en consola
import morgan from 'morgan';

//Inicialización del servidor web con express
const app = express();

//Utilizamos morgan para ver los mensajes por consola
app.use(morgan('dev'));

//Middleware para manejar JSON
app.use(express.json());

//Rutas de la API
//Ruta para las rutas de los usuarios
app.use(rutaUsuarios);
//Ruta para las routes de las habitaciones
app.use(rutaHabitaciones);
//Ruta para los clientes
app.use(rutaClientes);

//Iniciando el servidor
app.listen(PORT);
console.log("Servidor corriendo en el puerto", PORT);