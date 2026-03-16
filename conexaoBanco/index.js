require("dotenv").config(); 

const db = require("./db");

const port = process.env.PORT;

const express = require('express');

const app = express();

// app.use(express.json());



app.listen(port);

console.log("Backend Rodando!")