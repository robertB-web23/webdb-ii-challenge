const express = require("express");
const helmet = require("helmet");

// bring in routes

const carRouter = require('../cars/cars-router.js');

const server = express();


//middleware
server.use(helmet());
server.use(express.json());


// invoke my routes

server.use('/api/cars', carRouter)


module.exports = server;