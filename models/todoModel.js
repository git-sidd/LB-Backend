import mongoose from "mongoose";

const todoSchema= mongoose.Schema({
    title:{
        type:String,
        maxLength:50,
        required:true,
    },
    description:{
        type:String,
        required:true,
        maxLength:50
    }
},{timestamps:true})
export const Todo= mongoose.model("Todo",todoSchema);