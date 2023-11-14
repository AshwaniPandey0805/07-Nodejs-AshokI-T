"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/sample/user/:uname/pwd/:upwd", function (req, res) {
    console.log(req.params);
    if (req.params.uname === "admin" && req.params.upwd === "admin") {
        res.status(200).json({
            "message": "Login Success"
        });
    }
    else {
        res.status(400).json({
            "message": "Invalid user"
        });
    }
});
app.listen(8080, function () {
    console.log("Server is started at port number 8080");
});
//http://localhost:8080/user/admin/pwd/admin
