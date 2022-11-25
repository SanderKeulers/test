require("dotenv").config({ path: "./config.env" });
const express = require('express');
const app = express();
const connectDB = require("./config/db");
const cors = require('cors'); 
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); 

connectDB();


const PORT = process.env.PORT || 5000; 

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);