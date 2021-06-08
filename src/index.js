const express = require('express')
const app = express()
const mongoose = require('mongoose')
require ('dotenv').config()
const cors = require('cors')
app.use (cors())
app.use (express.json())


//mongoose
mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
    },
    console.log('Mongoose connected!'))


//Routes
const routes = require('./routes')
app.use(routes)

const PORT = 1010
app.listen(PORT, ()=> {
    console.log("Server running in:", PORT)
})