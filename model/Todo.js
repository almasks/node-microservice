const mongoose =require("mongoose")
const Schema= mongoose.Schema;
const TodoSchema=new Schema({
    todo:String,
    id:Number,
    isEdit:Boolean
})
module.exports=mongoose.model("todo",TodoSchema)