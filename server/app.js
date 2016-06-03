"use strict";

let express = require("express");
let app = express();

let mongoUtility = require("./mongoUtility");
mongoUtility.connect();

app.use( express.static( __dirname + '/../') );

let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();

app.listen(5120, () => console.log( "Listening on 5120" ));