const express = require('express')
const app = express();
require('dotenv').config();
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')
const mongoose = require('mongoose')
var cors = require('cors')


app.use(cors())


mongoose.connect(process.env.MONGO_CONNECTION_URL,
    {
        useNewUrlParser:true, 
        useUnifiedTopology: true
    },
    (err)=>{
        if(err)
        console.log(err)
        else
        console.log('Mongo Connected')
    })


app.use('/user',express.json(),userRouter)


app.use('/admin',express.json(),adminRouter)

app.listen(process.env.PORT,(err)=>{
    if(err)
    console.log(err)
    else
    console.log('Running')
})

