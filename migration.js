require('dotenv').config()

const mysql = require('mysql')
const migration = require('mysql-migrations')

const connection = mysql.createPool({
  connectionLimit : 10,
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USERNAME,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DATABASE
})

migration.init(connection, __dirname + '/migrations')
