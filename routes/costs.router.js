const express = require("express");
const costsController = require("../controllers/costs.controller");

const costsRouter = express.Router();

costsRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});
costsRouter.post("/", costsController.postCost);
//costsRouter.get("/", friendsController.getFriends);
//costsRouter.get("/:friendId", friendsController.getFriend);

module.exports = costsRouter;
