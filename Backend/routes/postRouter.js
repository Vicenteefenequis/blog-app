const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController')



router.get('/:id',postsController.getpost);
router.delete('/:id',postsController.deletepost)

module.exports = router