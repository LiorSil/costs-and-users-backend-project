const Education = require("../models/costs.model/Education");
const mongoose = require("mongoose");

function postCost(req, res) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Missing Product name" });
  }

  if (!req.body.qty) return res.status(400).json({ error: "Missing quantity" });

  console.log(`req.body.name ${req.body.name}`);
  console.log(`req.body.qty ${req.body.qty}`);
  console.log("update education");
  const name = req.body.name;

  const product = toString(name);
  const quantity = req.body.qty;

  console.log(`Type of product ${typeof product}`);

  const item = Education.find((item) => {
    return item.name == product;
  });

  console.log(`item ${item}`);

  const educationScheme = new mongoose.Schema({
    id: Number,
    item: String,
    qty: Number,
    pricePerItem: Number,
    totalPrice: String,
  });

  const educationProduct = mongoose.model("costs", educationScheme);

  const cost = new educationProduct({
    //id: item.id,
    id: 99,
    //item: item.name,
    item: "Pencil",
    //qty: quantity,
    qty: 3,
    //pricePerItem: item.price,
    pricePerItem: 5,
    //totalPrice: `${quantity * item.price}NIS`,
    totalPrice: `${3 * 5}NIS`,
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
