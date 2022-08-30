const jwt = require("jsonwebtoken");
const secret = 'municipalidadSN';

module.exports = {
    createToken: (data) => {            //creo el token, data es un objeto
        return jwt.sign({
            id: data.id,
            username: data.usuario,
            name: data.nombre
        },secret, { expiresIn: '6h' });
    },
    verifyToken: () => {
        let decoded = jwt.verify(token, secret);;
    }
}