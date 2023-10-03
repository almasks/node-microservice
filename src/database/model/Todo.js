const mongoose =require("mongoose")
const Schema= mongoose.Schema;
const TodoSchema= new Schema({
    todo:String
})
module.exports=mongoose.model("Todo",TodoSchema)