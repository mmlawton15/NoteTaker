const router = require('express').Router()
const path = require('path');

// set up and endpoint that listens for a get request to /notes
router.get('/notes', (req, res) => {
    // do something
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => { //* is catchall, why has to be last
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;