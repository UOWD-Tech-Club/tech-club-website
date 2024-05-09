//db.js

/* 
Consists of the code used to establish a database connection
*/

const {Pool} = require('pg')
require("dotenv").config({path: 'DatabaseCreds.env'});


const pool = new Pool({
  user: process.env.Db_Username,
  host: process.env.Db_Host,
  database: process.env.Db_Database,
  password: process.env.Db_Password,
  port: process.env.Db_Port,
});

console.log(process.env.Password)

module.exports = pool;
