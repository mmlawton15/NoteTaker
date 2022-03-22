const router = require('express').Router()
const fs = require("fs");
const uuid = require("uuid");
var db = fs.readFileSync('./db/db.json');

//FUNCTION TO GET PRE-EXISTING NOTES AND SHOW ON HTML
router.get('/notes', (req, res) => {
    let preloadedNotes = fs.readFileSync('./db/db.json');
    let parsedNotes = JSON.parse(preloadedNotes);
    res.json(parsedNotes) 
});


//FUNCTION TO CHANGE THE DB.JSON FILE AND PUT THE CHANGED RESULT ON HTML
router.post('/notes', (req, res) => { 
    var JSONDB = JSON.parse(db)
    let uniqueId = uuid.v4();
    req.body.id = uniqueId;
    JSONDB.push(req.body);
        fs.writeFile('./db/db.json', JSON.stringify(JSONDB), function(err) {
            if (err) {
                console.log("Error: " + err);
                return;
            }
        })
    res.end() 
});

//FUNCTION TO DELETE A NOTE
router.delete('/notes', (req, res) => {
    var JSONDB = JSON.parse(db)
    let uniqueId = uuid.v4();
    req.body.id = uniqueId;
    JSONDB.delete(req.body);
        fs.writeFile('./db/db.json', JSON.stringify(JSONDB), function(err) {
            if (err) {
                console.log("Error: " + err);
                return;
            }
        })
    res.end() 
})

module.exports = router;