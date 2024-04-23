const Note = require (".models/note");

//copy the CRUD code and paste here
const fetchAllNotes = async(req,res)=>{
    //1.Get all notes from DB
    //2.Send the notes back as a response
    const notes = await Note.find(); //---1
    res.json({notes:notes})         //-----2
};

const fetchNote = async(req,res)=>{
    //1. Get id off the url
    //2. Find the note associated with that id
    //3. Send response with that note as the payload
    const noteId = req.params.id              //-----1
    const note = await Note.findById(noteId)  //-----2
    res.json({note:note})                    //-----3

};

const createNote = async(req,res)=>{
    //1. Get data from the req.body
    //2. create note
    //3. Respond with new copy of Note
    console.log(`BODY: ${req.body}`)
    const title = req.body.title
    const body = req.body.body          //->1
// Industry Standard = the same as above ------
//const {title,body} = req.body})
    const note = await Note.create({        //-->2
        title: title,
        body: body
});
    res.json({note:note});
};

const updateNote = async (req, res) => {
    // 1. Get id off the url
    // 2. Get the data off the id
    // 3. Find and Update Note
    // 4. Retrieve updatedNote and send it as a response
    const noteId = req.params.id;
    // --------------------------------(1)
    const { title, body } = req.body;
    // --------------------------------(2)
    const note = await Note.findByIdAndUpdate(noteId, {
      title: title,
      body: body,
    });
    // --------------------------------(2)
    const updatedNote = await Note.findById(noteId);
    res.json({ note: updatedNote });
};

const deleteNote = async(req,res)=>{
    //1.Get the id off the url
    //2. Delete the record
    //3. Send the Response
    const noteId = req.params.id     //---> 1
    await Note.deleteOne({        //--->2
        id: noteId
    })
    res.json({success: "Record has deleted successfully"})
};

module.exports = {
    fetchAllNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote
};