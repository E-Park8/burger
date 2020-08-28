const mysql = require('mysql2')

module.exports = mysql.createConnection(process.env.JAWSDB_URL || 'mysql://root:Forl0rnbard8!@localhost/burger_db')
