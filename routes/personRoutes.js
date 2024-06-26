const express = require('express')
const router = express.Router();
const Person = require("../models/Person.js");
require('dotenv').config();




//POST route to add a person
router.post("/", async (req, res) => {
    try {
      const data = req.body; //
      const newPerson = new Person(data);
  
      const response = await newPerson.save();
      console.log("Data saved ");
      res.status(200).json(response);
    } catch (err) {
      console.log("", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
    // GET method to get the data from the database 
    router.get("/", async (req, res) => {
    try {
      const data = await Person.find();
      console.log("Data Feteched successfully");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server errror" });
    }
  });



  router.get("/:workType", async(req, res) => {
    try {
  
  
      const workType = req.params.workType; //Extract the work type from the URL parameter
      if (workType == "chef" || workType == "manager" || workType == "waiter" || workType == "Chef" || workType == "Manager" || workType == "Waiter") {
        const response = await Person.find({work:workType})
        res.status(200).json(response);
      }
      else{
      res.status(404).json({error:"Invalid work Type"})
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  // Updating Person 


  router.put('/:id',async(req,res)=>{
    
    try {

      const personId = req.params.id; // Extracting the id from the URl parameter
      const updatedPersonData = req.body; // Updated Data for the person

      const response  = await Person.findByIdAndUpdate(personId,updatedPersonData,{
        new:true, // Return the updated document
        runValidators:true, //Run Mongoose validation

      })

      console.log(response)
      if(!response) 
        {
          return res.status(404).json({error:"Person not found"});
        }

      console.log("data updated")
      res.status(200).json(response)


    } catch (err) {
      console.log(err)
      res.status(500).json({error:"Internal Server Error"})
    }


  })  


  // Deleting Person

  router.delete("/:id",async(req,res)=>{


    try {
      const personId = req.params.id; //Extracting the id
      

      // Assuming you have a Person Model

      const response = await Person.findByIdAndDelete(personId)

      if(!response)
        {
          return res.status(404).json({Error:'Person not found'})
        }

        console.log('Data Deleted ')
        res.status(200).json({message:"Person Deleted successfully"})

    } catch (err) {
      console.log(err)
      res.status(500).json({error:"Internal Server error"})
    }

  })


  module.exports = router;