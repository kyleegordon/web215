const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

//convert json to objects
app.use(express.json());

mongoose.connect("mongodb+srv://kgordon:GDdx7dEu4EBEqlTA@cluster0.30xep.mongodb.net/web215?retryWrites=true&w=majority");

//get user data
app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }

    })
});

//add new user to database
app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});


app.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});