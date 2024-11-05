const express = require('express')
const router = express.Router()
const postController = require('./controllers/postController.js')

app.get('/', postController.index);

app.get('/:id', PizzaController.show);


module.exports = router
