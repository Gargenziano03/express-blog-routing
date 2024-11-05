const express = require('express')
const app = express()
const posts = require('./db/db.js')
//const postController = require('./controllers/postController.js')

// static files
app.use(express.static('/public'))

app.listen(3000, () => {
    console.log("Server started on port 3002")
});

// Let's now create our first endpoints
// (index) Get all posts
/*app.get('/posts', (req, res) => {
    res.json({
        data: posts,
        count: posts.length
    })
});
app.get('/posts', postController.index);

app.get('/posts/:id', PizzaController.show);
*/