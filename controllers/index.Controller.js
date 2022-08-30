const mysql = require('mysql2');
const token = require('../jwt/config');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'municipalidad'
});
function respuesta(estado, dato) {
    return ({
        status: estado,
        data: dato
    })
};

/*connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);*/
module.exports = {
    login: (req, res, next) => {
        console.log(req.body.username);
        connection.query(
            `SELECT * FROM administradores WHERE usuario = '${req.body.username}'`,
            function (err, results) {
                if (results.length == 0)                                                        //Valido que encontro el usuario
                {
                    res.json(respuesta(404, 'usuario o contraseña invalido'));
                }
                else {
                    if (results[0].pass == req.body.password)                                   //Valida que la pw coincida
                    {
                        let data = token.createToken(results[0]);
                        res.json(respuesta(200, { token: data, name: results[0].nombre }))       //devuelvo el token generado y el nombre del usuario
                    }
                    else {
                        res.json(respuesta(404, 'usuario o contraseña invalido'));
                    }
                }

            }
        );
    },
    view: (req, res, next) => {
        /*if (admin)                //chequeo de si es admin
        {*/
        connection.query(
            'SELECT * FROM `usuarios` ',
            function (err, results) {
                console.log(results);
                /*if (results.length > 0) {                   //results es la tabla con los resultados
                    res.json(respuesta(200, results))       //devuelvo results con un estado 200
                }
                else {
                    res.json(respuesta(404, []))            //deberia informar que no se encontro nada
                }*/
                res.json(respuesta(200, results))       //devuelvo results con un estado 200
            }
        );
        /*}
        else
        {
            res.json(respuesta(200, 'Login necesario'))     //deberia informar que no esta logueado
        }*/
    },
    register: (req, res, next) => {
        connection.query(
            `SELECT * FROM usuarios WHERE DNI = '${req.body.dni}'`,
            function (err, results) {
                if (results.length == 0) {
                    let sql = `INSERT INTO usuarios (DNI, Nombre, Apellido, Telefono, email, direccion) VALUES (${req.body.dni}, '${req.body.name}', '${req.body.surname}', '${req.body.phone}', '${req.body.mail}', '${req.body.direction}')`; //codigo para insertar un nuevo registro SQL
                    connection.query(sql);
                    connection.query(
                        `SELECT * FROM usuarios WHERE DNI = '${req.body.dni}'`,
                        function (err, results) {
                            if (results.length == 1) {
                                res.json(respuesta(200, results))       //200 + algunos datos
                            }
                            else {
                                res.json(respuesta(200, results))       //error, vuelva a intentar
                            }
                        });
                }
                else {
                    res.json(respuesta(404, results[0]))       //error, ya esta cargado
                }
            });
    },
}