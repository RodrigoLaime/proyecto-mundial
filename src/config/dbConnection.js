const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'canterasoft',
    database: 'proyecto_mundial'
  });
}