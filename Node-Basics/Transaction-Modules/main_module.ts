import * as express from "express";
import transaction from "./transaction";

let app:any = express();

app.use("/transaction", transaction)

app.listen(8080, ()=>{
    console.log("Transaction module is started at port number 8080")
});