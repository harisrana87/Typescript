const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

require('./Db/conn');

app.use(express.json());
app.use(require('./router/auth'));

const User = require('./Model/userSchema');

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

