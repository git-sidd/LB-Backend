import { Todo } from "../models/todoModel.js";

const createTodo= async(req,res)=>{
    try {
        const {title,description}=req.body;
        //for inserting in database
        const response=await Todo.create({title,description})

        res.status(200).json(
            {
                success:true,
                message:"Data entered successfully",
                data:response
            }
        )
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
export default createTodo;