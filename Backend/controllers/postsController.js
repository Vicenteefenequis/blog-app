const Postagem = require('../models/Postagem')
  
const postController = {
   getpost:function(req,res) { 
       const {id} = req.params

       Postagem.findById(id).then(resposta => {
           return res.json(resposta)
       }).catch(err => {
           console.log(err)
       })
    },
    deletepost: async function(req,res) {
        const deleted = await Postagem.findOneAndDelete(req.params.id)
        .then(() => 'List deleted');
        
        res.json({deleted});
        
    }
   
}

module.exports = postController;