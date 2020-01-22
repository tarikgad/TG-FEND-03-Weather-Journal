projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
const bodyParser = require('body-parser');
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

// GET route
app.get('/all', sendData);

function sendData (request, response) {
    response.send(projectData);
    console.log("GET: ");
    console.log(projectData);
};

// POST route
app.post('/add', add);

function add (req,res){
    const data_collect = req.body;
    projectData["city"]= data_collect.city;
    projectData["date"]= data_collect.date;
    projectData["temp"]= data_collect.temp;
    projectData["feelings"]= data_collect.feelings;
    console.log("POST: ");
    console.log(projectData);
};

