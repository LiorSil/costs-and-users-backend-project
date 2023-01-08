const express = require('express');
const router = express.Router();

app.get('/report/', (req, res) => {
    const year = parseInt(req.query.year);
    const month = parseInt(req.query.month);
    const user_id = req.query.user_id;
  
    const getReportPromise = new Promise((resolve, reject) => {
      MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
        if (err) {
          reject(err);
        }
  
        const costsCollection = client.db("test").collection("costs");
        const query = { user_id, year, month };
        costsCollection.find(query).toArray((err, costs) => {
          if (err) {
            reject(err);
          }
  
          // Group costs by category and sum total for each category
          const report = {};
          costs.forEach(cost => {
            const category = cost.category;
            if (!report[category]) {
              report[category] = {
                total: 0,
                items: []
              };
            }
            report[category].total += cost.sum;
            report[category].items.push(cost);
          });
  
          resolve(report);
          client.close();
        });
      });
    });
  
    getReportPromise.then(report => {
      res.send(report);
    }).catch(err => {
      console.error(err);
      res.send({ error: "Error retrieving report from database" });
    });
  });
  