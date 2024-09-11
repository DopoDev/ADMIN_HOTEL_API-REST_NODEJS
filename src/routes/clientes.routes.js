import { Router } from "express";
import { createCliente, getCliente, getClientes, updateCliente, deleteCliente } from "../controllers/clientes.controllers.js";


const router = Router();

//Definir todas las rutas

//Obtener un usuario 
router.get('/api/clientes/:id', getCliente);

//Obtener todos los usuaros
router.get('/api/clientes', getClientes);

//agregar un nuevo cliente
router.post('/api/clientes', createCliente);

//Actualizar dato de cliente
router.put('/api/clientes/:id', updateCliente);

//Eliminar un cliente
router.delete('/api/clientes/:id', deleteCliente);


export default router;