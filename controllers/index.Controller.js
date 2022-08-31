const token = require('../jwt/config');
const sql = require('../sql/config');

function respuesta(estado, dato) {
    return ({
        status: estado,
        data: dato
    })
};


module.exports = {
    login: async (req, res, next) => {
        let admin = await sql.admin.search(req.body.username);                              //busco el admin
        if (admin == false)                                                                 //verifico que exista en la tabla
        {
            res.json(respuesta(404, 'usuario o contraseña invalido'));                      //error de usuario
        }
        else {
            if (admin.pass == req.body.password)                                            //Valida que la pw coincida
            {
                let data = token.createToken(admin);
                res.json(respuesta(200, { token: data, name: admin.nombre }))               //devuelvo el token generado y el nombre del usuario
            }
            else {
                res.json(respuesta(404, 'usuario o contraseña invalido'));                  //error de password
            }
        }
    },
    view: async (req, res, next) => {
        errors = req.errors;                                                //traigo los errores
        console.log(errors);
        if (errors.length == 0)                                             //reviso si hay errores
        {
            let consulta = await sql.usuario.viewAll();                     //busco todos los registros
            res.json(respuesta(200, consulta))                              //devuelvo la lista de registros
        }
        else {
            res.json(respuesta(404, []))                                    //devuelvo error con la lista vacia **borrar token del cliente
        }
    },
    register: async (req, res, next) => {
        let consulta1 = await sql.usuario.search(req.body.DNI);                                         //busco si dni en la tabla
        if (consulta1 == false)                                                                         //evaluo si existe el registro
        {
            sql.usuario.new(req.body);                                                                  //regenero el registro en la base de datos
            let consulta2 = await sql.usuario.search(req.body.DNI);                                     //busco si se agrego correctamente
            if (consulta2 == false)                                                                     //evaluo si se encontro el registro
            {
                res.json(respuesta(404, 'error al crear el registro, vuelva a intentar'));              //devuelvo erro al crear registro
            }
            else {
                res.json(respuesta(200, { ...consulta2 }));                                             //devuelvo el registro entero, registro exitoso
            }
        }
        else 
        {
            res.json(respuesta(404, { nombre: consulta1.nombre }));                                     //error, registro previo encontrado, devuelvo el nombre
        }
},
}