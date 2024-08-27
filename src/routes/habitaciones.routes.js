import { Router } from 'express';
import { createHabitacion, deleteHabitacion, getHabitacion, getHabitaciones, updateEstadoHabitacion, updateHabitacion } from '../controllers/habitaciones.controllers.js'

//agregamos las rutas para los controladores
const router = Router(); 

//Obtener todas las habitaciones
router.get('/habitaciones', getHabitaciones);

//Obtener una sola habitación
router.get('/habitaciones/:id', getHabitacion); 

//Agregar una nueva habitación
router.post('/habitaciones', createHabitacion);

//Cambiar estado de una habitación
router.put('/habitaciones/:id', updateEstadoHabitacion);

//Cambiar toda la información de una habitación
router.put('/habitacionesInfo/:id', updateHabitacion);

//eliminar una habitacion
router.delete('/habitaciones/:id', deleteHabitacion);

export default router;