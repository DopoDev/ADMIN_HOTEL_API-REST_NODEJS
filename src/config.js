//console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST, process.env.DB_DATABASE, process.env.DB_PORT);


export const HOST = process.env.DB_HOST;
export const USER = process.env.DB_USER;
export const PASSWORD = process.env.DB_PASSWORD;
export const DATABASE = process.env.DB_DATABASE;
export const DBPORT = process.env.DB_PORT;

export const PORT = process.env.PORT || 3000;
