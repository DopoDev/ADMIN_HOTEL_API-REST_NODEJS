import { Router } from 'express';
import { createHabitacion, deleteHabitacion, getHabitacion, getHabitaciones, updateEstadoHabitacion, updateHabitacion } from '../controllers/habitaciones.controllers.js'

//agregamos las rutas para los controladores
const router = Router(); 

//Obtener todas las habitaciones
router.get('/api/habitaciones', getHabitaciones);

//Obtener una sola habitación
router.get('/api/habitaciones/:id', getHabitacion); 

//Agregar una nueva habitación
router.post('/api/habitaciones', createHabitacion);

//Cambiar estado de una habitación
router.put('/api/habitaciones/:id', updateEstadoHabitacion);

//Cambiar toda la información de una habitación
router.put('/api/habitacionesInfo/:id', updateHabitacion);

//eliminar una habitacion
router.delete('/api/habitaciones/:id', deleteHabitacion);

export default router;