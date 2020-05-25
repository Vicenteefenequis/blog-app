const express = require('express');
const router = express.Router();
const adminpostController = require('../controllers/adminpostController')
// const auth = require('../controllers/authController')

router.get('/',adminpostController.admin)
router.post('/',adminpostController.registerpost)

module.exports = router