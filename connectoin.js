import mongoose from "mongoose";
import "dotenv/config"
export const connetDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to db")
    } catch (error) {
       console.log("DB not connected") 
    }
}