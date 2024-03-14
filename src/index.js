// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`app is serving at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB CONNECTION FAILED : " + error);
    throw new Error(error);
    process.exit(1);
  });

/*
import express from "express";
import connectDB from './db/index';
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (err) =>{
      console.log("ERR :: ",err);
      throw err; 
    })
    app.listen(process.env.PORT,()=>{
      console.log(`App is listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR :: ", error);
    throw error;
  }
})();
*/
