//This is the model for the costsNew collection
const mongoose = require("mongoose");

const educationScheme = new mongoose.Schema({
  id: Number,
  item: String,
  category: String,
  price: Number,
  desc: String,
  //date: Date
});

// Create a model for the collection and test if it already exists in the database
const Product =
  mongoose.models.costs || mongoose.model("costs", educationScheme);

module.exports = Product;
