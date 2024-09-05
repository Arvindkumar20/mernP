import mongoose from "mongoose"
const dataSchema=mongoose.Schema({
    productName:{type:String,required:true},
    productPrice:{type:String,required:true},
    date:{type:Date}
},
{
    timestamps:true
    }
)
export const DataModel=mongoose.model("data",dataSchema);