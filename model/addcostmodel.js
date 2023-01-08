const mongoose = require('mongoose');

const costSchema = new mongoose.Schema({
    
  user_id: { type: String, required: true },

  year:
   { 
    type: Number,
    required: true 
    },

  month: { 
    type: Number,
    required: true 
    },

  day: {
     type: Number, 
     required: true 
    },

  id: { type: String, required: true },

  description: { type: String, required: true },

  category: { type: String, required: true },

  sum: { type: Number, required: true }
});

// const Cost = mongoose.model('Cost', costSchema);

// app.get('/addcost/', (req, res) => {
//   const id = req.query.id;

//   Cost.findOne({ id }, (err, cost) => {
//     if (err) {
//       console.error(err);
//       res.send({ error: "Error retrieving cost from database" });
//       return;
//     }

//     if (!cost) {
//       res.send({ error: "Cost not found" });
//       return;
//     }

//     res.send(cost);
//   });
// });
module.exports = mongoose.model('addcostmodel', costSchema);