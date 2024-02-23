//  
const express = require('express')
const app = express()
// middleware
app.use(express.json())
require('dotenv').config()

const PORT = process.env.PORT || 4000

const createRouter = require('./routes/routes')
// mount
app.use('/api/v1', createRouter)
// start the server
app.listen(PORT, () => {
    console.log(`app is running successfull on ${PORT}`);
})
// dabase connection
const dbConnect = require('./config/db')
dbConnect()