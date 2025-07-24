const express = require("express")
const connDB = require("./config/db")
const app = express();
const port = 3000;

connDB

app.get("/",(req,res)=>{
    res.send("<h1>Testing App </h1> ")
})



app.listen(port,()=>{
    console.log("Server runing on Port: ",port);
})