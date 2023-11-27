"use strict";

var express = require("express");

var bcrypt = require("bcryptjs");

var router = express.Router();

var jwt = require('jsonwebtoken');

var User = require("../Model/userSchema");

router.get("/", function (req, res) {
  res.send("Hello");
});
router.post("/register", function _callee(req, res) {
  var _req$body, fname, lname, email, password, userExist, user;

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
          user = new User({
            fname: fname,
            lname: lname,
            email: email,
            password: password
          });
          _context.next = 15;
          return regeneratorRuntime.awrap(user.save());

        case 15:
          res.status(201).json({
            message: "User registered successfully"
          });

        case 16:
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](4);
          console.log(_context.t0);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 18]]);
});
router.post("/signin", function _callee2(req, res) {
  var _req$body2, email, password, userLogin, isPasswordMatch, token;

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
          _context2.next = 11;
          return regeneratorRuntime.awrap(bcrypt.compare(password, userLogin.password));

        case 11:
          isPasswordMatch = _context2.sent;

          if (isPasswordMatch) {
            _context2.next = 14;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            error: "Invalid credentials"
          }));

        case 14:
          // Generate an authentication token if the credentials match
          token = jwt.sign({
            _id: userLogin._id
          }, process.env.SECRET_KEY);
          res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
          });
          res.json({
            message: "Successfully logged in"
          });
          _context2.next = 23;
          break;

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 19]]);
});
module.exports = router;