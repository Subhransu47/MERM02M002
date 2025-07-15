const express=require("express");
const dotenv=require("dotenv");

dotenv.config()

const app=express();

const port=process.env.PORT;

app.listen(port,(req,res)=>{
    console.log("my server is running on the port",port);
    
    
})