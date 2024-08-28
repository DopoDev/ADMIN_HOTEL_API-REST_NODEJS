import {pool} from '../db.js'

//Obtener todos los empleados
export const getEmpleados = async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM "Empleados"');
  if(rows.length === 0){
    return res.status(404).json({message: "No hay empleados registrados"});
  }
  res.json(rows);
}

//Obtener empleado por ID
export const getEmpleado = async (req, res) => {
   const { id } = req.params; 
   const { rows } = await pool.query('SELECT * FROM "Empleados" WHERE id_empleado = $1', [id]); 
   if(rows.length === 0){
    return res.status(404).json({message: "No se encuentra ese usuario"});
   }
   res.json(rows[0]);
}

//Agregar empleado
export const createEmpleado = async (req, res) => {
  const data = req.body; 
  const { rows } = await pool.query('INSERT INTO "Empleados" (nombres, apellidos, posicion, email, telefono) VALUES ($1, $2, $3, $4, $5) RETURNING*', [data.nombres, data.apellidos, data.posicion, data.email, data.telefono]);

  return res.status(201).json(rows[0]);
}

//Actualizar empleado existente
export const updateEmpleado = async (req, res) => {
  const {id} = req.params; 
  const data = req.body; 

  const {rows} = await pool.query('UPDATE "Empleados" SET nombres=$1, apellidos=$2, posicion=$3, email=$4, telefono=$5 WHERE id_empleado=$6 RETURNING *', [data.nombres, data.apellidos, data.posicion, data.email, data.telefono, id]);
  if(rows === 0){
    return res.status(404).json({message: "No se encuentra este usuario"});
  };

  res.status(202).json(rows[0]);
}

//Eliminar empleado
export const deleteEmpleado = async (req, res) => {
  const { id } = req.params; 
  const {rows} = await pool.query('DELETE FROM "Empleados" WHERE id_empleado=$1 RETURNING *', [id]);
  if(rows.length === 0){
    return res.status(404).json({message: "No se ha encontrado este usuario"});
  }
  res.status(202).json(rows[0]);
}