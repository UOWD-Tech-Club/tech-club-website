//set up env vars
require('dotenv').config()

const express = require('express')

// const newsletter = require("./newsletter/endpoints/data.js");
// const subscription = require("./newsletter/endpoints/subscription.js");

//verifying endpoints for projects
const projects = require("./projects/endpoints/data.js");

const app = express();
const port = 3000;

app.use("/projects", projects);

// app.use("/newsletters", newsletter);
// app.use("/subscriptions", subscription);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
