
// string for connection   (mongodb+srv://manawwar:Rm78607860@cluster0.gdshkw5.mongodb.net/)

// ({
// "database":practice,
// "collection":testing
// "culster":0

// })

//url : https://cloud.mongodb.com/v2/661ff9b804e5510d210a634a#/metrics/replicaSet/661ffa1d28e3f14f59441ffa/explorer/practice


const mongoose = require('mongoose')
require('dotenv').config();

// const mongURL = "mongodb://localhost:27017/hotels"
const mongoAtlas = process.env.MONGOATLA_URL;
mongoose.connect(mongoAtlas)

const db = mongoose.connection;

db.on('connected',()=>
{
    console.log("Connected to MongoDB server")
})

db.on('disconnected',()=>{
    console.log("MongoDB Disconnected")
})

db.on('error',(err)=>{
    console.log("MongoDB connection error::",err)
})


// Export the Database

module.exports = db;