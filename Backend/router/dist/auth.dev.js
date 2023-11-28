"use strict";

var express = require("express");

var crypto = require("crypto");

var jwt = require('jsonwebtoken');

var router = express.Router();

var User = require("../Model/userSchema");

router.get("/", function (req, res) {
  res.send("Hello");
});
router.post("/register", function _callee(req, res) {
  var _req$body, fname, lname, email, password, userExist, hashedPassword, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.body);
          _req$body = req.body, fname = _req$body.fname, lname = _req$body.lname, email = _req$body.email, password = _req$body.password;

          if (!(!fname || !lname || !email || !password)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(422).json({
            error: "Fill all the fields properly"
          }));

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 7:
          userExist = _context.sent;

          if (!userExist) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", res.status(422).json({
            error: "Email already exists"
          }));

        case 12:
          // Using basic hashing with the crypto module
          hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
          user = new User({
            fname: fname,
            lname: lname,
            email: email,
            password: hashedPassword
          });
          _context.next = 16;
          return regeneratorRuntime.awrap(user.save());

        case 16:
          res.status(201).json({
            message: "User registered successfully"
          });

        case 17:
          _context.next = 23;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](4);
          console.log(_context.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 19]]);
});
router.post("/signin", function _callee2(req, res) {
  var _req$body2, email, password, userLogin, hashedPassword, token;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;

          if (!(!email || !password)) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            error: "Please fill in all the fields"
          }));

        case 4:
          _context2.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 6:
          userLogin = _context2.sent;

          if (userLogin) {
            _context2.next = 9;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            error: "Invalid credentials"
          }));

        case 9:
          // Using basic hashing with the crypto module for comparison
          hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

          if (!(hashedPassword !== userLogin.password)) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            error: "Invalid credentials"
          }));

        case 12:
          // Replace 'your_secret_key_here' with your actual secret key
          token = jwt.sign({
            _id: userLogin._id
          }, 'your_secret_key_here');
          res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
          });
          res.json({
            message: "Successfully logged in"
          });
          _context2.next = 21;
          break;

        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 17]]);
});
router.post('/reset-password', function _callee3(req, res) {
  var _req$body3, email, password, user;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body3 = req.body, email = _req$body3.email, password = _req$body3.password;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          user = _context3.sent;

          if (user) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            error: 'User not found'
          }));

        case 7:
          // Update the user's password
          user.password = password;
          _context3.next = 10;
          return regeneratorRuntime.awrap(user.save());

        case 10:
          // Password updated successfully, send a response
          res.status(200).json({
            message: 'Password changed successfully'
          });
          _context3.next = 17;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](1);
          console.error(_context3.t0);
          res.status(500).json({
            error: 'Internal server error'
          });

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 13]]);
});
module.exports = router;