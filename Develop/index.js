// DONE - GIVEN a note-taking application
// DONE - WHEN I open the Note Taker
// DONE - THEN I am presented with a landing page with a link to a notes page
// DONE - WHEN I click on the link to the notes page
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

//when this is deployed all of this will go into the root
//all server code goes in here for starting the project and starting the public folder
   

const express = require('express');
const fs = require("fs");
const PORT = process.env.PORT || 3001;
const app = express();
//const apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes'); //these will be different but similar. database and views routes

//EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: true })); //server can be a server
app.use(express.json());//consume json

//STATIC MIDDLEWARE
app.use(express.static('public'));//serve files to the browser

// Use apiRoutes
//app.use('/api', apiRoutes);
//app.use('/', htmlRoutes); //amkes it run from the server and not the files (/ is the default) get slash serve particular file, /notes, serve note page

//GET API DB.JSON?

//POST TO ADD NEW NOTES TO DB.JSON

//DELETE NOTES

//HTML CODE - need to get to the notes.html page from index.html

//LISTEN CODE
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});




