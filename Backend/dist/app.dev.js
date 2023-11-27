"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Importing the express
var app = (0, _express["default"])(); // Importing dotenv `Storing configuration in the env separate from code `

_dotenv["default"].config({
  path: './config/config.env'
}); /// IMPORTING DOTENV


require('./Db/conn'); /// Mongodb importing from db file


app.use(_express["default"].json()); // using it to understand JSON format i.e., it's middleware

app.use(require('./router/auth')); // router file link i.e., its middleware

var User = require('./Model/userSchema'); // Importing User Schema
// Displaying the page at 3000 port


app.listen(3000, function () {
  console.log("Server started on port 3000");
});