const Postagem = require('../models/Postagem')
  
const postController = {
   getpost:function(req,res) { 
       const {id} = req.params

       Postagem.findById(id).then(resposta => {
           return res.json(resposta)
       }).catch(err => {
           console.log(err)
       })
    }
}

module.exports = postController;