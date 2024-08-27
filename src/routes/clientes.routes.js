import { Router } from "express";
import { createCliente, getCliente, getClientes, updateCliente, deleteCliente } from "../controllers/clientes.controllers.js";


const router = Router();

//Definir todas las rutas

//Obtener un usuario 
router.get('/clientes/:id', getCliente);

//Obtener todos los usuaros
router.get('/clientes', getClientes);

//agregar un nuevo cliente
router.post('/clientes', createCliente);

//Actualizar dato de cliente
router.put('/clientes/:id', updateCliente);

//Eliminar un cliente
router.delete('/clientes/:id', deleteCliente);


export default router;