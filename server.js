require("dotenv").config()
//--------> allows .env
const express = require("express");
const app = express() ;
const PORT = process.env.PORT || 3000 ;
const connectToDb = require('./config/connectToDb.js');
//--->This Pulls our Mongoose connection into application
// const Note = require("./models/note");
const notesController = require ("./controllers/notesController.js");
const cors = require("cors");
const Note = require('./models/note')
//-------> Recieving Reqs on cross-origins **

//-----------------MIDDLEWARE-------------------------
app.use(express.json())
//Express doesnt naturally convert our data to json
app.use(cors())

//----------------[Database Connection]------------------
connectToDb()    //--> This initalizes our connectionToDb() function

//--------------------- Routing -----------------------
app.get("/",(req,res)=>{
    res.send("This is a Landing Page")
})

//Obj: We want to establish CRUD routes for our Notes Model


//We want to establish CRUD routes for our Notes Model (EACH MODEL WILL REQUIRE A CRUD)

//READ: GET (all notes) & GET (specific note by ID)----
app.get("/notes", notesController.fetchAllNotes);
app.get("/notes/:id", notesController.fetchNote);

//CREATE: POST--------------
app.post("/notes", notesController.createNote);

//UPDATE:-----------
app.put("/notes/:id", notesController.updateNote);

//DELETE:------------
app.delete("/notes/:id", notesController.deleteNote);




//-------------SERVER-----------------
app.listen(PORT,()=>{
    console.log(`Express Server listening on Port num ${PORT}`)
})