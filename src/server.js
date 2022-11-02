const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Note = require("./models/Note");

const bodyParser = require('body-parser');
const { route } = require("./routes/Note");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://rudrank123:rudrank123@cluster0.dz9thyq.mongodb.net/notesdb").then(function(){

    app.get("/", function(req, res){
        const response =  {message : "API is working"};
        res.json(response);
    });

    const router = require("./routes/Note");
    app.use("/notes", router);


});

//Starting the server on a PORT
app.listen(3000, function(){
    console.log("Server started on port 3000");
});