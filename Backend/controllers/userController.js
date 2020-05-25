const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {loginValidate,registerValidate} = require('./validate')

const userController = {
    register:async function (req,res) { 

        const {err} = registerValidate(req.body)
        if(err){ return res.status(400).send(error.message)}
        const selectedUser = await User.findOne({email:req.body.email})
        console.log(selectedUser)
        const salt = await bcrypt.genSaltSync(10);
        if(selectedUser) return res.status(400).send('Email or Password Incorrect')
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,salt)
        })
        try {
            const savedUser = await user.save()
            res.send(savedUser)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    login:async function (req,res){
        const {err} = loginValidate(req.body)
        if(err){ return res.status(400).send(error.message)}
      
        const selectedUser = await User.findOne({email:req.body.email})
        if(!selectedUser) return res.status(400).send('Email or Password Incorrect')

     
        const passwordAndUserMatch = await bcrypt.compareSync(req.body.password,selectedUser.password)
        if(!passwordAndUserMatch) return res.status(400).send('Email or Password Incorrect')

        const token = jwt.sign({_id:selectedUser._id,admin: selectedUser.admin},process.env.TOKEN_SECRET,{expiresIn: 86400})
        res.header('x-access-token',token)
       
        res.send({
            id: selectedUser._id,
            name: selectedUser.name,
            email: selectedUser.email,
            accessToken: token,
            roles:  selectedUser.admin ? "ROLE_ADMIN" : "ROLE_USER"
        })
      


    }
}





module.exports = userController;