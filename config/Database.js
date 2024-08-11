import mongoose from "mongoose";


const connectDB=()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Mongo DB connection successful!!")
    })
    .catch((error)=>{
        console.log("MongoDb connection Failed:")
        console.log(error.message);
        process.exit(1);
    })
}
export default connectDB;