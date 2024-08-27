import { pool } from '../db.js';

//Obtener habitaciones GET
export const getHabitaciones = async (req, res) => {
 const { rows } = await pool.query('SELECT * FROM "Habitaciones"'); 
 res.json(rows);
}

//Obtener una sola habitación por su id
export const getHabitacion = async (req, res) => {
  const {id} = req.params; 
  const { rows } = await pool.query('SELECT * FROM "Habitaciones" WHERE id_habitacion = $1', [id]);

  if(rows.length === 0){
    return res.status(404).json({message: 'No se encuentra esa habitación'})
  }

  res.json(rows[0]);
}

//Agregar una nueva habitacion
export const createHabitacion = async (req, res) => {
  const data = req.body; 
  const {rows} = await pool.query('INSERT INTO "Habitaciones" (numero_habitacion, tipo_habitacion, estado, precio_noche) VALUES ($1, $2, $3, $4) RETURNING *', [data.numero_habitacion, data.tipo_habitacion, data.estado, data.precio_noche])

  return res.json(rows[0]);
}

//Actualizar estado de una habitación
export const updateEstadoHabitacion = async (req, res) => {
  const {id} = req.params;
  const data = req.body; 
  const { rows } = await pool.query('UPDATE "Habitaciones" SET estado = $1 WHERE id_habitacion = $2 RETURNING *', [data.estado, id]);

  res.json(rows[0]);
}

//Actualizar toda la información de una habitación
export const updateHabitacion = async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  const {rows} = await pool.query('UPDATE "Habitaciones" SET numero_habitacion = $1, tipo_habitacion = $2, estado = $3, precio_noche = $4 WHERE id_habitacion = $5 RETURNING *', [data.numero_habitacion, data.tipo_habitacion, data.estado, data.precio_noche, id]);

  res.json(rows[0]);
}

//Eliminar una habitación
export const deleteHabitacion = async (req, res) => {
  const {id} = req.params;
  const {rowCount} = await pool.query('DELETE FROM "Habitaciones" WHERE id_habitacion = $1 RETURNING *', [id]);
  if(rowCount === 0){
    return res.status(404).json({message: 'No se encuentra esa habitación'})
  }

  return res.sendStatus(204);
}