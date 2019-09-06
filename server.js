// server.js
// where your node app starts

// init project
//var express = require('express');
//var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
//var cors = require('cors');
//app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
//app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
/*app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});*/


// your first API endpoint... 
/*app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});*/



// listen for requests :)
/*var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});*/


/* El proyecto comienza por aca */ 

//importo a nodeJS
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//usar useragent para el parsing del tipo de software
var useragent = require('express-useragent');

// creo una instancia del proyecto

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

//instancia del index
app.get('/', function(req, res){
  res.sendFile(__dirname + "/views/index.html");
}); 

// llamada a la API
var api = '/api/whoami';
app.get(api, function(req, res, next){
var language = req.acceptsLanguages();
var software = "El OS es: " + req.useragent.os + ", Navegador: " + req.useragent.browser;
var ipadress = req.ip;

res.json({'ipadress': ipadress, 
          'language': language[0],
          'software': software
        });

});

app.listen(3000, function(){
  console.log("working");
});