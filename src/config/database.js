require('dotenv').config();
const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3307,
    password: '123456',
    database: 'hoidanit',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

module.exports = connection
