const router = require('express').Router()

// someone is going to be calling for data at this endpoint
// give them the data
// how
// where are the notes - db.json
// reac into the db.json file
// grabe the notes and return the json
router.get('/notes', (req, res) => {
    
     res.json([{title: 'taco', text: 'tuesday'}])// placeholder
});

router.post('/notes', (req, res) => { 
    console.log(req.body);
    
    res.end() //placeholder
});

module.exports = router;