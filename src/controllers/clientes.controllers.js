import { pool } from "../db.js";

//Obtener un cliente
export const getCliente = async (req, res) => {
  const { id } = req.params;
  const {rows} = await pool.query('SELECT * FROM "Clientes" WHERE id_cliente = $1', [id]);
  if(rows.length === 0){
    res.status(404).json({message: "Usuario no encontrado"});
  }
  res.send(rows[0]);
}

//Obtener todos los clientes
export const getClientes = async (req, res) => {
  const {rows} = await pool.query('SELECT * FROM "Clientes" ');
  res.json(rows);
}

//Agregar un nuevo cliente
export const createCliente = async (req, res) => {
  const data = req.body; 
  const { rows } = await pool.query('INSERT INTO "Clientes" (nombre, apellido, email, telefono, direccion) VALUES ($1, $2, $3, $4, $5) RETURNING *', [data.nombre, data.apellido, data.email, data.telefono, data.direccion]);
  res.send(rows[0]);
}

//Actualizar un cliente
export const updateCliente = async(req, res) => {
  const {id} = req.params; 
  const data = req.body; 

  const {rows} = await pool.query('UPDATE "Clientes" SET nombre = $1, apellido = $2, email = $3, telefono = $4, direccion = $5 WHERE id_cliente = $6 RETURNING *', [data.nombre, data.apellido, data.email, data.telefono, data.direccion, id]);

  if(rows.length === 0){
    res.status(404).json({message: "Usuario no encontrado"});
  }
  res.json(rows[0]);
}

//Eliminar un cliente
export const deleteCliente = async (req,res) => {
  const { id } = req.params;
  const {rowCount} = await pool.query('DELETE FROM "Clientes" WHERE id_cliente = $1 RETURNING *', [id]);
  if(rowCount === 0){
    res.status(404).json({message: "Usuario no encontrado"});
  }
  res.status(204).json();
}
