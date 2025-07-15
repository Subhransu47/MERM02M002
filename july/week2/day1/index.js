const http=require("http");

const myserver= http.createServer((req,res)=>{
    console.log("server is running on port 8000")
    console.log(req.url)
    res.end("Response Send")
})

myserver.listen(8000)