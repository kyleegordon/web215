const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

//convert json to objects
app.use(express.json());

app.use(cors());

mongoose.connect();

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
