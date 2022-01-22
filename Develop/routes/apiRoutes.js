const router = require('express').Router()
const fs = require("fs");


// someone is going to be calling for data at this endpoint
// give them the data
// how
// where are the notes - db.json
// reac into the db.json file
// grabe the notes and return the json


router.get('/notes', (req, res) => {
    //read the db every time you hit a route, otherwise i will only be dealing with old notes and reading it when the server turns on
    let preloadedNotes = fs.readFileSync('./db/db.json');
    //parse the notes to be json
    let parsedNotes = JSON.parse(preloadedNotes);
    //return the item
    
    console.log(parsedNotes); //returning db.json notes
    res.json(parsedNotes) //what i am working with
});

router.post('/notes', (req, res) => { 
    console.log(req.body);
    
    res.end() //placeholder
});

module.exports = router;