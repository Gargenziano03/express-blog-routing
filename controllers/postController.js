const posts = require('../db/db.js')

const index = (req, res) => {
    res.json({
        data: posts,
        count: posts.length
    })
}

module.exports = {
    index
}