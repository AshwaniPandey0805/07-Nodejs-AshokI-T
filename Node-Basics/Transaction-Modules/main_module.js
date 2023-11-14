"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction_1 = require("./transaction");
var app = express();
app.use("/transaction", transaction_1.default);
app.listen(8080, function () {
    console.log("Transaction module is started at port number 8080");
});
