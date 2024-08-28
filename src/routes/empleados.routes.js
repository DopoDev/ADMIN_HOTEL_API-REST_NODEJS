import {Router} from 'express'
import { createEmpleado, deleteEmpleado, getEmpleado, getEmpleados, updateEmpleado } from '../controllers/empleados.controllers.js'

const router = Router();

//Agragamos las rutas
//Traer todos los empleados
router.get('/empleados', getEmpleados);

//Traer un solo empleado
router.get('/empleados/:id', getEmpleado); 

//Agregar un nuevo empleado 
router.post('/empleados', createEmpleado);

//Actualizar a empleado existente
router.put('/empleados/:id', updateEmpleado);

//Eliminar empleado 
router.delete('/empleados/:id', deleteEmpleado);

export default router;