const express = require('express')
var bodyParser = require('body-parser');
const todo = require('./src/api/todo')
const login=require('./src/api/login')
const connection = require('./src/database/connection')
const app = express()
connection()

app.listen(3000, () => {
    console.log("server running in port 3000")
    app.use(express.urlencoded({ extended: true, limit: '1mb' }));
    app.use(bodyParser.json())
    todo(app)
    login(app)

})
