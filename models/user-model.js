import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profilePicture:{type:String},
    bio:{type:String},
    products:[{type:mongoose.Schema.Types.ObjectId,ref:"Prduct"}]
})
export const User=mongoose.model("ProductUser",userSchema);