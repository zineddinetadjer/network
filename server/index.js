import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose
  .connect(
    "mongodb+srv://zineddine:zinouzinou1702@cluster01.cxsva.mongodb.net/SocialMedia?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000, () => console.log("lestening")));
