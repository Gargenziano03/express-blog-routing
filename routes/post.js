const express = require('express')
const router = express.Router()
const postController = require('./controllers/postController.js')

app.get('/posts', postController.index);

app.get('/posts/:id', PizzaController.show);


module.exports = router
