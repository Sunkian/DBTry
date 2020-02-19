const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

/*
L’application démarre un serveur et écoute le port 3000 à la recherche de connexions.
L’application répond “Hello World!” aux demandes adressées à l’URL racine (/) ou à la route racine.
Pour tous les autres chemins d’accès, elle répondra par 404 Not Found.
 */