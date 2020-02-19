//Route faite avec express.js
//Recupere les requetes client pour les envoyer au serveur et
//les responses serveur pour les envoyer au client
//express js va permettre de créer l'api entre les requetes du client et les responses de la bdd

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const {createDevice} = require('./Models/devices');
const {createMeasure} = require('./Models/measures');
//const {createRoom} = require('./Models/rooms');

app.use(bodyParser.urlencoded({extended: false}));
//https://expressjs.com/en/resources/middleware/body-parser.html -- Bas de page

// Parse application/json
app.use(bodyParser.json());

app.post('/devices', async (req, res) => {
    //res.send('POST request to the Devices Doc in the DataBase');
    console.log(req.body); //On affiche la requête qu'on a faite.
    //res.end(JSON.stringify(createDevice(req.body))); // res.end : End the response process.
    console.log(await createDevice(req.body));
    const id = mongoose.Types.ObjectId(req.params.id);
    res.send(id);
});

app.post('/measures', function (req, res) {
    res.send('POST request to the Measures Doc in the Database');
    console.log(req.body);
    res.end(JSON.stringify(createMeasure(req.body)));
});

/*app.post('/rooms', function (req, res) {
    res.send('POST request to the Rooms Doc in the Database');
    console.log(req.body);
    res.end(JSON.stringify(createRoom(req.body)));

});*/

app.listen(3000); // On écoute le port 3000.