const express = require("express");
const helmet = require("helmet");

// bring in routes

const server = express();


//middleware
server.use(helmet());
server.use(express.json());


// invoke my routes




module.exports = server;