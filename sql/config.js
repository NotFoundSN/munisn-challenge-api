const mysql = require('mysql2');
const db = mysql.createConnection({                     // datos de conexion con la base de datos
    host: 'localhost',
    user: 'root',
    database: 'municipalidad'
});

module.exports = {
    usuario: {
        new: (datos) => {
            let sql = `INSERT INTO usuarios (DNI, nombre, apellido, telefono, email, direccion) VALUES (${datos.DNI}, '${datos.name}', '${datos.surname}', '${datos.phone}', '${datos.email}', '${datos.direction}')`;
            db.query(sql);                                                                                  //ejecuto el insert
        },
        search: async (dni) => {
            const [resultados, ] = await db.promise().execute(`SELECT * FROM usuarios WHERE DNI=${dni}`);   //busco todos los usuarios con ese dni
            if (resultados.length==0)                                                                       //evaluo si obtuvo resultados
            {
                return false;                                                                               //devuelvo falso
            }  
            else
            {
                return resultados[0];                                                                       //devuelvo el unico registro
            }
        },
        viewAll: async () => {
            const [resultados, ] = await db.promise().execute(`SELECT * FROM usuarios`);                    //busco todos los usuarios
            return resultados;                                                                              //retorno un array con los usuarios
        }
    },
    admin: {
        search: async (username) => {
            const [resultados, ] = await db.promise().execute(`SELECT * FROM administradores WHERE usuario = '${username}'`);   //busco el admin
            if (resultados.length==0)                                                                                           //evaluo si obtuvo resultados
            {
                return false;                                                                                                   //devuelvo falso
            }  
            else
            {
                return resultados[0];                                                                                           //devuelvo el unico registro
            }
        },
        exist: async (id,name,username) => {
            const [resultados, ] = await db.promise().execute(`SELECT * FROM administradores WHERE id= ${id} AND usuario = '${username}' AND nombre = '${name}'`);   //busco el admin
            if (resultados.length==0)                                                                                           //evaluo si obtuvo resultados
            {
                return false;                                                                                                   //devuelvo falso
            }  
            else
            {
                return resultados[0];                                                                                           //devuelvo el unico registro
            }
        }

    }
}

