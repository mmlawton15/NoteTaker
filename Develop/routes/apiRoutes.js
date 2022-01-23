const router = require('express').Router()
const fs = require("fs");
var db = fs.readFileSync('./db/db.json'); //this is currently a json string

//FUNCTION TO GET PRE-EXISTING NOTES AND SHOW ON HTML
router.get('/notes', (req, res) => {
    //read the db every time you hit a route, otherwise i will only be dealing with old notes and reading it when the server turns on
    let preloadedNotes = fs.readFileSync('./db/db.json');
    //parse the notes to be json
    let parsedNotes = JSON.parse(preloadedNotes);
    //returning db.json notes
    console.log(parsedNotes); 
    //return the item
    res.json(parsedNotes) 
});


//FUNCTION TO CHANGE THE DB.JSON FILE AND PUT THE CHANGED RESULT ON HTML
router.post('/notes', (req, res) => { 
    //reading the current request body in terminal
    console.log(req.body); 
    //JSON parse db.json. Take string and making it array again
    var JSONDB = JSON.parse(db)
    JSONDB.push(req.body); //push into array
    console.log(JSONDB);
    //then write to file
        fs.writeFile('./db/db.json', JSON.stringify(JSONDB), function(err) {  //turn array into a string
            if (err) { //if there is an error 
                console.log("Error: " + err); //console log this error
                return;
            }
        })

    //this will end resonse without providing data, placeholder for now
    res.end() 
});

module.exports = router;