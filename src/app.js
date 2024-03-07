import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//setting one single route for CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// to accept data from form submission
app.use(express.json({ limit: "16kb" }));

// to accept data from url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//to use static assests
app.use(express.static("public"));

//to make use of cookies in our application
app.use(cookieParser());

export { app };
