// Models are a structure of our data and its contents

//Schema: We create a blueprint for the model so we can export that
//format to our express server and eventually 


const mongoose = require("mongoose")

//----------- How to establish our schema (Do this for every model we have)
const noteSchema = new mongoose.Schema({
    title: String,
    body: String
})

const Note = mongoose.model("Note", noteSchema)

module.exports= Note