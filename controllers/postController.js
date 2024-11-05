const posts = require('../db/db.js')

const index = (req, res) => {
    res.json({
        data: posts,
        count: posts.length
    })
}
const show = (req, res) => {
    const post = posts.find((post) => post.id === parseInt(req.params.id))
    if (!post) {
      return res.status(404).json({ error: "No pizza found with that id" })
    }
    return res.status(200).json({ data: post })
  }

module.exports = {
    index,
    show
}