const express = require('express')
const app = express();
require('dotenv').config();
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')
const postRouter = require('./routes/postRouter')
const mongoose = require('mongoose')
var cors = require('cors')


app.use(cors())
app.use(express.json())


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


app.use('/user',userRouter)

app.use('/post',postRouter)

app.use('/admin',adminRouter)

app.listen(process.env.PORT,(err)=>{
    if(err)
    console.log(err)
    else
    console.log('Running')
})

