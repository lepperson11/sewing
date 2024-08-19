const myController = require("../controllers");
const routes = require("express").Router();

routes.use("/product", require("./products"));

module.exports = routes;
