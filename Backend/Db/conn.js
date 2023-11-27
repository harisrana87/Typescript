const express=require ("express");
///Importing mongoose
const mongoose = require('mongoose');

const app = express();
// Connecting with mongobd through website

const uri ="mongodb+srv://harisrana87:harrishassan@practice1.pri08fh.mongodb.net/?retryWrites=true&w=majority"
 
async function connect(){
    try {
        await mongoose.connect(uri)
            console.log('Connection successful......');
    } catch(error){
    console.error('No Connection');
}}
connect();
// app.listen(3000, ()=>{
//     console.log("Server started on port 3000");
// })


