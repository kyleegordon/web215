const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kgordon:GDdx7dEu4EBEqlTA@cluster0.30xep.mongodb.net/web215?retryWrites=true&w=majority");


app.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});