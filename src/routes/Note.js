const express = require("express");
const router = express.Router();

const Note = require("./../models/Note");




router.post("/list/", async function(req, res){
    var notes = await Note.find({ userid: req.body.userid});
    res.json(notes);
});

router.post("/add", async function(req, res){

    //This line below is to delete the note with the same id so that we can update it and post it again
    await Note.deleteOne({ id: req.body.id})

    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
    });

    await newNote.save();
    
    const response = { message: "Note Saved for user " + `with id: ${req.body.userid}` };
    res.json(response);

});

router.post("/delete", async function(req, res){
    await Note.deleteOne({ id: req.body.id});
    const response = { message: "Note Deleted" };
    res.json(response);
});


module.exports = router;