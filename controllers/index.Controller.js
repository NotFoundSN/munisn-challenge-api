const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'municipalidad'
});

/*connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);*/
module.exports = {
    login: (req, res, next) => {
        connection.query(
            'SELECT * FROM `usuarios` ',
            function (err, results, fields) {
                console.log(results); // results contains rows returned by server
                console.log(fields); // fields contains extra meta data about results, if available
            }
        );
        res.send("holi")
    },
    view: (req, res, next) => {

    },
    register: (req, res, next) => {

    },
}