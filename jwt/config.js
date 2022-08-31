const jwt = require("jsonwebtoken");
const secret = 'municipalidadSN';

module.exports = {
    createToken: (data) => {                            //creo el token, data es un objeto
        return jwt.sign({
            id: data.id,
            username: data.usuario,
            name: data.nombre
        }, secret, { expiresIn: '1h' });                //se necesita el secret, y se le agrega un vencimiento
    },
    verifyToken: (token) => {
        let validacion
        try {
            validacion = jwt.verify(token, secret);     //intento validar el token
        } catch (err) {
            validacion=false;                           //si falla devuelvo false
        }
        return validacion;
    }
}