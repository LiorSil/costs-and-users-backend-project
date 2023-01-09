const Product = require("../models/products.model");
const mongoose = require("mongoose");

function postCost(req, res) {
  //Code should get data from REQUEST HEADER and not from the body
  // const item = req.headers.item;
  // const category = req.headers.category;
  // const price = req.headers.price;
  // const desc = req.headers.desc;
  // date = req.headers.date; // date is String or Date type ??

  // Destructuring the request header object { key : NewVariable} = req.headers
  const arr = [item1, item2, item3];
  const {
    item: item,
    category: category,
    price: price,
    desc: desc,
    // date : date; // date is String or Date type ??
  } = req.headers;

  if (!item) return res.status(400).json({ error: "Missing Product item" });
  if (!category) return res.status(400).json({ error: "Missing category" });
  if (!price) return res.status(400).json({ error: "Missing price" });

  let id = 0; //id Should be unique
  const product = new Product({ id, item, category, price, desc });
  // Save the document to the collection
  product.save(function (err, product) {
    if (err) return console.error(err);
  });
  res.status(201).json({ message: "Cost  added" });
}
module.exports = {
  postCost: postCost,
};
