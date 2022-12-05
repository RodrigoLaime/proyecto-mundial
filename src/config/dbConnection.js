const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '45725575',
    database: 'proyecto_mundial'
  });
}