"use strict";

var jwt = require("jsonwebtoken");

var mongoose = require("mongoose"); // const bcrypt = require("bcryptjs");


var userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
});
var User = mongoose.model("USER", userSchema);
module.exports = User;