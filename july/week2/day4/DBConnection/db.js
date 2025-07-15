const mongoose=require("mongoose");
const connectDB = async() => {
    try {
        const connection=mongoose.connect("mongodb://127.0.0.1:27017/MySystemDataBase");
        console.log("Data base connected");
    }catch(error){
        console.log("Error is ",error)
    }
}

module.exports=connectionDB