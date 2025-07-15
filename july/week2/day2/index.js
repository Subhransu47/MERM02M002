
//this is for import the express
const express= require("express")

const app=express();

app.use(express.json());

// user defined middle ware
const validation=(req,res,next)=>{
    console.log("validation ho raha hai");
    next()
}

const auth=(req,res,next)=>{
    console.log("validation ho raha hai");
    next()
}
app.use(validation)
app.use(auth)

//this is your port number
const port=8000;

app.get('/',(req,res)=>{
    // const{q,s}=req.query;
    // console.log(q)
    // console.log(s)
    console.log("get method called")
    res.send("response send")

})

app.post('/user',(req,res)=>{
    const data=req.body;
    console.log(data)
    //res.send(data)
    res.status(200).json(data)
//res.send("post method called")
})

app.put('/user/:id',(req,res)=>{
res.send("put request called")
})

app.delete('/user/:id',(req,res)=>{
    const {id}=req.params;
    console.log("ID is",id)
res.send("delete request called")
})

//this is for running the server
app.listen(port,(req,res)=>{
console.log("my server running on port",port)
})