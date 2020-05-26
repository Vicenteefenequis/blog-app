const Postagem = require('../models/Postagem')
const adminpostController = {
    registerpost: async function(req,res){
        const selectedPost = await Postagem.findOne({title:req.body.title})
        if(selectedPost) return res.status(400).send('Title not found')
        const posting = new Postagem({
            title: req.body.title,
            description: req.body.description,
            autor: req.body.autor,
            imagem: req.body.imagem,
        })
        try {
            const savedPostagem = await posting.save()
            res.send(savedPostagem)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    admin:async function(req,res){
                const selectedPost = await Postagem.find()    
                if(!selectedPost) return res.status(400).send('Title not found')
                return res.send(selectedPost)
    }
}


module.exports = adminpostController