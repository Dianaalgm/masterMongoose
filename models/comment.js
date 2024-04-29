const mongoose = require("mongoose")

//----------- How to establish our schema (Do this for every model)
const commentSchema = new mongoose.Schema({
    title: String,
    body: String
})

const Comment = mongoose.model("Comment",commentSchema)

module.exports = Comment;