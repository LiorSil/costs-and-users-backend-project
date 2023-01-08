const Education = require("../models/costs.model/Education");
const mongoose = require("mongoose");

function postCost(req, res) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Missing Product name" });
  }

  if (!req.body.qty) return res.status(400).json({ error: "Missing quantity" });
  //  console.log(`req.body.name ${req.body.name}`);
  //console.log(`req.body.qty ${req.body.qty}`);
  console.log("updating education cost (document)");

  const product = req.body.name;
  const quantity = req.body.qty;

  let item = Education.find((obj) => {
    return obj.name === product;
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
  res.status(201).json({ message: "Cost added" });
}

module.exports = {
  postCost: postCost,
};
