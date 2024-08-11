import { Todo } from "../models/todoModel.js";

export const getTodo= async(req,res)=>{
    try {
        const todos=await Todo.find({});
        
        res.status(200).json({
            success:true,
            message:"Todos Fetched Successfully",
            data:todos,
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

export const getTodoById= async(req,res)=>{
    try {
        const id=req.params.id;
        const todosid= await Todo.findById({_id:id})

        if(!todosid){
            res.status(404).json({
                success:false,
                message:"Todo Not Found !!",
            })
        }
        res.status(200).json({
            success:true,
            message:`Tod of ${id} found successfully!!`,
            data:todosid
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

