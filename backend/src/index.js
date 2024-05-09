const express = require('express')
const app = express()
const port = 3000

const db = require('./db.js')

app.get('/', async (req, res) => {

    res.status(200).status('Working Good :)')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
