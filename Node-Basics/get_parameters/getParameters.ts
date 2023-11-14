import * as express from "express";

let app:any = express();

app.get("/sample/user/:uname/pwd/:upwd", (req:any, res:any)=>{
    console.log(req.params);
    if(req.params.uname === "admin" && req.params.upwd === "admin"){
        res.status(200).json({
            "message" : "Login Success"
        })
    }else {
        res.status(400).json({
            "message" : "Invalid user"
        })
    }
})

app.listen(8080, ()=>{
    console.log("Server is started at port number 8080")
});

//http://localhost:8080/user/admin/pwd/admin