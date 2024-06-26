const express = require('express')
const router = express.Router()
const MenuItem = require("../models/MenuItem.js");



// Post Method to add a  Menu Item

router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log("data Saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal sserver Error" });
    }
  });
  
  // Get Method to get the Menu Item
  router.get("/", async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log("Data Feteched");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  module.exports = router;