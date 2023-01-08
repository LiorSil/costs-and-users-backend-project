const Education = require("../models/costs.model/Education");
const mongoose = require("mongoose");

const AddEducation = (product, quantity) => {
  const item = Education.find((item) => {
    return item.name === product;
  });

  const educationScheme = new mongoose.Schema({
    id: Number,
    item: String,
    qty: Number,
    pricePerItem: Number,
    totalPrice: String,
  });

  const educationProduct = mongoose.model("costs", educationScheme);

  const cost = new educationProduct({
    id: item.id,
    item: item.name,
    qty: quantity,
    pricePerItem: item.price,
    totalPrice: `${quantity * item.price}NIS`,
  });

  // Save the document to the collection
  cost.save(function (err, cost) {
    if (err) return console.error(err);
    console.log("Document inserted");
  });
};

module.exports = AddEducation;
