"use strict";

// Importing the express 
var express = require("express");

var app = express(); // Importing dotnet `Storing configuration in the env separate from code `

var dotenv = require('dotenv');

dotenv.config({
  path: './config/config.env'
}); /// IMPORTING DOTENV

require('./Db/conn'); /// Mongodb importing from db file


app.use(express.json()); // using it to understand json formate i.e. its middleware

app.use(require('./router/auth')); // router file link i.e. its middleware

var User = require('./Model/userSchema'); // Importing User Schema
//Displaying the page at 3000 port 


var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("server is running at port ".concat(PORT));
});