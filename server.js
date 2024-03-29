require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const AddEducation = require("./controllers/costs.controller");
const costsRouter = require("./routes/costs.router");

mongoose.set("strictQuery", true);

// use body-parser middleware to parse request bodies
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use("/costs", costsRouter);
//app.use("/report", costsRouter);//

app.listen(3000, () => {
  console.log("Web service listening on port 3000");
});

//AddEducation("Pencil", 2);
//AddEducation("Pen", 3);
//AddEducation("Eraser", 4);

// Create a model for the collection

// const deviceSchema = new mongoose.Schema({
//   item: String,
//   qty: Number,
//   tags: [String],
//   size: {
//     h: Number,
//     w: Number,
//     uom: String,
//   },
// });
// const Device = mongoose.model("costs", deviceSchema);

// const device = new Device({
//   item: "dasfa",
//   qty: 121,
//   tags: ["afafas"],
//   size: { h: 28, w: 35.5, uom: "cm" },
// });

// // Save the document to the collection
// device.save(function (err, device) {
//   if (err) return console.error(err);
//   console.log("Document inserted");
// });
