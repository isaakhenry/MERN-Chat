require("dotenv").config();
const mongoose = require("mongoose");
//Insert MongoDB URI below
const uri = "";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);

    console.log(`MongoDB Connected: ${conn.connection.host}`.green.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
