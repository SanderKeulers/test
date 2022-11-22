require("dotenv").config({ path: "./config.env" });
const express = require('express');
const app = express();
const connectDB = require("./config/db");

connectDB();


const PORT = process.env.PORT || 5000; 

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);