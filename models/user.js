const mongoose = require("mongoose")

//----------- How to establish our schema (Do this for every model)
const userSchema = new mongoose.Schema({
    title: String,
    body: String
})

const User = mongoose.model("User",userSchema)

module.exports = User;