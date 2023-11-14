"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.status(200).json({
        "message": "Welcome to typeScript with node js"
    });
});
app.listen(8080, function () {
    console.log("Sever is started successfuly on port numnber 8080");
});
