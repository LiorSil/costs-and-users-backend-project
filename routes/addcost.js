app.post('/addcost/', (req, res) => {
    const user_id = req.body.user_id;
    const year = req.body.year;
    const month = req.body.month;
    const day = req.body.day;
    const id = req.body.id;
    const description = req.body.description;
    const category = req.body.category;
    const sum = req.body.sum;
  
    const newCost = {
      user_id,
      year,
      month,
      day,
      id,
      description,
      category,
      sum
    };
  
    const addCostPromise = new Promise((resolve, reject) => {
      MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
        if (err) {
          reject(err);
        }
        const costsCollection = client.db("test").collection("costs");
        costsCollection.insertOne(newCost, (err, result) => {
          if (err) {
            reject(err);
          }
          resolve();
          client.close();
        });
      });
    });
  
    addCostPromise.then(() => {
      res.send({ message: "Successfully added new cost" });
    }).catch(err => {
      console.error(err);
      res.send({ error: "Error adding new cost to database" });
    });
  });
  