//Aquí en este archivo irá toda la lógica de la aplicación 
import {pool} from '../db.js';

//Obteniendo todos los usuarios
export const getUsers = async (req, res) =>{ //La función debe ser asincrona dado que se va a realizar una consulta a la base de datos
  const { rows } = await pool.query('SELECT * FROM users'); //Se hace la consulta, teniendo en cuanta que del objeto obtenido solo necesitamos el atributo rows
 // console.log(rows); //Se imprime la consulta de la base de datos
  res.json(rows);//enviamos al cliente la consulta en formato JSON
}

//obtener un solo usuario
export const getUser = async (req, res) =>{ //metodo async para realizar una consulta a la base de datos
  const { id } = req.params; //Obtiene el id del usuario y lo guarda en la variable en este caso id
  const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]); //hacemos la petición a la base de datos, teniendo en cuenta el id del usuario, la biblioteca lo llama con el id = $1 y luego se reemplaza con el parametro [id]
  console.log(id)
  if(rows.length === 0){
    return res.status(404).json({message: 'Usuario no encontrado'}); //Funcionalidad para definir que no se encontro ningún usuario con ese id, para esto se cambia el status a 404
  }

  res.json(rows[0]);
}

//agregar un nuevo usuario
//Para agregar un nuevo usuario se debe enviar data al servidor
export const createUser = async(req, res) =>{
  const data = req.body; //Para obtener los datos de la petición se usa el atributo body, se puede estructurar {name, email} = req.body
  const { rows } = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [data.name, data.email]); //Se añade el nuevo usuario, utilizando el signo $ para reemplazar los valores,
                                                                                                                            //luego se insertan los datos de data.name y data.email obtenidos del body de la solicitud  
  return res.json(rows[0]);
}

//Actualizar un usuario
export const updateUser = async (req, res) =>{
  const { id } = req.params;
  const data = req.body; //Para obtener los datos de la petición se usa el atributo body, se puede estructurar {name, email} = req.body
  
  const {rows} = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [data.name, data.email, id]);
  res.json(rows[0]);
}

//Eliminar un usuario
export const deleteUser = async(req, res) =>{
  const { id } = req.params;                                                                  //RETURNING retorna el elemento afectado, en este caso el usuario y se guarda en el parametro rows
  const { rowCount } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]); //Se hace la consulta, el atributo rowCount dice la cantidad de elementos afectados en la consulta
  if(rowCount === 0){
    return res.status(404).json({message: 'Usuario no encontrado'}); //Funcionalidad para definir que no se encontro válido usuario con ese id, para esto se cambia el status a 404
  }
  return res.sendStatus(204); //devolverá el usuario eliminado
}