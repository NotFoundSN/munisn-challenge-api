const {body, check} = require("express-validator");

const registerMiddleware = (req,res,next) => {

    };
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