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
  if (url_parts.pathname == "/") {
    fs.readFile("./index.html", function (err, data) {
      if (err) console.log(err);
      res.end(data);
    });
  }
});

serveur.listen(9000, "localhost");
console.log("serveur prêt à écouter au port 9000");
