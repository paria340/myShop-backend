const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/bahar-cafe")
  .catch((error) => console.log(error));

// const uri = "mongodb+srv://parisa:Paris1375@cluster0.bzhv7.mongodb.net/";
// const client = new MongoClient(uri);
// client.connect();
