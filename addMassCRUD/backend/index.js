const express = require("express")
const cors = require("cors");
const crudItems = require("./routes/crud")
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

app.use("/crudItems",crudItems)


app.listen(port,()=>{
    console.log("Server runing on Port: ",port);
})