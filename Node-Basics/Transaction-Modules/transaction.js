"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction = express.Router();
transaction.get("/", function (req, res) {
    res.status(200).json({
        "message": "Welcome to transaction default get module"
    });
});
transaction.get("/gpay", function (req, res) {
    res.status(200).json({
        "message": "Welcome to transaction Gpay Module"
    });
});
exports.default = transaction;
