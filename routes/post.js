const express = require('express')
const router = express.Router()
const postController = require('./controllers/postController.js')

router.get('/', postController.index);

router.get('/:id', PizzaController.show);


module.exports = router
