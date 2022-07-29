const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'todo',
    debug    :  false
});
  module.exports = pool;