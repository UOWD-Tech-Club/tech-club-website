
// db.js
import postgres from 'postgres'

require('dotenv').config()

/*
    SETTING UP DB CONNECTION
*/

const USERNAME = process.env.USERNAME
const PASSWORD = process.env.PASSWORD
const HOST_NAME = process.env.HOST_NAME
const PORT = process.env.PORT
const DB_NAME = process.env.DB_NAME

const sql = postgres(`postgres://${USERNAME}:${PASSWORD}@${HOST_NAME}:${PORT}/${DB_NAME}`) 

export default sql
