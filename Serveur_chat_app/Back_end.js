const http = require("http");
const url = require("url");
const fs = require("fs");
const { unescape } = require("querystring");

//stockage

const messages = ["testing"];
const clients = [];

// Création serveur
const serveur = http.createServer(function (req, res) {
  const url_parts = url.parse(req.url);
  
});

serveur.listen(9000, "localhost");
console.log("serveur prêt à écouter au port 9000");
