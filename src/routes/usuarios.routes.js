//Archivo para definir las rutas del servicio de usuarios
import {Router} from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/usuarios.controllers.js';

//Definicion de la funcionalidad de rutas
const router = Router(); 

//Definicion de las rutas
//Obteniendo todos los usuarios
router.get('/usuarios', getUsers);

//Obtener un solo usuario con su userID
router.get('/usuarios/:id', getUser)

//Agregar un nuevo usuario
router.post('/usuarios', createUser);

//Actualizar un usuario
router.put('/usuarios/:id', updateUser);

//Eliminar un usuario
router.delete('/usuarios/:id', deleteUser);

//Exportar el modulo
export default router; 