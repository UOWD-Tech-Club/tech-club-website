// // db.js
// const postgres = require("postgres");
// require("dotenv").config({path : 'DatabaseCreds.env'});

// /*
//     SETTING UP DB CONNECTION
// */

// const USERNAME = process.env.Db_Username;
// const PASSWORD = process.env.Db_Password;
// const HOST_NAME = process.env.Db_Host;
// const PORT = process.env.Db_Host;
// const DB_NAME = process.env.Db_Database;

// const sql = postgres(
//   `postgres://${USERNAME}:${PASSWORD}@${HOST_NAME}:${PORT}/${DB_NAME}`
// );

// console.log("USERNAME:", USERNAME);
// console.log("PASSWORD:", PASSWORD);
// console.log("HOST_NAME:", HOST_NAME);
// console.log("PORT:", PORT);
// console.log("DB_NAME:", DB_NAME);
// console.log(sql);

// module.exports = sql;
