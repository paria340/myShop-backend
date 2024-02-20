const express = require("express");
require("./db/config");
const User = require('./db/User');
const app = express();

app.use(express.json());
app.post("/register", async (req, resp) => {
    // Storing in User collection and a promise to save
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result)


    resp.send(req.body)
})
app.listen(5000)
//
// const mongoose = require('mongoose');
// const app = express();
// const connectDB = async()=> {
//     mongoose.connect('mongodb://localhost:27017/baharCafe');
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model("products", productSchema);
//     const data =  await product.find();
//     console.warn(data);
// }

// connectDB();



// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri =
//   "mongodb+srv://parisa:Paris1375@cluster0.bzhv7.mongodb.net/";
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();

//     const database = client.db('baharCafe');
//     const movies = database.collection('products');
//     // console.log(database);
//     // console.log('break')

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { name: 'Marble Cake' };
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
