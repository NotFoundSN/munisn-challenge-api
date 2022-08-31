const token = require('../jwt/config');
const sql = require('../sql/config');

module.exports = async (req, res, next) => {
    let errors = [];                                                                    //defino errores

    const permiso = req.get('authorization');                                           //obtengo la cabezera con el token
    let tokenAdmin = '';                                                                //defino token como variable vacia

    if (permiso && permiso.startsWith('Bearer'))                                        //me fijo si usa el standar del token
    {
        tokenAdmin = permiso.substring(7);                                              //obtengo el token
    }

    let decoded = token.verifyToken(tokenAdmin);                                        //decodifico el token

    if (decoded == false)                                                               //verifico si coincidio el secret
    {
        errors.push({ name: 'token', msg: 'token invalido' });                          //agrego error
    }
    else {
        let admin = await sql.admin.exist(decoded.id, decoded.name, decoded.username);  //reviso si el usuario existe en la base de datos
        if (admin == false)                                                             //me fijo si se encontro el admin
        {
            errors.push({ name: 'data', msg: 'usuario no existe' });                    //agrego error
        }
    }
    req.errors = errors;                                                                //agrego los errores al request
    next()
}