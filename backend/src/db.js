const postgres = require('postgres')

let sql = postgres('postgresql://postgres:1234@localhost:5432/test')

module.exports = sql