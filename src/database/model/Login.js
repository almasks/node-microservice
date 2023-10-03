const mongoose=require("mongoose")
const Schema=mongoose.Schema
const LoginSchema=new Schema({
    username:String,
    password:String,
    email:String
})
module.exports=mongoose.model("Login",LoginSchema)