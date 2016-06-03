"use strict";

let express = require("express");
let app = express();

let mongoUtility = require("./mongoUtility");
mongoUtility.connect();

app.use( express.static( __dirname + '/../') );
app.use('/js', express.static(__dirname + '/../node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/../node_modules/bootstrap/dist/css'));

let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();

app.listen(5120, () => console.log( "Listening on 5120" ));