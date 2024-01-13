const { Router } = require("express");
const {postDriversHandler} = require("../handlers/postDriversHandler")
const {getIdHandler} = require("../handlers/getIdHandler")
const {getNameHandler} = require("../handlers/getNameHandler")
const driversRouters = Router();


driversRouters.get("/", getNameHandler);
driversRouters.get("/:id", getIdHandler);
driversRouters.post("/", postDriversHandler);

module.exports = driversRouters;