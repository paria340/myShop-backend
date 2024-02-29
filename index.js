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

