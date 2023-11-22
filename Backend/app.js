const express = require('express')
const mongoose = require ('mongoose')
const cors = require("cors")
const loginModel =require('./Model/register')
const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/Login/Registered"), { useNewUrlParser: true, useUnifiedTopology: true };

app.post('/register',(req,res) =>{ 
 loginModel.create(req.body)
 .then(login => res.json(login))
 .catch(err=> res.json(err))
})
app.listen(3001, () => {
console.log(`Server is running http://localhost:${3001}`)
})


