//Archivo para definir las rutas del servicio de usuarios
import {Router} from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/usuarios.controllers.js';

//Definicion de la funcionalidad de rutas
const router = Router(); 

//Definicion de las rutas
//Obteniendo todos los usuarios
router.get('/api/usuarios', getUsers);

//Obtener un solo usuario con su userID
router.get('/api/usuarios/:id', getUser)

//Agregar un nuevo usuario
router.post('/api/usuarios', createUser);

//Actualizar un usuario
router.put('/api/usuarios/:id', updateUser);

//Eliminar un usuario
router.delete('/api/usuarios/:id', deleteUser);

//Exportar el modulo
export default router; 