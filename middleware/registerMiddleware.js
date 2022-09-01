const { body, check } = require("express-validator");

const registerMiddleware = [
    body("name")
        .notEmpty().withMessage("Falta completar el nombre")
        .isAlpha().withMessage("El nombre no puede contener numeros"),                  //compruebo que el nombre no este vacio
    body("surname")
        .notEmpty().withMessage("Falta completar el apellido")
        .isAlpha().withMessage("El apellido no puede contener numeros"),                //compruebo que el apellido no este vacio
    body("DNI")
        .notEmpty().withMessage("Falta completar el DNI")                               //compruebo que el DNI no este vacio, y tenga al menos 7 digitos
        .isLength({ min: 7 }).withMessage("El DNI debe tener al menos 7 digitos"),
    body("phone")
        .notEmpty().withMessage("Falta ingresar un numero de telefono")                 //
        .isMobilePhone().withMessage("No es formato valido de telefono"),
    body("email")
        .notEmpty().withMessage("Falta completar un E-mail")                            //
        .isEmail().withMessage("Formato invalido de E-Mail"),
    body("direction")
        .notEmpty()
        .withMessage("Falta completar su direccion")
];
module.exports = registerMiddleware;

/*
    name
        isAlpha
    surname
        isAlpha
    DNI
        isInt
        {min 1000000}
    phone
        isMobilePhone

    email
        isEmail
    direction

*/