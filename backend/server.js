const articleRouter = require('./routes/articleRouter')
const authRouter = require('./routes/authRouter')
const mpRouter= require('./routes/mpRouter')
const employeRouter= require('./routes/employeRouter')
const phaseRouter=require('./routes/phaseRouter')
const express = require('express')
const connectdb = require('./config/connectdb')
const app = express()
const port = 5000
//middleware
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api',articleRouter)
app.use('/api',mpRouter)
app.use('/api',employeRouter)
app.use('/api',phaseRouter)
///////
require("dotenv").config({path:"./config/.env"})
connectdb()
app.listen(port,err=>{
    if(err){
         console.log('failed runnig server')
    }
    else{
        console.log('server is running on port'+port)
    }
})