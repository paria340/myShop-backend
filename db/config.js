const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/baharCafe")
  .catch((error) => console.log(error));
// const uri = "mongodb+srv://parisa:Paris1375@cluster0.bzhv7.mongodb.net/";
// const client = new MongoClient(uri);
// client.connect();
