require('dotenv').config();
const express=require("express")
const app=express();
const bodyParser=require('body-parser');
const routes=require("./routes/index.js")
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api",routes);
var port = process.env.PORT || 8000;

app.listen(port,function(){
    console.log("server running on",port)
})