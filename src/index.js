const express = require("express");
const res = require("express/lib/response");
const app = express();

const connect = require('./configs/db.js');

const userController = require("./controllers/user.controller");



app.listen(7000, async() => {

    try {
        console.log("Running on the port 7000");
    } catch (error) {
        return res.stauts(500).send({error})
    }

})