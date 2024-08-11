import { Todo } from "../models/todoModel.js";

export const updateTodo=async (req,res)=>{
    try {
        const {id}=req.params;
        const {title,description}=req.body
        const todo= await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description}
        )
        if(!todo){
            res.status(500)
            .json({
                success:false,
                message:"Error in updation",
            })
        }
        res.status(200).json({
            success:true,
            message:"updated successfully",
            data:todo
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