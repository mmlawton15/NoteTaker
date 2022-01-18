//when this is deployed all of this will go into the root

console.log("hello world");
//all server code goes in here for starting the project and starting the public folder
//create app const express = require etc app.listen etc, middleware etc, server knows to get json
   
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes'); //these will be different but similar. routes for views and database
app.use(express.urlencoded({ extended: true })); //server can be a server
app.use(express.json());//consume json
app.use(express.static('public'));//serve files to the browser

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes); //amkes it run from the server and not the files (/ is the default) get slash serve particular file, /notes, serve note page

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});