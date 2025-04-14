import mysql from "mysql2/promise";

export const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'balentin93',
    
    database: process.env.DB_NAME || 'prueba_pokemon',
  waitForConnections: true,
});