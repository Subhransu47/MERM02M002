const mongoose=require("mongoose");

const connectDB = async() => {
    try {
        const connection=mongoose.connect("mongodb://127.0.0.1:27017/MySystemDataBase");
        console.log("mongo DB connected");

       // userModel.insertOne({name:"subhransu",age:30,email:"xyz@gmail.com",password:"papuni"});

       const data=await userModel.find()
    console.log(data)
        console.log("data saved")

    }catch(error){
        console.log("Error",error)

    }
}

const userSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
    // name:String,
    // age:Number,
    // email:String,
    // password:String
})

const userModel=mongoose.model("user",userSchema);

module.exports=userModel

module.exports=connectDB;