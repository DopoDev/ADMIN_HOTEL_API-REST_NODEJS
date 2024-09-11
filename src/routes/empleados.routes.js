import {Router} from 'express'
import { createEmpleado, deleteEmpleado, getEmpleado, getEmpleados, updateEmpleado } from '../controllers/empleados.controllers.js'

const router = Router();

//Agragamos las rutas
//Traer todos los empleados
router.get('/api/empleados', getEmpleados);

//Traer un solo empleado
router.get('/api/empleados/:id', getEmpleado); 

//Agregar un nuevo empleado 
router.post('/api/empleados', createEmpleado);

//Actualizar a empleado existente
router.put('/api/empleados/:id', updateEmpleado);

//Eliminar empleado 
router.delete('/api/empleados/:id', deleteEmpleado);

export default router;