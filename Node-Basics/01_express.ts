import * as express from "express";

let app:any = express();

app.get("/", (req:any, res:any)=>{
    res.status(200).json({
        "message" : "Welcome to typeScript with node js"
    })
});

app.listen(8080, ()=>{
    console.log("Sever is started successfuly on port numnber 8080");
});

