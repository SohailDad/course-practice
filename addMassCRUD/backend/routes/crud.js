const express = require("express");
const {getItems,insertItems,updateItems,deleteItems} = require("../controllers/crudItemsController")
const routes = express.Router();


routes.get("/",getItems);
routes.post("/",insertItems);
routes.put("/:id",updateItems);
routes.delete("/",deleteItems);


module.exports = routes;