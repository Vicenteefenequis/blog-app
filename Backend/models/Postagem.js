const mongoose = require('mongoose')

const postagemSchema = mongoose.Schema({
    title: {type: String, required:true, minlength:3 , maxlength: 50},
    description: {type: String, required:true, minlength:3 , maxlength: 60000},
    autor: {type: String, required:true, minlength:6 , maxlength: 50},
    imagem: {type: String, required:true,minlength:3 , maxlength: 60000},
    createdAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Postagem',postagemSchema)