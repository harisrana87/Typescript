"use strict";

var jwt = require("jsonwebtoken");

var mongoose = require("mongoose");

var bcrypt = require("bcryptjs");

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
}); /// middleware to hash the password which are saved in database with BCRYPT

userSchema.pre("save", function _callee(next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!this.isModified("password")) {
            _context.next = 4;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(bcrypt.hash(this.password, 12));

        case 3:
          this.password = _context.sent;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
}); // create the json web token 

userSchema.methods.generateAuthToken = function _callee2() {
  var token;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          token = jwt.sign({
            _id: this._id
          }, process.env.SECRET_KEY);
          this.tokens = this.tokens.concat({
            token: token
          });
          _context2.next = 5;
          return regeneratorRuntime.awrap(this.save());

        case 5:
          return _context2.abrupt("return", token);

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this, [[0, 8]]);
};

var User = mongoose.model("USER", userSchema);
module.exports = User;