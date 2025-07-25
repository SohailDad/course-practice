const express = require("express")
const crudItems = require("./routes/crud")
const app = express();
const port = 3000;


app.use("/crudItems",crudItems)


app.listen(port,()=>{
    console.log("Server runing on Port: ",port);
})