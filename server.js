const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json()); // req.body
const db = require("./db.js");
require('dotenv').config();

app.get("/", function (req, res) {
  res.send(
    "Welcome to our hotel"
  );
});

 
// Importing the router files
const personRouters = require('./routes/personRoutes.js')
const menuRouters = require('./routes/menuRoutes.js')


// Use the routes 
app.use('/person',personRouters)
app.use('/menu',menuRouters)

const port  = process.env.PORT;

app.listen(port, () => {
  console.log("Listening on port 3000");
});
