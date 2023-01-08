const Education = require("../models/costs.model/Education");
const mongoose = require("mongoose");

function postCost(req, res) {
  const obj = req.body;
  if (!obj.arr) {
    //obj is not an array (single object)
    if (!req.body.name)
      return res.status(400).json({ error: "Missing Product name" });
    if (!req.body.qty)
      return res.status(400).json({ error: "Missing quantity" });
    // make it an array
    obj.arr = [obj];
  } //"else" obj has an array property
  console.log("updating education cost (document)");
  let index = 1;

  obj.arr.forEach((element) => {
    console.log(`element.name: ${element.name}`);
    let product = element.name;
    let quantity = element.qty;
    let item = Education.find((item) => {
      return item.name === product;
    });

    const educationScheme = new mongoose.Schema({
      id: Number,
      item: String,
      qty: Number,
      pricePerItem: Number,
      totalPrice: String,
    });

    // Create a model for the collection and test if it already exists in the database
    const educationProduct =
      mongoose.models.costs || mongoose.model("costs", educationScheme);

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
    });
  });
  res.status(201).json({ message: "Cost  added" });
}

module.exports = {
  postCost: postCost,
};
