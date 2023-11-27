"use strict";

var express = require("express"); ///Importing mongoose


var mongoose = require('mongoose');

var app = express(); // Connecting with mongobd through website

var uri = "mongodb+srv://harisrana87:harrishassan@practice1.pri08fh.mongodb.net/?retryWrites=true&w=majority";

function connect() {
  return regeneratorRuntime.async(function connect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(uri));

        case 3:
          console.log('Connection successful......');
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error('No Connection');

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

connect(); // app.listen(3000, ()=>{
//     console.log("Server started on port 3000");
// })