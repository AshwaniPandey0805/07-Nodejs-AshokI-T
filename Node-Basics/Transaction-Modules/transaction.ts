import * as express from "express";

let transaction:any = express.Router();

transaction.get("/", (req:any, res:any):any=>{
    res.status(200).json({
        "message" : "Welcome to transaction default get module"
    })
});

transaction.get("/gpay", (req:any, res:any):any=>{
    res.status(200).json({
        "message" : "Welcome to transaction Gpay Module"
    })
});

export default transaction;