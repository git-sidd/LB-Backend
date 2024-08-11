import { Todo } from "../models/todoModel.js";

export const deleteTodo= async(req,res)=>{
    try {
        const {id}=req.params;
        await Todo.findByIdAndDelete(id)
        
        res.status(200).json({
            success:true,
            message:"deleted Successfully!!",
            

        })
    } catch (error) {
        console.error(error)
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message,
            data:"internal server error!!"
        })
    }
}
