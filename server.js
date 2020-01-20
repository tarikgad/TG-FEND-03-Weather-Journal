// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
const bodyParser = require('body-parser')
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

// Setup Server
const api_key = cd06e8d66f42f857487e98edafbb36ca;
const owm = api.openweathermap.org;

// GET route
app.get('/all', sendData);

function sendData (request, response) {
    response.send(projectData);
};

// POST route
app.post('/add', callBack);

function callBack(req,res){
    let data = request.body;
    projectData["animal"]= data.animal;
    console.log(data);
    res.send('POST received');
}

// POST an animal
const data = [];

app.post('/animal', addAnimal);

function addAnimal (req,res){
    data.push(req.body);
};

