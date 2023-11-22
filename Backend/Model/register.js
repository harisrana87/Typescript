const mongoose = require('mongoose')
const LoginSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const LoginModel=mongoose.model("Login", LoginSchema)
module.exports = LoginModel